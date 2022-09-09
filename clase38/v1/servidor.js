import express from 'express'
import routerDatos from './ruteo.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/datos', routerDatos)

const PORT = process.env.PORT || 8080

app.listen(PORT, () => console.log(`Servidor esta escuchando en el puerto ${PORT}`))