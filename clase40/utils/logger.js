const winston = require('winston')

let logger = null

module.exports = () => {
  if (!logger) {
    console.log('Primer logger')
    logger = winston.createLogger({
      level: 'warn',
      transports: [
        new winston.transports.Console({ level: 'verbose' })
      ]
    })
  
    return logger
  }

  console.log('Logger reutilizado')

  return logger
}