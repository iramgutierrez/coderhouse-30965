const twilio = require('twilio')

const ACCOUNT_SID = 'AC069b400d93eb54cc62faf72fee6c94e2'
const AUTH_TOKEN = '3b1ddf9386610805003b038619a80b2b'
const PHONE_NUMBER = '+18329153319'

const client = twilio(ACCOUNT_SID, AUTH_TOKEN)

const sendSMS = async () => {
  try {
    const message = await client.messages.create({
      body: 'Hola desde Node.js',
      from: PHONE_NUMBER,
      to: '+525576639967'
    })

    console.log(message)
  } catch (e) {
    console.error(e)
  }
}

sendSMS()