"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var removeServiceOutputsPlugin =
/*#__PURE__*/
function () {
  function removeServiceOutputsPlugin() {
    _classCallCheck(this, removeServiceOutputsPlugin);

    this.configsList = [];

    this._init(arguments);
  }

  _createClass(removeServiceOutputsPlugin, [{
    key: "apply",
    value: function apply(compiler) {
      var _this = this;

      compiler.hooks.emit.tapAsync("removeServiceOutputsPlugin", function (compilation, callback) {
        _this.configsList.forEach(function (config) {
          var _config = _slicedToArray(config, 2),
              name = _config[0],
              regexp = _config[1];

          var chunk = compilation.chunks.find(function (chunk) {
            return chunk.name === name;
          }) || [];
          chunk.files.forEach(function (file) {
            if (file.match(regexp)) delete compilation.assets[file];
          });
        });

        callback();
      });
    }
  }, {
    key: "setConfigsList",
    value: function setConfigsList(configsList) {
      if (!Array.isArray(configsList)) {
        return console.log("Wrong type of configs list: " + _typeof(configsList));
      }

      if (typeof configsList[0] === 'string') configsList = [configsList];
      this.configsList = configsList;
    }
  }, {
    key: "_init",
    value: function _init(configsList) {
      this.setConfigsList(configsList);
    }
  }]);

  return removeServiceOutputsPlugin;
}();

var _default = removeServiceOutputsPlugin;
exports["default"] = _default;