class ContenedorMySQL {
  constructor (options, table) {
    this.knex = require('knex')(options)
    this.table = table
  }

  findAll() {
    return this.knex
      .from(this.table)
      .select('*')
      .then(items => {
        console.log(items)
        return items
      })
  }

  find(id) {

  }

  create(data) {
    console.log({ data })
    return this.knex(this.table)
      .insert(data)
  }

  update(id, data) {

  }

  delete(id) {

  }
}

module.exports = ContenedorMySQL