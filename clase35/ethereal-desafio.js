const { createTransport } = require('nodemailer')
const parseArgs = require('minimist')

const TEST_MAIL = 'susana.kris37@ethereal.email'
const TEST_PASSWORD = 'UvNyMCUkrsqhtSUuQN'

const args = parseArgs(process.argv.slice(2))

const transporter = createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
    user: TEST_MAIL,
    pass: TEST_PASSWORD
  }
})

const defaultSubject = 'Mail de prueba desde Node.js'
const defaultMessage = `
<h1 style="color: blue;">
  Contenido de prueba desde <span style="color: green;">Node.js con Nodemailer</span>
</h1>
`

const mailOptions = {
  from: `Servidor Node.js <${TEST_MAIL}>`,
  to: TEST_MAIL,
  subject: args.subject || defaultSubject,
  html: args.message || defaultMessage
}

const sendMail = async () => {
  try {
    const response = await transporter.sendMail(mailOptions)
    console.log(response)
  } catch (e) {
    console.error(error)
  }
}

sendMail()