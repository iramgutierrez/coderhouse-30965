const fs = require('fs')

const contenido = `Esto es una prueba escrita con Node.js
Segunda linea`

const contenidoExtra = `
Esto es un agregado`

fs.readFile('./test-input-callbacks.txt', 'utf-8', (err, data) => {
  if (err) {
    console.error('Error al obtener el archivo')
  } else {
    console.log(data)
    fs.writeFile('./test-output-callbacks.txt', contenido, err => {
      console.log('archivo generado')
      fs.appendFile('./test-output-callbacks.txt', contenidoExtra, err => {
        if (err) {
          console.error('Error al actualizar el archivo')
        } else {
          console.log('archivo actualizado')
          fs.unlink('./test-output-callbacks.txt', err => {
            console.log('archivo borrado')
            fs.mkdir('./nuevacarpeta', err => {
              console.log('carpeta creada')
              fs.readdir('./', (err, nombres) => {
                console.log(nombres)
              })
            })
          })
        }
        
      })
    })
  }
})