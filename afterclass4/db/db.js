const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: '192.168.64.2',
    user: 'root',
    password: '',
    database: 'clase16'
  }
})

module.exports = knex