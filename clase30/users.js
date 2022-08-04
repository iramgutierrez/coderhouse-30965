const express = require('express')

const app = express()

const PORT = process.argv[2] || 8080

app.get('/users', (req, res) => {
  console.log(`Requesto to users api`)

  return res.json({
    status: 'ok',
    api: 'users'
  })
})

app.listen(PORT, () => console.log(`API de users escuchando en el puerto ${PORT}`))