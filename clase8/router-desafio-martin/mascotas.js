const express = require('express')
const { Router } = express //Esto es igual a const Router = express.Router

let mascotas = [
    {
        nombre: "Tom",
        raza: "Gato",
        edad: "10 años"
    },
    {
        nombre: "Jerry",
        raza: "Raton",
        edad: "5 años"
    }
]

const mascotaRouter = Router()

//No hace falta indicar el prefijo pq se lo indicamos mas abajo en el use
mascotaRouter.get('', (request, response, next) => {
    return response.json(mascotas)
})

mascotaRouter.post('', (request, response, next) => {
    console.log('POST request recibido')
    const newMascota = request.body
    newMascota.id = mascotas.length + 1
    mascotas.push(newMascota)

    //Satus 201 para decir que el registro se creo exitosamente
    return response.status(201).json(newMascota)
})

module.exports = mascotaRouter