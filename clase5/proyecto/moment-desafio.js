const moment = require('moment')

const today = moment()
const birthDay = moment('06/03/1989', 'DD/MM/YYYY')
const diffYears = today.diff(birthDay, 'years')
const diffDays = today.diff(birthDay, 'days')

const message = `
Hoy es ${today.format('DD/MM/YYYY')}
Nací el ${birthDay.format('DD/MM/YYYY')}
Desde mi nacimiento han pasado ${diffYears} años
Desde mi nacimiento han pasado ${diffDays} días
`

console.log(message)