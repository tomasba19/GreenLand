const allProducts = require('../controllers/products/allProducts.js')
const upload = require('../config/multer.js')

const { Router } = require('express')
const router = Router()

router.get('/', allProducts)

router.post('/', upload.fields([{ name: 'image', maxCount: 1 }]), (req, res) => {
  const { name, email } = req.body
  const image = req.files.image

  if (image && image.length > 0) {

  }
})

module.exports = router
