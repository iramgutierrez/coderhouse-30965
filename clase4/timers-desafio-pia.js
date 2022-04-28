function mostrarLetras(strMostrar, fn, ms) {
  for (const caracter of strMostrar) {
    setTimeout(() => console.log(caracter), ms);
  }
  fn();
}
const fin = () => console.log("terminé");
mostrarLetras("¡Hola!", fin, 700);
mostrarLetras("¡Hola!", fin, 1500);
mostrarLetras("¡Hola!", fin, 2000);