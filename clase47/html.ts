import { serve } from 'https://deno.land/std@0.100.0/http/mod.ts'

const PORT = Number(Deno.env.get('PORT')) || 8080

const server = serve({
  port: PORT
})

for await (const req of server) {
  req.respond({
    status: 200,
    headers: new Headers({
      'content-type': 'text/html'
    }),
    body: `<h2>Hola alumnos de Coderhouse</h2>`
  })
}