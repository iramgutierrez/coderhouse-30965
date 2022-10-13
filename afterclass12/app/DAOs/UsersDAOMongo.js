const db = require('../db/mongo')

class UsersDAOMongo {
  constructor (model) {
    db()
    this.model = model
  }

  create (data) {
    return this.model.create(data)
  }

  findOne(query) {
    return this.model.findOne(query)
      .then(user => {
        if (!user) {
          throw new Error('Item not found')
        }

        return user
      })
  }

  getOne (id) {
    return this.model.findById(id)
      .then(user => {
        if (!user) {
          throw new Error('Item not found')
        }

        return user
      })
  }
}

module.exports = UsersDAOMongo