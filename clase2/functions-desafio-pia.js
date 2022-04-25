//Ejercicio 1
function mostrarLista(lista) {
  let imprimir = lista.length !== 0 ? lista : ["lista vacia"];
  imprimir.forEach((l) => console.log(l));
}
let listado = [3, 2, 1];
//mostrarLista([]);



//Ejercico 2 : IIFE
(function () {
  //mostrarLista([1, 2, 3]);
})();

//Ejercicio 3 : Closure
function crearMultiplicador(number) {
  return (a) => {
    return a * number;
  };
}
let duplicar = crearMultiplicador(10);
let triplicar = crearMultiplicador(10);
console.log(duplicar(2));
console.log(triplicar(3));