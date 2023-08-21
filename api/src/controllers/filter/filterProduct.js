const { getAllProducts } = require('../../utils/getProduct.js')
const { Op } = require('sequelize')

exports.filterDynamic = async (req, res) => {
  // Filtrar por categoría si se proporciona
  const filterCriterias = req.body
  try {
    let filteredProducts = await getAllProducts()

    if (filterCriterias.categories && filterCriterias.categories.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        filterCriterias.categories.includes(product.category.id)
      )
    }

    // Filtrar por nombre si se proporciona
    if (filterCriterias.name) {
      filteredProducts = filteredProducts.filter((product) =>
        product.name.toLowerCase() === filterCriterias.name.toLowerCase()
      )
    }

    // Filtar por rating de mas de 4 estrellas
    if (filterCriterias.bestSeller) {
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.dataValues.rating >= 4
      )
    }

    // Filtar por rango de precio
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.price >= parseFloat(filterCriterias.minPrice) &&
        product.price <= parseFloat(filterCriterias.maxPrice)
    )

    // Ordenar productos
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.price >= parseFloat(filterCriterias.minPrice) &&
        product.price <= parseFloat(filterCriterias.maxPrice)
    )

    res.json(filteredProducts)
  } catch (error) {
    res.status(error.response?.status || 500).json({ error: error.message })
  }
}

exports.findByName = async (req, res) => {
  const { name } = req.body
  try {
    const product = await getAllProducts({
      name: {
        [Op.iLike]: `%${name}%`
      }
    })

    if (product && product.length > 0) {
      res.json({
        product,
        message: 'Product found'
      })
    } else {
      res.status(404).json({ error: 'Product not found' })
    }
  } catch (error) {
    res.status(error.response?.status || 500).json({ error: error.message })
  }
}
