const fs = require('fs')

try {
  fs.writeFileSync('./d/fyh.txt', new Date())
} catch (err) {
  console.error('No se pudo escribir el archivo fyh.txt')
}

let data
try {
  data = fs.readFileSync('./archivos-sync-desafio.js', 'utf-8')
} catch (err) {
  console.error('No se pudo leer el archivo')
}

console.log(data)
