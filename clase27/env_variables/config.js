const config = {
  mode: process.env.NODE_ENV || 'DEV',
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 3000
}

module.exports = config