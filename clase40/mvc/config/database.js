module.exports = {
  fn: (config) => {
    return {
      host: config.DB_HOST || 'localhost',
      port: config.DB_PORT,
      name: config.DB_NAME
    }
  }
}
