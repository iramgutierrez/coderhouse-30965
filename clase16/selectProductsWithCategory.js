const { options } = require('./db/mysql')
const knex = require('knex')(options)

knex
  .from('products')
  .select('products.*', 'categories.name as category_name')
  .join('categories', { 'products.category_id': 'categories.id' })
  .then(products => {
    console.log(`Total de productos: ${products.length}`)
    products.forEach(product => {
      console.log(`Producto: ${product.name} con precio de $${product.price} y stock de ${product.stock}`)
    })
  })
  .catch(err => console.log(`Error: ${err.message}`))
  .finally(() => knex.destroy())