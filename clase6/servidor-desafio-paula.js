const http = require('http')
console.log(http)

const server = http.createServer((peticion, respuesta) => {
    let fecha = new Date()
    let hora = fecha.getHours();
    
    if(hora > 6 && hora < 12 ) {
        respuesta.end('Buenos días')
    } else if (hora > 13 && hora < 19) {
        respuesta.end('Buenas tardes')
    } else if (hora > 20 && hora < 5) {
        respuesta.end('Buenas noches')
    }
})

const connectedServer = server.listen(8080, () => {
  console.log(`Servidor HTTP escuchando en el puerto ${connectedServer.address().port}`)
})