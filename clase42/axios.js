const axios = require('axios')


const getAll = () => axios.get('http://localhost:8080/api/news')

const getOne = () => axios.get('http://localhost:8080/api/news/632095685a18786951aa3ab3')
  

Promise.all([getAll(), getOne()])
  .then(results => {
    console.log({ results })
  })
  