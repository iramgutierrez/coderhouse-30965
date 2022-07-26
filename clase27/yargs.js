const yargs = require('yargs/yargs')

const args = yargs(process.argv.slice(2))
  .default({
    name: 'Iram',
    lastname: 'Gutiérrez'
  })
  .alias({
    name: 'n'
  })
  .boolean('debug')
  .argv


console.log(args)