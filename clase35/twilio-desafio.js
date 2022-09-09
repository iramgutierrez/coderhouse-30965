const twilio = require('twilio')
const parseArgs = require('minimist')

const args = parseArgs(process.argv.slice(2))

if(!args.to) {
  throw new Error('El parámetro to es obligatorio')
}

args.to = `+${args.to}`

console.log(args)

const ACCOUNT_SID = 'AC069b400d93eb54cc62faf72fee6c94e2'
const AUTH_TOKEN = '3b1ddf9386610805003b038619a80b2b'
const PHONE_NUMBER = '+18329153319'

const client = twilio(ACCOUNT_SID, AUTH_TOKEN)

const defaultBody = 'Hola desde Node.js'

const sendSMS = async () => {
  try {
    const message = await client.messages.create({
      body: args.body || defaultBody,
      from: PHONE_NUMBER,
      to: args.to
    })

    console.log(message)
  } catch (e) {
    console.error(e)
  }
}

sendSMS()