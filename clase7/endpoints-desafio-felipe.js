const express = require('express')
const app = express()

app.get("/api/sumar/:num1/:num2", (req, res)=>{
    let num1 = Number(req.params.num1)
    let num2 = Number(req.params.num2)
    return res.json({'Numero 1': num1, 'Numero 2': num2, Suma: (num2+num1)})
})

app.get('/api/sumar', (req, res)=>{
    let num1 = Number(req.query.num1)
    let num2 = Number(req.query.num2)
    return res.json({'Numero 1': num1, 'Numero 2': num2, Suma: (num2+num1)})
})
app.get("/api/sumar/:opp", (req, res)=>{
    let numeros = req.params.opp.split('+')
    let num1 = Number(numeros[0])
    let num2 = Number(numeros[1])
    return res.json({'Numero 1': num1, 'Numero 2': num2, Suma: (num2+num1)})
})