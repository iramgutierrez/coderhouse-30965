const http = require('http')

const options = {
  hostname: 'localhost',
  port: 8080,
  path: '/api/news',
  method: 'GET'
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

req.end()
