const express = require('express')

const personasRouter = require('./personasRouter')
const mascotasRouter = require('./mascotasRouter')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const publicPath = `${__dirname}/public`

console.log({ publicPath })

app.use('/static', express.static(publicPath))

const middlewareGlobal = (req, res, next) => {
  console.log('Paso por el middleware global')
  return next()
}

const middlewareGlobal2 = (req, res, next) => {
  console.log('Paso por el middleware global 2')
  return next()
}

app.use(middlewareGlobal)

const middlewareFn1 = (req, res, next) => {
  console.log('Paso por el middlewareFn1')
  return next()
}

const middlewareFn2 = (req, res, next) => {
  console.log('Paso por el middlewareFn2')
  return next()
}

const middlewareFn3 = (req, res, next) => {
  console.log('Paso por el middlewareFn3')
  return next()
}

app.use(middlewareGlobal2)

app.get('/', middlewareFn1, middlewareFn2, middlewareFn3, (req, res) => {
  return res.json({
    status: 'ok'
  })
})


app.use('/api/personas', personasRouter)
app.use('/api/mascotas', mascotasRouter)

const PORT = 8080

const server = app.listen(PORT, () => {
  console.log(`Servidor HTTP escuchando en el puerto ${PORT}`)
})

server.on('error', error => console.log(`Error de servidor: ${error}`))