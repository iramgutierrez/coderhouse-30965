const usersDAOFactory = require('../Factory/usersDAOFactory')
const UsersDTO = require('../DTOs/UsersDTO')

class UsersRepository {
  constructor () {
    this.dao = usersDAOFactory(process.env.STORAGE)
  }

  create (data) {
    return this.dao.create(data)
      .then(user => new UsersDTO(user))
  }

  findOne (query) {
    return this.dao.findOne(query)
      .then(user => new UsersDTO(user))
  }

  getOne (id) {
    return this.dao.getOne(id)
      .then(user => new UsersDTO(user))
  }
}

module.exports = UsersRepository