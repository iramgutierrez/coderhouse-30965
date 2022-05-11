const express = require('express')
let app = express()
const PORT = 8080
let frase = "Los ordenadores son inútiles. Sólo pueden darte respuestas";

app.get('/', (request, response, next) => {
    response.send('<h1 style="color:blue;">Bienvenidos al servidor express</h1>')
})
app.get('/api/frase', (request, response, next) => {
    console.log('GET request recibido') 
    return response.json({ frase })
})
app.get('/api/letras/:num', (request, response, next) => {
    console.log('GET request recibido')
    if(isNaN(request.params.num)){
        return response.status(500).json({
            error: "El parámetro no es un número"
        })
    }

    const num_letra = Number.parseInt( request.params.num)
    if(num_letra < 1 || num_letra > frase.length){
        return response.status(500).json({
            error: "El parámetro está fuera de rango"
        })
    }

    const letra = frase[num_letra - 1]
    return response.json(letra)
})

app.get('/api/palabras/:num', (request, response, next) => {
  console.log('GET request recibido')
  if(isNaN(request.params.num)){
      return response.status(500).json({
          error: "El parámetro no es un número"
      })
  }

  const ar_frase = frase.split(' ')
  const num_palabra = Number.parseInt( request.params.num)
  if(num_palabra < 1 || num_palabra > ar_frase.length){
      return response.status(500).json({
          error: "El parámetro está fuera de rango"
      })
  }

  const palabra = ar_frase[num_palabra - 1]
  return response.json({ palabra })
})

const server = app.listen(PORT, () => {
  console.log(`Servidor Http escuchando en el puerto ${server.address().port}`)
})

app.on('error', (error) => {
  console.log({error})
})