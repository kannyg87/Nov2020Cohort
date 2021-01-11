"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var stack =
/*#__PURE__*/
function () {
  function stack() {
    _classCallCheck(this, stack);

    this.data = [];
  }

  _createClass(stack, [{
    key: "pop",
    value: function pop() {
      return this.data.pop();
    }
  }, {
    key: "push",
    value: function push(val) {
      return this.data.push(val);
    }
  }, {
    key: "peek",
    value: function peek() {
      return this.data[this.data.length - 1];
    }
  }]);

  return stack;
}();

module.exports = stack;