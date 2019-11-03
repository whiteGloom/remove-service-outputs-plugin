"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var removeServiceOutputsPlugin =
/*#__PURE__*/
function () {
  function removeServiceOutputsPlugin(options) {
    _classCallCheck(this, removeServiceOutputsPlugin);

    if (!Array.isArray(options)) {
      this.options = [];
      console.log("RemoveServiceOutputsPlugin requires an array, but gets: " + _typeof(options));
    } else {
      this.options = options;
    }
  }

  _createClass(removeServiceOutputsPlugin, [{
    key: "apply",
    value: function apply(compiler) {
      var _this = this;

      compiler.hooks.emit.tapAsync("removeServiceOutputsPlugin", function (compilation, callback) {
        if (_this.options.length < 1) {
          callback();
          return;
        }

        compilation.chunks.forEach(function (chunk) {
          _this.options.forEach(function (option) {
            if (chunk.name === option[0]) {
              chunk.files.forEach(function (file) {
                if (file.match(option[1])) {
                  delete compilation.assets[file];
                }
              });
            }
          });
        });
        callback();
      });
    }
  }]);

  return removeServiceOutputsPlugin;
}();

var _default = removeServiceOutputsPlugin;
exports["default"] = _default;