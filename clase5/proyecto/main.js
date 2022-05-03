const moment = require('moment')

const now = moment()

console.log(now.format('DD/MM'))

return

const suma = (a, b) => {
  return a + b
}

const resultado = suma(1, 2)

console.log({ resultado })

const random = Math.round(Math.random())

const numbers = [1, 2, 6, 8, 20, 2, 14, 1, 8]

const numbersObj = {
  1: 2,
  2: 2,
  6: 1,
  8: 2,
  20: 1,
  14: 1
}

console.log(numbersObj)


console.log(['abc', 'def', 'ghi'].join(', '))