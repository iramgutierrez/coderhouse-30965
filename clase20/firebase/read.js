import query from './db.js'
import parseUser from './utils/parseUser.js'


const id = 'ZXAQdN4SJlLG0hVeHyrl'
const doc = query.doc(id)

try {
  const response = await doc.get()
  const user = parseUser(response)

  console.log(user)
} catch (e) {
  console.log(`Error: ${e.message}`)
}