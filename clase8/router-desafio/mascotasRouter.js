const { Router } = require('express')

const mascotas = []

const mascotasRouter = Router()

mascotasRouter.get('', (req, res) => {
  return res.json(mascotas)
})

mascotasRouter.post('', (req, res) => {
  const mascota = req.body

  mascota.id = mascotas.length + 1
  mascotas.push(mascota)

  return res.status(201).json(mascota)
})

module.exports = mascotasRouter
