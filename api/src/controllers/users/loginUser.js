const bcrypt = require("bcrypt");
const { User } = require("../../database/config");
const generateJWT = require("../../utils/jwt");

exports.login = async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne(
        { where: { email },
        }
    )
    if (!user) {
        return res.status(404).json({ error: 'User not found' })
    }
    
    const validPassword = await bcrypt.compare(password, user.password)
    
    if (!validPassword) {
        return res.status(401).json({ error: 'Invalid password' })
    }

    const token = await generateJWT(user.id)

    res.json({
        user,
        token
    })

}