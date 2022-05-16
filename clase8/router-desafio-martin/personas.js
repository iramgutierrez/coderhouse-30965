const express = require('express')
const { Router } = express //Esto es igual a const Router = express.Router

let personas = [
    {
        nombre: "Jonhny",
        apellido: "Bravo",
        edad: "26 años"
    },
    {
        nombre: "Tom",
        raza: "Anderson",
        edad: "31 años"
    }
]

const personaRouter = Router()

//No hace falta indicar el prefijo pq se lo indicamos mas abajo en el use
personaRouter.get('', (request, response, next) => {
    return response.json(personas)
})

personaRouter.post('', (request, response, next) => {
    console.log('POST request recibido')
    const newPersona = request.body
    newPersona.id = personas.length + 1
    personas.push(newPersona)

    //Satus 201 para decir que el registro se creo exitosamente
    return response.status(201).json(newPersona)
})

module.exports = personaRouter