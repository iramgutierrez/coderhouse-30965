const socket = io()

const input = document.querySelector('input#message')
const button = document.querySelector('button#send')

// input.addEventListener('input', () => {
button.addEventListener('click', () => {
  socket.emit('mensajeCliente', input.value)
})

socket.on('mensajeServidor', data => {
  const message = `<br>SocketId: ${data.socketId} -> Mensaje: ${data.mensaje}`
  document.querySelector('p').innerHTML += message
})

socket.on('mensajes', data => {
  const messages = data
    .map(message => `SocketId: ${message.socketId} -> Mensaje: ${message.mensaje}`)
    .join('<br>')

  document.querySelector('p').innerHTML = messages

})