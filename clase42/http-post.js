const http = require('http')

const data = JSON.stringify({
  title: 'Noticia 2',
  author: 'http nativo'
})

const options = {
  hostname: 'localhost',
  port: 8080,
  path: '/api/news',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
}

const req = http.request(options, res => {
  console.log({ statusCode: res.statusCode })

  res.on('data', d => {
    console.log(d.toString())
  })
})

req.on('error', error => {
  console.error(error)
})

req.write(data)
req.end()
