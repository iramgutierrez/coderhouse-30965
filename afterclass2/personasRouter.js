const express = require('express')
const { Router } = express 

const personasRouter = Router()

const middlewarePersonaValidator = (req, res, next) => {
  const newPersona = req.body
  if (!newPersona.nombre || !newPersona.edad || !newPersona.apellido) {
    console.log('Request invalido')
    return res.status(400).json({
      error: 'Body incompleto'
    })
  }
  
  return next()
}

/** PERSONAS */

let personas = []

personasRouter.get('', (req, res) => {
  return res.json(personas)
})

personasRouter.post('', middlewarePersonaValidator, (req, res) => {
  const newPersona = req.body

  newPersona.id = personas.length + 1

  personas.push(newPersona)

  return res.status(201).json(newPersona)
})

module.exports = personasRouter

