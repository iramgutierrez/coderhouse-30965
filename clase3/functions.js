
let param = 1
console.log(typeof param)
param = 'Hola'
console.log(typeof param)

/*function mostrar(params) {
  console.log(`Log: ${params}`)
}*/

/*const mostrar = function(params) {
  console.log(`Log: ${params}`)
}*/

/*const mostrar = (params) => {
  console.log(`Log: ${params}`)
}*/

/*const mostrar = params => {
  console.log(`Log: ${params}`)
} */

const mostrar = params => console.log(`Log: ${params}`)

mostrar('Hola')

const promediar = (a, b) => (a + b ) / 2

/*const promediar = (a, b) => {
  return (a + b ) / 2
}*/

const p = promediar(4,8)
console.log(p)


let pets = []

const addMascota = pet => pets.push(pet)

//console.log(addMascota('dog'))
//console.log(pets)

const getPersona = name => ({ nombre: name, edad: 34 })

/*const getPersona = name => {
  return { nombre: name, edad: 34 }
}*/

console.log(getPersona('Iram'))


