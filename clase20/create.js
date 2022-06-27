const db = require('./db')
const userModel = require('./models/user')

const data = {
  lastname: 'Perez',
  email: 'juanperez@mail.com',
  username: 'juanperez',
  password: 'qwerty'
}

const user = new userModel(data)
 
db
  .then(_ => user.save())
  .then(document => console.log('User saved', document))
  .catch(err => console.error(`Error: ${err.message}`))
  .finally(_ => process.exit())