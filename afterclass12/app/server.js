const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const path = require('path')
const swaggerUi = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')
const expressSession = require('express-session')
const passport = require('passport')
const flash = require('connect-flash')
const { graphqlHTTP } = require('express-graphql')

const newsRouterFn = require('./Routers/newsRouter')
const authRouterFn = require('./Routers/authRouter')
const sessionRouterFn = require('./Routers/sessionRouter')
const graphqlSchema = require('./grahpql/schema')
const graphqlRootValue = require('./grahpql/rootValue')
const passportInit = require('./passport/init')

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

app.use(expressSession({ secret: 'qwerty' }))
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())

app.set('view engine', 'ejs')

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))

app.use(cors())

app.use('/graphql', graphqlHTTP({
  schema: graphqlSchema,
  rootValue: graphqlRootValue(),
  graphiql: true
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/news', newsRouterFn())
app.use('/api/auth', authRouterFn())
app.use('/auth', sessionRouterFn(passport))

const PORT = process.env.PORT || 8081

app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`))