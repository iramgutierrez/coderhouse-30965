const winston = require('winston')

const logger = winston.createLogger({
  level: 'warn',
  transports: [
    new winston.transports.Console({ level: 'verbose' }),
    new winston.transports.File({ level: 'error', filename: 'info_winston.log' })
  ]
})


logger.log('silly', 'Log de silly')
logger.log('debug', 'Log de debug')
logger.log('verbose', 'Log de verbose')
logger.log('info', 'Log de info')
logger.log('warn', 'Log de warn')
logger.log('error', 'Log de error')

logger.info('Log de info')
logger.warn('Log de warn')
logger.error('Log de error')