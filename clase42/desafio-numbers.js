import express from 'express'

const app = express()

app.use(express.json())

const numbers = []

app.post('/ingreso', (req, res) => {
  const { number } = req.body

  numbers.push(number)

  return res.json({ status: 'ok' })
})

app.get('/egreso', (req, res) => {
  return res.json(numbers)
})

const PORT = 8082

app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`))