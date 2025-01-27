"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.computeFunctionLength = computeFunctionLength;
exports.isVariableFunctionIdentifier = isVariableFunctionIdentifier;
var _constants = require("../constants");
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
/**
 * @example __JS_CONFUSER_VAR__(identifier) // true
 * @param path
 * @returns
 */
function isVariableFunctionIdentifier(path) {
  var _path$parentPath;
  if (path.isIdentifier() && path.listKey === "arguments" && path.key === 0 && (_path$parentPath = path.parentPath) !== null && _path$parentPath !== void 0 && _path$parentPath.isCallExpression()) {
    var callee = path.parentPath.get("callee");
    return callee.isIdentifier({
      name: _constants.variableFunctionName
    });
  }
  return false;
}

/**
 * Computes the `function.length` property given the parameter nodes.
 *
 * @example function abc(a, b, c = 1, ...d) {} // abc.length = 2
 */
function computeFunctionLength(fnPath) {
  var savedLength = fnPath.node[_constants.FN_LENGTH];
  if (typeof savedLength === "number") {
    return savedLength;
  }
  var count = 0;
  var _iterator = _createForOfIteratorHelper(fnPath.node.params),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var parameterNode = _step.value;
      if (parameterNode.type === "Identifier" || parameterNode.type === "ObjectPattern" || parameterNode.type === "ArrayPattern") {
        count++;
      } else {
        break;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return count;
}