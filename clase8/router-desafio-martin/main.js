const express = require('express')

let app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({ extended : true}))
//Carpeta de recursos con el formulario
//Uso la ruta base para mostrar el index mas facil
app.use('/', express.static(__dirname+'/public'))

const mascotaRouter = require(__dirname+'/mascotas')
const personaRouter = require(__dirname+'/personas')

//Indico que todas las rutas que de de alta en el Router van a estar con ese prefijo
app.use('/mascotas', mascotaRouter)
app.use('/personas', personaRouter)

const server = app.listen(PORT, () => {
    console.log(`Servidor Http escuchando en el puerto ${server.address().port}`)
})

app.on('error', (error) => {
    console.log({error})
})