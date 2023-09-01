const { Router } = require('express')
const createOrder = require('../controllers/orders/createOrder.js')
const receiveWebHook = require('../controllers/orders/recieveWebHook.js')
const allOrders = require('../controllers/orders/allOrders.js')
const ordenPerUser = require('../controllers/orders/orderPerUser.js')
const detailOrder = require('../controllers/orders/detailOrder.js')
const { protect } = require('../middlewares/auth.js')
const { restrictTo } = require('../middlewares/auth.js')
const router = Router()

router.get('/', protect, restrictTo('administrator'), allOrders)

router.get('/:id', detailOrder)

router.get('/user/:id', protect, restrictTo('administrator', 'guest'), ordenPerUser)

router.post('/', createOrder)

router.post('/webhook', receiveWebHook)

module.exports = router
