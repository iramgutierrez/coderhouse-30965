const express = require('express')
const session = require('express-session')
const FileStore = require('session-file-store')(session)

const app = express()

app.use(session({
  store: new FileStore({ path: './sessions', ttl: 10 }),
  secret: 'qwerty',
  resave: true,
  saveUninitialized: true
}))


app.get('/session', (req, res) => {
  if (req.session.contador) {
    req.session.contador++
    return res.send(`Has visitado ${req.session.contador} veces el sitio`)
  }

  req.session.contador = 1
  return res.send(`Bienvenido`)
})

app.get('/logout', (req, res) => {
  return req.session.destroy(err => {
    if (!err) {
      return res.json({ logout: true })
    }

    return res.json({ error: err })
  })
})

const PORT =8080

app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`))