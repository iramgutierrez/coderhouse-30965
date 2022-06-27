import query from './db.js'

const id = '1'
const doc = query.doc(id)

try {
  const user = await doc.delete()
  console.log(user)
} catch (e) {
  console.log(`Error: ${e.message}`)
}