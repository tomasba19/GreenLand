const { Router } = require('express')
const upload = require('../config/multer.js')
const createUser = require('../controllers/users/createUser.js')
const { loginThirdUser, loginUser, verifyUser } = require('../controllers/users/loginUser.js')
const allUsers = require('../controllers/users/allUsers.js')
const deleteUser = require('../controllers/users/deleteUser.js')
const { protect } = require('../middlewares/auth.js')
const { restrictTo } = require('../middlewares/auth.js')
const router = Router()

router.get('/', protect, restrictTo('administrator'), allUsers)
router.delete('/:id', protect, restrictTo('administrator'), deleteUser)
router.post('/', upload.fields([{ name: 'image', maxCount: 1 }]), createUser)
router.post('/login', loginUser)
router.post('/loginThird', loginThirdUser)
router.get('/verify', verifyUser)
// ejemplo
// protect, restrictTo("administrator")

module.exports = router
