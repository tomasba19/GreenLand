const bcrypt = require("bcrypt");
const { User } = require("../../database/config");
const generateJWT = require("../../utils/jwt");
const { decodeTokenOauth } = require("../../utils/decodeTokenOauth");

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

    if(user.active === false)
    {
        return res.status(401).json({ error: 'User inactive' })
    }
    
    const token = await generateJWT(user.id)

    res.json({
        user,
        token
    })

}

exports.signUpGoogle = async (req, res) => {
    const {tokenId} = req.body
    const { name, email, picture  } = await decodeTokenOauth(tokenId);
    
    const userExist = await User.findOne({
        where: { email }
    })

    if (userExist) {
        return res.status(400).json({ error: 'User already exists' })
    }
    
    const userCreated = await User.create(
      {
        name,
        email,
        image: picture,
        roleId: 2,
        origin: "google",
      },
      {
        attributes: { exclude: ["roleId", "password"] },
      }
    );
    
    if (!userCreated) {
      return res.status(404).json({ error: "Error creating user" });
    }

    const token = await generateJWT(userCreated.id)
    
    res.json({
        user: userCreated,
        token
    })

}

exports.loginGoogle = async (req, res) => {
    const { email } = await decodeTokenOauth(data);
    
    const userExist = await User.findOne({
        where: { email }
    })

    if (!userExist)
      return res
        .status(400)
        .json({ error: "¡A gmail account is not regiter for this user!" });

    if (userExist.active === false)
      return res
        .status(400)
        .json({ error: "¡A gmail account is not regiter for this user!" });

    const token = await generateJWT(userExist.id)

    res.json({
        user: userExist,
        token
    })
}
