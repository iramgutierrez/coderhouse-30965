const fs = require('fs')

fs.readFile('./package.json', 'utf-8', (err, package) => {
  if (err) {
    console.error(err.message)
    throw new Error(err.message)
  } else {
    const info = {
      contenidoStr: package,
      contenidoObj: JSON.parse(package),
      size: fs.statSync('./package.json').size
    }

    console.log(info)

    fs.writeFile('./info.txt', JSON.stringify(info, null, 2), err => {
      if (err) {
        console.error(err.message)
        throw new Error(err.message)
      } else {
        console.log('Archivo info.txt escrito correctamente')
      }
    })
  }
})