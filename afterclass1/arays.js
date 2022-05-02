[1, 2, 3, 4]
['uno', 'dos', 'tres']

let participantes = [{
  nombre: 'Iram',
  pais: 'MX'
}, {
  nombre: 'Adrian',
  pais: 'AR'
}, {
  nombre: 'Alan',
  pais: 'AR'
}, {
  nombre: 'Facu',
  pais: 'AR'
}, {
  nombre: 'Felipe',
  pais: 'AR'
}]

/*for (let i = 0; i < participantes.length; i++) {
  const participante = participantes[i]
  console.log(participante)
}*/

const mappedParticipantes = participantes.map((element) => {
  const nombre = element.nombre
  return nombre
})

console.log(mappedParticipantes)

participantes = participantes.map((element, index) => {
  const id = index + 1
  element.id = id
  return element
})

console.log(participantes)

const id = 3

const participante = participantes.find((element) => {
  const isMatch = element.id === id
  return isMatch
})

console.log({ participante })

const participantesAR = participantes.filter((element) => {
  return element.pais === 'AR'
})

console.log({ participantesAR })

const hasFromMX = participantes.some((element) => {
  return element.pais === 'MX'
})

console.log({ hasFromMX })

const allFromAR = participantesAR.every((element) => {
  return element.pais === 'AR'
})

console.log({ allFromAR })