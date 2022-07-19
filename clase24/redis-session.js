const express = require('express')
const session = require('express-session')
const redis = require('redis')

const client = redis.createClient({
  url: 'redis://default:zXLhTfJ8dbnXWBNgqvpORbljy240epzr@redis-11740.c82.us-east-1-2.ec2.cloud.redislabs.com:11740', 
  legacyMode: true
})

client.connect()

const RedisStore = require('connect-redis')(session)
 
const app = express()

app.use(session({
  store: new RedisStore({ client, ttl: 60 }),
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