const ContenedorMySQL = require("../../contenedores/ContenedorMySQL")
const options = require('../../mysql')

class UsersDAOMySQL extends ContenedorMySQL {
  constructor() {
    super(options, 'users')
  }
}

module.exports = UsersDAOMySQL