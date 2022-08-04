const cluster = require('cluster')
const express = require('express')
const numCPUs = require('os').cpus().length

if(cluster.isPrimary){
    console.log(`Proceso Primario: ${process.pid}`)

    for (let index = 0; index < numCPUs; index++) {
        cluster.fork()
    }

    cluster.on('exit', (worker, code, signal) =>{
        console.log({ code })
        console.log(`worker ${worker.process.pid} died`)
        if (!code) {
          cluster.fork()
        }
        
    })

}else{
    console.log(`Proceso secundario: ${process.pid}`)
    const PORT = process.argv[2] || 8080

    const app = express()
    app.use(express.json())
    app.use(express.urlencoded({extended: true}))

    /*setTimeout(() => {
      //throw new Error('Custom exception')
      process.exit(3)
    }, 2000)*/

    app.get('/', function(req, res, next) { 
        const hora = new Date
        return res.status(200).send(`Servidor express en ${PORT} - PID ${process.pid} - Fecha ${hora.toISOString()}`)
    })

    app.listen(PORT, () => console.log(`Servidor Http escuchando en el puerto ${PORT}`))
    app.on('error', (error) => {
        console.log({error})
    })
}