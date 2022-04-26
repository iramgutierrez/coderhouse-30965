const fn = (mensaje, callback) => {
  setTimeout(() => {
    callback(null)
  }, 2000)
}

module.exports = fn