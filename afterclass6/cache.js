const redis = require('redis')

const client = redis.createClient({
  legacyMode: true
})

client.connect()

const getProducts = () => {
  return new Promise((resolve, reject) => {
    client.get('products', (err, value) => {
      if (err) {
        return reject(err)
      }

      return resolve(value)
    })
  })
}

const setProducts = (products) => {
  client.set('products', JSON.stringify(products))
}

const removeProducts = () => {
  client.del('products')
}

module.exports = {
  getProducts,
  setProducts,
  removeProducts
}