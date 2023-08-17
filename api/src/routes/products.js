const allProducts = require('../controllers/products/allProducts.js')
const detailProduct = require('../controllers/products/detailProduct.js')
const { Router } = require('express')
const router = Router()

router.get('/', allProducts)

router.get('/:id', detailProduct)

module.exports = router
