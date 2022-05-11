const express = require("express");
const app = express();
const PORT = 8080;
const frase = "Hola mundo como estan";

app.get("/api/frase", (req, res) => {
  res.json({ frase: frase });
});

app.get("/api/letras/:num", (req, res) => {
  req.params.num = parseInt(req.params.num);

  if (req.params.num === 0) {
    res
      .status(404)
      .json({ error: `The parameter ${req.params.num} is out of range` });
    console.error(`The parameter ${req.params.num} is out of range`);
  } else {
    if (req.params.num <= frase.split(" ").join("").length) {
      res.json({ letra: frase.split(" ").join("")[req.params.num - 1] });
    }

    if (req.params.num >= frase.split(" ").join("").length) {
      res
        .status(404)
        .json({ error: `The parameter ${req.params.num} is out of range` });
      console.error(`The parameter ${req.params.num} is out of range`);
    }

    if (!req.params.num) {
      res.status(404).json({ error: `The parameter is not a number` });}
    }
  });


  app.get("/api/palabras/:num", (req, res) => {
    req.params.num = parseInt(req.params.num);
  
    if (req.params.num === 0) {
      res.status(404).json({
        error: `The parameter ${req.params.num} is out of range`,
      });
      console.error(`The parameter ${req.params.num} is out of range`);
    } else {
      if (req.params.num <= frase.split(" ").length) {
        res.json({ palabra: frase.split(" ")[req.params.num - 1] });
      }
  
      if (req.params.num >= frase.split(" ").length) {
        res.status(404).json({
          error: `The parameter ${req.params.num} is out of range`,
        });
        console.error(`The parameter ${req.params.num} is out of range`);
      }
      if (!req.params.num) {
        res.status(404).json({ error: `The parameter is not a number` });
        console.error("The parameter is not a number");
      }
    }
  });
  
  const sv = app
    .listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    })
    .on("error", (err) => {
      console.error(err);
    });
