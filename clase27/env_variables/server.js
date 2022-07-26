const express = require('express')
const config = require('./config')

const app = express()

app.get('/', (req, res) => {
  return res.json({
    mode: config.mode,
    path: process.env.PATH
  })
})

app.listen(config.port, config.host, () => {
  console.log(`Servidor escuchando en http://${config.host}:${config.port}`)
})