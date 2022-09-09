class BaseRepository {
  constructor (model) {
    this.model = model
  }

  async getAll () {
    return await this.model.find()
  }

  async create (data) {
    return await this.model.create(data)
  }
}

module.exports = BaseRepository