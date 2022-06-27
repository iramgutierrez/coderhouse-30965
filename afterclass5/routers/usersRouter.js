const { Router } = require('express')
const ContenedorArchivo = require('../contenedores/ContenedorArchivo')

const usersRouter = Router()

const contenedorArchivoUsuarios = new ContenedorArchivo('./users.json')

usersRouter.get('', (req, res) => {
  return contenedorArchivoUsuarios.findAll()
    .then(users => {
      console.log(users)

      return res.json(users)
    })
  
})

usersRouter.post('', (req, res) => {
  const data = req.body
  
  return contenedorArchivoUsuarios.create(data)
    .then(newUsers => {
      console.log(newUsers)
      return res.status(201).json(newUsers)
    })
})

module.exports = usersRouter