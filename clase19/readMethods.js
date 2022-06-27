const db = require('./db')
const estudianteModel = require('./models/estudiante')

;(async () => {

  await db

  const students = await estudianteModel
    .find({ }, { nombre: 1, apellido: 1, _id: 0 })
    .sort({ nombre: -1 })

  console.log(students)
})()