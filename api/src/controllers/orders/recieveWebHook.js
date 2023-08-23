const mercadopago = require('mercadopago')
const { db, Order, DetailOrder, Product } = require('../../database/config.js')

const receiveWebHook = async (req, res) => {
  const payment = req.query
  try {
    if (payment.type === 'payment') {
      const data = await mercadopago.payment.findById(payment['data.id'])
      const { external_reference: userId, status, date_approved: date } = data.response

      if (status === 'approved') {
        const { items } = data.response.additional_info

        const totalPrice = items.reduce((accumulator, product) => accumulator + parseInt(product.unit_price), 0)

        const order = await Order.create({ date, totalPrice, status, userId })

        // Guardar detail en db
        const details = items.map(product => {
          return {
            quantity: parseInt(product.quantity),
            price: parseInt(product.unit_price),
            productId: parseInt(product.id),
            orderId: order.id
          }
        })

        const detailOrder = await DetailOrder.bulkCreate(details)

        // Actualizar Stock
        for (const detail of detailOrder) {
          const { productId, quantity } = detail
          await Product.update(
            { stock: db.literal(`stock - ${quantity}`) },
            { where: { id: productId } }
          )
        }
      }
      if (status === 'rejected') {
        return res.json({ message: 'rejected payment' })
      }
    }
    res.json({ message: 'processing payment...' })
  } catch (error) {
    res.status(error.response?.status || 500).json({ error: error.message })
  }
}

module.exports = receiveWebHook
