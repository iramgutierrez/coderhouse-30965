const express = require('express')
const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io')

const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

io.on('connection', socket => {
  socket.emit('welcome', 'Bienvenido al servidor')
})

const productsRouterFn = require('./routers/productRouter')

const productRouter = productsRouterFn(io)

app.use(express.static('./public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => res.json({ status: 'ok' }))

app.use('/api/products', productRouter)

const PORT = 8080

httpServer.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`))