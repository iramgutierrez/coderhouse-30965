const ejecutar = unaFuncion => unaFuncion()
const saludar = () => console.log('Saludos!')
ejecutar(saludar)

function escribirYLoguear(texto, callbackParaLoguear) {
  // simulamos que escribimos en un archivo!
  console.log(texto)
  // al finalizar, ejecutamos el callback
  callbackParaLoguear('archivo escrito con éxito')
 }

 const callbackFn = (mensajeParaLoguear) => {
  const fecha = new Date().toLocaleDateString()
  console.log(`${fecha}: ${mensajeParaLoguear}`)
  console.log('A partir de aqui recuperamos el control de nuestro programa')
 }
 
 escribirYLoguear('hola mundo de los callbacks!', callbackFn)
 