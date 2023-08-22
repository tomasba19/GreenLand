const { Router } = require('express')
const filterController = require('../controllers/filters/filterProduct')
const router = Router()

router
  .post('/', filterController.filterDynamic)
  .post('/name/', filterController.findByName)

module.exports = router
