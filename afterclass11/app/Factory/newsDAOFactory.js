const newsModel = require('../Models/newsModel')
const NewsDAOMemory = require('../DAOs/NewsDAOMemory')
const NewsDAOMongo = require('../DAOs/NewsDAOMongo')

const storageMapper = {
  memory: () => new NewsDAOMemory(),
  mongo: () => new NewsDAOMongo(newsModel)
}

module.exports = storage => {
  const storageFn = storageMapper[storage] || storageMapper.memory

  const dao = storageFn()

  console.log({ dao })

  return dao
}