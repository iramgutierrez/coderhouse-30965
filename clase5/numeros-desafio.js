
const generateNumbers = () => {
  const numbers = []
  for (let i = 1; i <= 10000; i++) {
    numbers.push(Math.ceil(Math.random() * 20))
  }

  return numbers
}

const numbers = generateNumbers()

/*const numbersObj = {}

for (let i = 0; i < 10000; i++) {
  const number = numbers[i]
  if ( !(number in numbersObj) ) {
    numbersObj[number] = 0
  }

  numbersObj[number]++
}

console.log(numbersObj)*/

/*[1, 2, 6, 7, 9, 10].reduce((acc, element) => {
  return acc + element
}, 0)

console.log({ resultado })*/

const numbersObj = numbers.reduce((acc, element) => {
  if (!(element in acc)) {
    acc[element] = 0
  }

  acc[element]++

  return acc
}, {})

console.log(numbersObj)