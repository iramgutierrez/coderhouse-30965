export default class Persona {
  private name: string
  private lastname: string

  constructor(name: string, lastname: string) {
    this.name = name
    this.lastname = lastname
  }

  getFullName(): string {
    return `${this.name} ${this.lastname}`
  }
}