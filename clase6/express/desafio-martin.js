const express = require('express')
const moment = require('moment')
let app = express()
let visitas = 0

app.get('/', (request, response, next) => {
    response.end('<h1 style="color:blue;">Bienvenidos al servidor express</h1>')
})
app.get('/visitas', (request, response, next) => {
    visitas ++
    response.end(`La cantidad de visitas es ${visitas}`)
})
app.get('/fyh', (request, response, next) => {
    const now = moment().format('DD/MM/YYY hh:mm:ss')
    response.send(now)
})

const coneccion = app.listen(8080, () => {
    console.log(`Servidor Http escuchando en el puerto ${coneccion.address().port}`)
})

app.on('error', (error) => {
    console.log({error})
}) 