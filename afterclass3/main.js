const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static('./public'))

const users = []

app.get('/users', (req, res) => {
  return res.json(users)
})

app.post('/form', (req, res) => {
  const user = req.body
  console.log(user)
  user.id = users.length + 1

  users.push(user)

  io.sockets.emit('newUser', user)

  return res.json(user)
})

const PORT = 8080

app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`))