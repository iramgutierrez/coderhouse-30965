const fs = require('fs')

class ContenedorArchivo {
  constructor (name) {
    this.name = name
  }

  findAll() {
    return fs.promises.readFile(this.name, 'utf-8')
      .then(itemsString => JSON.parse(itemsString))
  }

  find(id) {

  }

  create(data) {
    return this.findAll()
      .then(items => {
        items.push(data)
        const dataString = JSON.stringify(items, null, 2)
        return fs.promises.writeFile(this.name, dataString)
      })
  }

  update(id, data) {

  }

  delete(id) {

  }
}

module.exports = ContenedorArchivo