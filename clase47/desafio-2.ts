import { serve } from 'https://deno.land/std@0.100.0/http/mod.ts'

const server = serve({ 
  port: 3000
})

for await (const req of server) {
  const path = req.url.substring(1, req.url.indexOf('?') !== -1 ? req.url.indexOf('?') : req.url.length )
  console.log(path)
  const urls: Record<string, any> = {
    'hola': () => {
      req.respond({
        body: 'Hola'
      })
    },
    'frase': () => {
      let frase = req.url.replace('/frase?frase=', '')
      frase = decodeURIComponent(frase)

      const response = frase.split(' ').reverse().join(' ')

      req.respond({
        body: JSON.stringify(response)
      })
    }
  }

  const urlFn = urls[path]

  urlFn()
  
}