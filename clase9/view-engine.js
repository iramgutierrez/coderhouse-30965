const express = require('express')
const fs = require('fs')

const app = express()

app.engine('coder', (filePath, options, callback) => {
  console.log({ filePath, options })
  fs.readFile(filePath, (err, content) => {
    if (err) {
      return callback(new Error(err))
    }

    const template = content.toString()

    console.log({ template })

    const rendered = template
      .replace('#title#', options.title)
      .replace('#message#', options.message)
      .replace('#name#', options.name)

    return callback(null, rendered)
  })
})

app.engine('ntl', (filePath, options, callback) => {
  console.log({ filePath, options })
  fs.readFile(filePath, (err, content) => {
    if (err) {
      return callback(new Error(err))
    }

    const template = content.toString()

    console.log({ template })

    const rendered = template
      .replace('#title#', options.title)
      .replace('#message#', options.message)
      .replace('#name#', options.name)

    return callback(null, rendered)
  })
})

app.set('views', './views')
app.set('view engine', 'coder')


app.get('', (req, res) => {
  const data = {
    title: 'Hola',
    message: '<div>Motor de plantillas propio</div>',
    name: 'Iram'
  }

  return res.render('index', data)
})

/* const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <span>Contenido estatico</span>
</body>
</html>
`

const compile = content => {
  return content.replace('estatico', 'dinamico')
} */

const PORT = 8080

const server = app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`)
})

server.on('error', error => console.log(`Error en servidor: ${error}`))