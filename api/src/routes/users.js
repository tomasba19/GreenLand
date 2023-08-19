const { Router } = require('express')
const upload = require('../config/multer.js')
const createUser = require('../controllers/users/createUser.js')
const {login} = require('../controllers/users/loginUser.js')
const {protect} = require('../middlewares/auth.middleware.js') // se tiene que pasar un token por authorizacion para pasar el protect
const { restrictTo } = require("../middlewares/auth.middleware.js"); // el rol nos indica que tipo de usuario puede acceder
const router = Router()

router
  .post("/", upload.fields([{ name: "image", maxCount: 1 }]), createUser)
  .post("/login", login); // ejemplo 
//protect, restrictTo("administrator")

module.exports = router
