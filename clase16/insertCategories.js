const { options } = require('./db/mysql')
//const { options } = require('./db/sqlite')
const knex = require('knex')(options)

const categories = [
  { name: 'Bebidas'},
  { name: 'Snack'},
  { name: 'Cereal'},
  { name: 'Dulces'},
  { name: 'Pan'},
]

knex('categories')
  .insert(categories)
  .then(() => console.log(`Categorías insertadas`))
  .catch(err => console.log(`Error: ${err.message}`))
  .finally(() => knex.destroy())


 
