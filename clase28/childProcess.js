const { exec, execFile, spawn } = require('child_process')

/*exec('ls -lh', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`)
    return
  }

  if (stderr) {
    console.error(`stderr: ${stderr}`)
  }

  console.log(`stdout: ${stdout}`)
})*/

/*execFile(`${__dirname}/ls.sh`, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`)
    return
  }

  if (stderr) {
    console.error(`stderr: ${stderr}`)
  }

  console.log(`stdout: ${stdout}`)
})*/

const child = spawn('find', ['.'])

let count = 0
child.stdout.on('data', data => {
  console.log(`stdout: ${count++}`)
})

child.stderr.on('data', data => {
  console.log(`stderr: ${data}`)
})

child.on('error', error => {
  console.error(`Error: ${error.message}`)
})

child.on('close', code => {
  console.log(code)
})