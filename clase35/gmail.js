const { createTransport } = require('nodemailer')
const dotenv = require('dotenv')

dotenv.config()

const TEST_MAIL = process.env.MAIL
const TEST_PASSWORD = process.env.PASSWORD_MAIL

const transporter = createTransport({
  service: 'gmail',
  port: 587,
  auth: {
    user: TEST_MAIL,
    pass: TEST_PASSWORD
  }
})

const mailOptions = {
  from: `Servidor Node.js <${TEST_MAIL}>`,
  to: `${TEST_MAIL}, iram.ch.30965@gmail.com`,
  subject: 'Mail de prueba desde Node.js',
  html: `
  <h1 style="color: blue;">
    Contenido de prueba desde <span style="color: green;">Node.js con Nodemailer</span>
  </h1>
  `,
  attachments: [
    {
      path: 'node.png'
    }
  ]
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