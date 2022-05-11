const express = require('express')

const app = express()

app.get('/api/sumar/:num1/:num2', (req, res) => {
  return res.send({ suma: Number(req.params.num1) + Number(req.params.num2) })
})

app.get('/api/sumar', (req, res) => {
  return res.send({ suma: Number(req.query.num1) + Number(req.query.num2) })
})

app.get('/api/operacion/:operacion', (req, res) => {
  const { operacion } = req.params

  const sumandos = operacion.split('+')

  console.log({ sumandos })

  return res.send({ suma: Number(sumandos[0]) + Number(sumandos[1]) })
})

const fn = (req, res) => {
  return res.send(`OK ${req.method}`)
}

app.post('/api', fn)
app.put('/api', fn)
app.delete('/api', fn)

const PORT = 8080

const server = app.listen(PORT, () => {
  console.log(`Servidor HTTP corriendo en el puerto ${PORT}`)
})

server.on('error', error => console.log(`Error en servidor: ${error}`))