var lista = [2, 3, 5, 7];
lista
    .map(function (x) { return x * x; })
    .forEach(function (x) { return console.log(x); });
var generateRandom = function () { return Math.round(Math.random() * 255); };
