const bcrypt = require('bcrypt')
const uploadFile = require('../../utils/uploadFile.js')
const { User, Role } = require('../../database/config.js')
const generateJWT = require('../../utils/jwt.js')
const { newUserEmail } = require('../../utils/emails.js')

const createUser = async (req, res) => {
  const { name, email, password, role, origin } = req.body
  const image = req.files.image
  if (!name || !email || !password || !!image || !role) return res.status(400).json({ error: 'Incomplete required data' })
  try {
    const saltRounds = 10
    const passwordHash = await bcrypt.hash(password, saltRounds)
    const { downloadURL } = await uploadFile(image[0])

    const userCreate = await User.create({
      name,
      email,
      image: downloadURL,
      password: passwordHash,
      roleId: role
    })
    if (origin) userCreate.origin = origin

    const user = await User.findOne({
      where: { id: userCreate.id },
      include: Role,
      attributes: { exclude: ['roleId', 'password'] }
    })

    const token = await generateJWT(user.id)

    const emailSend = await newUserEmail(user.name, user.email)

    if (emailSend.success) return res.json({ user, token })

    return res.status(emailSend.status).json({ error: emailSend.message })
  } catch (error) {
    return res.status(error.response?.status || 500).json({ error: error.message })
  }
}

module.exports = createUser
