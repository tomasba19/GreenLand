const allProducts = require('../controllers/products/allProducts.js')
const detailProduct = require('../controllers/products/detailProduct.js')
const newProduct = require('../controllers/products/newProduct.js')
const upload = require('../config/multer.js')
const { Router } = require('express')
const router = Router()

router.get('/', allProducts)

router.get('/:id', detailProduct)

router.post('/', upload.fields([{ name: 'image', maxCount: 1 }]), newProduct)

module.exports = router
