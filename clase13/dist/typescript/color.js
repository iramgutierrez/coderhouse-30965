"use strict";
class RandomColor {
    constructor() { }
    generate() {
        const generateRandom = () => Math.round(Math.random() * 255);
        const r = generateRandom();
        const g = generateRandom();
        const b = generateRandom();
        return `${r}, ${g}, ${b}`;
    }
}
const color = new RandomColor();
console.log(color.generate());
