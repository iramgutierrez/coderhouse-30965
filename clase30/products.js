const express = require('express')

const app = express()

const PORT = process.argv[2] || 8080

app.get('/products', (req, res) => {
  console.log(`Requesto to products api`)

  return res.json({
    status: 'ok',
    api: 'products'
  })
})

app.listen(PORT, () => console.log(`API de products escuchando en el puerto ${PORT}`))