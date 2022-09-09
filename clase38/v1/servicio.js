import { recuperarDatos, guardar } from './persistencia.js'

const obtenerDatos = async () => {
  const datos = await recuperarDatos()
  // 

  return datos
}

const crearDato = async dato => {
  dato.createdAt = new Date()
  return await guardar(dato)
}

export {
  obtenerDatos,
  crearDato
}