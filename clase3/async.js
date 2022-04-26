const escribirArchivo = require('./escrArch.js')
const escribirArchivoPromise = require('./escrArchPromise')


console.log('inicio del programa')

escribirArchivo('hola mundo', (err) => {
  if (err) {
    console.error(err)
  } else {
    console.log('Termine de escribir el archivo')
    console.log('fin del programa')
  }
})

/*escribirArchivoPromise('hola mundo')
  .then(() => {
    console.log('Termine de escribir el archivo')
    console.log('fin del programa')
  })*/

  

