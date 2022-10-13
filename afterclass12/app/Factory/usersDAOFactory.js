const usersModel = require('../Models/usersModel')
const UsersDAOMongo = require('../DAOs/UsersDAOMongo')

const storageMapper = {
  mongo: () => new UsersDAOMongo(usersModel)
}

module.exports = storage => {
  const storageFn = storageMapper[storage] || storageMapper.memory

  const dao = storageFn()

  console.log({ dao })

  return dao
}