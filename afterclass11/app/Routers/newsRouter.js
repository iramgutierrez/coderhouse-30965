const { Router } = require('express')

const NewsRepository = require('../Repositories/NewsRepository')
const NewsService = require('../Services/NewsService')
const NewsController = require('../Controllers/NewsController')


const newsRouterFn = () => {
  const newsRepository = new NewsRepository()
  const newsService = new NewsService(newsRepository)
  const newsController = new NewsController(newsService)

  const newsRouter = Router()

  newsRouter.get('/', newsController.getAll.bind(newsController))
  newsRouter.post('/', newsController.create.bind(newsController))
  newsRouter.get('/:id', newsController.getOne.bind(newsController))
  newsRouter.put('/:id', newsController.update.bind(newsController))
  newsRouter.delete('/:id', newsController.delete.bind(newsController))

  return newsRouter
}

module.exports = newsRouterFn
