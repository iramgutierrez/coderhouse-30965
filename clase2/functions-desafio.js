function mostrarLista(lista) {
  if (lista.length !== 0) {
    console.log(lista)
    return
  }

  console.log('Lista vacia')
  return
}

mostrarLista(['item1', 'item2', 'item3'])
mostrarLista([])

;(function (lista){
  if (lista.length !== 0) {
    console.log(lista)
    return
  }

  console.log('Lista vacia')
  return
})([1, 2, 3])

function crearMultiplicador (a) {
  return function (b) {
    return a * b
  }
}

const duplicar = crearMultiplicador(2)
const triplicar = crearMultiplicador(3)

console.log(duplicar(2))
console.log(duplicar(3))
console.log(triplicar(2))
console.log(triplicar(3))