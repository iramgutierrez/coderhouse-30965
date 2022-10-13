import { serve } from 'https://deno.land/std@0.100.0/http/mod.ts'

const server = serve({ 
  port: 3000
})

for await (const req of server) {
  req.respond({
    body: 'Hello Deno server con Denon!'
  })
}