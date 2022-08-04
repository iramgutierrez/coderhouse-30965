process.on('exit', code => {
  console.log(code)
})

const numbers = process.argv.slice(2).map(n => {
  if(isNaN(n)) {
    if (n === 'true' ||  n === 'false') {
      return Boolean(n)
    }

    return n
  }
  return Number(n)
})

if (numbers.length === 0) {
  const error = {
    descripcion: 'Entrada vacia'
  }

  console.log({ error })

  process.exit(-4)
}

if (numbers.some(n => typeof n !== 'number')) {
  const error = {
    descripcion: 'Error de tipo',
    numeros: numbers,
    tipos: numbers.map(n => typeof n)
  }

  console.log({ error })

  process.exit(-5)
}

const datos = {
  numeros: numbers,
  promedio: numbers.reduce((acc, n) => (acc + n ), 0) / numbers.length,
  max: Math.max(...numbers),
  min: Math.min(...numbers),
  ejecutable: process.execPath,
  pid: process.pid
}

console.log({ datos })