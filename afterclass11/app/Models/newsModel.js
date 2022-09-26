const mongoose = require('mongoose')

const newsSchema = mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  createdAt: { type: Date, required: true }
})

const newsModel = mongoose.model('News', newsSchema)

module.exports = newsModel