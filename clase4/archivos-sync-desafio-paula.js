const fs = require ('fs');
const data = fs.writeFileSync('./fyh.txt', Date());
console.log(data);

try {
    console.log(fs.readFileSync('./fyh.txt', 'utf-8'))
} catch (err) {
    console.error('El archivo no existe')
}