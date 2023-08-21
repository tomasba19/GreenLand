const { db, Product, Category } = require('../../database/config.js')

const allProducts = async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [Category],
      attributes: {
        exclude: ['categoryId'],
        include: [
          [
            db.literal(`(
              SELECT AVG(review."rating")
              FROM reviews AS review
              WHERE
                  review."productId" = product.id
          )`),
            'rating'
          ]
        ]
      }
    })
    res.json(products)
  } catch (error) {
    res.status(error.response?.status || 500).json({ error: error.message })
  }
}

module.exports = allProducts
