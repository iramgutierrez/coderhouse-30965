const request = require('supertest')('http://localhost:8080/api/news')
const expect = require('chai').expect

describe('test news api restful', () => {
  describe('GET /', () => {
    it('deberia retornar status 200', async () => {
      const response = await request.get('/')

      expect(response.status).to.eql(200)
    })
  })

  describe('POST /', () => {
    it('deberia agregar una noticia', async () => {
      const response = await request.post('/').send({
        title: 'Noticia test',
        author: 'mocha chai supertest'
      })

      expect(response.status).to.eql(201)

      const data = response.body

      expect(data).to.includes.keys('title', 'author')
      expect(data.title).to.eql('Noticia test')
      
    })
  })
})