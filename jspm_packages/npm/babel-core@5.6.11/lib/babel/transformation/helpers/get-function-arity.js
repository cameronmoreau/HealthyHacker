/* */ 
"format cjs";
"use strict";

var _toolsProtectJs2 = require("./../../tools/protect.js");

var _toolsProtectJs3 = _interopRequireDefault(_toolsProtectJs2);

exports.__esModule = true;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

var _types = require("../../types");

var t = _interopRequireWildcard(_types);

_toolsProtectJs3["default"](module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

exports["default"] = function (node) {
  var lastNonDefault = 0;
  for (var i = 0; i < node.params.length; i++) {
    var param = node.params[i];
    if (!t.isAssignmentPattern(param) && !t.isRestElement(param)) {
      lastNonDefault = i + 1;
    }
  }
  return lastNonDefault;
};

module.exports = exports["default"];