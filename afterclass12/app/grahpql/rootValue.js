
const NewsRepository = require('../Repositories/NewsRepository')
const NewsService = require('../Services/NewsService')
const NewsResolver = require('../Resolvers/NewsResolver')

module.exports = () => {
  const newsRepository = new NewsRepository()
  const newsService = new NewsService(newsRepository)
  const newsResolver = new NewsResolver(newsService)

  return {
    getNews: newsResolver.getNews.bind(newsResolver),
    createNewsItem: newsResolver.createNewsItem.bind(newsResolver)
  }
}