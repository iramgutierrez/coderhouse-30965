const express = require('express')
const mongoose = require('mongoose')

const userRouter = require('./Routers/userRouter')

mongoose.connect('mongodb://localhost:27017/30965-clase38')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/users', userRouter)

const PORT = process.env.PORT || 8080

app.listen(PORT, () => console.log(`Servidor esta escuchando en el puerto ${PORT}`))