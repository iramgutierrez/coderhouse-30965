const parseArgs = require('minimist')

const args = process.argv.slice(2)

console.log(parseArgs(args))

console.log(parseArgs(['-a', '1', '-b', '2', '3', '4']))

console.log(parseArgs(['--n1', '1', '--n2', '2', '3', '4']))

console.log(parseArgs(['-a', '1', '-b', '2', '--debug', '--colores']))

const options = {
  default: {
    name: 'Iram',
    lastname: 'Gutiérrez'
  }
}

console.log( parseArgs(['-a', '1', '-b', '2', '--debug', '--colores'], options) )


console.log( parseArgs(['-a', '1', '-b', '2', '--debug', '--colores', '--name', 'Carlos'], options) )

options.alias = {
  a: 'campoA',
  b: 'campoB'
}

console.log( parseArgs(['-a', '1', '-b', '2', '--debug', '--colores', '--name', 'Carlos'], options) )
