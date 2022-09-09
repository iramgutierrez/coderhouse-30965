const UserDTO = require('../DTOs/UserDTO')
const UserNameDTO = require('../DTOs/UserNameDTO')
const userDaOFactory = require('../Factories/userDaOFactory')
const BaseRepository = require('./BaseRepository')

let instance = null
class UserRepository {
  constructor () {
    this.dao = userDaOFactory(process.env.STORAGE)
  }

  async getAll () {
    const users = await this.dao.getAll()

    const usersDTO = users.map(user => new UserDTO(user))

    return usersDTO
  }

  async getNames () {
    const users = await this.dao.getAll()

    const usersDTO = users.map(user => new UserNameDTO(user))

    return usersDTO
  }

  async create (data) {
    return await this.model.create(data)
  }

  findByEmail (email) {

  }

  static getInstance (model) {
    if (instance) {
      console.log('reutilizamos instancia')
      return instance
    }
    console.log('generamos instancia')
    instance = new UserRepository(model)

    return instance
  }
}

module.exports = UserRepository
