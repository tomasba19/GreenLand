const mercadopago = require('mercadopago')
require('dotenv').config()
const { CLIENT_URL, PAY_TOKEN } = process.env
const createOrder = async (req, res) => {
  mercadopago.configure({
    access_token: PAY_TOKEN
  })
  const result = await mercadopago.preferences.create({
    items: req.body,
    back_urls: {
      success: `${CLIENT_URL}/shop`,
      failure: `${CLIENT_URL}/shop`,
      pending: `${CLIENT_URL}/shop`
    },
    auto_return: 'approved',
    binary_mode: true
    // notification_url: 'https://3716-190-84-116-213.ngrok.io/orders/webhook' #pending ngrok
  })
  res.send(result.body.init_point)
}

module.exports = createOrder
