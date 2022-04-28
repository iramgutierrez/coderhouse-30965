function dividir(dividendo, divisor) {
  return new Promise((resolve, reject) => {
    if (divisor == 0) {
      reject('no se puede dividir por cero')
    } else {
      resolve(dividendo / divisor)
    }
  })
 }

 /*const init = async () => {
  try {
   const resultado = await dividir(10, 0)
   console.log(resultado)
  } catch (e) {
   console.error(e)
  }

  console.log('Continua')
}

init()*/

 ;(async () => {
   try {
    const resultado = await dividir(10, 0)
    console.log(resultado)
   } catch (e) {
    console.error(e)
   }

   console.log('Continua')
 })()



/*dividir(10, 2)
 .then((resultado) => {
  console.log(`El resultado es: ${resultado}`)
  console.log('A partir de aqui puedo recuperar el control de mi programa')
 })
 .catch((err) => {
  console.error(err)
 })*/
 