const newsDAOFactory = require('../Factory/newsDAOFactory')
const NewsDTO = require('../DTOs/NewsDTO')

class NewsRepository {
  constructor () {
    this.dao = newsDAOFactory(process.env.STORAGE)
  }

  getAll ({page, perPage }) {
    return this.dao.getAll({page, perPage })
      .then(news => news.map(newsItem => new NewsDTO(newsItem)))
  }

  create (data) {
    return this.dao.create(data)
      .then(newsItem => new NewsDTO(newsItem))
  }

  getOne (id) {
    return this.dao.getOne(id)
      .then(newsItem => new NewsDTO(newsItem))
  }

  update (id, data) {
    return this.dao.update(id, data)
      .then(newsItem => new NewsDTO(newsItem))
  }

  delete (id) {
    return this.dao.delete(id)
  }
}

module.exports = NewsRepository