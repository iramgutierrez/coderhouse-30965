const express = require('express')

const app = express()

app.get('/', (req, res) => {
  return res.send('Hola Yarn')
})

const PORT = process.argv[2] || 3000

app
  .listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`))
  .on('error', console.error)