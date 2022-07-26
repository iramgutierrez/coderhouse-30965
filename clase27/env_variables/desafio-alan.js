const modo = process.env.MODO || 'prod'
const puerto = Number(process.env.PUERTO) || 0
const debug = process.env.DEBUG ? process.env.DEBUG === 'true' : false

const config = {
    modo, puerto, debug
}

console.log(config)