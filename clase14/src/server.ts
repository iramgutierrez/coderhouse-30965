import express from 'express'
import { Request, Response, Express } from 'express'
import Perimetro from './Perimetro'
import Superficie from './Superficie'

const app: Express = express()

const isAdmin= false

const PORT = process.env.PORT || 8080

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`))

type CuadradoParametros = {
  lado: number
}

type RectanguloParametros = {
  base: number,
  altura: number,
}

type CirculoParametros = {
  diametro: number
}

type Resultado = {
  tipo: string,
  figura: string,
  parametros?: CuadradoParametros|RectanguloParametros|CirculoParametros,
  resultado?: number
}

app.get('/perimetro/:figura', (req: Request, res: Response) => {
  const resultado: Resultado = {
    tipo: 'Perimetro',
    figura: req.params.figura
  }

  switch (req.params.figura) {
    case 'cuadrado':
      const lado = req.query.lado ? Number(req.query.lado) : 0
      resultado.parametros = {
        lado
      }

      resultado.resultado = Perimetro.cuadrado(lado)
      break
    case 'rectangulo':
      const base = req.query.base ? Number(req.query.base) : 0
      const altura = req.query.altura ? Number(req.query.altura) : 0

      resultado.parametros = {
        base,
        altura
      }

      resultado.resultado = Perimetro.rectangulo(base, altura)
      break
    case 'circulo':
      const diametro = req.query.diametro ? Number(req.query.diametro) : 0
      resultado.parametros = {
        diametro
      }

      resultado.resultado = Perimetro.circulo(diametro)
      break
  }

  return res.json(resultado)
})