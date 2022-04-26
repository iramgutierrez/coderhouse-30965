function dividir(dividendo, divisor) {
  return new Promise((resolve, reject) => {
    if (divisor == 0) {
      reject('no se puede dividir por cero')
    } else {
      resolve(dividendo / divisor)
    }
  })
 }

/*function dividir(dividendo, divisor, callback) {
  if (callback) {
    console.log('funcion llamada con callback')
    if (divisor == 0) {
      callback('no se puede dividir por cero')
    } else {
      callback(null, dividendo / divisor)
    }
  } else {
    console.log('funcion llamada sin callback, resuelve una promesa')
    return new Promise((resolve, reject) => {
      if (divisor == 0) {
        reject('no se puede dividir por cero')
      } else {
        resolve(dividendo / divisor)
      }
    })
  }
}

dividir(10, 2, (err, resultado) => {
  if (err) {
    console.error(err)
  } else {
    console.log(`El resultado es: ${resultado}`)
    console.log('A partir de aqui puedo recuperar el control de mi programa')
  }
})*/

dividir(10, 2)
 .then((resultado) => {
  console.log(`El resultado es: ${resultado}`)
  console.log('A partir de aqui puedo recuperar el control de mi programa')
  //return dividir(resultado, 3)
 })
 /*.then((segundoResultado) => {
  console.log(`El segundo resultado es: ${segundoResultado}`)
 })*/
 .catch((err) => {
  console.error(err)
 })
 