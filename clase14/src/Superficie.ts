export default class Superficie {
  static Pi: number = 3.1416
  static cuadrado (lado: number): number {
    return lado * lado
  }

  static rectangulo (base: number, altura: number): number {
    return base * altura
  }

  static circulo (diametro: number): number {
    const radio = diametro / 2

    return Superficie.Pi * radio * radio
  }
}