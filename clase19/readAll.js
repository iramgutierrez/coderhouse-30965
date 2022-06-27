const db = require('./db')
const userModel = require('./models/user')

db
  .then(_ => userModel.find({}))
  .then(users => console.log(users))
  .catch(err => console.error(`Error: ${err.message}`))
  .finally(_ => process.exit())