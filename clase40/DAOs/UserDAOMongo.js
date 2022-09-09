const userModel = require("../Models/userModel")

class UserDAOMongo {
  constructor () {
    this.model = userModel
  }

  async getAll () {
    return await this.model.find()
  }
}

module.exports = UserDAOMongo