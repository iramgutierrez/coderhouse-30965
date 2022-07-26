for(let i = 2; i < process.argv.length; i++) {
  // 

  const arg = process.argv[i]

  if (arg === '--help' || arg === '-h') {
    console.log('Este script lista todos los argumentos recibidos por linea de comandos')
    return
  }

  console.log(`${i} => ${process.argv[i]}`)
}