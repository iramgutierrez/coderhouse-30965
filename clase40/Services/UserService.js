const BaseService = require('./BaseService')

class UserService {
  constructor (repository) {
    this.repository = repository
  }

  async getAll () {
    const users = await this.repository.getAll()
    console.log({ users })
    return users
  }

  async create (data) {
    data.createdAt = new Date()
    const itemCreated = await this.repository.create(data)
    return itemCreated
  }
}

module.exports = UserService
