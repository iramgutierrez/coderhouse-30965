const pino = require('pino')

const logger = pino()

logger.level = 'info'

logger.info('Log de info %d', 12)

logger.warn({ a: 42 }, 'Log de warn')


const childLogger = logger.child({ module: 'products' })

childLogger.warn('Log de productos')
childLogger.error('Log de productos')
childLogger.info('Log de productos')