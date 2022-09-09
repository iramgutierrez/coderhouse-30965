const BaseRepository = require('./BaseRepository')

let instance = null
class UserRepository extends BaseRepository {
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
