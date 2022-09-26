class NewsDTO {
  constructor (newsItem) {
    this.id = newsItem.id || newsItem._id
    this.title = newsItem.title
    this.author = newsItem.author
    this.createdAt = newsItem.createdAt
  }
}

module.exports = NewsDTO