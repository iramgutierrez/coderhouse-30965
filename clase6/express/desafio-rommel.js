const express = require("express")

const app = express()

const PORT = 8080
//const and caps is good practice for server variables

const server = app.listen(PORT, () => {
    console.log(`Express HTTP server running on port ${PORT}`)
})

app.get("/", (req, res) => {
    return res.send(`<h1 color: blue> Welcome to the express server </h1>`)
})

let visitCount = 0

app.get("/visits", (req, res) => {
    visitCount++
    res.send(`Visit count: ${visitCount}`)
})

app.get("/dat", (req, res) => {
    const dateAndTime = new Date()
    res.send({ dateAndTime })
})

server.on("error", error => console.log(`Server error: ${error}`))