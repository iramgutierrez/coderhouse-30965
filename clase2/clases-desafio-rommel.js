class Contador {
  constructor(nombre, contador) {
    nombre, contador;
  }
  static cuentaGlobal = 0;
  static contadorIndividual = 0;

  obteberResponsable() {
    return this.nombre;
  }
  otenerCuentaIndividual() {
    return contadorIndividual;
  }
  static obtenerCuentaGlobal() {}
  contador() {
    cuentaGlobal++;
    contadorIndividual;
  }
}