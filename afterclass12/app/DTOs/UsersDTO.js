class UsersDTO {
  constructor (user) {
    this.id = user.id || newsItem._id
    this.name = user.name
    this.username = user.username
    this.createdAt = user.createdAt
  }
}

module.exports = UsersDTO