const mostrarLetras = (palabra, callback) => {
  let index = 0
  const interval = setInterval(() => {
    const letra = palabra[index++]
    if (letra) {
      console.log(letra)
    } else {
      clearInterval(interval)
      callback()
    }
  }, 1000)
}

const fin = () => console.log('terminé')

setTimeout(() => {
  mostrarLetras('¡Hola!', fin)
}, 700)

setTimeout(() => {
  mostrarLetras('¡Hola!', fin)
}, 1500)

setTimeout(() => {
  mostrarLetras('¡Hola!', fin)
}, 2000)

