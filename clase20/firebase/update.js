import query from './db.js'

const id = 'ZXAQdN4SJlLG0hVeHyrl'
const doc = query.doc(id)

try {
  const user = await doc.update({ nombre: 'Pia', apellido: 'Achigar' })
  console.log(user)
} catch (e) {
  console.log(`Error: ${e.message}`)
}