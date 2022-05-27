const express = require('express')
const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io')

const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('./public'))

app.set('views', './views')
app.set('view engine', 'ejs')

let users = []
const messages = []

// Rutas de login

app.get('/login', (req,res)=> res.render('login'))
app.post('/login', (req, res) => {
  const { username } = req.body

  return res.redirect(`/chat?username=${username}`)
})

// Rutas de chat 

app.get('/chat', (req, res) => res.render('chat'))

const PORT = 8080

httpServer.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`))

// Evento de conexión de cliente

io.on('connection', socket => {
  console.log('Nuevo usuario conectado')

    // joinChat event
  socket.on('joinChat', ({ username }) => {
    /**
     * Agregamos al usuario que se unio al chat a nuestroa arreglo de usuario
     * Damos la bienvenida al usuario (socket.emit)
     * Notificamos al resto de usuarios que un usuario se conecto (socket.broadcast.emit)
     * Enviamos a todos la lista de usuarios actualizada
     */
    users.push({
      id: socket.id,
      username,
      avatarId: Math.ceil(Math.random() * 6)
    })

    socket.emit('notification', `Bienvenido ${username}`)

    socket.broadcast.emit('notification', `${username} se ha unido al chat`)

    io.sockets.emit('users', users)
  })

  // Handle cuando se recibe un mensaje desde el cliente
  socket.on('messageInput', data => {
    /**
     *  Armamos el objeto de mensaje para enviarselo tanto al cliente que escribio el mensaje como al resto de clientes
     * 
     */
    const now = new Date()
    const user = users.find(user => user.id === socket.id)

    const message = {
      text: data,
      time: `${now.getHours()}:${now.getMinutes()}`,
      user
    }

    messages.push(message)

    socket.emit('myMessage', message)
    socket.broadcast.emit('message', message)
  })

  // Handle cuando un cliente se desconecta
  socket.on('disconnect', reason => {
    /**
     * Buscamos el usuario antes de eliminarlo del arreglo de usuario y enviamos la lista actualizada de usuarios
     */
    const user = users.find(user => user.id === socket.id)

    users = users.filter(user => user.id !== socket.id)

    if (user) {
      socket.broadcast.emit('notification', `${user.username} se ha ido del chat`)
    }

    io.sockets.emit('users', users)
  })
})