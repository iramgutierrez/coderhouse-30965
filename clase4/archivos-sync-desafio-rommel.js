const fecha = new Date()

const fs = require("fs")

try {
    fs.writeFileSync("./fyh.txt", fecha.toLocaleDateString())
} catch (err) {
    console.error("Error al escribir el archivo.")
}

try {
    const data = fs.readFileSync("./fyh.txt", "utf-8")
    console.log(data)
} catch (err) {
    console.error("Error al leer el archivo.")
}