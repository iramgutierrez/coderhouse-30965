const cluster = require('cluster')
const http = require('http')

const numCPUs = require('os').cpus().length


if (cluster.isPrimary) {
  console.log(`Proceso primario: ${process.pid}`)

  for (let i= 0; i < numCPUs; i++) {
    cluster.fork()
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log({ worker, code, signal })
  })
} else {
  console.log(`Proceso worker: ${process.pid}`)

  const PORT = process.argv[2] || 8080

  http.createServer((req, res) => {
    res.writeHead(200)
    res.end(`Process: ${process.pid}`)
  }).listen(PORT)
}