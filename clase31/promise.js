const getInfoPromise = (data) => {
  return new Promise((resolve, reject) => {
    getInfo(data, (err, results) => {
      if (err) {
        return reject(err)
      }

      return resolve(results)
    })
  })
}

const products = []

const getProducts = () => {
  return Promise.resolve(products)
}

const getProductsMongo = () => {
  return Product.find()
}


return getProducts()
  .then(products => {
    console.log({ products })
  })