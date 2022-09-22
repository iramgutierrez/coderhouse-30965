import got from 'got'

const response = await got.post('http://localhost:8080/api/news', {
  json: {
    title: 'Noticia 4',
    author: 'got'
  },
  responseType: 'json'
})

console.log(response.body)