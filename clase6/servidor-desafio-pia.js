const http = require("http");

//createServer() Este método recibirá un callback que se ejecutará cada vez que el servidor reciba una petición.
const server = http.createServer((peticion, respuesta) => {
  let fecha = new Date();
  console.log({ fecha })
  let hora = fecha.getHours();
  let text =
    hora >= 6 && hora <= 12
      ? "Buenos Días!!"
      : hora >= 13 && hora <= 19
      ? "Buenas Tardes!"
      : "Buenas Noches!";

  console.log(text);
  console.log("Peticion recibida");
  //respuesta.end("Hola mundo"); //termina la peticion, envia datos al cliente
  respuesta.end(text);
});

// //Indicoque estoy lista y escuchando en el puerto configurado
const connectedServer = server.listen(8080, () => {
  
  console.log(
    `Servidor Http escuchando en el puerto ${connectedServer.address().port}`
  );
});