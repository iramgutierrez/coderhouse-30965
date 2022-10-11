const Koa = require('koa')

const app = new Koa()

app.use(async ctx => {
  ctx.body = 'Hello World'
})

const PORT = process.env.PORT || 8080

app.listen(PORT)