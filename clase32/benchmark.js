const autocannon = require('autocannon')
const { PassThrough } = require('stream')

function run (url) {
  const buf = []
  const outputStream = new PassThrough()

  const inst = autocannon({
    url,
    connections: 200,
    duration: 30
  })

  autocannon.track(inst, { outputStream })

  outputStream.on('data', data => buf.push(data))

  inst.on('done', () => {
    process.stdout.write(Buffer.concat(buf))
  })
}

console.log('Running all benchmarks...')

//run('http://localhost:8080/auth-bloq?username=iram&password=qwerty123')
run('http://localhost:8080/auth-nobloq?username=iram&password=qwerty123')