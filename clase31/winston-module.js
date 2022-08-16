const winston = require('winston')

const loggerDev = winston.createLogger({
  level: 'info',
  transports : [
      new winston.transports.Console()
  ]
})

const loggerProd = winston.createLogger({
   level: 'debug',
   transports : [
       new winston.transports.File({ filename: 'debug_winston.log', level:'debug' }),
       new winston.transports.File({ filename: 'errores_winston.log', level:'error' }),
   ]
})

module.exports = (env_variable) => {
  return env_variable === 'PROD' ? loggerProd : loggerDev
}