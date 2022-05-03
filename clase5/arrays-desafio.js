const productos = [
  { id:1, nombre:'Escuadra', precio:323.45 },
  { id:2, nombre:'Calculadora', precio:234.56 },
  { id:3, nombre:'Globo Terráqueo', precio:45.67 },
  { id:4, nombre:'Paleta Pintura', precio:456.78 },
  { id:5, nombre:'Reloj', precio:67.89 },
  { id:6, nombre:'Agenda', precio:78.90 }
]

const productosNombres = productos
  .map(producto => producto.nombre)
  .join(',')

const precioTotal = productos.reduce((total, producto) => {
  return total + producto.precio
}, 0)

const precioPromedio = precioTotal / productos.length

/*const productosOrdenados = productos.sort((a, b) => {
  return a.precio > b.precio ? 1 : -1
})

const menorPrecio = productosOrdenados[0]
const mayorPrecio = productosOrdenados[productosOrdenados.length - 1]*/

let menorPrecio = productos[0]
let mayorPrecio = productos[0]


for (let i = 0; i < productos.length; i++) {
  if (productos[i].precio > mayorPrecio.precio) {
    mayorPrecio = productos[i]
  }
  if (productos[i].precio < menorPrecio.precio) {
    menorPrecio = productos[i]
  }
}

console.log({
  productosNombres,
  precioTotal,
  precioPromedio,
  menorPrecio,
  mayorPrecio
})

