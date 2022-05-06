const http = require("http");
const fecha = new Date();
const hora = fecha.getHours();

const server = http
  .createServer((request, response) => {
    if (hora >= 6 && hora <= 12) {
      response.end("Buenos días");
    } else if (hora >= 13 && hora <= 19) {
      response.end("Buenas tardes");
    } else if (hora >= 20 && hora <= 5) {
      response.end("Buenas noches");
    }
  })
  .listen(3000, () => {
    console.log("Servidor HTTP escuchando en el puerto 3000");
  });
