class NewsResolver {
  constructor (service) {
    this.service = service
  }

  getNews () {
    return this.service.getAll({})
  }

  createNewsItem({ data }) {
    return this.service.create(data)
  }
}

module.exports = NewsResolver