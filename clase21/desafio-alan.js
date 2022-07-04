const express = require("express");
const faker = require('faker')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 8080;

const nombres = ["Luis", "Lucía", "Juan", "Augusto", "Ana"];
const apellidos = ["Pieres", "Cacurri", "Bezzola", "Alberca", "Mei"];
const colores = ["rojo", "verde", "azul", "amarillo", "magenta"];

const getRandom = (cant) => {
    const arr = [];
    for (let i = 0; i < cant; i++) {
        const newObj = {};
        newObj.nombre = faker.name.firstName(); //nombres[Math.floor(Math.random() * nombres.length)];
        newObj.apellido = faker.name.lastName(); //apellidos[Math.floor(Math.random() * apellidos.length)];
        newObj.color = faker.commerce.color(); // colores[Math.floor(Math.random() * colores.length)];
        arr.push(newObj);
    }
    return arr;
};

app.get("/test", (req, res) => {
    const cant = req.query.cant || 10
    const response = getRandom(cant)
    console.log(response);
    return res.json(response);
});

const server = app.listen(PORT, () =>
    console.log(`Server escuchando en puerto ${8080}`)
);