import query from './colors.js'
import parseUser from './utils/parseUser.js'

try {
  await query.add({ nombre: 'red' })
  await query.add({ nombre: 'green' })
  await query.add({ nombre: 'blue' })

  const response = await query.get()
  // const response = await query.select('nombre').get()
  const docs = response.docs

  const colors = docs.map(parseUser)

  console.log(colors)

  const blue = await query.where('nombre', '==', 'blue').get()

  const blueRef = await query.doc(blue.id)

  await blueRef.update({ nombre: 'navy' })

} catch (e) {
  console.log(`Error: ${e.message}`)
}
