const express = require('express')
const compression = require('compression')

const app = express()

console.log(process.env.NODE_ENV)

if (process.env.NODE_ENV === 'PROD') {
  app.use(compression())
}

app.get('', (req, res) => {
  const message = 'Bienvenido!!!!'

  return res.send(message)
})

const PORT = process.argv[2] || 8080

app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`))