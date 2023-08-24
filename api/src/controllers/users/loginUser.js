const bcrypt = require('bcrypt')
const { User } = require('../../database/config')
const generateJWT = require('../../utils/jwt')
const { loginUserSuccess } = require('../../utils/emails')

// Función para crear un usuario de terceros
async function createUserThird (name, email, picture, origin) {
  const userExist = await User.findOne({
    where: { email },
    attributes: { exclude: ['password'] }
  })

  if (userExist) {
    return { error: 'User already exists' }
  }

  const userCreated = await User.create(
    {
      name,
      email,
      image: picture,
      roleId: 2,
      origin
    },
    {
      attributes: { exclude: ['roleId', 'password'] }
    }
  )

  if (!userCreated) {
    return { error: 'Error creating user' }
  }

  const token = await generateJWT(userCreated.id)

  return {
    user: userCreated,
    token
  }
}

exports.signUpGoogle = async (req, res) => {
  const { name, email, picture } = req.body
  const result = await createUserThird(name, email, picture, 'google')

  if (result.error) {
    return res.status(400).json(result)
  }

  return res.json(result)
}

exports.signUpFacebook = async (req, res) => {
  const { name, email, picture } = req.body
  const result = await createUserThird(name, email, picture, 'facebook')

  if (result.error) {
    return res.status(400).json(result)
  }

  return res.json(result)
}

exports.loginGoogle = async (req, res) => {
  const { email } = req.body
  await this.login(req, res, email)
}

exports.loginFacebook = async (req, res) => {
  const { email } = req.body
  await this.login(req, res, email)
}

exports.login = async (req, res, email, password) => {
  const user = await User.findOne({ where: { email } })

  if (!user) {
    return res.status(404).json({ error: 'User not found' })
  }

  // Verificar si se está realizando un inicio de sesión local o de terceros
  if (password) {
    // Inicio de sesión local
    const validPassword = await bcrypt.compare(password, user.password)

    if (!validPassword) {
      return res.status(401).json({ error: 'Invalid password' })
    }
  }

  if (user.active === false) {
    return res.status(401).json({ error: 'User inactive' })
  }

  const token = await generateJWT(user.id)

  const emailSend = await loginUserSuccess(user.name, user.email)

  if (emailSend.success) return res.json({ user, token })

  res.json({
    user,
    token
  })
}

exports.loginBd = async (req, res) => {
  const { email, password } = req.body
  await this.login(req, res, email, password)
}
