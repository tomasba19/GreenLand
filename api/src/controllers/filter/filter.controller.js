const Product = require("../models/Product");
const { Products } = require("../database/config");

exports.filterDynamic = async (req, res) => {
  const { Op } = require("sequelize");
  const filterCriterias = req.body;

  // Construir la consulta Sequelize
  const filteredProducts = await Product.findAll({
    where: {
      ...(filterCriterias.categories && {
        id: { [Op.in]: filterCriterias.categories },
      }),
      ...(filterCriterias.name && {
        name: { [Op.iLike]: `%${filterCriterias.name}%` },
      }),
      ...(filterCriterias.priceRange && {
        price: {
          [Op.gte]: 0,
          [Op.lte]: parseFloat(filterCriterias.priceRange),
        },
      }),
    },
    order: [
      ...(filterCriterias.order === "priceLowToHigh" ? [["price", "ASC"]] : []),
      ...(filterCriterias.order === "priceHighToLow"
        ? [["price", "DESC"]]
        : []),
    ],
  });

  res.json({
    filteredProducts,
  });

};
