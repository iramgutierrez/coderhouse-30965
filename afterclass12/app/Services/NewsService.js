const NewsValidator = require('../Validators/NewsValidator')

class NewsService {
  constructor (repository) {
    this.repository = repository
    this.validator = new NewsValidator()
  }

  getAll ({page, perPage }) {
    return this.repository.getAll({page, perPage })
      .then(news => {
        console.log(news)
        return news
      })
  }

  create (data) {
    data.createdAt = new Date()
    
    return this.validator.validate(data)
      .then(_ => this.repository.create(data))
      .then(newsItem => {
        console.log(newsItem)

        return newsItem
      })
  }

  getOne (id) {
    return this.repository.getOne(id)
      .then(newsItem => {
        console.log(newsItem)

        return newsItem
      })
  }

  update (id, data) {
    return this.repository.update(id, data)
      .then(newsItem => {
        console.log(newsItem)

        return newsItem
      })
  }

  delete (id) {
    const newsMessage = {
      action: 'delete',
      entity: 'news',
      entityId: id,
      date: new Date()
    }
    return this.repository.delete(id)
      .then(response => this.audit.create(newsMessage))
      .then(response => this.email.send(newsMessage))
      .then(response => this.producer.sendMessage(newsMessage))
  }


}

module.exports = NewsService