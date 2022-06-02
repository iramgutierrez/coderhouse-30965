import * as operaciones from './operaciones'

const mensaje:string = 'Hola TypeScript'
console.log(mensaje)

let num1:number = 6
let num2:number = 10

console.log(`La suma de ${num1} y ${num2} es igual a ${operaciones.sumar(num1, num2)}`)
console.log(`La resta de ${num1} y ${num2} es igual a ${operaciones.restar(num1, num2)}`)
console.log(`La multiplicación de ${num1} y ${num2} es igual a ${operaciones.multiplicar(num1, num2)}`)
console.log(`La división de ${num1} y ${num2} es igual a ${operaciones.dividir(num1, num2)}`)


