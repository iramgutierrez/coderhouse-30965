const { options } = require('./db/mysql')
const knex = require('knex')(options)

knex
  .from('products')
  .where('stock', 21)
  .update({ stock: 25 })
  .then(products => {
    console.log(`Productos actualizados: ${products}`)
  })
  .catch(err => console.log(`Error: ${err.message}`))
  .finally(() => knex.destroy())