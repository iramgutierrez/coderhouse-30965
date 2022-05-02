const dividir = (a, b) => {
  return a / b
  return setTimeout(() => {
    if (b === 0) {
      const error = new Error('No se puede dividir por cero')
      callback(error)
    } else {
      const resultado = a / b
      callback(null, resultado)
    }
  })
}

const dividirFn = (err, resultado) => {
  if (err) {
    console.error(err.message)
  } else {
    console.log(`El resultado es: ${resultado}`)
    dividir(resultado, 2, (err, resultado) => {
      if (err) {

      } else {

      }
    })
  }
}

const resultado = dividir(10, 2)

console.log(resultado)



