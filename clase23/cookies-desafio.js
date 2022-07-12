const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()

app.use(express.json())
app.use(cookieParser())

app.post('/cookies', (req, res) => {
  const { name, value, maxAge } = req.body

  if (!name) { return res.json({ error: 'Falta nombre' }) }

  if (!value) { return res.json({ error: 'Falta valor' }) }


  res.cookie(name, value, { maxAge }).json({ process: 'ok' })
})

app.get('/cookies', (req, res) => {
  res.json(req.cookies)
})

app.delete('/cookies/:name', (req, res) => {
  const { name } = req.params

  res.clearCookie(name).send('Cookie clear')
})


const PORT = 8080

app
  .listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`))
  .on('error', err => console.log(`Error en servidor: ${err}`))