import suma from './suma.js'

console.log('====Flujo básico correcto====')

const expected = 8

const result1 = suma(3, 5)

if (expected === result1) {
  console.log('Test 1 completado')
} else {
  throw new Error('Test 1 fallido!')
}

console.log('====Caso cuando no se reciben los parámetros necesarios====')

const expectedError1 = 'Faltan parámetros'

const result2 = suma(3)

if (result2 instanceof Error && result2.message === expectedError1) {
  console.log('Test 2 completado')
} else {
  throw new Error('Test 2 fallido!')
}

console.log('====Caso cuando no se reciben los tipos de datos correctos====')

const expectedError2 = 'No se recibieron los tipos de datos correctos'

const result3 = suma('uno', '2.14')

if (result3 instanceof Error && result3.message === expectedError2) {
  console.log('Test 3 completado')
} else {
  throw new Error('Test 3 fallido!')
}