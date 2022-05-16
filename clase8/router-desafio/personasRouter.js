const { Router } = require('express')

const personas = []

const personasRouter = Router()

personasRouter.use((req, res, next) => {
  console.log('Request recibido al router de personas')
  return next()
})

personasRouter.get('', (req, res) => {
  return res.json(personas)
})

personasRouter.post('', (req, res) => {
  const persona = req.body

  persona.id = personas.length + 1
  personas.push(persona)

  return res.status(201).json(persona)
})

module.exports = personasRouter
