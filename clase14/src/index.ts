import express from 'express'
import { Request, Response, Express } from 'express'
import Persona from './Persona'
import { getTime } from './lib/utils'

const app: Express = express()

const p: Persona = new Persona('Coder', 'House')

app.get('/', (req: Request, res: Response) => {
  return res.send({
    time: getTime(),
    name: p.getFullName()
  })
})

const PORT:number = 8080

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`))