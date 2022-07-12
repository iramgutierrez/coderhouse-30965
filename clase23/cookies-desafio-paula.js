const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.post('/cookies', (req, res) => {
  const cookie = {
      name: req.body.name,
      value: req.body.value,
      time: req.body.time
  }
  return res.cookie(cookie.name, cookie.value, {maxAge: cookie.time}).send('Cookie set')

})

app.get('/cookies', (req, res) => {
  return res.status(201).json(req.cookies)
})

app.delete('/:cookie', (req, res) => {
 const cookie = req.params.cookie
  console.log(req.cookies, cookie, req.cookies[cookie], cookie in req.cookies)
  if(!req.cookies[cookie]) {
      return res.status(404).json({
          error: 'Cookie not found'
      })
  }


  return res.clearCookie(cookie).send('Cookie clear')
})

const PORT = 8080

app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`))