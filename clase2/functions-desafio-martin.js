function crearMultiplicador(num1){
  return function(num2){
      return num1 * num2;
  }
}
console.log("Punto 3a:");
console.log(crearMultiplicador(6)(10));
console.log("---------");

function duplicar(duplicate_number){
  return crearMultiplicador(duplicate_number)(2);
}
function triplicar(triplicate_number){
  return crearMultiplicador(triplicate_number)(3);
}

console.log("Punto 3b:");
console.log(duplicar(6));
console.log("---------");

console.log("Punto 3c:");
console.log(triplicar(6));
console.log("---------");