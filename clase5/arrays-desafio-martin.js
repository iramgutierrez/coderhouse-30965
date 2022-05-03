//Usando las funciones de array
const productos = [
  { id:1, nombre:'Escuadra', precio:323.45 },
  { id:2, nombre:'Calculadora', precio:234.56 },
  { id:3, nombre:'Globo Terráqueo', precio:45.67 },
  { id:4, nombre:'Paleta Pintura', precio:456.78 },
  { id:5, nombre:'Reloj', precio:67.89 },
  { id:6, nombre:'Agenda', precio:78.90 }
]

let resultado = {}
resultado.a = productos.map((producto) => {
    return producto.nombre
}).join(',')
resultado.b = Math.round(productos.reduce((acc, val) => {
    return acc + val.precio
}, 0) )
resultado.c = resultado.b / productos.length
resultado.d = productos.reduce((a, e ) => e.precio < a.precio ? e : a)
resultado.e = productos.reduce((a, e ) => e.precio > a.precio ? e : a)

console.log({ resultado })