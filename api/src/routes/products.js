const allProducts = require('../controllers/products/allProducts.js')

const { Router } = require('express')
const router = Router()

router.get('/', allProducts)

module.exports = router
