const mysqlConfig = {
  client: 'mysql',
  connection: {
    host: '192.168.64.2',
    user: 'root',
    password: '',
    database: 'ecommerce'
  }
}

const sqliteConfig = {
  client: 'sqlite3',
  connection: { filename: './mydb.desafio.sqlite' }
}

const knex = require('knex')(sqliteConfig)

knex.schema.dropTableIfExists('articulos')
  .then(() => {
    return knex.schema.createTable('articulos', table => {
      table.increments('id')
      table.string('nombre', 15).notNullable()
      table.string('codigo', 10).notNullable()
      table.float('precio')
      table.integer('stock')
    })
  })
  .then(() => {
    console.log('Tabla de articulos creada')

    const articulos = [
      { nombre: 'Coca Cola', codigo: 'abc', precio: 12.22, stock: 20},
      { nombre: 'Palomitas', codigo: 'def', precio: 2.12, stock: 20},
      { nombre: 'Agua mineral', codigo: 'ghi', precio: 33.1, stock: 20},
      { nombre: 'Caramelos', codigo: 'jkl', precio: 3.11, stock: 20},
      { nombre: 'Mantecada', codigo: 'mno', precio: 7.80, stock: 20}
    ]
    
    return knex('articulos').insert(articulos)
  })
  .then(() => {
    console.log('Articulos insertados')
    return knex.from('articulos').select('*')
  })
  .then(articulos => {
    console.log(articulos)
    return knex.from('articulos').where('id', 3).del()
  })
  .then(() => {
    console.log('Articulo eliminado')
    return knex
      .from('articulos')
      .where('id', 2)
      .update({ stock: 0 })
  })
  .then(() => {
    console.log('Articulo actualizado')
  })
  .catch(err => console.log(`Error: ${err.message}`))
  .finally(() => knex.destroy())