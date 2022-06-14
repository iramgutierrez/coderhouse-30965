const socket = io()

socket.on('welcome', data => {
  console.log(data)
})

socket.on('newProduct', product => {
  console.log('nuevo producto creado', product)
})