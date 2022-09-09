const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

const userRouter = require('./Routers/userRouter')
const consumers = require('./Consumers/index')
const database = require('./config/database')
const kafka = require('./config/kafka')

;(async () => {
  await consumers(kafka)
  await mongoose.connect(`mongodb://${database.host}:${database.port}/${database.name}`)

  const app = express()

  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))

  app.use('/api/users', userRouter)

  const PORT = process.env.PORT || 8080

  app.listen(PORT, () => console.log(`Servidor esta escuchando en el puerto ${PORT}`))
})()
