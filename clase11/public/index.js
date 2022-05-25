const socket = io()

socket.on('mi mensaje', (data) => {
  alert(data)
  socket.emit('notificacion', 'Mensaje recibido exitosamente')
})

socket.on('nuevo cliente', data => {
  alert(data)
})