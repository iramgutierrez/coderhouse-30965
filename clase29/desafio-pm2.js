const express = require('express')

const PORT = process.argv[2] || 8080

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.get('/', function(req, res, next) { 
    const hora = new Date
    return res.status(200).send(`Servidor express en ${PORT} - PID ${process.pid} - Fecha ${hora.toISOString()}`)
})

app.listen(PORT, () => console.log(`Servidor Http escuchando en el puerto ${PORT}`))
app.on('error', (error) => {
    console.log({error})
})