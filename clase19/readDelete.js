const db = require('./db')
const userModel = require('./models/user')

db
  .then(_ => userModel.findOne({ username: 'juanperez' }))
  .then(user => {
    console.log(user)
    if (!user) {
      return user
    }
    return user.remove()
  })
  .then(user => console.log(user))
  .catch(err => console.error(`Error: ${err.message}`))
  .finally(_ => process.exit())