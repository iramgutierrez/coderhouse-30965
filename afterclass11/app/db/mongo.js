const mongoose = require('mongoose')
const config = require('../config/mongo')

let isConnected = false

module.exports = () => {
  if (isConnected) {
    return isConnected
  }

  const database = config()

  mongoose.connect(`mongodb://${database.host}:${database.port}/${database.name}`)

  isConnected = true

  return isConnected
}
