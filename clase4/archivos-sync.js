const fs = require('fs')

const data = fs.readFileSync('./test-input-sync.txt', 'utf-8')

console.log(data)

const contenido = `Esto es una prueba escrita con Node.js
Segunda linea`

const contenidoExtra = `
Esto es un agregado`

fs.writeFileSync('./test-output-sync.txt', contenido)

fs.appendFileSync('./test-output-sync.txt', contenidoExtra)

fs.unlinkSync('./test-output-sync.txt')

let dataNoExiste = 'Contenido inicial'

try {
  dataNoExiste = fs.readFileSync('/ruta/no/valida', 'utf-8')
  console.log(dataNoExiste)
} catch (err) {
  console.error('El archivo no existe')
}

console.log('Continuar con mi programa', dataNoExiste)

console.log(Date())