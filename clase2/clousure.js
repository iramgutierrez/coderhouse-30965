function crearGritarNombre(nombre) {
  const signosDeExclamacion = '!!!'
  return function () {
      console.log(`${nombre}${signosDeExclamacion}`)
  }
}

const gritarCH = crearGritarNombre('coderhouse')

gritarCH() // muestra por pantalla: coderhouse!!!


function saludar(saludo) {
  return function (nombre) {
    return saludo + " " + nombre
  }
}

const buenosDias = saludar("Buenos días")
const buenosTardes = saludar("Buenos tardes")

console.log(saludar("Buenos días")("Iram"))
console.log(saludar("Buenos días")("Pablo"))
console.log(saludar("Buenos días")("Jorge"))

console.log(buenosDias("Iram"))
console.log(buenosDias("Pablo"))
console.log(buenosDias("Jorge"))


console.log(buenosTardes("Iram"))
console.log(buenosTardes("Pablo"))
console.log(buenosTardes("Jorge"))