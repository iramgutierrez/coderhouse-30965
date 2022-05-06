const express = require('express')
const Contenedor = require('../../clase4/entregable/index')

const app = express()

app.get('/', (req, res) => {
  return res.send({ mensaje: 'Hola mundo' })
})

app.get('/productos', (req, res) => {
  return res.send('Endpoint de productos')
})

app.get('/contacto', (req, res) => {
  return res.send('Endpoint de contacto')
})

const PORT = 8080

const server = app.listen(PORT, () => {
  console.log(`Servidor HTTP con Express corriendo en el puerto ${PORT}`)
})

server.on('error', error => console.log(`Error en servidor: ${error}`))