const express = require('express')
const session = require('express-session')
const MongoStore = require('connect-mongo')

const app = express()

app.use(session({
  store: MongoStore.create({
    mongoUrl: 'mongodb+srv://iram:dwAX3ur2npXxpyt0@cluster0.pxpddrh.mongodb.net/30965_sessions?retryWrites=true&w=majority',
    ttl: 60
  }),
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