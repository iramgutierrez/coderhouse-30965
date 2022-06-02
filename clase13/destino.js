"use strict";

var lista = [2, 3, 5, 7];
lista.map(function (x) {
  return x * x;
}).forEach(function (x) {
  return console.log({
    x: x
  });
});
var a = 0; // false, null, undefined, '', 0

var b = 5; // a ??= b

console.log({
  a: a
});
var user = undefined;
var nameS = user === null || user === void 0 ? void 0 : user.name;
console.log(nameS);
