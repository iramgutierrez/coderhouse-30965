const mongoose = require('mongoose')

const usersSchema = mongoose.Schema({
  name: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  createdAt: { type: Date, required: true }
})

const usersModel = mongoose.model('Users', usersSchema)

module.exports = usersModel