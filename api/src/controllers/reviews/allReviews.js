const { Review, User } = require('../../database/config.js')
const allReviews = async (req, res) => {
  try {
    const reviews = await Review.findAll({
      include: [{
        model: User,
        attributes: ['id', 'name', 'image']
      }],
      attributes: { exclude: ['userId', 'productId'] }
    })
    res.json(reviews)
  } catch (error) {
    res.status(error.response?.status || 500).json({ error: error.message })
  }
}

module.exports = allReviews
