const mercadopago = require('mercadopago')
require('dotenv').config()
const { SERVER_URL, CLIENT_URL, PAY_TOKEN } = process.env
const createOrder = async (req, res) => {
  const { userId, products } = req.body
  mercadopago.configure({
    access_token: PAY_TOKEN
  })
  const result = await mercadopago.preferences.create({
    items: products,
    payer: { email: 'wilmerandressotoalmeida@gmail.com' },
    back_urls: {
      success: `${CLIENT_URL}/shop`,
      failure: `${CLIENT_URL}/shop`,
      pending: `${CLIENT_URL}/shop`
    },
    auto_return: 'approved',
    binary_mode: true,
    notification_url: `${SERVER_URL}/orders/webhook`,
    external_reference: userId.toString()
  })
  res.send(result.body.init_point)
}

module.exports = createOrder
