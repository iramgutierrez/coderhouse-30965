const db = require('./db')
const userModel = require('./models/user')

db
  .then(_ => userModel.findOne({ username: 'juanperez'}))
  .then(user => {
    console.log(user)
    user.password = 'asdfgh'
    return user.save()
  })
  .then(user => console.log(user))
  .catch(err => console.error(`Error: ${err.message}`))
  .finally(_ => process.exit())