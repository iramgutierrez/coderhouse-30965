const options = {
  client: 'mysql',
  connection: {
    host: '192.168.64.2',
    user: 'root',
    password: '',
    database: 'clase16'
  }
}

const knex = require('knex')(options)

const getProducts = () => {
  return knex
    .from('products')
    .select('products.*', 'categories.name as category_name')
    .join('categories', { 'products.category_id': 'categories.id' })
    .then(products => {
      console.log(`Total de productos: ${products.length}`)
      return products
    })
}

const createProduct = data => {
  return knex('products')
    .insert(data)
}

module.exports = {
  getProducts,
  createProduct
}

