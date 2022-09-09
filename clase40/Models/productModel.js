const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  quantity: { type: Number, required: true },
  createdAt: { type: Date, required: true }
})

const productModel = mongoose.model('Product', productSchema)

module.exports = productModel
