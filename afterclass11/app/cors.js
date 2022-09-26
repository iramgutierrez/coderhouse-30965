const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors({
  origin: ['http://mydomain.com', 'https://docs.google.com']
}))

app.get('', (req, res) => {
  return res.json({
    origin: req.header('origin'),
    date: new Date()
  })
})

const PORT = process.env.PORT || 8080

app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`))