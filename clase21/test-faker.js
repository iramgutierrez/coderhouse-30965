import faker from 'faker'
import { writeFile } from 'fs'

faker.locale = 'es'

const { name, internet, random } = faker

let str = `Nombre;Apellido;Email;Trabajo;Lugar
`

for (let i = 0; i < 100; i++) {
  str += `${name.firstName()};${name.lastName()};${internet.email()};${name.jobTitle()};${random.locale()};
`
}

writeFile('./test.csv', str, err => {
  if (err) console.log(err)
  
  console.log('archivo generado')
})

