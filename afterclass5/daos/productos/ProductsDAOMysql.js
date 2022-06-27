const ContenedorMySQL = require("../../contenedores/ContenedorMySQL")
const options = require('../../mysql')

class ProductosDAOMySQL extends ContenedorMySQL {
  constructor() {
    super(options, 'products')
  }
}

module.exports = ProductosDAOMySQL