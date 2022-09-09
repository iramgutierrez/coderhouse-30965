class UserDTO {
  constructor (user) {
    this.name = user.name
    this.email = user.email
    this.lastname = user.lastname
  }
}

module.exports = UserDTO