const axios = require('axios')

axios.get('http://localhost:8081')
  .then(response => {
    console.log(response.data)
  })
  