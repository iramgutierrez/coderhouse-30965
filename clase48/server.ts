import { Application } from './deps.ts'

import { router } from './routers/users.ts'
import { logger } from './middleware/logger.ts'

const app = new Application()

app.use(logger)
app.use(router.routes())

/* app.use(ctx => {
  ctx.response.body = 'Hello World!'
}) */

const PORT: number = Number(Deno.env.get('PORT')) || 8080

console.log(`Servidor Deno escuchando en el puerto ${PORT}`)

await app.listen({ port: PORT })