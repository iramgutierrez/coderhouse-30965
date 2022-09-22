var express = require('express');
var router = express.Router();
const NodeCache = require( "node-cache" );
var debug = require('debug')('desafio:products');

const cache = new NodeCache();

cache.set('products', [])

/* GET products listing. */
router.get('/', function(req, res, next) {
  const products = cache.get('products')
  debug(products)
  return res.json(products)
});

router.get('/:id', function(req, res, next) {
  const products = cache.get('products')
  const product = products.find(product => product.id === parseInt(req.params.id))
  return res.json(product)
});

router.post('/', function(req, res, next) {
  const products = cache.get('products')
  const product = {
    id: products.length + 1,
    name: req.body.name,
    price: req.body.price
  }
  products.push(product)
  cache.set('products', products)
  return res.json(product)
});

router.put('/:id', function(req, res, next) {
  const products = cache.get('products')

  const productIndex = products.findIndex(product => product.id === parseInt(req.params.id))
  debug(productIndex)
  products[productIndex].name = req.body.name
  products[productIndex].price = req.body.price
  debug(products[productIndex])
  cache.set('products', products)

  return res.json(products[productIndex])
});

router.patch('/:id', function(req, res, next) {
  const products = cache.get('products')

  const productIndex = products.findIndex(product => product.id === parseInt(req.params.id))

  products[productIndex].name = req.body.name || products[productIndex].name
  products[productIndex].price = req.body.price || products[productIndex].price

  cache.set('products', products)

  return res.json(products[productIndex])
});

router.delete('/:id', function(req, res, next) {
  const products = cache.get('products')

  const productIndex = products.findIndex(product => product.id === parseInt(req.params.id))

  products.splice(productIndex, 1)

  cache.set('products', products)

  res.status(204).json({})


});

module.exports = router;
