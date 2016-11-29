(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = "Some config";

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require("../config");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = "Some nice export: " + _config2.default;

},{"../config":1}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.hello = hello;
exports.add = add;
function hello() {
    return 'hello world';
}

function add(a, b) {
    return parseFloat(a) + parseFloat(b);
}

},{}],4:[function(require,module,exports){
'use strict';

var _lib = require('./lib');

var _ModuleA = require('./compoments/test/ModuleA');

var _ModuleA2 = _interopRequireDefault(_ModuleA);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

React.render(React.createElement(
  'div',
  null,
  'asassa'
), document.body);
document.write((0, _lib.hello)() + '<br>' + (0, _lib.add)(1, 2) + "<br>" + _ModuleA2.default);

},{"./compoments/test/ModuleA":2,"./lib":3}]},{},[4]);
