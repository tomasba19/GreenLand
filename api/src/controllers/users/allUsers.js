const { User, Role } = require('../../database/config.js')
const allUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      include: [Role],
      attributes: {
        exclude: ['roleId']
      }
    })
    res.json(users)
  } catch (error) {
    res.status(error.response?.status || 500).json({ error: error.message })
  }
}
module.exports = allUsers
