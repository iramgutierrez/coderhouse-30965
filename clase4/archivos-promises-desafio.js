const fs = require('fs')

fs.promises.readFile('./info.txt', 'utf-8')
  .then(data => {
    const info = JSON.parse(data)
    console.log(info)
    info.contenidoObj.author = 'Coderhouse'
    return fs.promises.writeFile('./package.json.coder', JSON.stringify(info.contenidoObj, null, 2))
  })
  .catch(err => {
    console.error(err.message)
  })