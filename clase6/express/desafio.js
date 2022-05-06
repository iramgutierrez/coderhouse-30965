const express = require('express')
const moment = require('moment')

const app = express()

const PORT = 8080

let visitas = 0

app.get('/', (req, res) => {
  res.send(`<h1>Bienvenidos al servidor express</h1>`)
})

app.get('/visitas', (req, res) => {
  res.send(`La cantidad de visitas es ${++visitas}`)
})

app.get('/fyh', (req, res) => {
  const fyh = moment().format('DD/MM/YYYY HH:mm:ss')
  res.send({ fyh })
})

const server = app.listen(PORT, () => {
  console.log(`Servidor corriendo con Express en el puerto ${PORT}`)
})

server.on('error', error => console.log(`Error en servidor ${error}`))