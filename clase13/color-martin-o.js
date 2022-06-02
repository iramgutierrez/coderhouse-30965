"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var RGB = /*#__PURE__*/function () {
  function RGB() {
    _classCallCheck(this, RGB);
  }

  _createClass(RGB, null, [{
    key: "getRandom",
    value: function getRandom() {
      return Math.ceil(Math.random() * 255);
    }
  }, {
    key: "getRGB",
    value: function getRGB() {
      var red = RGB.getRandom();
      var green = RGB.getRandom();
      var blue = RGB.getRandom();
      return "(".concat(red, ", ").concat(green, ", ").concat(blue, ")");
    }
  }]);

  return RGB;
}();

;

(function () {
  var color = RGB.getRGB();
  console.log({
    color: color
  });
})();
