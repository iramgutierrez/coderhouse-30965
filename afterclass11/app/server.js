const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const path = require('path')
const swaggerUi = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')
const { graphqlHTTP } = require('express-graphql')

const newsRouterFn = require('./Routers/newsRouter')
const graphqlSchema = require('./grahpql/schema')
const graphqlRootValue = require('./grahpql/rootValue')

dotenv.config({
  path: path.resolve(process.cwd(), process.env.NODE_ENV + '.env')
})

const optionsDocs = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Express API with Swagger',
      description: 'API Restful de noticias'
    }
  },
  apis: ['./docs/**/*.yaml']
}

const app = express()

const specs = swaggerJsDoc(optionsDocs)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))

app.use(cors())

app.use('/graphql', graphqlHTTP({
  schema: graphqlSchema,
  rootValue: graphqlRootValue(),
  graphiql: true
}))

app.use(express.json())

app.use('/api/news', newsRouterFn())

const PORT = process.env.PORT || 8080

app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`))