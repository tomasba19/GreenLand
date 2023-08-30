const { Product } = require('../../database/config.js')

const deleteProduct = async (req, res) => {
  const { id } = req.params
  if (!/^\d+$/.test(id)) {
    return res.status(400).json({ error: 'ID must be a valid number' })
  }
  try {
    const product = await Product.findByPk(id)
    if (!product) return res.status(404).json({ error: `Product with id: ${id}, not found` })
    await product.update({ active: false })
    res.json({ message: 'Product successfully inactivated' })
  } catch (error) {
    res.status(error.response?.status || 500).json({ error: error.message })
  }
}

module.exports = deleteProduct
