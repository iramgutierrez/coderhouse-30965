const arr = [];

for (let i = 0; i < 10000; i++) {
    arr.push(Math.round(Math.random() * (20 - 1) + 1));
}

const obj = {};

for (let i = 1; i <= 20; i++) {
    obj[i] = arr.filter((el) => i === el).length;
}

console.log(obj);