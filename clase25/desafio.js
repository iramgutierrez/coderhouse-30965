const express = require('express')
const session = require('express-session')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(session({
  secret: 'qwerty',
  resave: true,
  saveUninitialized: true
}))

const users = []

app.post('/register', (req, res) => {
  const { username, password } = req.body

  const previousUser = users.some(user => user.username === username)

  if (previousUser) {
    return res.status(400).json({
      error: 'El nombre de usuario ya existe'
    })
  }

  const user = {
    username,
    password
  }

  users.push(user)

  return res.json(user)
})

app.post('/login', (req, res) => {
  const { username, password } = req.body

  const user = users.find(user => user.username === username)

  if (!user) {
    return res.status(400).json({
      error: 'El nombre de usuario no existe'
    })
  }

  if (user.password !== password) {
    return res.status(400).json({
      error: 'La contraseña es incorrecta'
    })
  }

  req.session.user = {
    username: user.username,
    password: user.password
  }

  return res.json(user)
})

const verifySession = (req, res, next) => {
  if (!req.session || !req.session.user) {
    return res.status(401).json({
      error: 'Necesitas iniciar sesión'
    })
  }

  return next()

}

app.get('/profile', verifySession, (req, res) => {
  return res.json(req.session.user)
})

const PORT = 8080

app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`))