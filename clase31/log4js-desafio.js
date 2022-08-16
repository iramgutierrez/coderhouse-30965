const express = require('express')
const loggerModule = require('./log4js-module')

const app = express()
const logger = loggerModule(process.env.NODE_ENV)

app.get('/suma', (req, res) => {
  let {a, b} = req.query

  const isValidA = !isNaN(a)
  if (!isValidA) {
    logger.error(`Se recibio un número inválido: ${a}`)
    return res.status(400).send(`El valor ${a} no es un número válido`)
  }
  const isValidB = !isNaN(b)
  if (!isValidB) {
    logger.error(`Se recibio un número inválido: ${b}`)
    return res.status(400).send(`El valor ${b} no es un número válido`)
  }

  const suma = parseInt(a) + parseFloat(b)
  logger.info('Operación exitosa!')
  return res.send(`El resultado es: ${suma}`)
})

app.get('/not-found', (req, res) => {
  logger.warn('Se recibio una petición a un recurso no válido.')
  return res.send('Página no encontrada')
})

app
  .listen(8080, () => console.log('Running'))
  .on('error', logger.error.bind(logger))