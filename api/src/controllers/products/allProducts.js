const { Product, Category } = require('../../database/config.js')

const allProducts = async (req, res) => {
  try {
    const products = await Product.findAll({ include: Category, attributes: { exclude: ['categoryId'] } })
    res.json(products)
  } catch (error) {
    res.status(error.response?.status || 500).json({ error: error.message })
  }
}

module.exports = allProducts
