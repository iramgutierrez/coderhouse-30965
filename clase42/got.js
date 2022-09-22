import got from 'got'

const response = await got('http://localhost:8080/api/news', {
  responseType: 'json'
})

console.log(response.body)