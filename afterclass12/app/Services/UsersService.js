const UsersValidator = require('../Validators/UsersValidator')
const jwt = require('jsonwebtoken')

class UsersService {
  constructor (repository) {
    this.repository = repository
    this.validator = new UsersValidator()
  }

  create (data) {
    data.createdAt = new Date()
    
    return this.validator.validate(data)
      .then(_ => this.repository.create(data))
  }

  signUp (data) {
    data.createdAt = new Date()
    
    return this.create(data)
      .then(user => {
        const token = this._generateToken(Object.assign({}, user))
        return Object.assign(user, { token })
      })
  }

  login (body) {
    const query = {
      username: body.username
    }
    return this.repository.findOne(query)
      .then(user => {
        const token = this._generateToken(Object.assign({}, user))
        return Object.assign(user, { token })
      })
  }

  verifyIfExists (body) {
    const query = {
      username: body.username
    }
    return this.repository.findOne(query)
      .then(user => true)
      .catch(err => false)
  }

  getOne (id) {
    return this.repository.getOne(id)
  }

  _generateToken(payload) {
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '24h' })
  }
}

module.exports = UsersService