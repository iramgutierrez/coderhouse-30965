import axios from 'axios'
import got from 'got'

setInterval(() => {
  axios
    .post('http://localhost:8082/ingreso', {
      number: Math.ceil(Math.random()* 100)
    })
}, 2000)


setInterval(async () => {
const response = await got('http://localhost:8082/egreso', {
  responseType: 'json'
})

console.log(response.body)
}, 10000)