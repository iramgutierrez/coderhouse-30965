const { Router } = require('express')
const db = require('../db/db')

const productsRouter = Router()

const adminMiddleware = (req, res, next) => {
  if (req.query.admin === 'true') {
    return next()
  }

  return res.status(401).json({
    error: 'No tienes acceso a esta sección'
  })
}

const productsRouterFn = (io) => {
  productsRouter.get('/', (req, res) => {
    return db.from('products').select('*')
      .then(products => {
        const filteredProducts = products.map(product => {
          delete product.stock
          return product
        })
        return res.json(filteredProducts)
      })
      .catch(err => {
        console.log(err)
        return res.status(500).json({
          error: 'Error de servidor'
        })
      })
  })
  
  productsRouter.post('/', adminMiddleware, (req, res) => {
    const product = {
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      stock: req.body.stock,
      category_id: req.body.category_id,
    }
  
    return db.from('products').insert(product)
      .then((productsIds) => {
        const [ productId ] = productsIds
        console.log(`Producto insertado`, productId)
        product.id = productId

        io.sockets.emit('newProduct', product)
        return res.status(201).json(product)
      })
      .catch(err => {
        console.log(err)
        return res.status(500).json({
          error: 'Error de servidor'
        })
      })
  })

  return productsRouter
}

module.exports = productsRouterFn