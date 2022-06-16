// mostrar base de datos

show dbs

// mostrar colecciones dentro de una base de datos

show collections

// mostrar documentos dentro de una colección

db.users.find()

// insertar un documento a una colección

db.users.insertOne({ name: "Alejandro", lastname: "Zapata" })

// insertar varios documentos a una colección

db.users.insertMany([{ name: "Martin", lastname: "Carrera"}, { name: "Felipe", lastname: "Costa" }])

// Podemos definir variables directamente en mongo y mongosh para utilizarse después

const products = [
  { name: '', precio: 10 },
  { name: 'Coca cola', precio: 20 },
  { name: 'Agua mineral', precio: 15 },
  { name: 'Agua natural', precio: 10 }
]

// insertar documentos desde una variable definida previamente

db.products.insertMany(products)

// insert con tipo de dato boleano

db.products.insertOne({ name: "Fanta", precio: 13, inStock: true })

// insert con tipo de dato Date

db.products.insertOne({ name: "Sprite", precio: 11, inStock: false, date: new Date() })

