const nombres = ['Luis', 'Lucía', 'Juan', 'Augusto', 'Ana']
const apellidos = ['Pieres', 'Cacurri', 'Bezzola', 'Alberca', 'Mei']
const colores = ['rojo', 'verde', 'azul', 'amarillo', 'magenta']

const getRandomPosition = (max = 5) => {
    return Math.floor(Math.random() * max)
}


const random = () => {
    const nombre = nombres[getRandomPosition(5)]
    const apellido = apellidos[getRandomPosition(5)]
    const color = colores[getRandomPosition(5)]

    return {
        nombre,
        apellido,
        color
    }
}

const output = []

for (let i = 0; i < 10; i ++) {
    const item = random()
    output.push(item)
}

console.log(output)