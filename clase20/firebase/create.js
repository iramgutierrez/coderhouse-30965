import query from './db.js'

//const id = 1
//const doc = query.doc(id.toString())

try {
  //   const user = await doc.set({ nombre: 'Iram', dni: 123456 })
  const user = await query.add({ nombre: 'Pia', dni: 654321 })
  console.log(user)
} catch (e) {
  console.log(`Error: ${e.message}`)
}
