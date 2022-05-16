const express = require('express')
const { Router } = express

const mascotasRouter = Router()

/** MASCOTAS */

let mascotas = []

mascotasRouter.get('', (req, res) => {
  return res.json(mascotas)
})

mascotasRouter.post('', (req, res) => {
  const newMascota = req.body

  newMascota.id = mascotas.length + 1

  mascotas.push(newMascota)

  return res.status(201).json(newMascota)
})

module.exports = mascotasRouter