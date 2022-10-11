const Router = require('koa-router')

const router = new Router({
  prefix: '/books'
})

const books = [
  { id: 1, name: 'Libro 1', author: "IG" },
  { id: 2, name: 'Libro 2', author: "IG" },
  { id: 3, name: 'Libro 3', author: "IG" },
  { id: 4, name: 'Libro 4', author: "IG" },
  { id: 5, name: 'Libro 5', author: "IG" },
  { id: 6, name: 'Libro 6', author: "IG" }
]

router.get('/', ctx => {
  ctx.body = books
})

router.get('/:id', ctx => {
  const id = +ctx.params.id
  const book = books.find(b => b.id === id)

  if (!book) {
    ctx.response.status = 404
    ctx.body = {
      error: 'Book not found'
    }

    return
  }

  ctx.body = book
})

router.post('/', ctx => {
  const newBook = {
    id: books.length + 1,
    name: ctx.request.body.name,
    author: ctx.request.body.author
  }

  books.push(newBook)

  ctx.response.status = 201
  ctx.body = newBook
})

router.put('/:id', ctx => {
  const id = +ctx.params.id

  const book = books.find(b => b.id === id)

  if (!book) {
    ctx.response.status = 404
    ctx.body = {
      error: 'Book not found'
    }

    return
  }

  book.name = ctx.request.body.name || book.name
  book.author = ctx.request.body.author || book.author

  ctx.body = book

  /*const bookIndex = books.findIndex(b => b.id === id)

  if (bookIndex === -1 ) {
    ctx.response.status = 404
    ctx.body = {
      error: 'Book not found'
    }

    return
  }

  books[bookIndex].name = ctx.request.body.name || books[bookIndex].name
  books[bookIndex].author = ctx.request.body.author || books[bookIndex].author

  ctx.body = books[bookIndex]*/
})

router.delete('/:id', ctx => {
  const id = +ctx.params.id

  const bookIndex = books.findIndex(b => b.id === id)

  if (bookIndex === -1 ) {
    ctx.response.status = 404
    ctx.body = {
      error: 'Book not found'
    }

    return
  }

  books.splice(bookIndex, 1)

  ctx.response.status = 204
})

module.exports = router