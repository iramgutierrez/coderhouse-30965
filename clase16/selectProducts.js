const { options } = require('./db/mysql')
// const { options } = require('./db/sqlite')
const knex = require('knex')(options)

knex
  .from('products')
  .select('*')
  .then(products => {
    console.log(products)
    console.log(`Total de productos: ${products.length}`)
    products.forEach(product => {
      console.log(`Producto: ${product.name} con precio de $${product.price} y stock de ${product.stock}`)
    })
  })
  .catch(err => console.log(`Error: ${err.message}`))
  .finally(() => knex.destroy())