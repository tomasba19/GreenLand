const { Router } = require('express')
const upload = require('../config/multer.js')
const createUser = require('../controllers/users/createUser.js')
const router = Router()

router.post('/', upload.fields([{ name: 'image', maxCount: 1 }]), createUser)

module.exports = router
