const fs = require('fs')

const contenido = `Esto es una prueba escrita con Node.js
Segunda linea`

const contenidoExtra = `
Esto es un agregado`

/*fs.promises.readFile('./test-input-promises.txt', 'utf-8')
  .then(data => {
    console.log(data)
    return fs.promises.writeFile('./test-output-promises.txt', contenido)
  })
  .then(() => {
    console.log('archivo generado')
    return fs.promises.appendFile('./test-output-promises.txt', contenidoExtra)
  })
  .then(() => {
    console.log('archivo actualizado')
    return fs.promises.rename('./test-output-promises.txt', './test-output-promises-nuevo.txt')
  })
  .then(() => {
    console.log('archivo renombrado')
  })
  .catch(err => {
    console.error(err)
  })*/

  ;(async () => {
    try {
      const data = await fs.promises.readFile('./test-input-promises.txt', 'utf-8')
      console.log(data)
      await fs.promises.writeFile('./test-output-promises.txt', contenido)
      console.log('archivo generado')
      await fs.promises.appendFile('./test-output-promises.txt', contenidoExtra)
      console.log('archivo actualizado')
      await fs.promises.unlink('./test-output-promises.txt')
      console.log('archivo eliminado')
    } catch (err) {
      console.error(err.message)
    }
    
  })()

  