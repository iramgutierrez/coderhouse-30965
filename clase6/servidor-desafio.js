const http = require('http')

const server = http.createServer((peticion, respuesta) => {
  const hour = (new Date()).getHours()

  let mensaje

  if (hour >= 6 && hour < 13) {
    mensaje = 'Buenos días!'
  } else if (hour >= 13 && hour < 19) {
    mensaje = 'Buenas tardes!'
  } else {
    mensaje = 'Buenas noches!'
  }

  /*let mensaje = hour >= 6 && hour < 13
    ? 'Buenos días!'
    : hour >= 13 && hour < 19
      ? 'Buenas tardes!'
      : 'Buenas noches!'*/

  respuesta.end(mensaje)
})

const connectedServer = server.listen(8080, () => {
  console.log(`Servidor HTTP escuchando en el puerto ${connectedServer.address().port}`)
})

