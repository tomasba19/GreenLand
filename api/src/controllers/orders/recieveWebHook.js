const mercadopago = require('mercadopago')

const receiveWebHook = async (req, res) => {
  try {
    const payment = req.query
    if (payment.type === 'payment') {
      const data = await mercadopago.payment.findById(payment['data.id'])
      console.log(data.response.additional_info.items)
      console.log(data.response)
    }
    res.send('webhook')
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = receiveWebHook
