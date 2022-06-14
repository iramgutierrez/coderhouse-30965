const { options } = require('./db/mysql')
const knex = require('knex')(options)

knex
  .from('products')
  .select('name', 'price')
  .where('price', '>', 11)
  .then(products => {
    console.log(`Total de productos: ${products.length}`)
    products.forEach(product => {
      console.log(`Producto: ${product.name} con precio de $${product.price}`)
    })
  })
  .catch(err => console.log(`Error: ${err.message}`))
  .finally(() => knex.destroy())