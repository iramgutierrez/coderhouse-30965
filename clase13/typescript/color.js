var RandomColor = /** @class */ (function () {
    function RandomColor() {
    }
    RandomColor.prototype.generate = function () {
        var generateRandom = function () { return Math.round(Math.random() * 255); };
        var r = generateRandom();
        var g = generateRandom();
        var b = generateRandom();
        return "".concat(r, ", ").concat(g, ", ").concat(b);
    };
    return RandomColor;
}());
var color = new RandomColor();
console.log(color.generate());
