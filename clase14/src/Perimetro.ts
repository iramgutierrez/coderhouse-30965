export default class Perimetro {
  static Pi: number = 3.1416
  static cuadrado (lado: number): number {
    return lado * 4
  }

  static rectangulo (base: number, altura: number): number {
    return (base * 2) + (altura * 2)
  }

  static circulo (diametro: number): number {
    return Perimetro.Pi * diametro
  }
}