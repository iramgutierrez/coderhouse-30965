const NewsDAOMemory = require('./NewsDAOMemory')
const assert = require('assert').strict

describe('Test sobre DAO de noticias', () => {
  it('Deberia crear el DAO de noticias vacio', async () => {
    const news = new NewsDAOMemory()

    assert.strictEqual((await news.getAll()).length, 0)
  })

  it('Deberia agregar una noticia', async () => {
    const news = new NewsDAOMemory()

    await news.create({
      title: 'Noticia test',
      author: 'Mocha'
    })

    assert.strictEqual((await news.getAll()).length, 1)

    assert.deepStrictEqual(await news.getAll(), [{
      title: 'Noticia test',
      id: 1,
      author: 'Mocha'
    }])
  })
})