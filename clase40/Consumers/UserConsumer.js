class UserConsumer {
  constructor (service) {
    this.service = service
  }

  async createUser (data) {
    try {
      const userCreated = await this.service.create(data)
      console.log('user created', userCreated)
    } catch (e) {
      console.log(e)
    }
  }
}

module.exports = UserConsumer
