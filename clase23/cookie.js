const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()

app.use(cookieParser('qwerty'))

app.get('/set', (req, res) => {
  return res.cookie('server', 'express').send('Cookie set')
})

app.get('/setEx', (req, res) => {
  return res.cookie('server2', 'express2', { maxAge: 30000 }).send('Cookie set')
})

app.get('/set-signed', (req, res) => {
  return res.cookie('serverSigned', 'expressSigned', { signed: true }).send('Cookie set')
})

app.get('/get', (req, res) => {
  return res.status(201).json({
    server: req.cookies.server,
    server2: req.cookies.server2,
    serverSigned: req.signedCookies.serverSigned
  })
})

app.get('/clear', (req, res) => {
  return res.clearCookie('server').send('Cookie clear')
})

const PORT = 8080

app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`))