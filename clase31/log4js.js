const log4js = require('log4js')

log4js.configure({
  appenders: {
    miLoggerConsole: { type: "console" },
    miLoggerFile: { type: 'file', filename: 'info.log' },
    miLoggerFile2: { type: 'file', filename: 'info2.log' },

    loggerConsola: { type: 'logLevelFilter', appender: 'miLoggerConsole', level: 'info' },
    loggerArchivo: { type: 'logLevelFilter', appender: 'miLoggerFile', level: 'error' }
  },
  categories: {
    default: { appenders: ["miLoggerConsole"], level: "trace" },
    consola: { appenders: ["miLoggerConsole"], level: "debug" },
    archivo: { appenders: ["miLoggerFile"], level: "warn" },
    archivo2: { appenders: ["miLoggerFile2"], level: "info" },
    todos: { appenders: ["miLoggerConsole", "miLoggerFile"], level: "error" },

    custom: {
      appenders: ['loggerConsola', 'loggerArchivo'], level: 'all'
    }
  
  }
 })

 const logger = log4js.getLogger('custom')

 logger.trace('Log de trace')
 logger.debug('Log de debug')
 logger.info('Log de info')
 logger.warn('Log de warn')
 logger.error('Log de error')
 logger.fatal('Log de fatal')
 