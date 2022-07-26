const dotenv = require('dotenv')
const path = require('path')

const mode = process.argv[2] || 'local'

const fileEnv = `.env.${mode}`

dotenv.config({
  path: path.resolve(__dirname, fileEnv)
})

console.log(process.env)