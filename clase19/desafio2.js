const mongoose = require('mongoose')

const URL = 'mongodb://localhost:27017/colegio'

const estudianteSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  edad: { type: Number, required: true },
  dni: { type: String, required: true },
  curso: { type: String, required: true },
  nota: { type: Number, required: true }
})

const estudianteModel = mongoose.model('Estudiante', estudianteSchema)

mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(_ => estudianteModel.find({}).sort({ nombre: 1 }))
  .then(estudiantes => {
    console.log('A)', estudiantes)
    return estudianteModel.findOne({}).sort({ edad: 1 })
  })
  .then(estudianteMasJoven => {
    console.log('B)', estudianteMasJoven)
    return estudianteModel.find({ curso: '2A'})
  })
  .then(estudiantes2A => {
    console.log('C)', estudiantes2A)
    return estudianteModel.findOne({}).sort({ edad: 1 }).skip(1)
  })
  .then(segundoEstudianteMasJoven => {
    console.log('D)', segundoEstudianteMasJoven)
    return estudianteModel.find({}, { nombre: 1, apellido: 1, curso: 1, _id: 0}).sort({ apellido: -1 })
  })
  .then(estudiantes => {
    console.log('E)', estudiantes)
    return estudianteModel.find({ nota: 10})
  })
  .then(estudiantescon10 => {
    console.log('F)', estudiantescon10)
    return estudianteModel.find({})
  })
  .then(todos => {
    const promedio = (todos.reduce((total, estudiante) => {
      return total + estudiante.nota
    }, 0)) / todos.length

    console.log('G)', promedio)


    const estudiantes1A = todos.filter(estudiante => estudiante.curso === '1A')

    const promedio1A = (estudiantes1A.reduce((total, estudiante) => {
      return total + estudiante.nota
    }, 0)) / estudiantes1A.length

    console.log('H)', promedio1A)

    return 
  })
  .catch(err => console.error(`Error: ${err.message}`))
  .finally(_ => process.exit())