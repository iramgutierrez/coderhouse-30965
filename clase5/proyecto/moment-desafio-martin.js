const moment = require('moment')

const now = moment()
const nacimiento = moment('1993-04-29')
const differencia = moment.duration(now.diff(nacimiento))

console.log('Hoy es ' + now.format('DD/MM/YYYY'))
console.log('Naci el ' + nacimiento.format('DD/MM/YYYY'))
console.log('Desde mi nacimiento han pasado ' + Math.floor(differencia.asYears()) + ' años')
console.log('Desde mi nacimiento han pasado ' + Math.floor(differencia.asDays()) + ' dias')