const { User, Role, Product, Category } = require('./config')
const bcrypt = require('bcrypt')
const users = require('../utils/users.json')
const roles = require('../utils/roles.json')
const products = require('../utils/products.json')
const categories = require('../utils/categories.json')

const insertData = async (Model, data, name) => {
  if (name === 'usuarios') {
    const saltRounds = 10
    for (const user of data) {
      if (user.password) {
        user.password = await bcrypt.hash(user.password, saltRounds)
      }
    }
  }
  try {
    await Model.bulkCreate(data)
  } catch (error) {
    console.error(`Error al insertar ${name}:, ${error.message}`)
  }
}

const seedDatabase = async () => {
  await insertData(Category, categories, 'categorias')
  await insertData(Product, products, 'productos')
  await insertData(Role, roles, 'roles')
  await insertData(User, users, 'usuarios')
}

module.exports = seedDatabase
