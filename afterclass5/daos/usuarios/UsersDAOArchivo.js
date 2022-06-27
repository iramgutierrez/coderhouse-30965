const ContenedorArchivo = require("../../contenedores/ContenedorArchivo");

class UsersDAOArchivo extends ContenedorArchivo {
  constructor() {
    super('./users.json')
  }
}

module.exports = UsersDAOArchivo