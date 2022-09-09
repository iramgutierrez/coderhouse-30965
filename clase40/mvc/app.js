const express = require('express')
const mongoose = require('mongoose')
const winston = require('winston')
const compression = require('compression')

const mealRouter = require('./routes/meal.router')

require('dotenv').config()

const { fn } = require('./config/database')
const app = express()
app.use(compression())
app.set('view engine', 'pug')
app.use('/', mealRouter)

const PORT = process.argv[2] || 3000

const init = async () => {
  const database = fn(process.env)
  mongoose.connect(`mongodb://${database.host}:${database.port}/${database.name}`)

  const logger = winston.createLogger({
    level: 'warn',
    transports: [
      new winston.transports.Console({ level: 'verbose' })
    ]
  })

  app.get('', (req, res) => {
    return res.json({ date: new Date() })
  })

  app
    .listen(PORT, () => logger.info(`Aplicación corriendo en el puerto ${PORT}`))
    .on('error', err => logger.error(err))
}

init()
