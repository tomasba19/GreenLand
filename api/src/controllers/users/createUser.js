const bcrypt = require('bcrypt')
const uploadFile = require('../../utils/uploadFile.js')
const { User } = require('../../database/config.js')
const generateJWT = require('../../utils/jwt.js')
const { newUserEmail } = require('../../utils/emails.js')

const createUser = async (req, res) => {
  const { name, email, password } = req.body
  const image = req.files.image
  if (!name || !email || !password || !image) return res.status(400).json({ error: 'Incomplete required data' })
  try {
    const user = await User.findOne({ where: { email } })

    if (user) return res.status(409).json({ error: 'User already exists' })
    const saltRounds = 10
    const passwordHash = await bcrypt.hash(password, saltRounds)
    const { downloadURL } = await uploadFile(image[0])

    const userCreate = await User.create({
      name,
      email,
      image: downloadURL,
      password: passwordHash,
      roleId: 2
    })

    await generateJWT(userCreate.id)

    await newUserEmail(userCreate.name, userCreate.email)

    res.json({ message: 'User created sucessfully' })
  } catch (error) {
    return res.status(error.response?.status || 500).json({ error: error.message })
  }
}

module.exports = createUser
