const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('views', './views')
// app.set('view engine', 'pug')
app.set('view engine', 'ejs')


app.get('', (req, res) => {
  const data = {
    comision: 30965
  }
  return res.render('index', data)
})

app.get('/hello', (req, res) => {
  const data = {
    mensaje: 'Aprendiendo Pug JS'
  }
  return res.render('hello', data)
})

app.get('/datos-martin', (request, response) => {
  const data = {
      min : request.query.min,
      max : request.query.max,
      nivel : request.query.nivel,
      titulo : request.query.titulo
  } 
  console.log({data})
  return response.render('datos-martin', data)
})

app.get("/datos-nazareno", (req, res) => {
  const { title, min, max, value } = req.query;
  res.render("datos-nazareno", {
    title,
    value,
    min,
    max,
    color: "blue",
  });
});

app.get('/message', (req, res) => {
  const data = {
    message: {
      name: 'Aprendiendo EJS'
    }
  }

  return res.render('message', data)
})

app.get('/alumnos', (req, res) => {
  const alumnos = [
    { nombre: 'Aaron', apellido: 'Jallaza' },
    { nombre: 'Agustina', apellido: 'Prats' },
    { nombre: 'Alan', apellido: 'Mathiasen' },
    { nombre: 'Alejandro', apellido: 'Zapata' },
    { nombre: 'Benjamin', apellido: 'Hernandez' }
   ]

   const data = {
     alumnos,
     comision: 30965
   }

   return res.render('alumnos', data)
})

const personas = []

app.get('/form', (req, res) => {
  const data = {
    personas
  }

  return res.render('form', data)
})

app.post('/personas', (req, res) => {
  const persona = {
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    edad: req.body.edad,
  }
  personas.push(persona)

  return res.redirect('/form')
})

const PORT =8080

const server = app.listen(PORT, () => {
  console.log(`Servidor HTTP corriendo en el puerto ${PORT}`)
})

server.on('error', error => console.log(`Error en servidor: ${error}`))