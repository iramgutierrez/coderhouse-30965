const fs = require('fs')

const participantes = [
  { nombre: 'Iram', pais: 'MX', id: 1 },
  { nombre: 'Adrian', pais: 'AR', id: 2 },
  { nombre: 'Alan', pais: 'AR', id: 3 },
  { nombre: 'Facu', pais: 'AR', id: 4 },
  { nombre: 'Felipe', pais: 'AR', id: 5 }
]

const participantesStr = JSON.stringify(participantes, null, 2)
console.log(typeof participantesStr)
;(async () => {
  await fs.promises.writeFile('./test-after.txt', participantesStr)

  const data = await fs.promises.readFile('./test-after.txt', 'utf-8')
  const participantesArr = JSON.parse(data)

  participantesArr.push({ nombre: 'Rommel', pais: 'AR', id: 6 })

  console.log(participantesArr)
})()