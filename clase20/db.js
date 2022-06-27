const mongoose = require('mongoose')

const URL = `mongodb+srv://iram:${process.env.MONGODB_PASSWORD}@cluster0.msdinjv.mongodb.net/30965?retryWrites=true&w=majority`
//const URL = 'mongodb://localhost:27017/30965'
const connection = mongoose.connect(URL, {
  useNewUrlParser: true
})
.then(_ => console.log('Conectado a la base de datos de MongoDB Atlas'))

module.exports = connection