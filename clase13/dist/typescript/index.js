"use strict";
const lista = [2, 3, 5, 7];
lista
    .map((x) => x * x)
    .forEach((x) => console.log(x));
const generateRandom = () => Math.round(Math.random() * 255);
