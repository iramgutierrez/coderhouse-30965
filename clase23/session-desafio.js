const express = require('express')
const session = require('express-session')

const app = express()

app.use(session({
  secret: 'qwerty',
  resave: true,
  saveUninitialized: true
}))


app.get('/root', (req, res) => {
  if (req.session.contador) {
    req.session.contador++

    return res.send(`${req.session.name} has visitado ${req.session.contador} veces el sitio`)
  }

  req.session.name = ''

  const { name } = req.query

  if (name) {
    req.session.name = name
  }

  req.session.contador = 1

  return res.send(`Te damos la bienvenida ${req.session.name}`)
})

app.get('/olvidar', (req, res) => {
  const name = req.session.name || ''

  return req.session.destroy(err => {
    if (!err) {
      return res.send(`Hasta luego ${name}`)
    }

    return res.json({ error: err })
  })
})

const PORT =8080

app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`))