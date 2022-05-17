const express = require('express')
const app = express()

app.use('/static', express.static(`${__dirname}/public`))

app.get('', (req, res) => res.json({ status: 'ok' }))

const PORT = 8080

const server = app.listen(PORT, () => {
  console.log(`Servidor HTTP corriendo en el puerto ${PORT}`)
})

server.on('error', error => console.log(`Error en servidor: ${error}`))