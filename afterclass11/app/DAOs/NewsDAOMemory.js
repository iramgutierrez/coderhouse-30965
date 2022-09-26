class NewsDAOMemory {
  constructor () {
    this.news = []
  }

  getAll ({page, perPage }) {

    // 1, 5 ---> 0 , 4
    // 2, 5 ---> 5 , 9
    // 3, 5 ---> 10, 14
    const init = (page - 1 ) * perPage
    const limit = (page * perPage)

    console.log({ init, limit })

    return Promise.resolve(this.news.slice(init, limit))
  }

  create (data) {
    const total = this.news.length

    data.id = total + 1

    this.news.push(data)

    return Promise.resolve(data)
  }

  getOne (id) {
    const newsItem = this.news.find(newsItem => newsItem.id === parseInt(id))

    if (!newsItem) {
      return Promise.reject(new Error('Item not found'))
    }

    return Promise.resolve(newsItem)
  }

  update (id, data) {
    const index = this.news.findIndex(newsItem => newsItem.id === parseInt(id))

    if (index === -1) {
      return Promise.reject(new Error('Item not found'))
    }

    this.news[index] = Object.assign(this.news[index], data)

    return Promise.resolve(this.news[index])
  }

  delete (id) {
    const index = this.news.findIndex(newsItem => newsItem.id === parseInt(id))

    if (index === -1) {
      return Promise.reject(new Error('Item not found'))
    }

    this.news.splice(index, 1)

    return Promise.resolve(true)
  }
}

module.exports = NewsDAOMemory