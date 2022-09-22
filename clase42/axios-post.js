const axios = require('axios')


axios
  .post('http://localhost:8080/api/news', {
    title: 'Noticia 3',
    author: 'axios'
  })
  .then(response => {
    console.log({
      status: response.status,
      data: response.data
    })
  })
