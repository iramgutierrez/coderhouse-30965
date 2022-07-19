const express = require('express')
const db = require('./db')
const cache = require('./cache')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/products', (req, res) => {
  let createCache = false

  return cache.getProducts()
    .then(productsString => {

      if (productsString === null) {
        createCache = true
        return db.getProducts()
      }

      return JSON.parse(productsString)
    })
    .then(products => {
      console.log(products)
      if (createCache) {
        console.log('createCache')
        cache.setProducts(products)
      }
      return res.json(products)
    })
})

app.post('/products', (req, res) => {
  const product = {
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    stock: req.body.stock,
    category_id: req.body.category_id
  }

  return db.createProduct(product)
    .then(productsIds => {
      const productId = productsIds[0]
      product.id = productId
      cache.removeProducts()
      return res.status(201).json(product)
    })
})

const PORT = 8080

app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`))