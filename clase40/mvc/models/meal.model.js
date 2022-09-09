const mongoose = require('mongoose')

const mealMdel = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  type: { type: String, required: true },
  price: { type: String, required: true }
})

module.exports = mongoose.model('Meal', mealMdel)
