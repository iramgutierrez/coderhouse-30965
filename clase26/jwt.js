const express = require('express')
const jwt = require('jsonwebtoken')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const PRIVATE_KEY = 'PRIVATEKEYJWT'

const generateToken = user => {
  const token = jwt.sign({ id: user.id, username: user.username }, PRIVATE_KEY, { expiresIn: '24h' })
  return token
}

/*const jwtMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).json({
      error: 'Necesitas enviar un JWT'
    })
  }

  const token = authHeader.split(' ')[1]

  jwt.verify(token, PRIVATE_KEY, (err, payload) => {
    if (err) {
      return res.status(401).json({
        error: 'Necesitas enviar un JWT válido'
      })
    }
    const user = users.find(user => user.id === payload.id)
    
    if (!user) {
      return res.status(401).json({
        error: 'El usuario no existe.'
      })
    }

    delete user.password

    req.user = user

    return next()
  })
}*/

const jwtMiddelware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ error: "Necesitas enviar un JWT" });
  }
  const token = authHeader.split(" ")[1];
  console.log(token);
  jwt.verify(token, PRIVATE_KEY, (err, payload) => {
    if (err) {
      return res.status(401).json({ error: "Necesitas enviar un JWT valido" });
    }
    const user = users.find(user=>user.id===payload.id)
    if(!user){
        res.status(401).json({})
    }
    req.user = user
    return next();
  });
};

const users = []

app.post('/signup', (req, res) => {
  const { username, password, email } = req.body
  
  const userExists = users.some(user => user.username === username)

  if (userExists) {
    return res.status(400).json({ error: 'El nombre de usuario ya esta en uso.' })
  }

  const user = {
    id: users.length + 1,
    username,
    password,
    email
  }

  users.push(user)

  const accessToken = generateToken(user)

  return res.status(201).json({
    user,
    accessToken
  })
})

app.post('/login', (req, res) => {
  const { username, password } = req.body

  const user = users.find(user => user.username === username && user.password === password)

  if (!user) {
    return res.status(401).json({ error: 'Credenciales incorrectas.' })
  }

  const accessToken = generateToken(user)

  return res.json({ user, accessToken })
})

/*app.get('/profile', jwtMiddelware, (req, res) => {
  return res.json(req.user)
})*/

app.get("/profile", jwtMiddelware, (req, res) => {
  return res.json(req.user);
});

const PORT = 8080

app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`))