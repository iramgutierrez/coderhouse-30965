const express = require('express')
const session = require('express-session')

const users = [
  {
    username: 'iram',
    password: 'qwerty',
    admin: true
  },
  {
    username: 'carlos',
    password: '123456',
    admin: false
  }
]

const auth = (req, res, next) => {
  if (req.session.user) {
    return next()
  }

  return res.status(401).json({
    error: 'Necesitas iniciar sesión'
  })
}

const isAdmin = (req, res, next) => {
  if (req.session.admin) {
    return next()
  }

  return res.status(403).json({
    error: 'Necesitas ser usuario administrador'
  })
}

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(session({
  secret: 'qwerty',
  resave: true,
  saveUninitialized: true
}))

app.get('/session', (req, res) => {
  if (req.session.contador) {
    console.log('Siguientes veces')
    req.session.contador++

    return res.send(`Has visitado ${req.session.contador} veces el sitio`)
  }

  console.log('Primera vez')
  req.session.contador = 1
  return res.send('Bienvenido.')
})

app.get('/logout', (req, res) => {
  return req.session.destroy(err => {
    if (!err) {
      return res.json({ logout: true })
    }

    return res.json({ error: err })
  })
})

app.post('/login', (req, res) => {
  const { username, password } = req.body

  const user = users.find(user => user.username === username && user.password === password)

  if (!user) {
    return res.json({ error: 'Login failed' })
  }

  req.session.user = user.username
  req.session.admin = user.admin

  return res.json({
    user: req.session.user,
    admin: req.session.admin
  })

})

app.get('/profile', auth, (req, res) => {
  return res.json(req.session)
})

app.get('/admin', auth, isAdmin, (req, res) => {
  return res.json({
    message: 'Si estas viendo esto es por que eres un usuario administrador'
  })
})

const PORT = 8080

app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`))