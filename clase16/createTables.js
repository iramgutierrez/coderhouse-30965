const { options } = require('./db/mysql')
// const { options } = require('./db/sqlite')

const knex = require('knex')(options)

knex
  .schema
  .createTable('categories', table => {
    table.increments('id')
    table.string('name', 30)
  })
  .then(() => {
    console.log('Tabla de categorías creada')
    return knex.schema.createTable('products', table => {
      table.increments('id')
      table.string('name', 30)
      table.float('price')
      table.string('description', 255)
      table.integer('stock')
      table.integer('category_id').unsigned().references('categories.id')
    })
  })
  .then(() => {
    console.log('Tabla de productos creada')
  })
  .catch(err => console.log(`Error: ${err.message}`))
  .finally(() => knex.destroy())
