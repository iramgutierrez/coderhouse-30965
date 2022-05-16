const express = require('express')

const app = express()

const messages = [
  {
    id: 1,
    title: 'ok',
    message: ''
  },
  {
    id: 2,
    title: 'ko',
    message: ''
  }
]

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/api/mensajes', (req, res) => {
  console.log(`Request recibido con query: ${JSON.stringify(req.query, null, 2)}`)
  
  if (!req.query.title) {
    return res.json(messages)
  }

  const messagesFiltered = messages.filter(message => message.title === req.query.title)

  return res.json(messagesFiltered)
})

app.get('/api/mensajes/:id', (req, res) => {
  console.log(`Request recibido con parámetros: ${JSON.stringify(req.params, null, 2)}`)
  
  // const id = req.query.id
  const { id } = req.params

  const message = messages.find(message => message.id === Number(id))

  return res.json(message)
})

app.post('/api/mensajes', (req, res) => {
  console.log(`POST request recibido con body: ${JSON.stringify(req.body, null, 2)}`)

  const message = req.body

  message.id = messages.length + 1

  messages.push(message)

  return res.json(message)
})

app.put('/api/mensajes/:id', (req, res) => {
  console.log(`PUT Request recibido con body: ${JSON.stringify(req.body, null, 2)}`)
  
  // const id = req.query.id
  const { id } = req.params

  const message = messages.find(message => message.id === Number(id))

  return res.json({ message, new: req.body })
})

app.delete('/api/mensajes/:id', (req, res) => {
  console.log(`DELETE Request recibido con parámetros: ${JSON.stringify(req.params, null, 2)}`)
  
  // const id = req.query.id
  const { id } = req.params

  const message = messages.find(message => message.id === Number(id))

  return res.json({ message })
})

const PORT = 8080

const server = app.listen(PORT, () => {
  console.log(`Servidor HTTP escuchando en el puerto ${PORT}`)
})

server.on('error', error => console.log(`Error en servidor: ${ error}`))