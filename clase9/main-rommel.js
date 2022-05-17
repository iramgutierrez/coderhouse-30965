const express = require("express")

const app = express()

const PORT = 8080
//const and caps is good practice for server variables

const server = app.listen(PORT, () => {
    console.log(`Express HTTP server running on port ${PORT}`)
})

app.get("/", (req, res) => {
    return res.sendFile(`${__dirname}/handlebars.html`)
})

server.on("error", error => console.log(`Server error: ${error}`))