const log4js = require('log4js')

log4js.configure({
  appenders: {
    consola: { type: "console" },
    debug: { type: 'file', filename: 'debug.log' },
    errores: { type: 'file', filename: 'errores.log' },
    loggerDebug: { type: 'logLevelFilter', appender: 'debug', level: 'debug' },
    loggerError: { type: 'logLevelFilter', appender: 'errores', level: 'error' }
  },
  categories: {
    default: { appenders: ["consola"], level: "trace" },
    dev: { appenders: ["consola"], level: "info" },
    prod: { appenders: ["loggerDebug", 'loggerError'], level: "all" }
  }
 })

 module.exports = (env) => {
  const category = env === 'PROD' ? 'prod' : 'dev'

  return log4js.getLogger(category)
 }