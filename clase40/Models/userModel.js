const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  createdAt: { type: Date, required: true }
})

const userModel = mongoose.model('User', userSchema)

module.exports = userModel
