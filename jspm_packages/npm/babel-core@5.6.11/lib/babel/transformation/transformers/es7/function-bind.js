/* */ 
"format cjs";
"use strict";

var _toolsProtectJs2 = require("./../../../tools/protect.js");

var _toolsProtectJs3 = _interopRequireDefault(_toolsProtectJs2);

exports.__esModule = true;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

// https://github.com/zenparsing/es-function-bind

var _types = require("../../../types");

var t = _interopRequireWildcard(_types);

_toolsProtectJs3["default"](module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var metadata = {
  optional: true,
  stage: 0
};

exports.metadata = metadata;
function getTempId(scope) {
  var id = scope.path.getData("functionBind");
  if (id) return id;

  id = scope.generateDeclaredUidIdentifier("context");
  return scope.path.setData("functionBind", id);
}

function getStaticContext(bind, scope) {
  var object = bind.object || bind.callee.object;
  return scope.isStatic(object) && object;
}

function inferBindContext(bind, scope) {
  var staticContext = getStaticContext(bind, scope);
  if (staticContext) return staticContext;

  var tempId = getTempId(scope);
  if (bind.object) {
    bind.callee = t.sequenceExpression([t.assignmentExpression("=", tempId, bind.object), bind.callee]);
  } else {
    bind.callee.object = t.assignmentExpression("=", tempId, bind.callee.object);
  }
  return tempId;
}

var visitor = {
  CallExpression: function CallExpression(node, parent, scope) {
    var bind = node.callee;
    if (!t.isBindExpression(bind)) return;

    var context = inferBindContext(bind, scope);
    node.callee = t.memberExpression(bind.callee, t.identifier("call"));
    node.arguments.unshift(context);
  },

  BindExpression: function BindExpression(node, parent, scope) {
    var context = inferBindContext(node, scope);
    return t.callExpression(t.memberExpression(node.callee, t.identifier("bind")), [context]);
  }
};
exports.visitor = visitor;