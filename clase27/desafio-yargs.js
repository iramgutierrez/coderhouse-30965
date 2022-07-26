const yargs = require('yargs/yargs')

const args = yargs(process.argv.slice(2))
  .default({
    modo: 'prod',
    puerto: 0,
    debug: false
  })
  .alias({
    modo: 'm',
    puerto: 'p',
    debug: 'd'
  })
  .boolean('debug')
  .argv


console.log(args)