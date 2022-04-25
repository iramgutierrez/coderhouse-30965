/*function suma(a, b) {
  return a + b
}*/

const suma = function(a, b) {
  return a + b
}

console.log(suma(2, 3))

const fetch = function() { return 'response' }

;(async function(nombre) {
  const settings = await fetch()
  console.log({ settings })
  console.log("Hola " + nombre)
})("Iram")
