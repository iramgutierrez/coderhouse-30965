const http = require('http')

const server = http.createServer((peticion, respuesta) => {
  switch(peticion.url) {
    case '/':
      return respuesta.end('Hola Mundo')
    case '/productos':
      return respuesta.end('Endpoint de productos')
    case '/contacto':
      return respuesta.end('Endpoint de contacto')
    default:
      return respuesta.end('Endpoint no encontrado')
  }
  respuesta.end('Hola Mundo')
})

const connectedServer = server.listen(8080, () => {
  console.log(`Servidor HTTP escuchando en el puerto ${connectedServer.address().port}`)
})