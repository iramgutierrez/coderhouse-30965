import query from './db.js'
import parseUser from './utils/parseUser.js'

try {
  const response = await query.get()
  // const response = await query.select('nombre').get()
  const docs = response.docs

  const users = docs.map(parseUser)

  console.log(users)
} catch(e) {
  console.log(`Error: ${e.message}`)
}