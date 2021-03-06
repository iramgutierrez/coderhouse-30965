import express from 'express'
import usuariosRouter from './routers/usuarios.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/users', usuariosRouter)

const PORT = 8080

app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`))