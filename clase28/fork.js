const http = require('http')
const { fork } = require('child_process')

const calculo = () => {
  let sum = 0

  for (let i = 0; i < 5e9; i++) {
    sum += i
  }

  return sum
}

let visitas = 0

const server = http.createServer()

server.on('request', (req, res) => {
  const { url } = req

  if (url === '/calcular') {
    console.log('calcular')
    const suma = calculo()
    return res.end(`La suma es: ${suma}`)

    /*const computo = fork('./computo.js')
    computo.on('message', suma => {
      return res.end(`La suma es: ${suma}`)
    })*/
  } else if (url === '/') {
    console.log('visitas')
    return res.end(`Numero de visitas: ${++visitas}`)
  }
})

const PORT = process.env.PORT || 8080

server.listen(PORT, err => {
  if (err) {
    throw new Error(`Error en servidor: ${err}`)
  }

  console.log(`Servidor escuchando en puerto ${PORT}`)
})