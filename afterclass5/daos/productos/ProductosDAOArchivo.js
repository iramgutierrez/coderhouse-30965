const ContenedorArchivo = require("../../contenedores/ContenedorArchivo");

class ProductosDAOArchivo extends ContenedorArchivo {
  constructor() {
    super('./products.json')
  }
}

module.exports = ProductosDAOArchivo