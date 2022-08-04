console.log(`
Directorio actual ${process.cwd()}
Id del proceso: ${process.pid}
Versión de node: ${process.version}
Ubicación del ejecutable: ${process.execPath},
Sistema operativo: ${process.platform}
Uso de la memoria: ${JSON.stringify(process.memoryUsage(), null, 2)}
`)

process.on('beforeExit', code => {
  console.log(`Proceso a punto de terminar`, code)
})

process.on('exit', code => {
  console.log(`Proceso finalizado`, code)
})

process.on('uncaughtException', error => {
  // TO DO: Escribir el erro en un archivo de auditoria
  console.log(`Excepción cachada ${error.message}`)
  // throw error
})

const version = Number(process.version.substring(0, 3).replace('v', ''))

if (version < 16) {
  console.log('Necesitas actualizar la versión de node')
  process.exit(1)
}

console.log(version, typeof version)

for (let i=0; i <= 50; i++) {
  console.log(i)
  /*if (i === 99) {
    process.exit(1)
  }*/
}

setTimeout(() => {
  console.log('Log con delay de 500ms')
}, 500)

//nonExistsFunction()

console.log('Penultimo log')
console.log('Ultimo log')

