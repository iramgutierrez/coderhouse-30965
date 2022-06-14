const { options } = require('./db/mysql')
const knex = require('knex')(options)

knex
  .from('products')
  .select('name', 'category_id', 'stock')
  .orderBy('stock', 'asc')
  .then(products => {
    console.log(`Total de productos: ${products.length}`)
    products.forEach(product => {
      console.log(`Producto: ${product.name} con stock de ${product.stock}`)
    })
  })
  .catch(err => console.log(`Error: ${err.message}`))
  .finally(() => knex.destroy())