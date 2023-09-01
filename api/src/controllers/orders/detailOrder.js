const { DetailOrder, Order, Product, User } = require('../../database/config.js')

const detailOrder = async (req, res) => {
  const { id } = req.params
  if (!/^\d+$/.test(id)) {
    return res.status(400).json({ error: 'ID must be a valid number' })
  }
  try {
    const order = await Order.findOne({
      include: [{
        model: User,
        attributes: ['id', 'name', 'email']
      }],
      attributes: {
        exclude: ['userId']
      }
    })
    const detailOrder = await DetailOrder.findAll({
      where: { orderId: id },
      include: [{
        model: Product,
        attributes: ['name']
      }],
      attributes: {
        exclude: ['orderId', 'productId']
      }

    })
    if (!order) return res.status(404).json({ error: `Order with id: ${id}, not found` })
    if (!detailOrder) return res.status(404).json({ error: `Detail order with order id: ${id}, not found` })
    res.json({
      order,
      detailOrder
    })
  } catch (error) {
    res.status(error.response?.status || 500).json({ error: error.message })
  }
}

module.exports = detailOrder
