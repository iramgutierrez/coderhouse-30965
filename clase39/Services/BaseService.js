class BaseService {
  constructor (repository) {
    this.repository = repository
  }

  async getAll () {
    return await this.repository.getAll()
  }

  async create (data) {
    data.createdAt = new Date()
    const itemCreated = await this.repository.create(data)
    return itemCreated
  }
}

module.exports = BaseService
