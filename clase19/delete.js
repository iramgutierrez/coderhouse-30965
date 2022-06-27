const db = require('./db')
const userModel = require('./models/user')

db
  .then(_ => {
    return userModel.deleteOne({
      username: 'juanperez'
    })
  })
  .then(result => console.log(result))
  .catch(err => console.error(`Error: ${err.message}`))
  .finally(_ => process.exit())