const db = require('../db/mongo')

class NewsDAOMongo {
  constructor (model) {
    db()
    this.model = model
  }

  getAll () {
    return this.model.find()
  }

  create (data) {
    return this.model.create(data)
  }

  getOne (id) {
    return this.model.findById(id)
      .then(newsItem => {
        if (!newsItem) {
          throw new Error('Item not found')
        }

        return newsItem
      })
  }

  update (id, data) {
    return this.model.findByIdAndUpdate(id, { $set: data })
      .then(newsItem => {
        if (!newsItem) {
          throw new Error('Item not found')
        }

        return newsItem
      })
  }

  delete (id) {
    return this.model.findByIdAndDelete(id)
      .then(newsItem => {
        if (!newsItem) {
          throw new Error('Item not found')
        }

        return true
      })
  }


}

module.exports = NewsDAOMongo