const http = require('http')

console.log(process.argv)
const PORT = process.argv[2] || 8080

  http.createServer((req, res) => {
    console.log('Request')
    res.writeHead(200)
    res.end(`Process: ${process.pid}`)
  }).listen(PORT)