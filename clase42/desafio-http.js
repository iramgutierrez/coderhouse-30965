const http = require('http')

const server = http.createServer((req, res) => {
  res.end(JSON.stringify({ FyH: (new Date()).toString() }))
})

const connectedServer = server.listen(8081, () => {
  console.log(`Servidor HTTP corriendo en el puerto ${connectedServer.address().port}`)
})