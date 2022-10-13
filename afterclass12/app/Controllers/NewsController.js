class NewsController {
  constructor (service) {
    this.service = service
  }

  getAll (req, res) {
    const page = req.query.page || 1
    const perPage = req.query.perPage || 5

    return this.service.getAll({page, perPage })
      .then(news => {
        /*const response = {
          news,
          links: {
            prev: page === 1 ? null : `http://localhost:8080/api/news?page=${+page-1}&perPage=${perPage}`,
            next: `http://localhost:8080/api/news?page=${+page+1}&perPage=${perPage}`
          }
        }*/
        res.json(news)
      })
      .catch(e => res.status(500).json({
        error: e.message
      }))
  }

  create (req, res) {
    const body = req.body

    return this.service.create(body)
      .then(newsItem => res.status(201).json(newsItem))
      .catch(e => res.status(500).json({
        error: e.message
      }))
  }

  getOne (req, res) {
    const id = req.params.id

    return this.service.getOne(id)
      .then(newsItem => res.json(newsItem))
      .catch(e => res.status(500).json({
        error: e.message
      }))
  }

  update (req, res) {
    const id = req.params.id
    const body = req.body

    return this.service.update(id, body)
      .then(newsItem => res.json(newsItem))
      .catch(e => res.status(500).json({
        error: e.message
      }))
  }

  delete (req, res) {
    const id = req.params.id

    return this.service.delete(id)
      .then(response => res.status(204).json(response))
      .catch(e => res.status(500).json({
        error: e.message
      }))
  }
}

module.exports = NewsController