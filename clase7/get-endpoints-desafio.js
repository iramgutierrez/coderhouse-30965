const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const frase = 'Hola mundo cómo están'

app.get('/api/frase', (req, res) => {
  return res.json({ frase })
})

app.get('/api/letras/:num', (req, res) => {
  const { num } = req.params

  if (isNaN(num)) {
    return res.status(400).json({ error: 'El parámetro no es un número' })
  }
  const letra = frase[num - 1]

  if (!letra) {
    return res.status(400).json({ error: 'El parámetro está fuera de rango' })
  }

  return res.json({ letra })
})

app.get('/api/palabras/:num', (req, res) => {

  const { num } = req.params

  if (isNaN(num)) {
    return res.status(400).json({ error: 'El parámetro no es un número' })
  }
  const palabra = frase.split(' ')[num - 1]

  if (!palabra) {
    return res.status(400).json({ error: 'El parámetro está fuera de rango' })
  }

  return res.json({ palabra })
})

const PORT = 8080

const server = app.listen(PORT, () => {
  console.log(`Servidor HTTP corriendo en el puerto ${PORT}`)
})

server.on('error', error => console.log(`Error en servidor: ${error}`))