"use strict";

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * bibtex-tidy v1.8.5
 * https://github.com/FlamingTempura/bibtex-tidy
 *
 * DO NOT EDIT THIS FILE. This file is automatically generated
 * using `npm run build`. Edit files in './src' then rebuild.
 **/
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;

  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };

  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = {
      exports: {}
    }).exports, mod), mod.exports;
  };

  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      var _iterator = _createForOfIteratorHelper(__getOwnPropNames(from)),
          _step;

      try {
        var _loop = function _loop() {
          var key = _step.value;
          if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
            get: () => from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
          });
        };

        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }

    return to;
  };

  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
    value: mod,
    enumerable: true
  }) : target, mod));

  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = value => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };

      var rejected = value => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };

      var step = x => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);

      step((generator = generator.apply(__this, __arguments)).next());
    });
  }; // node_modules/codemirror/lib/codemirror.js


  var require_codemirror = __commonJS({
    "node_modules/codemirror/lib/codemirror.js"(exports, module) {
      (function (global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global = global || self, global.CodeMirror = factory());
      })(exports, function () {
        "use strict";

        var userAgent = navigator.userAgent;
        var platform = navigator.platform;
        var gecko = /gecko\/\d/i.test(userAgent);
        var ie_upto10 = /MSIE \d/.test(userAgent);
        var ie_11up = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(userAgent);
        var edge = /Edge\/(\d+)/.exec(userAgent);
        var ie = ie_upto10 || ie_11up || edge;
        var ie_version = ie && (ie_upto10 ? document.documentMode || 6 : +(edge || ie_11up)[1]);
        var webkit = !edge && /WebKit\//.test(userAgent);
        var qtwebkit = webkit && /Qt\/\d+\.\d+/.test(userAgent);
        var chrome = !edge && /Chrome\/(\d+)/.exec(userAgent);
        var chrome_version = chrome && +chrome[1];
        var presto = /Opera\//.test(userAgent);
        var safari = /Apple Computer/.test(navigator.vendor);
        var mac_geMountainLion = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(userAgent);
        var phantom = /PhantomJS/.test(userAgent);
        var ios = safari && (/Mobile\/\w+/.test(userAgent) || navigator.maxTouchPoints > 2);
        var android = /Android/.test(userAgent);
        var mobile = ios || android || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(userAgent);
        var mac = ios || /Mac/.test(platform);
        var chromeOS = /\bCrOS\b/.test(userAgent);
        var windows = /win/i.test(platform);
        var presto_version = presto && userAgent.match(/Version\/(\d*\.\d*)/);

        if (presto_version) {
          presto_version = Number(presto_version[1]);
        }

        if (presto_version && presto_version >= 15) {
          presto = false;
          webkit = true;
        }

        var flipCtrlCmd = mac && (qtwebkit || presto && (presto_version == null || presto_version < 12.11));
        var captureRightClick = gecko || ie && ie_version >= 9;

        function classTest(cls) {
          return new RegExp("(^|\\s)" + cls + "(?:$|\\s)\\s*");
        }

        var rmClass = function rmClass(node, cls) {
          var current = node.className;
          var match = classTest(cls).exec(current);

          if (match) {
            var after = current.slice(match.index + match[0].length);
            node.className = current.slice(0, match.index) + (after ? match[1] + after : "");
          }
        };

        function removeChildren(e) {
          for (var count = e.childNodes.length; count > 0; --count) {
            e.removeChild(e.firstChild);
          }

          return e;
        }

        function removeChildrenAndAdd(parent, e) {
          return removeChildren(parent).appendChild(e);
        }

        function elt(tag, content, className, style) {
          var e = document.createElement(tag);

          if (className) {
            e.className = className;
          }

          if (style) {
            e.style.cssText = style;
          }

          if (typeof content == "string") {
            e.appendChild(document.createTextNode(content));
          } else if (content) {
            for (var i2 = 0; i2 < content.length; ++i2) {
              e.appendChild(content[i2]);
            }
          }

          return e;
        }

        function eltP(tag, content, className, style) {
          var e = elt(tag, content, className, style);
          e.setAttribute("role", "presentation");
          return e;
        }

        var range;

        if (document.createRange) {
          range = function range(node, start, end, endNode) {
            var r = document.createRange();
            r.setEnd(endNode || node, end);
            r.setStart(node, start);
            return r;
          };
        } else {
          range = function range(node, start, end) {
            var r = document.body.createTextRange();

            try {
              r.moveToElementText(node.parentNode);
            } catch (e) {
              return r;
            }

            r.collapse(true);
            r.moveEnd("character", end);
            r.moveStart("character", start);
            return r;
          };
        }

        function contains(parent, child) {
          if (child.nodeType == 3) {
            child = child.parentNode;
          }

          if (parent.contains) {
            return parent.contains(child);
          }

          do {
            if (child.nodeType == 11) {
              child = child.host;
            }

            if (child == parent) {
              return true;
            }
          } while (child = child.parentNode);
        }

        function activeElt() {
          var activeElement;

          try {
            activeElement = document.activeElement;
          } catch (e) {
            activeElement = document.body || null;
          }

          while (activeElement && activeElement.shadowRoot && activeElement.shadowRoot.activeElement) {
            activeElement = activeElement.shadowRoot.activeElement;
          }

          return activeElement;
        }

        function addClass(node, cls) {
          var current = node.className;

          if (!classTest(cls).test(current)) {
            node.className += (current ? " " : "") + cls;
          }
        }

        function joinClasses(a, b) {
          var as = a.split(" ");

          for (var i2 = 0; i2 < as.length; i2++) {
            if (as[i2] && !classTest(as[i2]).test(b)) {
              b += " " + as[i2];
            }
          }

          return b;
        }

        var selectInput = function selectInput(node) {
          node.select();
        };

        if (ios) {
          selectInput = function selectInput(node) {
            node.selectionStart = 0;
            node.selectionEnd = node.value.length;
          };
        } else if (ie) {
          selectInput = function selectInput(node) {
            try {
              node.select();
            } catch (_e) {}
          };
        }

        function bind(f) {
          var args = Array.prototype.slice.call(arguments, 1);
          return function () {
            return f.apply(null, args);
          };
        }

        function copyObj(obj, target, overwrite) {
          if (!target) {
            target = {};
          }

          for (var prop2 in obj) {
            if (obj.hasOwnProperty(prop2) && (overwrite !== false || !target.hasOwnProperty(prop2))) {
              target[prop2] = obj[prop2];
            }
          }

          return target;
        }

        function countColumn(string, end, tabSize, startIndex, startValue) {
          if (end == null) {
            end = string.search(/[^\s\u00a0]/);

            if (end == -1) {
              end = string.length;
            }
          }

          for (var i2 = startIndex || 0, n = startValue || 0;;) {
            var nextTab = string.indexOf("	", i2);

            if (nextTab < 0 || nextTab >= end) {
              return n + (end - i2);
            }

            n += nextTab - i2;
            n += tabSize - n % tabSize;
            i2 = nextTab + 1;
          }
        }

        var Delayed = function Delayed() {
          this.id = null;
          this.f = null;
          this.time = 0;
          this.handler = bind(this.onTimeout, this);
        };

        Delayed.prototype.onTimeout = function (self2) {
          self2.id = 0;

          if (self2.time <= +new Date()) {
            self2.f();
          } else {
            setTimeout(self2.handler, self2.time - +new Date());
          }
        };

        Delayed.prototype.set = function (ms, f) {
          this.f = f;
          var time = +new Date() + ms;

          if (!this.id || time < this.time) {
            clearTimeout(this.id);
            this.id = setTimeout(this.handler, ms);
            this.time = time;
          }
        };

        function indexOf(array, elt2) {
          for (var i2 = 0; i2 < array.length; ++i2) {
            if (array[i2] == elt2) {
              return i2;
            }
          }

          return -1;
        }

        var scrollerGap = 50;
        var Pass = {
          toString: function toString() {
            return "CodeMirror.Pass";
          }
        };
        var sel_dontScroll = {
          scroll: false
        },
            sel_mouse = {
          origin: "*mouse"
        },
            sel_move = {
          origin: "+move"
        };

        function findColumn(string, goal, tabSize) {
          for (var pos = 0, col = 0;;) {
            var nextTab = string.indexOf("	", pos);

            if (nextTab == -1) {
              nextTab = string.length;
            }

            var skipped = nextTab - pos;

            if (nextTab == string.length || col + skipped >= goal) {
              return pos + Math.min(skipped, goal - col);
            }

            col += nextTab - pos;
            col += tabSize - col % tabSize;
            pos = nextTab + 1;

            if (col >= goal) {
              return pos;
            }
          }
        }

        var spaceStrs = [""];

        function spaceStr(n) {
          while (spaceStrs.length <= n) {
            spaceStrs.push(lst(spaceStrs) + " ");
          }

          return spaceStrs[n];
        }

        function lst(arr) {
          return arr[arr.length - 1];
        }

        function map(array, f) {
          var out = [];

          for (var i2 = 0; i2 < array.length; i2++) {
            out[i2] = f(array[i2], i2);
          }

          return out;
        }

        function insertSorted(array, value, score) {
          var pos = 0,
              priority = score(value);

          while (pos < array.length && score(array[pos]) <= priority) {
            pos++;
          }

          array.splice(pos, 0, value);
        }

        function nothing() {}

        function createObj(base, props) {
          var inst;

          if (Object.create) {
            inst = Object.create(base);
          } else {
            nothing.prototype = base;
            inst = new nothing();
          }

          if (props) {
            copyObj(props, inst);
          }

          return inst;
        }

        var nonASCIISingleCaseWordChar = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;

        function isWordCharBasic(ch) {
          return /\w/.test(ch) || ch > "\x80" && (ch.toUpperCase() != ch.toLowerCase() || nonASCIISingleCaseWordChar.test(ch));
        }

        function isWordChar(ch, helper) {
          if (!helper) {
            return isWordCharBasic(ch);
          }

          if (helper.source.indexOf("\\w") > -1 && isWordCharBasic(ch)) {
            return true;
          }

          return helper.test(ch);
        }

        function isEmpty(obj) {
          for (var n in obj) {
            if (obj.hasOwnProperty(n) && obj[n]) {
              return false;
            }
          }

          return true;
        }

        var extendingChars = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;

        function isExtendingChar(ch) {
          return ch.charCodeAt(0) >= 768 && extendingChars.test(ch);
        }

        function skipExtendingChars(str, pos, dir) {
          while ((dir < 0 ? pos > 0 : pos < str.length) && isExtendingChar(str.charAt(pos))) {
            pos += dir;
          }

          return pos;
        }

        function findFirst(pred, from, to) {
          var dir = from > to ? -1 : 1;

          for (;;) {
            if (from == to) {
              return from;
            }

            var midF = (from + to) / 2,
                mid = dir < 0 ? Math.ceil(midF) : Math.floor(midF);

            if (mid == from) {
              return pred(mid) ? from : to;
            }

            if (pred(mid)) {
              to = mid;
            } else {
              from = mid + dir;
            }
          }
        }

        function iterateBidiSections(order, from, to, f) {
          if (!order) {
            return f(from, to, "ltr", 0);
          }

          var found = false;

          for (var i2 = 0; i2 < order.length; ++i2) {
            var part = order[i2];

            if (part.from < to && part.to > from || from == to && part.to == from) {
              f(Math.max(part.from, from), Math.min(part.to, to), part.level == 1 ? "rtl" : "ltr", i2);
              found = true;
            }
          }

          if (!found) {
            f(from, to, "ltr");
          }
        }

        var bidiOther = null;

        function getBidiPartAt(order, ch, sticky) {
          var found;
          bidiOther = null;

          for (var i2 = 0; i2 < order.length; ++i2) {
            var cur = order[i2];

            if (cur.from < ch && cur.to > ch) {
              return i2;
            }

            if (cur.to == ch) {
              if (cur.from != cur.to && sticky == "before") {
                found = i2;
              } else {
                bidiOther = i2;
              }
            }

            if (cur.from == ch) {
              if (cur.from != cur.to && sticky != "before") {
                found = i2;
              } else {
                bidiOther = i2;
              }
            }
          }

          return found != null ? found : bidiOther;
        }

        var bidiOrdering = function () {
          var lowTypes = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN";
          var arabicTypes = "nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111";

          function charType(code) {
            if (code <= 247) {
              return lowTypes.charAt(code);
            } else if (1424 <= code && code <= 1524) {
              return "R";
            } else if (1536 <= code && code <= 1785) {
              return arabicTypes.charAt(code - 1536);
            } else if (1774 <= code && code <= 2220) {
              return "r";
            } else if (8192 <= code && code <= 8203) {
              return "w";
            } else if (code == 8204) {
              return "b";
            } else {
              return "L";
            }
          }

          var bidiRE = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
          var isNeutral = /[stwN]/,
              isStrong = /[LRr]/,
              countsAsLeft = /[Lb1n]/,
              countsAsNum = /[1n]/;

          function BidiSpan(level, from, to) {
            this.level = level;
            this.from = from;
            this.to = to;
          }

          return function (str, direction) {
            var outerType = direction == "ltr" ? "L" : "R";

            if (str.length == 0 || direction == "ltr" && !bidiRE.test(str)) {
              return false;
            }

            var len = str.length,
                types = [];

            for (var i2 = 0; i2 < len; ++i2) {
              types.push(charType(str.charCodeAt(i2)));
            }

            for (var i$12 = 0, prev = outerType; i$12 < len; ++i$12) {
              var type = types[i$12];

              if (type == "m") {
                types[i$12] = prev;
              } else {
                prev = type;
              }
            }

            for (var i$22 = 0, cur = outerType; i$22 < len; ++i$22) {
              var type$1 = types[i$22];

              if (type$1 == "1" && cur == "r") {
                types[i$22] = "n";
              } else if (isStrong.test(type$1)) {
                cur = type$1;

                if (type$1 == "r") {
                  types[i$22] = "R";
                }
              }
            }

            for (var i$3 = 1, prev$1 = types[0]; i$3 < len - 1; ++i$3) {
              var type$2 = types[i$3];

              if (type$2 == "+" && prev$1 == "1" && types[i$3 + 1] == "1") {
                types[i$3] = "1";
              } else if (type$2 == "," && prev$1 == types[i$3 + 1] && (prev$1 == "1" || prev$1 == "n")) {
                types[i$3] = prev$1;
              }

              prev$1 = type$2;
            }

            for (var i$4 = 0; i$4 < len; ++i$4) {
              var type$3 = types[i$4];

              if (type$3 == ",") {
                types[i$4] = "N";
              } else if (type$3 == "%") {
                var end = void 0;

                for (end = i$4 + 1; end < len && types[end] == "%"; ++end) {}

                var replace = i$4 && types[i$4 - 1] == "!" || end < len && types[end] == "1" ? "1" : "N";

                for (var j = i$4; j < end; ++j) {
                  types[j] = replace;
                }

                i$4 = end - 1;
              }
            }

            for (var i$5 = 0, cur$1 = outerType; i$5 < len; ++i$5) {
              var type$4 = types[i$5];

              if (cur$1 == "L" && type$4 == "1") {
                types[i$5] = "L";
              } else if (isStrong.test(type$4)) {
                cur$1 = type$4;
              }
            }

            for (var i$6 = 0; i$6 < len; ++i$6) {
              if (isNeutral.test(types[i$6])) {
                var end$1 = void 0;

                for (end$1 = i$6 + 1; end$1 < len && isNeutral.test(types[end$1]); ++end$1) {}

                var before = (i$6 ? types[i$6 - 1] : outerType) == "L";
                var after = (end$1 < len ? types[end$1] : outerType) == "L";
                var replace$1 = before == after ? before ? "L" : "R" : outerType;

                for (var j$1 = i$6; j$1 < end$1; ++j$1) {
                  types[j$1] = replace$1;
                }

                i$6 = end$1 - 1;
              }
            }

            var order = [],
                m;

            for (var i$7 = 0; i$7 < len;) {
              if (countsAsLeft.test(types[i$7])) {
                var start = i$7;

                for (++i$7; i$7 < len && countsAsLeft.test(types[i$7]); ++i$7) {}

                order.push(new BidiSpan(0, start, i$7));
              } else {
                var pos = i$7,
                    at = order.length,
                    isRTL = direction == "rtl" ? 1 : 0;

                for (++i$7; i$7 < len && types[i$7] != "L"; ++i$7) {}

                for (var j$2 = pos; j$2 < i$7;) {
                  if (countsAsNum.test(types[j$2])) {
                    if (pos < j$2) {
                      order.splice(at, 0, new BidiSpan(1, pos, j$2));
                      at += isRTL;
                    }

                    var nstart = j$2;

                    for (++j$2; j$2 < i$7 && countsAsNum.test(types[j$2]); ++j$2) {}

                    order.splice(at, 0, new BidiSpan(2, nstart, j$2));
                    at += isRTL;
                    pos = j$2;
                  } else {
                    ++j$2;
                  }
                }

                if (pos < i$7) {
                  order.splice(at, 0, new BidiSpan(1, pos, i$7));
                }
              }
            }

            if (direction == "ltr") {
              if (order[0].level == 1 && (m = str.match(/^\s+/))) {
                order[0].from = m[0].length;
                order.unshift(new BidiSpan(0, 0, m[0].length));
              }

              if (lst(order).level == 1 && (m = str.match(/\s+$/))) {
                lst(order).to -= m[0].length;
                order.push(new BidiSpan(0, len - m[0].length, len));
              }
            }

            return direction == "rtl" ? order.reverse() : order;
          };
        }();

        function getOrder(line, direction) {
          var order = line.order;

          if (order == null) {
            order = line.order = bidiOrdering(line.text, direction);
          }

          return order;
        }

        var noHandlers = [];

        var on = function on(emitter, type, f) {
          if (emitter.addEventListener) {
            emitter.addEventListener(type, f, false);
          } else if (emitter.attachEvent) {
            emitter.attachEvent("on" + type, f);
          } else {
            var map2 = emitter._handlers || (emitter._handlers = {});
            map2[type] = (map2[type] || noHandlers).concat(f);
          }
        };

        function getHandlers(emitter, type) {
          return emitter._handlers && emitter._handlers[type] || noHandlers;
        }

        function off(emitter, type, f) {
          if (emitter.removeEventListener) {
            emitter.removeEventListener(type, f, false);
          } else if (emitter.detachEvent) {
            emitter.detachEvent("on" + type, f);
          } else {
            var map2 = emitter._handlers,
                arr = map2 && map2[type];

            if (arr) {
              var index = indexOf(arr, f);

              if (index > -1) {
                map2[type] = arr.slice(0, index).concat(arr.slice(index + 1));
              }
            }
          }
        }

        function signal(emitter, type) {
          var handlers = getHandlers(emitter, type);

          if (!handlers.length) {
            return;
          }

          var args = Array.prototype.slice.call(arguments, 2);

          for (var i2 = 0; i2 < handlers.length; ++i2) {
            handlers[i2].apply(null, args);
          }
        }

        function signalDOMEvent(cm, e, override) {
          if (typeof e == "string") {
            e = {
              type: e,
              preventDefault: function preventDefault() {
                this.defaultPrevented = true;
              }
            };
          }

          signal(cm, override || e.type, cm, e);
          return e_defaultPrevented(e) || e.codemirrorIgnore;
        }

        function signalCursorActivity(cm) {
          var arr = cm._handlers && cm._handlers.cursorActivity;

          if (!arr) {
            return;
          }

          var set = cm.curOp.cursorActivityHandlers || (cm.curOp.cursorActivityHandlers = []);

          for (var i2 = 0; i2 < arr.length; ++i2) {
            if (indexOf(set, arr[i2]) == -1) {
              set.push(arr[i2]);
            }
          }
        }

        function hasHandler(emitter, type) {
          return getHandlers(emitter, type).length > 0;
        }

        function eventMixin(ctor) {
          ctor.prototype.on = function (type, f) {
            on(this, type, f);
          };

          ctor.prototype.off = function (type, f) {
            off(this, type, f);
          };
        }

        function e_preventDefault(e) {
          if (e.preventDefault) {
            e.preventDefault();
          } else {
            e.returnValue = false;
          }
        }

        function e_stopPropagation(e) {
          if (e.stopPropagation) {
            e.stopPropagation();
          } else {
            e.cancelBubble = true;
          }
        }

        function e_defaultPrevented(e) {
          return e.defaultPrevented != null ? e.defaultPrevented : e.returnValue == false;
        }

        function e_stop(e) {
          e_preventDefault(e);
          e_stopPropagation(e);
        }

        function e_target(e) {
          return e.target || e.srcElement;
        }

        function e_button(e) {
          var b = e.which;

          if (b == null) {
            if (e.button & 1) {
              b = 1;
            } else if (e.button & 2) {
              b = 3;
            } else if (e.button & 4) {
              b = 2;
            }
          }

          if (mac && e.ctrlKey && b == 1) {
            b = 3;
          }

          return b;
        }

        var dragAndDrop = function () {
          if (ie && ie_version < 9) {
            return false;
          }

          var div = elt("div");
          return "draggable" in div || "dragDrop" in div;
        }();

        var zwspSupported;

        function zeroWidthElement(measure) {
          if (zwspSupported == null) {
            var test = elt("span", "\u200B");
            removeChildrenAndAdd(measure, elt("span", [test, document.createTextNode("x")]));

            if (measure.firstChild.offsetHeight != 0) {
              zwspSupported = test.offsetWidth <= 1 && test.offsetHeight > 2 && !(ie && ie_version < 8);
            }
          }

          var node = zwspSupported ? elt("span", "\u200B") : elt("span", "\xA0", null, "display: inline-block; width: 1px; margin-right: -1px");
          node.setAttribute("cm-text", "");
          return node;
        }

        var badBidiRects;

        function hasBadBidiRects(measure) {
          if (badBidiRects != null) {
            return badBidiRects;
          }

          var txt = removeChildrenAndAdd(measure, document.createTextNode("A\u062EA"));
          var r0 = range(txt, 0, 1).getBoundingClientRect();
          var r1 = range(txt, 1, 2).getBoundingClientRect();
          removeChildren(measure);

          if (!r0 || r0.left == r0.right) {
            return false;
          }

          return badBidiRects = r1.right - r0.right < 3;
        }

        var splitLinesAuto = "\n\nb".split(/\n/).length != 3 ? function (string) {
          var pos = 0,
              result = [],
              l = string.length;

          while (pos <= l) {
            var nl = string.indexOf("\n", pos);

            if (nl == -1) {
              nl = string.length;
            }

            var line = string.slice(pos, string.charAt(nl - 1) == "\r" ? nl - 1 : nl);
            var rt = line.indexOf("\r");

            if (rt != -1) {
              result.push(line.slice(0, rt));
              pos += rt + 1;
            } else {
              result.push(line);
              pos = nl + 1;
            }
          }

          return result;
        } : function (string) {
          return string.split(/\r\n?|\n/);
        };
        var hasSelection = window.getSelection ? function (te) {
          try {
            return te.selectionStart != te.selectionEnd;
          } catch (e) {
            return false;
          }
        } : function (te) {
          var range2;

          try {
            range2 = te.ownerDocument.selection.createRange();
          } catch (e) {}

          if (!range2 || range2.parentElement() != te) {
            return false;
          }

          return range2.compareEndPoints("StartToEnd", range2) != 0;
        };

        var hasCopyEvent = function () {
          var e = elt("div");

          if ("oncopy" in e) {
            return true;
          }

          e.setAttribute("oncopy", "return;");
          return typeof e.oncopy == "function";
        }();

        var badZoomedRects = null;

        function hasBadZoomedRects(measure) {
          if (badZoomedRects != null) {
            return badZoomedRects;
          }

          var node = removeChildrenAndAdd(measure, elt("span", "x"));
          var normal = node.getBoundingClientRect();
          var fromRange = range(node, 0, 1).getBoundingClientRect();
          return badZoomedRects = Math.abs(normal.left - fromRange.left) > 1;
        }

        var modes = {},
            mimeModes = {};

        function defineMode(name, mode) {
          if (arguments.length > 2) {
            mode.dependencies = Array.prototype.slice.call(arguments, 2);
          }

          modes[name] = mode;
        }

        function defineMIME(mime, spec) {
          mimeModes[mime] = spec;
        }

        function resolveMode(spec) {
          if (typeof spec == "string" && mimeModes.hasOwnProperty(spec)) {
            spec = mimeModes[spec];
          } else if (spec && typeof spec.name == "string" && mimeModes.hasOwnProperty(spec.name)) {
            var found = mimeModes[spec.name];

            if (typeof found == "string") {
              found = {
                name: found
              };
            }

            spec = createObj(found, spec);
            spec.name = found.name;
          } else if (typeof spec == "string" && /^[\w\-]+\/[\w\-]+\+xml$/.test(spec)) {
            return resolveMode("application/xml");
          } else if (typeof spec == "string" && /^[\w\-]+\/[\w\-]+\+json$/.test(spec)) {
            return resolveMode("application/json");
          }

          if (typeof spec == "string") {
            return {
              name: spec
            };
          } else {
            return spec || {
              name: "null"
            };
          }
        }

        function getMode(options, spec) {
          spec = resolveMode(spec);
          var mfactory = modes[spec.name];

          if (!mfactory) {
            return getMode(options, "text/plain");
          }

          var modeObj = mfactory(options, spec);

          if (modeExtensions.hasOwnProperty(spec.name)) {
            var exts = modeExtensions[spec.name];

            for (var prop2 in exts) {
              if (!exts.hasOwnProperty(prop2)) {
                continue;
              }

              if (modeObj.hasOwnProperty(prop2)) {
                modeObj["_" + prop2] = modeObj[prop2];
              }

              modeObj[prop2] = exts[prop2];
            }
          }

          modeObj.name = spec.name;

          if (spec.helperType) {
            modeObj.helperType = spec.helperType;
          }

          if (spec.modeProps) {
            for (var prop$1 in spec.modeProps) {
              modeObj[prop$1] = spec.modeProps[prop$1];
            }
          }

          return modeObj;
        }

        var modeExtensions = {};

        function extendMode(mode, properties) {
          var exts = modeExtensions.hasOwnProperty(mode) ? modeExtensions[mode] : modeExtensions[mode] = {};
          copyObj(properties, exts);
        }

        function copyState(mode, state) {
          if (state === true) {
            return state;
          }

          if (mode.copyState) {
            return mode.copyState(state);
          }

          var nstate = {};

          for (var n in state) {
            var val = state[n];

            if (val instanceof Array) {
              val = val.concat([]);
            }

            nstate[n] = val;
          }

          return nstate;
        }

        function innerMode(mode, state) {
          var info;

          while (mode.innerMode) {
            info = mode.innerMode(state);

            if (!info || info.mode == mode) {
              break;
            }

            state = info.state;
            mode = info.mode;
          }

          return info || {
            mode,
            state
          };
        }

        function startState(mode, a1, a2) {
          return mode.startState ? mode.startState(a1, a2) : true;
        }

        var StringStream = function StringStream(string, tabSize, lineOracle) {
          this.pos = this.start = 0;
          this.string = string;
          this.tabSize = tabSize || 8;
          this.lastColumnPos = this.lastColumnValue = 0;
          this.lineStart = 0;
          this.lineOracle = lineOracle;
        };

        StringStream.prototype.eol = function () {
          return this.pos >= this.string.length;
        };

        StringStream.prototype.sol = function () {
          return this.pos == this.lineStart;
        };

        StringStream.prototype.peek = function () {
          return this.string.charAt(this.pos) || void 0;
        };

        StringStream.prototype.next = function () {
          if (this.pos < this.string.length) {
            return this.string.charAt(this.pos++);
          }
        };

        StringStream.prototype.eat = function (match) {
          var ch = this.string.charAt(this.pos);
          var ok;

          if (typeof match == "string") {
            ok = ch == match;
          } else {
            ok = ch && (match.test ? match.test(ch) : match(ch));
          }

          if (ok) {
            ++this.pos;
            return ch;
          }
        };

        StringStream.prototype.eatWhile = function (match) {
          var start = this.pos;

          while (this.eat(match)) {}

          return this.pos > start;
        };

        StringStream.prototype.eatSpace = function () {
          var start = this.pos;

          while (/[\s\u00a0]/.test(this.string.charAt(this.pos))) {
            ++this.pos;
          }

          return this.pos > start;
        };

        StringStream.prototype.skipToEnd = function () {
          this.pos = this.string.length;
        };

        StringStream.prototype.skipTo = function (ch) {
          var found = this.string.indexOf(ch, this.pos);

          if (found > -1) {
            this.pos = found;
            return true;
          }
        };

        StringStream.prototype.backUp = function (n) {
          this.pos -= n;
        };

        StringStream.prototype.column = function () {
          if (this.lastColumnPos < this.start) {
            this.lastColumnValue = countColumn(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue);
            this.lastColumnPos = this.start;
          }

          return this.lastColumnValue - (this.lineStart ? countColumn(this.string, this.lineStart, this.tabSize) : 0);
        };

        StringStream.prototype.indentation = function () {
          return countColumn(this.string, null, this.tabSize) - (this.lineStart ? countColumn(this.string, this.lineStart, this.tabSize) : 0);
        };

        StringStream.prototype.match = function (pattern, consume, caseInsensitive) {
          if (typeof pattern == "string") {
            var cased = function cased(str) {
              return caseInsensitive ? str.toLowerCase() : str;
            };

            var substr = this.string.substr(this.pos, pattern.length);

            if (cased(substr) == cased(pattern)) {
              if (consume !== false) {
                this.pos += pattern.length;
              }

              return true;
            }
          } else {
            var match = this.string.slice(this.pos).match(pattern);

            if (match && match.index > 0) {
              return null;
            }

            if (match && consume !== false) {
              this.pos += match[0].length;
            }

            return match;
          }
        };

        StringStream.prototype.current = function () {
          return this.string.slice(this.start, this.pos);
        };

        StringStream.prototype.hideFirstChars = function (n, inner) {
          this.lineStart += n;

          try {
            return inner();
          } finally {
            this.lineStart -= n;
          }
        };

        StringStream.prototype.lookAhead = function (n) {
          var oracle = this.lineOracle;
          return oracle && oracle.lookAhead(n);
        };

        StringStream.prototype.baseToken = function () {
          var oracle = this.lineOracle;
          return oracle && oracle.baseToken(this.pos);
        };

        function getLine(doc, n) {
          n -= doc.first;

          if (n < 0 || n >= doc.size) {
            throw new Error("There is no line " + (n + doc.first) + " in the document.");
          }

          var chunk = doc;

          while (!chunk.lines) {
            for (var i2 = 0;; ++i2) {
              var child = chunk.children[i2],
                  sz = child.chunkSize();

              if (n < sz) {
                chunk = child;
                break;
              }

              n -= sz;
            }
          }

          return chunk.lines[n];
        }

        function getBetween(doc, start, end) {
          var out = [],
              n = start.line;
          doc.iter(start.line, end.line + 1, function (line) {
            var text = line.text;

            if (n == end.line) {
              text = text.slice(0, end.ch);
            }

            if (n == start.line) {
              text = text.slice(start.ch);
            }

            out.push(text);
            ++n;
          });
          return out;
        }

        function getLines(doc, from, to) {
          var out = [];
          doc.iter(from, to, function (line) {
            out.push(line.text);
          });
          return out;
        }

        function updateLineHeight(line, height) {
          var diff = height - line.height;

          if (diff) {
            for (var n = line; n; n = n.parent) {
              n.height += diff;
            }
          }
        }

        function lineNo(line) {
          if (line.parent == null) {
            return null;
          }

          var cur = line.parent,
              no = indexOf(cur.lines, line);

          for (var chunk = cur.parent; chunk; cur = chunk, chunk = chunk.parent) {
            for (var i2 = 0;; ++i2) {
              if (chunk.children[i2] == cur) {
                break;
              }

              no += chunk.children[i2].chunkSize();
            }
          }

          return no + cur.first;
        }

        function _lineAtHeight(chunk, h) {
          var n = chunk.first;

          outer: do {
            for (var i$12 = 0; i$12 < chunk.children.length; ++i$12) {
              var child = chunk.children[i$12],
                  ch = child.height;

              if (h < ch) {
                chunk = child;
                continue outer;
              }

              h -= ch;
              n += child.chunkSize();
            }

            return n;
          } while (!chunk.lines);

          var i2 = 0;

          for (; i2 < chunk.lines.length; ++i2) {
            var line = chunk.lines[i2],
                lh = line.height;

            if (h < lh) {
              break;
            }

            h -= lh;
          }

          return n + i2;
        }

        function isLine(doc, l) {
          return l >= doc.first && l < doc.first + doc.size;
        }

        function lineNumberFor(options, i2) {
          return String(options.lineNumberFormatter(i2 + options.firstLineNumber));
        }

        function Pos(line, ch, sticky) {
          if (sticky === void 0) sticky = null;

          if (!(this instanceof Pos)) {
            return new Pos(line, ch, sticky);
          }

          this.line = line;
          this.ch = ch;
          this.sticky = sticky;
        }

        function cmp(a, b) {
          return a.line - b.line || a.ch - b.ch;
        }

        function equalCursorPos(a, b) {
          return a.sticky == b.sticky && cmp(a, b) == 0;
        }

        function copyPos(x) {
          return Pos(x.line, x.ch);
        }

        function maxPos(a, b) {
          return cmp(a, b) < 0 ? b : a;
        }

        function minPos(a, b) {
          return cmp(a, b) < 0 ? a : b;
        }

        function clipLine(doc, n) {
          return Math.max(doc.first, Math.min(n, doc.first + doc.size - 1));
        }

        function _clipPos(doc, pos) {
          if (pos.line < doc.first) {
            return Pos(doc.first, 0);
          }

          var last = doc.first + doc.size - 1;

          if (pos.line > last) {
            return Pos(last, getLine(doc, last).text.length);
          }

          return clipToLen(pos, getLine(doc, pos.line).text.length);
        }

        function clipToLen(pos, linelen) {
          var ch = pos.ch;

          if (ch == null || ch > linelen) {
            return Pos(pos.line, linelen);
          } else if (ch < 0) {
            return Pos(pos.line, 0);
          } else {
            return pos;
          }
        }

        function clipPosArray(doc, array) {
          var out = [];

          for (var i2 = 0; i2 < array.length; i2++) {
            out[i2] = _clipPos(doc, array[i2]);
          }

          return out;
        }

        var SavedContext = function SavedContext(state, lookAhead) {
          this.state = state;
          this.lookAhead = lookAhead;
        };

        var Context = function Context(doc, state, line, lookAhead) {
          this.state = state;
          this.doc = doc;
          this.line = line;
          this.maxLookAhead = lookAhead || 0;
          this.baseTokens = null;
          this.baseTokenPos = 1;
        };

        Context.prototype.lookAhead = function (n) {
          var line = this.doc.getLine(this.line + n);

          if (line != null && n > this.maxLookAhead) {
            this.maxLookAhead = n;
          }

          return line;
        };

        Context.prototype.baseToken = function (n) {
          if (!this.baseTokens) {
            return null;
          }

          while (this.baseTokens[this.baseTokenPos] <= n) {
            this.baseTokenPos += 2;
          }

          var type = this.baseTokens[this.baseTokenPos + 1];
          return {
            type: type && type.replace(/( |^)overlay .*/, ""),
            size: this.baseTokens[this.baseTokenPos] - n
          };
        };

        Context.prototype.nextLine = function () {
          this.line++;

          if (this.maxLookAhead > 0) {
            this.maxLookAhead--;
          }
        };

        Context.fromSaved = function (doc, saved, line) {
          if (saved instanceof SavedContext) {
            return new Context(doc, copyState(doc.mode, saved.state), line, saved.lookAhead);
          } else {
            return new Context(doc, copyState(doc.mode, saved), line);
          }
        };

        Context.prototype.save = function (copy) {
          var state = copy !== false ? copyState(this.doc.mode, this.state) : this.state;
          return this.maxLookAhead > 0 ? new SavedContext(state, this.maxLookAhead) : state;
        };

        function highlightLine(cm, line, context, forceToEnd) {
          var st = [cm.state.modeGen],
              lineClasses = {};
          runMode(cm, line.text, cm.doc.mode, context, function (end, style) {
            return st.push(end, style);
          }, lineClasses, forceToEnd);
          var state = context.state;

          var loop = function loop(o2) {
            context.baseTokens = st;
            var overlay = cm.state.overlays[o2],
                i2 = 1,
                at = 0;
            context.state = true;
            runMode(cm, line.text, overlay.mode, context, function (end, style) {
              var start = i2;

              while (at < end) {
                var i_end = st[i2];

                if (i_end > end) {
                  st.splice(i2, 1, end, st[i2 + 1], i_end);
                }

                i2 += 2;
                at = Math.min(end, i_end);
              }

              if (!style) {
                return;
              }

              if (overlay.opaque) {
                st.splice(start, i2 - start, end, "overlay " + style);
                i2 = start + 2;
              } else {
                for (; start < i2; start += 2) {
                  var cur = st[start + 1];
                  st[start + 1] = (cur ? cur + " " : "") + "overlay " + style;
                }
              }
            }, lineClasses);
            context.state = state;
            context.baseTokens = null;
            context.baseTokenPos = 1;
          };

          for (var o = 0; o < cm.state.overlays.length; ++o) {
            loop(o);
          }

          return {
            styles: st,
            classes: lineClasses.bgClass || lineClasses.textClass ? lineClasses : null
          };
        }

        function getLineStyles(cm, line, updateFrontier) {
          if (!line.styles || line.styles[0] != cm.state.modeGen) {
            var context = getContextBefore(cm, lineNo(line));
            var resetState = line.text.length > cm.options.maxHighlightLength && copyState(cm.doc.mode, context.state);
            var result = highlightLine(cm, line, context);

            if (resetState) {
              context.state = resetState;
            }

            line.stateAfter = context.save(!resetState);
            line.styles = result.styles;

            if (result.classes) {
              line.styleClasses = result.classes;
            } else if (line.styleClasses) {
              line.styleClasses = null;
            }

            if (updateFrontier === cm.doc.highlightFrontier) {
              cm.doc.modeFrontier = Math.max(cm.doc.modeFrontier, ++cm.doc.highlightFrontier);
            }
          }

          return line.styles;
        }

        function getContextBefore(cm, n, precise) {
          var doc = cm.doc,
              display = cm.display;

          if (!doc.mode.startState) {
            return new Context(doc, true, n);
          }

          var start = findStartLine(cm, n, precise);
          var saved = start > doc.first && getLine(doc, start - 1).stateAfter;
          var context = saved ? Context.fromSaved(doc, saved, start) : new Context(doc, startState(doc.mode), start);
          doc.iter(start, n, function (line) {
            processLine(cm, line.text, context);
            var pos = context.line;
            line.stateAfter = pos == n - 1 || pos % 5 == 0 || pos >= display.viewFrom && pos < display.viewTo ? context.save() : null;
            context.nextLine();
          });

          if (precise) {
            doc.modeFrontier = context.line;
          }

          return context;
        }

        function processLine(cm, text, context, startAt) {
          var mode = cm.doc.mode;
          var stream = new StringStream(text, cm.options.tabSize, context);
          stream.start = stream.pos = startAt || 0;

          if (text == "") {
            callBlankLine(mode, context.state);
          }

          while (!stream.eol()) {
            readToken(mode, stream, context.state);
            stream.start = stream.pos;
          }
        }

        function callBlankLine(mode, state) {
          if (mode.blankLine) {
            return mode.blankLine(state);
          }

          if (!mode.innerMode) {
            return;
          }

          var inner = innerMode(mode, state);

          if (inner.mode.blankLine) {
            return inner.mode.blankLine(inner.state);
          }
        }

        function readToken(mode, stream, state, inner) {
          for (var i2 = 0; i2 < 10; i2++) {
            if (inner) {
              inner[0] = innerMode(mode, state).mode;
            }

            var style = mode.token(stream, state);

            if (stream.pos > stream.start) {
              return style;
            }
          }

          throw new Error("Mode " + mode.name + " failed to advance stream.");
        }

        var Token = function Token(stream, type, state) {
          this.start = stream.start;
          this.end = stream.pos;
          this.string = stream.current();
          this.type = type || null;
          this.state = state;
        };

        function takeToken(cm, pos, precise, asArray) {
          var doc = cm.doc,
              mode = doc.mode,
              style;
          pos = _clipPos(doc, pos);
          var line = getLine(doc, pos.line),
              context = getContextBefore(cm, pos.line, precise);
          var stream = new StringStream(line.text, cm.options.tabSize, context),
              tokens;

          if (asArray) {
            tokens = [];
          }

          while ((asArray || stream.pos < pos.ch) && !stream.eol()) {
            stream.start = stream.pos;
            style = readToken(mode, stream, context.state);

            if (asArray) {
              tokens.push(new Token(stream, style, copyState(doc.mode, context.state)));
            }
          }

          return asArray ? tokens : new Token(stream, style, context.state);
        }

        function extractLineClasses(type, output) {
          if (type) {
            for (;;) {
              var lineClass = type.match(/(?:^|\s+)line-(background-)?(\S+)/);

              if (!lineClass) {
                break;
              }

              type = type.slice(0, lineClass.index) + type.slice(lineClass.index + lineClass[0].length);
              var prop2 = lineClass[1] ? "bgClass" : "textClass";

              if (output[prop2] == null) {
                output[prop2] = lineClass[2];
              } else if (!new RegExp("(?:^|\\s)" + lineClass[2] + "(?:$|\\s)").test(output[prop2])) {
                output[prop2] += " " + lineClass[2];
              }
            }
          }

          return type;
        }

        function runMode(cm, text, mode, context, f, lineClasses, forceToEnd) {
          var flattenSpans = mode.flattenSpans;

          if (flattenSpans == null) {
            flattenSpans = cm.options.flattenSpans;
          }

          var curStart = 0,
              curStyle = null;
          var stream = new StringStream(text, cm.options.tabSize, context),
              style;
          var inner = cm.options.addModeClass && [null];

          if (text == "") {
            extractLineClasses(callBlankLine(mode, context.state), lineClasses);
          }

          while (!stream.eol()) {
            if (stream.pos > cm.options.maxHighlightLength) {
              flattenSpans = false;

              if (forceToEnd) {
                processLine(cm, text, context, stream.pos);
              }

              stream.pos = text.length;
              style = null;
            } else {
              style = extractLineClasses(readToken(mode, stream, context.state, inner), lineClasses);
            }

            if (inner) {
              var mName = inner[0].name;

              if (mName) {
                style = "m-" + (style ? mName + " " + style : mName);
              }
            }

            if (!flattenSpans || curStyle != style) {
              while (curStart < stream.start) {
                curStart = Math.min(stream.start, curStart + 5e3);
                f(curStart, curStyle);
              }

              curStyle = style;
            }

            stream.start = stream.pos;
          }

          while (curStart < stream.pos) {
            var pos = Math.min(stream.pos, curStart + 5e3);
            f(pos, curStyle);
            curStart = pos;
          }
        }

        function findStartLine(cm, n, precise) {
          var minindent,
              minline,
              doc = cm.doc;
          var lim = precise ? -1 : n - (cm.doc.mode.innerMode ? 1e3 : 100);

          for (var search = n; search > lim; --search) {
            if (search <= doc.first) {
              return doc.first;
            }

            var line = getLine(doc, search - 1),
                after = line.stateAfter;

            if (after && (!precise || search + (after instanceof SavedContext ? after.lookAhead : 0) <= doc.modeFrontier)) {
              return search;
            }

            var indented = countColumn(line.text, null, cm.options.tabSize);

            if (minline == null || minindent > indented) {
              minline = search - 1;
              minindent = indented;
            }
          }

          return minline;
        }

        function retreatFrontier(doc, n) {
          doc.modeFrontier = Math.min(doc.modeFrontier, n);

          if (doc.highlightFrontier < n - 10) {
            return;
          }

          var start = doc.first;

          for (var line = n - 1; line > start; line--) {
            var saved = getLine(doc, line).stateAfter;

            if (saved && (!(saved instanceof SavedContext) || line + saved.lookAhead < n)) {
              start = line + 1;
              break;
            }
          }

          doc.highlightFrontier = Math.min(doc.highlightFrontier, start);
        }

        var sawReadOnlySpans = false,
            sawCollapsedSpans = false;

        function seeReadOnlySpans() {
          sawReadOnlySpans = true;
        }

        function seeCollapsedSpans() {
          sawCollapsedSpans = true;
        }

        function MarkedSpan(marker, from, to) {
          this.marker = marker;
          this.from = from;
          this.to = to;
        }

        function getMarkedSpanFor(spans, marker) {
          if (spans) {
            for (var i2 = 0; i2 < spans.length; ++i2) {
              var span = spans[i2];

              if (span.marker == marker) {
                return span;
              }
            }
          }
        }

        function removeMarkedSpan(spans, span) {
          var r;

          for (var i2 = 0; i2 < spans.length; ++i2) {
            if (spans[i2] != span) {
              (r || (r = [])).push(spans[i2]);
            }
          }

          return r;
        }

        function addMarkedSpan(line, span, op) {
          var inThisOp = op && window.WeakSet && (op.markedSpans || (op.markedSpans = /* @__PURE__ */new WeakSet()));

          if (inThisOp && line.markedSpans && inThisOp.has(line.markedSpans)) {
            line.markedSpans.push(span);
          } else {
            line.markedSpans = line.markedSpans ? line.markedSpans.concat([span]) : [span];

            if (inThisOp) {
              inThisOp.add(line.markedSpans);
            }
          }

          span.marker.attachLine(line);
        }

        function markedSpansBefore(old, startCh, isInsert) {
          var nw;

          if (old) {
            for (var i2 = 0; i2 < old.length; ++i2) {
              var span = old[i2],
                  marker = span.marker;
              var startsBefore = span.from == null || (marker.inclusiveLeft ? span.from <= startCh : span.from < startCh);

              if (startsBefore || span.from == startCh && marker.type == "bookmark" && (!isInsert || !span.marker.insertLeft)) {
                var endsAfter = span.to == null || (marker.inclusiveRight ? span.to >= startCh : span.to > startCh);
                (nw || (nw = [])).push(new MarkedSpan(marker, span.from, endsAfter ? null : span.to));
              }
            }
          }

          return nw;
        }

        function markedSpansAfter(old, endCh, isInsert) {
          var nw;

          if (old) {
            for (var i2 = 0; i2 < old.length; ++i2) {
              var span = old[i2],
                  marker = span.marker;
              var endsAfter = span.to == null || (marker.inclusiveRight ? span.to >= endCh : span.to > endCh);

              if (endsAfter || span.from == endCh && marker.type == "bookmark" && (!isInsert || span.marker.insertLeft)) {
                var startsBefore = span.from == null || (marker.inclusiveLeft ? span.from <= endCh : span.from < endCh);
                (nw || (nw = [])).push(new MarkedSpan(marker, startsBefore ? null : span.from - endCh, span.to == null ? null : span.to - endCh));
              }
            }
          }

          return nw;
        }

        function stretchSpansOverChange(doc, change) {
          if (change.full) {
            return null;
          }

          var oldFirst = isLine(doc, change.from.line) && getLine(doc, change.from.line).markedSpans;
          var oldLast = isLine(doc, change.to.line) && getLine(doc, change.to.line).markedSpans;

          if (!oldFirst && !oldLast) {
            return null;
          }

          var startCh = change.from.ch,
              endCh = change.to.ch,
              isInsert = cmp(change.from, change.to) == 0;
          var first = markedSpansBefore(oldFirst, startCh, isInsert);
          var last = markedSpansAfter(oldLast, endCh, isInsert);
          var sameLine = change.text.length == 1,
              offset = lst(change.text).length + (sameLine ? startCh : 0);

          if (first) {
            for (var i2 = 0; i2 < first.length; ++i2) {
              var span = first[i2];

              if (span.to == null) {
                var found = getMarkedSpanFor(last, span.marker);

                if (!found) {
                  span.to = startCh;
                } else if (sameLine) {
                  span.to = found.to == null ? null : found.to + offset;
                }
              }
            }
          }

          if (last) {
            for (var i$12 = 0; i$12 < last.length; ++i$12) {
              var span$1 = last[i$12];

              if (span$1.to != null) {
                span$1.to += offset;
              }

              if (span$1.from == null) {
                var found$1 = getMarkedSpanFor(first, span$1.marker);

                if (!found$1) {
                  span$1.from = offset;

                  if (sameLine) {
                    (first || (first = [])).push(span$1);
                  }
                }
              } else {
                span$1.from += offset;

                if (sameLine) {
                  (first || (first = [])).push(span$1);
                }
              }
            }
          }

          if (first) {
            first = clearEmptySpans(first);
          }

          if (last && last != first) {
            last = clearEmptySpans(last);
          }

          var newMarkers = [first];

          if (!sameLine) {
            var gap = change.text.length - 2,
                gapMarkers;

            if (gap > 0 && first) {
              for (var i$22 = 0; i$22 < first.length; ++i$22) {
                if (first[i$22].to == null) {
                  (gapMarkers || (gapMarkers = [])).push(new MarkedSpan(first[i$22].marker, null, null));
                }
              }
            }

            for (var i$3 = 0; i$3 < gap; ++i$3) {
              newMarkers.push(gapMarkers);
            }

            newMarkers.push(last);
          }

          return newMarkers;
        }

        function clearEmptySpans(spans) {
          for (var i2 = 0; i2 < spans.length; ++i2) {
            var span = spans[i2];

            if (span.from != null && span.from == span.to && span.marker.clearWhenEmpty !== false) {
              spans.splice(i2--, 1);
            }
          }

          if (!spans.length) {
            return null;
          }

          return spans;
        }

        function removeReadOnlyRanges(doc, from, to) {
          var markers = null;
          doc.iter(from.line, to.line + 1, function (line) {
            if (line.markedSpans) {
              for (var i3 = 0; i3 < line.markedSpans.length; ++i3) {
                var mark = line.markedSpans[i3].marker;

                if (mark.readOnly && (!markers || indexOf(markers, mark) == -1)) {
                  (markers || (markers = [])).push(mark);
                }
              }
            }
          });

          if (!markers) {
            return null;
          }

          var parts = [{
            from,
            to
          }];

          for (var i2 = 0; i2 < markers.length; ++i2) {
            var mk = markers[i2],
                m = mk.find(0);

            for (var j = 0; j < parts.length; ++j) {
              var p = parts[j];

              if (cmp(p.to, m.from) < 0 || cmp(p.from, m.to) > 0) {
                continue;
              }

              var newParts = [j, 1],
                  dfrom = cmp(p.from, m.from),
                  dto = cmp(p.to, m.to);

              if (dfrom < 0 || !mk.inclusiveLeft && !dfrom) {
                newParts.push({
                  from: p.from,
                  to: m.from
                });
              }

              if (dto > 0 || !mk.inclusiveRight && !dto) {
                newParts.push({
                  from: m.to,
                  to: p.to
                });
              }

              parts.splice.apply(parts, newParts);
              j += newParts.length - 3;
            }
          }

          return parts;
        }

        function detachMarkedSpans(line) {
          var spans = line.markedSpans;

          if (!spans) {
            return;
          }

          for (var i2 = 0; i2 < spans.length; ++i2) {
            spans[i2].marker.detachLine(line);
          }

          line.markedSpans = null;
        }

        function attachMarkedSpans(line, spans) {
          if (!spans) {
            return;
          }

          for (var i2 = 0; i2 < spans.length; ++i2) {
            spans[i2].marker.attachLine(line);
          }

          line.markedSpans = spans;
        }

        function extraLeft(marker) {
          return marker.inclusiveLeft ? -1 : 0;
        }

        function extraRight(marker) {
          return marker.inclusiveRight ? 1 : 0;
        }

        function compareCollapsedMarkers(a, b) {
          var lenDiff = a.lines.length - b.lines.length;

          if (lenDiff != 0) {
            return lenDiff;
          }

          var aPos = a.find(),
              bPos = b.find();
          var fromCmp = cmp(aPos.from, bPos.from) || extraLeft(a) - extraLeft(b);

          if (fromCmp) {
            return -fromCmp;
          }

          var toCmp = cmp(aPos.to, bPos.to) || extraRight(a) - extraRight(b);

          if (toCmp) {
            return toCmp;
          }

          return b.id - a.id;
        }

        function collapsedSpanAtSide(line, start) {
          var sps = sawCollapsedSpans && line.markedSpans,
              found;

          if (sps) {
            for (var sp = void 0, i2 = 0; i2 < sps.length; ++i2) {
              sp = sps[i2];

              if (sp.marker.collapsed && (start ? sp.from : sp.to) == null && (!found || compareCollapsedMarkers(found, sp.marker) < 0)) {
                found = sp.marker;
              }
            }
          }

          return found;
        }

        function collapsedSpanAtStart(line) {
          return collapsedSpanAtSide(line, true);
        }

        function collapsedSpanAtEnd(line) {
          return collapsedSpanAtSide(line, false);
        }

        function collapsedSpanAround(line, ch) {
          var sps = sawCollapsedSpans && line.markedSpans,
              found;

          if (sps) {
            for (var i2 = 0; i2 < sps.length; ++i2) {
              var sp = sps[i2];

              if (sp.marker.collapsed && (sp.from == null || sp.from < ch) && (sp.to == null || sp.to > ch) && (!found || compareCollapsedMarkers(found, sp.marker) < 0)) {
                found = sp.marker;
              }
            }
          }

          return found;
        }

        function conflictingCollapsedRange(doc, lineNo2, from, to, marker) {
          var line = getLine(doc, lineNo2);
          var sps = sawCollapsedSpans && line.markedSpans;

          if (sps) {
            for (var i2 = 0; i2 < sps.length; ++i2) {
              var sp = sps[i2];

              if (!sp.marker.collapsed) {
                continue;
              }

              var found = sp.marker.find(0);
              var fromCmp = cmp(found.from, from) || extraLeft(sp.marker) - extraLeft(marker);
              var toCmp = cmp(found.to, to) || extraRight(sp.marker) - extraRight(marker);

              if (fromCmp >= 0 && toCmp <= 0 || fromCmp <= 0 && toCmp >= 0) {
                continue;
              }

              if (fromCmp <= 0 && (sp.marker.inclusiveRight && marker.inclusiveLeft ? cmp(found.to, from) >= 0 : cmp(found.to, from) > 0) || fromCmp >= 0 && (sp.marker.inclusiveRight && marker.inclusiveLeft ? cmp(found.from, to) <= 0 : cmp(found.from, to) < 0)) {
                return true;
              }
            }
          }
        }

        function visualLine(line) {
          var merged;

          while (merged = collapsedSpanAtStart(line)) {
            line = merged.find(-1, true).line;
          }

          return line;
        }

        function visualLineEnd(line) {
          var merged;

          while (merged = collapsedSpanAtEnd(line)) {
            line = merged.find(1, true).line;
          }

          return line;
        }

        function visualLineContinued(line) {
          var merged, lines;

          while (merged = collapsedSpanAtEnd(line)) {
            line = merged.find(1, true).line;
            (lines || (lines = [])).push(line);
          }

          return lines;
        }

        function visualLineNo(doc, lineN) {
          var line = getLine(doc, lineN),
              vis = visualLine(line);

          if (line == vis) {
            return lineN;
          }

          return lineNo(vis);
        }

        function visualLineEndNo(doc, lineN) {
          if (lineN > doc.lastLine()) {
            return lineN;
          }

          var line = getLine(doc, lineN),
              merged;

          if (!lineIsHidden(doc, line)) {
            return lineN;
          }

          while (merged = collapsedSpanAtEnd(line)) {
            line = merged.find(1, true).line;
          }

          return lineNo(line) + 1;
        }

        function lineIsHidden(doc, line) {
          var sps = sawCollapsedSpans && line.markedSpans;

          if (sps) {
            for (var sp = void 0, i2 = 0; i2 < sps.length; ++i2) {
              sp = sps[i2];

              if (!sp.marker.collapsed) {
                continue;
              }

              if (sp.from == null) {
                return true;
              }

              if (sp.marker.widgetNode) {
                continue;
              }

              if (sp.from == 0 && sp.marker.inclusiveLeft && lineIsHiddenInner(doc, line, sp)) {
                return true;
              }
            }
          }
        }

        function lineIsHiddenInner(doc, line, span) {
          if (span.to == null) {
            var end = span.marker.find(1, true);
            return lineIsHiddenInner(doc, end.line, getMarkedSpanFor(end.line.markedSpans, span.marker));
          }

          if (span.marker.inclusiveRight && span.to == line.text.length) {
            return true;
          }

          for (var sp = void 0, i2 = 0; i2 < line.markedSpans.length; ++i2) {
            sp = line.markedSpans[i2];

            if (sp.marker.collapsed && !sp.marker.widgetNode && sp.from == span.to && (sp.to == null || sp.to != span.from) && (sp.marker.inclusiveLeft || span.marker.inclusiveRight) && lineIsHiddenInner(doc, line, sp)) {
              return true;
            }
          }
        }

        function _heightAtLine(lineObj) {
          lineObj = visualLine(lineObj);
          var h = 0,
              chunk = lineObj.parent;

          for (var i2 = 0; i2 < chunk.lines.length; ++i2) {
            var line = chunk.lines[i2];

            if (line == lineObj) {
              break;
            } else {
              h += line.height;
            }
          }

          for (var p = chunk.parent; p; chunk = p, p = chunk.parent) {
            for (var i$12 = 0; i$12 < p.children.length; ++i$12) {
              var cur = p.children[i$12];

              if (cur == chunk) {
                break;
              } else {
                h += cur.height;
              }
            }
          }

          return h;
        }

        function lineLength(line) {
          if (line.height == 0) {
            return 0;
          }

          var len = line.text.length,
              merged,
              cur = line;

          while (merged = collapsedSpanAtStart(cur)) {
            var found = merged.find(0, true);
            cur = found.from.line;
            len += found.from.ch - found.to.ch;
          }

          cur = line;

          while (merged = collapsedSpanAtEnd(cur)) {
            var found$1 = merged.find(0, true);
            len -= cur.text.length - found$1.from.ch;
            cur = found$1.to.line;
            len += cur.text.length - found$1.to.ch;
          }

          return len;
        }

        function findMaxLine(cm) {
          var d = cm.display,
              doc = cm.doc;
          d.maxLine = getLine(doc, doc.first);
          d.maxLineLength = lineLength(d.maxLine);
          d.maxLineChanged = true;
          doc.iter(function (line) {
            var len = lineLength(line);

            if (len > d.maxLineLength) {
              d.maxLineLength = len;
              d.maxLine = line;
            }
          });
        }

        var Line = function Line(text, markedSpans, estimateHeight2) {
          this.text = text;
          attachMarkedSpans(this, markedSpans);
          this.height = estimateHeight2 ? estimateHeight2(this) : 1;
        };

        Line.prototype.lineNo = function () {
          return lineNo(this);
        };

        eventMixin(Line);

        function updateLine(line, text, markedSpans, estimateHeight2) {
          line.text = text;

          if (line.stateAfter) {
            line.stateAfter = null;
          }

          if (line.styles) {
            line.styles = null;
          }

          if (line.order != null) {
            line.order = null;
          }

          detachMarkedSpans(line);
          attachMarkedSpans(line, markedSpans);
          var estHeight = estimateHeight2 ? estimateHeight2(line) : 1;

          if (estHeight != line.height) {
            updateLineHeight(line, estHeight);
          }
        }

        function cleanUpLine(line) {
          line.parent = null;
          detachMarkedSpans(line);
        }

        var styleToClassCache = {},
            styleToClassCacheWithMode = {};

        function interpretTokenStyle(style, options) {
          if (!style || /^\s*$/.test(style)) {
            return null;
          }

          var cache = options.addModeClass ? styleToClassCacheWithMode : styleToClassCache;
          return cache[style] || (cache[style] = style.replace(/\S+/g, "cm-$&"));
        }

        function buildLineContent(cm, lineView) {
          var content = eltP("span", null, null, webkit ? "padding-right: .1px" : null);
          var builder = {
            pre: eltP("pre", [content], "CodeMirror-line"),
            content,
            col: 0,
            pos: 0,
            cm,
            trailingSpace: false,
            splitSpaces: cm.getOption("lineWrapping")
          };
          lineView.measure = {};

          for (var i2 = 0; i2 <= (lineView.rest ? lineView.rest.length : 0); i2++) {
            var line = i2 ? lineView.rest[i2 - 1] : lineView.line,
                order = void 0;
            builder.pos = 0;
            builder.addToken = buildToken;

            if (hasBadBidiRects(cm.display.measure) && (order = getOrder(line, cm.doc.direction))) {
              builder.addToken = buildTokenBadBidi(builder.addToken, order);
            }

            builder.map = [];
            var allowFrontierUpdate = lineView != cm.display.externalMeasured && lineNo(line);
            insertLineContent(line, builder, getLineStyles(cm, line, allowFrontierUpdate));

            if (line.styleClasses) {
              if (line.styleClasses.bgClass) {
                builder.bgClass = joinClasses(line.styleClasses.bgClass, builder.bgClass || "");
              }

              if (line.styleClasses.textClass) {
                builder.textClass = joinClasses(line.styleClasses.textClass, builder.textClass || "");
              }
            }

            if (builder.map.length == 0) {
              builder.map.push(0, 0, builder.content.appendChild(zeroWidthElement(cm.display.measure)));
            }

            if (i2 == 0) {
              lineView.measure.map = builder.map;
              lineView.measure.cache = {};
            } else {
              (lineView.measure.maps || (lineView.measure.maps = [])).push(builder.map);
              (lineView.measure.caches || (lineView.measure.caches = [])).push({});
            }
          }

          if (webkit) {
            var last = builder.content.lastChild;

            if (/\bcm-tab\b/.test(last.className) || last.querySelector && last.querySelector(".cm-tab")) {
              builder.content.className = "cm-tab-wrap-hack";
            }
          }

          signal(cm, "renderLine", cm, lineView.line, builder.pre);

          if (builder.pre.className) {
            builder.textClass = joinClasses(builder.pre.className, builder.textClass || "");
          }

          return builder;
        }

        function defaultSpecialCharPlaceholder(ch) {
          var token = elt("span", "\u2022", "cm-invalidchar");
          token.title = "\\u" + ch.charCodeAt(0).toString(16);
          token.setAttribute("aria-label", token.title);
          return token;
        }

        function buildToken(builder, text, style, startStyle, endStyle, css, attributes) {
          if (!text) {
            return;
          }

          var displayText = builder.splitSpaces ? splitSpaces(text, builder.trailingSpace) : text;
          var special = builder.cm.state.specialChars,
              mustWrap = false;
          var content;

          if (!special.test(text)) {
            builder.col += text.length;
            content = document.createTextNode(displayText);
            builder.map.push(builder.pos, builder.pos + text.length, content);

            if (ie && ie_version < 9) {
              mustWrap = true;
            }

            builder.pos += text.length;
          } else {
            content = document.createDocumentFragment();
            var pos = 0;

            while (true) {
              special.lastIndex = pos;
              var m = special.exec(text);
              var skipped = m ? m.index - pos : text.length - pos;

              if (skipped) {
                var txt = document.createTextNode(displayText.slice(pos, pos + skipped));

                if (ie && ie_version < 9) {
                  content.appendChild(elt("span", [txt]));
                } else {
                  content.appendChild(txt);
                }

                builder.map.push(builder.pos, builder.pos + skipped, txt);
                builder.col += skipped;
                builder.pos += skipped;
              }

              if (!m) {
                break;
              }

              pos += skipped + 1;
              var txt$1 = void 0;

              if (m[0] == "	") {
                var tabSize = builder.cm.options.tabSize,
                    tabWidth = tabSize - builder.col % tabSize;
                txt$1 = content.appendChild(elt("span", spaceStr(tabWidth), "cm-tab"));
                txt$1.setAttribute("role", "presentation");
                txt$1.setAttribute("cm-text", "	");
                builder.col += tabWidth;
              } else if (m[0] == "\r" || m[0] == "\n") {
                txt$1 = content.appendChild(elt("span", m[0] == "\r" ? "\u240D" : "\u2424", "cm-invalidchar"));
                txt$1.setAttribute("cm-text", m[0]);
                builder.col += 1;
              } else {
                txt$1 = builder.cm.options.specialCharPlaceholder(m[0]);
                txt$1.setAttribute("cm-text", m[0]);

                if (ie && ie_version < 9) {
                  content.appendChild(elt("span", [txt$1]));
                } else {
                  content.appendChild(txt$1);
                }

                builder.col += 1;
              }

              builder.map.push(builder.pos, builder.pos + 1, txt$1);
              builder.pos++;
            }
          }

          builder.trailingSpace = displayText.charCodeAt(text.length - 1) == 32;

          if (style || startStyle || endStyle || mustWrap || css || attributes) {
            var fullStyle = style || "";

            if (startStyle) {
              fullStyle += startStyle;
            }

            if (endStyle) {
              fullStyle += endStyle;
            }

            var token = elt("span", [content], fullStyle, css);

            if (attributes) {
              for (var attr in attributes) {
                if (attributes.hasOwnProperty(attr) && attr != "style" && attr != "class") {
                  token.setAttribute(attr, attributes[attr]);
                }
              }
            }

            return builder.content.appendChild(token);
          }

          builder.content.appendChild(content);
        }

        function splitSpaces(text, trailingBefore) {
          if (text.length > 1 && !/  /.test(text)) {
            return text;
          }

          var spaceBefore = trailingBefore,
              result = "";

          for (var i2 = 0; i2 < text.length; i2++) {
            var ch = text.charAt(i2);

            if (ch == " " && spaceBefore && (i2 == text.length - 1 || text.charCodeAt(i2 + 1) == 32)) {
              ch = "\xA0";
            }

            result += ch;
            spaceBefore = ch == " ";
          }

          return result;
        }

        function buildTokenBadBidi(inner, order) {
          return function (builder, text, style, startStyle, endStyle, css, attributes) {
            style = style ? style + " cm-force-border" : "cm-force-border";
            var start = builder.pos,
                end = start + text.length;

            for (;;) {
              var part = void 0;

              for (var i2 = 0; i2 < order.length; i2++) {
                part = order[i2];

                if (part.to > start && part.from <= start) {
                  break;
                }
              }

              if (part.to >= end) {
                return inner(builder, text, style, startStyle, endStyle, css, attributes);
              }

              inner(builder, text.slice(0, part.to - start), style, startStyle, null, css, attributes);
              startStyle = null;
              text = text.slice(part.to - start);
              start = part.to;
            }
          };
        }

        function buildCollapsedSpan(builder, size, marker, ignoreWidget) {
          var widget = !ignoreWidget && marker.widgetNode;

          if (widget) {
            builder.map.push(builder.pos, builder.pos + size, widget);
          }

          if (!ignoreWidget && builder.cm.display.input.needsContentAttribute) {
            if (!widget) {
              widget = builder.content.appendChild(document.createElement("span"));
            }

            widget.setAttribute("cm-marker", marker.id);
          }

          if (widget) {
            builder.cm.display.input.setUneditable(widget);
            builder.content.appendChild(widget);
          }

          builder.pos += size;
          builder.trailingSpace = false;
        }

        function insertLineContent(line, builder, styles) {
          var spans = line.markedSpans,
              allText = line.text,
              at = 0;

          if (!spans) {
            for (var i$12 = 1; i$12 < styles.length; i$12 += 2) {
              builder.addToken(builder, allText.slice(at, at = styles[i$12]), interpretTokenStyle(styles[i$12 + 1], builder.cm.options));
            }

            return;
          }

          var len = allText.length,
              pos = 0,
              i2 = 1,
              text = "",
              style,
              css;
          var nextChange = 0,
              spanStyle,
              spanEndStyle,
              spanStartStyle,
              collapsed,
              attributes;

          for (;;) {
            if (nextChange == pos) {
              spanStyle = spanEndStyle = spanStartStyle = css = "";
              attributes = null;
              collapsed = null;
              nextChange = Infinity;
              var foundBookmarks = [],
                  endStyles = void 0;

              for (var j = 0; j < spans.length; ++j) {
                var sp = spans[j],
                    m = sp.marker;

                if (m.type == "bookmark" && sp.from == pos && m.widgetNode) {
                  foundBookmarks.push(m);
                } else if (sp.from <= pos && (sp.to == null || sp.to > pos || m.collapsed && sp.to == pos && sp.from == pos)) {
                  if (sp.to != null && sp.to != pos && nextChange > sp.to) {
                    nextChange = sp.to;
                    spanEndStyle = "";
                  }

                  if (m.className) {
                    spanStyle += " " + m.className;
                  }

                  if (m.css) {
                    css = (css ? css + ";" : "") + m.css;
                  }

                  if (m.startStyle && sp.from == pos) {
                    spanStartStyle += " " + m.startStyle;
                  }

                  if (m.endStyle && sp.to == nextChange) {
                    (endStyles || (endStyles = [])).push(m.endStyle, sp.to);
                  }

                  if (m.title) {
                    (attributes || (attributes = {})).title = m.title;
                  }

                  if (m.attributes) {
                    for (var attr in m.attributes) {
                      (attributes || (attributes = {}))[attr] = m.attributes[attr];
                    }
                  }

                  if (m.collapsed && (!collapsed || compareCollapsedMarkers(collapsed.marker, m) < 0)) {
                    collapsed = sp;
                  }
                } else if (sp.from > pos && nextChange > sp.from) {
                  nextChange = sp.from;
                }
              }

              if (endStyles) {
                for (var j$1 = 0; j$1 < endStyles.length; j$1 += 2) {
                  if (endStyles[j$1 + 1] == nextChange) {
                    spanEndStyle += " " + endStyles[j$1];
                  }
                }
              }

              if (!collapsed || collapsed.from == pos) {
                for (var j$2 = 0; j$2 < foundBookmarks.length; ++j$2) {
                  buildCollapsedSpan(builder, 0, foundBookmarks[j$2]);
                }
              }

              if (collapsed && (collapsed.from || 0) == pos) {
                buildCollapsedSpan(builder, (collapsed.to == null ? len + 1 : collapsed.to) - pos, collapsed.marker, collapsed.from == null);

                if (collapsed.to == null) {
                  return;
                }

                if (collapsed.to == pos) {
                  collapsed = false;
                }
              }
            }

            if (pos >= len) {
              break;
            }

            var upto = Math.min(len, nextChange);

            while (true) {
              if (text) {
                var end = pos + text.length;

                if (!collapsed) {
                  var tokenText = end > upto ? text.slice(0, upto - pos) : text;
                  builder.addToken(builder, tokenText, style ? style + spanStyle : spanStyle, spanStartStyle, pos + tokenText.length == nextChange ? spanEndStyle : "", css, attributes);
                }

                if (end >= upto) {
                  text = text.slice(upto - pos);
                  pos = upto;
                  break;
                }

                pos = end;
                spanStartStyle = "";
              }

              text = allText.slice(at, at = styles[i2++]);
              style = interpretTokenStyle(styles[i2++], builder.cm.options);
            }
          }
        }

        function LineView(doc, line, lineN) {
          this.line = line;
          this.rest = visualLineContinued(line);
          this.size = this.rest ? lineNo(lst(this.rest)) - lineN + 1 : 1;
          this.node = this.text = null;
          this.hidden = lineIsHidden(doc, line);
        }

        function buildViewArray(cm, from, to) {
          var array = [],
              nextPos;

          for (var pos = from; pos < to; pos = nextPos) {
            var view = new LineView(cm.doc, getLine(cm.doc, pos), pos);
            nextPos = pos + view.size;
            array.push(view);
          }

          return array;
        }

        var operationGroup = null;

        function pushOperation(op) {
          if (operationGroup) {
            operationGroup.ops.push(op);
          } else {
            op.ownsGroup = operationGroup = {
              ops: [op],
              delayedCallbacks: []
            };
          }
        }

        function fireCallbacksForOps(group) {
          var callbacks = group.delayedCallbacks,
              i2 = 0;

          do {
            for (; i2 < callbacks.length; i2++) {
              callbacks[i2].call(null);
            }

            for (var j = 0; j < group.ops.length; j++) {
              var op = group.ops[j];

              if (op.cursorActivityHandlers) {
                while (op.cursorActivityCalled < op.cursorActivityHandlers.length) {
                  op.cursorActivityHandlers[op.cursorActivityCalled++].call(null, op.cm);
                }
              }
            }
          } while (i2 < callbacks.length);
        }

        function finishOperation(op, endCb) {
          var group = op.ownsGroup;

          if (!group) {
            return;
          }

          try {
            fireCallbacksForOps(group);
          } finally {
            operationGroup = null;
            endCb(group);
          }
        }

        var orphanDelayedCallbacks = null;

        function signalLater(emitter, type) {
          var arr = getHandlers(emitter, type);

          if (!arr.length) {
            return;
          }

          var args = Array.prototype.slice.call(arguments, 2),
              list;

          if (operationGroup) {
            list = operationGroup.delayedCallbacks;
          } else if (orphanDelayedCallbacks) {
            list = orphanDelayedCallbacks;
          } else {
            list = orphanDelayedCallbacks = [];
            setTimeout(fireOrphanDelayed, 0);
          }

          var loop = function loop(i3) {
            list.push(function () {
              return arr[i3].apply(null, args);
            });
          };

          for (var i2 = 0; i2 < arr.length; ++i2) {
            loop(i2);
          }
        }

        function fireOrphanDelayed() {
          var delayed = orphanDelayedCallbacks;
          orphanDelayedCallbacks = null;

          for (var i2 = 0; i2 < delayed.length; ++i2) {
            delayed[i2]();
          }
        }

        function updateLineForChanges(cm, lineView, lineN, dims) {
          for (var j = 0; j < lineView.changes.length; j++) {
            var type = lineView.changes[j];

            if (type == "text") {
              updateLineText(cm, lineView);
            } else if (type == "gutter") {
              updateLineGutter(cm, lineView, lineN, dims);
            } else if (type == "class") {
              updateLineClasses(cm, lineView);
            } else if (type == "widget") {
              updateLineWidgets(cm, lineView, dims);
            }
          }

          lineView.changes = null;
        }

        function ensureLineWrapped(lineView) {
          if (lineView.node == lineView.text) {
            lineView.node = elt("div", null, null, "position: relative");

            if (lineView.text.parentNode) {
              lineView.text.parentNode.replaceChild(lineView.node, lineView.text);
            }

            lineView.node.appendChild(lineView.text);

            if (ie && ie_version < 8) {
              lineView.node.style.zIndex = 2;
            }
          }

          return lineView.node;
        }

        function updateLineBackground(cm, lineView) {
          var cls = lineView.bgClass ? lineView.bgClass + " " + (lineView.line.bgClass || "") : lineView.line.bgClass;

          if (cls) {
            cls += " CodeMirror-linebackground";
          }

          if (lineView.background) {
            if (cls) {
              lineView.background.className = cls;
            } else {
              lineView.background.parentNode.removeChild(lineView.background);
              lineView.background = null;
            }
          } else if (cls) {
            var wrap = ensureLineWrapped(lineView);
            lineView.background = wrap.insertBefore(elt("div", null, cls), wrap.firstChild);
            cm.display.input.setUneditable(lineView.background);
          }
        }

        function getLineContent(cm, lineView) {
          var ext = cm.display.externalMeasured;

          if (ext && ext.line == lineView.line) {
            cm.display.externalMeasured = null;
            lineView.measure = ext.measure;
            return ext.built;
          }

          return buildLineContent(cm, lineView);
        }

        function updateLineText(cm, lineView) {
          var cls = lineView.text.className;
          var built = getLineContent(cm, lineView);

          if (lineView.text == lineView.node) {
            lineView.node = built.pre;
          }

          lineView.text.parentNode.replaceChild(built.pre, lineView.text);
          lineView.text = built.pre;

          if (built.bgClass != lineView.bgClass || built.textClass != lineView.textClass) {
            lineView.bgClass = built.bgClass;
            lineView.textClass = built.textClass;
            updateLineClasses(cm, lineView);
          } else if (cls) {
            lineView.text.className = cls;
          }
        }

        function updateLineClasses(cm, lineView) {
          updateLineBackground(cm, lineView);

          if (lineView.line.wrapClass) {
            ensureLineWrapped(lineView).className = lineView.line.wrapClass;
          } else if (lineView.node != lineView.text) {
            lineView.node.className = "";
          }

          var textClass = lineView.textClass ? lineView.textClass + " " + (lineView.line.textClass || "") : lineView.line.textClass;
          lineView.text.className = textClass || "";
        }

        function updateLineGutter(cm, lineView, lineN, dims) {
          if (lineView.gutter) {
            lineView.node.removeChild(lineView.gutter);
            lineView.gutter = null;
          }

          if (lineView.gutterBackground) {
            lineView.node.removeChild(lineView.gutterBackground);
            lineView.gutterBackground = null;
          }

          if (lineView.line.gutterClass) {
            var wrap = ensureLineWrapped(lineView);
            lineView.gutterBackground = elt("div", null, "CodeMirror-gutter-background " + lineView.line.gutterClass, "left: " + (cm.options.fixedGutter ? dims.fixedPos : -dims.gutterTotalWidth) + "px; width: " + dims.gutterTotalWidth + "px");
            cm.display.input.setUneditable(lineView.gutterBackground);
            wrap.insertBefore(lineView.gutterBackground, lineView.text);
          }

          var markers = lineView.line.gutterMarkers;

          if (cm.options.lineNumbers || markers) {
            var wrap$1 = ensureLineWrapped(lineView);
            var gutterWrap = lineView.gutter = elt("div", null, "CodeMirror-gutter-wrapper", "left: " + (cm.options.fixedGutter ? dims.fixedPos : -dims.gutterTotalWidth) + "px");
            gutterWrap.setAttribute("aria-hidden", "true");
            cm.display.input.setUneditable(gutterWrap);
            wrap$1.insertBefore(gutterWrap, lineView.text);

            if (lineView.line.gutterClass) {
              gutterWrap.className += " " + lineView.line.gutterClass;
            }

            if (cm.options.lineNumbers && (!markers || !markers["CodeMirror-linenumbers"])) {
              lineView.lineNumber = gutterWrap.appendChild(elt("div", lineNumberFor(cm.options, lineN), "CodeMirror-linenumber CodeMirror-gutter-elt", "left: " + dims.gutterLeft["CodeMirror-linenumbers"] + "px; width: " + cm.display.lineNumInnerWidth + "px"));
            }

            if (markers) {
              for (var k = 0; k < cm.display.gutterSpecs.length; ++k) {
                var id = cm.display.gutterSpecs[k].className,
                    found = markers.hasOwnProperty(id) && markers[id];

                if (found) {
                  gutterWrap.appendChild(elt("div", [found], "CodeMirror-gutter-elt", "left: " + dims.gutterLeft[id] + "px; width: " + dims.gutterWidth[id] + "px"));
                }
              }
            }
          }
        }

        function updateLineWidgets(cm, lineView, dims) {
          if (lineView.alignable) {
            lineView.alignable = null;
          }

          var isWidget = classTest("CodeMirror-linewidget");

          for (var node = lineView.node.firstChild, next = void 0; node; node = next) {
            next = node.nextSibling;

            if (isWidget.test(node.className)) {
              lineView.node.removeChild(node);
            }
          }

          insertLineWidgets(cm, lineView, dims);
        }

        function buildLineElement(cm, lineView, lineN, dims) {
          var built = getLineContent(cm, lineView);
          lineView.text = lineView.node = built.pre;

          if (built.bgClass) {
            lineView.bgClass = built.bgClass;
          }

          if (built.textClass) {
            lineView.textClass = built.textClass;
          }

          updateLineClasses(cm, lineView);
          updateLineGutter(cm, lineView, lineN, dims);
          insertLineWidgets(cm, lineView, dims);
          return lineView.node;
        }

        function insertLineWidgets(cm, lineView, dims) {
          insertLineWidgetsFor(cm, lineView.line, lineView, dims, true);

          if (lineView.rest) {
            for (var i2 = 0; i2 < lineView.rest.length; i2++) {
              insertLineWidgetsFor(cm, lineView.rest[i2], lineView, dims, false);
            }
          }
        }

        function insertLineWidgetsFor(cm, line, lineView, dims, allowAbove) {
          if (!line.widgets) {
            return;
          }

          var wrap = ensureLineWrapped(lineView);

          for (var i2 = 0, ws = line.widgets; i2 < ws.length; ++i2) {
            var widget = ws[i2],
                node = elt("div", [widget.node], "CodeMirror-linewidget" + (widget.className ? " " + widget.className : ""));

            if (!widget.handleMouseEvents) {
              node.setAttribute("cm-ignore-events", "true");
            }

            positionLineWidget(widget, node, lineView, dims);
            cm.display.input.setUneditable(node);

            if (allowAbove && widget.above) {
              wrap.insertBefore(node, lineView.gutter || lineView.text);
            } else {
              wrap.appendChild(node);
            }

            signalLater(widget, "redraw");
          }
        }

        function positionLineWidget(widget, node, lineView, dims) {
          if (widget.noHScroll) {
            (lineView.alignable || (lineView.alignable = [])).push(node);
            var width = dims.wrapperWidth;
            node.style.left = dims.fixedPos + "px";

            if (!widget.coverGutter) {
              width -= dims.gutterTotalWidth;
              node.style.paddingLeft = dims.gutterTotalWidth + "px";
            }

            node.style.width = width + "px";
          }

          if (widget.coverGutter) {
            node.style.zIndex = 5;
            node.style.position = "relative";

            if (!widget.noHScroll) {
              node.style.marginLeft = -dims.gutterTotalWidth + "px";
            }
          }
        }

        function widgetHeight(widget) {
          if (widget.height != null) {
            return widget.height;
          }

          var cm = widget.doc.cm;

          if (!cm) {
            return 0;
          }

          if (!contains(document.body, widget.node)) {
            var parentStyle = "position: relative;";

            if (widget.coverGutter) {
              parentStyle += "margin-left: -" + cm.display.gutters.offsetWidth + "px;";
            }

            if (widget.noHScroll) {
              parentStyle += "width: " + cm.display.wrapper.clientWidth + "px;";
            }

            removeChildrenAndAdd(cm.display.measure, elt("div", [widget.node], null, parentStyle));
          }

          return widget.height = widget.node.parentNode.offsetHeight;
        }

        function eventInWidget(display, e) {
          for (var n = e_target(e); n != display.wrapper; n = n.parentNode) {
            if (!n || n.nodeType == 1 && n.getAttribute("cm-ignore-events") == "true" || n.parentNode == display.sizer && n != display.mover) {
              return true;
            }
          }
        }

        function paddingTop(display) {
          return display.lineSpace.offsetTop;
        }

        function paddingVert(display) {
          return display.mover.offsetHeight - display.lineSpace.offsetHeight;
        }

        function paddingH(display) {
          if (display.cachedPaddingH) {
            return display.cachedPaddingH;
          }

          var e = removeChildrenAndAdd(display.measure, elt("pre", "x", "CodeMirror-line-like"));
          var style = window.getComputedStyle ? window.getComputedStyle(e) : e.currentStyle;
          var data = {
            left: parseInt(style.paddingLeft),
            right: parseInt(style.paddingRight)
          };

          if (!isNaN(data.left) && !isNaN(data.right)) {
            display.cachedPaddingH = data;
          }

          return data;
        }

        function scrollGap(cm) {
          return scrollerGap - cm.display.nativeBarWidth;
        }

        function displayWidth(cm) {
          return cm.display.scroller.clientWidth - scrollGap(cm) - cm.display.barWidth;
        }

        function displayHeight(cm) {
          return cm.display.scroller.clientHeight - scrollGap(cm) - cm.display.barHeight;
        }

        function ensureLineHeights(cm, lineView, rect) {
          var wrapping = cm.options.lineWrapping;
          var curWidth = wrapping && displayWidth(cm);

          if (!lineView.measure.heights || wrapping && lineView.measure.width != curWidth) {
            var heights = lineView.measure.heights = [];

            if (wrapping) {
              lineView.measure.width = curWidth;
              var rects = lineView.text.firstChild.getClientRects();

              for (var i2 = 0; i2 < rects.length - 1; i2++) {
                var cur = rects[i2],
                    next = rects[i2 + 1];

                if (Math.abs(cur.bottom - next.bottom) > 2) {
                  heights.push((cur.bottom + next.top) / 2 - rect.top);
                }
              }
            }

            heights.push(rect.bottom - rect.top);
          }
        }

        function mapFromLineView(lineView, line, lineN) {
          if (lineView.line == line) {
            return {
              map: lineView.measure.map,
              cache: lineView.measure.cache
            };
          }

          if (lineView.rest) {
            for (var i2 = 0; i2 < lineView.rest.length; i2++) {
              if (lineView.rest[i2] == line) {
                return {
                  map: lineView.measure.maps[i2],
                  cache: lineView.measure.caches[i2]
                };
              }
            }

            for (var i$12 = 0; i$12 < lineView.rest.length; i$12++) {
              if (lineNo(lineView.rest[i$12]) > lineN) {
                return {
                  map: lineView.measure.maps[i$12],
                  cache: lineView.measure.caches[i$12],
                  before: true
                };
              }
            }
          }
        }

        function updateExternalMeasurement(cm, line) {
          line = visualLine(line);
          var lineN = lineNo(line);
          var view = cm.display.externalMeasured = new LineView(cm.doc, line, lineN);
          view.lineN = lineN;
          var built = view.built = buildLineContent(cm, view);
          view.text = built.pre;
          removeChildrenAndAdd(cm.display.lineMeasure, built.pre);
          return view;
        }

        function measureChar(cm, line, ch, bias) {
          return measureCharPrepared(cm, prepareMeasureForLine(cm, line), ch, bias);
        }

        function findViewForLine(cm, lineN) {
          if (lineN >= cm.display.viewFrom && lineN < cm.display.viewTo) {
            return cm.display.view[findViewIndex(cm, lineN)];
          }

          var ext = cm.display.externalMeasured;

          if (ext && lineN >= ext.lineN && lineN < ext.lineN + ext.size) {
            return ext;
          }
        }

        function prepareMeasureForLine(cm, line) {
          var lineN = lineNo(line);
          var view = findViewForLine(cm, lineN);

          if (view && !view.text) {
            view = null;
          } else if (view && view.changes) {
            updateLineForChanges(cm, view, lineN, getDimensions(cm));
            cm.curOp.forceUpdate = true;
          }

          if (!view) {
            view = updateExternalMeasurement(cm, line);
          }

          var info = mapFromLineView(view, line, lineN);
          return {
            line,
            view,
            rect: null,
            map: info.map,
            cache: info.cache,
            before: info.before,
            hasHeights: false
          };
        }

        function measureCharPrepared(cm, prepared, ch, bias, varHeight) {
          if (prepared.before) {
            ch = -1;
          }

          var key = ch + (bias || ""),
              found;

          if (prepared.cache.hasOwnProperty(key)) {
            found = prepared.cache[key];
          } else {
            if (!prepared.rect) {
              prepared.rect = prepared.view.text.getBoundingClientRect();
            }

            if (!prepared.hasHeights) {
              ensureLineHeights(cm, prepared.view, prepared.rect);
              prepared.hasHeights = true;
            }

            found = measureCharInner(cm, prepared, ch, bias);

            if (!found.bogus) {
              prepared.cache[key] = found;
            }
          }

          return {
            left: found.left,
            right: found.right,
            top: varHeight ? found.rtop : found.top,
            bottom: varHeight ? found.rbottom : found.bottom
          };
        }

        var nullRect = {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        };

        function nodeAndOffsetInLineMap(map2, ch, bias) {
          var node, start, end, collapse, mStart, mEnd;

          for (var i2 = 0; i2 < map2.length; i2 += 3) {
            mStart = map2[i2];
            mEnd = map2[i2 + 1];

            if (ch < mStart) {
              start = 0;
              end = 1;
              collapse = "left";
            } else if (ch < mEnd) {
              start = ch - mStart;
              end = start + 1;
            } else if (i2 == map2.length - 3 || ch == mEnd && map2[i2 + 3] > ch) {
              end = mEnd - mStart;
              start = end - 1;

              if (ch >= mEnd) {
                collapse = "right";
              }
            }

            if (start != null) {
              node = map2[i2 + 2];

              if (mStart == mEnd && bias == (node.insertLeft ? "left" : "right")) {
                collapse = bias;
              }

              if (bias == "left" && start == 0) {
                while (i2 && map2[i2 - 2] == map2[i2 - 3] && map2[i2 - 1].insertLeft) {
                  node = map2[(i2 -= 3) + 2];
                  collapse = "left";
                }
              }

              if (bias == "right" && start == mEnd - mStart) {
                while (i2 < map2.length - 3 && map2[i2 + 3] == map2[i2 + 4] && !map2[i2 + 5].insertLeft) {
                  node = map2[(i2 += 3) + 2];
                  collapse = "right";
                }
              }

              break;
            }
          }

          return {
            node,
            start,
            end,
            collapse,
            coverStart: mStart,
            coverEnd: mEnd
          };
        }

        function getUsefulRect(rects, bias) {
          var rect = nullRect;

          if (bias == "left") {
            for (var i2 = 0; i2 < rects.length; i2++) {
              if ((rect = rects[i2]).left != rect.right) {
                break;
              }
            }
          } else {
            for (var i$12 = rects.length - 1; i$12 >= 0; i$12--) {
              if ((rect = rects[i$12]).left != rect.right) {
                break;
              }
            }
          }

          return rect;
        }

        function measureCharInner(cm, prepared, ch, bias) {
          var place = nodeAndOffsetInLineMap(prepared.map, ch, bias);
          var node = place.node,
              start = place.start,
              end = place.end,
              collapse = place.collapse;
          var rect;

          if (node.nodeType == 3) {
            for (var i$12 = 0; i$12 < 4; i$12++) {
              while (start && isExtendingChar(prepared.line.text.charAt(place.coverStart + start))) {
                --start;
              }

              while (place.coverStart + end < place.coverEnd && isExtendingChar(prepared.line.text.charAt(place.coverStart + end))) {
                ++end;
              }

              if (ie && ie_version < 9 && start == 0 && end == place.coverEnd - place.coverStart) {
                rect = node.parentNode.getBoundingClientRect();
              } else {
                rect = getUsefulRect(range(node, start, end).getClientRects(), bias);
              }

              if (rect.left || rect.right || start == 0) {
                break;
              }

              end = start;
              start = start - 1;
              collapse = "right";
            }

            if (ie && ie_version < 11) {
              rect = maybeUpdateRectForZooming(cm.display.measure, rect);
            }
          } else {
            if (start > 0) {
              collapse = bias = "right";
            }

            var rects;

            if (cm.options.lineWrapping && (rects = node.getClientRects()).length > 1) {
              rect = rects[bias == "right" ? rects.length - 1 : 0];
            } else {
              rect = node.getBoundingClientRect();
            }
          }

          if (ie && ie_version < 9 && !start && (!rect || !rect.left && !rect.right)) {
            var rSpan = node.parentNode.getClientRects()[0];

            if (rSpan) {
              rect = {
                left: rSpan.left,
                right: rSpan.left + charWidth(cm.display),
                top: rSpan.top,
                bottom: rSpan.bottom
              };
            } else {
              rect = nullRect;
            }
          }

          var rtop = rect.top - prepared.rect.top,
              rbot = rect.bottom - prepared.rect.top;
          var mid = (rtop + rbot) / 2;
          var heights = prepared.view.measure.heights;
          var i2 = 0;

          for (; i2 < heights.length - 1; i2++) {
            if (mid < heights[i2]) {
              break;
            }
          }

          var top = i2 ? heights[i2 - 1] : 0,
              bot = heights[i2];
          var result = {
            left: (collapse == "right" ? rect.right : rect.left) - prepared.rect.left,
            right: (collapse == "left" ? rect.left : rect.right) - prepared.rect.left,
            top,
            bottom: bot
          };

          if (!rect.left && !rect.right) {
            result.bogus = true;
          }

          if (!cm.options.singleCursorHeightPerLine) {
            result.rtop = rtop;
            result.rbottom = rbot;
          }

          return result;
        }

        function maybeUpdateRectForZooming(measure, rect) {
          if (!window.screen || screen.logicalXDPI == null || screen.logicalXDPI == screen.deviceXDPI || !hasBadZoomedRects(measure)) {
            return rect;
          }

          var scaleX = screen.logicalXDPI / screen.deviceXDPI;
          var scaleY = screen.logicalYDPI / screen.deviceYDPI;
          return {
            left: rect.left * scaleX,
            right: rect.right * scaleX,
            top: rect.top * scaleY,
            bottom: rect.bottom * scaleY
          };
        }

        function clearLineMeasurementCacheFor(lineView) {
          if (lineView.measure) {
            lineView.measure.cache = {};
            lineView.measure.heights = null;

            if (lineView.rest) {
              for (var i2 = 0; i2 < lineView.rest.length; i2++) {
                lineView.measure.caches[i2] = {};
              }
            }
          }
        }

        function clearLineMeasurementCache(cm) {
          cm.display.externalMeasure = null;
          removeChildren(cm.display.lineMeasure);

          for (var i2 = 0; i2 < cm.display.view.length; i2++) {
            clearLineMeasurementCacheFor(cm.display.view[i2]);
          }
        }

        function clearCaches(cm) {
          clearLineMeasurementCache(cm);
          cm.display.cachedCharWidth = cm.display.cachedTextHeight = cm.display.cachedPaddingH = null;

          if (!cm.options.lineWrapping) {
            cm.display.maxLineChanged = true;
          }

          cm.display.lineNumChars = null;
        }

        function pageScrollX() {
          if (chrome && android) {
            return -(document.body.getBoundingClientRect().left - parseInt(getComputedStyle(document.body).marginLeft));
          }

          return window.pageXOffset || (document.documentElement || document.body).scrollLeft;
        }

        function pageScrollY() {
          if (chrome && android) {
            return -(document.body.getBoundingClientRect().top - parseInt(getComputedStyle(document.body).marginTop));
          }

          return window.pageYOffset || (document.documentElement || document.body).scrollTop;
        }

        function widgetTopHeight(lineObj) {
          var ref = visualLine(lineObj);
          var widgets = ref.widgets;
          var height = 0;

          if (widgets) {
            for (var i2 = 0; i2 < widgets.length; ++i2) {
              if (widgets[i2].above) {
                height += widgetHeight(widgets[i2]);
              }
            }
          }

          return height;
        }

        function intoCoordSystem(cm, lineObj, rect, context, includeWidgets) {
          if (!includeWidgets) {
            var height = widgetTopHeight(lineObj);
            rect.top += height;
            rect.bottom += height;
          }

          if (context == "line") {
            return rect;
          }

          if (!context) {
            context = "local";
          }

          var yOff = _heightAtLine(lineObj);

          if (context == "local") {
            yOff += paddingTop(cm.display);
          } else {
            yOff -= cm.display.viewOffset;
          }

          if (context == "page" || context == "window") {
            var lOff = cm.display.lineSpace.getBoundingClientRect();
            yOff += lOff.top + (context == "window" ? 0 : pageScrollY());
            var xOff = lOff.left + (context == "window" ? 0 : pageScrollX());
            rect.left += xOff;
            rect.right += xOff;
          }

          rect.top += yOff;
          rect.bottom += yOff;
          return rect;
        }

        function fromCoordSystem(cm, coords, context) {
          if (context == "div") {
            return coords;
          }

          var left = coords.left,
              top = coords.top;

          if (context == "page") {
            left -= pageScrollX();
            top -= pageScrollY();
          } else if (context == "local" || !context) {
            var localBox = cm.display.sizer.getBoundingClientRect();
            left += localBox.left;
            top += localBox.top;
          }

          var lineSpaceBox = cm.display.lineSpace.getBoundingClientRect();
          return {
            left: left - lineSpaceBox.left,
            top: top - lineSpaceBox.top
          };
        }

        function _charCoords(cm, pos, context, lineObj, bias) {
          if (!lineObj) {
            lineObj = getLine(cm.doc, pos.line);
          }

          return intoCoordSystem(cm, lineObj, measureChar(cm, lineObj, pos.ch, bias), context);
        }

        function _cursorCoords(cm, pos, context, lineObj, preparedMeasure, varHeight) {
          lineObj = lineObj || getLine(cm.doc, pos.line);

          if (!preparedMeasure) {
            preparedMeasure = prepareMeasureForLine(cm, lineObj);
          }

          function get(ch2, right) {
            var m = measureCharPrepared(cm, preparedMeasure, ch2, right ? "right" : "left", varHeight);

            if (right) {
              m.left = m.right;
            } else {
              m.right = m.left;
            }

            return intoCoordSystem(cm, lineObj, m, context);
          }

          var order = getOrder(lineObj, cm.doc.direction),
              ch = pos.ch,
              sticky = pos.sticky;

          if (ch >= lineObj.text.length) {
            ch = lineObj.text.length;
            sticky = "before";
          } else if (ch <= 0) {
            ch = 0;
            sticky = "after";
          }

          if (!order) {
            return get(sticky == "before" ? ch - 1 : ch, sticky == "before");
          }

          function getBidi(ch2, partPos2, invert) {
            var part = order[partPos2],
                right = part.level == 1;
            return get(invert ? ch2 - 1 : ch2, right != invert);
          }

          var partPos = getBidiPartAt(order, ch, sticky);
          var other = bidiOther;
          var val = getBidi(ch, partPos, sticky == "before");

          if (other != null) {
            val.other = getBidi(ch, other, sticky != "before");
          }

          return val;
        }

        function estimateCoords(cm, pos) {
          var left = 0;
          pos = _clipPos(cm.doc, pos);

          if (!cm.options.lineWrapping) {
            left = charWidth(cm.display) * pos.ch;
          }

          var lineObj = getLine(cm.doc, pos.line);
          var top = _heightAtLine(lineObj) + paddingTop(cm.display);
          return {
            left,
            right: left,
            top,
            bottom: top + lineObj.height
          };
        }

        function PosWithInfo(line, ch, sticky, outside, xRel) {
          var pos = Pos(line, ch, sticky);
          pos.xRel = xRel;

          if (outside) {
            pos.outside = outside;
          }

          return pos;
        }

        function _coordsChar(cm, x, y) {
          var doc = cm.doc;
          y += cm.display.viewOffset;

          if (y < 0) {
            return PosWithInfo(doc.first, 0, null, -1, -1);
          }

          var lineN = _lineAtHeight(doc, y),
              last = doc.first + doc.size - 1;

          if (lineN > last) {
            return PosWithInfo(doc.first + doc.size - 1, getLine(doc, last).text.length, null, 1, 1);
          }

          if (x < 0) {
            x = 0;
          }

          var lineObj = getLine(doc, lineN);

          for (;;) {
            var found = coordsCharInner(cm, lineObj, lineN, x, y);
            var collapsed = collapsedSpanAround(lineObj, found.ch + (found.xRel > 0 || found.outside > 0 ? 1 : 0));

            if (!collapsed) {
              return found;
            }

            var rangeEnd = collapsed.find(1);

            if (rangeEnd.line == lineN) {
              return rangeEnd;
            }

            lineObj = getLine(doc, lineN = rangeEnd.line);
          }
        }

        function wrappedLineExtent(cm, lineObj, preparedMeasure, y) {
          y -= widgetTopHeight(lineObj);
          var end = lineObj.text.length;
          var begin = findFirst(function (ch) {
            return measureCharPrepared(cm, preparedMeasure, ch - 1).bottom <= y;
          }, end, 0);
          end = findFirst(function (ch) {
            return measureCharPrepared(cm, preparedMeasure, ch).top > y;
          }, begin, end);
          return {
            begin,
            end
          };
        }

        function wrappedLineExtentChar(cm, lineObj, preparedMeasure, target) {
          if (!preparedMeasure) {
            preparedMeasure = prepareMeasureForLine(cm, lineObj);
          }

          var targetTop = intoCoordSystem(cm, lineObj, measureCharPrepared(cm, preparedMeasure, target), "line").top;
          return wrappedLineExtent(cm, lineObj, preparedMeasure, targetTop);
        }

        function boxIsAfter(box, x, y, left) {
          return box.bottom <= y ? false : box.top > y ? true : (left ? box.left : box.right) > x;
        }

        function coordsCharInner(cm, lineObj, lineNo2, x, y) {
          y -= _heightAtLine(lineObj);
          var preparedMeasure = prepareMeasureForLine(cm, lineObj);
          var widgetHeight2 = widgetTopHeight(lineObj);
          var begin = 0,
              end = lineObj.text.length,
              ltr = true;
          var order = getOrder(lineObj, cm.doc.direction);

          if (order) {
            var part = (cm.options.lineWrapping ? coordsBidiPartWrapped : coordsBidiPart)(cm, lineObj, lineNo2, preparedMeasure, order, x, y);
            ltr = part.level != 1;
            begin = ltr ? part.from : part.to - 1;
            end = ltr ? part.to : part.from - 1;
          }

          var chAround = null,
              boxAround = null;
          var ch = findFirst(function (ch2) {
            var box = measureCharPrepared(cm, preparedMeasure, ch2);
            box.top += widgetHeight2;
            box.bottom += widgetHeight2;

            if (!boxIsAfter(box, x, y, false)) {
              return false;
            }

            if (box.top <= y && box.left <= x) {
              chAround = ch2;
              boxAround = box;
            }

            return true;
          }, begin, end);
          var baseX,
              sticky,
              outside = false;

          if (boxAround) {
            var atLeft = x - boxAround.left < boxAround.right - x,
                atStart = atLeft == ltr;
            ch = chAround + (atStart ? 0 : 1);
            sticky = atStart ? "after" : "before";
            baseX = atLeft ? boxAround.left : boxAround.right;
          } else {
            if (!ltr && (ch == end || ch == begin)) {
              ch++;
            }

            sticky = ch == 0 ? "after" : ch == lineObj.text.length ? "before" : measureCharPrepared(cm, preparedMeasure, ch - (ltr ? 1 : 0)).bottom + widgetHeight2 <= y == ltr ? "after" : "before";

            var coords = _cursorCoords(cm, Pos(lineNo2, ch, sticky), "line", lineObj, preparedMeasure);

            baseX = coords.left;
            outside = y < coords.top ? -1 : y >= coords.bottom ? 1 : 0;
          }

          ch = skipExtendingChars(lineObj.text, ch, 1);
          return PosWithInfo(lineNo2, ch, sticky, outside, x - baseX);
        }

        function coordsBidiPart(cm, lineObj, lineNo2, preparedMeasure, order, x, y) {
          var index = findFirst(function (i2) {
            var part2 = order[i2],
                ltr2 = part2.level != 1;
            return boxIsAfter(_cursorCoords(cm, Pos(lineNo2, ltr2 ? part2.to : part2.from, ltr2 ? "before" : "after"), "line", lineObj, preparedMeasure), x, y, true);
          }, 0, order.length - 1);
          var part = order[index];

          if (index > 0) {
            var ltr = part.level != 1;

            var start = _cursorCoords(cm, Pos(lineNo2, ltr ? part.from : part.to, ltr ? "after" : "before"), "line", lineObj, preparedMeasure);

            if (boxIsAfter(start, x, y, true) && start.top > y) {
              part = order[index - 1];
            }
          }

          return part;
        }

        function coordsBidiPartWrapped(cm, lineObj, _lineNo, preparedMeasure, order, x, y) {
          var ref = wrappedLineExtent(cm, lineObj, preparedMeasure, y);
          var begin = ref.begin;
          var end = ref.end;

          if (/\s/.test(lineObj.text.charAt(end - 1))) {
            end--;
          }

          var part = null,
              closestDist = null;

          for (var i2 = 0; i2 < order.length; i2++) {
            var p = order[i2];

            if (p.from >= end || p.to <= begin) {
              continue;
            }

            var ltr = p.level != 1;
            var endX = measureCharPrepared(cm, preparedMeasure, ltr ? Math.min(end, p.to) - 1 : Math.max(begin, p.from)).right;
            var dist = endX < x ? x - endX + 1e9 : endX - x;

            if (!part || closestDist > dist) {
              part = p;
              closestDist = dist;
            }
          }

          if (!part) {
            part = order[order.length - 1];
          }

          if (part.from < begin) {
            part = {
              from: begin,
              to: part.to,
              level: part.level
            };
          }

          if (part.to > end) {
            part = {
              from: part.from,
              to: end,
              level: part.level
            };
          }

          return part;
        }

        var measureText;

        function textHeight(display) {
          if (display.cachedTextHeight != null) {
            return display.cachedTextHeight;
          }

          if (measureText == null) {
            measureText = elt("pre", null, "CodeMirror-line-like");

            for (var i2 = 0; i2 < 49; ++i2) {
              measureText.appendChild(document.createTextNode("x"));
              measureText.appendChild(elt("br"));
            }

            measureText.appendChild(document.createTextNode("x"));
          }

          removeChildrenAndAdd(display.measure, measureText);
          var height = measureText.offsetHeight / 50;

          if (height > 3) {
            display.cachedTextHeight = height;
          }

          removeChildren(display.measure);
          return height || 1;
        }

        function charWidth(display) {
          if (display.cachedCharWidth != null) {
            return display.cachedCharWidth;
          }

          var anchor = elt("span", "xxxxxxxxxx");
          var pre = elt("pre", [anchor], "CodeMirror-line-like");
          removeChildrenAndAdd(display.measure, pre);
          var rect = anchor.getBoundingClientRect(),
              width = (rect.right - rect.left) / 10;

          if (width > 2) {
            display.cachedCharWidth = width;
          }

          return width || 10;
        }

        function getDimensions(cm) {
          var d = cm.display,
              left = {},
              width = {};
          var gutterLeft = d.gutters.clientLeft;

          for (var n = d.gutters.firstChild, i2 = 0; n; n = n.nextSibling, ++i2) {
            var id = cm.display.gutterSpecs[i2].className;
            left[id] = n.offsetLeft + n.clientLeft + gutterLeft;
            width[id] = n.clientWidth;
          }

          return {
            fixedPos: compensateForHScroll(d),
            gutterTotalWidth: d.gutters.offsetWidth,
            gutterLeft: left,
            gutterWidth: width,
            wrapperWidth: d.wrapper.clientWidth
          };
        }

        function compensateForHScroll(display) {
          return display.scroller.getBoundingClientRect().left - display.sizer.getBoundingClientRect().left;
        }

        function estimateHeight(cm) {
          var th = textHeight(cm.display),
              wrapping = cm.options.lineWrapping;
          var perLine = wrapping && Math.max(5, cm.display.scroller.clientWidth / charWidth(cm.display) - 3);
          return function (line) {
            if (lineIsHidden(cm.doc, line)) {
              return 0;
            }

            var widgetsHeight = 0;

            if (line.widgets) {
              for (var i2 = 0; i2 < line.widgets.length; i2++) {
                if (line.widgets[i2].height) {
                  widgetsHeight += line.widgets[i2].height;
                }
              }
            }

            if (wrapping) {
              return widgetsHeight + (Math.ceil(line.text.length / perLine) || 1) * th;
            } else {
              return widgetsHeight + th;
            }
          };
        }

        function estimateLineHeights(cm) {
          var doc = cm.doc,
              est = estimateHeight(cm);
          doc.iter(function (line) {
            var estHeight = est(line);

            if (estHeight != line.height) {
              updateLineHeight(line, estHeight);
            }
          });
        }

        function posFromMouse(cm, e, liberal, forRect) {
          var display = cm.display;

          if (!liberal && e_target(e).getAttribute("cm-not-content") == "true") {
            return null;
          }

          var x,
              y,
              space = display.lineSpace.getBoundingClientRect();

          try {
            x = e.clientX - space.left;
            y = e.clientY - space.top;
          } catch (e$1) {
            return null;
          }

          var coords = _coordsChar(cm, x, y),
              line;

          if (forRect && coords.xRel > 0 && (line = getLine(cm.doc, coords.line).text).length == coords.ch) {
            var colDiff = countColumn(line, line.length, cm.options.tabSize) - line.length;
            coords = Pos(coords.line, Math.max(0, Math.round((x - paddingH(cm.display).left) / charWidth(cm.display)) - colDiff));
          }

          return coords;
        }

        function findViewIndex(cm, n) {
          if (n >= cm.display.viewTo) {
            return null;
          }

          n -= cm.display.viewFrom;

          if (n < 0) {
            return null;
          }

          var view = cm.display.view;

          for (var i2 = 0; i2 < view.length; i2++) {
            n -= view[i2].size;

            if (n < 0) {
              return i2;
            }
          }
        }

        function regChange(cm, from, to, lendiff) {
          if (from == null) {
            from = cm.doc.first;
          }

          if (to == null) {
            to = cm.doc.first + cm.doc.size;
          }

          if (!lendiff) {
            lendiff = 0;
          }

          var display = cm.display;

          if (lendiff && to < display.viewTo && (display.updateLineNumbers == null || display.updateLineNumbers > from)) {
            display.updateLineNumbers = from;
          }

          cm.curOp.viewChanged = true;

          if (from >= display.viewTo) {
            if (sawCollapsedSpans && visualLineNo(cm.doc, from) < display.viewTo) {
              resetView(cm);
            }
          } else if (to <= display.viewFrom) {
            if (sawCollapsedSpans && visualLineEndNo(cm.doc, to + lendiff) > display.viewFrom) {
              resetView(cm);
            } else {
              display.viewFrom += lendiff;
              display.viewTo += lendiff;
            }
          } else if (from <= display.viewFrom && to >= display.viewTo) {
            resetView(cm);
          } else if (from <= display.viewFrom) {
            var cut = viewCuttingPoint(cm, to, to + lendiff, 1);

            if (cut) {
              display.view = display.view.slice(cut.index);
              display.viewFrom = cut.lineN;
              display.viewTo += lendiff;
            } else {
              resetView(cm);
            }
          } else if (to >= display.viewTo) {
            var cut$1 = viewCuttingPoint(cm, from, from, -1);

            if (cut$1) {
              display.view = display.view.slice(0, cut$1.index);
              display.viewTo = cut$1.lineN;
            } else {
              resetView(cm);
            }
          } else {
            var cutTop = viewCuttingPoint(cm, from, from, -1);
            var cutBot = viewCuttingPoint(cm, to, to + lendiff, 1);

            if (cutTop && cutBot) {
              display.view = display.view.slice(0, cutTop.index).concat(buildViewArray(cm, cutTop.lineN, cutBot.lineN)).concat(display.view.slice(cutBot.index));
              display.viewTo += lendiff;
            } else {
              resetView(cm);
            }
          }

          var ext = display.externalMeasured;

          if (ext) {
            if (to < ext.lineN) {
              ext.lineN += lendiff;
            } else if (from < ext.lineN + ext.size) {
              display.externalMeasured = null;
            }
          }
        }

        function regLineChange(cm, line, type) {
          cm.curOp.viewChanged = true;
          var display = cm.display,
              ext = cm.display.externalMeasured;

          if (ext && line >= ext.lineN && line < ext.lineN + ext.size) {
            display.externalMeasured = null;
          }

          if (line < display.viewFrom || line >= display.viewTo) {
            return;
          }

          var lineView = display.view[findViewIndex(cm, line)];

          if (lineView.node == null) {
            return;
          }

          var arr = lineView.changes || (lineView.changes = []);

          if (indexOf(arr, type) == -1) {
            arr.push(type);
          }
        }

        function resetView(cm) {
          cm.display.viewFrom = cm.display.viewTo = cm.doc.first;
          cm.display.view = [];
          cm.display.viewOffset = 0;
        }

        function viewCuttingPoint(cm, oldN, newN, dir) {
          var index = findViewIndex(cm, oldN),
              diff,
              view = cm.display.view;

          if (!sawCollapsedSpans || newN == cm.doc.first + cm.doc.size) {
            return {
              index,
              lineN: newN
            };
          }

          var n = cm.display.viewFrom;

          for (var i2 = 0; i2 < index; i2++) {
            n += view[i2].size;
          }

          if (n != oldN) {
            if (dir > 0) {
              if (index == view.length - 1) {
                return null;
              }

              diff = n + view[index].size - oldN;
              index++;
            } else {
              diff = n - oldN;
            }

            oldN += diff;
            newN += diff;
          }

          while (visualLineNo(cm.doc, newN) != newN) {
            if (index == (dir < 0 ? 0 : view.length - 1)) {
              return null;
            }

            newN += dir * view[index - (dir < 0 ? 1 : 0)].size;
            index += dir;
          }

          return {
            index,
            lineN: newN
          };
        }

        function adjustView(cm, from, to) {
          var display = cm.display,
              view = display.view;

          if (view.length == 0 || from >= display.viewTo || to <= display.viewFrom) {
            display.view = buildViewArray(cm, from, to);
            display.viewFrom = from;
          } else {
            if (display.viewFrom > from) {
              display.view = buildViewArray(cm, from, display.viewFrom).concat(display.view);
            } else if (display.viewFrom < from) {
              display.view = display.view.slice(findViewIndex(cm, from));
            }

            display.viewFrom = from;

            if (display.viewTo < to) {
              display.view = display.view.concat(buildViewArray(cm, display.viewTo, to));
            } else if (display.viewTo > to) {
              display.view = display.view.slice(0, findViewIndex(cm, to));
            }
          }

          display.viewTo = to;
        }

        function countDirtyView(cm) {
          var view = cm.display.view,
              dirty = 0;

          for (var i2 = 0; i2 < view.length; i2++) {
            var lineView = view[i2];

            if (!lineView.hidden && (!lineView.node || lineView.changes)) {
              ++dirty;
            }
          }

          return dirty;
        }

        function updateSelection(cm) {
          cm.display.input.showSelection(cm.display.input.prepareSelection());
        }

        function prepareSelection(cm, primary) {
          if (primary === void 0) primary = true;
          var doc = cm.doc,
              result = {};
          var curFragment = result.cursors = document.createDocumentFragment();
          var selFragment = result.selection = document.createDocumentFragment();
          var customCursor = cm.options.$customCursor;

          if (customCursor) {
            primary = true;
          }

          for (var i2 = 0; i2 < doc.sel.ranges.length; i2++) {
            if (!primary && i2 == doc.sel.primIndex) {
              continue;
            }

            var range2 = doc.sel.ranges[i2];

            if (range2.from().line >= cm.display.viewTo || range2.to().line < cm.display.viewFrom) {
              continue;
            }

            var collapsed = range2.empty();

            if (customCursor) {
              var head = customCursor(cm, range2);

              if (head) {
                drawSelectionCursor(cm, head, curFragment);
              }
            } else if (collapsed || cm.options.showCursorWhenSelecting) {
              drawSelectionCursor(cm, range2.head, curFragment);
            }

            if (!collapsed) {
              drawSelectionRange(cm, range2, selFragment);
            }
          }

          return result;
        }

        function drawSelectionCursor(cm, head, output) {
          var pos = _cursorCoords(cm, head, "div", null, null, !cm.options.singleCursorHeightPerLine);

          var cursor = output.appendChild(elt("div", "\xA0", "CodeMirror-cursor"));
          cursor.style.left = pos.left + "px";
          cursor.style.top = pos.top + "px";
          cursor.style.height = Math.max(0, pos.bottom - pos.top) * cm.options.cursorHeight + "px";

          if (/\bcm-fat-cursor\b/.test(cm.getWrapperElement().className)) {
            var charPos = _charCoords(cm, head, "div", null, null);

            var width = charPos.right - charPos.left;
            cursor.style.width = (width > 0 ? width : cm.defaultCharWidth()) + "px";
          }

          if (pos.other) {
            var otherCursor = output.appendChild(elt("div", "\xA0", "CodeMirror-cursor CodeMirror-secondarycursor"));
            otherCursor.style.display = "";
            otherCursor.style.left = pos.other.left + "px";
            otherCursor.style.top = pos.other.top + "px";
            otherCursor.style.height = (pos.other.bottom - pos.other.top) * 0.85 + "px";
          }
        }

        function cmpCoords(a, b) {
          return a.top - b.top || a.left - b.left;
        }

        function drawSelectionRange(cm, range2, output) {
          var display = cm.display,
              doc = cm.doc;
          var fragment = document.createDocumentFragment();
          var padding = paddingH(cm.display),
              leftSide = padding.left;
          var rightSide = Math.max(display.sizerWidth, displayWidth(cm) - display.sizer.offsetLeft) - padding.right;
          var docLTR = doc.direction == "ltr";

          function add(left, top, width, bottom) {
            if (top < 0) {
              top = 0;
            }

            top = Math.round(top);
            bottom = Math.round(bottom);
            fragment.appendChild(elt("div", null, "CodeMirror-selected", "position: absolute; left: " + left + "px;\n                             top: " + top + "px; width: " + (width == null ? rightSide - left : width) + "px;\n                             height: " + (bottom - top) + "px"));
          }

          function drawForLine(line, fromArg, toArg) {
            var lineObj = getLine(doc, line);
            var lineLen = lineObj.text.length;
            var start, end;

            function coords(ch, bias) {
              return _charCoords(cm, Pos(line, ch), "div", lineObj, bias);
            }

            function wrapX(pos, dir, side) {
              var extent = wrappedLineExtentChar(cm, lineObj, null, pos);
              var prop2 = dir == "ltr" == (side == "after") ? "left" : "right";
              var ch = side == "after" ? extent.begin : extent.end - (/\s/.test(lineObj.text.charAt(extent.end - 1)) ? 2 : 1);
              return coords(ch, prop2)[prop2];
            }

            var order = getOrder(lineObj, doc.direction);
            iterateBidiSections(order, fromArg || 0, toArg == null ? lineLen : toArg, function (from, to, dir, i2) {
              var ltr = dir == "ltr";
              var fromPos = coords(from, ltr ? "left" : "right");
              var toPos = coords(to - 1, ltr ? "right" : "left");
              var openStart = fromArg == null && from == 0,
                  openEnd = toArg == null && to == lineLen;
              var first = i2 == 0,
                  last = !order || i2 == order.length - 1;

              if (toPos.top - fromPos.top <= 3) {
                var openLeft = (docLTR ? openStart : openEnd) && first;
                var openRight = (docLTR ? openEnd : openStart) && last;
                var left = openLeft ? leftSide : (ltr ? fromPos : toPos).left;
                var right = openRight ? rightSide : (ltr ? toPos : fromPos).right;
                add(left, fromPos.top, right - left, fromPos.bottom);
              } else {
                var topLeft, topRight, botLeft, botRight;

                if (ltr) {
                  topLeft = docLTR && openStart && first ? leftSide : fromPos.left;
                  topRight = docLTR ? rightSide : wrapX(from, dir, "before");
                  botLeft = docLTR ? leftSide : wrapX(to, dir, "after");
                  botRight = docLTR && openEnd && last ? rightSide : toPos.right;
                } else {
                  topLeft = !docLTR ? leftSide : wrapX(from, dir, "before");
                  topRight = !docLTR && openStart && first ? rightSide : fromPos.right;
                  botLeft = !docLTR && openEnd && last ? leftSide : toPos.left;
                  botRight = !docLTR ? rightSide : wrapX(to, dir, "after");
                }

                add(topLeft, fromPos.top, topRight - topLeft, fromPos.bottom);

                if (fromPos.bottom < toPos.top) {
                  add(leftSide, fromPos.bottom, null, toPos.top);
                }

                add(botLeft, toPos.top, botRight - botLeft, toPos.bottom);
              }

              if (!start || cmpCoords(fromPos, start) < 0) {
                start = fromPos;
              }

              if (cmpCoords(toPos, start) < 0) {
                start = toPos;
              }

              if (!end || cmpCoords(fromPos, end) < 0) {
                end = fromPos;
              }

              if (cmpCoords(toPos, end) < 0) {
                end = toPos;
              }
            });
            return {
              start,
              end
            };
          }

          var sFrom = range2.from(),
              sTo = range2.to();

          if (sFrom.line == sTo.line) {
            drawForLine(sFrom.line, sFrom.ch, sTo.ch);
          } else {
            var fromLine = getLine(doc, sFrom.line),
                toLine = getLine(doc, sTo.line);
            var singleVLine = visualLine(fromLine) == visualLine(toLine);
            var leftEnd = drawForLine(sFrom.line, sFrom.ch, singleVLine ? fromLine.text.length + 1 : null).end;
            var rightStart = drawForLine(sTo.line, singleVLine ? 0 : null, sTo.ch).start;

            if (singleVLine) {
              if (leftEnd.top < rightStart.top - 2) {
                add(leftEnd.right, leftEnd.top, null, leftEnd.bottom);
                add(leftSide, rightStart.top, rightStart.left, rightStart.bottom);
              } else {
                add(leftEnd.right, leftEnd.top, rightStart.left - leftEnd.right, leftEnd.bottom);
              }
            }

            if (leftEnd.bottom < rightStart.top) {
              add(leftSide, leftEnd.bottom, null, rightStart.top);
            }
          }

          output.appendChild(fragment);
        }

        function restartBlink(cm) {
          if (!cm.state.focused) {
            return;
          }

          var display = cm.display;
          clearInterval(display.blinker);
          var on2 = true;
          display.cursorDiv.style.visibility = "";

          if (cm.options.cursorBlinkRate > 0) {
            display.blinker = setInterval(function () {
              if (!cm.hasFocus()) {
                onBlur(cm);
              }

              display.cursorDiv.style.visibility = (on2 = !on2) ? "" : "hidden";
            }, cm.options.cursorBlinkRate);
          } else if (cm.options.cursorBlinkRate < 0) {
            display.cursorDiv.style.visibility = "hidden";
          }
        }

        function ensureFocus(cm) {
          if (!cm.hasFocus()) {
            cm.display.input.focus();

            if (!cm.state.focused) {
              onFocus(cm);
            }
          }
        }

        function delayBlurEvent(cm) {
          cm.state.delayingBlurEvent = true;
          setTimeout(function () {
            if (cm.state.delayingBlurEvent) {
              cm.state.delayingBlurEvent = false;

              if (cm.state.focused) {
                onBlur(cm);
              }
            }
          }, 100);
        }

        function onFocus(cm, e) {
          if (cm.state.delayingBlurEvent && !cm.state.draggingText) {
            cm.state.delayingBlurEvent = false;
          }

          if (cm.options.readOnly == "nocursor") {
            return;
          }

          if (!cm.state.focused) {
            signal(cm, "focus", cm, e);
            cm.state.focused = true;
            addClass(cm.display.wrapper, "CodeMirror-focused");

            if (!cm.curOp && cm.display.selForContextMenu != cm.doc.sel) {
              cm.display.input.reset();

              if (webkit) {
                setTimeout(function () {
                  return cm.display.input.reset(true);
                }, 20);
              }
            }

            cm.display.input.receivedFocus();
          }

          restartBlink(cm);
        }

        function onBlur(cm, e) {
          if (cm.state.delayingBlurEvent) {
            return;
          }

          if (cm.state.focused) {
            signal(cm, "blur", cm, e);
            cm.state.focused = false;
            rmClass(cm.display.wrapper, "CodeMirror-focused");
          }

          clearInterval(cm.display.blinker);
          setTimeout(function () {
            if (!cm.state.focused) {
              cm.display.shift = false;
            }
          }, 150);
        }

        function updateHeightsInViewport(cm) {
          var display = cm.display;
          var prevBottom = display.lineDiv.offsetTop;
          var viewTop = Math.max(0, display.scroller.getBoundingClientRect().top);
          var oldHeight = display.lineDiv.getBoundingClientRect().top;
          var mustScroll = 0;

          for (var i2 = 0; i2 < display.view.length; i2++) {
            var cur = display.view[i2],
                wrapping = cm.options.lineWrapping;
            var height = void 0,
                width = 0;

            if (cur.hidden) {
              continue;
            }

            oldHeight += cur.line.height;

            if (ie && ie_version < 8) {
              var bot = cur.node.offsetTop + cur.node.offsetHeight;
              height = bot - prevBottom;
              prevBottom = bot;
            } else {
              var box = cur.node.getBoundingClientRect();
              height = box.bottom - box.top;

              if (!wrapping && cur.text.firstChild) {
                width = cur.text.firstChild.getBoundingClientRect().right - box.left - 1;
              }
            }

            var diff = cur.line.height - height;

            if (diff > 5e-3 || diff < -5e-3) {
              if (oldHeight < viewTop) {
                mustScroll -= diff;
              }

              updateLineHeight(cur.line, height);
              updateWidgetHeight(cur.line);

              if (cur.rest) {
                for (var j = 0; j < cur.rest.length; j++) {
                  updateWidgetHeight(cur.rest[j]);
                }
              }
            }

            if (width > cm.display.sizerWidth) {
              var chWidth = Math.ceil(width / charWidth(cm.display));

              if (chWidth > cm.display.maxLineLength) {
                cm.display.maxLineLength = chWidth;
                cm.display.maxLine = cur.line;
                cm.display.maxLineChanged = true;
              }
            }
          }

          if (Math.abs(mustScroll) > 2) {
            display.scroller.scrollTop += mustScroll;
          }
        }

        function updateWidgetHeight(line) {
          if (line.widgets) {
            for (var i2 = 0; i2 < line.widgets.length; ++i2) {
              var w = line.widgets[i2],
                  parent = w.node.parentNode;

              if (parent) {
                w.height = parent.offsetHeight;
              }
            }
          }
        }

        function visibleLines(display, doc, viewport) {
          var top = viewport && viewport.top != null ? Math.max(0, viewport.top) : display.scroller.scrollTop;
          top = Math.floor(top - paddingTop(display));
          var bottom = viewport && viewport.bottom != null ? viewport.bottom : top + display.wrapper.clientHeight;

          var from = _lineAtHeight(doc, top),
              to = _lineAtHeight(doc, bottom);

          if (viewport && viewport.ensure) {
            var ensureFrom = viewport.ensure.from.line,
                ensureTo = viewport.ensure.to.line;

            if (ensureFrom < from) {
              from = ensureFrom;
              to = _lineAtHeight(doc, _heightAtLine(getLine(doc, ensureFrom)) + display.wrapper.clientHeight);
            } else if (Math.min(ensureTo, doc.lastLine()) >= to) {
              from = _lineAtHeight(doc, _heightAtLine(getLine(doc, ensureTo)) - display.wrapper.clientHeight);
              to = ensureTo;
            }
          }

          return {
            from,
            to: Math.max(to, from + 1)
          };
        }

        function maybeScrollWindow(cm, rect) {
          if (signalDOMEvent(cm, "scrollCursorIntoView")) {
            return;
          }

          var display = cm.display,
              box = display.sizer.getBoundingClientRect(),
              doScroll = null;

          if (rect.top + box.top < 0) {
            doScroll = true;
          } else if (rect.bottom + box.top > (window.innerHeight || document.documentElement.clientHeight)) {
            doScroll = false;
          }

          if (doScroll != null && !phantom) {
            var scrollNode = elt("div", "\u200B", null, "position: absolute;\n                         top: " + (rect.top - display.viewOffset - paddingTop(cm.display)) + "px;\n                         height: " + (rect.bottom - rect.top + scrollGap(cm) + display.barHeight) + "px;\n                         left: " + rect.left + "px; width: " + Math.max(2, rect.right - rect.left) + "px;");
            cm.display.lineSpace.appendChild(scrollNode);
            scrollNode.scrollIntoView(doScroll);
            cm.display.lineSpace.removeChild(scrollNode);
          }
        }

        function scrollPosIntoView(cm, pos, end, margin) {
          if (margin == null) {
            margin = 0;
          }

          var rect;

          if (!cm.options.lineWrapping && pos == end) {
            end = pos.sticky == "before" ? Pos(pos.line, pos.ch + 1, "before") : pos;
            pos = pos.ch ? Pos(pos.line, pos.sticky == "before" ? pos.ch - 1 : pos.ch, "after") : pos;
          }

          for (var limit = 0; limit < 5; limit++) {
            var changed = false;

            var coords = _cursorCoords(cm, pos);

            var endCoords = !end || end == pos ? coords : _cursorCoords(cm, end);
            rect = {
              left: Math.min(coords.left, endCoords.left),
              top: Math.min(coords.top, endCoords.top) - margin,
              right: Math.max(coords.left, endCoords.left),
              bottom: Math.max(coords.bottom, endCoords.bottom) + margin
            };
            var scrollPos = calculateScrollPos(cm, rect);
            var startTop = cm.doc.scrollTop,
                startLeft = cm.doc.scrollLeft;

            if (scrollPos.scrollTop != null) {
              updateScrollTop(cm, scrollPos.scrollTop);

              if (Math.abs(cm.doc.scrollTop - startTop) > 1) {
                changed = true;
              }
            }

            if (scrollPos.scrollLeft != null) {
              setScrollLeft(cm, scrollPos.scrollLeft);

              if (Math.abs(cm.doc.scrollLeft - startLeft) > 1) {
                changed = true;
              }
            }

            if (!changed) {
              break;
            }
          }

          return rect;
        }

        function scrollIntoView(cm, rect) {
          var scrollPos = calculateScrollPos(cm, rect);

          if (scrollPos.scrollTop != null) {
            updateScrollTop(cm, scrollPos.scrollTop);
          }

          if (scrollPos.scrollLeft != null) {
            setScrollLeft(cm, scrollPos.scrollLeft);
          }
        }

        function calculateScrollPos(cm, rect) {
          var display = cm.display,
              snapMargin = textHeight(cm.display);

          if (rect.top < 0) {
            rect.top = 0;
          }

          var screentop = cm.curOp && cm.curOp.scrollTop != null ? cm.curOp.scrollTop : display.scroller.scrollTop;
          var screen2 = displayHeight(cm),
              result = {};

          if (rect.bottom - rect.top > screen2) {
            rect.bottom = rect.top + screen2;
          }

          var docBottom = cm.doc.height + paddingVert(display);
          var atTop = rect.top < snapMargin,
              atBottom = rect.bottom > docBottom - snapMargin;

          if (rect.top < screentop) {
            result.scrollTop = atTop ? 0 : rect.top;
          } else if (rect.bottom > screentop + screen2) {
            var newTop = Math.min(rect.top, (atBottom ? docBottom : rect.bottom) - screen2);

            if (newTop != screentop) {
              result.scrollTop = newTop;
            }
          }

          var gutterSpace = cm.options.fixedGutter ? 0 : display.gutters.offsetWidth;
          var screenleft = cm.curOp && cm.curOp.scrollLeft != null ? cm.curOp.scrollLeft : display.scroller.scrollLeft - gutterSpace;
          var screenw = displayWidth(cm) - display.gutters.offsetWidth;
          var tooWide = rect.right - rect.left > screenw;

          if (tooWide) {
            rect.right = rect.left + screenw;
          }

          if (rect.left < 10) {
            result.scrollLeft = 0;
          } else if (rect.left < screenleft) {
            result.scrollLeft = Math.max(0, rect.left + gutterSpace - (tooWide ? 0 : 10));
          } else if (rect.right > screenw + screenleft - 3) {
            result.scrollLeft = rect.right + (tooWide ? 0 : 10) - screenw;
          }

          return result;
        }

        function addToScrollTop(cm, top) {
          if (top == null) {
            return;
          }

          resolveScrollToPos(cm);
          cm.curOp.scrollTop = (cm.curOp.scrollTop == null ? cm.doc.scrollTop : cm.curOp.scrollTop) + top;
        }

        function ensureCursorVisible(cm) {
          resolveScrollToPos(cm);
          var cur = cm.getCursor();
          cm.curOp.scrollToPos = {
            from: cur,
            to: cur,
            margin: cm.options.cursorScrollMargin
          };
        }

        function scrollToCoords(cm, x, y) {
          if (x != null || y != null) {
            resolveScrollToPos(cm);
          }

          if (x != null) {
            cm.curOp.scrollLeft = x;
          }

          if (y != null) {
            cm.curOp.scrollTop = y;
          }
        }

        function scrollToRange(cm, range2) {
          resolveScrollToPos(cm);
          cm.curOp.scrollToPos = range2;
        }

        function resolveScrollToPos(cm) {
          var range2 = cm.curOp.scrollToPos;

          if (range2) {
            cm.curOp.scrollToPos = null;
            var from = estimateCoords(cm, range2.from),
                to = estimateCoords(cm, range2.to);
            scrollToCoordsRange(cm, from, to, range2.margin);
          }
        }

        function scrollToCoordsRange(cm, from, to, margin) {
          var sPos = calculateScrollPos(cm, {
            left: Math.min(from.left, to.left),
            top: Math.min(from.top, to.top) - margin,
            right: Math.max(from.right, to.right),
            bottom: Math.max(from.bottom, to.bottom) + margin
          });
          scrollToCoords(cm, sPos.scrollLeft, sPos.scrollTop);
        }

        function updateScrollTop(cm, val) {
          if (Math.abs(cm.doc.scrollTop - val) < 2) {
            return;
          }

          if (!gecko) {
            updateDisplaySimple(cm, {
              top: val
            });
          }

          setScrollTop(cm, val, true);

          if (gecko) {
            updateDisplaySimple(cm);
          }

          startWorker(cm, 100);
        }

        function setScrollTop(cm, val, forceScroll) {
          val = Math.max(0, Math.min(cm.display.scroller.scrollHeight - cm.display.scroller.clientHeight, val));

          if (cm.display.scroller.scrollTop == val && !forceScroll) {
            return;
          }

          cm.doc.scrollTop = val;
          cm.display.scrollbars.setScrollTop(val);

          if (cm.display.scroller.scrollTop != val) {
            cm.display.scroller.scrollTop = val;
          }
        }

        function setScrollLeft(cm, val, isScroller, forceScroll) {
          val = Math.max(0, Math.min(val, cm.display.scroller.scrollWidth - cm.display.scroller.clientWidth));

          if ((isScroller ? val == cm.doc.scrollLeft : Math.abs(cm.doc.scrollLeft - val) < 2) && !forceScroll) {
            return;
          }

          cm.doc.scrollLeft = val;
          alignHorizontally(cm);

          if (cm.display.scroller.scrollLeft != val) {
            cm.display.scroller.scrollLeft = val;
          }

          cm.display.scrollbars.setScrollLeft(val);
        }

        function measureForScrollbars(cm) {
          var d = cm.display,
              gutterW = d.gutters.offsetWidth;
          var docH = Math.round(cm.doc.height + paddingVert(cm.display));
          return {
            clientHeight: d.scroller.clientHeight,
            viewHeight: d.wrapper.clientHeight,
            scrollWidth: d.scroller.scrollWidth,
            clientWidth: d.scroller.clientWidth,
            viewWidth: d.wrapper.clientWidth,
            barLeft: cm.options.fixedGutter ? gutterW : 0,
            docHeight: docH,
            scrollHeight: docH + scrollGap(cm) + d.barHeight,
            nativeBarWidth: d.nativeBarWidth,
            gutterWidth: gutterW
          };
        }

        var NativeScrollbars = function NativeScrollbars(place, scroll, cm) {
          this.cm = cm;
          var vert = this.vert = elt("div", [elt("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar");
          var horiz = this.horiz = elt("div", [elt("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar");
          vert.tabIndex = horiz.tabIndex = -1;
          place(vert);
          place(horiz);
          on(vert, "scroll", function () {
            if (vert.clientHeight) {
              scroll(vert.scrollTop, "vertical");
            }
          });
          on(horiz, "scroll", function () {
            if (horiz.clientWidth) {
              scroll(horiz.scrollLeft, "horizontal");
            }
          });
          this.checkedZeroWidth = false;

          if (ie && ie_version < 8) {
            this.horiz.style.minHeight = this.vert.style.minWidth = "18px";
          }
        };

        NativeScrollbars.prototype.update = function (measure) {
          var needsH = measure.scrollWidth > measure.clientWidth + 1;
          var needsV = measure.scrollHeight > measure.clientHeight + 1;
          var sWidth = measure.nativeBarWidth;

          if (needsV) {
            this.vert.style.display = "block";
            this.vert.style.bottom = needsH ? sWidth + "px" : "0";
            var totalHeight = measure.viewHeight - (needsH ? sWidth : 0);
            this.vert.firstChild.style.height = Math.max(0, measure.scrollHeight - measure.clientHeight + totalHeight) + "px";
          } else {
            this.vert.scrollTop = 0;
            this.vert.style.display = "";
            this.vert.firstChild.style.height = "0";
          }

          if (needsH) {
            this.horiz.style.display = "block";
            this.horiz.style.right = needsV ? sWidth + "px" : "0";
            this.horiz.style.left = measure.barLeft + "px";
            var totalWidth = measure.viewWidth - measure.barLeft - (needsV ? sWidth : 0);
            this.horiz.firstChild.style.width = Math.max(0, measure.scrollWidth - measure.clientWidth + totalWidth) + "px";
          } else {
            this.horiz.style.display = "";
            this.horiz.firstChild.style.width = "0";
          }

          if (!this.checkedZeroWidth && measure.clientHeight > 0) {
            if (sWidth == 0) {
              this.zeroWidthHack();
            }

            this.checkedZeroWidth = true;
          }

          return {
            right: needsV ? sWidth : 0,
            bottom: needsH ? sWidth : 0
          };
        };

        NativeScrollbars.prototype.setScrollLeft = function (pos) {
          if (this.horiz.scrollLeft != pos) {
            this.horiz.scrollLeft = pos;
          }

          if (this.disableHoriz) {
            this.enableZeroWidthBar(this.horiz, this.disableHoriz, "horiz");
          }
        };

        NativeScrollbars.prototype.setScrollTop = function (pos) {
          if (this.vert.scrollTop != pos) {
            this.vert.scrollTop = pos;
          }

          if (this.disableVert) {
            this.enableZeroWidthBar(this.vert, this.disableVert, "vert");
          }
        };

        NativeScrollbars.prototype.zeroWidthHack = function () {
          var w = mac && !mac_geMountainLion ? "12px" : "18px";
          this.horiz.style.height = this.vert.style.width = w;
          this.horiz.style.pointerEvents = this.vert.style.pointerEvents = "none";
          this.disableHoriz = new Delayed();
          this.disableVert = new Delayed();
        };

        NativeScrollbars.prototype.enableZeroWidthBar = function (bar, delay, type) {
          bar.style.pointerEvents = "auto";

          function maybeDisable() {
            var box = bar.getBoundingClientRect();
            var elt2 = type == "vert" ? document.elementFromPoint(box.right - 1, (box.top + box.bottom) / 2) : document.elementFromPoint((box.right + box.left) / 2, box.bottom - 1);

            if (elt2 != bar) {
              bar.style.pointerEvents = "none";
            } else {
              delay.set(1e3, maybeDisable);
            }
          }

          delay.set(1e3, maybeDisable);
        };

        NativeScrollbars.prototype.clear = function () {
          var parent = this.horiz.parentNode;
          parent.removeChild(this.horiz);
          parent.removeChild(this.vert);
        };

        var NullScrollbars = function NullScrollbars() {};

        NullScrollbars.prototype.update = function () {
          return {
            bottom: 0,
            right: 0
          };
        };

        NullScrollbars.prototype.setScrollLeft = function () {};

        NullScrollbars.prototype.setScrollTop = function () {};

        NullScrollbars.prototype.clear = function () {};

        function updateScrollbars(cm, measure) {
          if (!measure) {
            measure = measureForScrollbars(cm);
          }

          var startWidth = cm.display.barWidth,
              startHeight = cm.display.barHeight;
          updateScrollbarsInner(cm, measure);

          for (var i2 = 0; i2 < 4 && startWidth != cm.display.barWidth || startHeight != cm.display.barHeight; i2++) {
            if (startWidth != cm.display.barWidth && cm.options.lineWrapping) {
              updateHeightsInViewport(cm);
            }

            updateScrollbarsInner(cm, measureForScrollbars(cm));
            startWidth = cm.display.barWidth;
            startHeight = cm.display.barHeight;
          }
        }

        function updateScrollbarsInner(cm, measure) {
          var d = cm.display;
          var sizes = d.scrollbars.update(measure);
          d.sizer.style.paddingRight = (d.barWidth = sizes.right) + "px";
          d.sizer.style.paddingBottom = (d.barHeight = sizes.bottom) + "px";
          d.heightForcer.style.borderBottom = sizes.bottom + "px solid transparent";

          if (sizes.right && sizes.bottom) {
            d.scrollbarFiller.style.display = "block";
            d.scrollbarFiller.style.height = sizes.bottom + "px";
            d.scrollbarFiller.style.width = sizes.right + "px";
          } else {
            d.scrollbarFiller.style.display = "";
          }

          if (sizes.bottom && cm.options.coverGutterNextToScrollbar && cm.options.fixedGutter) {
            d.gutterFiller.style.display = "block";
            d.gutterFiller.style.height = sizes.bottom + "px";
            d.gutterFiller.style.width = measure.gutterWidth + "px";
          } else {
            d.gutterFiller.style.display = "";
          }
        }

        var scrollbarModel = {
          "native": NativeScrollbars,
          "null": NullScrollbars
        };

        function initScrollbars(cm) {
          if (cm.display.scrollbars) {
            cm.display.scrollbars.clear();

            if (cm.display.scrollbars.addClass) {
              rmClass(cm.display.wrapper, cm.display.scrollbars.addClass);
            }
          }

          cm.display.scrollbars = new scrollbarModel[cm.options.scrollbarStyle](function (node) {
            cm.display.wrapper.insertBefore(node, cm.display.scrollbarFiller);
            on(node, "mousedown", function () {
              if (cm.state.focused) {
                setTimeout(function () {
                  return cm.display.input.focus();
                }, 0);
              }
            });
            node.setAttribute("cm-not-content", "true");
          }, function (pos, axis) {
            if (axis == "horizontal") {
              setScrollLeft(cm, pos);
            } else {
              updateScrollTop(cm, pos);
            }
          }, cm);

          if (cm.display.scrollbars.addClass) {
            addClass(cm.display.wrapper, cm.display.scrollbars.addClass);
          }
        }

        var nextOpId = 0;

        function _startOperation(cm) {
          cm.curOp = {
            cm,
            viewChanged: false,
            startHeight: cm.doc.height,
            forceUpdate: false,
            updateInput: 0,
            typing: false,
            changeObjs: null,
            cursorActivityHandlers: null,
            cursorActivityCalled: 0,
            selectionChanged: false,
            updateMaxLine: false,
            scrollLeft: null,
            scrollTop: null,
            scrollToPos: null,
            focus: false,
            id: ++nextOpId,
            markArrays: null
          };
          pushOperation(cm.curOp);
        }

        function _endOperation(cm) {
          var op = cm.curOp;

          if (op) {
            finishOperation(op, function (group) {
              for (var i2 = 0; i2 < group.ops.length; i2++) {
                group.ops[i2].cm.curOp = null;
              }

              endOperations(group);
            });
          }
        }

        function endOperations(group) {
          var ops = group.ops;

          for (var i2 = 0; i2 < ops.length; i2++) {
            endOperation_R1(ops[i2]);
          }

          for (var i$12 = 0; i$12 < ops.length; i$12++) {
            endOperation_W1(ops[i$12]);
          }

          for (var i$22 = 0; i$22 < ops.length; i$22++) {
            endOperation_R2(ops[i$22]);
          }

          for (var i$3 = 0; i$3 < ops.length; i$3++) {
            endOperation_W2(ops[i$3]);
          }

          for (var i$4 = 0; i$4 < ops.length; i$4++) {
            endOperation_finish(ops[i$4]);
          }
        }

        function endOperation_R1(op) {
          var cm = op.cm,
              display = cm.display;
          maybeClipScrollbars(cm);

          if (op.updateMaxLine) {
            findMaxLine(cm);
          }

          op.mustUpdate = op.viewChanged || op.forceUpdate || op.scrollTop != null || op.scrollToPos && (op.scrollToPos.from.line < display.viewFrom || op.scrollToPos.to.line >= display.viewTo) || display.maxLineChanged && cm.options.lineWrapping;
          op.update = op.mustUpdate && new DisplayUpdate(cm, op.mustUpdate && {
            top: op.scrollTop,
            ensure: op.scrollToPos
          }, op.forceUpdate);
        }

        function endOperation_W1(op) {
          op.updatedDisplay = op.mustUpdate && updateDisplayIfNeeded(op.cm, op.update);
        }

        function endOperation_R2(op) {
          var cm = op.cm,
              display = cm.display;

          if (op.updatedDisplay) {
            updateHeightsInViewport(cm);
          }

          op.barMeasure = measureForScrollbars(cm);

          if (display.maxLineChanged && !cm.options.lineWrapping) {
            op.adjustWidthTo = measureChar(cm, display.maxLine, display.maxLine.text.length).left + 3;
            cm.display.sizerWidth = op.adjustWidthTo;
            op.barMeasure.scrollWidth = Math.max(display.scroller.clientWidth, display.sizer.offsetLeft + op.adjustWidthTo + scrollGap(cm) + cm.display.barWidth);
            op.maxScrollLeft = Math.max(0, display.sizer.offsetLeft + op.adjustWidthTo - displayWidth(cm));
          }

          if (op.updatedDisplay || op.selectionChanged) {
            op.preparedSelection = display.input.prepareSelection();
          }
        }

        function endOperation_W2(op) {
          var cm = op.cm;

          if (op.adjustWidthTo != null) {
            cm.display.sizer.style.minWidth = op.adjustWidthTo + "px";

            if (op.maxScrollLeft < cm.doc.scrollLeft) {
              setScrollLeft(cm, Math.min(cm.display.scroller.scrollLeft, op.maxScrollLeft), true);
            }

            cm.display.maxLineChanged = false;
          }

          var takeFocus = op.focus && op.focus == activeElt();

          if (op.preparedSelection) {
            cm.display.input.showSelection(op.preparedSelection, takeFocus);
          }

          if (op.updatedDisplay || op.startHeight != cm.doc.height) {
            updateScrollbars(cm, op.barMeasure);
          }

          if (op.updatedDisplay) {
            setDocumentHeight(cm, op.barMeasure);
          }

          if (op.selectionChanged) {
            restartBlink(cm);
          }

          if (cm.state.focused && op.updateInput) {
            cm.display.input.reset(op.typing);
          }

          if (takeFocus) {
            ensureFocus(op.cm);
          }
        }

        function endOperation_finish(op) {
          var cm = op.cm,
              display = cm.display,
              doc = cm.doc;

          if (op.updatedDisplay) {
            postUpdateDisplay(cm, op.update);
          }

          if (display.wheelStartX != null && (op.scrollTop != null || op.scrollLeft != null || op.scrollToPos)) {
            display.wheelStartX = display.wheelStartY = null;
          }

          if (op.scrollTop != null) {
            setScrollTop(cm, op.scrollTop, op.forceScroll);
          }

          if (op.scrollLeft != null) {
            setScrollLeft(cm, op.scrollLeft, true, true);
          }

          if (op.scrollToPos) {
            var rect = scrollPosIntoView(cm, _clipPos(doc, op.scrollToPos.from), _clipPos(doc, op.scrollToPos.to), op.scrollToPos.margin);
            maybeScrollWindow(cm, rect);
          }

          var hidden = op.maybeHiddenMarkers,
              unhidden = op.maybeUnhiddenMarkers;

          if (hidden) {
            for (var i2 = 0; i2 < hidden.length; ++i2) {
              if (!hidden[i2].lines.length) {
                signal(hidden[i2], "hide");
              }
            }
          }

          if (unhidden) {
            for (var i$12 = 0; i$12 < unhidden.length; ++i$12) {
              if (unhidden[i$12].lines.length) {
                signal(unhidden[i$12], "unhide");
              }
            }
          }

          if (display.wrapper.offsetHeight) {
            doc.scrollTop = cm.display.scroller.scrollTop;
          }

          if (op.changeObjs) {
            signal(cm, "changes", cm, op.changeObjs);
          }

          if (op.update) {
            op.update.finish();
          }
        }

        function runInOp(cm, f) {
          if (cm.curOp) {
            return f();
          }

          _startOperation(cm);

          try {
            return f();
          } finally {
            _endOperation(cm);
          }
        }

        function operation(cm, f) {
          return function () {
            if (cm.curOp) {
              return f.apply(cm, arguments);
            }

            _startOperation(cm);

            try {
              return f.apply(cm, arguments);
            } finally {
              _endOperation(cm);
            }
          };
        }

        function methodOp(f) {
          return function () {
            if (this.curOp) {
              return f.apply(this, arguments);
            }

            _startOperation(this);

            try {
              return f.apply(this, arguments);
            } finally {
              _endOperation(this);
            }
          };
        }

        function docMethodOp(f) {
          return function () {
            var cm = this.cm;

            if (!cm || cm.curOp) {
              return f.apply(this, arguments);
            }

            _startOperation(cm);

            try {
              return f.apply(this, arguments);
            } finally {
              _endOperation(cm);
            }
          };
        }

        function startWorker(cm, time) {
          if (cm.doc.highlightFrontier < cm.display.viewTo) {
            cm.state.highlight.set(time, bind(highlightWorker, cm));
          }
        }

        function highlightWorker(cm) {
          var doc = cm.doc;

          if (doc.highlightFrontier >= cm.display.viewTo) {
            return;
          }

          var end = +new Date() + cm.options.workTime;
          var context = getContextBefore(cm, doc.highlightFrontier);
          var changedLines = [];
          doc.iter(context.line, Math.min(doc.first + doc.size, cm.display.viewTo + 500), function (line) {
            if (context.line >= cm.display.viewFrom) {
              var oldStyles = line.styles;
              var resetState = line.text.length > cm.options.maxHighlightLength ? copyState(doc.mode, context.state) : null;
              var highlighted = highlightLine(cm, line, context, true);

              if (resetState) {
                context.state = resetState;
              }

              line.styles = highlighted.styles;
              var oldCls = line.styleClasses,
                  newCls = highlighted.classes;

              if (newCls) {
                line.styleClasses = newCls;
              } else if (oldCls) {
                line.styleClasses = null;
              }

              var ischange = !oldStyles || oldStyles.length != line.styles.length || oldCls != newCls && (!oldCls || !newCls || oldCls.bgClass != newCls.bgClass || oldCls.textClass != newCls.textClass);

              for (var i2 = 0; !ischange && i2 < oldStyles.length; ++i2) {
                ischange = oldStyles[i2] != line.styles[i2];
              }

              if (ischange) {
                changedLines.push(context.line);
              }

              line.stateAfter = context.save();
              context.nextLine();
            } else {
              if (line.text.length <= cm.options.maxHighlightLength) {
                processLine(cm, line.text, context);
              }

              line.stateAfter = context.line % 5 == 0 ? context.save() : null;
              context.nextLine();
            }

            if (+new Date() > end) {
              startWorker(cm, cm.options.workDelay);
              return true;
            }
          });
          doc.highlightFrontier = context.line;
          doc.modeFrontier = Math.max(doc.modeFrontier, context.line);

          if (changedLines.length) {
            runInOp(cm, function () {
              for (var i2 = 0; i2 < changedLines.length; i2++) {
                regLineChange(cm, changedLines[i2], "text");
              }
            });
          }
        }

        var DisplayUpdate = function DisplayUpdate(cm, viewport, force) {
          var display = cm.display;
          this.viewport = viewport;
          this.visible = visibleLines(display, cm.doc, viewport);
          this.editorIsHidden = !display.wrapper.offsetWidth;
          this.wrapperHeight = display.wrapper.clientHeight;
          this.wrapperWidth = display.wrapper.clientWidth;
          this.oldDisplayWidth = displayWidth(cm);
          this.force = force;
          this.dims = getDimensions(cm);
          this.events = [];
        };

        DisplayUpdate.prototype.signal = function (emitter, type) {
          if (hasHandler(emitter, type)) {
            this.events.push(arguments);
          }
        };

        DisplayUpdate.prototype.finish = function () {
          for (var i2 = 0; i2 < this.events.length; i2++) {
            signal.apply(null, this.events[i2]);
          }
        };

        function maybeClipScrollbars(cm) {
          var display = cm.display;

          if (!display.scrollbarsClipped && display.scroller.offsetWidth) {
            display.nativeBarWidth = display.scroller.offsetWidth - display.scroller.clientWidth;
            display.heightForcer.style.height = scrollGap(cm) + "px";
            display.sizer.style.marginBottom = -display.nativeBarWidth + "px";
            display.sizer.style.borderRightWidth = scrollGap(cm) + "px";
            display.scrollbarsClipped = true;
          }
        }

        function selectionSnapshot(cm) {
          if (cm.hasFocus()) {
            return null;
          }

          var active = activeElt();

          if (!active || !contains(cm.display.lineDiv, active)) {
            return null;
          }

          var result = {
            activeElt: active
          };

          if (window.getSelection) {
            var sel = window.getSelection();

            if (sel.anchorNode && sel.extend && contains(cm.display.lineDiv, sel.anchorNode)) {
              result.anchorNode = sel.anchorNode;
              result.anchorOffset = sel.anchorOffset;
              result.focusNode = sel.focusNode;
              result.focusOffset = sel.focusOffset;
            }
          }

          return result;
        }

        function restoreSelection(snapshot) {
          if (!snapshot || !snapshot.activeElt || snapshot.activeElt == activeElt()) {
            return;
          }

          snapshot.activeElt.focus();

          if (!/^(INPUT|TEXTAREA)$/.test(snapshot.activeElt.nodeName) && snapshot.anchorNode && contains(document.body, snapshot.anchorNode) && contains(document.body, snapshot.focusNode)) {
            var sel = window.getSelection(),
                range2 = document.createRange();
            range2.setEnd(snapshot.anchorNode, snapshot.anchorOffset);
            range2.collapse(false);
            sel.removeAllRanges();
            sel.addRange(range2);
            sel.extend(snapshot.focusNode, snapshot.focusOffset);
          }
        }

        function updateDisplayIfNeeded(cm, update) {
          var display = cm.display,
              doc = cm.doc;

          if (update.editorIsHidden) {
            resetView(cm);
            return false;
          }

          if (!update.force && update.visible.from >= display.viewFrom && update.visible.to <= display.viewTo && (display.updateLineNumbers == null || display.updateLineNumbers >= display.viewTo) && display.renderedView == display.view && countDirtyView(cm) == 0) {
            return false;
          }

          if (maybeUpdateLineNumberWidth(cm)) {
            resetView(cm);
            update.dims = getDimensions(cm);
          }

          var end = doc.first + doc.size;
          var from = Math.max(update.visible.from - cm.options.viewportMargin, doc.first);
          var to = Math.min(end, update.visible.to + cm.options.viewportMargin);

          if (display.viewFrom < from && from - display.viewFrom < 20) {
            from = Math.max(doc.first, display.viewFrom);
          }

          if (display.viewTo > to && display.viewTo - to < 20) {
            to = Math.min(end, display.viewTo);
          }

          if (sawCollapsedSpans) {
            from = visualLineNo(cm.doc, from);
            to = visualLineEndNo(cm.doc, to);
          }

          var different = from != display.viewFrom || to != display.viewTo || display.lastWrapHeight != update.wrapperHeight || display.lastWrapWidth != update.wrapperWidth;
          adjustView(cm, from, to);
          display.viewOffset = _heightAtLine(getLine(cm.doc, display.viewFrom));
          cm.display.mover.style.top = display.viewOffset + "px";
          var toUpdate = countDirtyView(cm);

          if (!different && toUpdate == 0 && !update.force && display.renderedView == display.view && (display.updateLineNumbers == null || display.updateLineNumbers >= display.viewTo)) {
            return false;
          }

          var selSnapshot = selectionSnapshot(cm);

          if (toUpdate > 4) {
            display.lineDiv.style.display = "none";
          }

          patchDisplay(cm, display.updateLineNumbers, update.dims);

          if (toUpdate > 4) {
            display.lineDiv.style.display = "";
          }

          display.renderedView = display.view;
          restoreSelection(selSnapshot);
          removeChildren(display.cursorDiv);
          removeChildren(display.selectionDiv);
          display.gutters.style.height = display.sizer.style.minHeight = 0;

          if (different) {
            display.lastWrapHeight = update.wrapperHeight;
            display.lastWrapWidth = update.wrapperWidth;
            startWorker(cm, 400);
          }

          display.updateLineNumbers = null;
          return true;
        }

        function postUpdateDisplay(cm, update) {
          var viewport = update.viewport;

          for (var first = true;; first = false) {
            if (!first || !cm.options.lineWrapping || update.oldDisplayWidth == displayWidth(cm)) {
              if (viewport && viewport.top != null) {
                viewport = {
                  top: Math.min(cm.doc.height + paddingVert(cm.display) - displayHeight(cm), viewport.top)
                };
              }

              update.visible = visibleLines(cm.display, cm.doc, viewport);

              if (update.visible.from >= cm.display.viewFrom && update.visible.to <= cm.display.viewTo) {
                break;
              }
            } else if (first) {
              update.visible = visibleLines(cm.display, cm.doc, viewport);
            }

            if (!updateDisplayIfNeeded(cm, update)) {
              break;
            }

            updateHeightsInViewport(cm);
            var barMeasure = measureForScrollbars(cm);
            updateSelection(cm);
            updateScrollbars(cm, barMeasure);
            setDocumentHeight(cm, barMeasure);
            update.force = false;
          }

          update.signal(cm, "update", cm);

          if (cm.display.viewFrom != cm.display.reportedViewFrom || cm.display.viewTo != cm.display.reportedViewTo) {
            update.signal(cm, "viewportChange", cm, cm.display.viewFrom, cm.display.viewTo);
            cm.display.reportedViewFrom = cm.display.viewFrom;
            cm.display.reportedViewTo = cm.display.viewTo;
          }
        }

        function updateDisplaySimple(cm, viewport) {
          var update = new DisplayUpdate(cm, viewport);

          if (updateDisplayIfNeeded(cm, update)) {
            updateHeightsInViewport(cm);
            postUpdateDisplay(cm, update);
            var barMeasure = measureForScrollbars(cm);
            updateSelection(cm);
            updateScrollbars(cm, barMeasure);
            setDocumentHeight(cm, barMeasure);
            update.finish();
          }
        }

        function patchDisplay(cm, updateNumbersFrom, dims) {
          var display = cm.display,
              lineNumbers = cm.options.lineNumbers;
          var container = display.lineDiv,
              cur = container.firstChild;

          function rm(node2) {
            var next = node2.nextSibling;

            if (webkit && mac && cm.display.currentWheelTarget == node2) {
              node2.style.display = "none";
            } else {
              node2.parentNode.removeChild(node2);
            }

            return next;
          }

          var view = display.view,
              lineN = display.viewFrom;

          for (var i2 = 0; i2 < view.length; i2++) {
            var lineView = view[i2];
            if (lineView.hidden) ;else if (!lineView.node || lineView.node.parentNode != container) {
              var node = buildLineElement(cm, lineView, lineN, dims);
              container.insertBefore(node, cur);
            } else {
              while (cur != lineView.node) {
                cur = rm(cur);
              }

              var updateNumber = lineNumbers && updateNumbersFrom != null && updateNumbersFrom <= lineN && lineView.lineNumber;

              if (lineView.changes) {
                if (indexOf(lineView.changes, "gutter") > -1) {
                  updateNumber = false;
                }

                updateLineForChanges(cm, lineView, lineN, dims);
              }

              if (updateNumber) {
                removeChildren(lineView.lineNumber);
                lineView.lineNumber.appendChild(document.createTextNode(lineNumberFor(cm.options, lineN)));
              }

              cur = lineView.node.nextSibling;
            }
            lineN += lineView.size;
          }

          while (cur) {
            cur = rm(cur);
          }
        }

        function updateGutterSpace(display) {
          var width = display.gutters.offsetWidth;
          display.sizer.style.marginLeft = width + "px";
          signalLater(display, "gutterChanged", display);
        }

        function setDocumentHeight(cm, measure) {
          cm.display.sizer.style.minHeight = measure.docHeight + "px";
          cm.display.heightForcer.style.top = measure.docHeight + "px";
          cm.display.gutters.style.height = measure.docHeight + cm.display.barHeight + scrollGap(cm) + "px";
        }

        function alignHorizontally(cm) {
          var display = cm.display,
              view = display.view;

          if (!display.alignWidgets && (!display.gutters.firstChild || !cm.options.fixedGutter)) {
            return;
          }

          var comp = compensateForHScroll(display) - display.scroller.scrollLeft + cm.doc.scrollLeft;
          var gutterW = display.gutters.offsetWidth,
              left = comp + "px";

          for (var i2 = 0; i2 < view.length; i2++) {
            if (!view[i2].hidden) {
              if (cm.options.fixedGutter) {
                if (view[i2].gutter) {
                  view[i2].gutter.style.left = left;
                }

                if (view[i2].gutterBackground) {
                  view[i2].gutterBackground.style.left = left;
                }
              }

              var align = view[i2].alignable;

              if (align) {
                for (var j = 0; j < align.length; j++) {
                  align[j].style.left = left;
                }
              }
            }
          }

          if (cm.options.fixedGutter) {
            display.gutters.style.left = comp + gutterW + "px";
          }
        }

        function maybeUpdateLineNumberWidth(cm) {
          if (!cm.options.lineNumbers) {
            return false;
          }

          var doc = cm.doc,
              last = lineNumberFor(cm.options, doc.first + doc.size - 1),
              display = cm.display;

          if (last.length != display.lineNumChars) {
            var test = display.measure.appendChild(elt("div", [elt("div", last)], "CodeMirror-linenumber CodeMirror-gutter-elt"));
            var innerW = test.firstChild.offsetWidth,
                padding = test.offsetWidth - innerW;
            display.lineGutter.style.width = "";
            display.lineNumInnerWidth = Math.max(innerW, display.lineGutter.offsetWidth - padding) + 1;
            display.lineNumWidth = display.lineNumInnerWidth + padding;
            display.lineNumChars = display.lineNumInnerWidth ? last.length : -1;
            display.lineGutter.style.width = display.lineNumWidth + "px";
            updateGutterSpace(cm.display);
            return true;
          }

          return false;
        }

        function getGutters(gutters, lineNumbers) {
          var result = [],
              sawLineNumbers = false;

          for (var i2 = 0; i2 < gutters.length; i2++) {
            var name = gutters[i2],
                style = null;

            if (typeof name != "string") {
              style = name.style;
              name = name.className;
            }

            if (name == "CodeMirror-linenumbers") {
              if (!lineNumbers) {
                continue;
              } else {
                sawLineNumbers = true;
              }
            }

            result.push({
              className: name,
              style
            });
          }

          if (lineNumbers && !sawLineNumbers) {
            result.push({
              className: "CodeMirror-linenumbers",
              style: null
            });
          }

          return result;
        }

        function renderGutters(display) {
          var gutters = display.gutters,
              specs = display.gutterSpecs;
          removeChildren(gutters);
          display.lineGutter = null;

          for (var i2 = 0; i2 < specs.length; ++i2) {
            var ref = specs[i2];
            var className = ref.className;
            var style = ref.style;
            var gElt = gutters.appendChild(elt("div", null, "CodeMirror-gutter " + className));

            if (style) {
              gElt.style.cssText = style;
            }

            if (className == "CodeMirror-linenumbers") {
              display.lineGutter = gElt;
              gElt.style.width = (display.lineNumWidth || 1) + "px";
            }
          }

          gutters.style.display = specs.length ? "" : "none";
          updateGutterSpace(display);
        }

        function updateGutters(cm) {
          renderGutters(cm.display);
          regChange(cm);
          alignHorizontally(cm);
        }

        function Display(place, doc, input, options) {
          var d = this;
          this.input = input;
          d.scrollbarFiller = elt("div", null, "CodeMirror-scrollbar-filler");
          d.scrollbarFiller.setAttribute("cm-not-content", "true");
          d.gutterFiller = elt("div", null, "CodeMirror-gutter-filler");
          d.gutterFiller.setAttribute("cm-not-content", "true");
          d.lineDiv = eltP("div", null, "CodeMirror-code");
          d.selectionDiv = elt("div", null, null, "position: relative; z-index: 1");
          d.cursorDiv = elt("div", null, "CodeMirror-cursors");
          d.measure = elt("div", null, "CodeMirror-measure");
          d.lineMeasure = elt("div", null, "CodeMirror-measure");
          d.lineSpace = eltP("div", [d.measure, d.lineMeasure, d.selectionDiv, d.cursorDiv, d.lineDiv], null, "position: relative; outline: none");
          var lines = eltP("div", [d.lineSpace], "CodeMirror-lines");
          d.mover = elt("div", [lines], null, "position: relative");
          d.sizer = elt("div", [d.mover], "CodeMirror-sizer");
          d.sizerWidth = null;
          d.heightForcer = elt("div", null, null, "position: absolute; height: " + scrollerGap + "px; width: 1px;");
          d.gutters = elt("div", null, "CodeMirror-gutters");
          d.lineGutter = null;
          d.scroller = elt("div", [d.sizer, d.heightForcer, d.gutters], "CodeMirror-scroll");
          d.scroller.setAttribute("tabIndex", "-1");
          d.wrapper = elt("div", [d.scrollbarFiller, d.gutterFiller, d.scroller], "CodeMirror");
          d.wrapper.setAttribute("translate", "no");

          if (ie && ie_version < 8) {
            d.gutters.style.zIndex = -1;
            d.scroller.style.paddingRight = 0;
          }

          if (!webkit && !(gecko && mobile)) {
            d.scroller.draggable = true;
          }

          if (place) {
            if (place.appendChild) {
              place.appendChild(d.wrapper);
            } else {
              place(d.wrapper);
            }
          }

          d.viewFrom = d.viewTo = doc.first;
          d.reportedViewFrom = d.reportedViewTo = doc.first;
          d.view = [];
          d.renderedView = null;
          d.externalMeasured = null;
          d.viewOffset = 0;
          d.lastWrapHeight = d.lastWrapWidth = 0;
          d.updateLineNumbers = null;
          d.nativeBarWidth = d.barHeight = d.barWidth = 0;
          d.scrollbarsClipped = false;
          d.lineNumWidth = d.lineNumInnerWidth = d.lineNumChars = null;
          d.alignWidgets = false;
          d.cachedCharWidth = d.cachedTextHeight = d.cachedPaddingH = null;
          d.maxLine = null;
          d.maxLineLength = 0;
          d.maxLineChanged = false;
          d.wheelDX = d.wheelDY = d.wheelStartX = d.wheelStartY = null;
          d.shift = false;
          d.selForContextMenu = null;
          d.activeTouch = null;
          d.gutterSpecs = getGutters(options.gutters, options.lineNumbers);
          renderGutters(d);
          input.init(d);
        }

        var wheelSamples = 0,
            wheelPixelsPerUnit = null;

        if (ie) {
          wheelPixelsPerUnit = -0.53;
        } else if (gecko) {
          wheelPixelsPerUnit = 15;
        } else if (chrome) {
          wheelPixelsPerUnit = -0.7;
        } else if (safari) {
          wheelPixelsPerUnit = -1 / 3;
        }

        function wheelEventDelta(e) {
          var dx = e.wheelDeltaX,
              dy = e.wheelDeltaY;

          if (dx == null && e.detail && e.axis == e.HORIZONTAL_AXIS) {
            dx = e.detail;
          }

          if (dy == null && e.detail && e.axis == e.VERTICAL_AXIS) {
            dy = e.detail;
          } else if (dy == null) {
            dy = e.wheelDelta;
          }

          return {
            x: dx,
            y: dy
          };
        }

        function wheelEventPixels(e) {
          var delta = wheelEventDelta(e);
          delta.x *= wheelPixelsPerUnit;
          delta.y *= wheelPixelsPerUnit;
          return delta;
        }

        function onScrollWheel(cm, e) {
          if (chrome && chrome_version >= 102) {
            if (cm.display.chromeScrollHack == null) {
              cm.display.sizer.style.pointerEvents = "none";
            } else {
              clearTimeout(cm.display.chromeScrollHack);
            }

            cm.display.chromeScrollHack = setTimeout(function () {
              cm.display.chromeScrollHack = null;
              cm.display.sizer.style.pointerEvents = "";
            }, 100);
          }

          var delta = wheelEventDelta(e),
              dx = delta.x,
              dy = delta.y;
          var pixelsPerUnit = wheelPixelsPerUnit;

          if (e.deltaMode === 0) {
            dx = e.deltaX;
            dy = e.deltaY;
            pixelsPerUnit = 1;
          }

          var display = cm.display,
              scroll = display.scroller;
          var canScrollX = scroll.scrollWidth > scroll.clientWidth;
          var canScrollY = scroll.scrollHeight > scroll.clientHeight;

          if (!(dx && canScrollX || dy && canScrollY)) {
            return;
          }

          if (dy && mac && webkit) {
            outer: for (var cur = e.target, view = display.view; cur != scroll; cur = cur.parentNode) {
              for (var i2 = 0; i2 < view.length; i2++) {
                if (view[i2].node == cur) {
                  cm.display.currentWheelTarget = cur;
                  break outer;
                }
              }
            }
          }

          if (dx && !gecko && !presto && pixelsPerUnit != null) {
            if (dy && canScrollY) {
              updateScrollTop(cm, Math.max(0, scroll.scrollTop + dy * pixelsPerUnit));
            }

            setScrollLeft(cm, Math.max(0, scroll.scrollLeft + dx * pixelsPerUnit));

            if (!dy || dy && canScrollY) {
              e_preventDefault(e);
            }

            display.wheelStartX = null;
            return;
          }

          if (dy && pixelsPerUnit != null) {
            var pixels = dy * pixelsPerUnit;
            var top = cm.doc.scrollTop,
                bot = top + display.wrapper.clientHeight;

            if (pixels < 0) {
              top = Math.max(0, top + pixels - 50);
            } else {
              bot = Math.min(cm.doc.height, bot + pixels + 50);
            }

            updateDisplaySimple(cm, {
              top,
              bottom: bot
            });
          }

          if (wheelSamples < 20 && e.deltaMode !== 0) {
            if (display.wheelStartX == null) {
              display.wheelStartX = scroll.scrollLeft;
              display.wheelStartY = scroll.scrollTop;
              display.wheelDX = dx;
              display.wheelDY = dy;
              setTimeout(function () {
                if (display.wheelStartX == null) {
                  return;
                }

                var movedX = scroll.scrollLeft - display.wheelStartX;
                var movedY = scroll.scrollTop - display.wheelStartY;
                var sample = movedY && display.wheelDY && movedY / display.wheelDY || movedX && display.wheelDX && movedX / display.wheelDX;
                display.wheelStartX = display.wheelStartY = null;

                if (!sample) {
                  return;
                }

                wheelPixelsPerUnit = (wheelPixelsPerUnit * wheelSamples + sample) / (wheelSamples + 1);
                ++wheelSamples;
              }, 200);
            } else {
              display.wheelDX += dx;
              display.wheelDY += dy;
            }
          }
        }

        var Selection = function Selection(ranges, primIndex) {
          this.ranges = ranges;
          this.primIndex = primIndex;
        };

        Selection.prototype.primary = function () {
          return this.ranges[this.primIndex];
        };

        Selection.prototype.equals = function (other) {
          if (other == this) {
            return true;
          }

          if (other.primIndex != this.primIndex || other.ranges.length != this.ranges.length) {
            return false;
          }

          for (var i2 = 0; i2 < this.ranges.length; i2++) {
            var here = this.ranges[i2],
                there = other.ranges[i2];

            if (!equalCursorPos(here.anchor, there.anchor) || !equalCursorPos(here.head, there.head)) {
              return false;
            }
          }

          return true;
        };

        Selection.prototype.deepCopy = function () {
          var out = [];

          for (var i2 = 0; i2 < this.ranges.length; i2++) {
            out[i2] = new Range(copyPos(this.ranges[i2].anchor), copyPos(this.ranges[i2].head));
          }

          return new Selection(out, this.primIndex);
        };

        Selection.prototype.somethingSelected = function () {
          for (var i2 = 0; i2 < this.ranges.length; i2++) {
            if (!this.ranges[i2].empty()) {
              return true;
            }
          }

          return false;
        };

        Selection.prototype.contains = function (pos, end) {
          if (!end) {
            end = pos;
          }

          for (var i2 = 0; i2 < this.ranges.length; i2++) {
            var range2 = this.ranges[i2];

            if (cmp(end, range2.from()) >= 0 && cmp(pos, range2.to()) <= 0) {
              return i2;
            }
          }

          return -1;
        };

        var Range = function Range(anchor, head) {
          this.anchor = anchor;
          this.head = head;
        };

        Range.prototype.from = function () {
          return minPos(this.anchor, this.head);
        };

        Range.prototype.to = function () {
          return maxPos(this.anchor, this.head);
        };

        Range.prototype.empty = function () {
          return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch;
        };

        function normalizeSelection(cm, ranges, primIndex) {
          var mayTouch = cm && cm.options.selectionsMayTouch;
          var prim = ranges[primIndex];
          ranges.sort(function (a, b) {
            return cmp(a.from(), b.from());
          });
          primIndex = indexOf(ranges, prim);

          for (var i2 = 1; i2 < ranges.length; i2++) {
            var cur = ranges[i2],
                prev = ranges[i2 - 1];
            var diff = cmp(prev.to(), cur.from());

            if (mayTouch && !cur.empty() ? diff > 0 : diff >= 0) {
              var from = minPos(prev.from(), cur.from()),
                  to = maxPos(prev.to(), cur.to());
              var inv = prev.empty() ? cur.from() == cur.head : prev.from() == prev.head;

              if (i2 <= primIndex) {
                --primIndex;
              }

              ranges.splice(--i2, 2, new Range(inv ? to : from, inv ? from : to));
            }
          }

          return new Selection(ranges, primIndex);
        }

        function simpleSelection(anchor, head) {
          return new Selection([new Range(anchor, head || anchor)], 0);
        }

        function changeEnd(change) {
          if (!change.text) {
            return change.to;
          }

          return Pos(change.from.line + change.text.length - 1, lst(change.text).length + (change.text.length == 1 ? change.from.ch : 0));
        }

        function adjustForChange(pos, change) {
          if (cmp(pos, change.from) < 0) {
            return pos;
          }

          if (cmp(pos, change.to) <= 0) {
            return changeEnd(change);
          }

          var line = pos.line + change.text.length - (change.to.line - change.from.line) - 1,
              ch = pos.ch;

          if (pos.line == change.to.line) {
            ch += changeEnd(change).ch - change.to.ch;
          }

          return Pos(line, ch);
        }

        function computeSelAfterChange(doc, change) {
          var out = [];

          for (var i2 = 0; i2 < doc.sel.ranges.length; i2++) {
            var range2 = doc.sel.ranges[i2];
            out.push(new Range(adjustForChange(range2.anchor, change), adjustForChange(range2.head, change)));
          }

          return normalizeSelection(doc.cm, out, doc.sel.primIndex);
        }

        function offsetPos(pos, old, nw) {
          if (pos.line == old.line) {
            return Pos(nw.line, pos.ch - old.ch + nw.ch);
          } else {
            return Pos(nw.line + (pos.line - old.line), pos.ch);
          }
        }

        function computeReplacedSel(doc, changes, hint) {
          var out = [];
          var oldPrev = Pos(doc.first, 0),
              newPrev = oldPrev;

          for (var i2 = 0; i2 < changes.length; i2++) {
            var change = changes[i2];
            var from = offsetPos(change.from, oldPrev, newPrev);
            var to = offsetPos(changeEnd(change), oldPrev, newPrev);
            oldPrev = change.to;
            newPrev = to;

            if (hint == "around") {
              var range2 = doc.sel.ranges[i2],
                  inv = cmp(range2.head, range2.anchor) < 0;
              out[i2] = new Range(inv ? to : from, inv ? from : to);
            } else {
              out[i2] = new Range(from, from);
            }
          }

          return new Selection(out, doc.sel.primIndex);
        }

        function loadMode(cm) {
          cm.doc.mode = getMode(cm.options, cm.doc.modeOption);
          resetModeState(cm);
        }

        function resetModeState(cm) {
          cm.doc.iter(function (line) {
            if (line.stateAfter) {
              line.stateAfter = null;
            }

            if (line.styles) {
              line.styles = null;
            }
          });
          cm.doc.modeFrontier = cm.doc.highlightFrontier = cm.doc.first;
          startWorker(cm, 100);
          cm.state.modeGen++;

          if (cm.curOp) {
            regChange(cm);
          }
        }

        function isWholeLineUpdate(doc, change) {
          return change.from.ch == 0 && change.to.ch == 0 && lst(change.text) == "" && (!doc.cm || doc.cm.options.wholeLineUpdateBefore);
        }

        function updateDoc(doc, change, markedSpans, estimateHeight2) {
          function spansFor(n) {
            return markedSpans ? markedSpans[n] : null;
          }

          function update(line, text2, spans) {
            updateLine(line, text2, spans, estimateHeight2);
            signalLater(line, "change", line, change);
          }

          function linesFor(start, end) {
            var result = [];

            for (var i2 = start; i2 < end; ++i2) {
              result.push(new Line(text[i2], spansFor(i2), estimateHeight2));
            }

            return result;
          }

          var from = change.from,
              to = change.to,
              text = change.text;
          var firstLine = getLine(doc, from.line),
              lastLine = getLine(doc, to.line);
          var lastText = lst(text),
              lastSpans = spansFor(text.length - 1),
              nlines = to.line - from.line;

          if (change.full) {
            doc.insert(0, linesFor(0, text.length));
            doc.remove(text.length, doc.size - text.length);
          } else if (isWholeLineUpdate(doc, change)) {
            var added = linesFor(0, text.length - 1);
            update(lastLine, lastLine.text, lastSpans);

            if (nlines) {
              doc.remove(from.line, nlines);
            }

            if (added.length) {
              doc.insert(from.line, added);
            }
          } else if (firstLine == lastLine) {
            if (text.length == 1) {
              update(firstLine, firstLine.text.slice(0, from.ch) + lastText + firstLine.text.slice(to.ch), lastSpans);
            } else {
              var added$1 = linesFor(1, text.length - 1);
              added$1.push(new Line(lastText + firstLine.text.slice(to.ch), lastSpans, estimateHeight2));
              update(firstLine, firstLine.text.slice(0, from.ch) + text[0], spansFor(0));
              doc.insert(from.line + 1, added$1);
            }
          } else if (text.length == 1) {
            update(firstLine, firstLine.text.slice(0, from.ch) + text[0] + lastLine.text.slice(to.ch), spansFor(0));
            doc.remove(from.line + 1, nlines);
          } else {
            update(firstLine, firstLine.text.slice(0, from.ch) + text[0], spansFor(0));
            update(lastLine, lastText + lastLine.text.slice(to.ch), lastSpans);
            var added$2 = linesFor(1, text.length - 1);

            if (nlines > 1) {
              doc.remove(from.line + 1, nlines - 1);
            }

            doc.insert(from.line + 1, added$2);
          }

          signalLater(doc, "change", doc, change);
        }

        function linkedDocs(doc, f, sharedHistOnly) {
          function propagate(doc2, skip, sharedHist) {
            if (doc2.linked) {
              for (var i2 = 0; i2 < doc2.linked.length; ++i2) {
                var rel = doc2.linked[i2];

                if (rel.doc == skip) {
                  continue;
                }

                var shared = sharedHist && rel.sharedHist;

                if (sharedHistOnly && !shared) {
                  continue;
                }

                f(rel.doc, shared);
                propagate(rel.doc, doc2, shared);
              }
            }
          }

          propagate(doc, null, true);
        }

        function attachDoc(cm, doc) {
          if (doc.cm) {
            throw new Error("This document is already in use.");
          }

          cm.doc = doc;
          doc.cm = cm;
          estimateLineHeights(cm);
          loadMode(cm);
          setDirectionClass(cm);
          cm.options.direction = doc.direction;

          if (!cm.options.lineWrapping) {
            findMaxLine(cm);
          }

          cm.options.mode = doc.modeOption;
          regChange(cm);
        }

        function setDirectionClass(cm) {
          (cm.doc.direction == "rtl" ? addClass : rmClass)(cm.display.lineDiv, "CodeMirror-rtl");
        }

        function directionChanged(cm) {
          runInOp(cm, function () {
            setDirectionClass(cm);
            regChange(cm);
          });
        }

        function History(prev) {
          this.done = [];
          this.undone = [];
          this.undoDepth = prev ? prev.undoDepth : Infinity;
          this.lastModTime = this.lastSelTime = 0;
          this.lastOp = this.lastSelOp = null;
          this.lastOrigin = this.lastSelOrigin = null;
          this.generation = this.maxGeneration = prev ? prev.maxGeneration : 1;
        }

        function historyChangeFromChange(doc, change) {
          var histChange = {
            from: copyPos(change.from),
            to: changeEnd(change),
            text: getBetween(doc, change.from, change.to)
          };
          attachLocalSpans(doc, histChange, change.from.line, change.to.line + 1);
          linkedDocs(doc, function (doc2) {
            return attachLocalSpans(doc2, histChange, change.from.line, change.to.line + 1);
          }, true);
          return histChange;
        }

        function clearSelectionEvents(array) {
          while (array.length) {
            var last = lst(array);

            if (last.ranges) {
              array.pop();
            } else {
              break;
            }
          }
        }

        function lastChangeEvent(hist, force) {
          if (force) {
            clearSelectionEvents(hist.done);
            return lst(hist.done);
          } else if (hist.done.length && !lst(hist.done).ranges) {
            return lst(hist.done);
          } else if (hist.done.length > 1 && !hist.done[hist.done.length - 2].ranges) {
            hist.done.pop();
            return lst(hist.done);
          }
        }

        function addChangeToHistory(doc, change, selAfter, opId) {
          var hist = doc.history;
          hist.undone.length = 0;
          var time = +new Date(),
              cur;
          var last;

          if ((hist.lastOp == opId || hist.lastOrigin == change.origin && change.origin && (change.origin.charAt(0) == "+" && hist.lastModTime > time - (doc.cm ? doc.cm.options.historyEventDelay : 500) || change.origin.charAt(0) == "*")) && (cur = lastChangeEvent(hist, hist.lastOp == opId))) {
            last = lst(cur.changes);

            if (cmp(change.from, change.to) == 0 && cmp(change.from, last.to) == 0) {
              last.to = changeEnd(change);
            } else {
              cur.changes.push(historyChangeFromChange(doc, change));
            }
          } else {
            var before = lst(hist.done);

            if (!before || !before.ranges) {
              pushSelectionToHistory(doc.sel, hist.done);
            }

            cur = {
              changes: [historyChangeFromChange(doc, change)],
              generation: hist.generation
            };
            hist.done.push(cur);

            while (hist.done.length > hist.undoDepth) {
              hist.done.shift();

              if (!hist.done[0].ranges) {
                hist.done.shift();
              }
            }
          }

          hist.done.push(selAfter);
          hist.generation = ++hist.maxGeneration;
          hist.lastModTime = hist.lastSelTime = time;
          hist.lastOp = hist.lastSelOp = opId;
          hist.lastOrigin = hist.lastSelOrigin = change.origin;

          if (!last) {
            signal(doc, "historyAdded");
          }
        }

        function selectionEventCanBeMerged(doc, origin, prev, sel) {
          var ch = origin.charAt(0);
          return ch == "*" || ch == "+" && prev.ranges.length == sel.ranges.length && prev.somethingSelected() == sel.somethingSelected() && new Date() - doc.history.lastSelTime <= (doc.cm ? doc.cm.options.historyEventDelay : 500);
        }

        function addSelectionToHistory(doc, sel, opId, options) {
          var hist = doc.history,
              origin = options && options.origin;

          if (opId == hist.lastSelOp || origin && hist.lastSelOrigin == origin && (hist.lastModTime == hist.lastSelTime && hist.lastOrigin == origin || selectionEventCanBeMerged(doc, origin, lst(hist.done), sel))) {
            hist.done[hist.done.length - 1] = sel;
          } else {
            pushSelectionToHistory(sel, hist.done);
          }

          hist.lastSelTime = +new Date();
          hist.lastSelOrigin = origin;
          hist.lastSelOp = opId;

          if (options && options.clearRedo !== false) {
            clearSelectionEvents(hist.undone);
          }
        }

        function pushSelectionToHistory(sel, dest) {
          var top = lst(dest);

          if (!(top && top.ranges && top.equals(sel))) {
            dest.push(sel);
          }
        }

        function attachLocalSpans(doc, change, from, to) {
          var existing = change["spans_" + doc.id],
              n = 0;
          doc.iter(Math.max(doc.first, from), Math.min(doc.first + doc.size, to), function (line) {
            if (line.markedSpans) {
              (existing || (existing = change["spans_" + doc.id] = {}))[n] = line.markedSpans;
            }

            ++n;
          });
        }

        function removeClearedSpans(spans) {
          if (!spans) {
            return null;
          }

          var out;

          for (var i2 = 0; i2 < spans.length; ++i2) {
            if (spans[i2].marker.explicitlyCleared) {
              if (!out) {
                out = spans.slice(0, i2);
              }
            } else if (out) {
              out.push(spans[i2]);
            }
          }

          return !out ? spans : out.length ? out : null;
        }

        function getOldSpans(doc, change) {
          var found = change["spans_" + doc.id];

          if (!found) {
            return null;
          }

          var nw = [];

          for (var i2 = 0; i2 < change.text.length; ++i2) {
            nw.push(removeClearedSpans(found[i2]));
          }

          return nw;
        }

        function mergeOldSpans(doc, change) {
          var old = getOldSpans(doc, change);
          var stretched = stretchSpansOverChange(doc, change);

          if (!old) {
            return stretched;
          }

          if (!stretched) {
            return old;
          }

          for (var i2 = 0; i2 < old.length; ++i2) {
            var oldCur = old[i2],
                stretchCur = stretched[i2];

            if (oldCur && stretchCur) {
              spans: for (var j = 0; j < stretchCur.length; ++j) {
                var span = stretchCur[j];

                for (var k = 0; k < oldCur.length; ++k) {
                  if (oldCur[k].marker == span.marker) {
                    continue spans;
                  }
                }

                oldCur.push(span);
              }
            } else if (stretchCur) {
              old[i2] = stretchCur;
            }
          }

          return old;
        }

        function copyHistoryArray(events, newGroup, instantiateSel) {
          var copy = [];

          for (var i2 = 0; i2 < events.length; ++i2) {
            var event = events[i2];

            if (event.ranges) {
              copy.push(instantiateSel ? Selection.prototype.deepCopy.call(event) : event);
              continue;
            }

            var changes = event.changes,
                newChanges = [];
            copy.push({
              changes: newChanges
            });

            for (var j = 0; j < changes.length; ++j) {
              var change = changes[j],
                  m = void 0;
              newChanges.push({
                from: change.from,
                to: change.to,
                text: change.text
              });

              if (newGroup) {
                for (var prop2 in change) {
                  if (m = prop2.match(/^spans_(\d+)$/)) {
                    if (indexOf(newGroup, Number(m[1])) > -1) {
                      lst(newChanges)[prop2] = change[prop2];
                      delete change[prop2];
                    }
                  }
                }
              }
            }
          }

          return copy;
        }

        function extendRange(range2, head, other, extend) {
          if (extend) {
            var anchor = range2.anchor;

            if (other) {
              var posBefore = cmp(head, anchor) < 0;

              if (posBefore != cmp(other, anchor) < 0) {
                anchor = head;
                head = other;
              } else if (posBefore != cmp(head, other) < 0) {
                head = other;
              }
            }

            return new Range(anchor, head);
          } else {
            return new Range(other || head, head);
          }
        }

        function extendSelection(doc, head, other, options, extend) {
          if (extend == null) {
            extend = doc.cm && (doc.cm.display.shift || doc.extend);
          }

          setSelection(doc, new Selection([extendRange(doc.sel.primary(), head, other, extend)], 0), options);
        }

        function extendSelections(doc, heads, options) {
          var out = [];
          var extend = doc.cm && (doc.cm.display.shift || doc.extend);

          for (var i2 = 0; i2 < doc.sel.ranges.length; i2++) {
            out[i2] = extendRange(doc.sel.ranges[i2], heads[i2], null, extend);
          }

          var newSel = normalizeSelection(doc.cm, out, doc.sel.primIndex);
          setSelection(doc, newSel, options);
        }

        function replaceOneSelection(doc, i2, range2, options) {
          var ranges = doc.sel.ranges.slice(0);
          ranges[i2] = range2;
          setSelection(doc, normalizeSelection(doc.cm, ranges, doc.sel.primIndex), options);
        }

        function setSimpleSelection(doc, anchor, head, options) {
          setSelection(doc, simpleSelection(anchor, head), options);
        }

        function filterSelectionChange(doc, sel, options) {
          var obj = {
            ranges: sel.ranges,
            update: function update(ranges) {
              this.ranges = [];

              for (var i2 = 0; i2 < ranges.length; i2++) {
                this.ranges[i2] = new Range(_clipPos(doc, ranges[i2].anchor), _clipPos(doc, ranges[i2].head));
              }
            },
            origin: options && options.origin
          };
          signal(doc, "beforeSelectionChange", doc, obj);

          if (doc.cm) {
            signal(doc.cm, "beforeSelectionChange", doc.cm, obj);
          }

          if (obj.ranges != sel.ranges) {
            return normalizeSelection(doc.cm, obj.ranges, obj.ranges.length - 1);
          } else {
            return sel;
          }
        }

        function setSelectionReplaceHistory(doc, sel, options) {
          var done = doc.history.done,
              last = lst(done);

          if (last && last.ranges) {
            done[done.length - 1] = sel;
            setSelectionNoUndo(doc, sel, options);
          } else {
            setSelection(doc, sel, options);
          }
        }

        function setSelection(doc, sel, options) {
          setSelectionNoUndo(doc, sel, options);
          addSelectionToHistory(doc, doc.sel, doc.cm ? doc.cm.curOp.id : NaN, options);
        }

        function setSelectionNoUndo(doc, sel, options) {
          if (hasHandler(doc, "beforeSelectionChange") || doc.cm && hasHandler(doc.cm, "beforeSelectionChange")) {
            sel = filterSelectionChange(doc, sel, options);
          }

          var bias = options && options.bias || (cmp(sel.primary().head, doc.sel.primary().head) < 0 ? -1 : 1);
          setSelectionInner(doc, skipAtomicInSelection(doc, sel, bias, true));

          if (!(options && options.scroll === false) && doc.cm && doc.cm.getOption("readOnly") != "nocursor") {
            ensureCursorVisible(doc.cm);
          }
        }

        function setSelectionInner(doc, sel) {
          if (sel.equals(doc.sel)) {
            return;
          }

          doc.sel = sel;

          if (doc.cm) {
            doc.cm.curOp.updateInput = 1;
            doc.cm.curOp.selectionChanged = true;
            signalCursorActivity(doc.cm);
          }

          signalLater(doc, "cursorActivity", doc);
        }

        function reCheckSelection(doc) {
          setSelectionInner(doc, skipAtomicInSelection(doc, doc.sel, null, false));
        }

        function skipAtomicInSelection(doc, sel, bias, mayClear) {
          var out;

          for (var i2 = 0; i2 < sel.ranges.length; i2++) {
            var range2 = sel.ranges[i2];
            var old = sel.ranges.length == doc.sel.ranges.length && doc.sel.ranges[i2];
            var newAnchor = skipAtomic(doc, range2.anchor, old && old.anchor, bias, mayClear);
            var newHead = skipAtomic(doc, range2.head, old && old.head, bias, mayClear);

            if (out || newAnchor != range2.anchor || newHead != range2.head) {
              if (!out) {
                out = sel.ranges.slice(0, i2);
              }

              out[i2] = new Range(newAnchor, newHead);
            }
          }

          return out ? normalizeSelection(doc.cm, out, sel.primIndex) : sel;
        }

        function skipAtomicInner(doc, pos, oldPos, dir, mayClear) {
          var line = getLine(doc, pos.line);

          if (line.markedSpans) {
            for (var i2 = 0; i2 < line.markedSpans.length; ++i2) {
              var sp = line.markedSpans[i2],
                  m = sp.marker;
              var preventCursorLeft = "selectLeft" in m ? !m.selectLeft : m.inclusiveLeft;
              var preventCursorRight = "selectRight" in m ? !m.selectRight : m.inclusiveRight;

              if ((sp.from == null || (preventCursorLeft ? sp.from <= pos.ch : sp.from < pos.ch)) && (sp.to == null || (preventCursorRight ? sp.to >= pos.ch : sp.to > pos.ch))) {
                if (mayClear) {
                  signal(m, "beforeCursorEnter");

                  if (m.explicitlyCleared) {
                    if (!line.markedSpans) {
                      break;
                    } else {
                      --i2;
                      continue;
                    }
                  }
                }

                if (!m.atomic) {
                  continue;
                }

                if (oldPos) {
                  var near = m.find(dir < 0 ? 1 : -1),
                      diff = void 0;

                  if (dir < 0 ? preventCursorRight : preventCursorLeft) {
                    near = movePos(doc, near, -dir, near && near.line == pos.line ? line : null);
                  }

                  if (near && near.line == pos.line && (diff = cmp(near, oldPos)) && (dir < 0 ? diff < 0 : diff > 0)) {
                    return skipAtomicInner(doc, near, pos, dir, mayClear);
                  }
                }

                var far = m.find(dir < 0 ? -1 : 1);

                if (dir < 0 ? preventCursorLeft : preventCursorRight) {
                  far = movePos(doc, far, dir, far.line == pos.line ? line : null);
                }

                return far ? skipAtomicInner(doc, far, pos, dir, mayClear) : null;
              }
            }
          }

          return pos;
        }

        function skipAtomic(doc, pos, oldPos, bias, mayClear) {
          var dir = bias || 1;
          var found = skipAtomicInner(doc, pos, oldPos, dir, mayClear) || !mayClear && skipAtomicInner(doc, pos, oldPos, dir, true) || skipAtomicInner(doc, pos, oldPos, -dir, mayClear) || !mayClear && skipAtomicInner(doc, pos, oldPos, -dir, true);

          if (!found) {
            doc.cantEdit = true;
            return Pos(doc.first, 0);
          }

          return found;
        }

        function movePos(doc, pos, dir, line) {
          if (dir < 0 && pos.ch == 0) {
            if (pos.line > doc.first) {
              return _clipPos(doc, Pos(pos.line - 1));
            } else {
              return null;
            }
          } else if (dir > 0 && pos.ch == (line || getLine(doc, pos.line)).text.length) {
            if (pos.line < doc.first + doc.size - 1) {
              return Pos(pos.line + 1, 0);
            } else {
              return null;
            }
          } else {
            return new Pos(pos.line, pos.ch + dir);
          }
        }

        function selectAll(cm) {
          cm.setSelection(Pos(cm.firstLine(), 0), Pos(cm.lastLine()), sel_dontScroll);
        }

        function filterChange(doc, change, update) {
          var obj = {
            canceled: false,
            from: change.from,
            to: change.to,
            text: change.text,
            origin: change.origin,
            cancel: function cancel() {
              return obj.canceled = true;
            }
          };

          if (update) {
            obj.update = function (from, to, text, origin) {
              if (from) {
                obj.from = _clipPos(doc, from);
              }

              if (to) {
                obj.to = _clipPos(doc, to);
              }

              if (text) {
                obj.text = text;
              }

              if (origin !== void 0) {
                obj.origin = origin;
              }
            };
          }

          signal(doc, "beforeChange", doc, obj);

          if (doc.cm) {
            signal(doc.cm, "beforeChange", doc.cm, obj);
          }

          if (obj.canceled) {
            if (doc.cm) {
              doc.cm.curOp.updateInput = 2;
            }

            return null;
          }

          return {
            from: obj.from,
            to: obj.to,
            text: obj.text,
            origin: obj.origin
          };
        }

        function makeChange(doc, change, ignoreReadOnly) {
          if (doc.cm) {
            if (!doc.cm.curOp) {
              return operation(doc.cm, makeChange)(doc, change, ignoreReadOnly);
            }

            if (doc.cm.state.suppressEdits) {
              return;
            }
          }

          if (hasHandler(doc, "beforeChange") || doc.cm && hasHandler(doc.cm, "beforeChange")) {
            change = filterChange(doc, change, true);

            if (!change) {
              return;
            }
          }

          var split = sawReadOnlySpans && !ignoreReadOnly && removeReadOnlyRanges(doc, change.from, change.to);

          if (split) {
            for (var i2 = split.length - 1; i2 >= 0; --i2) {
              makeChangeInner(doc, {
                from: split[i2].from,
                to: split[i2].to,
                text: i2 ? [""] : change.text,
                origin: change.origin
              });
            }
          } else {
            makeChangeInner(doc, change);
          }
        }

        function makeChangeInner(doc, change) {
          if (change.text.length == 1 && change.text[0] == "" && cmp(change.from, change.to) == 0) {
            return;
          }

          var selAfter = computeSelAfterChange(doc, change);
          addChangeToHistory(doc, change, selAfter, doc.cm ? doc.cm.curOp.id : NaN);
          makeChangeSingleDoc(doc, change, selAfter, stretchSpansOverChange(doc, change));
          var rebased = [];
          linkedDocs(doc, function (doc2, sharedHist) {
            if (!sharedHist && indexOf(rebased, doc2.history) == -1) {
              rebaseHist(doc2.history, change);
              rebased.push(doc2.history);
            }

            makeChangeSingleDoc(doc2, change, null, stretchSpansOverChange(doc2, change));
          });
        }

        function makeChangeFromHistory(doc, type, allowSelectionOnly) {
          var suppress = doc.cm && doc.cm.state.suppressEdits;

          if (suppress && !allowSelectionOnly) {
            return;
          }

          var hist = doc.history,
              event,
              selAfter = doc.sel;
          var source = type == "undo" ? hist.done : hist.undone,
              dest = type == "undo" ? hist.undone : hist.done;
          var i2 = 0;

          for (; i2 < source.length; i2++) {
            event = source[i2];

            if (allowSelectionOnly ? event.ranges && !event.equals(doc.sel) : !event.ranges) {
              break;
            }
          }

          if (i2 == source.length) {
            return;
          }

          hist.lastOrigin = hist.lastSelOrigin = null;

          for (;;) {
            event = source.pop();

            if (event.ranges) {
              pushSelectionToHistory(event, dest);

              if (allowSelectionOnly && !event.equals(doc.sel)) {
                setSelection(doc, event, {
                  clearRedo: false
                });
                return;
              }

              selAfter = event;
            } else if (suppress) {
              source.push(event);
              return;
            } else {
              break;
            }
          }

          var antiChanges = [];
          pushSelectionToHistory(selAfter, dest);
          dest.push({
            changes: antiChanges,
            generation: hist.generation
          });
          hist.generation = event.generation || ++hist.maxGeneration;
          var filter = hasHandler(doc, "beforeChange") || doc.cm && hasHandler(doc.cm, "beforeChange");

          var loop = function loop(i3) {
            var change = event.changes[i3];
            change.origin = type;

            if (filter && !filterChange(doc, change, false)) {
              source.length = 0;
              return {};
            }

            antiChanges.push(historyChangeFromChange(doc, change));
            var after = i3 ? computeSelAfterChange(doc, change) : lst(source);
            makeChangeSingleDoc(doc, change, after, mergeOldSpans(doc, change));

            if (!i3 && doc.cm) {
              doc.cm.scrollIntoView({
                from: change.from,
                to: changeEnd(change)
              });
            }

            var rebased = [];
            linkedDocs(doc, function (doc2, sharedHist) {
              if (!sharedHist && indexOf(rebased, doc2.history) == -1) {
                rebaseHist(doc2.history, change);
                rebased.push(doc2.history);
              }

              makeChangeSingleDoc(doc2, change, null, mergeOldSpans(doc2, change));
            });
          };

          for (var i$12 = event.changes.length - 1; i$12 >= 0; --i$12) {
            var returned = loop(i$12);
            if (returned) return returned.v;
          }
        }

        function shiftDoc(doc, distance) {
          if (distance == 0) {
            return;
          }

          doc.first += distance;
          doc.sel = new Selection(map(doc.sel.ranges, function (range2) {
            return new Range(Pos(range2.anchor.line + distance, range2.anchor.ch), Pos(range2.head.line + distance, range2.head.ch));
          }), doc.sel.primIndex);

          if (doc.cm) {
            regChange(doc.cm, doc.first, doc.first - distance, distance);

            for (var d = doc.cm.display, l = d.viewFrom; l < d.viewTo; l++) {
              regLineChange(doc.cm, l, "gutter");
            }
          }
        }

        function makeChangeSingleDoc(doc, change, selAfter, spans) {
          if (doc.cm && !doc.cm.curOp) {
            return operation(doc.cm, makeChangeSingleDoc)(doc, change, selAfter, spans);
          }

          if (change.to.line < doc.first) {
            shiftDoc(doc, change.text.length - 1 - (change.to.line - change.from.line));
            return;
          }

          if (change.from.line > doc.lastLine()) {
            return;
          }

          if (change.from.line < doc.first) {
            var shift = change.text.length - 1 - (doc.first - change.from.line);
            shiftDoc(doc, shift);
            change = {
              from: Pos(doc.first, 0),
              to: Pos(change.to.line + shift, change.to.ch),
              text: [lst(change.text)],
              origin: change.origin
            };
          }

          var last = doc.lastLine();

          if (change.to.line > last) {
            change = {
              from: change.from,
              to: Pos(last, getLine(doc, last).text.length),
              text: [change.text[0]],
              origin: change.origin
            };
          }

          change.removed = getBetween(doc, change.from, change.to);

          if (!selAfter) {
            selAfter = computeSelAfterChange(doc, change);
          }

          if (doc.cm) {
            makeChangeSingleDocInEditor(doc.cm, change, spans);
          } else {
            updateDoc(doc, change, spans);
          }

          setSelectionNoUndo(doc, selAfter, sel_dontScroll);

          if (doc.cantEdit && skipAtomic(doc, Pos(doc.firstLine(), 0))) {
            doc.cantEdit = false;
          }
        }

        function makeChangeSingleDocInEditor(cm, change, spans) {
          var doc = cm.doc,
              display = cm.display,
              from = change.from,
              to = change.to;
          var recomputeMaxLength = false,
              checkWidthStart = from.line;

          if (!cm.options.lineWrapping) {
            checkWidthStart = lineNo(visualLine(getLine(doc, from.line)));
            doc.iter(checkWidthStart, to.line + 1, function (line) {
              if (line == display.maxLine) {
                recomputeMaxLength = true;
                return true;
              }
            });
          }

          if (doc.sel.contains(change.from, change.to) > -1) {
            signalCursorActivity(cm);
          }

          updateDoc(doc, change, spans, estimateHeight(cm));

          if (!cm.options.lineWrapping) {
            doc.iter(checkWidthStart, from.line + change.text.length, function (line) {
              var len = lineLength(line);

              if (len > display.maxLineLength) {
                display.maxLine = line;
                display.maxLineLength = len;
                display.maxLineChanged = true;
                recomputeMaxLength = false;
              }
            });

            if (recomputeMaxLength) {
              cm.curOp.updateMaxLine = true;
            }
          }

          retreatFrontier(doc, from.line);
          startWorker(cm, 400);
          var lendiff = change.text.length - (to.line - from.line) - 1;

          if (change.full) {
            regChange(cm);
          } else if (from.line == to.line && change.text.length == 1 && !isWholeLineUpdate(cm.doc, change)) {
            regLineChange(cm, from.line, "text");
          } else {
            regChange(cm, from.line, to.line + 1, lendiff);
          }

          var changesHandler = hasHandler(cm, "changes"),
              changeHandler = hasHandler(cm, "change");

          if (changeHandler || changesHandler) {
            var obj = {
              from,
              to,
              text: change.text,
              removed: change.removed,
              origin: change.origin
            };

            if (changeHandler) {
              signalLater(cm, "change", cm, obj);
            }

            if (changesHandler) {
              (cm.curOp.changeObjs || (cm.curOp.changeObjs = [])).push(obj);
            }
          }

          cm.display.selForContextMenu = null;
        }

        function _replaceRange(doc, code, from, to, origin) {
          var assign;

          if (!to) {
            to = from;
          }

          if (cmp(to, from) < 0) {
            assign = [to, from], from = assign[0], to = assign[1];
          }

          if (typeof code == "string") {
            code = doc.splitLines(code);
          }

          makeChange(doc, {
            from,
            to,
            text: code,
            origin
          });
        }

        function rebaseHistSelSingle(pos, from, to, diff) {
          if (to < pos.line) {
            pos.line += diff;
          } else if (from < pos.line) {
            pos.line = from;
            pos.ch = 0;
          }
        }

        function rebaseHistArray(array, from, to, diff) {
          for (var i2 = 0; i2 < array.length; ++i2) {
            var sub = array[i2],
                ok = true;

            if (sub.ranges) {
              if (!sub.copied) {
                sub = array[i2] = sub.deepCopy();
                sub.copied = true;
              }

              for (var j = 0; j < sub.ranges.length; j++) {
                rebaseHistSelSingle(sub.ranges[j].anchor, from, to, diff);
                rebaseHistSelSingle(sub.ranges[j].head, from, to, diff);
              }

              continue;
            }

            for (var j$1 = 0; j$1 < sub.changes.length; ++j$1) {
              var cur = sub.changes[j$1];

              if (to < cur.from.line) {
                cur.from = Pos(cur.from.line + diff, cur.from.ch);
                cur.to = Pos(cur.to.line + diff, cur.to.ch);
              } else if (from <= cur.to.line) {
                ok = false;
                break;
              }
            }

            if (!ok) {
              array.splice(0, i2 + 1);
              i2 = 0;
            }
          }
        }

        function rebaseHist(hist, change) {
          var from = change.from.line,
              to = change.to.line,
              diff = change.text.length - (to - from) - 1;
          rebaseHistArray(hist.done, from, to, diff);
          rebaseHistArray(hist.undone, from, to, diff);
        }

        function changeLine(doc, handle, changeType, op) {
          var no = handle,
              line = handle;

          if (typeof handle == "number") {
            line = getLine(doc, clipLine(doc, handle));
          } else {
            no = lineNo(handle);
          }

          if (no == null) {
            return null;
          }

          if (op(line, no) && doc.cm) {
            regLineChange(doc.cm, no, changeType);
          }

          return line;
        }

        function LeafChunk(lines) {
          this.lines = lines;
          this.parent = null;
          var height = 0;

          for (var i2 = 0; i2 < lines.length; ++i2) {
            lines[i2].parent = this;
            height += lines[i2].height;
          }

          this.height = height;
        }

        LeafChunk.prototype = {
          chunkSize: function chunkSize() {
            return this.lines.length;
          },
          removeInner: function removeInner(at, n) {
            for (var i2 = at, e = at + n; i2 < e; ++i2) {
              var line = this.lines[i2];
              this.height -= line.height;
              cleanUpLine(line);
              signalLater(line, "delete");
            }

            this.lines.splice(at, n);
          },
          collapse: function collapse(lines) {
            lines.push.apply(lines, this.lines);
          },
          insertInner: function insertInner(at, lines, height) {
            this.height += height;
            this.lines = this.lines.slice(0, at).concat(lines).concat(this.lines.slice(at));

            for (var i2 = 0; i2 < lines.length; ++i2) {
              lines[i2].parent = this;
            }
          },
          iterN: function iterN(at, n, op) {
            for (var e = at + n; at < e; ++at) {
              if (op(this.lines[at])) {
                return true;
              }
            }
          }
        };

        function BranchChunk(children) {
          this.children = children;
          var size = 0,
              height = 0;

          for (var i2 = 0; i2 < children.length; ++i2) {
            var ch = children[i2];
            size += ch.chunkSize();
            height += ch.height;
            ch.parent = this;
          }

          this.size = size;
          this.height = height;
          this.parent = null;
        }

        BranchChunk.prototype = {
          chunkSize: function chunkSize() {
            return this.size;
          },
          removeInner: function removeInner(at, n) {
            this.size -= n;

            for (var i2 = 0; i2 < this.children.length; ++i2) {
              var child = this.children[i2],
                  sz = child.chunkSize();

              if (at < sz) {
                var rm = Math.min(n, sz - at),
                    oldHeight = child.height;
                child.removeInner(at, rm);
                this.height -= oldHeight - child.height;

                if (sz == rm) {
                  this.children.splice(i2--, 1);
                  child.parent = null;
                }

                if ((n -= rm) == 0) {
                  break;
                }

                at = 0;
              } else {
                at -= sz;
              }
            }

            if (this.size - n < 25 && (this.children.length > 1 || !(this.children[0] instanceof LeafChunk))) {
              var lines = [];
              this.collapse(lines);
              this.children = [new LeafChunk(lines)];
              this.children[0].parent = this;
            }
          },
          collapse: function collapse(lines) {
            for (var i2 = 0; i2 < this.children.length; ++i2) {
              this.children[i2].collapse(lines);
            }
          },
          insertInner: function insertInner(at, lines, height) {
            this.size += lines.length;
            this.height += height;

            for (var i2 = 0; i2 < this.children.length; ++i2) {
              var child = this.children[i2],
                  sz = child.chunkSize();

              if (at <= sz) {
                child.insertInner(at, lines, height);

                if (child.lines && child.lines.length > 50) {
                  var remaining = child.lines.length % 25 + 25;

                  for (var pos = remaining; pos < child.lines.length;) {
                    var leaf = new LeafChunk(child.lines.slice(pos, pos += 25));
                    child.height -= leaf.height;
                    this.children.splice(++i2, 0, leaf);
                    leaf.parent = this;
                  }

                  child.lines = child.lines.slice(0, remaining);
                  this.maybeSpill();
                }

                break;
              }

              at -= sz;
            }
          },
          maybeSpill: function maybeSpill() {
            if (this.children.length <= 10) {
              return;
            }

            var me = this;

            do {
              var spilled = me.children.splice(me.children.length - 5, 5);
              var sibling = new BranchChunk(spilled);

              if (!me.parent) {
                var copy = new BranchChunk(me.children);
                copy.parent = me;
                me.children = [copy, sibling];
                me = copy;
              } else {
                me.size -= sibling.size;
                me.height -= sibling.height;
                var myIndex = indexOf(me.parent.children, me);
                me.parent.children.splice(myIndex + 1, 0, sibling);
              }

              sibling.parent = me.parent;
            } while (me.children.length > 10);

            me.parent.maybeSpill();
          },
          iterN: function iterN(at, n, op) {
            for (var i2 = 0; i2 < this.children.length; ++i2) {
              var child = this.children[i2],
                  sz = child.chunkSize();

              if (at < sz) {
                var used = Math.min(n, sz - at);

                if (child.iterN(at, used, op)) {
                  return true;
                }

                if ((n -= used) == 0) {
                  break;
                }

                at = 0;
              } else {
                at -= sz;
              }
            }
          }
        };

        var LineWidget = function LineWidget(doc, node, options) {
          if (options) {
            for (var opt in options) {
              if (options.hasOwnProperty(opt)) {
                this[opt] = options[opt];
              }
            }
          }

          this.doc = doc;
          this.node = node;
        };

        LineWidget.prototype.clear = function () {
          var cm = this.doc.cm,
              ws = this.line.widgets,
              line = this.line,
              no = lineNo(line);

          if (no == null || !ws) {
            return;
          }

          for (var i2 = 0; i2 < ws.length; ++i2) {
            if (ws[i2] == this) {
              ws.splice(i2--, 1);
            }
          }

          if (!ws.length) {
            line.widgets = null;
          }

          var height = widgetHeight(this);
          updateLineHeight(line, Math.max(0, line.height - height));

          if (cm) {
            runInOp(cm, function () {
              adjustScrollWhenAboveVisible(cm, line, -height);
              regLineChange(cm, no, "widget");
            });
            signalLater(cm, "lineWidgetCleared", cm, this, no);
          }
        };

        LineWidget.prototype.changed = function () {
          var this$1 = this;
          var oldH = this.height,
              cm = this.doc.cm,
              line = this.line;
          this.height = null;
          var diff = widgetHeight(this) - oldH;

          if (!diff) {
            return;
          }

          if (!lineIsHidden(this.doc, line)) {
            updateLineHeight(line, line.height + diff);
          }

          if (cm) {
            runInOp(cm, function () {
              cm.curOp.forceUpdate = true;
              adjustScrollWhenAboveVisible(cm, line, diff);
              signalLater(cm, "lineWidgetChanged", cm, this$1, lineNo(line));
            });
          }
        };

        eventMixin(LineWidget);

        function adjustScrollWhenAboveVisible(cm, line, diff) {
          if (_heightAtLine(line) < (cm.curOp && cm.curOp.scrollTop || cm.doc.scrollTop)) {
            addToScrollTop(cm, diff);
          }
        }

        function addLineWidget(doc, handle, node, options) {
          var widget = new LineWidget(doc, node, options);
          var cm = doc.cm;

          if (cm && widget.noHScroll) {
            cm.display.alignWidgets = true;
          }

          changeLine(doc, handle, "widget", function (line) {
            var widgets = line.widgets || (line.widgets = []);

            if (widget.insertAt == null) {
              widgets.push(widget);
            } else {
              widgets.splice(Math.min(widgets.length, Math.max(0, widget.insertAt)), 0, widget);
            }

            widget.line = line;

            if (cm && !lineIsHidden(doc, line)) {
              var aboveVisible = _heightAtLine(line) < doc.scrollTop;
              updateLineHeight(line, line.height + widgetHeight(widget));

              if (aboveVisible) {
                addToScrollTop(cm, widget.height);
              }

              cm.curOp.forceUpdate = true;
            }

            return true;
          });

          if (cm) {
            signalLater(cm, "lineWidgetAdded", cm, widget, typeof handle == "number" ? handle : lineNo(handle));
          }

          return widget;
        }

        var nextMarkerId = 0;

        var TextMarker = function TextMarker(doc, type) {
          this.lines = [];
          this.type = type;
          this.doc = doc;
          this.id = ++nextMarkerId;
        };

        TextMarker.prototype.clear = function () {
          if (this.explicitlyCleared) {
            return;
          }

          var cm = this.doc.cm,
              withOp = cm && !cm.curOp;

          if (withOp) {
            _startOperation(cm);
          }

          if (hasHandler(this, "clear")) {
            var found = this.find();

            if (found) {
              signalLater(this, "clear", found.from, found.to);
            }
          }

          var min = null,
              max = null;

          for (var i2 = 0; i2 < this.lines.length; ++i2) {
            var line = this.lines[i2];
            var span = getMarkedSpanFor(line.markedSpans, this);

            if (cm && !this.collapsed) {
              regLineChange(cm, lineNo(line), "text");
            } else if (cm) {
              if (span.to != null) {
                max = lineNo(line);
              }

              if (span.from != null) {
                min = lineNo(line);
              }
            }

            line.markedSpans = removeMarkedSpan(line.markedSpans, span);

            if (span.from == null && this.collapsed && !lineIsHidden(this.doc, line) && cm) {
              updateLineHeight(line, textHeight(cm.display));
            }
          }

          if (cm && this.collapsed && !cm.options.lineWrapping) {
            for (var i$12 = 0; i$12 < this.lines.length; ++i$12) {
              var visual = visualLine(this.lines[i$12]),
                  len = lineLength(visual);

              if (len > cm.display.maxLineLength) {
                cm.display.maxLine = visual;
                cm.display.maxLineLength = len;
                cm.display.maxLineChanged = true;
              }
            }
          }

          if (min != null && cm && this.collapsed) {
            regChange(cm, min, max + 1);
          }

          this.lines.length = 0;
          this.explicitlyCleared = true;

          if (this.atomic && this.doc.cantEdit) {
            this.doc.cantEdit = false;

            if (cm) {
              reCheckSelection(cm.doc);
            }
          }

          if (cm) {
            signalLater(cm, "markerCleared", cm, this, min, max);
          }

          if (withOp) {
            _endOperation(cm);
          }

          if (this.parent) {
            this.parent.clear();
          }
        };

        TextMarker.prototype.find = function (side, lineObj) {
          if (side == null && this.type == "bookmark") {
            side = 1;
          }

          var from, to;

          for (var i2 = 0; i2 < this.lines.length; ++i2) {
            var line = this.lines[i2];
            var span = getMarkedSpanFor(line.markedSpans, this);

            if (span.from != null) {
              from = Pos(lineObj ? line : lineNo(line), span.from);

              if (side == -1) {
                return from;
              }
            }

            if (span.to != null) {
              to = Pos(lineObj ? line : lineNo(line), span.to);

              if (side == 1) {
                return to;
              }
            }
          }

          return from && {
            from,
            to
          };
        };

        TextMarker.prototype.changed = function () {
          var this$1 = this;
          var pos = this.find(-1, true),
              widget = this,
              cm = this.doc.cm;

          if (!pos || !cm) {
            return;
          }

          runInOp(cm, function () {
            var line = pos.line,
                lineN = lineNo(pos.line);
            var view = findViewForLine(cm, lineN);

            if (view) {
              clearLineMeasurementCacheFor(view);
              cm.curOp.selectionChanged = cm.curOp.forceUpdate = true;
            }

            cm.curOp.updateMaxLine = true;

            if (!lineIsHidden(widget.doc, line) && widget.height != null) {
              var oldHeight = widget.height;
              widget.height = null;
              var dHeight = widgetHeight(widget) - oldHeight;

              if (dHeight) {
                updateLineHeight(line, line.height + dHeight);
              }
            }

            signalLater(cm, "markerChanged", cm, this$1);
          });
        };

        TextMarker.prototype.attachLine = function (line) {
          if (!this.lines.length && this.doc.cm) {
            var op = this.doc.cm.curOp;

            if (!op.maybeHiddenMarkers || indexOf(op.maybeHiddenMarkers, this) == -1) {
              (op.maybeUnhiddenMarkers || (op.maybeUnhiddenMarkers = [])).push(this);
            }
          }

          this.lines.push(line);
        };

        TextMarker.prototype.detachLine = function (line) {
          this.lines.splice(indexOf(this.lines, line), 1);

          if (!this.lines.length && this.doc.cm) {
            var op = this.doc.cm.curOp;
            (op.maybeHiddenMarkers || (op.maybeHiddenMarkers = [])).push(this);
          }
        };

        eventMixin(TextMarker);

        function _markText(doc, from, to, options, type) {
          if (options && options.shared) {
            return markTextShared(doc, from, to, options, type);
          }

          if (doc.cm && !doc.cm.curOp) {
            return operation(doc.cm, _markText)(doc, from, to, options, type);
          }

          var marker = new TextMarker(doc, type),
              diff = cmp(from, to);

          if (options) {
            copyObj(options, marker, false);
          }

          if (diff > 0 || diff == 0 && marker.clearWhenEmpty !== false) {
            return marker;
          }

          if (marker.replacedWith) {
            marker.collapsed = true;
            marker.widgetNode = eltP("span", [marker.replacedWith], "CodeMirror-widget");

            if (!options.handleMouseEvents) {
              marker.widgetNode.setAttribute("cm-ignore-events", "true");
            }

            if (options.insertLeft) {
              marker.widgetNode.insertLeft = true;
            }
          }

          if (marker.collapsed) {
            if (conflictingCollapsedRange(doc, from.line, from, to, marker) || from.line != to.line && conflictingCollapsedRange(doc, to.line, from, to, marker)) {
              throw new Error("Inserting collapsed marker partially overlapping an existing one");
            }

            seeCollapsedSpans();
          }

          if (marker.addToHistory) {
            addChangeToHistory(doc, {
              from,
              to,
              origin: "markText"
            }, doc.sel, NaN);
          }

          var curLine = from.line,
              cm = doc.cm,
              updateMaxLine;
          doc.iter(curLine, to.line + 1, function (line) {
            if (cm && marker.collapsed && !cm.options.lineWrapping && visualLine(line) == cm.display.maxLine) {
              updateMaxLine = true;
            }

            if (marker.collapsed && curLine != from.line) {
              updateLineHeight(line, 0);
            }

            addMarkedSpan(line, new MarkedSpan(marker, curLine == from.line ? from.ch : null, curLine == to.line ? to.ch : null), doc.cm && doc.cm.curOp);
            ++curLine;
          });

          if (marker.collapsed) {
            doc.iter(from.line, to.line + 1, function (line) {
              if (lineIsHidden(doc, line)) {
                updateLineHeight(line, 0);
              }
            });
          }

          if (marker.clearOnEnter) {
            on(marker, "beforeCursorEnter", function () {
              return marker.clear();
            });
          }

          if (marker.readOnly) {
            seeReadOnlySpans();

            if (doc.history.done.length || doc.history.undone.length) {
              doc.clearHistory();
            }
          }

          if (marker.collapsed) {
            marker.id = ++nextMarkerId;
            marker.atomic = true;
          }

          if (cm) {
            if (updateMaxLine) {
              cm.curOp.updateMaxLine = true;
            }

            if (marker.collapsed) {
              regChange(cm, from.line, to.line + 1);
            } else if (marker.className || marker.startStyle || marker.endStyle || marker.css || marker.attributes || marker.title) {
              for (var i2 = from.line; i2 <= to.line; i2++) {
                regLineChange(cm, i2, "text");
              }
            }

            if (marker.atomic) {
              reCheckSelection(cm.doc);
            }

            signalLater(cm, "markerAdded", cm, marker);
          }

          return marker;
        }

        var SharedTextMarker = function SharedTextMarker(markers, primary) {
          this.markers = markers;
          this.primary = primary;

          for (var i2 = 0; i2 < markers.length; ++i2) {
            markers[i2].parent = this;
          }
        };

        SharedTextMarker.prototype.clear = function () {
          if (this.explicitlyCleared) {
            return;
          }

          this.explicitlyCleared = true;

          for (var i2 = 0; i2 < this.markers.length; ++i2) {
            this.markers[i2].clear();
          }

          signalLater(this, "clear");
        };

        SharedTextMarker.prototype.find = function (side, lineObj) {
          return this.primary.find(side, lineObj);
        };

        eventMixin(SharedTextMarker);

        function markTextShared(doc, from, to, options, type) {
          options = copyObj(options);
          options.shared = false;
          var markers = [_markText(doc, from, to, options, type)],
              primary = markers[0];
          var widget = options.widgetNode;
          linkedDocs(doc, function (doc2) {
            if (widget) {
              options.widgetNode = widget.cloneNode(true);
            }

            markers.push(_markText(doc2, _clipPos(doc2, from), _clipPos(doc2, to), options, type));

            for (var i2 = 0; i2 < doc2.linked.length; ++i2) {
              if (doc2.linked[i2].isParent) {
                return;
              }
            }

            primary = lst(markers);
          });
          return new SharedTextMarker(markers, primary);
        }

        function findSharedMarkers(doc) {
          return doc.findMarks(Pos(doc.first, 0), doc.clipPos(Pos(doc.lastLine())), function (m) {
            return m.parent;
          });
        }

        function copySharedMarkers(doc, markers) {
          for (var i2 = 0; i2 < markers.length; i2++) {
            var marker = markers[i2],
                pos = marker.find();
            var mFrom = doc.clipPos(pos.from),
                mTo = doc.clipPos(pos.to);

            if (cmp(mFrom, mTo)) {
              var subMark = _markText(doc, mFrom, mTo, marker.primary, marker.primary.type);

              marker.markers.push(subMark);
              subMark.parent = marker;
            }
          }
        }

        function detachSharedMarkers(markers) {
          var loop = function loop(i3) {
            var marker = markers[i3],
                linked = [marker.primary.doc];
            linkedDocs(marker.primary.doc, function (d) {
              return linked.push(d);
            });

            for (var j = 0; j < marker.markers.length; j++) {
              var subMarker = marker.markers[j];

              if (indexOf(linked, subMarker.doc) == -1) {
                subMarker.parent = null;
                marker.markers.splice(j--, 1);
              }
            }
          };

          for (var i2 = 0; i2 < markers.length; i2++) {
            loop(i2);
          }
        }

        var nextDocId = 0;

        var Doc = function Doc(text, mode, firstLine, lineSep, direction) {
          if (!(this instanceof Doc)) {
            return new Doc(text, mode, firstLine, lineSep, direction);
          }

          if (firstLine == null) {
            firstLine = 0;
          }

          BranchChunk.call(this, [new LeafChunk([new Line("", null)])]);
          this.first = firstLine;
          this.scrollTop = this.scrollLeft = 0;
          this.cantEdit = false;
          this.cleanGeneration = 1;
          this.modeFrontier = this.highlightFrontier = firstLine;
          var start = Pos(firstLine, 0);
          this.sel = simpleSelection(start);
          this.history = new History(null);
          this.id = ++nextDocId;
          this.modeOption = mode;
          this.lineSep = lineSep;
          this.direction = direction == "rtl" ? "rtl" : "ltr";
          this.extend = false;

          if (typeof text == "string") {
            text = this.splitLines(text);
          }

          updateDoc(this, {
            from: start,
            to: start,
            text
          });
          setSelection(this, simpleSelection(start), sel_dontScroll);
        };

        Doc.prototype = createObj(BranchChunk.prototype, {
          constructor: Doc,
          iter: function iter(from, to, op) {
            if (op) {
              this.iterN(from - this.first, to - from, op);
            } else {
              this.iterN(this.first, this.first + this.size, from);
            }
          },
          insert: function insert(at, lines) {
            var height = 0;

            for (var i2 = 0; i2 < lines.length; ++i2) {
              height += lines[i2].height;
            }

            this.insertInner(at - this.first, lines, height);
          },
          remove: function remove(at, n) {
            this.removeInner(at - this.first, n);
          },
          getValue: function getValue(lineSep) {
            var lines = getLines(this, this.first, this.first + this.size);

            if (lineSep === false) {
              return lines;
            }

            return lines.join(lineSep || this.lineSeparator());
          },
          setValue: docMethodOp(function (code) {
            var top = Pos(this.first, 0),
                last = this.first + this.size - 1;
            makeChange(this, {
              from: top,
              to: Pos(last, getLine(this, last).text.length),
              text: this.splitLines(code),
              origin: "setValue",
              full: true
            }, true);

            if (this.cm) {
              scrollToCoords(this.cm, 0, 0);
            }

            setSelection(this, simpleSelection(top), sel_dontScroll);
          }),
          replaceRange: function replaceRange(code, from, to, origin) {
            from = _clipPos(this, from);
            to = to ? _clipPos(this, to) : from;

            _replaceRange(this, code, from, to, origin);
          },
          getRange: function getRange(from, to, lineSep) {
            var lines = getBetween(this, _clipPos(this, from), _clipPos(this, to));

            if (lineSep === false) {
              return lines;
            }

            if (lineSep === "") {
              return lines.join("");
            }

            return lines.join(lineSep || this.lineSeparator());
          },
          getLine: function getLine(line) {
            var l = this.getLineHandle(line);
            return l && l.text;
          },
          getLineHandle: function getLineHandle(line) {
            if (isLine(this, line)) {
              return getLine(this, line);
            }
          },
          getLineNumber: function getLineNumber(line) {
            return lineNo(line);
          },
          getLineHandleVisualStart: function getLineHandleVisualStart(line) {
            if (typeof line == "number") {
              line = getLine(this, line);
            }

            return visualLine(line);
          },
          lineCount: function lineCount() {
            return this.size;
          },
          firstLine: function firstLine() {
            return this.first;
          },
          lastLine: function lastLine() {
            return this.first + this.size - 1;
          },
          clipPos: function clipPos(pos) {
            return _clipPos(this, pos);
          },
          getCursor: function getCursor(start) {
            var range2 = this.sel.primary(),
                pos;

            if (start == null || start == "head") {
              pos = range2.head;
            } else if (start == "anchor") {
              pos = range2.anchor;
            } else if (start == "end" || start == "to" || start === false) {
              pos = range2.to();
            } else {
              pos = range2.from();
            }

            return pos;
          },
          listSelections: function listSelections() {
            return this.sel.ranges;
          },
          somethingSelected: function somethingSelected() {
            return this.sel.somethingSelected();
          },
          setCursor: docMethodOp(function (line, ch, options) {
            setSimpleSelection(this, _clipPos(this, typeof line == "number" ? Pos(line, ch || 0) : line), null, options);
          }),
          setSelection: docMethodOp(function (anchor, head, options) {
            setSimpleSelection(this, _clipPos(this, anchor), _clipPos(this, head || anchor), options);
          }),
          extendSelection: docMethodOp(function (head, other, options) {
            extendSelection(this, _clipPos(this, head), other && _clipPos(this, other), options);
          }),
          extendSelections: docMethodOp(function (heads, options) {
            extendSelections(this, clipPosArray(this, heads), options);
          }),
          extendSelectionsBy: docMethodOp(function (f, options) {
            var heads = map(this.sel.ranges, f);
            extendSelections(this, clipPosArray(this, heads), options);
          }),
          setSelections: docMethodOp(function (ranges, primary, options) {
            if (!ranges.length) {
              return;
            }

            var out = [];

            for (var i2 = 0; i2 < ranges.length; i2++) {
              out[i2] = new Range(_clipPos(this, ranges[i2].anchor), _clipPos(this, ranges[i2].head || ranges[i2].anchor));
            }

            if (primary == null) {
              primary = Math.min(ranges.length - 1, this.sel.primIndex);
            }

            setSelection(this, normalizeSelection(this.cm, out, primary), options);
          }),
          addSelection: docMethodOp(function (anchor, head, options) {
            var ranges = this.sel.ranges.slice(0);
            ranges.push(new Range(_clipPos(this, anchor), _clipPos(this, head || anchor)));
            setSelection(this, normalizeSelection(this.cm, ranges, ranges.length - 1), options);
          }),
          getSelection: function getSelection(lineSep) {
            var ranges = this.sel.ranges,
                lines;

            for (var i2 = 0; i2 < ranges.length; i2++) {
              var sel = getBetween(this, ranges[i2].from(), ranges[i2].to());
              lines = lines ? lines.concat(sel) : sel;
            }

            if (lineSep === false) {
              return lines;
            } else {
              return lines.join(lineSep || this.lineSeparator());
            }
          },
          getSelections: function getSelections(lineSep) {
            var parts = [],
                ranges = this.sel.ranges;

            for (var i2 = 0; i2 < ranges.length; i2++) {
              var sel = getBetween(this, ranges[i2].from(), ranges[i2].to());

              if (lineSep !== false) {
                sel = sel.join(lineSep || this.lineSeparator());
              }

              parts[i2] = sel;
            }

            return parts;
          },
          replaceSelection: function replaceSelection(code, collapse, origin) {
            var dup = [];

            for (var i2 = 0; i2 < this.sel.ranges.length; i2++) {
              dup[i2] = code;
            }

            this.replaceSelections(dup, collapse, origin || "+input");
          },
          replaceSelections: docMethodOp(function (code, collapse, origin) {
            var changes = [],
                sel = this.sel;

            for (var i2 = 0; i2 < sel.ranges.length; i2++) {
              var range2 = sel.ranges[i2];
              changes[i2] = {
                from: range2.from(),
                to: range2.to(),
                text: this.splitLines(code[i2]),
                origin
              };
            }

            var newSel = collapse && collapse != "end" && computeReplacedSel(this, changes, collapse);

            for (var i$12 = changes.length - 1; i$12 >= 0; i$12--) {
              makeChange(this, changes[i$12]);
            }

            if (newSel) {
              setSelectionReplaceHistory(this, newSel);
            } else if (this.cm) {
              ensureCursorVisible(this.cm);
            }
          }),
          undo: docMethodOp(function () {
            makeChangeFromHistory(this, "undo");
          }),
          redo: docMethodOp(function () {
            makeChangeFromHistory(this, "redo");
          }),
          undoSelection: docMethodOp(function () {
            makeChangeFromHistory(this, "undo", true);
          }),
          redoSelection: docMethodOp(function () {
            makeChangeFromHistory(this, "redo", true);
          }),
          setExtending: function setExtending(val) {
            this.extend = val;
          },
          getExtending: function getExtending() {
            return this.extend;
          },
          historySize: function historySize() {
            var hist = this.history,
                done = 0,
                undone = 0;

            for (var i2 = 0; i2 < hist.done.length; i2++) {
              if (!hist.done[i2].ranges) {
                ++done;
              }
            }

            for (var i$12 = 0; i$12 < hist.undone.length; i$12++) {
              if (!hist.undone[i$12].ranges) {
                ++undone;
              }
            }

            return {
              undo: done,
              redo: undone
            };
          },
          clearHistory: function clearHistory() {
            var this$1 = this;
            this.history = new History(this.history);
            linkedDocs(this, function (doc) {
              return doc.history = this$1.history;
            }, true);
          },
          markClean: function markClean() {
            this.cleanGeneration = this.changeGeneration(true);
          },
          changeGeneration: function changeGeneration(forceSplit) {
            if (forceSplit) {
              this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null;
            }

            return this.history.generation;
          },
          isClean: function isClean(gen) {
            return this.history.generation == (gen || this.cleanGeneration);
          },
          getHistory: function getHistory() {
            return {
              done: copyHistoryArray(this.history.done),
              undone: copyHistoryArray(this.history.undone)
            };
          },
          setHistory: function setHistory(histData) {
            var hist = this.history = new History(this.history);
            hist.done = copyHistoryArray(histData.done.slice(0), null, true);
            hist.undone = copyHistoryArray(histData.undone.slice(0), null, true);
          },
          setGutterMarker: docMethodOp(function (line, gutterID, value) {
            return changeLine(this, line, "gutter", function (line2) {
              var markers = line2.gutterMarkers || (line2.gutterMarkers = {});
              markers[gutterID] = value;

              if (!value && isEmpty(markers)) {
                line2.gutterMarkers = null;
              }

              return true;
            });
          }),
          clearGutter: docMethodOp(function (gutterID) {
            var this$1 = this;
            this.iter(function (line) {
              if (line.gutterMarkers && line.gutterMarkers[gutterID]) {
                changeLine(this$1, line, "gutter", function () {
                  line.gutterMarkers[gutterID] = null;

                  if (isEmpty(line.gutterMarkers)) {
                    line.gutterMarkers = null;
                  }

                  return true;
                });
              }
            });
          }),
          lineInfo: function lineInfo(line) {
            var n;

            if (typeof line == "number") {
              if (!isLine(this, line)) {
                return null;
              }

              n = line;
              line = getLine(this, line);

              if (!line) {
                return null;
              }
            } else {
              n = lineNo(line);

              if (n == null) {
                return null;
              }
            }

            return {
              line: n,
              handle: line,
              text: line.text,
              gutterMarkers: line.gutterMarkers,
              textClass: line.textClass,
              bgClass: line.bgClass,
              wrapClass: line.wrapClass,
              widgets: line.widgets
            };
          },
          addLineClass: docMethodOp(function (handle, where, cls) {
            return changeLine(this, handle, where == "gutter" ? "gutter" : "class", function (line) {
              var prop2 = where == "text" ? "textClass" : where == "background" ? "bgClass" : where == "gutter" ? "gutterClass" : "wrapClass";

              if (!line[prop2]) {
                line[prop2] = cls;
              } else if (classTest(cls).test(line[prop2])) {
                return false;
              } else {
                line[prop2] += " " + cls;
              }

              return true;
            });
          }),
          removeLineClass: docMethodOp(function (handle, where, cls) {
            return changeLine(this, handle, where == "gutter" ? "gutter" : "class", function (line) {
              var prop2 = where == "text" ? "textClass" : where == "background" ? "bgClass" : where == "gutter" ? "gutterClass" : "wrapClass";
              var cur = line[prop2];

              if (!cur) {
                return false;
              } else if (cls == null) {
                line[prop2] = null;
              } else {
                var found = cur.match(classTest(cls));

                if (!found) {
                  return false;
                }

                var end = found.index + found[0].length;
                line[prop2] = cur.slice(0, found.index) + (!found.index || end == cur.length ? "" : " ") + cur.slice(end) || null;
              }

              return true;
            });
          }),
          addLineWidget: docMethodOp(function (handle, node, options) {
            return addLineWidget(this, handle, node, options);
          }),
          removeLineWidget: function removeLineWidget(widget) {
            widget.clear();
          },
          markText: function markText(from, to, options) {
            return _markText(this, _clipPos(this, from), _clipPos(this, to), options, options && options.type || "range");
          },
          setBookmark: function setBookmark(pos, options) {
            var realOpts = {
              replacedWith: options && (options.nodeType == null ? options.widget : options),
              insertLeft: options && options.insertLeft,
              clearWhenEmpty: false,
              shared: options && options.shared,
              handleMouseEvents: options && options.handleMouseEvents
            };
            pos = _clipPos(this, pos);
            return _markText(this, pos, pos, realOpts, "bookmark");
          },
          findMarksAt: function findMarksAt(pos) {
            pos = _clipPos(this, pos);
            var markers = [],
                spans = getLine(this, pos.line).markedSpans;

            if (spans) {
              for (var i2 = 0; i2 < spans.length; ++i2) {
                var span = spans[i2];

                if ((span.from == null || span.from <= pos.ch) && (span.to == null || span.to >= pos.ch)) {
                  markers.push(span.marker.parent || span.marker);
                }
              }
            }

            return markers;
          },
          findMarks: function findMarks(from, to, filter) {
            from = _clipPos(this, from);
            to = _clipPos(this, to);
            var found = [],
                lineNo2 = from.line;
            this.iter(from.line, to.line + 1, function (line) {
              var spans = line.markedSpans;

              if (spans) {
                for (var i2 = 0; i2 < spans.length; i2++) {
                  var span = spans[i2];

                  if (!(span.to != null && lineNo2 == from.line && from.ch >= span.to || span.from == null && lineNo2 != from.line || span.from != null && lineNo2 == to.line && span.from >= to.ch) && (!filter || filter(span.marker))) {
                    found.push(span.marker.parent || span.marker);
                  }
                }
              }

              ++lineNo2;
            });
            return found;
          },
          getAllMarks: function getAllMarks() {
            var markers = [];
            this.iter(function (line) {
              var sps = line.markedSpans;

              if (sps) {
                for (var i2 = 0; i2 < sps.length; ++i2) {
                  if (sps[i2].from != null) {
                    markers.push(sps[i2].marker);
                  }
                }
              }
            });
            return markers;
          },
          posFromIndex: function posFromIndex(off2) {
            var ch,
                lineNo2 = this.first,
                sepSize = this.lineSeparator().length;
            this.iter(function (line) {
              var sz = line.text.length + sepSize;

              if (sz > off2) {
                ch = off2;
                return true;
              }

              off2 -= sz;
              ++lineNo2;
            });
            return _clipPos(this, Pos(lineNo2, ch));
          },
          indexFromPos: function indexFromPos(coords) {
            coords = _clipPos(this, coords);
            var index = coords.ch;

            if (coords.line < this.first || coords.ch < 0) {
              return 0;
            }

            var sepSize = this.lineSeparator().length;
            this.iter(this.first, coords.line, function (line) {
              index += line.text.length + sepSize;
            });
            return index;
          },
          copy: function copy(copyHistory) {
            var doc = new Doc(getLines(this, this.first, this.first + this.size), this.modeOption, this.first, this.lineSep, this.direction);
            doc.scrollTop = this.scrollTop;
            doc.scrollLeft = this.scrollLeft;
            doc.sel = this.sel;
            doc.extend = false;

            if (copyHistory) {
              doc.history.undoDepth = this.history.undoDepth;
              doc.setHistory(this.getHistory());
            }

            return doc;
          },
          linkedDoc: function linkedDoc(options) {
            if (!options) {
              options = {};
            }

            var from = this.first,
                to = this.first + this.size;

            if (options.from != null && options.from > from) {
              from = options.from;
            }

            if (options.to != null && options.to < to) {
              to = options.to;
            }

            var copy = new Doc(getLines(this, from, to), options.mode || this.modeOption, from, this.lineSep, this.direction);

            if (options.sharedHist) {
              copy.history = this.history;
            }

            (this.linked || (this.linked = [])).push({
              doc: copy,
              sharedHist: options.sharedHist
            });
            copy.linked = [{
              doc: this,
              isParent: true,
              sharedHist: options.sharedHist
            }];
            copySharedMarkers(copy, findSharedMarkers(this));
            return copy;
          },
          unlinkDoc: function unlinkDoc(other) {
            if (other instanceof CodeMirror3) {
              other = other.doc;
            }

            if (this.linked) {
              for (var i2 = 0; i2 < this.linked.length; ++i2) {
                var link = this.linked[i2];

                if (link.doc != other) {
                  continue;
                }

                this.linked.splice(i2, 1);
                other.unlinkDoc(this);
                detachSharedMarkers(findSharedMarkers(this));
                break;
              }
            }

            if (other.history == this.history) {
              var splitIds = [other.id];
              linkedDocs(other, function (doc) {
                return splitIds.push(doc.id);
              }, true);
              other.history = new History(null);
              other.history.done = copyHistoryArray(this.history.done, splitIds);
              other.history.undone = copyHistoryArray(this.history.undone, splitIds);
            }
          },
          iterLinkedDocs: function iterLinkedDocs(f) {
            linkedDocs(this, f);
          },
          getMode: function getMode() {
            return this.mode;
          },
          getEditor: function getEditor() {
            return this.cm;
          },
          splitLines: function splitLines(str) {
            if (this.lineSep) {
              return str.split(this.lineSep);
            }

            return splitLinesAuto(str);
          },
          lineSeparator: function lineSeparator() {
            return this.lineSep || "\n";
          },
          setDirection: docMethodOp(function (dir) {
            if (dir != "rtl") {
              dir = "ltr";
            }

            if (dir == this.direction) {
              return;
            }

            this.direction = dir;
            this.iter(function (line) {
              return line.order = null;
            });

            if (this.cm) {
              directionChanged(this.cm);
            }
          })
        });
        Doc.prototype.eachLine = Doc.prototype.iter;
        var lastDrop = 0;

        function onDrop(e) {
          var cm = this;
          clearDragCursor(cm);

          if (signalDOMEvent(cm, e) || eventInWidget(cm.display, e)) {
            return;
          }

          e_preventDefault(e);

          if (ie) {
            lastDrop = +new Date();
          }

          var pos = posFromMouse(cm, e, true),
              files = e.dataTransfer.files;

          if (!pos || cm.isReadOnly()) {
            return;
          }

          if (files && files.length && window.FileReader && window.File) {
            var n = files.length,
                text = Array(n),
                read = 0;

            var markAsReadAndPasteIfAllFilesAreRead = function markAsReadAndPasteIfAllFilesAreRead() {
              if (++read == n) {
                operation(cm, function () {
                  pos = _clipPos(cm.doc, pos);
                  var change = {
                    from: pos,
                    to: pos,
                    text: cm.doc.splitLines(text.filter(function (t) {
                      return t != null;
                    }).join(cm.doc.lineSeparator())),
                    origin: "paste"
                  };
                  makeChange(cm.doc, change);
                  setSelectionReplaceHistory(cm.doc, simpleSelection(_clipPos(cm.doc, pos), _clipPos(cm.doc, changeEnd(change))));
                })();
              }
            };

            var readTextFromFile = function readTextFromFile(file, i3) {
              if (cm.options.allowDropFileTypes && indexOf(cm.options.allowDropFileTypes, file.type) == -1) {
                markAsReadAndPasteIfAllFilesAreRead();
                return;
              }

              var reader = new FileReader();

              reader.onerror = function () {
                return markAsReadAndPasteIfAllFilesAreRead();
              };

              reader.onload = function () {
                var content = reader.result;

                if (/[\x00-\x08\x0e-\x1f]{2}/.test(content)) {
                  markAsReadAndPasteIfAllFilesAreRead();
                  return;
                }

                text[i3] = content;
                markAsReadAndPasteIfAllFilesAreRead();
              };

              reader.readAsText(file);
            };

            for (var i2 = 0; i2 < files.length; i2++) {
              readTextFromFile(files[i2], i2);
            }
          } else {
            if (cm.state.draggingText && cm.doc.sel.contains(pos) > -1) {
              cm.state.draggingText(e);
              setTimeout(function () {
                return cm.display.input.focus();
              }, 20);
              return;
            }

            try {
              var text$1 = e.dataTransfer.getData("Text");

              if (text$1) {
                var selected;

                if (cm.state.draggingText && !cm.state.draggingText.copy) {
                  selected = cm.listSelections();
                }

                setSelectionNoUndo(cm.doc, simpleSelection(pos, pos));

                if (selected) {
                  for (var i$12 = 0; i$12 < selected.length; ++i$12) {
                    _replaceRange(cm.doc, "", selected[i$12].anchor, selected[i$12].head, "drag");
                  }
                }

                cm.replaceSelection(text$1, "around", "paste");
                cm.display.input.focus();
              }
            } catch (e$1) {}
          }
        }

        function onDragStart(cm, e) {
          if (ie && (!cm.state.draggingText || +new Date() - lastDrop < 100)) {
            e_stop(e);
            return;
          }

          if (signalDOMEvent(cm, e) || eventInWidget(cm.display, e)) {
            return;
          }

          e.dataTransfer.setData("Text", cm.getSelection());
          e.dataTransfer.effectAllowed = "copyMove";

          if (e.dataTransfer.setDragImage && !safari) {
            var img = elt("img", null, null, "position: fixed; left: 0; top: 0;");
            img.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";

            if (presto) {
              img.width = img.height = 1;
              cm.display.wrapper.appendChild(img);
              img._top = img.offsetTop;
            }

            e.dataTransfer.setDragImage(img, 0, 0);

            if (presto) {
              img.parentNode.removeChild(img);
            }
          }
        }

        function onDragOver(cm, e) {
          var pos = posFromMouse(cm, e);

          if (!pos) {
            return;
          }

          var frag = document.createDocumentFragment();
          drawSelectionCursor(cm, pos, frag);

          if (!cm.display.dragCursor) {
            cm.display.dragCursor = elt("div", null, "CodeMirror-cursors CodeMirror-dragcursors");
            cm.display.lineSpace.insertBefore(cm.display.dragCursor, cm.display.cursorDiv);
          }

          removeChildrenAndAdd(cm.display.dragCursor, frag);
        }

        function clearDragCursor(cm) {
          if (cm.display.dragCursor) {
            cm.display.lineSpace.removeChild(cm.display.dragCursor);
            cm.display.dragCursor = null;
          }
        }

        function forEachCodeMirror(f) {
          if (!document.getElementsByClassName) {
            return;
          }

          var byClass = document.getElementsByClassName("CodeMirror"),
              editors = [];

          for (var i2 = 0; i2 < byClass.length; i2++) {
            var cm = byClass[i2].CodeMirror;

            if (cm) {
              editors.push(cm);
            }
          }

          if (editors.length) {
            editors[0].operation(function () {
              for (var i3 = 0; i3 < editors.length; i3++) {
                f(editors[i3]);
              }
            });
          }
        }

        var globalsRegistered = false;

        function ensureGlobalHandlers() {
          if (globalsRegistered) {
            return;
          }

          registerGlobalHandlers();
          globalsRegistered = true;
        }

        function registerGlobalHandlers() {
          var resizeTimer;
          on(window, "resize", function () {
            if (resizeTimer == null) {
              resizeTimer = setTimeout(function () {
                resizeTimer = null;
                forEachCodeMirror(onResize);
              }, 100);
            }
          });
          on(window, "blur", function () {
            return forEachCodeMirror(onBlur);
          });
        }

        function onResize(cm) {
          var d = cm.display;
          d.cachedCharWidth = d.cachedTextHeight = d.cachedPaddingH = null;
          d.scrollbarsClipped = false;
          cm.setSize();
        }

        var keyNames = {
          3: "Pause",
          8: "Backspace",
          9: "Tab",
          13: "Enter",
          16: "Shift",
          17: "Ctrl",
          18: "Alt",
          19: "Pause",
          20: "CapsLock",
          27: "Esc",
          32: "Space",
          33: "PageUp",
          34: "PageDown",
          35: "End",
          36: "Home",
          37: "Left",
          38: "Up",
          39: "Right",
          40: "Down",
          44: "PrintScrn",
          45: "Insert",
          46: "Delete",
          59: ";",
          61: "=",
          91: "Mod",
          92: "Mod",
          93: "Mod",
          106: "*",
          107: "=",
          109: "-",
          110: ".",
          111: "/",
          145: "ScrollLock",
          173: "-",
          186: ";",
          187: "=",
          188: ",",
          189: "-",
          190: ".",
          191: "/",
          192: "`",
          219: "[",
          220: "\\",
          221: "]",
          222: "'",
          224: "Mod",
          63232: "Up",
          63233: "Down",
          63234: "Left",
          63235: "Right",
          63272: "Delete",
          63273: "Home",
          63275: "End",
          63276: "PageUp",
          63277: "PageDown",
          63302: "Insert"
        };

        for (var i = 0; i < 10; i++) {
          keyNames[i + 48] = keyNames[i + 96] = String(i);
        }

        for (var i$1 = 65; i$1 <= 90; i$1++) {
          keyNames[i$1] = String.fromCharCode(i$1);
        }

        for (var i$2 = 1; i$2 <= 12; i$2++) {
          keyNames[i$2 + 111] = keyNames[i$2 + 63235] = "F" + i$2;
        }

        var keyMap = {};
        keyMap.basic = {
          "Left": "goCharLeft",
          "Right": "goCharRight",
          "Up": "goLineUp",
          "Down": "goLineDown",
          "End": "goLineEnd",
          "Home": "goLineStartSmart",
          "PageUp": "goPageUp",
          "PageDown": "goPageDown",
          "Delete": "delCharAfter",
          "Backspace": "delCharBefore",
          "Shift-Backspace": "delCharBefore",
          "Tab": "defaultTab",
          "Shift-Tab": "indentAuto",
          "Enter": "newlineAndIndent",
          "Insert": "toggleOverwrite",
          "Esc": "singleSelection"
        };
        keyMap.pcDefault = {
          "Ctrl-A": "selectAll",
          "Ctrl-D": "deleteLine",
          "Ctrl-Z": "undo",
          "Shift-Ctrl-Z": "redo",
          "Ctrl-Y": "redo",
          "Ctrl-Home": "goDocStart",
          "Ctrl-End": "goDocEnd",
          "Ctrl-Up": "goLineUp",
          "Ctrl-Down": "goLineDown",
          "Ctrl-Left": "goGroupLeft",
          "Ctrl-Right": "goGroupRight",
          "Alt-Left": "goLineStart",
          "Alt-Right": "goLineEnd",
          "Ctrl-Backspace": "delGroupBefore",
          "Ctrl-Delete": "delGroupAfter",
          "Ctrl-S": "save",
          "Ctrl-F": "find",
          "Ctrl-G": "findNext",
          "Shift-Ctrl-G": "findPrev",
          "Shift-Ctrl-F": "replace",
          "Shift-Ctrl-R": "replaceAll",
          "Ctrl-[": "indentLess",
          "Ctrl-]": "indentMore",
          "Ctrl-U": "undoSelection",
          "Shift-Ctrl-U": "redoSelection",
          "Alt-U": "redoSelection",
          "fallthrough": "basic"
        };
        keyMap.emacsy = {
          "Ctrl-F": "goCharRight",
          "Ctrl-B": "goCharLeft",
          "Ctrl-P": "goLineUp",
          "Ctrl-N": "goLineDown",
          "Ctrl-A": "goLineStart",
          "Ctrl-E": "goLineEnd",
          "Ctrl-V": "goPageDown",
          "Shift-Ctrl-V": "goPageUp",
          "Ctrl-D": "delCharAfter",
          "Ctrl-H": "delCharBefore",
          "Alt-Backspace": "delWordBefore",
          "Ctrl-K": "killLine",
          "Ctrl-T": "transposeChars",
          "Ctrl-O": "openLine"
        };
        keyMap.macDefault = {
          "Cmd-A": "selectAll",
          "Cmd-D": "deleteLine",
          "Cmd-Z": "undo",
          "Shift-Cmd-Z": "redo",
          "Cmd-Y": "redo",
          "Cmd-Home": "goDocStart",
          "Cmd-Up": "goDocStart",
          "Cmd-End": "goDocEnd",
          "Cmd-Down": "goDocEnd",
          "Alt-Left": "goGroupLeft",
          "Alt-Right": "goGroupRight",
          "Cmd-Left": "goLineLeft",
          "Cmd-Right": "goLineRight",
          "Alt-Backspace": "delGroupBefore",
          "Ctrl-Alt-Backspace": "delGroupAfter",
          "Alt-Delete": "delGroupAfter",
          "Cmd-S": "save",
          "Cmd-F": "find",
          "Cmd-G": "findNext",
          "Shift-Cmd-G": "findPrev",
          "Cmd-Alt-F": "replace",
          "Shift-Cmd-Alt-F": "replaceAll",
          "Cmd-[": "indentLess",
          "Cmd-]": "indentMore",
          "Cmd-Backspace": "delWrappedLineLeft",
          "Cmd-Delete": "delWrappedLineRight",
          "Cmd-U": "undoSelection",
          "Shift-Cmd-U": "redoSelection",
          "Ctrl-Up": "goDocStart",
          "Ctrl-Down": "goDocEnd",
          "fallthrough": ["basic", "emacsy"]
        };
        keyMap["default"] = mac ? keyMap.macDefault : keyMap.pcDefault;

        function normalizeKeyName(name) {
          var parts = name.split(/-(?!$)/);
          name = parts[parts.length - 1];
          var alt, ctrl, shift, cmd;

          for (var i2 = 0; i2 < parts.length - 1; i2++) {
            var mod = parts[i2];

            if (/^(cmd|meta|m)$/i.test(mod)) {
              cmd = true;
            } else if (/^a(lt)?$/i.test(mod)) {
              alt = true;
            } else if (/^(c|ctrl|control)$/i.test(mod)) {
              ctrl = true;
            } else if (/^s(hift)?$/i.test(mod)) {
              shift = true;
            } else {
              throw new Error("Unrecognized modifier name: " + mod);
            }
          }

          if (alt) {
            name = "Alt-" + name;
          }

          if (ctrl) {
            name = "Ctrl-" + name;
          }

          if (cmd) {
            name = "Cmd-" + name;
          }

          if (shift) {
            name = "Shift-" + name;
          }

          return name;
        }

        function normalizeKeyMap(keymap) {
          var copy = {};

          for (var keyname in keymap) {
            if (keymap.hasOwnProperty(keyname)) {
              var value = keymap[keyname];

              if (/^(name|fallthrough|(de|at)tach)$/.test(keyname)) {
                continue;
              }

              if (value == "...") {
                delete keymap[keyname];
                continue;
              }

              var keys = map(keyname.split(" "), normalizeKeyName);

              for (var i2 = 0; i2 < keys.length; i2++) {
                var val = void 0,
                    name = void 0;

                if (i2 == keys.length - 1) {
                  name = keys.join(" ");
                  val = value;
                } else {
                  name = keys.slice(0, i2 + 1).join(" ");
                  val = "...";
                }

                var prev = copy[name];

                if (!prev) {
                  copy[name] = val;
                } else if (prev != val) {
                  throw new Error("Inconsistent bindings for " + name);
                }
              }

              delete keymap[keyname];
            }
          }

          for (var prop2 in copy) {
            keymap[prop2] = copy[prop2];
          }

          return keymap;
        }

        function lookupKey(key, map2, handle, context) {
          map2 = getKeyMap(map2);
          var found = map2.call ? map2.call(key, context) : map2[key];

          if (found === false) {
            return "nothing";
          }

          if (found === "...") {
            return "multi";
          }

          if (found != null && handle(found)) {
            return "handled";
          }

          if (map2.fallthrough) {
            if (Object.prototype.toString.call(map2.fallthrough) != "[object Array]") {
              return lookupKey(key, map2.fallthrough, handle, context);
            }

            for (var i2 = 0; i2 < map2.fallthrough.length; i2++) {
              var result = lookupKey(key, map2.fallthrough[i2], handle, context);

              if (result) {
                return result;
              }
            }
          }
        }

        function isModifierKey(value) {
          var name = typeof value == "string" ? value : keyNames[value.keyCode];
          return name == "Ctrl" || name == "Alt" || name == "Shift" || name == "Mod";
        }

        function addModifierNames(name, event, noShift) {
          var base = name;

          if (event.altKey && base != "Alt") {
            name = "Alt-" + name;
          }

          if ((flipCtrlCmd ? event.metaKey : event.ctrlKey) && base != "Ctrl") {
            name = "Ctrl-" + name;
          }

          if ((flipCtrlCmd ? event.ctrlKey : event.metaKey) && base != "Mod") {
            name = "Cmd-" + name;
          }

          if (!noShift && event.shiftKey && base != "Shift") {
            name = "Shift-" + name;
          }

          return name;
        }

        function keyName(event, noShift) {
          if (presto && event.keyCode == 34 && event["char"]) {
            return false;
          }

          var name = keyNames[event.keyCode];

          if (name == null || event.altGraphKey) {
            return false;
          }

          if (event.keyCode == 3 && event.code) {
            name = event.code;
          }

          return addModifierNames(name, event, noShift);
        }

        function getKeyMap(val) {
          return typeof val == "string" ? keyMap[val] : val;
        }

        function deleteNearSelection(cm, compute) {
          var ranges = cm.doc.sel.ranges,
              kill = [];

          for (var i2 = 0; i2 < ranges.length; i2++) {
            var toKill = compute(ranges[i2]);

            while (kill.length && cmp(toKill.from, lst(kill).to) <= 0) {
              var replaced = kill.pop();

              if (cmp(replaced.from, toKill.from) < 0) {
                toKill.from = replaced.from;
                break;
              }
            }

            kill.push(toKill);
          }

          runInOp(cm, function () {
            for (var i3 = kill.length - 1; i3 >= 0; i3--) {
              _replaceRange(cm.doc, "", kill[i3].from, kill[i3].to, "+delete");
            }

            ensureCursorVisible(cm);
          });
        }

        function moveCharLogically(line, ch, dir) {
          var target = skipExtendingChars(line.text, ch + dir, dir);
          return target < 0 || target > line.text.length ? null : target;
        }

        function moveLogically(line, start, dir) {
          var ch = moveCharLogically(line, start.ch, dir);
          return ch == null ? null : new Pos(start.line, ch, dir < 0 ? "after" : "before");
        }

        function endOfLine(visually, cm, lineObj, lineNo2, dir) {
          if (visually) {
            if (cm.doc.direction == "rtl") {
              dir = -dir;
            }

            var order = getOrder(lineObj, cm.doc.direction);

            if (order) {
              var part = dir < 0 ? lst(order) : order[0];
              var moveInStorageOrder = dir < 0 == (part.level == 1);
              var sticky = moveInStorageOrder ? "after" : "before";
              var ch;

              if (part.level > 0 || cm.doc.direction == "rtl") {
                var prep = prepareMeasureForLine(cm, lineObj);
                ch = dir < 0 ? lineObj.text.length - 1 : 0;
                var targetTop = measureCharPrepared(cm, prep, ch).top;
                ch = findFirst(function (ch2) {
                  return measureCharPrepared(cm, prep, ch2).top == targetTop;
                }, dir < 0 == (part.level == 1) ? part.from : part.to - 1, ch);

                if (sticky == "before") {
                  ch = moveCharLogically(lineObj, ch, 1);
                }
              } else {
                ch = dir < 0 ? part.to : part.from;
              }

              return new Pos(lineNo2, ch, sticky);
            }
          }

          return new Pos(lineNo2, dir < 0 ? lineObj.text.length : 0, dir < 0 ? "before" : "after");
        }

        function moveVisually(cm, line, start, dir) {
          var bidi = getOrder(line, cm.doc.direction);

          if (!bidi) {
            return moveLogically(line, start, dir);
          }

          if (start.ch >= line.text.length) {
            start.ch = line.text.length;
            start.sticky = "before";
          } else if (start.ch <= 0) {
            start.ch = 0;
            start.sticky = "after";
          }

          var partPos = getBidiPartAt(bidi, start.ch, start.sticky),
              part = bidi[partPos];

          if (cm.doc.direction == "ltr" && part.level % 2 == 0 && (dir > 0 ? part.to > start.ch : part.from < start.ch)) {
            return moveLogically(line, start, dir);
          }

          var mv = function mv(pos, dir2) {
            return moveCharLogically(line, pos instanceof Pos ? pos.ch : pos, dir2);
          };

          var prep;

          var getWrappedLineExtent = function getWrappedLineExtent(ch2) {
            if (!cm.options.lineWrapping) {
              return {
                begin: 0,
                end: line.text.length
              };
            }

            prep = prep || prepareMeasureForLine(cm, line);
            return wrappedLineExtentChar(cm, line, prep, ch2);
          };

          var wrappedLineExtent2 = getWrappedLineExtent(start.sticky == "before" ? mv(start, -1) : start.ch);

          if (cm.doc.direction == "rtl" || part.level == 1) {
            var moveInStorageOrder = part.level == 1 == dir < 0;
            var ch = mv(start, moveInStorageOrder ? 1 : -1);

            if (ch != null && (!moveInStorageOrder ? ch >= part.from && ch >= wrappedLineExtent2.begin : ch <= part.to && ch <= wrappedLineExtent2.end)) {
              var sticky = moveInStorageOrder ? "before" : "after";
              return new Pos(start.line, ch, sticky);
            }
          }

          var searchInVisualLine = function searchInVisualLine(partPos2, dir2, wrappedLineExtent3) {
            var getRes = function getRes(ch3, moveInStorageOrder3) {
              return moveInStorageOrder3 ? new Pos(start.line, mv(ch3, 1), "before") : new Pos(start.line, ch3, "after");
            };

            for (; partPos2 >= 0 && partPos2 < bidi.length; partPos2 += dir2) {
              var part2 = bidi[partPos2];
              var moveInStorageOrder2 = dir2 > 0 == (part2.level != 1);
              var ch2 = moveInStorageOrder2 ? wrappedLineExtent3.begin : mv(wrappedLineExtent3.end, -1);

              if (part2.from <= ch2 && ch2 < part2.to) {
                return getRes(ch2, moveInStorageOrder2);
              }

              ch2 = moveInStorageOrder2 ? part2.from : mv(part2.to, -1);

              if (wrappedLineExtent3.begin <= ch2 && ch2 < wrappedLineExtent3.end) {
                return getRes(ch2, moveInStorageOrder2);
              }
            }
          };

          var res = searchInVisualLine(partPos + dir, dir, wrappedLineExtent2);

          if (res) {
            return res;
          }

          var nextCh = dir > 0 ? wrappedLineExtent2.end : mv(wrappedLineExtent2.begin, -1);

          if (nextCh != null && !(dir > 0 && nextCh == line.text.length)) {
            res = searchInVisualLine(dir > 0 ? 0 : bidi.length - 1, dir, getWrappedLineExtent(nextCh));

            if (res) {
              return res;
            }
          }

          return null;
        }

        var commands = {
          selectAll,
          singleSelection: function singleSelection(cm) {
            return cm.setSelection(cm.getCursor("anchor"), cm.getCursor("head"), sel_dontScroll);
          },
          killLine: function killLine(cm) {
            return deleteNearSelection(cm, function (range2) {
              if (range2.empty()) {
                var len = getLine(cm.doc, range2.head.line).text.length;

                if (range2.head.ch == len && range2.head.line < cm.lastLine()) {
                  return {
                    from: range2.head,
                    to: Pos(range2.head.line + 1, 0)
                  };
                } else {
                  return {
                    from: range2.head,
                    to: Pos(range2.head.line, len)
                  };
                }
              } else {
                return {
                  from: range2.from(),
                  to: range2.to()
                };
              }
            });
          },
          deleteLine: function deleteLine(cm) {
            return deleteNearSelection(cm, function (range2) {
              return {
                from: Pos(range2.from().line, 0),
                to: _clipPos(cm.doc, Pos(range2.to().line + 1, 0))
              };
            });
          },
          delLineLeft: function delLineLeft(cm) {
            return deleteNearSelection(cm, function (range2) {
              return {
                from: Pos(range2.from().line, 0),
                to: range2.from()
              };
            });
          },
          delWrappedLineLeft: function delWrappedLineLeft(cm) {
            return deleteNearSelection(cm, function (range2) {
              var top = cm.charCoords(range2.head, "div").top + 5;
              var leftPos = cm.coordsChar({
                left: 0,
                top
              }, "div");
              return {
                from: leftPos,
                to: range2.from()
              };
            });
          },
          delWrappedLineRight: function delWrappedLineRight(cm) {
            return deleteNearSelection(cm, function (range2) {
              var top = cm.charCoords(range2.head, "div").top + 5;
              var rightPos = cm.coordsChar({
                left: cm.display.lineDiv.offsetWidth + 100,
                top
              }, "div");
              return {
                from: range2.from(),
                to: rightPos
              };
            });
          },
          undo: function undo(cm) {
            return cm.undo();
          },
          redo: function redo(cm) {
            return cm.redo();
          },
          undoSelection: function undoSelection(cm) {
            return cm.undoSelection();
          },
          redoSelection: function redoSelection(cm) {
            return cm.redoSelection();
          },
          goDocStart: function goDocStart(cm) {
            return cm.extendSelection(Pos(cm.firstLine(), 0));
          },
          goDocEnd: function goDocEnd(cm) {
            return cm.extendSelection(Pos(cm.lastLine()));
          },
          goLineStart: function goLineStart(cm) {
            return cm.extendSelectionsBy(function (range2) {
              return lineStart(cm, range2.head.line);
            }, {
              origin: "+move",
              bias: 1
            });
          },
          goLineStartSmart: function goLineStartSmart(cm) {
            return cm.extendSelectionsBy(function (range2) {
              return lineStartSmart(cm, range2.head);
            }, {
              origin: "+move",
              bias: 1
            });
          },
          goLineEnd: function goLineEnd(cm) {
            return cm.extendSelectionsBy(function (range2) {
              return lineEnd(cm, range2.head.line);
            }, {
              origin: "+move",
              bias: -1
            });
          },
          goLineRight: function goLineRight(cm) {
            return cm.extendSelectionsBy(function (range2) {
              var top = cm.cursorCoords(range2.head, "div").top + 5;
              return cm.coordsChar({
                left: cm.display.lineDiv.offsetWidth + 100,
                top
              }, "div");
            }, sel_move);
          },
          goLineLeft: function goLineLeft(cm) {
            return cm.extendSelectionsBy(function (range2) {
              var top = cm.cursorCoords(range2.head, "div").top + 5;
              return cm.coordsChar({
                left: 0,
                top
              }, "div");
            }, sel_move);
          },
          goLineLeftSmart: function goLineLeftSmart(cm) {
            return cm.extendSelectionsBy(function (range2) {
              var top = cm.cursorCoords(range2.head, "div").top + 5;
              var pos = cm.coordsChar({
                left: 0,
                top
              }, "div");

              if (pos.ch < cm.getLine(pos.line).search(/\S/)) {
                return lineStartSmart(cm, range2.head);
              }

              return pos;
            }, sel_move);
          },
          goLineUp: function goLineUp(cm) {
            return cm.moveV(-1, "line");
          },
          goLineDown: function goLineDown(cm) {
            return cm.moveV(1, "line");
          },
          goPageUp: function goPageUp(cm) {
            return cm.moveV(-1, "page");
          },
          goPageDown: function goPageDown(cm) {
            return cm.moveV(1, "page");
          },
          goCharLeft: function goCharLeft(cm) {
            return cm.moveH(-1, "char");
          },
          goCharRight: function goCharRight(cm) {
            return cm.moveH(1, "char");
          },
          goColumnLeft: function goColumnLeft(cm) {
            return cm.moveH(-1, "column");
          },
          goColumnRight: function goColumnRight(cm) {
            return cm.moveH(1, "column");
          },
          goWordLeft: function goWordLeft(cm) {
            return cm.moveH(-1, "word");
          },
          goGroupRight: function goGroupRight(cm) {
            return cm.moveH(1, "group");
          },
          goGroupLeft: function goGroupLeft(cm) {
            return cm.moveH(-1, "group");
          },
          goWordRight: function goWordRight(cm) {
            return cm.moveH(1, "word");
          },
          delCharBefore: function delCharBefore(cm) {
            return cm.deleteH(-1, "codepoint");
          },
          delCharAfter: function delCharAfter(cm) {
            return cm.deleteH(1, "char");
          },
          delWordBefore: function delWordBefore(cm) {
            return cm.deleteH(-1, "word");
          },
          delWordAfter: function delWordAfter(cm) {
            return cm.deleteH(1, "word");
          },
          delGroupBefore: function delGroupBefore(cm) {
            return cm.deleteH(-1, "group");
          },
          delGroupAfter: function delGroupAfter(cm) {
            return cm.deleteH(1, "group");
          },
          indentAuto: function indentAuto(cm) {
            return cm.indentSelection("smart");
          },
          indentMore: function indentMore(cm) {
            return cm.indentSelection("add");
          },
          indentLess: function indentLess(cm) {
            return cm.indentSelection("subtract");
          },
          insertTab: function insertTab(cm) {
            return cm.replaceSelection("	");
          },
          insertSoftTab: function insertSoftTab(cm) {
            var spaces = [],
                ranges = cm.listSelections(),
                tabSize = cm.options.tabSize;

            for (var i2 = 0; i2 < ranges.length; i2++) {
              var pos = ranges[i2].from();
              var col = countColumn(cm.getLine(pos.line), pos.ch, tabSize);
              spaces.push(spaceStr(tabSize - col % tabSize));
            }

            cm.replaceSelections(spaces);
          },
          defaultTab: function defaultTab(cm) {
            if (cm.somethingSelected()) {
              cm.indentSelection("add");
            } else {
              cm.execCommand("insertTab");
            }
          },
          transposeChars: function transposeChars(cm) {
            return runInOp(cm, function () {
              var ranges = cm.listSelections(),
                  newSel = [];

              for (var i2 = 0; i2 < ranges.length; i2++) {
                if (!ranges[i2].empty()) {
                  continue;
                }

                var cur = ranges[i2].head,
                    line = getLine(cm.doc, cur.line).text;

                if (line) {
                  if (cur.ch == line.length) {
                    cur = new Pos(cur.line, cur.ch - 1);
                  }

                  if (cur.ch > 0) {
                    cur = new Pos(cur.line, cur.ch + 1);
                    cm.replaceRange(line.charAt(cur.ch - 1) + line.charAt(cur.ch - 2), Pos(cur.line, cur.ch - 2), cur, "+transpose");
                  } else if (cur.line > cm.doc.first) {
                    var prev = getLine(cm.doc, cur.line - 1).text;

                    if (prev) {
                      cur = new Pos(cur.line, 1);
                      cm.replaceRange(line.charAt(0) + cm.doc.lineSeparator() + prev.charAt(prev.length - 1), Pos(cur.line - 1, prev.length - 1), cur, "+transpose");
                    }
                  }
                }

                newSel.push(new Range(cur, cur));
              }

              cm.setSelections(newSel);
            });
          },
          newlineAndIndent: function newlineAndIndent(cm) {
            return runInOp(cm, function () {
              var sels = cm.listSelections();

              for (var i2 = sels.length - 1; i2 >= 0; i2--) {
                cm.replaceRange(cm.doc.lineSeparator(), sels[i2].anchor, sels[i2].head, "+input");
              }

              sels = cm.listSelections();

              for (var i$12 = 0; i$12 < sels.length; i$12++) {
                cm.indentLine(sels[i$12].from().line, null, true);
              }

              ensureCursorVisible(cm);
            });
          },
          openLine: function openLine(cm) {
            return cm.replaceSelection("\n", "start");
          },
          toggleOverwrite: function toggleOverwrite(cm) {
            return cm.toggleOverwrite();
          }
        };

        function lineStart(cm, lineN) {
          var line = getLine(cm.doc, lineN);
          var visual = visualLine(line);

          if (visual != line) {
            lineN = lineNo(visual);
          }

          return endOfLine(true, cm, visual, lineN, 1);
        }

        function lineEnd(cm, lineN) {
          var line = getLine(cm.doc, lineN);
          var visual = visualLineEnd(line);

          if (visual != line) {
            lineN = lineNo(visual);
          }

          return endOfLine(true, cm, line, lineN, -1);
        }

        function lineStartSmart(cm, pos) {
          var start = lineStart(cm, pos.line);
          var line = getLine(cm.doc, start.line);
          var order = getOrder(line, cm.doc.direction);

          if (!order || order[0].level == 0) {
            var firstNonWS = Math.max(start.ch, line.text.search(/\S/));
            var inWS = pos.line == start.line && pos.ch <= firstNonWS && pos.ch;
            return Pos(start.line, inWS ? 0 : firstNonWS, start.sticky);
          }

          return start;
        }

        function doHandleBinding(cm, bound, dropShift) {
          if (typeof bound == "string") {
            bound = commands[bound];

            if (!bound) {
              return false;
            }
          }

          cm.display.input.ensurePolled();
          var prevShift = cm.display.shift,
              done = false;

          try {
            if (cm.isReadOnly()) {
              cm.state.suppressEdits = true;
            }

            if (dropShift) {
              cm.display.shift = false;
            }

            done = bound(cm) != Pass;
          } finally {
            cm.display.shift = prevShift;
            cm.state.suppressEdits = false;
          }

          return done;
        }

        function lookupKeyForEditor(cm, name, handle) {
          for (var i2 = 0; i2 < cm.state.keyMaps.length; i2++) {
            var result = lookupKey(name, cm.state.keyMaps[i2], handle, cm);

            if (result) {
              return result;
            }
          }

          return cm.options.extraKeys && lookupKey(name, cm.options.extraKeys, handle, cm) || lookupKey(name, cm.options.keyMap, handle, cm);
        }

        var stopSeq = new Delayed();

        function dispatchKey(cm, name, e, handle) {
          var seq = cm.state.keySeq;

          if (seq) {
            if (isModifierKey(name)) {
              return "handled";
            }

            if (/\'$/.test(name)) {
              cm.state.keySeq = null;
            } else {
              stopSeq.set(50, function () {
                if (cm.state.keySeq == seq) {
                  cm.state.keySeq = null;
                  cm.display.input.reset();
                }
              });
            }

            if (dispatchKeyInner(cm, seq + " " + name, e, handle)) {
              return true;
            }
          }

          return dispatchKeyInner(cm, name, e, handle);
        }

        function dispatchKeyInner(cm, name, e, handle) {
          var result = lookupKeyForEditor(cm, name, handle);

          if (result == "multi") {
            cm.state.keySeq = name;
          }

          if (result == "handled") {
            signalLater(cm, "keyHandled", cm, name, e);
          }

          if (result == "handled" || result == "multi") {
            e_preventDefault(e);
            restartBlink(cm);
          }

          return !!result;
        }

        function handleKeyBinding(cm, e) {
          var name = keyName(e, true);

          if (!name) {
            return false;
          }

          if (e.shiftKey && !cm.state.keySeq) {
            return dispatchKey(cm, "Shift-" + name, e, function (b) {
              return doHandleBinding(cm, b, true);
            }) || dispatchKey(cm, name, e, function (b) {
              if (typeof b == "string" ? /^go[A-Z]/.test(b) : b.motion) {
                return doHandleBinding(cm, b);
              }
            });
          } else {
            return dispatchKey(cm, name, e, function (b) {
              return doHandleBinding(cm, b);
            });
          }
        }

        function handleCharBinding(cm, e, ch) {
          return dispatchKey(cm, "'" + ch + "'", e, function (b) {
            return doHandleBinding(cm, b, true);
          });
        }

        var lastStoppedKey = null;

        function onKeyDown(e) {
          var cm = this;

          if (e.target && e.target != cm.display.input.getField()) {
            return;
          }

          cm.curOp.focus = activeElt();

          if (signalDOMEvent(cm, e)) {
            return;
          }

          if (ie && ie_version < 11 && e.keyCode == 27) {
            e.returnValue = false;
          }

          var code = e.keyCode;
          cm.display.shift = code == 16 || e.shiftKey;
          var handled = handleKeyBinding(cm, e);

          if (presto) {
            lastStoppedKey = handled ? code : null;

            if (!handled && code == 88 && !hasCopyEvent && (mac ? e.metaKey : e.ctrlKey)) {
              cm.replaceSelection("", null, "cut");
            }
          }

          if (gecko && !mac && !handled && code == 46 && e.shiftKey && !e.ctrlKey && document.execCommand) {
            document.execCommand("cut");
          }

          if (code == 18 && !/\bCodeMirror-crosshair\b/.test(cm.display.lineDiv.className)) {
            showCrossHair(cm);
          }
        }

        function showCrossHair(cm) {
          var lineDiv = cm.display.lineDiv;
          addClass(lineDiv, "CodeMirror-crosshair");

          function up(e) {
            if (e.keyCode == 18 || !e.altKey) {
              rmClass(lineDiv, "CodeMirror-crosshair");
              off(document, "keyup", up);
              off(document, "mouseover", up);
            }
          }

          on(document, "keyup", up);
          on(document, "mouseover", up);
        }

        function onKeyUp(e) {
          if (e.keyCode == 16) {
            this.doc.sel.shift = false;
          }

          signalDOMEvent(this, e);
        }

        function onKeyPress(e) {
          var cm = this;

          if (e.target && e.target != cm.display.input.getField()) {
            return;
          }

          if (eventInWidget(cm.display, e) || signalDOMEvent(cm, e) || e.ctrlKey && !e.altKey || mac && e.metaKey) {
            return;
          }

          var keyCode = e.keyCode,
              charCode = e.charCode;

          if (presto && keyCode == lastStoppedKey) {
            lastStoppedKey = null;
            e_preventDefault(e);
            return;
          }

          if (presto && (!e.which || e.which < 10) && handleKeyBinding(cm, e)) {
            return;
          }

          var ch = String.fromCharCode(charCode == null ? keyCode : charCode);

          if (ch == "\b") {
            return;
          }

          if (handleCharBinding(cm, e, ch)) {
            return;
          }

          cm.display.input.onKeyPress(e);
        }

        var DOUBLECLICK_DELAY = 400;

        var PastClick = function PastClick(time, pos, button) {
          this.time = time;
          this.pos = pos;
          this.button = button;
        };

        PastClick.prototype.compare = function (time, pos, button) {
          return this.time + DOUBLECLICK_DELAY > time && cmp(pos, this.pos) == 0 && button == this.button;
        };

        var lastClick, lastDoubleClick;

        function clickRepeat(pos, button) {
          var now = +new Date();

          if (lastDoubleClick && lastDoubleClick.compare(now, pos, button)) {
            lastClick = lastDoubleClick = null;
            return "triple";
          } else if (lastClick && lastClick.compare(now, pos, button)) {
            lastDoubleClick = new PastClick(now, pos, button);
            lastClick = null;
            return "double";
          } else {
            lastClick = new PastClick(now, pos, button);
            lastDoubleClick = null;
            return "single";
          }
        }

        function onMouseDown(e) {
          var cm = this,
              display = cm.display;

          if (signalDOMEvent(cm, e) || display.activeTouch && display.input.supportsTouch()) {
            return;
          }

          display.input.ensurePolled();
          display.shift = e.shiftKey;

          if (eventInWidget(display, e)) {
            if (!webkit) {
              display.scroller.draggable = false;
              setTimeout(function () {
                return display.scroller.draggable = true;
              }, 100);
            }

            return;
          }

          if (clickInGutter(cm, e)) {
            return;
          }

          var pos = posFromMouse(cm, e),
              button = e_button(e),
              repeat = pos ? clickRepeat(pos, button) : "single";
          window.focus();

          if (button == 1 && cm.state.selectingText) {
            cm.state.selectingText(e);
          }

          if (pos && handleMappedButton(cm, button, pos, repeat, e)) {
            return;
          }

          if (button == 1) {
            if (pos) {
              leftButtonDown(cm, pos, repeat, e);
            } else if (e_target(e) == display.scroller) {
              e_preventDefault(e);
            }
          } else if (button == 2) {
            if (pos) {
              extendSelection(cm.doc, pos);
            }

            setTimeout(function () {
              return display.input.focus();
            }, 20);
          } else if (button == 3) {
            if (captureRightClick) {
              cm.display.input.onContextMenu(e);
            } else {
              delayBlurEvent(cm);
            }
          }
        }

        function handleMappedButton(cm, button, pos, repeat, event) {
          var name = "Click";

          if (repeat == "double") {
            name = "Double" + name;
          } else if (repeat == "triple") {
            name = "Triple" + name;
          }

          name = (button == 1 ? "Left" : button == 2 ? "Middle" : "Right") + name;
          return dispatchKey(cm, addModifierNames(name, event), event, function (bound) {
            if (typeof bound == "string") {
              bound = commands[bound];
            }

            if (!bound) {
              return false;
            }

            var done = false;

            try {
              if (cm.isReadOnly()) {
                cm.state.suppressEdits = true;
              }

              done = bound(cm, pos) != Pass;
            } finally {
              cm.state.suppressEdits = false;
            }

            return done;
          });
        }

        function configureMouse(cm, repeat, event) {
          var option = cm.getOption("configureMouse");
          var value = option ? option(cm, repeat, event) : {};

          if (value.unit == null) {
            var rect = chromeOS ? event.shiftKey && event.metaKey : event.altKey;
            value.unit = rect ? "rectangle" : repeat == "single" ? "char" : repeat == "double" ? "word" : "line";
          }

          if (value.extend == null || cm.doc.extend) {
            value.extend = cm.doc.extend || event.shiftKey;
          }

          if (value.addNew == null) {
            value.addNew = mac ? event.metaKey : event.ctrlKey;
          }

          if (value.moveOnDrag == null) {
            value.moveOnDrag = !(mac ? event.altKey : event.ctrlKey);
          }

          return value;
        }

        function leftButtonDown(cm, pos, repeat, event) {
          if (ie) {
            setTimeout(bind(ensureFocus, cm), 0);
          } else {
            cm.curOp.focus = activeElt();
          }

          var behavior = configureMouse(cm, repeat, event);
          var sel = cm.doc.sel,
              contained;

          if (cm.options.dragDrop && dragAndDrop && !cm.isReadOnly() && repeat == "single" && (contained = sel.contains(pos)) > -1 && (cmp((contained = sel.ranges[contained]).from(), pos) < 0 || pos.xRel > 0) && (cmp(contained.to(), pos) > 0 || pos.xRel < 0)) {
            leftButtonStartDrag(cm, event, pos, behavior);
          } else {
            leftButtonSelect(cm, event, pos, behavior);
          }
        }

        function leftButtonStartDrag(cm, event, pos, behavior) {
          var display = cm.display,
              moved = false;
          var dragEnd = operation(cm, function (e) {
            if (webkit) {
              display.scroller.draggable = false;
            }

            cm.state.draggingText = false;

            if (cm.state.delayingBlurEvent) {
              if (cm.hasFocus()) {
                cm.state.delayingBlurEvent = false;
              } else {
                delayBlurEvent(cm);
              }
            }

            off(display.wrapper.ownerDocument, "mouseup", dragEnd);
            off(display.wrapper.ownerDocument, "mousemove", mouseMove);
            off(display.scroller, "dragstart", dragStart);
            off(display.scroller, "drop", dragEnd);

            if (!moved) {
              e_preventDefault(e);

              if (!behavior.addNew) {
                extendSelection(cm.doc, pos, null, null, behavior.extend);
              }

              if (webkit && !safari || ie && ie_version == 9) {
                setTimeout(function () {
                  display.wrapper.ownerDocument.body.focus({
                    preventScroll: true
                  });
                  display.input.focus();
                }, 20);
              } else {
                display.input.focus();
              }
            }
          });

          var mouseMove = function mouseMove(e2) {
            moved = moved || Math.abs(event.clientX - e2.clientX) + Math.abs(event.clientY - e2.clientY) >= 10;
          };

          var dragStart = function dragStart() {
            return moved = true;
          };

          if (webkit) {
            display.scroller.draggable = true;
          }

          cm.state.draggingText = dragEnd;
          dragEnd.copy = !behavior.moveOnDrag;
          on(display.wrapper.ownerDocument, "mouseup", dragEnd);
          on(display.wrapper.ownerDocument, "mousemove", mouseMove);
          on(display.scroller, "dragstart", dragStart);
          on(display.scroller, "drop", dragEnd);
          cm.state.delayingBlurEvent = true;
          setTimeout(function () {
            return display.input.focus();
          }, 20);

          if (display.scroller.dragDrop) {
            display.scroller.dragDrop();
          }
        }

        function rangeForUnit(cm, pos, unit) {
          if (unit == "char") {
            return new Range(pos, pos);
          }

          if (unit == "word") {
            return cm.findWordAt(pos);
          }

          if (unit == "line") {
            return new Range(Pos(pos.line, 0), _clipPos(cm.doc, Pos(pos.line + 1, 0)));
          }

          var result = unit(cm, pos);
          return new Range(result.from, result.to);
        }

        function leftButtonSelect(cm, event, start, behavior) {
          if (ie) {
            delayBlurEvent(cm);
          }

          var display = cm.display,
              doc = cm.doc;
          e_preventDefault(event);
          var ourRange,
              ourIndex,
              startSel = doc.sel,
              ranges = startSel.ranges;

          if (behavior.addNew && !behavior.extend) {
            ourIndex = doc.sel.contains(start);

            if (ourIndex > -1) {
              ourRange = ranges[ourIndex];
            } else {
              ourRange = new Range(start, start);
            }
          } else {
            ourRange = doc.sel.primary();
            ourIndex = doc.sel.primIndex;
          }

          if (behavior.unit == "rectangle") {
            if (!behavior.addNew) {
              ourRange = new Range(start, start);
            }

            start = posFromMouse(cm, event, true, true);
            ourIndex = -1;
          } else {
            var range2 = rangeForUnit(cm, start, behavior.unit);

            if (behavior.extend) {
              ourRange = extendRange(ourRange, range2.anchor, range2.head, behavior.extend);
            } else {
              ourRange = range2;
            }
          }

          if (!behavior.addNew) {
            ourIndex = 0;
            setSelection(doc, new Selection([ourRange], 0), sel_mouse);
            startSel = doc.sel;
          } else if (ourIndex == -1) {
            ourIndex = ranges.length;
            setSelection(doc, normalizeSelection(cm, ranges.concat([ourRange]), ourIndex), {
              scroll: false,
              origin: "*mouse"
            });
          } else if (ranges.length > 1 && ranges[ourIndex].empty() && behavior.unit == "char" && !behavior.extend) {
            setSelection(doc, normalizeSelection(cm, ranges.slice(0, ourIndex).concat(ranges.slice(ourIndex + 1)), 0), {
              scroll: false,
              origin: "*mouse"
            });
            startSel = doc.sel;
          } else {
            replaceOneSelection(doc, ourIndex, ourRange, sel_mouse);
          }

          var lastPos = start;

          function extendTo(pos) {
            if (cmp(lastPos, pos) == 0) {
              return;
            }

            lastPos = pos;

            if (behavior.unit == "rectangle") {
              var ranges2 = [],
                  tabSize = cm.options.tabSize;
              var startCol = countColumn(getLine(doc, start.line).text, start.ch, tabSize);
              var posCol = countColumn(getLine(doc, pos.line).text, pos.ch, tabSize);
              var left = Math.min(startCol, posCol),
                  right = Math.max(startCol, posCol);

              for (var line = Math.min(start.line, pos.line), end = Math.min(cm.lastLine(), Math.max(start.line, pos.line)); line <= end; line++) {
                var text = getLine(doc, line).text,
                    leftPos = findColumn(text, left, tabSize);

                if (left == right) {
                  ranges2.push(new Range(Pos(line, leftPos), Pos(line, leftPos)));
                } else if (text.length > leftPos) {
                  ranges2.push(new Range(Pos(line, leftPos), Pos(line, findColumn(text, right, tabSize))));
                }
              }

              if (!ranges2.length) {
                ranges2.push(new Range(start, start));
              }

              setSelection(doc, normalizeSelection(cm, startSel.ranges.slice(0, ourIndex).concat(ranges2), ourIndex), {
                origin: "*mouse",
                scroll: false
              });
              cm.scrollIntoView(pos);
            } else {
              var oldRange = ourRange;
              var range3 = rangeForUnit(cm, pos, behavior.unit);
              var anchor = oldRange.anchor,
                  head;

              if (cmp(range3.anchor, anchor) > 0) {
                head = range3.head;
                anchor = minPos(oldRange.from(), range3.anchor);
              } else {
                head = range3.anchor;
                anchor = maxPos(oldRange.to(), range3.head);
              }

              var ranges$1 = startSel.ranges.slice(0);
              ranges$1[ourIndex] = bidiSimplify(cm, new Range(_clipPos(doc, anchor), head));
              setSelection(doc, normalizeSelection(cm, ranges$1, ourIndex), sel_mouse);
            }
          }

          var editorSize = display.wrapper.getBoundingClientRect();
          var counter = 0;

          function extend(e) {
            var curCount = ++counter;
            var cur = posFromMouse(cm, e, true, behavior.unit == "rectangle");

            if (!cur) {
              return;
            }

            if (cmp(cur, lastPos) != 0) {
              cm.curOp.focus = activeElt();
              extendTo(cur);
              var visible = visibleLines(display, doc);

              if (cur.line >= visible.to || cur.line < visible.from) {
                setTimeout(operation(cm, function () {
                  if (counter == curCount) {
                    extend(e);
                  }
                }), 150);
              }
            } else {
              var outside = e.clientY < editorSize.top ? -20 : e.clientY > editorSize.bottom ? 20 : 0;

              if (outside) {
                setTimeout(operation(cm, function () {
                  if (counter != curCount) {
                    return;
                  }

                  display.scroller.scrollTop += outside;
                  extend(e);
                }), 50);
              }
            }
          }

          function done(e) {
            cm.state.selectingText = false;
            counter = Infinity;

            if (e) {
              e_preventDefault(e);
              display.input.focus();
            }

            off(display.wrapper.ownerDocument, "mousemove", move);
            off(display.wrapper.ownerDocument, "mouseup", up);
            doc.history.lastSelOrigin = null;
          }

          var move = operation(cm, function (e) {
            if (e.buttons === 0 || !e_button(e)) {
              done(e);
            } else {
              extend(e);
            }
          });
          var up = operation(cm, done);
          cm.state.selectingText = up;
          on(display.wrapper.ownerDocument, "mousemove", move);
          on(display.wrapper.ownerDocument, "mouseup", up);
        }

        function bidiSimplify(cm, range2) {
          var anchor = range2.anchor;
          var head = range2.head;
          var anchorLine = getLine(cm.doc, anchor.line);

          if (cmp(anchor, head) == 0 && anchor.sticky == head.sticky) {
            return range2;
          }

          var order = getOrder(anchorLine);

          if (!order) {
            return range2;
          }

          var index = getBidiPartAt(order, anchor.ch, anchor.sticky),
              part = order[index];

          if (part.from != anchor.ch && part.to != anchor.ch) {
            return range2;
          }

          var boundary = index + (part.from == anchor.ch == (part.level != 1) ? 0 : 1);

          if (boundary == 0 || boundary == order.length) {
            return range2;
          }

          var leftSide;

          if (head.line != anchor.line) {
            leftSide = (head.line - anchor.line) * (cm.doc.direction == "ltr" ? 1 : -1) > 0;
          } else {
            var headIndex = getBidiPartAt(order, head.ch, head.sticky);
            var dir = headIndex - index || (head.ch - anchor.ch) * (part.level == 1 ? -1 : 1);

            if (headIndex == boundary - 1 || headIndex == boundary) {
              leftSide = dir < 0;
            } else {
              leftSide = dir > 0;
            }
          }

          var usePart = order[boundary + (leftSide ? -1 : 0)];
          var from = leftSide == (usePart.level == 1);
          var ch = from ? usePart.from : usePart.to,
              sticky = from ? "after" : "before";
          return anchor.ch == ch && anchor.sticky == sticky ? range2 : new Range(new Pos(anchor.line, ch, sticky), head);
        }

        function gutterEvent(cm, e, type, prevent) {
          var mX, mY;

          if (e.touches) {
            mX = e.touches[0].clientX;
            mY = e.touches[0].clientY;
          } else {
            try {
              mX = e.clientX;
              mY = e.clientY;
            } catch (e$1) {
              return false;
            }
          }

          if (mX >= Math.floor(cm.display.gutters.getBoundingClientRect().right)) {
            return false;
          }

          if (prevent) {
            e_preventDefault(e);
          }

          var display = cm.display;
          var lineBox = display.lineDiv.getBoundingClientRect();

          if (mY > lineBox.bottom || !hasHandler(cm, type)) {
            return e_defaultPrevented(e);
          }

          mY -= lineBox.top - display.viewOffset;

          for (var i2 = 0; i2 < cm.display.gutterSpecs.length; ++i2) {
            var g = display.gutters.childNodes[i2];

            if (g && g.getBoundingClientRect().right >= mX) {
              var line = _lineAtHeight(cm.doc, mY);

              var gutter = cm.display.gutterSpecs[i2];
              signal(cm, type, cm, line, gutter.className, e);
              return e_defaultPrevented(e);
            }
          }
        }

        function clickInGutter(cm, e) {
          return gutterEvent(cm, e, "gutterClick", true);
        }

        function onContextMenu(cm, e) {
          if (eventInWidget(cm.display, e) || contextMenuInGutter(cm, e)) {
            return;
          }

          if (signalDOMEvent(cm, e, "contextmenu")) {
            return;
          }

          if (!captureRightClick) {
            cm.display.input.onContextMenu(e);
          }
        }

        function contextMenuInGutter(cm, e) {
          if (!hasHandler(cm, "gutterContextMenu")) {
            return false;
          }

          return gutterEvent(cm, e, "gutterContextMenu", false);
        }

        function themeChanged(cm) {
          cm.display.wrapper.className = cm.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") + cm.options.theme.replace(/(^|\s)\s*/g, " cm-s-");
          clearCaches(cm);
        }

        var Init = {
          toString: function toString() {
            return "CodeMirror.Init";
          }
        };
        var defaults = {};
        var optionHandlers = {};

        function defineOptions(CodeMirror4) {
          var optionHandlers2 = CodeMirror4.optionHandlers;

          function option(name, deflt, handle, notOnInit) {
            CodeMirror4.defaults[name] = deflt;

            if (handle) {
              optionHandlers2[name] = notOnInit ? function (cm, val, old) {
                if (old != Init) {
                  handle(cm, val, old);
                }
              } : handle;
            }
          }

          CodeMirror4.defineOption = option;
          CodeMirror4.Init = Init;
          option("value", "", function (cm, val) {
            return cm.setValue(val);
          }, true);
          option("mode", null, function (cm, val) {
            cm.doc.modeOption = val;
            loadMode(cm);
          }, true);
          option("indentUnit", 2, loadMode, true);
          option("indentWithTabs", false);
          option("smartIndent", true);
          option("tabSize", 4, function (cm) {
            resetModeState(cm);
            clearCaches(cm);
            regChange(cm);
          }, true);
          option("lineSeparator", null, function (cm, val) {
            cm.doc.lineSep = val;

            if (!val) {
              return;
            }

            var newBreaks = [],
                lineNo2 = cm.doc.first;
            cm.doc.iter(function (line) {
              for (var pos = 0;;) {
                var found = line.text.indexOf(val, pos);

                if (found == -1) {
                  break;
                }

                pos = found + val.length;
                newBreaks.push(Pos(lineNo2, found));
              }

              lineNo2++;
            });

            for (var i2 = newBreaks.length - 1; i2 >= 0; i2--) {
              _replaceRange(cm.doc, val, newBreaks[i2], Pos(newBreaks[i2].line, newBreaks[i2].ch + val.length));
            }
          });
          option("specialChars", /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b\u200e\u200f\u2028\u2029\ufeff\ufff9-\ufffc]/g, function (cm, val, old) {
            cm.state.specialChars = new RegExp(val.source + (val.test("	") ? "" : "|	"), "g");

            if (old != Init) {
              cm.refresh();
            }
          });
          option("specialCharPlaceholder", defaultSpecialCharPlaceholder, function (cm) {
            return cm.refresh();
          }, true);
          option("electricChars", true);
          option("inputStyle", mobile ? "contenteditable" : "textarea", function () {
            throw new Error("inputStyle can not (yet) be changed in a running editor");
          }, true);
          option("spellcheck", false, function (cm, val) {
            return cm.getInputField().spellcheck = val;
          }, true);
          option("autocorrect", false, function (cm, val) {
            return cm.getInputField().autocorrect = val;
          }, true);
          option("autocapitalize", false, function (cm, val) {
            return cm.getInputField().autocapitalize = val;
          }, true);
          option("rtlMoveVisually", !windows);
          option("wholeLineUpdateBefore", true);
          option("theme", "default", function (cm) {
            themeChanged(cm);
            updateGutters(cm);
          }, true);
          option("keyMap", "default", function (cm, val, old) {
            var next = getKeyMap(val);
            var prev = old != Init && getKeyMap(old);

            if (prev && prev.detach) {
              prev.detach(cm, next);
            }

            if (next.attach) {
              next.attach(cm, prev || null);
            }
          });
          option("extraKeys", null);
          option("configureMouse", null);
          option("lineWrapping", false, wrappingChanged, true);
          option("gutters", [], function (cm, val) {
            cm.display.gutterSpecs = getGutters(val, cm.options.lineNumbers);
            updateGutters(cm);
          }, true);
          option("fixedGutter", true, function (cm, val) {
            cm.display.gutters.style.left = val ? compensateForHScroll(cm.display) + "px" : "0";
            cm.refresh();
          }, true);
          option("coverGutterNextToScrollbar", false, function (cm) {
            return updateScrollbars(cm);
          }, true);
          option("scrollbarStyle", "native", function (cm) {
            initScrollbars(cm);
            updateScrollbars(cm);
            cm.display.scrollbars.setScrollTop(cm.doc.scrollTop);
            cm.display.scrollbars.setScrollLeft(cm.doc.scrollLeft);
          }, true);
          option("lineNumbers", false, function (cm, val) {
            cm.display.gutterSpecs = getGutters(cm.options.gutters, val);
            updateGutters(cm);
          }, true);
          option("firstLineNumber", 1, updateGutters, true);
          option("lineNumberFormatter", function (integer) {
            return integer;
          }, updateGutters, true);
          option("showCursorWhenSelecting", false, updateSelection, true);
          option("resetSelectionOnContextMenu", true);
          option("lineWiseCopyCut", true);
          option("pasteLinesPerSelection", true);
          option("selectionsMayTouch", false);
          option("readOnly", false, function (cm, val) {
            if (val == "nocursor") {
              onBlur(cm);
              cm.display.input.blur();
            }

            cm.display.input.readOnlyChanged(val);
          });
          option("screenReaderLabel", null, function (cm, val) {
            val = val === "" ? null : val;
            cm.display.input.screenReaderLabelChanged(val);
          });
          option("disableInput", false, function (cm, val) {
            if (!val) {
              cm.display.input.reset();
            }
          }, true);
          option("dragDrop", true, dragDropChanged);
          option("allowDropFileTypes", null);
          option("cursorBlinkRate", 530);
          option("cursorScrollMargin", 0);
          option("cursorHeight", 1, updateSelection, true);
          option("singleCursorHeightPerLine", true, updateSelection, true);
          option("workTime", 100);
          option("workDelay", 100);
          option("flattenSpans", true, resetModeState, true);
          option("addModeClass", false, resetModeState, true);
          option("pollInterval", 100);
          option("undoDepth", 200, function (cm, val) {
            return cm.doc.history.undoDepth = val;
          });
          option("historyEventDelay", 1250);
          option("viewportMargin", 10, function (cm) {
            return cm.refresh();
          }, true);
          option("maxHighlightLength", 1e4, resetModeState, true);
          option("moveInputWithCursor", true, function (cm, val) {
            if (!val) {
              cm.display.input.resetPosition();
            }
          });
          option("tabindex", null, function (cm, val) {
            return cm.display.input.getField().tabIndex = val || "";
          });
          option("autofocus", null);
          option("direction", "ltr", function (cm, val) {
            return cm.doc.setDirection(val);
          }, true);
          option("phrases", null);
        }

        function dragDropChanged(cm, value, old) {
          var wasOn = old && old != Init;

          if (!value != !wasOn) {
            var funcs = cm.display.dragFunctions;
            var toggle = value ? on : off;
            toggle(cm.display.scroller, "dragstart", funcs.start);
            toggle(cm.display.scroller, "dragenter", funcs.enter);
            toggle(cm.display.scroller, "dragover", funcs.over);
            toggle(cm.display.scroller, "dragleave", funcs.leave);
            toggle(cm.display.scroller, "drop", funcs.drop);
          }
        }

        function wrappingChanged(cm) {
          if (cm.options.lineWrapping) {
            addClass(cm.display.wrapper, "CodeMirror-wrap");
            cm.display.sizer.style.minWidth = "";
            cm.display.sizerWidth = null;
          } else {
            rmClass(cm.display.wrapper, "CodeMirror-wrap");
            findMaxLine(cm);
          }

          estimateLineHeights(cm);
          regChange(cm);
          clearCaches(cm);
          setTimeout(function () {
            return updateScrollbars(cm);
          }, 100);
        }

        function CodeMirror3(place, options) {
          var this$1 = this;

          if (!(this instanceof CodeMirror3)) {
            return new CodeMirror3(place, options);
          }

          this.options = options = options ? copyObj(options) : {};
          copyObj(defaults, options, false);
          var doc = options.value;

          if (typeof doc == "string") {
            doc = new Doc(doc, options.mode, null, options.lineSeparator, options.direction);
          } else if (options.mode) {
            doc.modeOption = options.mode;
          }

          this.doc = doc;
          var input = new CodeMirror3.inputStyles[options.inputStyle](this);
          var display = this.display = new Display(place, doc, input, options);
          display.wrapper.CodeMirror = this;
          themeChanged(this);

          if (options.lineWrapping) {
            this.display.wrapper.className += " CodeMirror-wrap";
          }

          initScrollbars(this);
          this.state = {
            keyMaps: [],
            overlays: [],
            modeGen: 0,
            overwrite: false,
            delayingBlurEvent: false,
            focused: false,
            suppressEdits: false,
            pasteIncoming: -1,
            cutIncoming: -1,
            selectingText: false,
            draggingText: false,
            highlight: new Delayed(),
            keySeq: null,
            specialChars: null
          };

          if (options.autofocus && !mobile) {
            display.input.focus();
          }

          if (ie && ie_version < 11) {
            setTimeout(function () {
              return this$1.display.input.reset(true);
            }, 20);
          }

          registerEventHandlers(this);
          ensureGlobalHandlers();

          _startOperation(this);

          this.curOp.forceUpdate = true;
          attachDoc(this, doc);

          if (options.autofocus && !mobile || this.hasFocus()) {
            setTimeout(function () {
              if (this$1.hasFocus() && !this$1.state.focused) {
                onFocus(this$1);
              }
            }, 20);
          } else {
            onBlur(this);
          }

          for (var opt in optionHandlers) {
            if (optionHandlers.hasOwnProperty(opt)) {
              optionHandlers[opt](this, options[opt], Init);
            }
          }

          maybeUpdateLineNumberWidth(this);

          if (options.finishInit) {
            options.finishInit(this);
          }

          for (var i2 = 0; i2 < initHooks.length; ++i2) {
            initHooks[i2](this);
          }

          _endOperation(this);

          if (webkit && options.lineWrapping && getComputedStyle(display.lineDiv).textRendering == "optimizelegibility") {
            display.lineDiv.style.textRendering = "auto";
          }
        }

        CodeMirror3.defaults = defaults;
        CodeMirror3.optionHandlers = optionHandlers;

        function registerEventHandlers(cm) {
          var d = cm.display;
          on(d.scroller, "mousedown", operation(cm, onMouseDown));

          if (ie && ie_version < 11) {
            on(d.scroller, "dblclick", operation(cm, function (e) {
              if (signalDOMEvent(cm, e)) {
                return;
              }

              var pos = posFromMouse(cm, e);

              if (!pos || clickInGutter(cm, e) || eventInWidget(cm.display, e)) {
                return;
              }

              e_preventDefault(e);
              var word = cm.findWordAt(pos);
              extendSelection(cm.doc, word.anchor, word.head);
            }));
          } else {
            on(d.scroller, "dblclick", function (e) {
              return signalDOMEvent(cm, e) || e_preventDefault(e);
            });
          }

          on(d.scroller, "contextmenu", function (e) {
            return onContextMenu(cm, e);
          });
          on(d.input.getField(), "contextmenu", function (e) {
            if (!d.scroller.contains(e.target)) {
              onContextMenu(cm, e);
            }
          });
          var touchFinished,
              prevTouch = {
            end: 0
          };

          function finishTouch() {
            if (d.activeTouch) {
              touchFinished = setTimeout(function () {
                return d.activeTouch = null;
              }, 1e3);
              prevTouch = d.activeTouch;
              prevTouch.end = +new Date();
            }
          }

          function isMouseLikeTouchEvent(e) {
            if (e.touches.length != 1) {
              return false;
            }

            var touch = e.touches[0];
            return touch.radiusX <= 1 && touch.radiusY <= 1;
          }

          function farAway(touch, other) {
            if (other.left == null) {
              return true;
            }

            var dx = other.left - touch.left,
                dy = other.top - touch.top;
            return dx * dx + dy * dy > 20 * 20;
          }

          on(d.scroller, "touchstart", function (e) {
            if (!signalDOMEvent(cm, e) && !isMouseLikeTouchEvent(e) && !clickInGutter(cm, e)) {
              d.input.ensurePolled();
              clearTimeout(touchFinished);
              var now = +new Date();
              d.activeTouch = {
                start: now,
                moved: false,
                prev: now - prevTouch.end <= 300 ? prevTouch : null
              };

              if (e.touches.length == 1) {
                d.activeTouch.left = e.touches[0].pageX;
                d.activeTouch.top = e.touches[0].pageY;
              }
            }
          });
          on(d.scroller, "touchmove", function () {
            if (d.activeTouch) {
              d.activeTouch.moved = true;
            }
          });
          on(d.scroller, "touchend", function (e) {
            var touch = d.activeTouch;

            if (touch && !eventInWidget(d, e) && touch.left != null && !touch.moved && new Date() - touch.start < 300) {
              var pos = cm.coordsChar(d.activeTouch, "page"),
                  range2;

              if (!touch.prev || farAway(touch, touch.prev)) {
                range2 = new Range(pos, pos);
              } else if (!touch.prev.prev || farAway(touch, touch.prev.prev)) {
                range2 = cm.findWordAt(pos);
              } else {
                range2 = new Range(Pos(pos.line, 0), _clipPos(cm.doc, Pos(pos.line + 1, 0)));
              }

              cm.setSelection(range2.anchor, range2.head);
              cm.focus();
              e_preventDefault(e);
            }

            finishTouch();
          });
          on(d.scroller, "touchcancel", finishTouch);
          on(d.scroller, "scroll", function () {
            if (d.scroller.clientHeight) {
              updateScrollTop(cm, d.scroller.scrollTop);
              setScrollLeft(cm, d.scroller.scrollLeft, true);
              signal(cm, "scroll", cm);
            }
          });
          on(d.scroller, "mousewheel", function (e) {
            return onScrollWheel(cm, e);
          });
          on(d.scroller, "DOMMouseScroll", function (e) {
            return onScrollWheel(cm, e);
          });
          on(d.wrapper, "scroll", function () {
            return d.wrapper.scrollTop = d.wrapper.scrollLeft = 0;
          });
          d.dragFunctions = {
            enter: function enter(e) {
              if (!signalDOMEvent(cm, e)) {
                e_stop(e);
              }
            },
            over: function over(e) {
              if (!signalDOMEvent(cm, e)) {
                onDragOver(cm, e);
                e_stop(e);
              }
            },
            start: function start(e) {
              return onDragStart(cm, e);
            },
            drop: operation(cm, onDrop),
            leave: function leave(e) {
              if (!signalDOMEvent(cm, e)) {
                clearDragCursor(cm);
              }
            }
          };
          var inp = d.input.getField();
          on(inp, "keyup", function (e) {
            return onKeyUp.call(cm, e);
          });
          on(inp, "keydown", operation(cm, onKeyDown));
          on(inp, "keypress", operation(cm, onKeyPress));
          on(inp, "focus", function (e) {
            return onFocus(cm, e);
          });
          on(inp, "blur", function (e) {
            return onBlur(cm, e);
          });
        }

        var initHooks = [];

        CodeMirror3.defineInitHook = function (f) {
          return initHooks.push(f);
        };

        function indentLine(cm, n, how, aggressive) {
          var doc = cm.doc,
              state;

          if (how == null) {
            how = "add";
          }

          if (how == "smart") {
            if (!doc.mode.indent) {
              how = "prev";
            } else {
              state = getContextBefore(cm, n).state;
            }
          }

          var tabSize = cm.options.tabSize;
          var line = getLine(doc, n),
              curSpace = countColumn(line.text, null, tabSize);

          if (line.stateAfter) {
            line.stateAfter = null;
          }

          var curSpaceString = line.text.match(/^\s*/)[0],
              indentation;

          if (!aggressive && !/\S/.test(line.text)) {
            indentation = 0;
            how = "not";
          } else if (how == "smart") {
            indentation = doc.mode.indent(state, line.text.slice(curSpaceString.length), line.text);

            if (indentation == Pass || indentation > 150) {
              if (!aggressive) {
                return;
              }

              how = "prev";
            }
          }

          if (how == "prev") {
            if (n > doc.first) {
              indentation = countColumn(getLine(doc, n - 1).text, null, tabSize);
            } else {
              indentation = 0;
            }
          } else if (how == "add") {
            indentation = curSpace + cm.options.indentUnit;
          } else if (how == "subtract") {
            indentation = curSpace - cm.options.indentUnit;
          } else if (typeof how == "number") {
            indentation = curSpace + how;
          }

          indentation = Math.max(0, indentation);
          var indentString = "",
              pos = 0;

          if (cm.options.indentWithTabs) {
            for (var i2 = Math.floor(indentation / tabSize); i2; --i2) {
              pos += tabSize;
              indentString += "	";
            }
          }

          if (pos < indentation) {
            indentString += spaceStr(indentation - pos);
          }

          if (indentString != curSpaceString) {
            _replaceRange(doc, indentString, Pos(n, 0), Pos(n, curSpaceString.length), "+input");

            line.stateAfter = null;
            return true;
          } else {
            for (var i$12 = 0; i$12 < doc.sel.ranges.length; i$12++) {
              var range2 = doc.sel.ranges[i$12];

              if (range2.head.line == n && range2.head.ch < curSpaceString.length) {
                var pos$1 = Pos(n, curSpaceString.length);
                replaceOneSelection(doc, i$12, new Range(pos$1, pos$1));
                break;
              }
            }
          }
        }

        var lastCopied = null;

        function setLastCopied(newLastCopied) {
          lastCopied = newLastCopied;
        }

        function applyTextInput(cm, inserted, deleted, sel, origin) {
          var doc = cm.doc;
          cm.display.shift = false;

          if (!sel) {
            sel = doc.sel;
          }

          var recent = +new Date() - 200;
          var paste = origin == "paste" || cm.state.pasteIncoming > recent;
          var textLines = splitLinesAuto(inserted),
              multiPaste = null;

          if (paste && sel.ranges.length > 1) {
            if (lastCopied && lastCopied.text.join("\n") == inserted) {
              if (sel.ranges.length % lastCopied.text.length == 0) {
                multiPaste = [];

                for (var i2 = 0; i2 < lastCopied.text.length; i2++) {
                  multiPaste.push(doc.splitLines(lastCopied.text[i2]));
                }
              }
            } else if (textLines.length == sel.ranges.length && cm.options.pasteLinesPerSelection) {
              multiPaste = map(textLines, function (l) {
                return [l];
              });
            }
          }

          var updateInput = cm.curOp.updateInput;

          for (var i$12 = sel.ranges.length - 1; i$12 >= 0; i$12--) {
            var range2 = sel.ranges[i$12];
            var from = range2.from(),
                to = range2.to();

            if (range2.empty()) {
              if (deleted && deleted > 0) {
                from = Pos(from.line, from.ch - deleted);
              } else if (cm.state.overwrite && !paste) {
                to = Pos(to.line, Math.min(getLine(doc, to.line).text.length, to.ch + lst(textLines).length));
              } else if (paste && lastCopied && lastCopied.lineWise && lastCopied.text.join("\n") == textLines.join("\n")) {
                from = to = Pos(from.line, 0);
              }
            }

            var changeEvent = {
              from,
              to,
              text: multiPaste ? multiPaste[i$12 % multiPaste.length] : textLines,
              origin: origin || (paste ? "paste" : cm.state.cutIncoming > recent ? "cut" : "+input")
            };
            makeChange(cm.doc, changeEvent);
            signalLater(cm, "inputRead", cm, changeEvent);
          }

          if (inserted && !paste) {
            triggerElectric(cm, inserted);
          }

          ensureCursorVisible(cm);

          if (cm.curOp.updateInput < 2) {
            cm.curOp.updateInput = updateInput;
          }

          cm.curOp.typing = true;
          cm.state.pasteIncoming = cm.state.cutIncoming = -1;
        }

        function handlePaste(e, cm) {
          var pasted = e.clipboardData && e.clipboardData.getData("Text");

          if (pasted) {
            e.preventDefault();

            if (!cm.isReadOnly() && !cm.options.disableInput && cm.hasFocus()) {
              runInOp(cm, function () {
                return applyTextInput(cm, pasted, 0, null, "paste");
              });
            }

            return true;
          }
        }

        function triggerElectric(cm, inserted) {
          if (!cm.options.electricChars || !cm.options.smartIndent) {
            return;
          }

          var sel = cm.doc.sel;

          for (var i2 = sel.ranges.length - 1; i2 >= 0; i2--) {
            var range2 = sel.ranges[i2];

            if (range2.head.ch > 100 || i2 && sel.ranges[i2 - 1].head.line == range2.head.line) {
              continue;
            }

            var mode = cm.getModeAt(range2.head);
            var indented = false;

            if (mode.electricChars) {
              for (var j = 0; j < mode.electricChars.length; j++) {
                if (inserted.indexOf(mode.electricChars.charAt(j)) > -1) {
                  indented = indentLine(cm, range2.head.line, "smart");
                  break;
                }
              }
            } else if (mode.electricInput) {
              if (mode.electricInput.test(getLine(cm.doc, range2.head.line).text.slice(0, range2.head.ch))) {
                indented = indentLine(cm, range2.head.line, "smart");
              }
            }

            if (indented) {
              signalLater(cm, "electricInput", cm, range2.head.line);
            }
          }
        }

        function copyableRanges(cm) {
          var text = [],
              ranges = [];

          for (var i2 = 0; i2 < cm.doc.sel.ranges.length; i2++) {
            var line = cm.doc.sel.ranges[i2].head.line;
            var lineRange = {
              anchor: Pos(line, 0),
              head: Pos(line + 1, 0)
            };
            ranges.push(lineRange);
            text.push(cm.getRange(lineRange.anchor, lineRange.head));
          }

          return {
            text,
            ranges
          };
        }

        function disableBrowserMagic(field, spellcheck, autocorrect, autocapitalize) {
          field.setAttribute("autocorrect", autocorrect ? "" : "off");
          field.setAttribute("autocapitalize", autocapitalize ? "" : "off");
          field.setAttribute("spellcheck", !!spellcheck);
        }

        function hiddenTextarea() {
          var te = elt("textarea", null, null, "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; min-height: 1em; outline: none");
          var div = elt("div", [te], null, "overflow: hidden; position: relative; width: 3px; height: 0px;");

          if (webkit) {
            te.style.width = "1000px";
          } else {
            te.setAttribute("wrap", "off");
          }

          if (ios) {
            te.style.border = "1px solid black";
          }

          disableBrowserMagic(te);
          return div;
        }

        function addEditorMethods(CodeMirror4) {
          var optionHandlers2 = CodeMirror4.optionHandlers;
          var helpers = CodeMirror4.helpers = {};
          CodeMirror4.prototype = {
            constructor: CodeMirror4,
            focus: function focus() {
              window.focus();
              this.display.input.focus();
            },
            setOption: function setOption(option, value) {
              var options = this.options,
                  old = options[option];

              if (options[option] == value && option != "mode") {
                return;
              }

              options[option] = value;

              if (optionHandlers2.hasOwnProperty(option)) {
                operation(this, optionHandlers2[option])(this, value, old);
              }

              signal(this, "optionChange", this, option);
            },
            getOption: function getOption(option) {
              return this.options[option];
            },
            getDoc: function getDoc() {
              return this.doc;
            },
            addKeyMap: function addKeyMap(map2, bottom) {
              this.state.keyMaps[bottom ? "push" : "unshift"](getKeyMap(map2));
            },
            removeKeyMap: function removeKeyMap(map2) {
              var maps = this.state.keyMaps;

              for (var i2 = 0; i2 < maps.length; ++i2) {
                if (maps[i2] == map2 || maps[i2].name == map2) {
                  maps.splice(i2, 1);
                  return true;
                }
              }
            },
            addOverlay: methodOp(function (spec, options) {
              var mode = spec.token ? spec : CodeMirror4.getMode(this.options, spec);

              if (mode.startState) {
                throw new Error("Overlays may not be stateful.");
              }

              insertSorted(this.state.overlays, {
                mode,
                modeSpec: spec,
                opaque: options && options.opaque,
                priority: options && options.priority || 0
              }, function (overlay) {
                return overlay.priority;
              });
              this.state.modeGen++;
              regChange(this);
            }),
            removeOverlay: methodOp(function (spec) {
              var overlays = this.state.overlays;

              for (var i2 = 0; i2 < overlays.length; ++i2) {
                var cur = overlays[i2].modeSpec;

                if (cur == spec || typeof spec == "string" && cur.name == spec) {
                  overlays.splice(i2, 1);
                  this.state.modeGen++;
                  regChange(this);
                  return;
                }
              }
            }),
            indentLine: methodOp(function (n, dir, aggressive) {
              if (typeof dir != "string" && typeof dir != "number") {
                if (dir == null) {
                  dir = this.options.smartIndent ? "smart" : "prev";
                } else {
                  dir = dir ? "add" : "subtract";
                }
              }

              if (isLine(this.doc, n)) {
                indentLine(this, n, dir, aggressive);
              }
            }),
            indentSelection: methodOp(function (how) {
              var ranges = this.doc.sel.ranges,
                  end = -1;

              for (var i2 = 0; i2 < ranges.length; i2++) {
                var range2 = ranges[i2];

                if (!range2.empty()) {
                  var from = range2.from(),
                      to = range2.to();
                  var start = Math.max(end, from.line);
                  end = Math.min(this.lastLine(), to.line - (to.ch ? 0 : 1)) + 1;

                  for (var j = start; j < end; ++j) {
                    indentLine(this, j, how);
                  }

                  var newRanges = this.doc.sel.ranges;

                  if (from.ch == 0 && ranges.length == newRanges.length && newRanges[i2].from().ch > 0) {
                    replaceOneSelection(this.doc, i2, new Range(from, newRanges[i2].to()), sel_dontScroll);
                  }
                } else if (range2.head.line > end) {
                  indentLine(this, range2.head.line, how, true);
                  end = range2.head.line;

                  if (i2 == this.doc.sel.primIndex) {
                    ensureCursorVisible(this);
                  }
                }
              }
            }),
            getTokenAt: function getTokenAt(pos, precise) {
              return takeToken(this, pos, precise);
            },
            getLineTokens: function getLineTokens(line, precise) {
              return takeToken(this, Pos(line), precise, true);
            },
            getTokenTypeAt: function getTokenTypeAt(pos) {
              pos = _clipPos(this.doc, pos);
              var styles = getLineStyles(this, getLine(this.doc, pos.line));
              var before = 0,
                  after = (styles.length - 1) / 2,
                  ch = pos.ch;
              var type;

              if (ch == 0) {
                type = styles[2];
              } else {
                for (;;) {
                  var mid = before + after >> 1;

                  if ((mid ? styles[mid * 2 - 1] : 0) >= ch) {
                    after = mid;
                  } else if (styles[mid * 2 + 1] < ch) {
                    before = mid + 1;
                  } else {
                    type = styles[mid * 2 + 2];
                    break;
                  }
                }
              }

              var cut = type ? type.indexOf("overlay ") : -1;
              return cut < 0 ? type : cut == 0 ? null : type.slice(0, cut - 1);
            },
            getModeAt: function getModeAt(pos) {
              var mode = this.doc.mode;

              if (!mode.innerMode) {
                return mode;
              }

              return CodeMirror4.innerMode(mode, this.getTokenAt(pos).state).mode;
            },
            getHelper: function getHelper(pos, type) {
              return this.getHelpers(pos, type)[0];
            },
            getHelpers: function getHelpers(pos, type) {
              var found = [];

              if (!helpers.hasOwnProperty(type)) {
                return found;
              }

              var help = helpers[type],
                  mode = this.getModeAt(pos);

              if (typeof mode[type] == "string") {
                if (help[mode[type]]) {
                  found.push(help[mode[type]]);
                }
              } else if (mode[type]) {
                for (var i2 = 0; i2 < mode[type].length; i2++) {
                  var val = help[mode[type][i2]];

                  if (val) {
                    found.push(val);
                  }
                }
              } else if (mode.helperType && help[mode.helperType]) {
                found.push(help[mode.helperType]);
              } else if (help[mode.name]) {
                found.push(help[mode.name]);
              }

              for (var i$12 = 0; i$12 < help._global.length; i$12++) {
                var cur = help._global[i$12];

                if (cur.pred(mode, this) && indexOf(found, cur.val) == -1) {
                  found.push(cur.val);
                }
              }

              return found;
            },
            getStateAfter: function getStateAfter(line, precise) {
              var doc = this.doc;
              line = clipLine(doc, line == null ? doc.first + doc.size - 1 : line);
              return getContextBefore(this, line + 1, precise).state;
            },
            cursorCoords: function cursorCoords(start, mode) {
              var pos,
                  range2 = this.doc.sel.primary();

              if (start == null) {
                pos = range2.head;
              } else if (typeof start == "object") {
                pos = _clipPos(this.doc, start);
              } else {
                pos = start ? range2.from() : range2.to();
              }

              return _cursorCoords(this, pos, mode || "page");
            },
            charCoords: function charCoords(pos, mode) {
              return _charCoords(this, _clipPos(this.doc, pos), mode || "page");
            },
            coordsChar: function coordsChar(coords, mode) {
              coords = fromCoordSystem(this, coords, mode || "page");
              return _coordsChar(this, coords.left, coords.top);
            },
            lineAtHeight: function lineAtHeight(height, mode) {
              height = fromCoordSystem(this, {
                top: height,
                left: 0
              }, mode || "page").top;
              return _lineAtHeight(this.doc, height + this.display.viewOffset);
            },
            heightAtLine: function heightAtLine(line, mode, includeWidgets) {
              var end = false,
                  lineObj;

              if (typeof line == "number") {
                var last = this.doc.first + this.doc.size - 1;

                if (line < this.doc.first) {
                  line = this.doc.first;
                } else if (line > last) {
                  line = last;
                  end = true;
                }

                lineObj = getLine(this.doc, line);
              } else {
                lineObj = line;
              }

              return intoCoordSystem(this, lineObj, {
                top: 0,
                left: 0
              }, mode || "page", includeWidgets || end).top + (end ? this.doc.height - _heightAtLine(lineObj) : 0);
            },
            defaultTextHeight: function defaultTextHeight() {
              return textHeight(this.display);
            },
            defaultCharWidth: function defaultCharWidth() {
              return charWidth(this.display);
            },
            getViewport: function getViewport() {
              return {
                from: this.display.viewFrom,
                to: this.display.viewTo
              };
            },
            addWidget: function addWidget(pos, node, scroll, vert, horiz) {
              var display = this.display;
              pos = _cursorCoords(this, _clipPos(this.doc, pos));
              var top = pos.bottom,
                  left = pos.left;
              node.style.position = "absolute";
              node.setAttribute("cm-ignore-events", "true");
              this.display.input.setUneditable(node);
              display.sizer.appendChild(node);

              if (vert == "over") {
                top = pos.top;
              } else if (vert == "above" || vert == "near") {
                var vspace = Math.max(display.wrapper.clientHeight, this.doc.height),
                    hspace = Math.max(display.sizer.clientWidth, display.lineSpace.clientWidth);

                if ((vert == "above" || pos.bottom + node.offsetHeight > vspace) && pos.top > node.offsetHeight) {
                  top = pos.top - node.offsetHeight;
                } else if (pos.bottom + node.offsetHeight <= vspace) {
                  top = pos.bottom;
                }

                if (left + node.offsetWidth > hspace) {
                  left = hspace - node.offsetWidth;
                }
              }

              node.style.top = top + "px";
              node.style.left = node.style.right = "";

              if (horiz == "right") {
                left = display.sizer.clientWidth - node.offsetWidth;
                node.style.right = "0px";
              } else {
                if (horiz == "left") {
                  left = 0;
                } else if (horiz == "middle") {
                  left = (display.sizer.clientWidth - node.offsetWidth) / 2;
                }

                node.style.left = left + "px";
              }

              if (scroll) {
                scrollIntoView(this, {
                  left,
                  top,
                  right: left + node.offsetWidth,
                  bottom: top + node.offsetHeight
                });
              }
            },
            triggerOnKeyDown: methodOp(onKeyDown),
            triggerOnKeyPress: methodOp(onKeyPress),
            triggerOnKeyUp: onKeyUp,
            triggerOnMouseDown: methodOp(onMouseDown),
            execCommand: function execCommand(cmd) {
              if (commands.hasOwnProperty(cmd)) {
                return commands[cmd].call(null, this);
              }
            },
            triggerElectric: methodOp(function (text) {
              triggerElectric(this, text);
            }),
            findPosH: function findPosH(from, amount, unit, visually) {
              var dir = 1;

              if (amount < 0) {
                dir = -1;
                amount = -amount;
              }

              var cur = _clipPos(this.doc, from);

              for (var i2 = 0; i2 < amount; ++i2) {
                cur = _findPosH(this.doc, cur, dir, unit, visually);

                if (cur.hitSide) {
                  break;
                }
              }

              return cur;
            },
            moveH: methodOp(function (dir, unit) {
              var this$1 = this;
              this.extendSelectionsBy(function (range2) {
                if (this$1.display.shift || this$1.doc.extend || range2.empty()) {
                  return _findPosH(this$1.doc, range2.head, dir, unit, this$1.options.rtlMoveVisually);
                } else {
                  return dir < 0 ? range2.from() : range2.to();
                }
              }, sel_move);
            }),
            deleteH: methodOp(function (dir, unit) {
              var sel = this.doc.sel,
                  doc = this.doc;

              if (sel.somethingSelected()) {
                doc.replaceSelection("", null, "+delete");
              } else {
                deleteNearSelection(this, function (range2) {
                  var other = _findPosH(doc, range2.head, dir, unit, false);

                  return dir < 0 ? {
                    from: other,
                    to: range2.head
                  } : {
                    from: range2.head,
                    to: other
                  };
                });
              }
            }),
            findPosV: function findPosV(from, amount, unit, goalColumn) {
              var dir = 1,
                  x = goalColumn;

              if (amount < 0) {
                dir = -1;
                amount = -amount;
              }

              var cur = _clipPos(this.doc, from);

              for (var i2 = 0; i2 < amount; ++i2) {
                var coords = _cursorCoords(this, cur, "div");

                if (x == null) {
                  x = coords.left;
                } else {
                  coords.left = x;
                }

                cur = _findPosV(this, coords, dir, unit);

                if (cur.hitSide) {
                  break;
                }
              }

              return cur;
            },
            moveV: methodOp(function (dir, unit) {
              var this$1 = this;
              var doc = this.doc,
                  goals = [];
              var collapse = !this.display.shift && !doc.extend && doc.sel.somethingSelected();
              doc.extendSelectionsBy(function (range2) {
                if (collapse) {
                  return dir < 0 ? range2.from() : range2.to();
                }

                var headPos = _cursorCoords(this$1, range2.head, "div");

                if (range2.goalColumn != null) {
                  headPos.left = range2.goalColumn;
                }

                goals.push(headPos.left);

                var pos = _findPosV(this$1, headPos, dir, unit);

                if (unit == "page" && range2 == doc.sel.primary()) {
                  addToScrollTop(this$1, _charCoords(this$1, pos, "div").top - headPos.top);
                }

                return pos;
              }, sel_move);

              if (goals.length) {
                for (var i2 = 0; i2 < doc.sel.ranges.length; i2++) {
                  doc.sel.ranges[i2].goalColumn = goals[i2];
                }
              }
            }),
            findWordAt: function findWordAt(pos) {
              var doc = this.doc,
                  line = getLine(doc, pos.line).text;
              var start = pos.ch,
                  end = pos.ch;

              if (line) {
                var helper = this.getHelper(pos, "wordChars");

                if ((pos.sticky == "before" || end == line.length) && start) {
                  --start;
                } else {
                  ++end;
                }

                var startChar = line.charAt(start);
                var check = isWordChar(startChar, helper) ? function (ch) {
                  return isWordChar(ch, helper);
                } : /\s/.test(startChar) ? function (ch) {
                  return /\s/.test(ch);
                } : function (ch) {
                  return !/\s/.test(ch) && !isWordChar(ch);
                };

                while (start > 0 && check(line.charAt(start - 1))) {
                  --start;
                }

                while (end < line.length && check(line.charAt(end))) {
                  ++end;
                }
              }

              return new Range(Pos(pos.line, start), Pos(pos.line, end));
            },
            toggleOverwrite: function toggleOverwrite(value) {
              if (value != null && value == this.state.overwrite) {
                return;
              }

              if (this.state.overwrite = !this.state.overwrite) {
                addClass(this.display.cursorDiv, "CodeMirror-overwrite");
              } else {
                rmClass(this.display.cursorDiv, "CodeMirror-overwrite");
              }

              signal(this, "overwriteToggle", this, this.state.overwrite);
            },
            hasFocus: function hasFocus() {
              return this.display.input.getField() == activeElt();
            },
            isReadOnly: function isReadOnly() {
              return !!(this.options.readOnly || this.doc.cantEdit);
            },
            scrollTo: methodOp(function (x, y) {
              scrollToCoords(this, x, y);
            }),
            getScrollInfo: function getScrollInfo() {
              var scroller = this.display.scroller;
              return {
                left: scroller.scrollLeft,
                top: scroller.scrollTop,
                height: scroller.scrollHeight - scrollGap(this) - this.display.barHeight,
                width: scroller.scrollWidth - scrollGap(this) - this.display.barWidth,
                clientHeight: displayHeight(this),
                clientWidth: displayWidth(this)
              };
            },
            scrollIntoView: methodOp(function (range2, margin) {
              if (range2 == null) {
                range2 = {
                  from: this.doc.sel.primary().head,
                  to: null
                };

                if (margin == null) {
                  margin = this.options.cursorScrollMargin;
                }
              } else if (typeof range2 == "number") {
                range2 = {
                  from: Pos(range2, 0),
                  to: null
                };
              } else if (range2.from == null) {
                range2 = {
                  from: range2,
                  to: null
                };
              }

              if (!range2.to) {
                range2.to = range2.from;
              }

              range2.margin = margin || 0;

              if (range2.from.line != null) {
                scrollToRange(this, range2);
              } else {
                scrollToCoordsRange(this, range2.from, range2.to, range2.margin);
              }
            }),
            setSize: methodOp(function (width, height) {
              var this$1 = this;

              var interpret = function interpret(val) {
                return typeof val == "number" || /^\d+$/.test(String(val)) ? val + "px" : val;
              };

              if (width != null) {
                this.display.wrapper.style.width = interpret(width);
              }

              if (height != null) {
                this.display.wrapper.style.height = interpret(height);
              }

              if (this.options.lineWrapping) {
                clearLineMeasurementCache(this);
              }

              var lineNo2 = this.display.viewFrom;
              this.doc.iter(lineNo2, this.display.viewTo, function (line) {
                if (line.widgets) {
                  for (var i2 = 0; i2 < line.widgets.length; i2++) {
                    if (line.widgets[i2].noHScroll) {
                      regLineChange(this$1, lineNo2, "widget");
                      break;
                    }
                  }
                }

                ++lineNo2;
              });
              this.curOp.forceUpdate = true;
              signal(this, "refresh", this);
            }),
            operation: function operation(f) {
              return runInOp(this, f);
            },
            startOperation: function startOperation() {
              return _startOperation(this);
            },
            endOperation: function endOperation() {
              return _endOperation(this);
            },
            refresh: methodOp(function () {
              var oldHeight = this.display.cachedTextHeight;
              regChange(this);
              this.curOp.forceUpdate = true;
              clearCaches(this);
              scrollToCoords(this, this.doc.scrollLeft, this.doc.scrollTop);
              updateGutterSpace(this.display);

              if (oldHeight == null || Math.abs(oldHeight - textHeight(this.display)) > 0.5 || this.options.lineWrapping) {
                estimateLineHeights(this);
              }

              signal(this, "refresh", this);
            }),
            swapDoc: methodOp(function (doc) {
              var old = this.doc;
              old.cm = null;

              if (this.state.selectingText) {
                this.state.selectingText();
              }

              attachDoc(this, doc);
              clearCaches(this);
              this.display.input.reset();
              scrollToCoords(this, doc.scrollLeft, doc.scrollTop);
              this.curOp.forceScroll = true;
              signalLater(this, "swapDoc", this, old);
              return old;
            }),
            phrase: function phrase(phraseText) {
              var phrases = this.options.phrases;
              return phrases && Object.prototype.hasOwnProperty.call(phrases, phraseText) ? phrases[phraseText] : phraseText;
            },
            getInputField: function getInputField() {
              return this.display.input.getField();
            },
            getWrapperElement: function getWrapperElement() {
              return this.display.wrapper;
            },
            getScrollerElement: function getScrollerElement() {
              return this.display.scroller;
            },
            getGutterElement: function getGutterElement() {
              return this.display.gutters;
            }
          };
          eventMixin(CodeMirror4);

          CodeMirror4.registerHelper = function (type, name, value) {
            if (!helpers.hasOwnProperty(type)) {
              helpers[type] = CodeMirror4[type] = {
                _global: []
              };
            }

            helpers[type][name] = value;
          };

          CodeMirror4.registerGlobalHelper = function (type, name, predicate, value) {
            CodeMirror4.registerHelper(type, name, value);

            helpers[type]._global.push({
              pred: predicate,
              val: value
            });
          };
        }

        function _findPosH(doc, pos, dir, unit, visually) {
          var oldPos = pos;
          var origDir = dir;
          var lineObj = getLine(doc, pos.line);
          var lineDir = visually && doc.direction == "rtl" ? -dir : dir;

          function findNextLine() {
            var l = pos.line + lineDir;

            if (l < doc.first || l >= doc.first + doc.size) {
              return false;
            }

            pos = new Pos(l, pos.ch, pos.sticky);
            return lineObj = getLine(doc, l);
          }

          function moveOnce(boundToLine) {
            var next;

            if (unit == "codepoint") {
              var ch = lineObj.text.charCodeAt(pos.ch + (dir > 0 ? 0 : -1));

              if (isNaN(ch)) {
                next = null;
              } else {
                var astral = dir > 0 ? ch >= 55296 && ch < 56320 : ch >= 56320 && ch < 57343;
                next = new Pos(pos.line, Math.max(0, Math.min(lineObj.text.length, pos.ch + dir * (astral ? 2 : 1))), -dir);
              }
            } else if (visually) {
              next = moveVisually(doc.cm, lineObj, pos, dir);
            } else {
              next = moveLogically(lineObj, pos, dir);
            }

            if (next == null) {
              if (!boundToLine && findNextLine()) {
                pos = endOfLine(visually, doc.cm, lineObj, pos.line, lineDir);
              } else {
                return false;
              }
            } else {
              pos = next;
            }

            return true;
          }

          if (unit == "char" || unit == "codepoint") {
            moveOnce();
          } else if (unit == "column") {
            moveOnce(true);
          } else if (unit == "word" || unit == "group") {
            var sawType = null,
                group = unit == "group";
            var helper = doc.cm && doc.cm.getHelper(pos, "wordChars");

            for (var first = true;; first = false) {
              if (dir < 0 && !moveOnce(!first)) {
                break;
              }

              var cur = lineObj.text.charAt(pos.ch) || "\n";
              var type = isWordChar(cur, helper) ? "w" : group && cur == "\n" ? "n" : !group || /\s/.test(cur) ? null : "p";

              if (group && !first && !type) {
                type = "s";
              }

              if (sawType && sawType != type) {
                if (dir < 0) {
                  dir = 1;
                  moveOnce();
                  pos.sticky = "after";
                }

                break;
              }

              if (type) {
                sawType = type;
              }

              if (dir > 0 && !moveOnce(!first)) {
                break;
              }
            }
          }

          var result = skipAtomic(doc, pos, oldPos, origDir, true);

          if (equalCursorPos(oldPos, result)) {
            result.hitSide = true;
          }

          return result;
        }

        function _findPosV(cm, pos, dir, unit) {
          var doc = cm.doc,
              x = pos.left,
              y;

          if (unit == "page") {
            var pageSize = Math.min(cm.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight);
            var moveAmount = Math.max(pageSize - 0.5 * textHeight(cm.display), 3);
            y = (dir > 0 ? pos.bottom : pos.top) + dir * moveAmount;
          } else if (unit == "line") {
            y = dir > 0 ? pos.bottom + 3 : pos.top - 3;
          }

          var target;

          for (;;) {
            target = _coordsChar(cm, x, y);

            if (!target.outside) {
              break;
            }

            if (dir < 0 ? y <= 0 : y >= doc.height) {
              target.hitSide = true;
              break;
            }

            y += dir * 5;
          }

          return target;
        }

        var ContentEditableInput = function ContentEditableInput(cm) {
          this.cm = cm;
          this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null;
          this.polling = new Delayed();
          this.composing = null;
          this.gracePeriod = false;
          this.readDOMTimeout = null;
        };

        ContentEditableInput.prototype.init = function (display) {
          var this$1 = this;
          var input = this,
              cm = input.cm;
          var div = input.div = display.lineDiv;
          div.contentEditable = true;
          disableBrowserMagic(div, cm.options.spellcheck, cm.options.autocorrect, cm.options.autocapitalize);

          function belongsToInput(e) {
            for (var t = e.target; t; t = t.parentNode) {
              if (t == div) {
                return true;
              }

              if (/\bCodeMirror-(?:line)?widget\b/.test(t.className)) {
                break;
              }
            }

            return false;
          }

          on(div, "paste", function (e) {
            if (!belongsToInput(e) || signalDOMEvent(cm, e) || handlePaste(e, cm)) {
              return;
            }

            if (ie_version <= 11) {
              setTimeout(operation(cm, function () {
                return this$1.updateFromDOM();
              }), 20);
            }
          });
          on(div, "compositionstart", function (e) {
            this$1.composing = {
              data: e.data,
              done: false
            };
          });
          on(div, "compositionupdate", function (e) {
            if (!this$1.composing) {
              this$1.composing = {
                data: e.data,
                done: false
              };
            }
          });
          on(div, "compositionend", function (e) {
            if (this$1.composing) {
              if (e.data != this$1.composing.data) {
                this$1.readFromDOMSoon();
              }

              this$1.composing.done = true;
            }
          });
          on(div, "touchstart", function () {
            return input.forceCompositionEnd();
          });
          on(div, "input", function () {
            if (!this$1.composing) {
              this$1.readFromDOMSoon();
            }
          });

          function onCopyCut(e) {
            if (!belongsToInput(e) || signalDOMEvent(cm, e)) {
              return;
            }

            if (cm.somethingSelected()) {
              setLastCopied({
                lineWise: false,
                text: cm.getSelections()
              });

              if (e.type == "cut") {
                cm.replaceSelection("", null, "cut");
              }
            } else if (!cm.options.lineWiseCopyCut) {
              return;
            } else {
              var ranges = copyableRanges(cm);
              setLastCopied({
                lineWise: true,
                text: ranges.text
              });

              if (e.type == "cut") {
                cm.operation(function () {
                  cm.setSelections(ranges.ranges, 0, sel_dontScroll);
                  cm.replaceSelection("", null, "cut");
                });
              }
            }

            if (e.clipboardData) {
              e.clipboardData.clearData();
              var content = lastCopied.text.join("\n");
              e.clipboardData.setData("Text", content);

              if (e.clipboardData.getData("Text") == content) {
                e.preventDefault();
                return;
              }
            }

            var kludge = hiddenTextarea(),
                te = kludge.firstChild;
            cm.display.lineSpace.insertBefore(kludge, cm.display.lineSpace.firstChild);
            te.value = lastCopied.text.join("\n");
            var hadFocus = activeElt();
            selectInput(te);
            setTimeout(function () {
              cm.display.lineSpace.removeChild(kludge);
              hadFocus.focus();

              if (hadFocus == div) {
                input.showPrimarySelection();
              }
            }, 50);
          }

          on(div, "copy", onCopyCut);
          on(div, "cut", onCopyCut);
        };

        ContentEditableInput.prototype.screenReaderLabelChanged = function (label) {
          if (label) {
            this.div.setAttribute("aria-label", label);
          } else {
            this.div.removeAttribute("aria-label");
          }
        };

        ContentEditableInput.prototype.prepareSelection = function () {
          var result = prepareSelection(this.cm, false);
          result.focus = activeElt() == this.div;
          return result;
        };

        ContentEditableInput.prototype.showSelection = function (info, takeFocus) {
          if (!info || !this.cm.display.view.length) {
            return;
          }

          if (info.focus || takeFocus) {
            this.showPrimarySelection();
          }

          this.showMultipleSelections(info);
        };

        ContentEditableInput.prototype.getSelection = function () {
          return this.cm.display.wrapper.ownerDocument.getSelection();
        };

        ContentEditableInput.prototype.showPrimarySelection = function () {
          var sel = this.getSelection(),
              cm = this.cm,
              prim = cm.doc.sel.primary();
          var from = prim.from(),
              to = prim.to();

          if (cm.display.viewTo == cm.display.viewFrom || from.line >= cm.display.viewTo || to.line < cm.display.viewFrom) {
            sel.removeAllRanges();
            return;
          }

          var curAnchor = domToPos(cm, sel.anchorNode, sel.anchorOffset);
          var curFocus = domToPos(cm, sel.focusNode, sel.focusOffset);

          if (curAnchor && !curAnchor.bad && curFocus && !curFocus.bad && cmp(minPos(curAnchor, curFocus), from) == 0 && cmp(maxPos(curAnchor, curFocus), to) == 0) {
            return;
          }

          var view = cm.display.view;
          var start = from.line >= cm.display.viewFrom && posToDOM(cm, from) || {
            node: view[0].measure.map[2],
            offset: 0
          };
          var end = to.line < cm.display.viewTo && posToDOM(cm, to);

          if (!end) {
            var measure = view[view.length - 1].measure;
            var map2 = measure.maps ? measure.maps[measure.maps.length - 1] : measure.map;
            end = {
              node: map2[map2.length - 1],
              offset: map2[map2.length - 2] - map2[map2.length - 3]
            };
          }

          if (!start || !end) {
            sel.removeAllRanges();
            return;
          }

          var old = sel.rangeCount && sel.getRangeAt(0),
              rng;

          try {
            rng = range(start.node, start.offset, end.offset, end.node);
          } catch (e) {}

          if (rng) {
            if (!gecko && cm.state.focused) {
              sel.collapse(start.node, start.offset);

              if (!rng.collapsed) {
                sel.removeAllRanges();
                sel.addRange(rng);
              }
            } else {
              sel.removeAllRanges();
              sel.addRange(rng);
            }

            if (old && sel.anchorNode == null) {
              sel.addRange(old);
            } else if (gecko) {
              this.startGracePeriod();
            }
          }

          this.rememberSelection();
        };

        ContentEditableInput.prototype.startGracePeriod = function () {
          var this$1 = this;
          clearTimeout(this.gracePeriod);
          this.gracePeriod = setTimeout(function () {
            this$1.gracePeriod = false;

            if (this$1.selectionChanged()) {
              this$1.cm.operation(function () {
                return this$1.cm.curOp.selectionChanged = true;
              });
            }
          }, 20);
        };

        ContentEditableInput.prototype.showMultipleSelections = function (info) {
          removeChildrenAndAdd(this.cm.display.cursorDiv, info.cursors);
          removeChildrenAndAdd(this.cm.display.selectionDiv, info.selection);
        };

        ContentEditableInput.prototype.rememberSelection = function () {
          var sel = this.getSelection();
          this.lastAnchorNode = sel.anchorNode;
          this.lastAnchorOffset = sel.anchorOffset;
          this.lastFocusNode = sel.focusNode;
          this.lastFocusOffset = sel.focusOffset;
        };

        ContentEditableInput.prototype.selectionInEditor = function () {
          var sel = this.getSelection();

          if (!sel.rangeCount) {
            return false;
          }

          var node = sel.getRangeAt(0).commonAncestorContainer;
          return contains(this.div, node);
        };

        ContentEditableInput.prototype.focus = function () {
          if (this.cm.options.readOnly != "nocursor") {
            if (!this.selectionInEditor() || activeElt() != this.div) {
              this.showSelection(this.prepareSelection(), true);
            }

            this.div.focus();
          }
        };

        ContentEditableInput.prototype.blur = function () {
          this.div.blur();
        };

        ContentEditableInput.prototype.getField = function () {
          return this.div;
        };

        ContentEditableInput.prototype.supportsTouch = function () {
          return true;
        };

        ContentEditableInput.prototype.receivedFocus = function () {
          var this$1 = this;
          var input = this;

          if (this.selectionInEditor()) {
            setTimeout(function () {
              return this$1.pollSelection();
            }, 20);
          } else {
            runInOp(this.cm, function () {
              return input.cm.curOp.selectionChanged = true;
            });
          }

          function poll() {
            if (input.cm.state.focused) {
              input.pollSelection();
              input.polling.set(input.cm.options.pollInterval, poll);
            }
          }

          this.polling.set(this.cm.options.pollInterval, poll);
        };

        ContentEditableInput.prototype.selectionChanged = function () {
          var sel = this.getSelection();
          return sel.anchorNode != this.lastAnchorNode || sel.anchorOffset != this.lastAnchorOffset || sel.focusNode != this.lastFocusNode || sel.focusOffset != this.lastFocusOffset;
        };

        ContentEditableInput.prototype.pollSelection = function () {
          if (this.readDOMTimeout != null || this.gracePeriod || !this.selectionChanged()) {
            return;
          }

          var sel = this.getSelection(),
              cm = this.cm;

          if (android && chrome && this.cm.display.gutterSpecs.length && isInGutter(sel.anchorNode)) {
            this.cm.triggerOnKeyDown({
              type: "keydown",
              keyCode: 8,
              preventDefault: Math.abs
            });
            this.blur();
            this.focus();
            return;
          }

          if (this.composing) {
            return;
          }

          this.rememberSelection();
          var anchor = domToPos(cm, sel.anchorNode, sel.anchorOffset);
          var head = domToPos(cm, sel.focusNode, sel.focusOffset);

          if (anchor && head) {
            runInOp(cm, function () {
              setSelection(cm.doc, simpleSelection(anchor, head), sel_dontScroll);

              if (anchor.bad || head.bad) {
                cm.curOp.selectionChanged = true;
              }
            });
          }
        };

        ContentEditableInput.prototype.pollContent = function () {
          if (this.readDOMTimeout != null) {
            clearTimeout(this.readDOMTimeout);
            this.readDOMTimeout = null;
          }

          var cm = this.cm,
              display = cm.display,
              sel = cm.doc.sel.primary();
          var from = sel.from(),
              to = sel.to();

          if (from.ch == 0 && from.line > cm.firstLine()) {
            from = Pos(from.line - 1, getLine(cm.doc, from.line - 1).length);
          }

          if (to.ch == getLine(cm.doc, to.line).text.length && to.line < cm.lastLine()) {
            to = Pos(to.line + 1, 0);
          }

          if (from.line < display.viewFrom || to.line > display.viewTo - 1) {
            return false;
          }

          var fromIndex, fromLine, fromNode;

          if (from.line == display.viewFrom || (fromIndex = findViewIndex(cm, from.line)) == 0) {
            fromLine = lineNo(display.view[0].line);
            fromNode = display.view[0].node;
          } else {
            fromLine = lineNo(display.view[fromIndex].line);
            fromNode = display.view[fromIndex - 1].node.nextSibling;
          }

          var toIndex = findViewIndex(cm, to.line);
          var toLine, toNode;

          if (toIndex == display.view.length - 1) {
            toLine = display.viewTo - 1;
            toNode = display.lineDiv.lastChild;
          } else {
            toLine = lineNo(display.view[toIndex + 1].line) - 1;
            toNode = display.view[toIndex + 1].node.previousSibling;
          }

          if (!fromNode) {
            return false;
          }

          var newText = cm.doc.splitLines(domTextBetween(cm, fromNode, toNode, fromLine, toLine));
          var oldText = getBetween(cm.doc, Pos(fromLine, 0), Pos(toLine, getLine(cm.doc, toLine).text.length));

          while (newText.length > 1 && oldText.length > 1) {
            if (lst(newText) == lst(oldText)) {
              newText.pop();
              oldText.pop();
              toLine--;
            } else if (newText[0] == oldText[0]) {
              newText.shift();
              oldText.shift();
              fromLine++;
            } else {
              break;
            }
          }

          var cutFront = 0,
              cutEnd = 0;
          var newTop = newText[0],
              oldTop = oldText[0],
              maxCutFront = Math.min(newTop.length, oldTop.length);

          while (cutFront < maxCutFront && newTop.charCodeAt(cutFront) == oldTop.charCodeAt(cutFront)) {
            ++cutFront;
          }

          var newBot = lst(newText),
              oldBot = lst(oldText);
          var maxCutEnd = Math.min(newBot.length - (newText.length == 1 ? cutFront : 0), oldBot.length - (oldText.length == 1 ? cutFront : 0));

          while (cutEnd < maxCutEnd && newBot.charCodeAt(newBot.length - cutEnd - 1) == oldBot.charCodeAt(oldBot.length - cutEnd - 1)) {
            ++cutEnd;
          }

          if (newText.length == 1 && oldText.length == 1 && fromLine == from.line) {
            while (cutFront && cutFront > from.ch && newBot.charCodeAt(newBot.length - cutEnd - 1) == oldBot.charCodeAt(oldBot.length - cutEnd - 1)) {
              cutFront--;
              cutEnd++;
            }
          }

          newText[newText.length - 1] = newBot.slice(0, newBot.length - cutEnd).replace(/^\u200b+/, "");
          newText[0] = newText[0].slice(cutFront).replace(/\u200b+$/, "");
          var chFrom = Pos(fromLine, cutFront);
          var chTo = Pos(toLine, oldText.length ? lst(oldText).length - cutEnd : 0);

          if (newText.length > 1 || newText[0] || cmp(chFrom, chTo)) {
            _replaceRange(cm.doc, newText, chFrom, chTo, "+input");

            return true;
          }
        };

        ContentEditableInput.prototype.ensurePolled = function () {
          this.forceCompositionEnd();
        };

        ContentEditableInput.prototype.reset = function () {
          this.forceCompositionEnd();
        };

        ContentEditableInput.prototype.forceCompositionEnd = function () {
          if (!this.composing) {
            return;
          }

          clearTimeout(this.readDOMTimeout);
          this.composing = null;
          this.updateFromDOM();
          this.div.blur();
          this.div.focus();
        };

        ContentEditableInput.prototype.readFromDOMSoon = function () {
          var this$1 = this;

          if (this.readDOMTimeout != null) {
            return;
          }

          this.readDOMTimeout = setTimeout(function () {
            this$1.readDOMTimeout = null;

            if (this$1.composing) {
              if (this$1.composing.done) {
                this$1.composing = null;
              } else {
                return;
              }
            }

            this$1.updateFromDOM();
          }, 80);
        };

        ContentEditableInput.prototype.updateFromDOM = function () {
          var this$1 = this;

          if (this.cm.isReadOnly() || !this.pollContent()) {
            runInOp(this.cm, function () {
              return regChange(this$1.cm);
            });
          }
        };

        ContentEditableInput.prototype.setUneditable = function (node) {
          node.contentEditable = "false";
        };

        ContentEditableInput.prototype.onKeyPress = function (e) {
          if (e.charCode == 0 || this.composing) {
            return;
          }

          e.preventDefault();

          if (!this.cm.isReadOnly()) {
            operation(this.cm, applyTextInput)(this.cm, String.fromCharCode(e.charCode == null ? e.keyCode : e.charCode), 0);
          }
        };

        ContentEditableInput.prototype.readOnlyChanged = function (val) {
          this.div.contentEditable = String(val != "nocursor");
        };

        ContentEditableInput.prototype.onContextMenu = function () {};

        ContentEditableInput.prototype.resetPosition = function () {};

        ContentEditableInput.prototype.needsContentAttribute = true;

        function posToDOM(cm, pos) {
          var view = findViewForLine(cm, pos.line);

          if (!view || view.hidden) {
            return null;
          }

          var line = getLine(cm.doc, pos.line);
          var info = mapFromLineView(view, line, pos.line);
          var order = getOrder(line, cm.doc.direction),
              side = "left";

          if (order) {
            var partPos = getBidiPartAt(order, pos.ch);
            side = partPos % 2 ? "right" : "left";
          }

          var result = nodeAndOffsetInLineMap(info.map, pos.ch, side);
          result.offset = result.collapse == "right" ? result.end : result.start;
          return result;
        }

        function isInGutter(node) {
          for (var scan = node; scan; scan = scan.parentNode) {
            if (/CodeMirror-gutter-wrapper/.test(scan.className)) {
              return true;
            }
          }

          return false;
        }

        function badPos(pos, bad) {
          if (bad) {
            pos.bad = true;
          }

          return pos;
        }

        function domTextBetween(cm, from, to, fromLine, toLine) {
          var text = "",
              closing = false,
              lineSep = cm.doc.lineSeparator(),
              extraLinebreak = false;

          function recognizeMarker(id) {
            return function (marker) {
              return marker.id == id;
            };
          }

          function close() {
            if (closing) {
              text += lineSep;

              if (extraLinebreak) {
                text += lineSep;
              }

              closing = extraLinebreak = false;
            }
          }

          function addText(str) {
            if (str) {
              close();
              text += str;
            }
          }

          function walk(node) {
            if (node.nodeType == 1) {
              var cmText = node.getAttribute("cm-text");

              if (cmText) {
                addText(cmText);
                return;
              }

              var markerID = node.getAttribute("cm-marker"),
                  range2;

              if (markerID) {
                var found = cm.findMarks(Pos(fromLine, 0), Pos(toLine + 1, 0), recognizeMarker(+markerID));

                if (found.length && (range2 = found[0].find(0))) {
                  addText(getBetween(cm.doc, range2.from, range2.to).join(lineSep));
                }

                return;
              }

              if (node.getAttribute("contenteditable") == "false") {
                return;
              }

              var isBlock = /^(pre|div|p|li|table|br)$/i.test(node.nodeName);

              if (!/^br$/i.test(node.nodeName) && node.textContent.length == 0) {
                return;
              }

              if (isBlock) {
                close();
              }

              for (var i2 = 0; i2 < node.childNodes.length; i2++) {
                walk(node.childNodes[i2]);
              }

              if (/^(pre|p)$/i.test(node.nodeName)) {
                extraLinebreak = true;
              }

              if (isBlock) {
                closing = true;
              }
            } else if (node.nodeType == 3) {
              addText(node.nodeValue.replace(/\u200b/g, "").replace(/\u00a0/g, " "));
            }
          }

          for (;;) {
            walk(from);

            if (from == to) {
              break;
            }

            from = from.nextSibling;
            extraLinebreak = false;
          }

          return text;
        }

        function domToPos(cm, node, offset) {
          var lineNode;

          if (node == cm.display.lineDiv) {
            lineNode = cm.display.lineDiv.childNodes[offset];

            if (!lineNode) {
              return badPos(cm.clipPos(Pos(cm.display.viewTo - 1)), true);
            }

            node = null;
            offset = 0;
          } else {
            for (lineNode = node;; lineNode = lineNode.parentNode) {
              if (!lineNode || lineNode == cm.display.lineDiv) {
                return null;
              }

              if (lineNode.parentNode && lineNode.parentNode == cm.display.lineDiv) {
                break;
              }
            }
          }

          for (var i2 = 0; i2 < cm.display.view.length; i2++) {
            var lineView = cm.display.view[i2];

            if (lineView.node == lineNode) {
              return locateNodeInLineView(lineView, node, offset);
            }
          }
        }

        function locateNodeInLineView(lineView, node, offset) {
          var wrapper = lineView.text.firstChild,
              bad = false;

          if (!node || !contains(wrapper, node)) {
            return badPos(Pos(lineNo(lineView.line), 0), true);
          }

          if (node == wrapper) {
            bad = true;
            node = wrapper.childNodes[offset];
            offset = 0;

            if (!node) {
              var line = lineView.rest ? lst(lineView.rest) : lineView.line;
              return badPos(Pos(lineNo(line), line.text.length), bad);
            }
          }

          var textNode = node.nodeType == 3 ? node : null,
              topNode = node;

          if (!textNode && node.childNodes.length == 1 && node.firstChild.nodeType == 3) {
            textNode = node.firstChild;

            if (offset) {
              offset = textNode.nodeValue.length;
            }
          }

          while (topNode.parentNode != wrapper) {
            topNode = topNode.parentNode;
          }

          var measure = lineView.measure,
              maps = measure.maps;

          function find(textNode2, topNode2, offset2) {
            for (var i2 = -1; i2 < (maps ? maps.length : 0); i2++) {
              var map2 = i2 < 0 ? measure.map : maps[i2];

              for (var j = 0; j < map2.length; j += 3) {
                var curNode = map2[j + 2];

                if (curNode == textNode2 || curNode == topNode2) {
                  var line2 = lineNo(i2 < 0 ? lineView.line : lineView.rest[i2]);
                  var ch = map2[j] + offset2;

                  if (offset2 < 0 || curNode != textNode2) {
                    ch = map2[j + (offset2 ? 1 : 0)];
                  }

                  return Pos(line2, ch);
                }
              }
            }
          }

          var found = find(textNode, topNode, offset);

          if (found) {
            return badPos(found, bad);
          }

          for (var after = topNode.nextSibling, dist = textNode ? textNode.nodeValue.length - offset : 0; after; after = after.nextSibling) {
            found = find(after, after.firstChild, 0);

            if (found) {
              return badPos(Pos(found.line, found.ch - dist), bad);
            } else {
              dist += after.textContent.length;
            }
          }

          for (var before = topNode.previousSibling, dist$1 = offset; before; before = before.previousSibling) {
            found = find(before, before.firstChild, -1);

            if (found) {
              return badPos(Pos(found.line, found.ch + dist$1), bad);
            } else {
              dist$1 += before.textContent.length;
            }
          }
        }

        var TextareaInput = function TextareaInput(cm) {
          this.cm = cm;
          this.prevInput = "";
          this.pollingFast = false;
          this.polling = new Delayed();
          this.hasSelection = false;
          this.composing = null;
        };

        TextareaInput.prototype.init = function (display) {
          var this$1 = this;
          var input = this,
              cm = this.cm;
          this.createField(display);
          var te = this.textarea;
          display.wrapper.insertBefore(this.wrapper, display.wrapper.firstChild);

          if (ios) {
            te.style.width = "0px";
          }

          on(te, "input", function () {
            if (ie && ie_version >= 9 && this$1.hasSelection) {
              this$1.hasSelection = null;
            }

            input.poll();
          });
          on(te, "paste", function (e) {
            if (signalDOMEvent(cm, e) || handlePaste(e, cm)) {
              return;
            }

            cm.state.pasteIncoming = +new Date();
            input.fastPoll();
          });

          function prepareCopyCut(e) {
            if (signalDOMEvent(cm, e)) {
              return;
            }

            if (cm.somethingSelected()) {
              setLastCopied({
                lineWise: false,
                text: cm.getSelections()
              });
            } else if (!cm.options.lineWiseCopyCut) {
              return;
            } else {
              var ranges = copyableRanges(cm);
              setLastCopied({
                lineWise: true,
                text: ranges.text
              });

              if (e.type == "cut") {
                cm.setSelections(ranges.ranges, null, sel_dontScroll);
              } else {
                input.prevInput = "";
                te.value = ranges.text.join("\n");
                selectInput(te);
              }
            }

            if (e.type == "cut") {
              cm.state.cutIncoming = +new Date();
            }
          }

          on(te, "cut", prepareCopyCut);
          on(te, "copy", prepareCopyCut);
          on(display.scroller, "paste", function (e) {
            if (eventInWidget(display, e) || signalDOMEvent(cm, e)) {
              return;
            }

            if (!te.dispatchEvent) {
              cm.state.pasteIncoming = +new Date();
              input.focus();
              return;
            }

            var event = new Event("paste");
            event.clipboardData = e.clipboardData;
            te.dispatchEvent(event);
          });
          on(display.lineSpace, "selectstart", function (e) {
            if (!eventInWidget(display, e)) {
              e_preventDefault(e);
            }
          });
          on(te, "compositionstart", function () {
            var start = cm.getCursor("from");

            if (input.composing) {
              input.composing.range.clear();
            }

            input.composing = {
              start,
              range: cm.markText(start, cm.getCursor("to"), {
                className: "CodeMirror-composing"
              })
            };
          });
          on(te, "compositionend", function () {
            if (input.composing) {
              input.poll();
              input.composing.range.clear();
              input.composing = null;
            }
          });
        };

        TextareaInput.prototype.createField = function (_display) {
          this.wrapper = hiddenTextarea();
          this.textarea = this.wrapper.firstChild;
        };

        TextareaInput.prototype.screenReaderLabelChanged = function (label) {
          if (label) {
            this.textarea.setAttribute("aria-label", label);
          } else {
            this.textarea.removeAttribute("aria-label");
          }
        };

        TextareaInput.prototype.prepareSelection = function () {
          var cm = this.cm,
              display = cm.display,
              doc = cm.doc;
          var result = prepareSelection(cm);

          if (cm.options.moveInputWithCursor) {
            var headPos = _cursorCoords(cm, doc.sel.primary().head, "div");

            var wrapOff = display.wrapper.getBoundingClientRect(),
                lineOff = display.lineDiv.getBoundingClientRect();
            result.teTop = Math.max(0, Math.min(display.wrapper.clientHeight - 10, headPos.top + lineOff.top - wrapOff.top));
            result.teLeft = Math.max(0, Math.min(display.wrapper.clientWidth - 10, headPos.left + lineOff.left - wrapOff.left));
          }

          return result;
        };

        TextareaInput.prototype.showSelection = function (drawn) {
          var cm = this.cm,
              display = cm.display;
          removeChildrenAndAdd(display.cursorDiv, drawn.cursors);
          removeChildrenAndAdd(display.selectionDiv, drawn.selection);

          if (drawn.teTop != null) {
            this.wrapper.style.top = drawn.teTop + "px";
            this.wrapper.style.left = drawn.teLeft + "px";
          }
        };

        TextareaInput.prototype.reset = function (typing) {
          if (this.contextMenuPending || this.composing) {
            return;
          }

          var cm = this.cm;

          if (cm.somethingSelected()) {
            this.prevInput = "";
            var content = cm.getSelection();
            this.textarea.value = content;

            if (cm.state.focused) {
              selectInput(this.textarea);
            }

            if (ie && ie_version >= 9) {
              this.hasSelection = content;
            }
          } else if (!typing) {
            this.prevInput = this.textarea.value = "";

            if (ie && ie_version >= 9) {
              this.hasSelection = null;
            }
          }
        };

        TextareaInput.prototype.getField = function () {
          return this.textarea;
        };

        TextareaInput.prototype.supportsTouch = function () {
          return false;
        };

        TextareaInput.prototype.focus = function () {
          if (this.cm.options.readOnly != "nocursor" && (!mobile || activeElt() != this.textarea)) {
            try {
              this.textarea.focus();
            } catch (e) {}
          }
        };

        TextareaInput.prototype.blur = function () {
          this.textarea.blur();
        };

        TextareaInput.prototype.resetPosition = function () {
          this.wrapper.style.top = this.wrapper.style.left = 0;
        };

        TextareaInput.prototype.receivedFocus = function () {
          this.slowPoll();
        };

        TextareaInput.prototype.slowPoll = function () {
          var this$1 = this;

          if (this.pollingFast) {
            return;
          }

          this.polling.set(this.cm.options.pollInterval, function () {
            this$1.poll();

            if (this$1.cm.state.focused) {
              this$1.slowPoll();
            }
          });
        };

        TextareaInput.prototype.fastPoll = function () {
          var missed = false,
              input = this;
          input.pollingFast = true;

          function p() {
            var changed = input.poll();

            if (!changed && !missed) {
              missed = true;
              input.polling.set(60, p);
            } else {
              input.pollingFast = false;
              input.slowPoll();
            }
          }

          input.polling.set(20, p);
        };

        TextareaInput.prototype.poll = function () {
          var this$1 = this;
          var cm = this.cm,
              input = this.textarea,
              prevInput = this.prevInput;

          if (this.contextMenuPending || !cm.state.focused || hasSelection(input) && !prevInput && !this.composing || cm.isReadOnly() || cm.options.disableInput || cm.state.keySeq) {
            return false;
          }

          var text = input.value;

          if (text == prevInput && !cm.somethingSelected()) {
            return false;
          }

          if (ie && ie_version >= 9 && this.hasSelection === text || mac && /[\uf700-\uf7ff]/.test(text)) {
            cm.display.input.reset();
            return false;
          }

          if (cm.doc.sel == cm.display.selForContextMenu) {
            var first = text.charCodeAt(0);

            if (first == 8203 && !prevInput) {
              prevInput = "\u200B";
            }

            if (first == 8666) {
              this.reset();
              return this.cm.execCommand("undo");
            }
          }

          var same = 0,
              l = Math.min(prevInput.length, text.length);

          while (same < l && prevInput.charCodeAt(same) == text.charCodeAt(same)) {
            ++same;
          }

          runInOp(cm, function () {
            applyTextInput(cm, text.slice(same), prevInput.length - same, null, this$1.composing ? "*compose" : null);

            if (text.length > 1e3 || text.indexOf("\n") > -1) {
              input.value = this$1.prevInput = "";
            } else {
              this$1.prevInput = text;
            }

            if (this$1.composing) {
              this$1.composing.range.clear();
              this$1.composing.range = cm.markText(this$1.composing.start, cm.getCursor("to"), {
                className: "CodeMirror-composing"
              });
            }
          });
          return true;
        };

        TextareaInput.prototype.ensurePolled = function () {
          if (this.pollingFast && this.poll()) {
            this.pollingFast = false;
          }
        };

        TextareaInput.prototype.onKeyPress = function () {
          if (ie && ie_version >= 9) {
            this.hasSelection = null;
          }

          this.fastPoll();
        };

        TextareaInput.prototype.onContextMenu = function (e) {
          var input = this,
              cm = input.cm,
              display = cm.display,
              te = input.textarea;

          if (input.contextMenuPending) {
            input.contextMenuPending();
          }

          var pos = posFromMouse(cm, e),
              scrollPos = display.scroller.scrollTop;

          if (!pos || presto) {
            return;
          }

          var reset = cm.options.resetSelectionOnContextMenu;

          if (reset && cm.doc.sel.contains(pos) == -1) {
            operation(cm, setSelection)(cm.doc, simpleSelection(pos), sel_dontScroll);
          }

          var oldCSS = te.style.cssText,
              oldWrapperCSS = input.wrapper.style.cssText;
          var wrapperBox = input.wrapper.offsetParent.getBoundingClientRect();
          input.wrapper.style.cssText = "position: static";
          te.style.cssText = "position: absolute; width: 30px; height: 30px;\n      top: " + (e.clientY - wrapperBox.top - 5) + "px; left: " + (e.clientX - wrapperBox.left - 5) + "px;\n      z-index: 1000; background: " + (ie ? "rgba(255, 255, 255, .05)" : "transparent") + ";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);";
          var oldScrollY;

          if (webkit) {
            oldScrollY = window.scrollY;
          }

          display.input.focus();

          if (webkit) {
            window.scrollTo(null, oldScrollY);
          }

          display.input.reset();

          if (!cm.somethingSelected()) {
            te.value = input.prevInput = " ";
          }

          input.contextMenuPending = rehide;
          display.selForContextMenu = cm.doc.sel;
          clearTimeout(display.detectingSelectAll);

          function prepareSelectAllHack() {
            if (te.selectionStart != null) {
              var selected = cm.somethingSelected();
              var extval = "\u200B" + (selected ? te.value : "");
              te.value = "\u21DA";
              te.value = extval;
              input.prevInput = selected ? "" : "\u200B";
              te.selectionStart = 1;
              te.selectionEnd = extval.length;
              display.selForContextMenu = cm.doc.sel;
            }
          }

          function rehide() {
            if (input.contextMenuPending != rehide) {
              return;
            }

            input.contextMenuPending = false;
            input.wrapper.style.cssText = oldWrapperCSS;
            te.style.cssText = oldCSS;

            if (ie && ie_version < 9) {
              display.scrollbars.setScrollTop(display.scroller.scrollTop = scrollPos);
            }

            if (te.selectionStart != null) {
              if (!ie || ie && ie_version < 9) {
                prepareSelectAllHack();
              }

              var i2 = 0,
                  poll = function poll() {
                if (display.selForContextMenu == cm.doc.sel && te.selectionStart == 0 && te.selectionEnd > 0 && input.prevInput == "\u200B") {
                  operation(cm, selectAll)(cm);
                } else if (i2++ < 10) {
                  display.detectingSelectAll = setTimeout(poll, 500);
                } else {
                  display.selForContextMenu = null;
                  display.input.reset();
                }
              };

              display.detectingSelectAll = setTimeout(poll, 200);
            }
          }

          if (ie && ie_version >= 9) {
            prepareSelectAllHack();
          }

          if (captureRightClick) {
            e_stop(e);

            var mouseup = function mouseup() {
              off(window, "mouseup", mouseup);
              setTimeout(rehide, 20);
            };

            on(window, "mouseup", mouseup);
          } else {
            setTimeout(rehide, 50);
          }
        };

        TextareaInput.prototype.readOnlyChanged = function (val) {
          if (!val) {
            this.reset();
          }

          this.textarea.disabled = val == "nocursor";
          this.textarea.readOnly = !!val;
        };

        TextareaInput.prototype.setUneditable = function () {};

        TextareaInput.prototype.needsContentAttribute = false;

        function fromTextArea(textarea, options) {
          options = options ? copyObj(options) : {};
          options.value = textarea.value;

          if (!options.tabindex && textarea.tabIndex) {
            options.tabindex = textarea.tabIndex;
          }

          if (!options.placeholder && textarea.placeholder) {
            options.placeholder = textarea.placeholder;
          }

          if (options.autofocus == null) {
            var hasFocus = activeElt();
            options.autofocus = hasFocus == textarea || textarea.getAttribute("autofocus") != null && hasFocus == document.body;
          }

          function save() {
            textarea.value = cm.getValue();
          }

          var realSubmit;

          if (textarea.form) {
            on(textarea.form, "submit", save);

            if (!options.leaveSubmitMethodAlone) {
              var form = textarea.form;
              realSubmit = form.submit;

              try {
                var wrappedSubmit = form.submit = function () {
                  save();
                  form.submit = realSubmit;
                  form.submit();
                  form.submit = wrappedSubmit;
                };
              } catch (e) {}
            }
          }

          options.finishInit = function (cm2) {
            cm2.save = save;

            cm2.getTextArea = function () {
              return textarea;
            };

            cm2.toTextArea = function () {
              cm2.toTextArea = isNaN;
              save();
              textarea.parentNode.removeChild(cm2.getWrapperElement());
              textarea.style.display = "";

              if (textarea.form) {
                off(textarea.form, "submit", save);

                if (!options.leaveSubmitMethodAlone && typeof textarea.form.submit == "function") {
                  textarea.form.submit = realSubmit;
                }
              }
            };
          };

          textarea.style.display = "none";
          var cm = CodeMirror3(function (node) {
            return textarea.parentNode.insertBefore(node, textarea.nextSibling);
          }, options);
          return cm;
        }

        function addLegacyProps(CodeMirror4) {
          CodeMirror4.off = off;
          CodeMirror4.on = on;
          CodeMirror4.wheelEventPixels = wheelEventPixels;
          CodeMirror4.Doc = Doc;
          CodeMirror4.splitLines = splitLinesAuto;
          CodeMirror4.countColumn = countColumn;
          CodeMirror4.findColumn = findColumn;
          CodeMirror4.isWordChar = isWordCharBasic;
          CodeMirror4.Pass = Pass;
          CodeMirror4.signal = signal;
          CodeMirror4.Line = Line;
          CodeMirror4.changeEnd = changeEnd;
          CodeMirror4.scrollbarModel = scrollbarModel;
          CodeMirror4.Pos = Pos;
          CodeMirror4.cmpPos = cmp;
          CodeMirror4.modes = modes;
          CodeMirror4.mimeModes = mimeModes;
          CodeMirror4.resolveMode = resolveMode;
          CodeMirror4.getMode = getMode;
          CodeMirror4.modeExtensions = modeExtensions;
          CodeMirror4.extendMode = extendMode;
          CodeMirror4.copyState = copyState;
          CodeMirror4.startState = startState;
          CodeMirror4.innerMode = innerMode;
          CodeMirror4.commands = commands;
          CodeMirror4.keyMap = keyMap;
          CodeMirror4.keyName = keyName;
          CodeMirror4.isModifierKey = isModifierKey;
          CodeMirror4.lookupKey = lookupKey;
          CodeMirror4.normalizeKeyMap = normalizeKeyMap;
          CodeMirror4.StringStream = StringStream;
          CodeMirror4.SharedTextMarker = SharedTextMarker;
          CodeMirror4.TextMarker = TextMarker;
          CodeMirror4.LineWidget = LineWidget;
          CodeMirror4.e_preventDefault = e_preventDefault;
          CodeMirror4.e_stopPropagation = e_stopPropagation;
          CodeMirror4.e_stop = e_stop;
          CodeMirror4.addClass = addClass;
          CodeMirror4.contains = contains;
          CodeMirror4.rmClass = rmClass;
          CodeMirror4.keyNames = keyNames;
        }

        defineOptions(CodeMirror3);
        addEditorMethods(CodeMirror3);
        var dontDelegate = "iter insert remove copy getEditor constructor".split(" ");

        for (var prop in Doc.prototype) {
          if (Doc.prototype.hasOwnProperty(prop) && indexOf(dontDelegate, prop) < 0) {
            CodeMirror3.prototype[prop] = function (method) {
              return function () {
                return method.apply(this.doc, arguments);
              };
            }(Doc.prototype[prop]);
          }
        }

        eventMixin(Doc);
        CodeMirror3.inputStyles = {
          "textarea": TextareaInput,
          "contenteditable": ContentEditableInput
        };

        CodeMirror3.defineMode = function (name) {
          if (!CodeMirror3.defaults.mode && name != "null") {
            CodeMirror3.defaults.mode = name;
          }

          defineMode.apply(this, arguments);
        };

        CodeMirror3.defineMIME = defineMIME;
        CodeMirror3.defineMode("null", function () {
          return {
            token: function token(stream) {
              return stream.skipToEnd();
            }
          };
        });
        CodeMirror3.defineMIME("text/plain", "null");

        CodeMirror3.defineExtension = function (name, func) {
          CodeMirror3.prototype[name] = func;
        };

        CodeMirror3.defineDocExtension = function (name, func) {
          Doc.prototype[name] = func;
        };

        CodeMirror3.fromTextArea = fromTextArea;
        addLegacyProps(CodeMirror3);
        CodeMirror3.version = "5.65.5";
        return CodeMirror3;
      });
    }

  }); // src/optionDefinitions.ts


  var DEFAULT_MERGE_CHECK, optionDefinitions;

  var init_optionDefinitions = __esm({
    "src/optionDefinitions.ts"() {
      DEFAULT_MERGE_CHECK = ["doi", "citation", "abstract"];
      optionDefinitions = [{
        key: "help",
        cli: {
          "--help": true,
          "-h": true
        },
        title: "Help",
        description: ["Show help"],
        type: "boolean"
      }, {
        key: "omit",
        cli: {
          "--omit": args => {
            if (args.length === 0) {
              console.error("Expected a omit list");
              process.exit(1);
            }

            return args;
          }
        },
        toCLI: val => Array.isArray(val) && val.length > 0 ? "--omit=".concat(val.join(",")) : void 0,
        title: "Remove fields",
        description: ["Remove specified fields from bibliography entries."],
        examples: ["--omit=id,name"],
        type: "string[]",
        defaultValue: []
      }, {
        key: "curly",
        cli: {
          "--curly": true,
          "--no-curly": false
        },
        toCLI: val => val ? "--curly" : void 0,
        title: "Enclose values in braces",
        description: ['Enclose all property values in braces. Quoted values will be converted to braces. For example, "Journal of Tea" will become {Journal of Tea}.'],
        type: "boolean",
        defaultValue: false
      }, {
        key: "numeric",
        cli: {
          "--numeric": true,
          "--no-numeric": false
        },
        toCLI: val => val ? "--numeric" : void 0,
        title: "Use numeric values where possible",
        description: ["Strip quotes and braces from numeric/month values. For example, {1998} will become 1998."],
        type: "boolean",
        defaultValue: false
      }, {
        key: "space",
        cli: {
          "--space": args => args.length > 0 ? Number(args[0]) : true
        },
        toCLI: val => {
          if (typeof val === "number") return "--space=".concat(val);
          if (val) return "--space";
          return void 0;
        },
        title: "Indent with spaces",
        description: ["Indent all fields with the specified number of spaces. Ignored if tab is set."],
        examples: ["--space=2 (default)", "--space=4"],
        type: "boolean | number",
        valueIfTrue: 2,
        defaultValue: 2
      }, {
        key: "tab",
        cli: {
          "--tab": true,
          "--no-tab": false
        },
        toCLI: val => val ? "--tab" : void 0,
        title: "Indent with tabs",
        description: ["Indent all fields with a tab."],
        type: "boolean",
        defaultValue: false
      }, {
        key: "align",
        cli: {
          "--align": args => Number(args[0]),
          "--no-align": false
        },
        toCLI: val => {
          if (typeof val === "number") return "--align=".concat(val);
          if (val === false) return "--no-align";
          return void 0;
        },
        title: "Align values",
        description: ["Insert whitespace between fields and values so that values are visually aligned."],
        examples: ["--align=14 (default)"],
        type: "boolean | number",
        valueIfFalse: 1,
        defaultValue: 14
      }, {
        key: "sort",
        cli: {
          "--sort": args => args.length > 0 ? args : true,
          "--no-sort": false
        },
        toCLI: val => {
          if (Array.isArray(val) && val.length > 0) return "--sort=".concat(val.join(","));
          if (val === true) return "--sort";
          return void 0;
        },
        title: "Sort bibliography entries",
        description: ["Sort entries by specified fields. For descending order, prefix the field with a dash (-)."],
        examples: ["--sort (sort by id)", "--sort=-year,name (sort year descending then name ascending)", "--sort=name,year"],
        type: "boolean | string[]",
        valueIfTrue: ["key"]
      }, {
        key: "duplicates",
        cli: {
          "--duplicates": args => {
            if (args.length === 0) return true;

            var _iterator2 = _createForOfIteratorHelper(args),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var i = _step2.value;

                if (i !== "doi" && i !== "key" && i !== "abstract" && i !== "citation") {
                  console.error("Invalid key for merge option: \"".concat(i, "\""));
                  process.exit(1);
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            return args;
          }
        },
        toCLI: val => {
          if (Array.isArray(val) && val.length > 0) return "--duplicates=".concat(val.join(","));
          if (val === true) return "--duplicates";
          return void 0;
        },
        title: "Check for duplicates",
        description: ["Warn if duplicates are found, which are entries where DOI, abstract, or author and title are the same."],
        examples: ["--duplicates doi (same DOIs)", "--duplicates key (same IDs)", "--duplicates abstract (similar abstracts)", "--duplicates citation (similar author and titles)", "--duplicates doi, key (identical DOI or keys)", "--duplicates (same DOI, key, abstract, or citation)"],
        type: "boolean | ('doi' | 'key' | 'abstract' | 'citation')[]",
        valueIfTrue: DEFAULT_MERGE_CHECK,
        defaultValue: options => options.merge ? DEFAULT_MERGE_CHECK : void 0
      }, {
        key: "merge",
        cli: {
          "--merge": args => {
            if (args.length === 0) return true;

            if (args[0] !== "first" && args[0] !== "last" && args[0] !== "combine" && args[0] !== "overwrite") {
              console.error("Invalid merge strategy: \"".concat(args[0], "\""));
              process.exit(1);
            }

            return args[0];
          },
          "--no-merge": false
        },
        toCLI: val => {
          if (typeof val === "string") return "--merge=".concat(val);
          if (val) return "--merge";
          return void 0;
        },
        title: "Merge duplicate entries",
        description: ["Merge duplicates entries. Use the duplicates option to determine how duplicates are identified. There are different ways to merge:", "- first: only keep the original entry", "- last: only keep the last found duplicate", "- combine: keep original entry and merge in fields of duplicates if they do not already exist", "- overwrite: keep original entry and merge in fields of duplicates, overwriting existing fields if they exist"],
        type: "boolean | 'first' | 'last' | 'combine' | 'overwrite'",
        valueIfTrue: "combine"
      }, {
        key: "stripEnclosingBraces",
        cli: {
          "--strip-enclosing-braces": true
        },
        toCLI: val => val ? "--strip-enclosing-braces" : void 0,
        title: "Strip double-braced values",
        description: ["Where an entire value is enclosed in double braces, remove the extra braces. For example, {{Journal of Tea}} will become {Journal of Tea}."],
        type: "boolean",
        defaultValue: false
      }, {
        key: "dropAllCaps",
        cli: {
          "--drop-all-caps": true
        },
        toCLI: val => val ? "--drop-all-caps" : void 0,
        title: "Drop all caps",
        description: ["Where values are all caps, make them title case. For example, {JOURNAL OF TEA} will become {Journal of Tea}."],
        type: "boolean",
        defaultValue: false
      }, {
        key: "escape",
        cli: {
          "--escape": true,
          "--no-escape": false
        },
        toCLI: val => val === false ? "--no-escape" : void 0,
        title: "Escape special characters",
        description: ["Escape special characters, such as umlaut. This ensures correct typesetting with latex. Enabled by default."],
        type: "boolean",
        defaultValue: true
      }, {
        key: "sortFields",
        cli: {
          "--sort-fields": args => args.length > 0 ? args : true
        },
        toCLI: val => {
          if (Array.isArray(val) && val.length > 0) return "--sort-fields=".concat(val.join(","));
          if (val === true) return "--sort-fields";
          return void 0;
        },
        title: "Sort fields",
        description: ["Sort the fields within entries.", "If no fields are specified fields will be sorted by: title, shorttitle, author, year, month, day, journal, booktitle, location, on, publisher, address, series, volume, number, pages, doi, isbn, issn, url, urldate, copyright, category, note, metadata"],
        examples: ["--sort-fields=name,author"],
        type: "boolean | string[]",
        valueIfTrue: ["title", "shorttitle", "author", "year", "month", "day", "journal", "booktitle", "location", "on", "publisher", "address", "series", "volume", "number", "pages", "doi", "isbn", "issn", "url", "urldate", "copyright", "category", "note", "metadata"],
        defaultValue: false
      }, {
        key: "sortProperties",
        cli: {
          "--sort-properties": args => args.length > 0 ? args : true
        },
        title: "Sort properties",
        description: ["Alias of sort fields (legacy)"],
        type: "boolean | string[]",
        deprecated: true
      }, {
        key: "stripComments",
        cli: {
          "--strip-comments": true,
          "--no-strip-comments": false
        },
        toCLI: val => val ? "--strip-comments" : void 0,
        title: "Remove comments",
        description: ["Remove all comments from the bibtex source."],
        type: "boolean",
        defaultValue: false
      }, {
        key: "trailingCommas",
        cli: {
          "--trailing-commas": true,
          "--no-trailing-commas": true
        },
        toCLI: val => val ? "--trailing-commas" : void 0,
        title: "Trailing commas",
        description: ["End the last key value pair in each entry with a comma."],
        type: "boolean",
        defaultValue: false
      }, {
        key: "encodeUrls",
        cli: {
          "--encode-urls": true,
          "--no-encode-urls": true
        },
        toCLI: val => val ? "--encode-urls" : void 0,
        title: "Encode URLs",
        description: ["Replace invalid URL characters with percent encoded values."],
        type: "boolean",
        defaultValue: false
      }, {
        key: "tidyComments",
        cli: {
          "--tidy-comments": true,
          "--no-tidy-comments": false
        },
        toCLI: val => val === false ? "--no-tidy-comments" : void 0,
        title: "Tidy comments",
        description: ["Remove whitespace surrounding comments."],
        type: "boolean",
        defaultValue: true
      }, {
        key: "removeEmptyFields",
        cli: {
          "--remove-empty-fields": true,
          "--no-remove-empty-fields": false
        },
        toCLI: val => val ? "--remove-empty-fields" : void 0,
        title: "Remove empty fields",
        description: ["Remove any fields that have empty values."],
        type: "boolean",
        defaultValue: false
      }, {
        key: "removeDuplicateFields",
        cli: {
          "--remove-dupe-fields": true,
          "--no-remove-dupe-fields": false
        },
        toCLI: val => val === false ? "--no-remove-dupe-fields" : void 0,
        title: "Remove duplicate fields",
        description: ["Only allow one of each field in each entry. Enabled by default."],
        type: "boolean",
        defaultValue: true
      }, {
        key: "generateKeys",
        cli: {
          "--generate-keys": true
        },
        toCLI: val => val === true ? "--generate-keys" : void 0,
        title: "Generate BibTeX keys",
        description: ["[Experimental] For all entries replace the key with a new key of the form <author><year><title>."],
        type: "boolean",
        defaultValue: false
      }, {
        key: "maxAuthors",
        cli: {
          "--max-authors": args => Number(args[0])
        },
        toCLI: val => val ? "--max-authors=".concat(val) : void 0,
        title: "Maximum authors",
        description: ['Truncate authors if above a given number into "and others".'],
        type: "number"
      }, {
        key: "lowercase",
        cli: {
          "--no-lowercase": false
        },
        toCLI: val => val === false ? "--no-lowercase" : void 0,
        title: "Lowercase fields",
        description: ["Lowercase field names and entry type. Enabled by default."],
        type: "boolean",
        defaultValue: true
      }, {
        key: "enclosingBraces",
        cli: {
          "--enclosing-braces": args => args.length > 0 ? args : true
        },
        toCLI: val => {
          if (Array.isArray(val) && val.length > 0) return "--enclosing-braces=".concat(val.join(","));
          if (val === true) return "--enclosing-braces";
          return void 0;
        },
        title: "Enclose values in double braces",
        description: ["Enclose the given fields in double braces, such that case is preserved during BibTeX compilation."],
        examples: ["--enclosing-braces=title,journal (output title and journal fields will be of the form {{This is a title}})", "--enclosing-braces (equivalent to ---enclosing-braces=title)"],
        type: "boolean | string[]",
        valueIfTrue: ["title"]
      }, {
        key: "wrap",
        cli: {
          "--wrap": args => args.length > 0 ? Number(args[0]) : true,
          "--no-wrap": false
        },
        toCLI: val => val ? "--wrap=".concat(val) : void 0,
        title: "Wrap values",
        description: ["Wrap long values at the given column"],
        examples: ["--wrap (80 by default)", "--wrap=82"],
        type: "boolean | number",
        valueIfTrue: 80
      }, {
        key: "version",
        cli: {
          "--version": true,
          "-v": true
        },
        title: "Version",
        description: ["Show bibtex-tidy version."],
        type: "boolean"
      }, {
        key: "quiet",
        cli: {
          "--quiet": true
        },
        title: "Quiet",
        description: ["Suppress logs and warnings."],
        type: "boolean"
      }, {
        key: "backup",
        cli: {
          "--backup": true,
          "--no-backup": false
        },
        title: "Backup",
        description: ["Make a backup <filename>.original. Enabled by default."],
        type: "boolean",
        defaultValue: true
      }];
    }

  }); // src/optionUtils.ts


  function normalizeOptions(options) {
    return Object.fromEntries(optionDefinitions.map(def => {
      var key = def.key;
      var value = options[key];

      if (value === true && def.valueIfTrue !== void 0) {
        return [key, def.valueIfTrue];
      }

      if (value === false && def.valueIfFalse !== void 0) {
        return [key, def.valueIfFalse];
      }

      if (typeof value === "undefined" && def.defaultValue !== void 0) {
        if (typeof def.defaultValue === "function") {
          return [key, def.defaultValue(options)];
        }

        return [key, def.defaultValue];
      }

      return [key, value];
    }));
  }

  var init_optionUtils = __esm({
    "src/optionUtils.ts"() {
      init_optionDefinitions();
    }

  }); // src/bibtex-parser.ts


  function generateAST(input) {
    var _a;

    var rootNode = new RootNode();
    var node = rootNode;
    var line = 1;
    var column = 0;

    for (var i = 0; i < input.length; i++) {
      var char = input[i];
      var prev = input[i - 1];

      if (char === "\n") {
        line++;
        column = 0;
      }

      column++;

      switch (node.type) {
        case "root":
          {
            node = char === "@" ? new BlockNode(node) : new TextNode(node, char);
            break;
          }

        case "text":
          {
            if (char === "@" && /[\s\r\n}]/.test(prev)) {
              node = new BlockNode(node.parent);
            } else {
              node.text += char;
            }

            break;
          }

        case "block":
          {
            if (char === "@") {
              var prevNode = node.parent.children[node.parent.children.length - 2];

              if ((prevNode == null ? void 0 : prevNode.type) === "text") {
                prevNode.text += "@" + node.command;
              } else {
                node.parent.children.pop();
                new TextNode(node.parent, "@" + node.command);
                node.parent.children.push(node);
              }

              node.command = "";
            } else if (char === "{" || char === "(") {
              var commandTrimmed = node.command.trim();

              if (commandTrimmed === "" || /\s/.test(commandTrimmed)) {
                node.parent.children.pop();
                node = new TextNode(node.parent, "@" + node.command + char);
              } else {
                node.command = commandTrimmed;
                var command = node.command.toLowerCase();

                var _ref = char === "{" ? [1, 0] : [0, 1],
                    _ref2 = _slicedToArray(_ref, 2),
                    braces = _ref2[0],
                    parens = _ref2[1];

                var raw = "@" + command + char;

                switch (command) {
                  case "string":
                    node = new StringNode(node, raw, braces, parens);
                    break;

                  case "preamble":
                    node = new PreambleNode(node, raw, braces, parens);
                    break;

                  case "comment":
                    node = new CommentNode(node, raw, braces, parens);
                    break;

                  default:
                    node = new EntryNode(node);
                    break;
                }
              }
            } else if (char.match(/[=#,})\[\]]/)) {
              node.parent.children.pop();
              node = new TextNode(node.parent, "@" + node.command + char);
            } else {
              node.command += char;
            }

            break;
          }

        case "comment":
        case "string":
        case "preamble":
          if (char === "{") {
            node.braces++;
          } else if (char === "}") {
            node.braces--;
          } else if (char === "(") {
            node.parens++;
          } else if (char === ")") {
            node.parens--;
          }

          node.raw += char;

          if (node.braces === 0 && node.parens === 0) {
            node = node.parent.parent;
          }

          break;

        case "entry":
          {
            if (char === "}" || char === ")") {
              node = node.parent.parent;
            } else if (char === ",") {
              node = new FieldNode(node);
            } else if (char === "=") {
              if (!node.key) {
                throw new BibTeXSyntaxError(input, node, i, line, column);
              }

              var field = new FieldNode(node, node.key);
              node.fields.push(field);
              node.key = void 0;
              node = field.value;
            } else if (isWhitespace(char)) {} else if (char.match(/[=#,{}()\[\]]/)) {
              throw new BibTeXSyntaxError(input, node, i, line, column);
            } else {
              node.key = ((_a = node.key) != null ? _a : "") + char;
            }

            break;
          }

        case "field":
          {
            if (char === "}" || char === ")") {
              node.name = node.name.trim();
              node = node.parent.parent.parent;
            } else if (char === "=") {
              node.name = node.name.trim();
              node = node.value;
            } else if (char === ",") {
              node.name = node.name.trim();
              node = new FieldNode(node.parent);
            } else if (/[=,{}()\[\]]/.test(char)) {
              throw new BibTeXSyntaxError(input, node, i, line, column);
            } else if (!node.name) {
              if (!isWhitespace(char)) {
                node.parent.fields.push(node);
                node.name = char;
              } else {}
            } else {
              node.name += char;
            }

            break;
          }

        case "concat":
          {
            if (isWhitespace(char)) {
              break;
            } else if (node.canConsumeValue) {
              if (/[#=,}()\[\]]/.test(char)) {
                throw new BibTeXSyntaxError(input, node, i, line, column);
              } else {
                node.canConsumeValue = false;

                if (char === "{") {
                  node = new BracedNode(node);
                } else if (char === '"') {
                  node = new QuotedNode(node);
                } else {
                  node = new LiteralNode(node, char);
                }
              }
            } else {
              if (char === ",") {
                node = new FieldNode(node.parent.parent);
              } else if (char === "}" || char === ")") {
                node = node.parent.parent.parent.parent;
              } else if (char === "#") {
                node.canConsumeValue = true;
              } else {
                throw new BibTeXSyntaxError(input, node, i, line, column);
              }
            }

            break;
          }

        case "literal":
          if (isWhitespace(char)) {
            node = node.parent;
          } else if (char === ",") {
            node = new FieldNode(node.parent.parent.parent);
          } else if (char === "}") {
            node = node.parent.parent.parent.parent.parent;
          } else if (char === "#") {
            node = node.parent;
            node.canConsumeValue = true;
          } else {
            node.value += char;
          }

          break;

        case "braced":
          if (char === "}" && node.depth === 0) {
            node = node.parent;
            break;
          } else if (char === "{") {
            node.depth++;
          } else if (char === "}") {
            node.depth--;
          }

          node.value += char;
          break;

        case "quoted":
          if (char === '"' && node.depth === 0) {
            node = node.parent;
            break;
          } else if (char === "{") {
            node.depth++;
          } else if (char === "}") {
            node.depth--;

            if (node.depth < 0) {
              throw new BibTeXSyntaxError(input, node, i, line, column);
            }
          }

          node.value += char;
          break;
      }
    }

    return rootNode;
  }

  function isWhitespace(string) {
    return /^[ \t\n\r]*$/.test(string);
  }

  var RootNode, TextNode, BlockNode, CommentNode, PreambleNode, StringNode, EntryNode, FieldNode, ConcatNode, LiteralNode, BracedNode, QuotedNode, BibTeXSyntaxError;

  var init_bibtex_parser = __esm({
    "src/bibtex-parser.ts"() {
      RootNode = class {
        constructor() {
          var children = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
          this.children = children;
          this.type = "root";
        }

      };
      TextNode = class {
        constructor(parent, text) {
          this.parent = parent;
          this.text = text;
          this.type = "text";
          parent.children.push(this);
        }

      };
      BlockNode = class {
        constructor(parent) {
          this.parent = parent;
          this.type = "block";
          this.command = "";
          parent.children.push(this);
        }

      };
      CommentNode = class {
        constructor(parent, raw, braces, parens) {
          this.parent = parent;
          this.raw = raw;
          this.braces = braces;
          this.parens = parens;
          this.type = "comment";
          parent.block = this;
        }

      };
      PreambleNode = class {
        constructor(parent, raw, braces, parens) {
          this.parent = parent;
          this.raw = raw;
          this.braces = braces;
          this.parens = parens;
          this.type = "preamble";
          parent.block = this;
        }

      };
      StringNode = class {
        constructor(parent, raw, braces, parens) {
          this.parent = parent;
          this.raw = raw;
          this.braces = braces;
          this.parens = parens;
          this.type = "string";
          parent.block = this;
        }

      };
      EntryNode = class {
        constructor(parent) {
          this.parent = parent;
          this.type = "entry";
          parent.block = this;
          this.fields = [];
        }

      };
      FieldNode = class {
        constructor(parent) {
          var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
          this.parent = parent;
          this.name = name;
          this.type = "field";
          this.value = new ConcatNode(this);
        }

      };
      ConcatNode = class {
        constructor(parent) {
          this.parent = parent;
          this.type = "concat";
          this.canConsumeValue = true;
          this.concat = [];
        }

      };
      LiteralNode = class {
        constructor(parent, value) {
          this.parent = parent;
          this.value = value;
          this.type = "literal";
          parent.concat.push(this);
        }

      };
      BracedNode = class {
        constructor(parent) {
          this.parent = parent;
          this.type = "braced";
          this.value = "";
          this.depth = 0;
          parent.concat.push(this);
        }

      };
      QuotedNode = class {
        constructor(parent) {
          this.parent = parent;
          this.type = "quoted";
          this.value = "";
          this.depth = 0;
          parent.concat.push(this);
        }

      };
      BibTeXSyntaxError = class extends Error {
        constructor(input, node, pos, line, column) {
          super("Line ".concat(line, ":").concat(column, ": Syntax Error in ").concat(node.type, "\n") + input.slice(Math.max(0, pos - 20), pos) + ">>" + input[pos] + "<<" + input.slice(pos + 1, pos + 20));
          this.node = node;
          this.line = line;
          this.column = column;
          this.name = "Syntax Error";
          this.char = input[pos];
        }

      };
    }

  }); // src/unicode.ts


  var specialCharacters;

  var init_unicode = __esm({
    "src/unicode.ts"() {
      specialCharacters = /* @__PURE__ */new Map([["0023", "\\#"], ["0024", "\\$"], ["0025", "\\%"], ["0026", "\\&"], ["0027", "'"], ["0040", "\\@"], ["002a", "\\textasteriskcentered"], ["005f", "\\_"], ["007c", "\\vert{}"], ["00a0", "~"], ["00a1", "\\textexclamdown{}"], ["00a2", "\\textcent{}"], ["00a3", "\\textsterling{}"], ["00a4", "\\textcurrency{}"], ["00a5", "\\textyen{}"], ["00a6", "\\textbrokenbar{}"], ["00a7", "\\textsection{}"], ["00a8", "\\textasciidieresis{}"], ["00a9", "\\textcopyright{}"], ["00aa", "\\textordfeminine{}"], ["00ab", "\\guillemotleft{}"], ["00ac", "\\lnot{}"], ["00ad", "\\-"], ["00ae", "\\textregistered{}"], ["00af", "\\textasciimacron{}"], ["00b0", "\\textdegree{}"], ["00b1", "\\pm{}"], ["00b2", "\\ensuremath{^2}"], ["00b3", "\\ensuremath{^3}"], ["00b4", "\\textasciiacute{}"], ["00b5", "\\mathrm{\\mu}"], ["00b6", "\\textparagraph{}"], ["00b7", "\\cdot{}"], ["00b8", "\\c{}"], ["00b9", "\\ensuremath{^1}"], ["00ba", "\\textordmasculine{}"], ["00bb", "\\guillemotright{}"], ["00bc", "\\textonequarter{}"], ["00bd", "\\textonehalf{}"], ["00be", "\\textthreequarters{}"], ["00bf", "\\textquestiondown{}"], ["00c0", "\\`{A}"], ["00c1", "\\'{A}"], ["00c2", "\\^{A}"], ["00c3", "\\~{A}"], ["00c4", '\\"{A}'], ["00c5", "\\AA{}"], ["00c6", "\\AE{}"], ["00c7", "\\c{C}"], ["00c8", "\\`{E}"], ["00c9", "\\'{E}"], ["00ca", "\\^{E}"], ["00cb", '\\"{E}'], ["00cc", "\\`{I}"], ["00cd", "\\'{I}"], ["00ce", "\\^{I}"], ["00cf", '\\"{I}'], ["00d0", "\\DH{}"], ["00d1", "\\~{N}"], ["00d2", "\\`{O}"], ["00d3", "\\'{O}"], ["00d4", "\\^{O}"], ["00d5", "\\~{O}"], ["00d6", '\\"{O}'], ["00d7", "\\texttimes{}"], ["00d8", "\\O{}"], ["00d9", "\\`{U}"], ["00da", "\\'{U}"], ["00db", "\\^{U}"], ["00dc", '\\"{U}'], ["00dd", "\\'{Y}"], ["00de", "\\TH{}"], ["00df", "\\ss{}"], ["00e0", "\\`{a}"], ["00e1", "\\'{a}"], ["00e2", "\\^{a}"], ["00e3", "\\~{a}"], ["00e4", '\\"{a}'], ["00e5", "\\aa{}"], ["00e6", "\\ae{}"], ["00e7", "\\c{c}"], ["00e8", "\\`{e}"], ["00e9", "\\'{e}"], ["00ea", "\\^{e}"], ["00eb", '\\"{e}'], ["00ec", "\\`{\\i}"], ["00ed", "\\'{\\i}"], ["00ee", "\\^{\\i}"], ["00ef", '\\"{\\i}'], ["00f0", "\\dh{}"], ["00f1", "\\~{n}"], ["00f2", "\\`{o}"], ["00f3", "\\'{o}"], ["00f4", "\\^{o}"], ["00f5", "\\~{o}"], ["00f6", '\\"{o}'], ["00f7", "\\div{}"], ["00f8", "\\o{}"], ["00f9", "\\`{u}"], ["00fa", "\\'{u}"], ["00fb", "\\^{u}"], ["00fc", '\\"{u}'], ["00fd", "\\'{y}"], ["00fe", "\\th{}"], ["00ff", '\\"{y}'], ["0100", "\\={A}"], ["0101", "\\={a}"], ["0102", "\\u{A}"], ["0103", "\\u{a}"], ["0104", "\\k{A}"], ["0105", "\\k{a}"], ["0106", "\\'{C}"], ["0107", "\\'{c}"], ["0108", "\\^{C}"], ["0109", "\\^{c}"], ["010a", "\\.{C}"], ["010b", "\\.{c}"], ["010c", "\\v{C}"], ["010d", "\\v{c}"], ["010e", "\\v{D}"], ["010f", "\\v{d}"], ["0110", "\\DJ{}"], ["0111", "\\dj{}"], ["0112", "\\={E}"], ["0113", "\\={e}"], ["0114", "\\u{E}"], ["0115", "\\u{e}"], ["0116", "\\.{E}"], ["0117", "\\.{e}"], ["0118", "\\k{E}"], ["0119", "\\k{e}"], ["011a", "\\v{E}"], ["011b", "\\v{e}"], ["011c", "\\^{G}"], ["011d", "\\^{g}"], ["011e", "\\u{G}"], ["011f", "\\u{g}"], ["0120", "\\.{G}"], ["0121", "\\.{g}"], ["0122", "\\c{G}"], ["0123", "\\c{g}"], ["0124", "\\^{H}"], ["0125", "\\^{h}"], ["0126", "{\\fontencoding{LELA}\\selectfont\\char40}"], ["0127", "\\Elzxh{}"], ["0128", "\\~{I}"], ["0129", "\\~{\\i}"], ["012a", "\\={I}"], ["012b", "\\={\\i}"], ["012c", "\\u{I}"], ["012d", "\\u{\\i}"], ["012e", "\\k{I}"], ["012f", "\\k{i}"], ["0130", "\\.{I}"], ["0131", "\\i{}"], ["0132", "IJ"], ["0133", "ij"], ["0134", "\\^{J}"], ["0135", "\\^{\\j}"], ["0136", "\\c{K}"], ["0137", "\\c{k}"], ["0138", "{\\fontencoding{LELA}\\selectfont\\char91}"], ["0139", "\\'{L}"], ["013a", "\\'{l}"], ["013b", "\\c{L}"], ["013c", "\\c{l}"], ["013d", "\\v{L}"], ["013e", "\\v{l}"], ["013f", "{\\fontencoding{LELA}\\selectfont\\char201}"], ["0140", "{\\fontencoding{LELA}\\selectfont\\char202}"], ["0141", "\\L{}"], ["0142", "\\l{}"], ["0143", "\\'{N}"], ["0144", "\\'{n}"], ["0145", "\\c{N}"], ["0146", "\\c{n}"], ["0147", "\\v{N}"], ["0148", "\\v{n}"], ["0149", "'n"], ["014a", "\\NG{}"], ["014b", "\\ng{}"], ["014c", "\\={O}"], ["014d", "\\={o}"], ["014e", "\\u{O}"], ["014f", "\\u{o}"], ["0150", "\\H{O}"], ["0151", "\\H{o}"], ["0152", "\\OE{}"], ["0153", "\\oe{}"], ["0154", "\\'{R}"], ["0155", "\\'{r}"], ["0156", "\\c{R}"], ["0157", "\\c{r}"], ["0158", "\\v{R}"], ["0159", "\\v{r}"], ["015a", "\\'{S}"], ["015b", "\\'{s}"], ["015c", "\\^{S}"], ["015d", "\\^{s}"], ["015e", "\\c{S}"], ["015f", "\\c{s}"], ["0160", "\\v{S}"], ["0161", "\\v{s}"], ["0162", "\\c{T}"], ["0163", "\\c{t}"], ["0164", "\\v{T}"], ["0165", "\\v{t}"], ["0166", "{\\fontencoding{LELA}\\selectfont\\char47}"], ["0167", "{\\fontencoding{LELA}\\selectfont\\char63}"], ["0168", "\\~{U}"], ["0169", "\\~{u}"], ["016a", "\\={U}"], ["016b", "\\={u}"], ["016c", "\\u{U}"], ["016d", "\\u{u}"], ["016e", "\\r{U}"], ["016f", "\\r{u}"], ["0170", "\\H{U}"], ["0171", "\\H{u}"], ["0172", "\\k{U}"], ["0173", "\\k{u}"], ["0174", "\\^{W}"], ["0175", "\\^{w}"], ["0176", "\\^{Y}"], ["0177", "\\^{y}"], ["0178", '\\"{Y}'], ["0179", "\\'{Z}"], ["017a", "\\'{z}"], ["017b", "\\.{Z}"], ["017c", "\\.{z}"], ["017d", "\\v{Z}"], ["017e", "\\v{z}"], ["0195", "\\texthvlig{}"], ["019e", "\\textnrleg{}"], ["01aa", "\\eth{}"], ["01ba", "{\\fontencoding{LELA}\\selectfont\\char195}"], ["01c2", "\\textdoublepipe{}"], ["01f5", "\\'{g}"], ["0250", "\\Elztrna{}"], ["0252", "\\Elztrnsa{}"], ["0254", "\\Elzopeno{}"], ["0256", "\\Elzrtld{}"], ["0258", "{\\fontencoding{LEIP}\\selectfont\\char61}"], ["0259", "\\Elzschwa{}"], ["025b", "\\varepsilon{}"], ["0263", "\\Elzpgamma{}"], ["0264", "\\Elzpbgam{}"], ["0265", "\\Elztrnh{}"], ["026c", "\\Elzbtdl{}"], ["026d", "\\Elzrtll{}"], ["026f", "\\Elztrnm{}"], ["0270", "\\Elztrnmlr{}"], ["0271", "\\Elzltlmr{}"], ["0272", "\\Elzltln{}"], ["0273", "\\Elzrtln{}"], ["0277", "\\Elzclomeg{}"], ["0278", "\\textphi{}"], ["0279", "\\Elztrnr{}"], ["027a", "\\Elztrnrl{}"], ["027b", "\\Elzrttrnr{}"], ["027c", "\\Elzrl{}"], ["027d", "\\Elzrtlr{}"], ["027e", "\\Elzfhr{}"], ["027f", "{\\fontencoding{LEIP}\\selectfont\\char202}"], ["0282", "\\Elzrtls{}"], ["0283", "\\Elzesh{}"], ["0287", "\\Elztrnt{}"], ["0288", "\\Elzrtlt{}"], ["028a", "\\Elzpupsil{}"], ["028b", "\\Elzpscrv{}"], ["028c", "\\Elzinvv{}"], ["028d", "\\Elzinvw{}"], ["028e", "\\Elztrny{}"], ["0290", "\\Elzrtlz{}"], ["0292", "\\Elzyogh{}"], ["0294", "\\Elzglst{}"], ["0295", "\\Elzreglst{}"], ["0296", "\\Elzinglst{}"], ["029e", "\\textturnk{}"], ["02a4", "\\Elzdyogh{}"], ["02a7", "\\Elztesh{}"], ["02c7", "\\textasciicaron{}"], ["02c8", "\\Elzverts{}"], ["02cc", "\\Elzverti{}"], ["02d0", "\\Elzlmrk{}"], ["02d1", "\\Elzhlmrk{}"], ["02d2", "\\Elzsbrhr{}"], ["02d3", "\\Elzsblhr{}"], ["02d4", "\\Elzrais{}"], ["02d5", "\\Elzlow{}"], ["02d8", "\\textasciibreve{}"], ["02d9", "\\textperiodcentered{}"], ["02da", "\\r{}"], ["02db", "\\k{}"], ["02dc", "\\texttildelow{}"], ["02dd", "\\H{}"], ["02e5", "\\tone{55}"], ["02e6", "\\tone{44}"], ["02e7", "\\tone{33}"], ["02e8", "\\tone{22}"], ["02e9", "\\tone{11}"], ["0300", "\\`"], ["0301", "\\'"], ["0302", "\\^"], ["0303", "\\~"], ["0304", "\\="], ["0306", "\\u"], ["0307", "\\."], ["0308", '\\"'], ["030a", "\\r"], ["030b", "\\H"], ["030c", "\\v"], ["030f", "\\cyrchar\\C"], ["0311", "{\\fontencoding{LECO}\\selectfont\\char177}"], ["0318", "{\\fontencoding{LECO}\\selectfont\\char184}"], ["0319", "{\\fontencoding{LECO}\\selectfont\\char185}"], ["0321", "\\Elzpalh{}"], ["0322", "\\Elzrh{}"], ["0327", "\\c"], ["0328", "\\k"], ["032a", "\\Elzsbbrg{}"], ["032b", "{\\fontencoding{LECO}\\selectfont\\char203}"], ["032f", "{\\fontencoding{LECO}\\selectfont\\char207}"], ["0335", "\\Elzxl{}"], ["0336", "\\Elzbar{}"], ["0337", "{\\fontencoding{LECO}\\selectfont\\char215}"], ["0338", "{\\fontencoding{LECO}\\selectfont\\char216}"], ["033a", "{\\fontencoding{LECO}\\selectfont\\char218}"], ["033b", "{\\fontencoding{LECO}\\selectfont\\char219}"], ["033c", "{\\fontencoding{LECO}\\selectfont\\char220}"], ["033d", "{\\fontencoding{LECO}\\selectfont\\char221}"], ["0361", "{\\fontencoding{LECO}\\selectfont\\char225}"], ["0386", "\\'{A}"], ["0388", "\\'{E}"], ["0389", "\\'{H}"], ["038a", "\\'{}{I}"], ["038c", "\\'{}O"], ["038e", "\\mathrm{'Y}"], ["038f", "\\mathrm{'\\Omega}"], ["0390", "\\acute{\\ddot{\\iota}}"], ["0391", "\\ensuremath{\\Alpha}"], ["0392", "\\ensuremath{\\Beta}"], ["0393", "\\ensuremath{\\Gamma}"], ["0394", "\\ensuremath{\\Delta}"], ["0395", "\\ensuremath{\\Epsilon}"], ["0396", "\\ensuremath{\\Zeta}"], ["0397", "\\ensuremath{\\Eta}"], ["0398", "\\ensuremath{\\Theta}"], ["0399", "\\ensuremath{\\Iota}"], ["039a", "\\ensuremath{\\Kappa}"], ["039b", "\\ensuremath{\\Lambda}"], ["039e", "\\ensuremath{\\Xi}"], ["03a0", "\\ensuremath{\\Pi}"], ["03a1", "\\ensuremath{\\Rho}"], ["03a3", "\\ensuremath{\\Sigma}"], ["03a4", "\\ensuremath{\\Tau}"], ["03a5", "\\ensuremath{\\Upsilon}"], ["03a6", "\\ensuremath{\\Phi}"], ["03a7", "\\ensuremath{\\Chi}"], ["03a8", "\\ensuremath{\\Psi}"], ["03a9", "\\ensuremath{\\Omega}"], ["03aa", "\\mathrm{\\ddot{I}}"], ["03ab", "\\mathrm{\\ddot{Y}}"], ["03ac", "\\'{$\\alpha$}"], ["03ad", "\\acute{\\epsilon}"], ["03ae", "\\acute{\\eta}"], ["03af", "\\acute{\\iota}"], ["03b0", "\\acute{\\ddot{\\upsilon}}"], ["03b1", "\\ensuremath{\\alpha}"], ["03b2", "\\ensuremath{\\beta}"], ["03b3", "\\ensuremath{\\gamma}"], ["03b4", "\\ensuremath{\\delta}"], ["03b5", "\\ensuremath{\\epsilon}"], ["03b6", "\\ensuremath{\\zeta}"], ["03b7", "\\ensuremath{\\eta}"], ["03b8", "\\texttheta{}"], ["03b9", "\\ensuremath{\\iota}"], ["03ba", "\\ensuremath{\\kappa}"], ["03bb", "\\ensuremath{\\lambda}"], ["03bc", "\\ensuremath{\\mu}"], ["03bd", "\\ensuremath{\\nu}"], ["03be", "\\ensuremath{\\xi}"], ["03c0", "\\ensuremath{\\pi}"], ["03c1", "\\ensuremath{\\rho}"], ["03c2", "\\ensuremath{\\varsigma}"], ["03c3", "\\ensuremath{\\sigma}"], ["03c4", "\\ensuremath{\\tau}"], ["03c5", "\\ensuremath{\\upsilon}"], ["03c6", "\\ensuremath{\\varphi}"], ["03c7", "\\ensuremath{\\chi}"], ["03c8", "\\ensuremath{\\psi}"], ["03c9", "\\ensuremath{\\omega}"], ["03ca", "\\ensuremath{\\ddot{\\iota}}"], ["03cb", "\\ensuremath{\\ddot{\\upsilon}}"], ["03cc", "\\'{o}"], ["03cd", "\\acute{\\upsilon}"], ["03ce", "\\acute{\\omega}"], ["03d0", "\\Pisymbol{ppi022}{87}"], ["03d1", "\\textvartheta{}"], ["03d2", "\\ensuremath{\\Upsilon}"], ["03d5", "\\ensuremath{\\phi}"], ["03d6", "\\ensuremath{\\varpi}"], ["03da", "\\Stigma{}"], ["03dc", "\\Digamma{}"], ["03dd", "\\digamma{}"], ["03de", "\\Koppa{}"], ["03e0", "\\Sampi{}"], ["03f0", "\\varkappa{}"], ["03f1", "\\varrho{}"], ["03f4", "\\textTheta{}"], ["03f6", "\\backepsilon{}"], ["0401", "\\cyrchar\\CYRYO{}"], ["0402", "\\cyrchar\\CYRDJE{}"], ["0403", "\\cyrchar{\\'\\CYRG}"], ["0404", "\\cyrchar\\CYRIE{}"], ["0405", "\\cyrchar\\CYRDZE{}"], ["0406", "\\cyrchar\\CYRII{}"], ["0407", "\\cyrchar\\CYRYI{}"], ["0408", "\\cyrchar\\CYRJE{}"], ["0409", "\\cyrchar\\CYRLJE{}"], ["040a", "\\cyrchar\\CYRNJE{}"], ["040b", "\\cyrchar\\CYRTSHE{}"], ["040c", "\\cyrchar{\\'\\CYRK}"], ["040e", "\\cyrchar\\CYRUSHRT{}"], ["040f", "\\cyrchar\\CYRDZHE{}"], ["0410", "\\cyrchar\\CYRA{}"], ["0411", "\\cyrchar\\CYRB{}"], ["0412", "\\cyrchar\\CYRV{}"], ["0413", "\\cyrchar\\CYRG{}"], ["0414", "\\cyrchar\\CYRD{}"], ["0415", "\\cyrchar\\CYRE{}"], ["0416", "\\cyrchar\\CYRZH{}"], ["0417", "\\cyrchar\\CYRZ{}"], ["0418", "\\cyrchar\\CYRI{}"], ["0419", "\\cyrchar\\CYRISHRT{}"], ["041a", "\\cyrchar\\CYRK{}"], ["041b", "\\cyrchar\\CYRL{}"], ["041c", "\\cyrchar\\CYRM{}"], ["041d", "\\cyrchar\\CYRN{}"], ["041e", "\\cyrchar\\CYRO{}"], ["041f", "\\cyrchar\\CYRP{}"], ["0420", "\\cyrchar\\CYRR{}"], ["0421", "\\cyrchar\\CYRS{}"], ["0422", "\\cyrchar\\CYRT{}"], ["0423", "\\cyrchar\\CYRU{}"], ["0424", "\\cyrchar\\CYRF{}"], ["0425", "\\cyrchar\\CYRH{}"], ["0426", "\\cyrchar\\CYRC{}"], ["0427", "\\cyrchar\\CYRCH{}"], ["0428", "\\cyrchar\\CYRSH{}"], ["0429", "\\cyrchar\\CYRSHCH{}"], ["042a", "\\cyrchar\\CYRHRDSN{}"], ["042b", "\\cyrchar\\CYRERY{}"], ["042c", "\\cyrchar\\CYRSFTSN{}"], ["042d", "\\cyrchar\\CYREREV{}"], ["042e", "\\cyrchar\\CYRYU{}"], ["042f", "\\cyrchar\\CYRYA{}"], ["0430", "\\cyrchar\\cyra{}"], ["0431", "\\cyrchar\\cyrb{}"], ["0432", "\\cyrchar\\cyrv{}"], ["0433", "\\cyrchar\\cyrg{}"], ["0434", "\\cyrchar\\cyrd{}"], ["0435", "\\cyrchar\\cyre{}"], ["0436", "\\cyrchar\\cyrzh{}"], ["0437", "\\cyrchar\\cyrz{}"], ["0438", "\\cyrchar\\cyri{}"], ["0439", "\\cyrchar\\cyrishrt{}"], ["043a", "\\cyrchar\\cyrk{}"], ["043b", "\\cyrchar\\cyrl{}"], ["043c", "\\cyrchar\\cyrm{}"], ["043d", "\\cyrchar\\cyrn{}"], ["043e", "\\cyrchar\\cyro{}"], ["043f", "\\cyrchar\\cyrp{}"], ["0440", "\\cyrchar\\cyrr{}"], ["0441", "\\cyrchar\\cyrs{}"], ["0442", "\\cyrchar\\cyrt{}"], ["0443", "\\cyrchar\\cyru{}"], ["0444", "\\cyrchar\\cyrf{}"], ["0445", "\\cyrchar\\cyrh{}"], ["0446", "\\cyrchar\\cyrc{}"], ["0447", "\\cyrchar\\cyrch{}"], ["0448", "\\cyrchar\\cyrsh{}"], ["0449", "\\cyrchar\\cyrshch{}"], ["044a", "\\cyrchar\\cyrhrdsn{}"], ["044b", "\\cyrchar\\cyrery{}"], ["044c", "\\cyrchar\\cyrsftsn{}"], ["044d", "\\cyrchar\\cyrerev{}"], ["044e", "\\cyrchar\\cyryu{}"], ["044f", "\\cyrchar\\cyrya{}"], ["0451", "\\cyrchar\\cyryo{}"], ["0452", "\\cyrchar\\cyrdje{}"], ["0453", "\\cyrchar{\\'\\cyrg}"], ["0454", "\\cyrchar\\cyrie{}"], ["0455", "\\cyrchar\\cyrdze{}"], ["0456", "\\cyrchar\\cyrii{}"], ["0457", "\\cyrchar\\cyryi{}"], ["0458", "\\cyrchar\\cyrje{}"], ["0459", "\\cyrchar\\cyrlje{}"], ["045a", "\\cyrchar\\cyrnje{}"], ["045b", "\\cyrchar\\cyrtshe{}"], ["045c", "\\cyrchar{\\'\\cyrk}"], ["045e", "\\cyrchar\\cyrushrt{}"], ["045f", "\\cyrchar\\cyrdzhe{}"], ["0460", "\\cyrchar\\CYROMEGA{}"], ["0461", "\\cyrchar\\cyromega{}"], ["0462", "\\cyrchar\\CYRYAT{}"], ["0464", "\\cyrchar\\CYRIOTE{}"], ["0465", "\\cyrchar\\cyriote{}"], ["0466", "\\cyrchar\\CYRLYUS{}"], ["0467", "\\cyrchar\\cyrlyus{}"], ["0468", "\\cyrchar\\CYRIOTLYUS{}"], ["0469", "\\cyrchar\\cyriotlyus{}"], ["046a", "\\cyrchar\\CYRBYUS{}"], ["046c", "\\cyrchar\\CYRIOTBYUS{}"], ["046d", "\\cyrchar\\cyriotbyus{}"], ["046e", "\\cyrchar\\CYRKSI{}"], ["046f", "\\cyrchar\\cyrksi{}"], ["0470", "\\cyrchar\\CYRPSI{}"], ["0471", "\\cyrchar\\cyrpsi{}"], ["0472", "\\cyrchar\\CYRFITA{}"], ["0474", "\\cyrchar\\CYRIZH{}"], ["0478", "\\cyrchar\\CYRUK{}"], ["0479", "\\cyrchar\\cyruk{}"], ["047a", "\\cyrchar\\CYROMEGARND{}"], ["047b", "\\cyrchar\\cyromegarnd{}"], ["047c", "\\cyrchar\\CYROMEGATITLO{}"], ["047d", "\\cyrchar\\cyromegatitlo{}"], ["047e", "\\cyrchar\\CYROT{}"], ["047f", "\\cyrchar\\cyrot{}"], ["0480", "\\cyrchar\\CYRKOPPA{}"], ["0481", "\\cyrchar\\cyrkoppa{}"], ["0482", "\\cyrchar\\cyrthousands{}"], ["0488", "\\cyrchar\\cyrhundredthousands{}"], ["0489", "\\cyrchar\\cyrmillions{}"], ["048c", "\\cyrchar\\CYRSEMISFTSN{}"], ["048d", "\\cyrchar\\cyrsemisftsn{}"], ["048e", "\\cyrchar\\CYRRTICK{}"], ["048f", "\\cyrchar\\cyrrtick{}"], ["0490", "\\cyrchar\\CYRGUP{}"], ["0491", "\\cyrchar\\cyrgup{}"], ["0492", "\\cyrchar\\CYRGHCRS{}"], ["0493", "\\cyrchar\\cyrghcrs{}"], ["0494", "\\cyrchar\\CYRGHK{}"], ["0495", "\\cyrchar\\cyrghk{}"], ["0496", "\\cyrchar\\CYRZHDSC{}"], ["0497", "\\cyrchar\\cyrzhdsc{}"], ["0498", "\\cyrchar\\CYRZDSC{}"], ["0499", "\\cyrchar\\cyrzdsc{}"], ["049a", "\\cyrchar\\CYRKDSC{}"], ["049b", "\\cyrchar\\cyrkdsc{}"], ["049c", "\\cyrchar\\CYRKVCRS{}"], ["049d", "\\cyrchar\\cyrkvcrs{}"], ["049e", "\\cyrchar\\CYRKHCRS{}"], ["049f", "\\cyrchar\\cyrkhcrs{}"], ["04a0", "\\cyrchar\\CYRKBEAK{}"], ["04a1", "\\cyrchar\\cyrkbeak{}"], ["04a2", "\\cyrchar\\CYRNDSC{}"], ["04a3", "\\cyrchar\\cyrndsc{}"], ["04a4", "\\cyrchar\\CYRNG{}"], ["04a5", "\\cyrchar\\cyrng{}"], ["04a6", "\\cyrchar\\CYRPHK{}"], ["04a7", "\\cyrchar\\cyrphk{}"], ["04a8", "\\cyrchar\\CYRABHHA{}"], ["04a9", "\\cyrchar\\cyrabhha{}"], ["04aa", "\\cyrchar\\CYRSDSC{}"], ["04ab", "\\cyrchar\\cyrsdsc{}"], ["04ac", "\\cyrchar\\CYRTDSC{}"], ["04ad", "\\cyrchar\\cyrtdsc{}"], ["04ae", "\\cyrchar\\CYRY{}"], ["04af", "\\cyrchar\\cyry{}"], ["04b0", "\\cyrchar\\CYRYHCRS{}"], ["04b1", "\\cyrchar\\cyryhcrs{}"], ["04b2", "\\cyrchar\\CYRHDSC{}"], ["04b3", "\\cyrchar\\cyrhdsc{}"], ["04b4", "\\cyrchar\\CYRTETSE{}"], ["04b5", "\\cyrchar\\cyrtetse{}"], ["04b6", "\\cyrchar\\CYRCHRDSC{}"], ["04b7", "\\cyrchar\\cyrchrdsc{}"], ["04b8", "\\cyrchar\\CYRCHVCRS{}"], ["04b9", "\\cyrchar\\cyrchvcrs{}"], ["04ba", "\\cyrchar\\CYRSHHA{}"], ["04bb", "\\cyrchar\\cyrshha{}"], ["04bc", "\\cyrchar\\CYRABHCH{}"], ["04bd", "\\cyrchar\\cyrabhch{}"], ["04be", "\\cyrchar\\CYRABHCHDSC{}"], ["04bf", "\\cyrchar\\cyrabhchdsc{}"], ["04c0", "\\cyrchar\\CYRpalochka{}"], ["04c3", "\\cyrchar\\CYRKHK{}"], ["04c4", "\\cyrchar\\cyrkhk{}"], ["04c7", "\\cyrchar\\CYRNHK{}"], ["04c8", "\\cyrchar\\cyrnhk{}"], ["04cb", "\\cyrchar\\CYRCHLDSC{}"], ["04cc", "\\cyrchar\\cyrchldsc{}"], ["04d4", "\\cyrchar\\CYRAE{}"], ["04d5", "\\cyrchar\\cyrae{}"], ["04d8", "\\cyrchar\\CYRSCHWA{}"], ["04d9", "\\cyrchar\\cyrschwa{}"], ["04e0", "\\cyrchar\\CYRABHDZE{}"], ["04e1", "\\cyrchar\\cyrabhdze{}"], ["04e8", "\\cyrchar\\CYROTLD{}"], ["04e9", "\\cyrchar\\cyrotld{}"], ["2002", "\\hspace{0.6em}"], ["2003", "\\hspace{1em}"], ["2004", "\\hspace{0.33em}"], ["2005", "\\hspace{0.25em}"], ["2006", "\\hspace{0.166em}"], ["2007", "\\hphantom{0}"], ["2008", "\\hphantom{,}"], ["2009", "\\hspace{0.167em}"], ["200a", "\\mkern1mu{}"], ["2010", "-"], ["2014", "--"], ["2015", "\\rule{1em}{1pt}"], ["2016", "\\Vert{}"], ["2018", "`"], ["2019", "'"], ["201b", "\\Elzreapos{}"], ["201c", "``"], ["201d", "''"], ["201e", ",,"], ["2020", "\\textdagger{}"], ["2021", "\\textdaggerdbl{}"], ["2022", "\\textbullet{}"], ["2025", ".."], ["2026", "\\ldots{}"], ["2030", "\\textperthousand{}"], ["2031", "\\textpertenthousand{}"], ["2032", "\\ensuremath{'}"], ["2033", "\\ensuremath{''}"], ["2034", "\\ensuremath{'''}"], ["2035", "\\backprime{}"], ["2039", "\\guilsinglleft{}"], ["203a", "\\guilsinglright{}"], ["2057", "''''"], ["205f", "\\mkern4mu{}"], ["2060", "\\nolinebreak{}"], ["20a7", "\\ensuremath{\\Elzpes}"], ["20ac", "\\mbox{\\texteuro}{}"], ["20db", "\\dddot{}"], ["20dc", "\\ddddot{}"], ["2102", "\\mathbb{C}"], ["210a", "\\mathscr{g}"], ["210b", "\\mathscr{H}"], ["210c", "\\mathfrak{H}"], ["210d", "\\mathbb{H}"], ["210f", "\\hslash{}"], ["2110", "\\mathscr{I}"], ["2111", "\\mathfrak{I}"], ["2112", "\\mathscr{L}"], ["2113", "\\mathscr{l}"], ["2115", "\\mathbb{N}"], ["2116", "\\cyrchar\\textnumero{}"], ["2118", "\\wp{}"], ["2119", "\\mathbb{P}"], ["211a", "\\mathbb{Q}"], ["211b", "\\mathscr{R}"], ["211c", "\\mathfrak{R}"], ["211d", "\\mathbb{R}"], ["211e", "\\Elzxrat{}"], ["2122", "\\texttrademark{}"], ["2124", "\\mathbb{Z}"], ["2126", "\\Omega{}"], ["2127", "\\mho{}"], ["2128", "\\mathfrak{Z}"], ["2129", "\\ElsevierGlyph{2129}"], ["212b", "\\AA{}"], ["212c", "\\mathscr{B}"], ["212d", "\\mathfrak{C}"], ["212f", "\\mathscr{e}"], ["2130", "\\mathscr{E}"], ["2131", "\\mathscr{F}"], ["2133", "\\mathscr{M}"], ["2134", "\\mathscr{o}"], ["2135", "\\aleph{}"], ["2136", "\\beth{}"], ["2137", "\\gimel{}"], ["2138", "\\daleth{}"], ["2153", "\\textfrac{1}{3}"], ["2154", "\\textfrac{2}{3}"], ["2155", "\\textfrac{1}{5}"], ["2156", "\\textfrac{2}{5}"], ["2157", "\\textfrac{3}{5}"], ["2158", "\\textfrac{4}{5}"], ["2159", "\\textfrac{1}{6}"], ["215a", "\\textfrac{5}{6}"], ["215b", "\\textfrac{1}{8}"], ["215c", "\\textfrac{3}{8}"], ["215d", "\\textfrac{5}{8}"], ["215e", "\\textfrac{7}{8}"], ["2190", "\\leftarrow{}"], ["2191", "\\uparrow{}"], ["2192", "\\rightarrow{}"], ["2193", "\\downarrow{}"], ["2194", "\\leftrightarrow{}"], ["2195", "\\updownarrow{}"], ["2196", "\\nwarrow{}"], ["2197", "\\nearrow{}"], ["2198", "\\searrow{}"], ["2199", "\\swarrow{}"], ["219a", "\\nleftarrow{}"], ["219b", "\\nrightarrow{}"], ["219c", "\\arrowwaveright{}"], ["219d", "\\arrowwaveright{}"], ["219e", "\\twoheadleftarrow{}"], ["21a0", "\\twoheadrightarrow{}"], ["21a2", "\\leftarrowtail{}"], ["21a3", "\\rightarrowtail{}"], ["21a6", "\\mapsto{}"], ["21a9", "\\hookleftarrow{}"], ["21aa", "\\hookrightarrow{}"], ["21ab", "\\looparrowleft{}"], ["21ac", "\\looparrowright{}"], ["21ad", "\\leftrightsquigarrow{}"], ["21ae", "\\nleftrightarrow{}"], ["21b0", "\\Lsh{}"], ["21b1", "\\Rsh{}"], ["21b3", "\\ElsevierGlyph{21B3}"], ["21b6", "\\curvearrowleft{}"], ["21b7", "\\curvearrowright{}"], ["21ba", "\\circlearrowleft{}"], ["21bb", "\\circlearrowright{}"], ["21bc", "\\leftharpoonup{}"], ["21bd", "\\leftharpoondown{}"], ["21be", "\\upharpoonright{}"], ["21bf", "\\upharpoonleft{}"], ["21c0", "\\rightharpoonup{}"], ["21c1", "\\rightharpoondown{}"], ["21c2", "\\downharpoonright{}"], ["21c3", "\\downharpoonleft{}"], ["21c4", "\\rightleftarrows{}"], ["21c5", "\\dblarrowupdown{}"], ["21c6", "\\leftrightarrows{}"], ["21c7", "\\leftleftarrows{}"], ["21c8", "\\upuparrows{}"], ["21c9", "\\rightrightarrows{}"], ["21ca", "\\downdownarrows{}"], ["21cb", "\\leftrightharpoons{}"], ["21cc", "\\rightleftharpoons{}"], ["21cd", "\\nLeftarrow{}"], ["21ce", "\\nLeftrightarrow{}"], ["21cf", "\\nRightarrow{}"], ["21d0", "\\Leftarrow{}"], ["21d1", "\\Uparrow{}"], ["21d2", "\\Rightarrow{}"], ["21d3", "\\Downarrow{}"], ["21d4", "\\Leftrightarrow{}"], ["21d5", "\\Updownarrow{}"], ["21da", "\\Lleftarrow{}"], ["21db", "\\Rrightarrow{}"], ["21dd", "\\rightsquigarrow{}"], ["21f5", "\\DownArrowUpArrow{}"], ["2200", "\\forall{}"], ["2201", "\\complement{}"], ["2202", "\\partial{}"], ["2203", "\\exists{}"], ["2204", "\\nexists{}"], ["2205", "\\varnothing{}"], ["2207", "\\nabla{}"], ["2208", "\\in{}"], ["2209", "\\not\\in{}"], ["220b", "\\ni{}"], ["220c", "\\not\\ni{}"], ["220f", "\\prod{}"], ["2210", "\\coprod{}"], ["2211", "\\sum{}"], ["2212", "-"], ["2213", "\\mp{}"], ["2214", "\\dotplus{}"], ["2216", "\\setminus{}"], ["2217", "{\\_\\ast}"], ["2218", "\\circ{}"], ["2219", "\\bullet{}"], ["221a", "\\surd{}"], ["221d", "\\propto{}"], ["221e", "\\infty{}"], ["221f", "\\rightangle{}"], ["2220", "\\angle{}"], ["2221", "\\measuredangle{}"], ["2222", "\\sphericalangle{}"], ["2223", "\\mid{}"], ["2224", "\\nmid{}"], ["2225", "\\parallel{}"], ["2226", "\\nparallel{}"], ["2227", "\\wedge{}"], ["2228", "\\vee{}"], ["2229", "\\cap{}"], ["222a", "\\cup{}"], ["222b", "\\int{}"], ["222c", "\\int\\!\\int{}"], ["222d", "\\int\\!\\int\\!\\int{}"], ["222e", "\\oint{}"], ["222f", "\\surfintegral{}"], ["2230", "\\volintegral{}"], ["2231", "\\clwintegral{}"], ["2232", "\\ElsevierGlyph{2232}"], ["2233", "\\ElsevierGlyph{2233}"], ["2234", "\\therefore{}"], ["2235", "\\because{}"], ["2237", "\\Colon{}"], ["2238", "\\ElsevierGlyph{2238}"], ["223a", "\\mathbin{{:}\\!\\!{-}\\!\\!{:}}"], ["223b", "\\homothetic{}"], ["223c", "\\sim{}"], ["223d", "\\backsim{}"], ["223e", "\\lazysinv{}"], ["2240", "\\wr{}"], ["2241", "\\not\\sim{}"], ["2242", "\\ElsevierGlyph{2242}"], ["2243", "\\simeq{}"], ["2244", "\\not\\simeq{}"], ["2245", "\\cong{}"], ["2246", "\\approxnotequal{}"], ["2247", "\\not\\cong{}"], ["2248", "\\approx{}"], ["2249", "\\not\\approx{}"], ["224a", "\\approxeq{}"], ["224b", "\\tildetrpl{}"], ["224c", "\\allequal{}"], ["224d", "\\asymp{}"], ["224e", "\\Bumpeq{}"], ["224f", "\\bumpeq{}"], ["2250", "\\doteq{}"], ["2251", "\\doteqdot{}"], ["2252", "\\fallingdotseq{}"], ["2253", "\\risingdotseq{}"], ["2254", ":="], ["2255", "=:"], ["2256", "\\eqcirc{}"], ["2257", "\\circeq{}"], ["2259", "\\estimates{}"], ["225a", "\\ElsevierGlyph{225A}"], ["225b", "\\starequal{}"], ["225c", "\\triangleq{}"], ["225f", "\\ElsevierGlyph{225F}"], ["2260", "\\not ="], ["2261", "\\equiv{}"], ["2262", "\\not\\equiv{}"], ["2264", "\\leq{}"], ["2265", "\\geq{}"], ["2266", "\\leqq{}"], ["2267", "\\geqq{}"], ["2268", "\\lneqq{}"], ["2269", "\\gneqq{}"], ["226a", "\\ll{}"], ["226b", "\\gg{}"], ["226c", "\\between{}"], ["226d", "\\not\\kern-0.3em\\times{}"], ["226e", "\\not&lt;"], ["226f", "\\not&gt;"], ["2270", "\\not\\leq{}"], ["2271", "\\not\\geq{}"], ["2272", "\\lessequivlnt{}"], ["2273", "\\greaterequivlnt{}"], ["2274", "\\ElsevierGlyph{2274}"], ["2275", "\\ElsevierGlyph{2275}"], ["2276", "\\lessgtr{}"], ["2277", "\\gtrless{}"], ["2278", "\\notlessgreater{}"], ["2279", "\\notgreaterless{}"], ["227a", "\\prec{}"], ["227b", "\\succ{}"], ["227c", "\\preccurlyeq{}"], ["227d", "\\succcurlyeq{}"], ["227e", "\\precapprox{}"], ["227f", "\\succapprox{}"], ["2280", "\\not\\prec{}"], ["2281", "\\not\\succ{}"], ["2282", "\\subset{}"], ["2283", "\\supset{}"], ["2284", "\\not\\subset{}"], ["2285", "\\not\\supset{}"], ["2286", "\\subseteq{}"], ["2287", "\\supseteq{}"], ["2288", "\\not\\subseteq{}"], ["2289", "\\not\\supseteq{}"], ["228a", "\\subsetneq{}"], ["228b", "\\supsetneq{}"], ["228e", "\\uplus{}"], ["228f", "\\sqsubset{}"], ["2290", "\\sqsupset{}"], ["2291", "\\sqsubseteq{}"], ["2292", "\\sqsupseteq{}"], ["2293", "\\sqcap{}"], ["2294", "\\sqcup{}"], ["2295", "\\oplus{}"], ["2296", "\\ominus{}"], ["2297", "\\otimes{}"], ["2298", "\\oslash{}"], ["2299", "\\odot{}"], ["229a", "\\circledcirc{}"], ["229b", "\\circledast{}"], ["229d", "\\circleddash{}"], ["229e", "\\boxplus{}"], ["229f", "\\boxminus{}"], ["22a0", "\\boxtimes{}"], ["22a1", "\\boxdot{}"], ["22a2", "\\vdash{}"], ["22a3", "\\dashv{}"], ["22a4", "\\top{}"], ["22a5", "\\perp{}"], ["22a7", "\\truestate{}"], ["22a8", "\\forcesextra{}"], ["22a9", "\\Vdash{}"], ["22aa", "\\Vvdash{}"], ["22ab", "\\VDash{}"], ["22ac", "\\nvdash{}"], ["22ad", "\\nvDash{}"], ["22ae", "\\nVdash{}"], ["22af", "\\nVDash{}"], ["22b2", "\\vartriangleleft{}"], ["22b3", "\\vartriangleright{}"], ["22b4", "\\trianglelefteq{}"], ["22b5", "\\trianglerighteq{}"], ["22b6", "\\original{}"], ["22b7", "\\image{}"], ["22b8", "\\multimap{}"], ["22b9", "\\hermitconjmatrix{}"], ["22ba", "\\intercal{}"], ["22bb", "\\veebar{}"], ["22be", "\\rightanglearc{}"], ["22c0", "\\ElsevierGlyph{22C0}"], ["22c1", "\\ElsevierGlyph{22C1}"], ["22c2", "\\bigcap{}"], ["22c3", "\\bigcup{}"], ["22c4", "\\diamond{}"], ["22c5", "\\cdot{}"], ["22c6", "\\star{}"], ["22c7", "\\divideontimes{}"], ["22c8", "\\bowtie{}"], ["22c9", "\\ltimes{}"], ["22ca", "\\rtimes{}"], ["22cb", "\\leftthreetimes{}"], ["22cc", "\\rightthreetimes{}"], ["22cd", "\\backsimeq{}"], ["22ce", "\\curlyvee{}"], ["22cf", "\\curlywedge{}"], ["22d0", "\\Subset{}"], ["22d1", "\\Supset{}"], ["22d2", "\\Cap{}"], ["22d3", "\\Cup{}"], ["22d4", "\\pitchfork{}"], ["22d6", "\\lessdot{}"], ["22d7", "\\gtrdot{}"], ["22d8", "\\verymuchless{}"], ["22d9", "\\verymuchgreater{}"], ["22da", "\\lesseqgtr{}"], ["22db", "\\gtreqless{}"], ["22de", "\\curlyeqprec{}"], ["22df", "\\curlyeqsucc{}"], ["22e2", "\\not\\sqsubseteq{}"], ["22e3", "\\not\\sqsupseteq{}"], ["22e5", "\\Elzsqspne{}"], ["22e6", "\\lnsim{}"], ["22e7", "\\gnsim{}"], ["22e8", "\\precedesnotsimilar{}"], ["22e9", "\\succnsim{}"], ["22ea", "\\ntriangleleft{}"], ["22eb", "\\ntriangleright{}"], ["22ec", "\\ntrianglelefteq{}"], ["22ed", "\\ntrianglerighteq{}"], ["22ee", "\\vdots{}"], ["22ef", "\\cdots{}"], ["22f0", "\\upslopeellipsis{}"], ["22f1", "\\downslopeellipsis{}"], ["2305", "\\barwedge{}"], ["2306", "\\perspcorrespond{}"], ["2308", "\\lceil{}"], ["2309", "\\rceil{}"], ["230a", "\\lfloor{}"], ["230b", "\\rfloor{}"], ["2315", "\\recorder{}"], ["2316", '\\mathchar"2208'], ["231c", "\\ulcorner{}"], ["231d", "\\urcorner{}"], ["231e", "\\llcorner{}"], ["231f", "\\lrcorner{}"], ["2322", "\\frown{}"], ["2323", "\\smile{}"], ["2329", "\\langle{}"], ["232a", "\\rangle{}"], ["233d", "\\ElsevierGlyph{E838}"], ["23a3", "\\Elzdlcorn{}"], ["23b0", "\\lmoustache{}"], ["23b1", "\\rmoustache{}"], ["2423", "\\textvisiblespace{}"], ["2460", "\\ding{172}"], ["2461", "\\ding{173}"], ["2462", "\\ding{174}"], ["2463", "\\ding{175}"], ["2464", "\\ding{176}"], ["2465", "\\ding{177}"], ["2466", "\\ding{178}"], ["2467", "\\ding{179}"], ["2468", "\\ding{180}"], ["2469", "\\ding{181}"], ["24c8", "\\circledS{}"], ["2506", "\\Elzdshfnc{}"], ["2519", "\\Elzsqfnw{}"], ["2571", "\\diagup{}"], ["25a0", "\\ding{110}"], ["25a1", "\\square{}"], ["25aa", "\\blacksquare{}"], ["25ad", "\\fbox{~~}"], ["25af", "\\Elzvrecto{}"], ["25b1", "\\ElsevierGlyph{E381}"], ["25b2", "\\ding{115}"], ["25b3", "\\bigtriangleup{}"], ["25b4", "\\blacktriangle{}"], ["25b5", "\\vartriangle{}"], ["25b8", "\\blacktriangleright{}"], ["25b9", "\\triangleright{}"], ["25bc", "\\ding{116}"], ["25bd", "\\bigtriangledown{}"], ["25be", "\\blacktriangledown{}"], ["25bf", "\\triangledown{}"], ["25c2", "\\blacktriangleleft{}"], ["25c3", "\\triangleleft{}"], ["25c6", "\\ding{117}"], ["25ca", "\\lozenge{}"], ["25cb", "\\bigcirc{}"], ["25cf", "\\ding{108}"], ["25d0", "\\Elzcirfl{}"], ["25d1", "\\Elzcirfr{}"], ["25d2", "\\Elzcirfb{}"], ["25d7", "\\ding{119}"], ["25d8", "\\Elzrvbull{}"], ["25e7", "\\Elzsqfl{}"], ["25e8", "\\Elzsqfr{}"], ["25ea", "\\Elzsqfse{}"], ["25ef", "\\bigcirc{}"], ["2605", "\\ding{72}"], ["2606", "\\ding{73}"], ["260e", "\\ding{37}"], ["261b", "\\ding{42}"], ["261e", "\\ding{43}"], ["263e", "\\rightmoon{}"], ["263f", "\\mercury{}"], ["2640", "\\venus{}"], ["2642", "\\male{}"], ["2643", "\\jupiter{}"], ["2644", "\\saturn{}"], ["2645", "\\uranus{}"], ["2646", "\\neptune{}"], ["2647", "\\pluto{}"], ["2648", "\\aries{}"], ["2649", "\\taurus{}"], ["264a", "\\gemini{}"], ["264b", "\\cancer{}"], ["264c", "\\leo{}"], ["264d", "\\virgo{}"], ["264e", "\\libra{}"], ["264f", "\\scorpio{}"], ["2650", "\\sagittarius{}"], ["2651", "\\capricornus{}"], ["2652", "\\aquarius{}"], ["2653", "\\pisces{}"], ["2660", "\\ding{171}"], ["2662", "\\diamond{}"], ["2663", "\\ding{168}"], ["2665", "\\ding{170}"], ["2666", "\\ding{169}"], ["2669", "\\quarternote{}"], ["266a", "\\eighthnote{}"], ["266d", "\\flat{}"], ["266e", "\\natural{}"], ["266f", "\\sharp{}"], ["2701", "\\ding{33}"], ["2702", "\\ding{34}"], ["2703", "\\ding{35}"], ["2704", "\\ding{36}"], ["2706", "\\ding{38}"], ["2707", "\\ding{39}"], ["2708", "\\ding{40}"], ["2709", "\\ding{41}"], ["270c", "\\ding{44}"], ["270d", "\\ding{45}"], ["270e", "\\ding{46}"], ["270f", "\\ding{47}"], ["2710", "\\ding{48}"], ["2711", "\\ding{49}"], ["2712", "\\ding{50}"], ["2713", "\\ding{51}"], ["2714", "\\ding{52}"], ["2715", "\\ding{53}"], ["2716", "\\ding{54}"], ["2717", "\\ding{55}"], ["2718", "\\ding{56}"], ["2719", "\\ding{57}"], ["271a", "\\ding{58}"], ["271b", "\\ding{59}"], ["271c", "\\ding{60}"], ["271d", "\\ding{61}"], ["271e", "\\ding{62}"], ["271f", "\\ding{63}"], ["2720", "\\ding{64}"], ["2721", "\\ding{65}"], ["2722", "\\ding{66}"], ["2723", "\\ding{67}"], ["2724", "\\ding{68}"], ["2725", "\\ding{69}"], ["2726", "\\ding{70}"], ["2727", "\\ding{71}"], ["2729", "\\ding{73}"], ["272a", "\\ding{74}"], ["272b", "\\ding{75}"], ["272c", "\\ding{76}"], ["272d", "\\ding{77}"], ["272e", "\\ding{78}"], ["272f", "\\ding{79}"], ["2730", "\\ding{80}"], ["2731", "\\ding{81}"], ["2732", "\\ding{82}"], ["2733", "\\ding{83}"], ["2734", "\\ding{84}"], ["2735", "\\ding{85}"], ["2736", "\\ding{86}"], ["2737", "\\ding{87}"], ["2738", "\\ding{88}"], ["2739", "\\ding{89}"], ["273a", "\\ding{90}"], ["273b", "\\ding{91}"], ["273c", "\\ding{92}"], ["273d", "\\ding{93}"], ["273e", "\\ding{94}"], ["273f", "\\ding{95}"], ["2740", "\\ding{96}"], ["2741", "\\ding{97}"], ["2742", "\\ding{98}"], ["2743", "\\ding{99}"], ["2744", "\\ding{100}"], ["2745", "\\ding{101}"], ["2746", "\\ding{102}"], ["2747", "\\ding{103}"], ["2748", "\\ding{104}"], ["2749", "\\ding{105}"], ["274a", "\\ding{106}"], ["274b", "\\ding{107}"], ["274d", "\\ding{109}"], ["274f", "\\ding{111}"], ["2750", "\\ding{112}"], ["2751", "\\ding{113}"], ["2752", "\\ding{114}"], ["2756", "\\ding{118}"], ["2758", "\\ding{120}"], ["2759", "\\ding{121}"], ["275a", "\\ding{122}"], ["275b", "\\ding{123}"], ["275c", "\\ding{124}"], ["275d", "\\ding{125}"], ["275e", "\\ding{126}"], ["2761", "\\ding{161}"], ["2762", "\\ding{162}"], ["2763", "\\ding{163}"], ["2764", "\\ding{164}"], ["2765", "\\ding{165}"], ["2766", "\\ding{166}"], ["2767", "\\ding{167}"], ["2776", "\\ding{182}"], ["2777", "\\ding{183}"], ["2778", "\\ding{184}"], ["2779", "\\ding{185}"], ["277a", "\\ding{186}"], ["277b", "\\ding{187}"], ["277c", "\\ding{188}"], ["277d", "\\ding{189}"], ["277e", "\\ding{190}"], ["277f", "\\ding{191}"], ["2780", "\\ding{192}"], ["2781", "\\ding{193}"], ["2782", "\\ding{194}"], ["2783", "\\ding{195}"], ["2784", "\\ding{196}"], ["2785", "\\ding{197}"], ["2786", "\\ding{198}"], ["2787", "\\ding{199}"], ["2788", "\\ding{200}"], ["2789", "\\ding{201}"], ["278a", "\\ding{202}"], ["278b", "\\ding{203}"], ["278c", "\\ding{204}"], ["278d", "\\ding{205}"], ["278e", "\\ding{206}"], ["278f", "\\ding{207}"], ["2790", "\\ding{208}"], ["2791", "\\ding{209}"], ["2792", "\\ding{210}"], ["2793", "\\ding{211}"], ["2794", "\\ding{212}"], ["2798", "\\ding{216}"], ["2799", "\\ding{217}"], ["279a", "\\ding{218}"], ["279b", "\\ding{219}"], ["279c", "\\ding{220}"], ["279d", "\\ding{221}"], ["279e", "\\ding{222}"], ["279f", "\\ding{223}"], ["27a0", "\\ding{224}"], ["27a1", "\\ding{225}"], ["27a2", "\\ding{226}"], ["27a3", "\\ding{227}"], ["27a4", "\\ding{228}"], ["27a5", "\\ding{229}"], ["27a6", "\\ding{230}"], ["27a7", "\\ding{231}"], ["27a8", "\\ding{232}"], ["27a9", "\\ding{233}"], ["27aa", "\\ding{234}"], ["27ab", "\\ding{235}"], ["27ac", "\\ding{236}"], ["27ad", "\\ding{237}"], ["27ae", "\\ding{238}"], ["27af", "\\ding{239}"], ["27b1", "\\ding{241}"], ["27b2", "\\ding{242}"], ["27b3", "\\ding{243}"], ["27b4", "\\ding{244}"], ["27b5", "\\ding{245}"], ["27b6", "\\ding{246}"], ["27b7", "\\ding{247}"], ["27b8", "\\ding{248}"], ["27b9", "\\ding{249}"], ["27ba", "\\ding{250}"], ["27bb", "\\ding{251}"], ["27bc", "\\ding{252}"], ["27bd", "\\ding{253}"], ["27be", "\\ding{254}"], ["27f5", "\\longleftarrow{}"], ["27f6", "\\longrightarrow{}"], ["27f7", "\\longleftrightarrow{}"], ["27f8", "\\Longleftarrow{}"], ["27f9", "\\Longrightarrow{}"], ["27fa", "\\Longleftrightarrow{}"], ["27fc", "\\longmapsto{}"], ["27ff", "\\sim\\joinrel\\leadsto"], ["2905", "\\ElsevierGlyph{E212}"], ["2912", "\\UpArrowBar{}"], ["2913", "\\DownArrowBar{}"], ["2923", "\\ElsevierGlyph{E20C}"], ["2924", "\\ElsevierGlyph{E20D}"], ["2925", "\\ElsevierGlyph{E20B}"], ["2926", "\\ElsevierGlyph{E20A}"], ["2927", "\\ElsevierGlyph{E211}"], ["2928", "\\ElsevierGlyph{E20E}"], ["2929", "\\ElsevierGlyph{E20F}"], ["292a", "\\ElsevierGlyph{E210}"], ["2933", "\\ElsevierGlyph{E21C}"], ["2936", "\\ElsevierGlyph{E21A}"], ["2937", "\\ElsevierGlyph{E219}"], ["2940", "\\Elolarr{}"], ["2941", "\\Elorarr{}"], ["2942", "\\ElzRlarr{}"], ["2944", "\\ElzrLarr{}"], ["2947", "\\Elzrarrx{}"], ["294e", "\\LeftRightVector{}"], ["294f", "\\RightUpDownVector{}"], ["2950", "\\DownLeftRightVector{}"], ["2951", "\\LeftUpDownVector{}"], ["2952", "\\LeftVectorBar{}"], ["2953", "\\RightVectorBar{}"], ["2954", "\\RightUpVectorBar{}"], ["2955", "\\RightDownVectorBar{}"], ["2956", "\\DownLeftVectorBar{}"], ["2957", "\\DownRightVectorBar{}"], ["2958", "\\LeftUpVectorBar{}"], ["2959", "\\LeftDownVectorBar{}"], ["295a", "\\LeftTeeVector{}"], ["295b", "\\RightTeeVector{}"], ["295c", "\\RightUpTeeVector{}"], ["295d", "\\RightDownTeeVector{}"], ["295e", "\\DownLeftTeeVector{}"], ["295f", "\\DownRightTeeVector{}"], ["2960", "\\LeftUpTeeVector{}"], ["2961", "\\LeftDownTeeVector{}"], ["296e", "\\UpEquilibrium{}"], ["296f", "\\ReverseUpEquilibrium{}"], ["2970", "\\RoundImplies{}"], ["297c", "\\ElsevierGlyph{E214}"], ["297d", "\\ElsevierGlyph{E215}"], ["2980", "\\Elztfnc{}"], ["2985", "\\ElsevierGlyph{3018}"], ["2986", "\\Elroang{}"], ["2993", "&lt;\\kern-0.58em("], ["2994", "\\ElsevierGlyph{E291}"], ["2999", "\\Elzddfnc{}"], ["299c", "\\Angle{}"], ["29a0", "\\Elzlpargt{}"], ["29b5", "\\ElsevierGlyph{E260}"], ["29b6", "\\ElsevierGlyph{E61B}"], ["29ca", "\\ElzLap{}"], ["29cb", "\\Elzdefas{}"], ["29cf", "\\LeftTriangleBar{}"], ["29d0", "\\RightTriangleBar{}"], ["29dc", "\\ElsevierGlyph{E372}"], ["29eb", "\\blacklozenge{}"], ["29f4", "\\RuleDelayed{}"], ["2a04", "\\Elxuplus{}"], ["2a05", "\\ElzThr{}"], ["2a06", "\\Elxsqcup{}"], ["2a07", "\\ElzInf{}"], ["2a08", "\\ElzSup{}"], ["2a0d", "\\ElzCint{}"], ["2a0f", "\\clockoint{}"], ["2a10", "\\ElsevierGlyph{E395}"], ["2a16", "\\sqrint{}"], ["2a25", "\\ElsevierGlyph{E25A}"], ["2a2a", "\\ElsevierGlyph{E25B}"], ["2a2d", "\\ElsevierGlyph{E25C}"], ["2a2e", "\\ElsevierGlyph{E25D}"], ["2a2f", "\\ElzTimes{}"], ["2a34", "\\ElsevierGlyph{E25E}"], ["2a35", "\\ElsevierGlyph{E25E}"], ["2a3c", "\\ElsevierGlyph{E259}"], ["2a3f", "\\amalg{}"], ["2a53", "\\ElzAnd{}"], ["2a54", "\\ElzOr{}"], ["2a55", "\\ElsevierGlyph{E36E}"], ["2a56", "\\ElOr{}"], ["2a5e", "\\perspcorrespond{}"], ["2a5f", "\\Elzminhat{}"], ["2a63", "\\ElsevierGlyph{225A}"], ["2a6e", "\\stackrel{*}{=}"], ["2a75", "\\Equal{}"], ["2a7d", "\\leqslant{}"], ["2a7e", "\\geqslant{}"], ["2a85", "\\lessapprox{}"], ["2a86", "\\gtrapprox{}"], ["2a87", "\\lneq{}"], ["2a88", "\\gneq{}"], ["2a89", "\\lnapprox{}"], ["2a8a", "\\gnapprox{}"], ["2a8b", "\\lesseqqgtr{}"], ["2a8c", "\\gtreqqless{}"], ["2a95", "\\eqslantless{}"], ["2a96", "\\eqslantgtr{}"], ["2a9d", "\\Pisymbol{ppi020}{117}"], ["2a9e", "\\Pisymbol{ppi020}{105}"], ["2aa1", "\\NestedLessLess{}"], ["2aa2", "\\NestedGreaterGreater{}"], ["2aaf", "\\preceq{}"], ["2ab0", "\\succeq{}"], ["2ab5", "\\precneqq{}"], ["2ab6", "\\succneqq{}"], ["2ab7", "\\precapprox{}"], ["2ab8", "\\succapprox{}"], ["2ab9", "\\precnapprox{}"], ["2aba", "\\succnapprox{}"], ["2ac5", "\\subseteqq{}"], ["2ac6", "\\supseteqq{}"], ["2acb", "\\subsetneqq{}"], ["2acc", "\\supsetneqq{}"], ["2aeb", "\\ElsevierGlyph{E30D}"], ["2af6", "\\Elztdcol{}"], ["2afd", "{{/}\\!\\!{/}}"], ["300a", "\\ElsevierGlyph{300A}"], ["300b", "\\ElsevierGlyph{300B}"], ["3018", "\\ElsevierGlyph{3018}"], ["3019", "\\ElsevierGlyph{3019}"], ["301a", "\\openbracketleft{}"], ["301b", "\\openbracketright{}"], ["fb00", "ff"], ["fb01", "fi"], ["fb02", "fl"], ["fb03", "ffi"], ["fb04", "ffl"], ["d400", "\\mathbf{A}"], ["d401", "\\mathbf{B}"], ["d402", "\\mathbf{C}"], ["d403", "\\mathbf{D}"], ["d404", "\\mathbf{E}"], ["d405", "\\mathbf{F}"], ["d406", "\\mathbf{G}"], ["d407", "\\mathbf{H}"], ["d408", "\\mathbf{I}"], ["d409", "\\mathbf{J}"], ["d40a", "\\mathbf{K}"], ["d40b", "\\mathbf{L}"], ["d40c", "\\mathbf{M}"], ["d40d", "\\mathbf{N}"], ["d40e", "\\mathbf{O}"], ["d40f", "\\mathbf{P}"], ["d410", "\\mathbf{Q}"], ["d411", "\\mathbf{R}"], ["d412", "\\mathbf{S}"], ["d413", "\\mathbf{T}"], ["d414", "\\mathbf{U}"], ["d415", "\\mathbf{V}"], ["d416", "\\mathbf{W}"], ["d417", "\\mathbf{X}"], ["d418", "\\mathbf{Y}"], ["d419", "\\mathbf{Z}"], ["d41a", "\\mathbf{a}"], ["d41b", "\\mathbf{b}"], ["d41c", "\\mathbf{c}"], ["d41d", "\\mathbf{d}"], ["d41e", "\\mathbf{e}"], ["d41f", "\\mathbf{f}"], ["d420", "\\mathbf{g}"], ["d421", "\\mathbf{h}"], ["d422", "\\mathbf{i}"], ["d423", "\\mathbf{j}"], ["d424", "\\mathbf{k}"], ["d425", "\\mathbf{l}"], ["d426", "\\mathbf{m}"], ["d427", "\\mathbf{n}"], ["d428", "\\mathbf{o}"], ["d429", "\\mathbf{p}"], ["d42a", "\\mathbf{q}"], ["d42b", "\\mathbf{r}"], ["d42c", "\\mathbf{s}"], ["d42d", "\\mathbf{t}"], ["d42e", "\\mathbf{u}"], ["d42f", "\\mathbf{v}"], ["d430", "\\mathbf{w}"], ["d431", "\\mathbf{x}"], ["d432", "\\mathbf{y}"], ["d433", "\\mathbf{z}"], ["d434", "\\mathsl{A}"], ["d435", "\\mathsl{B}"], ["d436", "\\mathsl{C}"], ["d437", "\\mathsl{D}"], ["d438", "\\mathsl{E}"], ["d439", "\\mathsl{F}"], ["d43a", "\\mathsl{G}"], ["d43b", "\\mathsl{H}"], ["d43c", "\\mathsl{I}"], ["d43d", "\\mathsl{J}"], ["d43e", "\\mathsl{K}"], ["d43f", "\\mathsl{L}"], ["d440", "\\mathsl{M}"], ["d441", "\\mathsl{N}"], ["d442", "\\mathsl{O}"], ["d443", "\\mathsl{P}"], ["d444", "\\mathsl{Q}"], ["d445", "\\mathsl{R}"], ["d446", "\\mathsl{S}"], ["d447", "\\mathsl{T}"], ["d448", "\\mathsl{U}"], ["d449", "\\mathsl{V}"], ["d44a", "\\mathsl{W}"], ["d44b", "\\mathsl{X}"], ["d44c", "\\mathsl{Y}"], ["d44d", "\\mathsl{Z}"], ["d44e", "\\mathsl{a}"], ["d44f", "\\mathsl{b}"], ["d450", "\\mathsl{c}"], ["d451", "\\mathsl{d}"], ["d452", "\\mathsl{e}"], ["d453", "\\mathsl{f}"], ["d454", "\\mathsl{g}"], ["d456", "\\mathsl{i}"], ["d457", "\\mathsl{j}"], ["d458", "\\mathsl{k}"], ["d459", "\\mathsl{l}"], ["d45a", "\\mathsl{m}"], ["d45b", "\\mathsl{n}"], ["d45c", "\\mathsl{o}"], ["d45d", "\\mathsl{p}"], ["d45e", "\\mathsl{q}"], ["d45f", "\\mathsl{r}"], ["d460", "\\mathsl{s}"], ["d461", "\\mathsl{t}"], ["d462", "\\mathsl{u}"], ["d463", "\\mathsl{v}"], ["d464", "\\mathsl{w}"], ["d465", "\\mathsl{x}"], ["d466", "\\mathsl{y}"], ["d467", "\\mathsl{z}"], ["d468", "\\mathbit{A}"], ["d469", "\\mathbit{B}"], ["d46a", "\\mathbit{C}"], ["d46b", "\\mathbit{D}"], ["d46c", "\\mathbit{E}"], ["d46d", "\\mathbit{F}"], ["d46e", "\\mathbit{G}"], ["d46f", "\\mathbit{H}"], ["d470", "\\mathbit{I}"], ["d471", "\\mathbit{J}"], ["d472", "\\mathbit{K}"], ["d473", "\\mathbit{L}"], ["d474", "\\mathbit{M}"], ["d475", "\\mathbit{N}"], ["d476", "\\mathbit{O}"], ["d477", "\\mathbit{P}"], ["d478", "\\mathbit{Q}"], ["d479", "\\mathbit{R}"], ["d47a", "\\mathbit{S}"], ["d47b", "\\mathbit{T}"], ["d47c", "\\mathbit{U}"], ["d47d", "\\mathbit{V}"], ["d47e", "\\mathbit{W}"], ["d47f", "\\mathbit{X}"], ["d480", "\\mathbit{Y}"], ["d481", "\\mathbit{Z}"], ["d482", "\\mathbit{a}"], ["d483", "\\mathbit{b}"], ["d484", "\\mathbit{c}"], ["d485", "\\mathbit{d}"], ["d486", "\\mathbit{e}"], ["d487", "\\mathbit{f}"], ["d488", "\\mathbit{g}"], ["d489", "\\mathbit{h}"], ["d48a", "\\mathbit{i}"], ["d48b", "\\mathbit{j}"], ["d48c", "\\mathbit{k}"], ["d48d", "\\mathbit{l}"], ["d48e", "\\mathbit{m}"], ["d48f", "\\mathbit{n}"], ["d490", "\\mathbit{o}"], ["d491", "\\mathbit{p}"], ["d492", "\\mathbit{q}"], ["d493", "\\mathbit{r}"], ["d494", "\\mathbit{s}"], ["d495", "\\mathbit{t}"], ["d496", "\\mathbit{u}"], ["d497", "\\mathbit{v}"], ["d498", "\\mathbit{w}"], ["d499", "\\mathbit{x}"], ["d49a", "\\mathbit{y}"], ["d49b", "\\mathbit{z}"], ["d49c", "\\mathscr{A}"], ["d49e", "\\mathscr{C}"], ["d49f", "\\mathscr{D}"], ["d4a2", "\\mathscr{G}"], ["d4a5", "\\mathscr{J}"], ["d4a6", "\\mathscr{K}"], ["d4a9", "\\mathscr{N}"], ["d4aa", "\\mathscr{O}"], ["d4ab", "\\mathscr{P}"], ["d4ac", "\\mathscr{Q}"], ["d4ae", "\\mathscr{S}"], ["d4af", "\\mathscr{T}"], ["d4b0", "\\mathscr{U}"], ["d4b1", "\\mathscr{V}"], ["d4b2", "\\mathscr{W}"], ["d4b3", "\\mathscr{X}"], ["d4b4", "\\mathscr{Y}"], ["d4b5", "\\mathscr{Z}"], ["d4b6", "\\mathscr{a}"], ["d4b7", "\\mathscr{b}"], ["d4b8", "\\mathscr{c}"], ["d4b9", "\\mathscr{d}"], ["d4bb", "\\mathscr{f}"], ["d4bd", "\\mathscr{h}"], ["d4be", "\\mathscr{i}"], ["d4bf", "\\mathscr{j}"], ["d4c0", "\\mathscr{k}"], ["d4c1", "\\mathscr{l}"], ["d4c2", "\\mathscr{m}"], ["d4c3", "\\mathscr{n}"], ["d4c5", "\\mathscr{p}"], ["d4c6", "\\mathscr{q}"], ["d4c7", "\\mathscr{r}"], ["d4c8", "\\mathscr{s}"], ["d4c9", "\\mathscr{t}"], ["d4ca", "\\mathscr{u}"], ["d4cb", "\\mathscr{v}"], ["d4cc", "\\mathscr{w}"], ["d4cd", "\\mathscr{x}"], ["d4ce", "\\mathscr{y}"], ["d4cf", "\\mathscr{z}"], ["d4d0", "\\mathmit{A}"], ["d4d1", "\\mathmit{B}"], ["d4d2", "\\mathmit{C}"], ["d4d3", "\\mathmit{D}"], ["d4d4", "\\mathmit{E}"], ["d4d5", "\\mathmit{F}"], ["d4d6", "\\mathmit{G}"], ["d4d7", "\\mathmit{H}"], ["d4d8", "\\mathmit{I}"], ["d4d9", "\\mathmit{J}"], ["d4da", "\\mathmit{K}"], ["d4db", "\\mathmit{L}"], ["d4dc", "\\mathmit{M}"], ["d4dd", "\\mathmit{N}"], ["d4de", "\\mathmit{O}"], ["d4df", "\\mathmit{P}"], ["d4e0", "\\mathmit{Q}"], ["d4e1", "\\mathmit{R}"], ["d4e2", "\\mathmit{S}"], ["d4e3", "\\mathmit{T}"], ["d4e4", "\\mathmit{U}"], ["d4e5", "\\mathmit{V}"], ["d4e6", "\\mathmit{W}"], ["d4e7", "\\mathmit{X}"], ["d4e8", "\\mathmit{Y}"], ["d4e9", "\\mathmit{Z}"], ["d4ea", "\\mathmit{a}"], ["d4eb", "\\mathmit{b}"], ["d4ec", "\\mathmit{c}"], ["d4ed", "\\mathmit{d}"], ["d4ee", "\\mathmit{e}"], ["d4ef", "\\mathmit{f}"], ["d4f0", "\\mathmit{g}"], ["d4f1", "\\mathmit{h}"], ["d4f2", "\\mathmit{i}"], ["d4f3", "\\mathmit{j}"], ["d4f4", "\\mathmit{k}"], ["d4f5", "\\mathmit{l}"], ["d4f6", "\\mathmit{m}"], ["d4f7", "\\mathmit{n}"], ["d4f8", "\\mathmit{o}"], ["d4f9", "\\mathmit{p}"], ["d4fa", "\\mathmit{q}"], ["d4fb", "\\mathmit{r}"], ["d4fc", "\\mathmit{s}"], ["d4fd", "\\mathmit{t}"], ["d4fe", "\\mathmit{u}"], ["d4ff", "\\mathmit{v}"], ["d500", "\\mathmit{w}"], ["d501", "\\mathmit{x}"], ["d502", "\\mathmit{y}"], ["d503", "\\mathmit{z}"], ["d504", "\\mathfrak{A}"], ["d505", "\\mathfrak{B}"], ["d507", "\\mathfrak{D}"], ["d508", "\\mathfrak{E}"], ["d509", "\\mathfrak{F}"], ["d50a", "\\mathfrak{G}"], ["d50d", "\\mathfrak{J}"], ["d50e", "\\mathfrak{K}"], ["d50f", "\\mathfrak{L}"], ["d510", "\\mathfrak{M}"], ["d511", "\\mathfrak{N}"], ["d512", "\\mathfrak{O}"], ["d513", "\\mathfrak{P}"], ["d514", "\\mathfrak{Q}"], ["d516", "\\mathfrak{S}"], ["d517", "\\mathfrak{T}"], ["d518", "\\mathfrak{U}"], ["d519", "\\mathfrak{V}"], ["d51a", "\\mathfrak{W}"], ["d51b", "\\mathfrak{X}"], ["d51c", "\\mathfrak{Y}"], ["d51e", "\\mathfrak{a}"], ["d51f", "\\mathfrak{b}"], ["d520", "\\mathfrak{c}"], ["d521", "\\mathfrak{d}"], ["d522", "\\mathfrak{e}"], ["d523", "\\mathfrak{f}"], ["d524", "\\mathfrak{g}"], ["d525", "\\mathfrak{h}"], ["d526", "\\mathfrak{i}"], ["d527", "\\mathfrak{j}"], ["d528", "\\mathfrak{k}"], ["d529", "\\mathfrak{l}"], ["d52a", "\\mathfrak{m}"], ["d52b", "\\mathfrak{n}"], ["d52c", "\\mathfrak{o}"], ["d52d", "\\mathfrak{p}"], ["d52e", "\\mathfrak{q}"], ["d52f", "\\mathfrak{r}"], ["d530", "\\mathfrak{s}"], ["d531", "\\mathfrak{t}"], ["d532", "\\mathfrak{u}"], ["d533", "\\mathfrak{v}"], ["d534", "\\mathfrak{w}"], ["d535", "\\mathfrak{x}"], ["d536", "\\mathfrak{y}"], ["d537", "\\mathfrak{z}"], ["d538", "\\mathbb{A}"], ["d539", "\\mathbb{B}"], ["d53b", "\\mathbb{D}"], ["d53c", "\\mathbb{E}"], ["d53d", "\\mathbb{F}"], ["d53e", "\\mathbb{G}"], ["d540", "\\mathbb{I}"], ["d541", "\\mathbb{J}"], ["d542", "\\mathbb{K}"], ["d543", "\\mathbb{L}"], ["d544", "\\mathbb{M}"], ["d546", "\\mathbb{O}"], ["d54a", "\\mathbb{S}"], ["d54b", "\\mathbb{T}"], ["d54c", "\\mathbb{U}"], ["d54d", "\\mathbb{V}"], ["d54e", "\\mathbb{W}"], ["d54f", "\\mathbb{X}"], ["d550", "\\mathbb{Y}"], ["d552", "\\mathbb{a}"], ["d553", "\\mathbb{b}"], ["d554", "\\mathbb{c}"], ["d555", "\\mathbb{d}"], ["d556", "\\mathbb{e}"], ["d557", "\\mathbb{f}"], ["d558", "\\mathbb{g}"], ["d559", "\\mathbb{h}"], ["d55a", "\\mathbb{i}"], ["d55b", "\\mathbb{j}"], ["d55c", "\\mathbb{k}"], ["d55d", "\\mathbb{l}"], ["d55e", "\\mathbb{m}"], ["d55f", "\\mathbb{n}"], ["d560", "\\mathbb{o}"], ["d561", "\\mathbb{p}"], ["d562", "\\mathbb{q}"], ["d563", "\\mathbb{r}"], ["d564", "\\mathbb{s}"], ["d565", "\\mathbb{t}"], ["d566", "\\mathbb{u}"], ["d567", "\\mathbb{v}"], ["d568", "\\mathbb{w}"], ["d569", "\\mathbb{x}"], ["d56a", "\\mathbb{y}"], ["d56b", "\\mathbb{z}"], ["d56c", "\\mathslbb{A}"], ["d56d", "\\mathslbb{B}"], ["d56e", "\\mathslbb{C}"], ["d56f", "\\mathslbb{D}"], ["d570", "\\mathslbb{E}"], ["d571", "\\mathslbb{F}"], ["d572", "\\mathslbb{G}"], ["d573", "\\mathslbb{H}"], ["d574", "\\mathslbb{I}"], ["d575", "\\mathslbb{J}"], ["d576", "\\mathslbb{K}"], ["d577", "\\mathslbb{L}"], ["d578", "\\mathslbb{M}"], ["d579", "\\mathslbb{N}"], ["d57a", "\\mathslbb{O}"], ["d57b", "\\mathslbb{P}"], ["d57c", "\\mathslbb{Q}"], ["d57d", "\\mathslbb{R}"], ["d57e", "\\mathslbb{S}"], ["d57f", "\\mathslbb{T}"], ["d580", "\\mathslbb{U}"], ["d581", "\\mathslbb{V}"], ["d582", "\\mathslbb{W}"], ["d583", "\\mathslbb{X}"], ["d584", "\\mathslbb{Y}"], ["d585", "\\mathslbb{Z}"], ["d586", "\\mathslbb{a}"], ["d587", "\\mathslbb{b}"], ["d588", "\\mathslbb{c}"], ["d589", "\\mathslbb{d}"], ["d58a", "\\mathslbb{e}"], ["d58b", "\\mathslbb{f}"], ["d58c", "\\mathslbb{g}"], ["d58d", "\\mathslbb{h}"], ["d58e", "\\mathslbb{i}"], ["d58f", "\\mathslbb{j}"], ["d590", "\\mathslbb{k}"], ["d591", "\\mathslbb{l}"], ["d592", "\\mathslbb{m}"], ["d593", "\\mathslbb{n}"], ["d594", "\\mathslbb{o}"], ["d595", "\\mathslbb{p}"], ["d596", "\\mathslbb{q}"], ["d597", "\\mathslbb{r}"], ["d598", "\\mathslbb{s}"], ["d599", "\\mathslbb{t}"], ["d59a", "\\mathslbb{u}"], ["d59b", "\\mathslbb{v}"], ["d59c", "\\mathslbb{w}"], ["d59d", "\\mathslbb{x}"], ["d59e", "\\mathslbb{y}"], ["d59f", "\\mathslbb{z}"], ["d5a0", "\\mathsf{A}"], ["d5a1", "\\mathsf{B}"], ["d5a2", "\\mathsf{C}"], ["d5a3", "\\mathsf{D}"], ["d5a4", "\\mathsf{E}"], ["d5a5", "\\mathsf{F}"], ["d5a6", "\\mathsf{G}"], ["d5a7", "\\mathsf{H}"], ["d5a8", "\\mathsf{I}"], ["d5a9", "\\mathsf{J}"], ["d5aa", "\\mathsf{K}"], ["d5ab", "\\mathsf{L}"], ["d5ac", "\\mathsf{M}"], ["d5ad", "\\mathsf{N}"], ["d5ae", "\\mathsf{O}"], ["d5af", "\\mathsf{P}"], ["d5b0", "\\mathsf{Q}"], ["d5b1", "\\mathsf{R}"], ["d5b2", "\\mathsf{S}"], ["d5b3", "\\mathsf{T}"], ["d5b4", "\\mathsf{U}"], ["d5b5", "\\mathsf{V}"], ["d5b6", "\\mathsf{W}"], ["d5b7", "\\mathsf{X}"], ["d5b8", "\\mathsf{Y}"], ["d5b9", "\\mathsf{Z}"], ["d5ba", "\\mathsf{a}"], ["d5bb", "\\mathsf{b}"], ["d5bc", "\\mathsf{c}"], ["d5bd", "\\mathsf{d}"], ["d5be", "\\mathsf{e}"], ["d5bf", "\\mathsf{f}"], ["d5c0", "\\mathsf{g}"], ["d5c1", "\\mathsf{h}"], ["d5c2", "\\mathsf{i}"], ["d5c3", "\\mathsf{j}"], ["d5c4", "\\mathsf{k}"], ["d5c5", "\\mathsf{l}"], ["d5c6", "\\mathsf{m}"], ["d5c7", "\\mathsf{n}"], ["d5c8", "\\mathsf{o}"], ["d5c9", "\\mathsf{p}"], ["d5ca", "\\mathsf{q}"], ["d5cb", "\\mathsf{r}"], ["d5cc", "\\mathsf{s}"], ["d5cd", "\\mathsf{t}"], ["d5ce", "\\mathsf{u}"], ["d5cf", "\\mathsf{v}"], ["d5d0", "\\mathsf{w}"], ["d5d1", "\\mathsf{x}"], ["d5d2", "\\mathsf{y}"], ["d5d3", "\\mathsf{z}"], ["d5d4", "\\mathsfbf{A}"], ["d5d5", "\\mathsfbf{B}"], ["d5d6", "\\mathsfbf{C}"], ["d5d7", "\\mathsfbf{D}"], ["d5d8", "\\mathsfbf{E}"], ["d5d9", "\\mathsfbf{F}"], ["d5da", "\\mathsfbf{G}"], ["d5db", "\\mathsfbf{H}"], ["d5dc", "\\mathsfbf{I}"], ["d5dd", "\\mathsfbf{J}"], ["d5de", "\\mathsfbf{K}"], ["d5df", "\\mathsfbf{L}"], ["d5e0", "\\mathsfbf{M}"], ["d5e1", "\\mathsfbf{N}"], ["d5e2", "\\mathsfbf{O}"], ["d5e3", "\\mathsfbf{P}"], ["d5e4", "\\mathsfbf{Q}"], ["d5e5", "\\mathsfbf{R}"], ["d5e6", "\\mathsfbf{S}"], ["d5e7", "\\mathsfbf{T}"], ["d5e8", "\\mathsfbf{U}"], ["d5e9", "\\mathsfbf{V}"], ["d5ea", "\\mathsfbf{W}"], ["d5eb", "\\mathsfbf{X}"], ["d5ec", "\\mathsfbf{Y}"], ["d5ed", "\\mathsfbf{Z}"], ["d5ee", "\\mathsfbf{a}"], ["d5ef", "\\mathsfbf{b}"], ["d5f0", "\\mathsfbf{c}"], ["d5f1", "\\mathsfbf{d}"], ["d5f2", "\\mathsfbf{e}"], ["d5f3", "\\mathsfbf{f}"], ["d5f4", "\\mathsfbf{g}"], ["d5f5", "\\mathsfbf{h}"], ["d5f6", "\\mathsfbf{i}"], ["d5f7", "\\mathsfbf{j}"], ["d5f8", "\\mathsfbf{k}"], ["d5f9", "\\mathsfbf{l}"], ["d5fa", "\\mathsfbf{m}"], ["d5fb", "\\mathsfbf{n}"], ["d5fc", "\\mathsfbf{o}"], ["d5fd", "\\mathsfbf{p}"], ["d5fe", "\\mathsfbf{q}"], ["d5ff", "\\mathsfbf{r}"], ["d600", "\\mathsfbf{s}"], ["d601", "\\mathsfbf{t}"], ["d602", "\\mathsfbf{u}"], ["d603", "\\mathsfbf{v}"], ["d604", "\\mathsfbf{w}"], ["d605", "\\mathsfbf{x}"], ["d606", "\\mathsfbf{y}"], ["d607", "\\mathsfbf{z}"], ["d608", "\\mathsfsl{A}"], ["d609", "\\mathsfsl{B}"], ["d60a", "\\mathsfsl{C}"], ["d60b", "\\mathsfsl{D}"], ["d60c", "\\mathsfsl{E}"], ["d60d", "\\mathsfsl{F}"], ["d60e", "\\mathsfsl{G}"], ["d60f", "\\mathsfsl{H}"], ["d610", "\\mathsfsl{I}"], ["d611", "\\mathsfsl{J}"], ["d612", "\\mathsfsl{K}"], ["d613", "\\mathsfsl{L}"], ["d614", "\\mathsfsl{M}"], ["d615", "\\mathsfsl{N}"], ["d616", "\\mathsfsl{O}"], ["d617", "\\mathsfsl{P}"], ["d618", "\\mathsfsl{Q}"], ["d619", "\\mathsfsl{R}"], ["d61a", "\\mathsfsl{S}"], ["d61b", "\\mathsfsl{T}"], ["d61c", "\\mathsfsl{U}"], ["d61d", "\\mathsfsl{V}"], ["d61e", "\\mathsfsl{W}"], ["d61f", "\\mathsfsl{X}"], ["d620", "\\mathsfsl{Y}"], ["d621", "\\mathsfsl{Z}"], ["d622", "\\mathsfsl{a}"], ["d623", "\\mathsfsl{b}"], ["d624", "\\mathsfsl{c}"], ["d625", "\\mathsfsl{d}"], ["d626", "\\mathsfsl{e}"], ["d627", "\\mathsfsl{f}"], ["d628", "\\mathsfsl{g}"], ["d629", "\\mathsfsl{h}"], ["d62a", "\\mathsfsl{i}"], ["d62b", "\\mathsfsl{j}"], ["d62c", "\\mathsfsl{k}"], ["d62d", "\\mathsfsl{l}"], ["d62e", "\\mathsfsl{m}"], ["d62f", "\\mathsfsl{n}"], ["d630", "\\mathsfsl{o}"], ["d631", "\\mathsfsl{p}"], ["d632", "\\mathsfsl{q}"], ["d633", "\\mathsfsl{r}"], ["d634", "\\mathsfsl{s}"], ["d635", "\\mathsfsl{t}"], ["d636", "\\mathsfsl{u}"], ["d637", "\\mathsfsl{v}"], ["d638", "\\mathsfsl{w}"], ["d639", "\\mathsfsl{x}"], ["d63a", "\\mathsfsl{y}"], ["d63b", "\\mathsfsl{z}"], ["d63c", "\\mathsfbfsl{A}"], ["d63d", "\\mathsfbfsl{B}"], ["d63e", "\\mathsfbfsl{C}"], ["d63f", "\\mathsfbfsl{D}"], ["d640", "\\mathsfbfsl{E}"], ["d641", "\\mathsfbfsl{F}"], ["d642", "\\mathsfbfsl{G}"], ["d643", "\\mathsfbfsl{H}"], ["d644", "\\mathsfbfsl{I}"], ["d645", "\\mathsfbfsl{J}"], ["d646", "\\mathsfbfsl{K}"], ["d647", "\\mathsfbfsl{L}"], ["d648", "\\mathsfbfsl{M}"], ["d649", "\\mathsfbfsl{N}"], ["d64a", "\\mathsfbfsl{O}"], ["d64b", "\\mathsfbfsl{P}"], ["d64c", "\\mathsfbfsl{Q}"], ["d64d", "\\mathsfbfsl{R}"], ["d64e", "\\mathsfbfsl{S}"], ["d64f", "\\mathsfbfsl{T}"], ["d650", "\\mathsfbfsl{U}"], ["d651", "\\mathsfbfsl{V}"], ["d652", "\\mathsfbfsl{W}"], ["d653", "\\mathsfbfsl{X}"], ["d654", "\\mathsfbfsl{Y}"], ["d655", "\\mathsfbfsl{Z}"], ["d656", "\\mathsfbfsl{a}"], ["d657", "\\mathsfbfsl{b}"], ["d658", "\\mathsfbfsl{c}"], ["d659", "\\mathsfbfsl{d}"], ["d65a", "\\mathsfbfsl{e}"], ["d65b", "\\mathsfbfsl{f}"], ["d65c", "\\mathsfbfsl{g}"], ["d65d", "\\mathsfbfsl{h}"], ["d65e", "\\mathsfbfsl{i}"], ["d65f", "\\mathsfbfsl{j}"], ["d660", "\\mathsfbfsl{k}"], ["d661", "\\mathsfbfsl{l}"], ["d662", "\\mathsfbfsl{m}"], ["d663", "\\mathsfbfsl{n}"], ["d664", "\\mathsfbfsl{o}"], ["d665", "\\mathsfbfsl{p}"], ["d666", "\\mathsfbfsl{q}"], ["d667", "\\mathsfbfsl{r}"], ["d668", "\\mathsfbfsl{s}"], ["d669", "\\mathsfbfsl{t}"], ["d66a", "\\mathsfbfsl{u}"], ["d66b", "\\mathsfbfsl{v}"], ["d66c", "\\mathsfbfsl{w}"], ["d66d", "\\mathsfbfsl{x}"], ["d66e", "\\mathsfbfsl{y}"], ["d66f", "\\mathsfbfsl{z}"], ["d670", "\\mathtt{A}"], ["d671", "\\mathtt{B}"], ["d672", "\\mathtt{C}"], ["d673", "\\mathtt{D}"], ["d674", "\\mathtt{E}"], ["d675", "\\mathtt{F}"], ["d676", "\\mathtt{G}"], ["d677", "\\mathtt{H}"], ["d678", "\\mathtt{I}"], ["d679", "\\mathtt{J}"], ["d67a", "\\mathtt{K}"], ["d67b", "\\mathtt{L}"], ["d67c", "\\mathtt{M}"], ["d67d", "\\mathtt{N}"], ["d67e", "\\mathtt{O}"], ["d67f", "\\mathtt{P}"], ["d680", "\\mathtt{Q}"], ["d681", "\\mathtt{R}"], ["d682", "\\mathtt{S}"], ["d683", "\\mathtt{T}"], ["d684", "\\mathtt{U}"], ["d685", "\\mathtt{V}"], ["d686", "\\mathtt{W}"], ["d687", "\\mathtt{X}"], ["d688", "\\mathtt{Y}"], ["d689", "\\mathtt{Z}"], ["d68a", "\\mathtt{a}"], ["d68b", "\\mathtt{b}"], ["d68c", "\\mathtt{c}"], ["d68d", "\\mathtt{d}"], ["d68e", "\\mathtt{e}"], ["d68f", "\\mathtt{f}"], ["d690", "\\mathtt{g}"], ["d691", "\\mathtt{h}"], ["d692", "\\mathtt{i}"], ["d693", "\\mathtt{j}"], ["d694", "\\mathtt{k}"], ["d695", "\\mathtt{l}"], ["d696", "\\mathtt{m}"], ["d697", "\\mathtt{n}"], ["d698", "\\mathtt{o}"], ["d699", "\\mathtt{p}"], ["d69a", "\\mathtt{q}"], ["d69b", "\\mathtt{r}"], ["d69c", "\\mathtt{s}"], ["d69d", "\\mathtt{t}"], ["d69e", "\\mathtt{u}"], ["d69f", "\\mathtt{v}"], ["d6a0", "\\mathtt{w}"], ["d6a1", "\\mathtt{x}"], ["d6a2", "\\mathtt{y}"], ["d6a3", "\\mathtt{z}"], ["d6a8", "\\mathbf{\\Alpha}"], ["d6a9", "\\mathbf{\\Beta}"], ["d6aa", "\\mathbf{\\Gamma}"], ["d6ab", "\\mathbf{\\Delta}"], ["d6ac", "\\mathbf{\\Epsilon}"], ["d6ad", "\\mathbf{\\Zeta}"], ["d6ae", "\\mathbf{\\Eta}"], ["d6af", "\\mathbf{\\Theta}"], ["d6b0", "\\mathbf{\\Iota}"], ["d6b1", "\\mathbf{\\Kappa}"], ["d6b2", "\\mathbf{\\Lambda}"], ["d6b5", "\\mathbf{\\Xi}"], ["d6b7", "\\mathbf{\\Pi}"], ["d6b8", "\\mathbf{\\Rho}"], ["d6b9", "\\mathbf{\\vartheta}"], ["d6ba", "\\mathbf{\\Sigma}"], ["d6bb", "\\mathbf{\\Tau}"], ["d6bc", "\\mathbf{\\Upsilon}"], ["d6bd", "\\mathbf{\\Phi}"], ["d6be", "\\mathbf{\\Chi}"], ["d6bf", "\\mathbf{\\Psi}"], ["d6c0", "\\mathbf{\\Omega}"], ["d6c1", "\\mathbf{\\nabla}"], ["d6c2", "\\mathbf{\\Alpha}"], ["d6c3", "\\mathbf{\\Beta}"], ["d6c4", "\\mathbf{\\Gamma}"], ["d6c5", "\\mathbf{\\Delta}"], ["d6c6", "\\mathbf{\\Epsilon}"], ["d6c7", "\\mathbf{\\Zeta}"], ["d6c8", "\\mathbf{\\Eta}"], ["d6c9", "\\mathbf{\\theta}"], ["d6ca", "\\mathbf{\\Iota}"], ["d6cb", "\\mathbf{\\Kappa}"], ["d6cc", "\\mathbf{\\Lambda}"], ["d6cf", "\\mathbf{\\Xi}"], ["d6d1", "\\mathbf{\\Pi}"], ["d6d2", "\\mathbf{\\Rho}"], ["d6d3", "\\mathbf{\\varsigma}"], ["d6d4", "\\mathbf{\\Sigma}"], ["d6d5", "\\mathbf{\\Tau}"], ["d6d6", "\\mathbf{\\Upsilon}"], ["d6d7", "\\mathbf{\\Phi}"], ["d6d8", "\\mathbf{\\Chi}"], ["d6d9", "\\mathbf{\\Psi}"], ["d6da", "\\mathbf{\\Omega}"], ["d6db", "\\partial{}"], ["d6dc", "\\in"], ["d6dd", "\\mathbf{\\vartheta}"], ["d6de", "\\mathbf{\\varkappa}"], ["d6df", "\\mathbf{\\phi}"], ["d6e0", "\\mathbf{\\varrho}"], ["d6e1", "\\mathbf{\\varpi}"], ["d6e2", "\\mathsl{\\Alpha}"], ["d6e3", "\\mathsl{\\Beta}"], ["d6e4", "\\mathsl{\\Gamma}"], ["d6e5", "\\mathsl{\\Delta}"], ["d6e6", "\\mathsl{\\Epsilon}"], ["d6e7", "\\mathsl{\\Zeta}"], ["d6e8", "\\mathsl{\\Eta}"], ["d6e9", "\\mathsl{\\Theta}"], ["d6ea", "\\mathsl{\\Iota}"], ["d6eb", "\\mathsl{\\Kappa}"], ["d6ec", "\\mathsl{\\Lambda}"], ["d6ef", "\\mathsl{\\Xi}"], ["d6f1", "\\mathsl{\\Pi}"], ["d6f2", "\\mathsl{\\Rho}"], ["d6f3", "\\mathsl{\\vartheta}"], ["d6f4", "\\mathsl{\\Sigma}"], ["d6f5", "\\mathsl{\\Tau}"], ["d6f6", "\\mathsl{\\Upsilon}"], ["d6f7", "\\mathsl{\\Phi}"], ["d6f8", "\\mathsl{\\Chi}"], ["d6f9", "\\mathsl{\\Psi}"], ["d6fa", "\\mathsl{\\Omega}"], ["d6fb", "\\mathsl{\\nabla}"], ["d6fc", "\\mathsl{\\Alpha}"], ["d6fd", "\\mathsl{\\Beta}"], ["d6fe", "\\mathsl{\\Gamma}"], ["d6ff", "\\mathsl{\\Delta}"], ["d700", "\\mathsl{\\Epsilon}"], ["d701", "\\mathsl{\\Zeta}"], ["d702", "\\mathsl{\\Eta}"], ["d703", "\\mathsl{\\Theta}"], ["d704", "\\mathsl{\\Iota}"], ["d705", "\\mathsl{\\Kappa}"], ["d706", "\\mathsl{\\Lambda}"], ["d709", "\\mathsl{\\Xi}"], ["d70b", "\\mathsl{\\Pi}"], ["d70c", "\\mathsl{\\Rho}"], ["d70d", "\\mathsl{\\varsigma}"], ["d70e", "\\mathsl{\\Sigma}"], ["d70f", "\\mathsl{\\Tau}"], ["d710", "\\mathsl{\\Upsilon}"], ["d711", "\\mathsl{\\Phi}"], ["d712", "\\mathsl{\\Chi}"], ["d713", "\\mathsl{\\Psi}"], ["d714", "\\mathsl{\\Omega}"], ["d715", "\\partial{}"], ["d716", "\\in"], ["d717", "\\mathsl{\\vartheta}"], ["d718", "\\mathsl{\\varkappa}"], ["d719", "\\mathsl{\\phi}"], ["d71a", "\\mathsl{\\varrho}"], ["d71b", "\\mathsl{\\varpi}"], ["d71c", "\\mathbit{\\Alpha}"], ["d71d", "\\mathbit{\\Beta}"], ["d71e", "\\mathbit{\\Gamma}"], ["d71f", "\\mathbit{\\Delta}"], ["d720", "\\mathbit{\\Epsilon}"], ["d721", "\\mathbit{\\Zeta}"], ["d722", "\\mathbit{\\Eta}"], ["d723", "\\mathbit{\\Theta}"], ["d724", "\\mathbit{\\Iota}"], ["d725", "\\mathbit{\\Kappa}"], ["d726", "\\mathbit{\\Lambda}"], ["d729", "\\mathbit{\\Xi}"], ["d72b", "\\mathbit{\\Pi}"], ["d72c", "\\mathbit{\\Rho}"], ["d72d", "\\mathbit{O}"], ["d72e", "\\mathbit{\\Sigma}"], ["d72f", "\\mathbit{\\Tau}"], ["d730", "\\mathbit{\\Upsilon}"], ["d731", "\\mathbit{\\Phi}"], ["d732", "\\mathbit{\\Chi}"], ["d733", "\\mathbit{\\Psi}"], ["d734", "\\mathbit{\\Omega}"], ["d735", "\\mathbit{\\nabla}"], ["d736", "\\mathbit{\\Alpha}"], ["d737", "\\mathbit{\\Beta}"], ["d738", "\\mathbit{\\Gamma}"], ["d739", "\\mathbit{\\Delta}"], ["d73a", "\\mathbit{\\Epsilon}"], ["d73b", "\\mathbit{\\Zeta}"], ["d73c", "\\mathbit{\\Eta}"], ["d73d", "\\mathbit{\\Theta}"], ["d73e", "\\mathbit{\\Iota}"], ["d73f", "\\mathbit{\\Kappa}"], ["d740", "\\mathbit{\\Lambda}"], ["d743", "\\mathbit{\\Xi}"], ["d745", "\\mathbit{\\Pi}"], ["d746", "\\mathbit{\\Rho}"], ["d747", "\\mathbit{\\varsigma}"], ["d748", "\\mathbit{\\Sigma}"], ["d749", "\\mathbit{\\Tau}"], ["d74a", "\\mathbit{\\Upsilon}"], ["d74b", "\\mathbit{\\Phi}"], ["d74c", "\\mathbit{\\Chi}"], ["d74d", "\\mathbit{\\Psi}"], ["d74e", "\\mathbit{\\Omega}"], ["d74f", "\\partial{}"], ["d750", "\\in"], ["d751", "\\mathbit{\\vartheta}"], ["d752", "\\mathbit{\\varkappa}"], ["d753", "\\mathbit{\\phi}"], ["d754", "\\mathbit{\\varrho}"], ["d755", "\\mathbit{\\varpi}"], ["d756", "\\mathsfbf{\\Alpha}"], ["d757", "\\mathsfbf{\\Beta}"], ["d758", "\\mathsfbf{\\Gamma}"], ["d759", "\\mathsfbf{\\Delta}"], ["d75a", "\\mathsfbf{\\Epsilon}"], ["d75b", "\\mathsfbf{\\Zeta}"], ["d75c", "\\mathsfbf{\\Eta}"], ["d75d", "\\mathsfbf{\\Theta}"], ["d75e", "\\mathsfbf{\\Iota}"], ["d75f", "\\mathsfbf{\\Kappa}"], ["d760", "\\mathsfbf{\\Lambda}"], ["d763", "\\mathsfbf{\\Xi}"], ["d765", "\\mathsfbf{\\Pi}"], ["d766", "\\mathsfbf{\\Rho}"], ["d767", "\\mathsfbf{\\vartheta}"], ["d768", "\\mathsfbf{\\Sigma}"], ["d769", "\\mathsfbf{\\Tau}"], ["d76a", "\\mathsfbf{\\Upsilon}"], ["d76b", "\\mathsfbf{\\Phi}"], ["d76c", "\\mathsfbf{\\Chi}"], ["d76d", "\\mathsfbf{\\Psi}"], ["d76e", "\\mathsfbf{\\Omega}"], ["d76f", "\\mathsfbf{\\nabla}"], ["d770", "\\mathsfbf{\\Alpha}"], ["d771", "\\mathsfbf{\\Beta}"], ["d772", "\\mathsfbf{\\Gamma}"], ["d773", "\\mathsfbf{\\Delta}"], ["d774", "\\mathsfbf{\\Epsilon}"], ["d775", "\\mathsfbf{\\Zeta}"], ["d776", "\\mathsfbf{\\Eta}"], ["d777", "\\mathsfbf{\\Theta}"], ["d778", "\\mathsfbf{\\Iota}"], ["d779", "\\mathsfbf{\\Kappa}"], ["d77a", "\\mathsfbf{\\Lambda}"], ["d77d", "\\mathsfbf{\\Xi}"], ["d77f", "\\mathsfbf{\\Pi}"], ["d780", "\\mathsfbf{\\Rho}"], ["d781", "\\mathsfbf{\\varsigma}"], ["d782", "\\mathsfbf{\\Sigma}"], ["d783", "\\mathsfbf{\\Tau}"], ["d784", "\\mathsfbf{\\Upsilon}"], ["d785", "\\mathsfbf{\\Phi}"], ["d786", "\\mathsfbf{\\Chi}"], ["d787", "\\mathsfbf{\\Psi}"], ["d788", "\\mathsfbf{\\Omega}"], ["d789", "\\partial{}"], ["d78a", "\\in"], ["d78b", "\\mathsfbf{\\vartheta}"], ["d78c", "\\mathsfbf{\\varkappa}"], ["d78d", "\\mathsfbf{\\phi}"], ["d78e", "\\mathsfbf{\\varrho}"], ["d78f", "\\mathsfbf{\\varpi}"], ["d790", "\\mathsfbfsl{\\Alpha}"], ["d791", "\\mathsfbfsl{\\Beta}"], ["d792", "\\mathsfbfsl{\\Gamma}"], ["d793", "\\mathsfbfsl{\\Delta}"], ["d794", "\\mathsfbfsl{\\Epsilon}"], ["d795", "\\mathsfbfsl{\\Zeta}"], ["d796", "\\mathsfbfsl{\\Eta}"], ["d797", "\\mathsfbfsl{\\vartheta}"], ["d798", "\\mathsfbfsl{\\Iota}"], ["d799", "\\mathsfbfsl{\\Kappa}"], ["d79a", "\\mathsfbfsl{\\Lambda}"], ["d79d", "\\mathsfbfsl{\\Xi}"], ["d79f", "\\mathsfbfsl{\\Pi}"], ["d7a0", "\\mathsfbfsl{\\Rho}"], ["d7a1", "\\mathsfbfsl{\\vartheta}"], ["d7a2", "\\mathsfbfsl{\\Sigma}"], ["d7a3", "\\mathsfbfsl{\\Tau}"], ["d7a4", "\\mathsfbfsl{\\Upsilon}"], ["d7a5", "\\mathsfbfsl{\\Phi}"], ["d7a6", "\\mathsfbfsl{\\Chi}"], ["d7a7", "\\mathsfbfsl{\\Psi}"], ["d7a8", "\\mathsfbfsl{\\Omega}"], ["d7a9", "\\mathsfbfsl{\\nabla}"], ["d7aa", "\\mathsfbfsl{\\Alpha}"], ["d7ab", "\\mathsfbfsl{\\Beta}"], ["d7ac", "\\mathsfbfsl{\\Gamma}"], ["d7ad", "\\mathsfbfsl{\\Delta}"], ["d7ae", "\\mathsfbfsl{\\Epsilon}"], ["d7af", "\\mathsfbfsl{\\Zeta}"], ["d7b0", "\\mathsfbfsl{\\Eta}"], ["d7b1", "\\mathsfbfsl{\\vartheta}"], ["d7b2", "\\mathsfbfsl{\\Iota}"], ["d7b3", "\\mathsfbfsl{\\Kappa}"], ["d7b4", "\\mathsfbfsl{\\Lambda}"], ["d7b7", "\\mathsfbfsl{\\Xi}"], ["d7b9", "\\mathsfbfsl{\\Pi}"], ["d7ba", "\\mathsfbfsl{\\Rho}"], ["d7bb", "\\mathsfbfsl{\\varsigma}"], ["d7bc", "\\mathsfbfsl{\\Sigma}"], ["d7bd", "\\mathsfbfsl{\\Tau}"], ["d7be", "\\mathsfbfsl{\\Upsilon}"], ["d7bf", "\\mathsfbfsl{\\Phi}"], ["d7c0", "\\mathsfbfsl{\\Chi}"], ["d7c1", "\\mathsfbfsl{\\Psi}"], ["d7c2", "\\mathsfbfsl{\\Omega}"], ["d7c3", "\\partial{}"], ["d7c4", "\\in"], ["d7c5", "\\mathsfbfsl{\\vartheta}"], ["d7c6", "\\mathsfbfsl{\\varkappa}"], ["d7c7", "\\mathsfbfsl{\\phi}"], ["d7c8", "\\mathsfbfsl{\\varrho}"], ["d7c9", "\\mathsfbfsl{\\varpi}"], ["d7ce", "\\mathbf{0}"], ["d7cf", "\\mathbf{1}"], ["d7d0", "\\mathbf{2}"], ["d7d1", "\\mathbf{3}"], ["d7d2", "\\mathbf{4}"], ["d7d3", "\\mathbf{5}"], ["d7d4", "\\mathbf{6}"], ["d7d5", "\\mathbf{7}"], ["d7d6", "\\mathbf{8}"], ["d7d7", "\\mathbf{9}"], ["d7d8", "\\mathbb{0}"], ["d7d9", "\\mathbb{1}"], ["d7da", "\\mathbb{2}"], ["d7db", "\\mathbb{3}"], ["d7dc", "\\mathbb{4}"], ["d7dd", "\\mathbb{5}"], ["d7de", "\\mathbb{6}"], ["d7df", "\\mathbb{7}"], ["d7e0", "\\mathbb{8}"], ["d7e1", "\\mathbb{9}"], ["d7e2", "\\mathsf{0}"], ["d7e3", "\\mathsf{1}"], ["d7e4", "\\mathsf{2}"], ["d7e5", "\\mathsf{3}"], ["d7e6", "\\mathsf{4}"], ["d7e7", "\\mathsf{5}"], ["d7e8", "\\mathsf{6}"], ["d7e9", "\\mathsf{7}"], ["d7ea", "\\mathsf{8}"], ["d7eb", "\\mathsf{9}"], ["d7ec", "\\mathsfbf{0}"], ["d7ed", "\\mathsfbf{1}"], ["d7ee", "\\mathsfbf{2}"], ["d7ef", "\\mathsfbf{3}"], ["d7f0", "\\mathsfbf{4}"], ["d7f1", "\\mathsfbf{5}"], ["d7f2", "\\mathsfbf{6}"], ["d7f3", "\\mathsfbf{7}"], ["d7f4", "\\mathsfbf{8}"], ["d7f5", "\\mathsfbf{9}"], ["d7f6", "\\mathtt{0}"], ["d7f7", "\\mathtt{1}"], ["d7f8", "\\mathtt{2}"], ["d7f9", "\\mathtt{3}"], ["d7fa", "\\mathtt{4}"], ["d7fb", "\\mathtt{5}"], ["d7fc", "\\mathtt{6}"], ["d7fd", "\\mathtt{7}"], ["d7fe", "\\mathtt{8}"], ["d7ff", "\\mathtt{9}"]]);
    }

  }); // src/utils.ts


  function escapeSpecialCharacters(str) {
    var mathExpressions = [];
    str = str.replace(/\$[^$]+\$/, match => {
      mathExpressions.push(match);
      return "MATH.EXP.".concat(mathExpressions.length - 1);
    });
    var newstr = "";
    var escapeMode = false;

    for (var i = 0; i < str.length; i++) {
      if (escapeMode) {
        escapeMode = false;
        newstr += str[i];
        continue;
      }

      if (str[i] === "\\") {
        escapeMode = true;
        newstr += str[i];
        continue;
      }

      var c = str.charCodeAt(i).toString(16).padStart(4, "0");
      newstr += specialCharacters.get(c) || str[i];
    }

    return newstr.replace(/MATH\.EXP\.(\d+)/, (_, i) => mathExpressions[Number(i)]);
  }

  function titleCase(str) {
    return str.replace(/(\w)(\S*)/g, (_, first, rest) => first.toLocaleUpperCase() + rest.toLocaleLowerCase());
  }

  function alphaNum(str) {
    return str.replace(/[^0-9A-Za-z]/g, "").toLocaleLowerCase();
  }

  function convertCRLF(str) {
    return str.replace(/\r\n?/g, "\n");
  }

  function wrapText(line, lineWidth) {
    var words = line.split(" ");
    var lines = [""];

    var _iterator3 = _createForOfIteratorHelper(words),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var word = _step3.value;

        if (lines[lines.length - 1].length + word.length + 1 > lineWidth) {
          lines.push("");
        }

        lines[lines.length - 1] += word + " ";
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }

    return lines.map(line2 => line2.trim());
  }

  function unwrapText(str) {
    return str.replace(/\s*\n\s*\n\s*/g, "<<BIBTEX_TIDY_PARA>>").replace(/\s*\n\s*/g, " ").replace(/<<BIBTEX_TIDY_PARA>>/g, "\n\n");
  }

  function addEnclosingBraces(str, removeInsideBraces) {
    if (removeInsideBraces) str = str.replace(/[{}]/g, "");
    return "{".concat(str, "}");
  }

  function removeEnclosingBraces(str) {
    return str.replace(/^\{([^{}]*)\}$/g, "$1");
  }

  function escapeURL(str) {
    return str.replace(/\\?_/g, "\\%5F");
  }

  function limitAuthors(str, maxAuthors) {
    var authors = str.split(" and ");

    if (authors.length > maxAuthors) {
      return [...authors.slice(0, maxAuthors), "others"].join(" and ");
    }

    return str;
  }

  function formatPageRange(str) {
    for (var i = 0; i < 4; i++) {
      str = str.replace(/(\d)\s*-\s*(\d)/g, "$1--$2");
    }

    return str;
  }

  var init_utils = __esm({
    "src/utils.ts"() {
      init_unicode();
    }

  }); // src/sort.ts


  function sortEntries(ast, fieldMaps, sort) {
    var _a, _b, _c, _d, _e;

    if (!sort) return;
    var sortIndexes = /* @__PURE__ */new Map();
    var precedingMeta = [];

    var _iterator4 = _createForOfIteratorHelper(ast.children),
        _step4;

    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var item = _step4.value;

        if (item.type === "text" || ((_a = item.block) == null ? void 0 : _a.type) !== "entry") {
          precedingMeta.push(item);
          continue;
        }

        var sortIndex = /* @__PURE__ */new Map();

        var _iterator5 = _createForOfIteratorHelper(sort),
            _step5;

        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var key = _step5.value;
            if (key.startsWith("-")) key = key.slice(1);
            var val = void 0;

            if (key === "key") {
              val = (_b = item.block.key) != null ? _b : "";
            } else if (key === "type") {
              val = item.command;
            } else if (key === "month") {
              var v = (_c = fieldMaps.get(item.block)) == null ? void 0 : _c.get(key);

              var _i2 = v ? MONTHS.indexOf(v) : -1;

              val = _i2 > -1 ? _i2 : "";
            } else {
              val = (_e = (_d = fieldMaps.get(item.block)) == null ? void 0 : _d.get(key)) != null ? _e : "";
            }

            sortIndex.set(key, typeof val === "string" ? val.toLowerCase() : val);
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }

        sortIndexes.set(item, sortIndex);

        while (precedingMeta.length > 0) {
          sortIndexes.set(precedingMeta.pop(), sortIndex);
        }
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }

    var _loop2 = function _loop2(i) {
      var desc = sort[i].startsWith("-");
      var key = desc ? sort[i].slice(1) : sort[i];
      ast.children.sort((a, b) => {
        var _a2, _b2, _c2, _d2;

        var ia = (_b2 = (_a2 = sortIndexes.get(a)) == null ? void 0 : _a2.get(key)) != null ? _b2 : "\uFFF0";
        var ib = (_d2 = (_c2 = sortIndexes.get(b)) == null ? void 0 : _c2.get(key)) != null ? _d2 : "\uFFF0";
        if (typeof ia === "number") ia = String(ia).padStart(50, "0");
        if (typeof ib === "number") ib = String(ib).padStart(50, "0");
        return (desc ? ib : ia).localeCompare(desc ? ia : ib);
      });
    };

    for (var i = sort.length - 1; i >= 0; i--) {
      _loop2(i);
    }
  }

  function sortEntryFields(ast, fieldOrder) {
    var _iterator6 = _createForOfIteratorHelper(getEntries(ast)),
        _step6;

    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var entry = _step6.value;
        entry.fields.sort((a, b) => {
          var orderA = fieldOrder.indexOf(a.name.toLocaleLowerCase());
          var orderB = fieldOrder.indexOf(b.name.toLocaleLowerCase());
          if (orderA === -1 && orderB === -1) return 0;
          if (orderA === -1) return 1;
          if (orderB === -1) return -1;
          if (orderB < orderA) return 1;
          if (orderB > orderA) return -1;
          return 0;
        });
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
  }

  var MONTHS;

  var init_sort = __esm({
    "src/sort.ts"() {
      init_src();
      MONTHS = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
    }

  }); // src/format.ts


  function formatBibtex(ast, options, replacementKeys) {
    var omit = options.omit,
        tab = options.tab,
        space = options.space;
    var indent = tab ? "	" : " ".repeat(space);
    var omitFields = new Set(omit);
    var bibtex = ast.children.map(child => formatNode(child, options, indent, omitFields, replacementKeys)).join("");
    if (!bibtex.endsWith("\n")) bibtex += "\n";
    return bibtex;
  }

  function formatNode(child, options, indent, omitFields, replacementKeys) {
    if (child.type === "text") {
      return formatComment(child.text, options);
    }

    if (!child.block) throw new Error("FATAL!");

    switch (child.block.type) {
      case "preamble":
      case "string":
        return "".concat(child.block.raw, "\n");

      case "comment":
        return formatComment(child.block.raw, options);

      case "entry":
        return formatEntry(child.command, child.block, options, indent, omitFields, replacementKeys == null ? void 0 : replacementKeys.get(child.block));
    }
  }

  function formatEntry(entryType, entry, options, indent, omitFields, replacementKey) {
    var align = options.align,
        trailingCommas = options.trailingCommas,
        removeDuplicateFields = options.removeDuplicateFields,
        removeEmptyFields = options.removeEmptyFields,
        lowercase = options.lowercase;
    var bibtex = "";
    var itemType = lowercase ? entryType.toLocaleLowerCase() : entryType;
    bibtex += "@".concat(itemType, "{");
    var key = replacementKey != null ? replacementKey : entry.key;
    if (key) bibtex += "".concat(key, ",");
    var fieldSeen = /* @__PURE__ */new Set();

    for (var i = 0; i < entry.fields.length; i++) {
      var field = entry.fields[i];
      var nameLowerCase = field.name.toLocaleLowerCase();
      var name = lowercase ? nameLowerCase : field.name;
      if (field.name === "") continue;
      if (omitFields.has(nameLowerCase)) continue;
      if (removeDuplicateFields && fieldSeen.has(nameLowerCase)) continue;
      fieldSeen.add(nameLowerCase);

      if (field.value.concat.length === 0) {
        if (removeEmptyFields) continue;
        bibtex += "\n".concat(indent).concat(name);
      } else {
        var value = formatValue(field, options);
        if (removeEmptyFields && (value === "{}" || value === '""')) continue;
        bibtex += "\n".concat(indent).concat(name.trim().padEnd(align - 1), " = ").concat(value);
      }

      if (i < entry.fields.length - 1 || trailingCommas) bibtex += ",";
    }

    bibtex += "\n}\n";
    return bibtex;
  }

  function formatComment(comment, _ref3) {
    var stripComments = _ref3.stripComments,
        tidyComments = _ref3.tidyComments;
    if (stripComments) return "";

    if (tidyComments) {
      var trimmed = comment.trim();
      if (trimmed === "") return "";
      return trimmed + "\n";
    } else {
      return comment.replace(/^[ \t]*\n|[ \t]*$/g, "");
    }
  }

  function formatValue(field, options) {
    var curly = options.curly,
        numeric = options.numeric,
        align = options.align,
        stripEnclosingBraces = options.stripEnclosingBraces,
        dropAllCaps = options.dropAllCaps,
        escape = options.escape,
        encodeUrls = options.encodeUrls,
        wrap = options.wrap,
        maxAuthors = options.maxAuthors,
        tab = options.tab,
        space = options.space,
        enclosingBraces = options.enclosingBraces;
    var nameLowerCase = field.name.toLocaleLowerCase();
    var indent = tab ? "	" : " ".repeat(space);
    var enclosingBracesFields = new Set((enclosingBraces || []).map(field2 => field2.toLocaleLowerCase()));
    return field.value.concat.map(_ref4 => {
      var type = _ref4.type,
          value = _ref4.value;
      var isNumeric = value.match(/^[1-9][0-9]*$/);

      if (isNumeric && curly) {
        type = "braced";
      }

      if (type === "literal" || numeric && isNumeric) {
        return value;
      }

      var dig3 = value.slice(0, 3).toLowerCase();

      if (!curly && numeric && nameLowerCase === "month" && MONTH_SET.has(dig3)) {
        return dig3;
      }

      value = unwrapText(value);

      if (stripEnclosingBraces) {
        value = removeEnclosingBraces(value);
      }

      if (dropAllCaps && !value.match(/[a-z]/)) {
        value = titleCase(value);
      }

      if (nameLowerCase === "url" && encodeUrls) {
        value = escapeURL(value);
      }

      if (escape) {
        value = escapeSpecialCharacters(value);
      }

      if (nameLowerCase === "pages") {
        value = formatPageRange(value);
      }

      if (nameLowerCase === "author" && maxAuthors) {
        value = limitAuthors(value, maxAuthors);
      }

      if (enclosingBracesFields.has(nameLowerCase) && (type === "braced" || curly)) {
        value = addEnclosingBraces(value, true);
      }

      if (type === "braced" && field.value.concat.length === 1) {
        value = value.trim();
      }

      if (type === "braced" || curly) {
        var lineLength = "".concat(indent).concat(align, "{").concat(value, "}").length;
        var multiLine = value.includes("\n\n");

        if (wrap && lineLength > wrap || multiLine) {
          var paragraphs = value.split("\n\n");
          var valIndent = indent.repeat(2);

          if (wrap) {
            var wrapCol = wrap;
            paragraphs = paragraphs.map(paragraph => wrapText(paragraph, wrapCol - valIndent.length).join("\n" + valIndent));
          }

          value = "\n" + valIndent + paragraphs.join("\n\n".concat(valIndent)) + "\n" + indent;
        }

        return addEnclosingBraces(value);
      } else {
        return "\"".concat(value, "\"");
      }
    }).join(" # ");
  }

  var MONTH_SET;

  var init_format = __esm({
    "src/format.ts"() {
      init_utils();
      init_sort();
      MONTH_SET = new Set(MONTHS);
    }

  }); // src/duplicates.ts


  function checkForDuplicates(ast, valueLookup, duplicates, merge) {
    var _a, _b;

    var uniqCheck = /* @__PURE__ */new Map();

    if (duplicates) {
      var _iterator7 = _createForOfIteratorHelper(duplicates),
          _step7;

      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var key = _step7.value;
          uniqCheck.set(key, !!merge);
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
    }

    if (!uniqCheck.has("key")) {
      uniqCheck.set("key", false);
    }

    var duplicateEntries = /* @__PURE__ */new Set();
    var warnings = [];
    var keys = /* @__PURE__ */new Map();
    var dois = /* @__PURE__ */new Map();
    var citations = /* @__PURE__ */new Map();
    var abstracts = /* @__PURE__ */new Map();

    var _iterator8 = _createForOfIteratorHelper(getEntries(ast)),
        _step8;

    try {
      for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
        var entry = _step8.value;
        var entryValues = valueLookup.get(entry);

        var _iterator9 = _createForOfIteratorHelper(uniqCheck),
            _step9;

        try {
          for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
            var _step9$value = _slicedToArray(_step9.value, 2),
                _key = _step9$value[0],
                doMerge = _step9$value[1];

            var duplicateOf = void 0;

            switch (_key) {
              case "key":
                {
                  if (!entry.key) continue;
                  var keyLC = entry.key.toLocaleLowerCase();
                  duplicateOf = keys.get(keyLC);
                  if (!duplicateOf) keys.set(keyLC, entry);
                  break;
                }

              case "doi":
                var doi = alphaNum((_a = entryValues.get("doi")) != null ? _a : "");
                if (!doi) continue;
                duplicateOf = dois.get(doi);
                if (!duplicateOf) dois.set(doi, entry);
                break;

              case "citation":
                var ttl = entryValues.get("title");
                var aut = entryValues.get("author");
                if (!ttl || !aut) continue;
                var cit = alphaNum(aut.split(/,| and/)[0]) + ":" + alphaNum(ttl);
                duplicateOf = citations.get(cit);
                if (!duplicateOf) citations.set(cit, entry);
                break;

              case "abstract":
                var abstract = alphaNum((_b = entryValues.get("abstract")) != null ? _b : "");
                var abs = abstract == null ? void 0 : abstract.slice(0, 100);
                if (!abs) continue;
                duplicateOf = abstracts.get(abs);
                if (!duplicateOf) abstracts.set(abs, entry);
                break;
            }

            if (duplicateOf) {
              if (doMerge) {
                duplicateEntries.add(entry);
                warnings.push({
                  code: "DUPLICATE_ENTRY",
                  message: "".concat(entry.key, " appears to be a duplicate of ").concat(duplicateOf.key, " and was removed.")
                });
                mergeEntries(merge, duplicateOf, entry);
              } else {
                warnings.push({
                  code: "DUPLICATE_KEY",
                  message: "".concat(entry.key, " is a duplicate entry key.")
                });
              }
            }
          }
        } catch (err) {
          _iterator9.e(err);
        } finally {
          _iterator9.f();
        }
      }
    } catch (err) {
      _iterator8.e(err);
    } finally {
      _iterator8.f();
    }

    return {
      entries: duplicateEntries,
      warnings
    };
  }

  function mergeEntries(merge, duplicateOf, entry) {
    switch (merge) {
      case "last":
        duplicateOf.key = entry.key;
        duplicateOf.fields = entry.fields;
        break;

      case "combine":
      case "overwrite":
        var _iterator10 = _createForOfIteratorHelper(entry.fields),
            _step10;

        try {
          var _loop3 = function _loop3() {
            var field = _step10.value;
            var existing = duplicateOf.fields.find(f => f.name.toLocaleLowerCase() === field.name.toLocaleLowerCase());

            if (!existing) {
              duplicateOf.fields.push(field);
            } else if (merge === "overwrite") {
              existing.value = field.value;
            }
          };

          for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
            _loop3();
          }
        } catch (err) {
          _iterator10.e(err);
        } finally {
          _iterator10.f();
        }

        break;
    }
  }

  var init_duplicates = __esm({
    "src/duplicates.ts"() {
      init_utils();
      init_src();
    }

  }); // src/parseAuthors.ts


  function parseAuthors(authors) {
    return authors.replace(/\s+/g, " ").split(/ and /i).map(nameRaw => {
      var name = nameRaw.trim();
      var commaPos = name.indexOf(",");

      if (commaPos > -1) {
        return {
          firstNames: name.slice(commaPos + 1).trim(),
          lastName: name.slice(0, commaPos).trim()
        };
      } else {
        var lastSpacePos = name.lastIndexOf(" ");
        return {
          firstNames: name.slice(0, lastSpacePos).trim(),
          lastName: name.slice(lastSpacePos).trim()
        };
      }
    });
  }

  var init_parseAuthors = __esm({
    "src/parseAuthors.ts"() {}

  }); // src/index.ts


  function tidy(input) {
    var options_ = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var options = normalizeOptions(options_);
    input = convertCRLF(input);
    var ast = generateAST(input);
    var warnings = getEntries(ast).filter(entry => !entry.key).map(entry => ({
      code: "MISSING_KEY",
      message: "".concat(entry.type, " entry does not have an entry key.")
    }));
    var valueLookup = generateValueLookup(ast, options);
    var duplicates = checkForDuplicates(ast, valueLookup, options.duplicates, options.merge);
    warnings.push(...duplicates.warnings);
    ast.children = ast.children.filter(child => !isEntryNode(child) || !duplicates.entries.has(child.block));
    if (options.sort) sortEntries(ast, valueLookup, options.sort);
    if (options.sortFields) sortEntryFields(ast, options.sortFields);
    var newKeys = options.generateKeys ? generateKeys(ast, valueLookup) : void 0;
    var bibtex = formatBibtex(ast, options, newKeys);
    return {
      bibtex,
      warnings,
      count: getEntries(ast).length
    };
  }

  function generateKeys(ast, valueLookup) {
    var _a;

    var keys = /* @__PURE__ */new Map();
    var keyCounts = /* @__PURE__ */new Map();

    var _iterator11 = _createForOfIteratorHelper(ast.children),
        _step11;

    try {
      for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
        var node = _step11.value;

        if (isEntryNode(node)) {
          var newKey = generateKey(valueLookup.get(node.block));

          if (newKey) {
            var keyCount = ((_a = keyCounts.get(newKey)) != null ? _a : 0) + 1;
            keys.set(node.block, newKey + (keyCount > 1 ? keyCount : ""));
            keyCounts.set(newKey, keyCount);
          }
        }
      }
    } catch (err) {
      _iterator11.e(err);
    } finally {
      _iterator11.f();
    }

    return keys;
  }

  function generateKey(valueLookup) {
    var _a, _b, _c, _d, _e;

    var authors = parseAuthors((_b = (_a = valueLookup == null ? void 0 : valueLookup.get("author")) == null ? void 0 : _a.replace(/["{}]/g, "")) != null ? _b : "");
    var lastName = (_c = authors[0]) == null ? void 0 : _c.lastName.toLowerCase();
    var year = (_d = valueLookup == null ? void 0 : valueLookup.get("year")) == null ? void 0 : _d.replace(/[^0-9]/g, "");
    var title = (_e = valueLookup == null ? void 0 : valueLookup.get("title")) != null ? _e : valueLookup == null ? void 0 : valueLookup.get("booktitle");
    var titleFirstWord = title == null ? void 0 : title.toLowerCase().replace(new RegExp("^.*?([a-z]+)[^a-z].*$", "s"), "$1");
    if (!lastName || !year) return;
    return [lastName, year, titleFirstWord != null ? titleFirstWord : ""].join("");
  }

  function isEntryNode(node) {
    var _a;

    return node.type !== "text" && ((_a = node.block) == null ? void 0 : _a.type) === "entry";
  }

  function getEntries(ast) {
    return ast.children.filter(isEntryNode).map(node => node.block);
  }

  function generateValueLookup(ast, options) {
    return new Map(getEntries(ast).map(entry => [entry, new Map(entry.fields.map(field => [field.name.toLocaleLowerCase(), formatValue(field, options)]))]));
  }

  var src_default;

  var init_src = __esm({
    "src/index.ts"() {
      init_optionUtils();
      init_bibtex_parser();
      init_utils();
      init_format();
      init_sort();
      init_duplicates();
      init_parseAuthors();
      src_default = {
        tidy
      };
    }

  }); // src/cliUtils.ts


  function optionsToCLIArgs(options) {
    return optionDefinitions.map(def => {
      var _a;

      return (_a = def.toCLI) == null ? void 0 : _a.call(def, options[def.key]);
    }).filter(arg => typeof arg === "string");
  }

  var OPTIONS;

  var init_cliUtils = __esm({
    "src/cliUtils.ts"() {
      init_optionDefinitions();
      OPTIONS = new Set(optionDefinitions.flatMap(def => Object.keys(def.cli)));
    }

  }); // node_modules/codemirror/addon/mode/simple.js


  var require_simple = __commonJS({
    "node_modules/codemirror/addon/mode/simple.js"(exports, module) {
      (function (mod) {
        if (typeof exports == "object" && typeof module == "object") mod(require_codemirror());else if (typeof define == "function" && define.amd) define(["../../lib/codemirror"], mod);else mod(CodeMirror);
      })(function (CodeMirror3) {
        "use strict";

        CodeMirror3.defineSimpleMode = function (name, states) {
          CodeMirror3.defineMode(name, function (config) {
            return CodeMirror3.simpleMode(config, states);
          });
        };

        CodeMirror3.simpleMode = function (config, states) {
          ensureState(states, "start");
          var states_ = {},
              meta = states.meta || {},
              hasIndentation = false;

          for (var state in states) {
            if (state != meta && states.hasOwnProperty(state)) {
              var list = states_[state] = [],
                  orig = states[state];

              for (var i = 0; i < orig.length; i++) {
                var data = orig[i];
                list.push(new Rule(data, states));
                if (data.indent || data.dedent) hasIndentation = true;
              }
            }
          }

          var mode = {
            startState: function startState() {
              return {
                state: "start",
                pending: null,
                local: null,
                localState: null,
                indent: hasIndentation ? [] : null
              };
            },
            copyState: function copyState(state2) {
              var s = {
                state: state2.state,
                pending: state2.pending,
                local: state2.local,
                localState: null,
                indent: state2.indent && state2.indent.slice(0)
              };
              if (state2.localState) s.localState = CodeMirror3.copyState(state2.local.mode, state2.localState);
              if (state2.stack) s.stack = state2.stack.slice(0);

              for (var pers = state2.persistentStates; pers; pers = pers.next) {
                s.persistentStates = {
                  mode: pers.mode,
                  spec: pers.spec,
                  state: pers.state == state2.localState ? s.localState : CodeMirror3.copyState(pers.mode, pers.state),
                  next: s.persistentStates
                };
              }

              return s;
            },
            token: tokenFunction(states_, config),
            innerMode: function innerMode(state2) {
              return state2.local && {
                mode: state2.local.mode,
                state: state2.localState
              };
            },
            indent: indentFunction(states_, meta)
          };

          if (meta) {
            for (var prop in meta) {
              if (meta.hasOwnProperty(prop)) mode[prop] = meta[prop];
            }
          }

          return mode;
        };

        function ensureState(states, name) {
          if (!states.hasOwnProperty(name)) throw new Error("Undefined state " + name + " in simple mode");
        }

        function toRegex(val, caret) {
          if (!val) return /(?:)/;
          var flags = "";

          if (val instanceof RegExp) {
            if (val.ignoreCase) flags = "i";
            if (val.unicode) flags += "u";
            val = val.source;
          } else {
            val = String(val);
          }

          return new RegExp((caret === false ? "" : "^") + "(?:" + val + ")", flags);
        }

        function asToken(val) {
          if (!val) return null;
          if (val.apply) return val;
          if (typeof val == "string") return val.replace(/\./g, " ");
          var result = [];

          for (var i = 0; i < val.length; i++) {
            result.push(val[i] && val[i].replace(/\./g, " "));
          }

          return result;
        }

        function Rule(data, states) {
          if (data.next || data.push) ensureState(states, data.next || data.push);
          this.regex = toRegex(data.regex);
          this.token = asToken(data.token);
          this.data = data;
        }

        function tokenFunction(states, config) {
          return function (stream, state) {
            if (state.pending) {
              var pend = state.pending.shift();
              if (state.pending.length == 0) state.pending = null;
              stream.pos += pend.text.length;
              return pend.token;
            }

            if (state.local) {
              if (state.local.end && stream.match(state.local.end)) {
                var tok = state.local.endToken || null;
                state.local = state.localState = null;
                return tok;
              } else {
                var tok = state.local.mode.token(stream, state.localState),
                    m;
                if (state.local.endScan && (m = state.local.endScan.exec(stream.current()))) stream.pos = stream.start + m.index;
                return tok;
              }
            }

            var curState = states[state.state];

            for (var i = 0; i < curState.length; i++) {
              var rule = curState[i];
              var matches = (!rule.data.sol || stream.sol()) && stream.match(rule.regex);

              if (matches) {
                if (rule.data.next) {
                  state.state = rule.data.next;
                } else if (rule.data.push) {
                  (state.stack || (state.stack = [])).push(state.state);
                  state.state = rule.data.push;
                } else if (rule.data.pop && state.stack && state.stack.length) {
                  state.state = state.stack.pop();
                }

                if (rule.data.mode) enterLocalMode(config, state, rule.data.mode, rule.token);
                if (rule.data.indent) state.indent.push(stream.indentation() + config.indentUnit);
                if (rule.data.dedent) state.indent.pop();
                var token = rule.token;
                if (token && token.apply) token = token(matches);

                if (matches.length > 2 && rule.token && typeof rule.token != "string") {
                  for (var j = 2; j < matches.length; j++) {
                    if (matches[j]) (state.pending || (state.pending = [])).push({
                      text: matches[j],
                      token: rule.token[j - 1]
                    });
                  }

                  stream.backUp(matches[0].length - (matches[1] ? matches[1].length : 0));
                  return token[0];
                } else if (token && token.join) {
                  return token[0];
                } else {
                  return token;
                }
              }
            }

            stream.next();
            return null;
          };
        }

        function cmp(a, b) {
          if (a === b) return true;
          if (!a || typeof a != "object" || !b || typeof b != "object") return false;
          var props = 0;

          for (var prop in a) {
            if (a.hasOwnProperty(prop)) {
              if (!b.hasOwnProperty(prop) || !cmp(a[prop], b[prop])) return false;
              props++;
            }
          }

          for (var prop in b) {
            if (b.hasOwnProperty(prop)) props--;
          }

          return props == 0;
        }

        function enterLocalMode(config, state, spec, token) {
          var pers;

          if (spec.persistent) {
            for (var p = state.persistentStates; p && !pers; p = p.next) {
              if (spec.spec ? cmp(spec.spec, p.spec) : spec.mode == p.mode) pers = p;
            }
          }

          var mode = pers ? pers.mode : spec.mode || CodeMirror3.getMode(config, spec.spec);
          var lState = pers ? pers.state : CodeMirror3.startState(mode);
          if (spec.persistent && !pers) state.persistentStates = {
            mode,
            spec: spec.spec,
            state: lState,
            next: state.persistentStates
          };
          state.localState = lState;
          state.local = {
            mode,
            end: spec.end && toRegex(spec.end),
            endScan: spec.end && spec.forceEnd !== false && toRegex(spec.end, false),
            endToken: token && token.join ? token[token.length - 1] : token
          };
        }

        function indexOf(val, arr) {
          for (var i = 0; i < arr.length; i++) {
            if (arr[i] === val) return true;
          }
        }

        function indentFunction(states, meta) {
          return function (state, textAfter, line) {
            if (state.local && state.local.mode.indent) return state.local.mode.indent(state.localState, textAfter, line);
            if (state.indent == null || state.local || meta.dontIndentStates && indexOf(state.state, meta.dontIndentStates) > -1) return CodeMirror3.Pass;
            var pos = state.indent.length - 1,
                rules = states[state.state];

            scan: for (;;) {
              for (var i = 0; i < rules.length; i++) {
                var rule = rules[i];

                if (rule.data.dedent && rule.data.dedentIfLineStart !== false) {
                  var m = rule.regex.exec(textAfter);

                  if (m && m[0]) {
                    pos--;
                    if (rule.next || rule.push) rules = states[rule.next || rule.push];
                    textAfter = textAfter.slice(m[0].length);
                    continue scan;
                  }
                }
              }

              break;
            }

            return pos < 0 ? 0 : state.indent[pos];
          };
        }
      });
    }

  }); // docs/bibtex-highlighting.ts


  var import_codemirror, import_simple;

  var init_bibtex_highlighting = __esm({
    "docs/bibtex-highlighting.ts"() {
      import_codemirror = __toESM(require_codemirror());
      import_simple = __toESM(require_simple());
      import_codemirror.default.defineSimpleMode("simplemode", {
        start: [{
          regex: /.*@comment/i,
          token: "comment",
          push: "comment"
        }, {
          regex: /(\s*)(@preamble)(\s*{)/i,
          token: ["", "variable-2"],
          push: "braced"
        }, {
          regex: /(\s*)(@preamble)(\s*\()/i,
          token: ["", "variable-2"],
          push: "parenthesised"
        }, {
          regex: /(\s*)(@string)(\s*{)/i,
          token: ["", "variable-2"],
          push: "braced"
        }, {
          regex: /(\s*)(@string)(\s*\()/i,
          token: ["", "variable-2"],
          push: "parenthesised"
        }, {
          regex: /(\s*)(@[^=#,{}()[\] \t\n\r]+)(\s*\{\s*)([^=#,{}()[\] \t\n\r]+)(\s*,)/,
          token: ["", "variable-2", "", "variable-3"],
          push: "entry"
        }, {
          regex: /.*/,
          token: "comment"
        }],
        entry: [{
          regex: /([^=,{}()[\]\t\n\r]+)(\s*)(=)/,
          token: ["keyword", "", "operator"]
        }, {
          regex: /"/,
          push: "quoted"
        }, {
          regex: /\d+/i,
          token: "number"
        }, {
          regex: /\{/,
          push: "braced"
        }, {
          regex: /}/,
          pop: true
        }],
        quoted: [{
          regex: /\{/,
          push: "braced"
        }, {
          regex: /[^{"]+/,
          token: "string"
        }, {
          regex: /"/,
          pop: true
        }],
        braced: [{
          regex: /\{/,
          push: "braced"
        }, {
          regex: /[^{}]+/,
          token: "string"
        }, {
          regex: /\}/,
          pop: true
        }],
        parenthesised: [{
          regex: /\{/,
          token: "comment",
          push: "braced"
        }, {
          regex: /[^{)]+/,
          token: "string"
        }, {
          regex: /\)/,
          pop: true
        }],
        comment: [{
          regex: /.*\}/,
          token: "comment",
          pop: true
        }, {
          regex: /.*/,
          token: "comment"
        }]
      });
    }

  }); // docs/index.ts


  var require_docs = __commonJS({
    "docs/index.ts"(exports) {
      var import_codemirror2 = __toESM(require_codemirror());

      init_src();
      init_optionDefinitions();
      init_cliUtils();
      init_bibtex_parser();
      init_bibtex_highlighting();

      function $(selector, parent) {
        return (parent != null ? parent : document).querySelector(selector);
      }

      function $$(selector, parent) {
        return (parent != null ? parent : document).querySelectorAll(selector);
      }

      function renderSuboptions() {
        var _iterator12 = _createForOfIteratorHelper($$(".suboptions")),
            _step12;

        try {
          for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
            var suboption = _step12.value;
            var checkbox = $("input", suboption.parentNode);
            suboption.style.display = checkbox.matches(":checked") ? "block" : "none";
          }
        } catch (err) {
          _iterator12.e(err);
        } finally {
          _iterator12.f();
        }
      }

      var _iterator13 = _createForOfIteratorHelper($$("input, textarea")),
          _step13;

      try {
        for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
          var input = _step13.value;
          input.addEventListener("input", () => {
            renderSuboptions();
            formatCLICommand();
          });
        }
      } catch (err) {
        _iterator13.e(err);
      } finally {
        _iterator13.f();
      }

      renderSuboptions();
      var options = document.forms.options;
      var cmEditor = import_codemirror2.default.fromTextArea($("#editor textarea"), {
        lineNumbers: true,
        autofocus: true
      });
      var errorHighlight;
      var optionDocs = {};

      var _iterator14 = _createForOfIteratorHelper(optionDefinitions),
          _step14;

      try {
        for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
          var option = _step14.value;
          optionDocs[option.key] = option;
        }
      } catch (err) {
        _iterator14.e(err);
      } finally {
        _iterator14.f();
      }

      var _iterator15 = _createForOfIteratorHelper($$("label[data-option]")),
          _step15;

      try {
        for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
          var $label = _step15.value;
          var key = $label.dataset.option;
          var _option = optionDocs[key];
          var $input = $label.querySelector("input");
          if (_option.description) $label.setAttribute("title", _option.description.join("\n"));
          $label.querySelector(".name").textContent = _option.title;

          if (!$input.getAttribute("name")) {
            $input.setAttribute("name", key);
          }
        }
      } catch (err) {
        _iterator15.e(err);
      } finally {
        _iterator15.f();
      }

      $("#tidy").addEventListener("click", () => {
        $("#tidy").setAttribute("disabled", "true");
        $("#feedback").style.display = "none";
        $("#feedback").innerHTML = "";
        document.body.classList.toggle("error", false);
        if (errorHighlight) errorHighlight.clear();
        var bibtex = cmEditor.getValue();
        var result;
        var opt = getOptions();
        setTimeout(() => {
          try {
            result = src_default.tidy(bibtex, opt);
            cmEditor.setValue(result.bibtex);
            $("#feedback").innerHTML += formatSuccessMessage(opt, result);
          } catch (e) {
            console.error("bibtex parse problem:", e);
            document.body.classList.toggle("error", true);
            $("#feedback").innerHTML = formatError(e);

            if (e instanceof BibTeXSyntaxError) {
              console.log(e.line, e.column);
              errorHighlight = cmEditor.markText({
                line: e.line - 1,
                ch: e.column - 2
              }, {
                line: e.line - 1,
                ch: e.column - 1
              }, {
                className: "bibtex-error"
              });
            }
          }

          $("#feedback").style.display = "block";
          $("#tidy").removeAttribute("disabled");
        }, 100);
      });
      var resetCopyBtnTimeout;
      $("#copy").addEventListener("click", () => __async(exports, null, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return navigator.clipboard.writeText(cmEditor.getValue());

              case 3:
                $("#copy").classList.toggle("copied", true);
                clearInterval(resetCopyBtnTimeout);
                resetCopyBtnTimeout = setTimeout(() => $("#copy").classList.toggle("copied", false), 3e3);
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                alert("Failed to copy");

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 8]]);
      })));

      function formatSuccessMessage(options2, result) {
        var warnings = result.warnings.filter(w => w.code !== "DUPLICATE_ENTRY");
        return "\n\t\t<strong>Successful!</strong><br>\n\t\tTidied ".concat(result.count, " entries.<br><br>\n\t\t<ul>\n\t\t\t").concat(warnings.map(warning => "<li>".concat(warning.message, "</li>")).join(""), "\n\t\t</ul>\n\t\t").concat(options2.merge ? formatDuplicateSummary(result) : "");
      }

      function formatDuplicateSummary(result) {
        var dupes = result.warnings.filter(w => w.code === "DUPLICATE_ENTRY");

        if (dupes.length > 0) {
          return "No duplicates.";
        }

        return "\n\t\t<strong>".concat(dupes.length, " merged:\n\t\t\t<ul>\n\t\t\t\t").concat(dupes.map(dupe => "<li>".concat(dupe.message, "</li>")).join(""), "\n\t\t\t</ul>\n\t\t</strong>");
      }

      function formatError(e) {
        if (e instanceof BibTeXSyntaxError) {
          return "\n\t\t<strong>There's a problem with the bibtex (".concat(e.name, ")</strong><br>\n\t\tSyntax Error on line ").concat(e.line, " column ").concat(e.column, "<br>\n\t\tUnexpected ").concat(JSON.stringify(e.char), " in ").concat(e.node.type, ".");
        }

        return "\n\t\t<strong>There's a problem with the bibtex</strong><br>\n\t\tUnknown error: ".concat(e, "<br>\n\t\tThis is probably a bug.");
      }

      window.cmEditor = cmEditor;

      function getOptions() {
        return {
          curly: options.curly.checked,
          numeric: options.numeric.checked,
          sort: options.sort.checked && options.sortList.value.length > 0 && options.sortList.value.split(/[\n\t ,]+/),
          omit: options.omit.checked && options.omitList.value.length > 0 ? options.omitList.value.split(/[\n\t ,]+/) : void 0,
          space: Number(options.spaces.value),
          tab: options.indent.value === "tabs",
          align: options.align.checked ? Number(options.alignnum.value) : 0,
          wrap: options.wrap.checked ? Number(options.wrapnum.value) : false,
          duplicates: options.duplicates.checked ? [options.uniqKEY.checked ? "key" : null, options.uniqDOI.checked ? "doi" : null, options.uniqABS.checked ? "abstract" : null, options.uniqCIT.checked ? "citation" : null].filter(a => a !== null) : false,
          merge: options.merge.checked ? options.mergeStrategy.value : false,
          enclosingBraces: options.enclosingBraces.checked && options.enclosingBracesList.value.length > 0 && options.enclosingBracesList.value.split(/[\n\t ,]+/),
          stripEnclosingBraces: options.stripEnclosingBraces.checked,
          dropAllCaps: options.dropAllCaps.checked,
          sortFields: options.sortFields.checked && options.sortFieldList.value.length > 0 && options.sortFieldList.value.split(/[\n\t ,]+/),
          stripComments: options.stripComments.checked,
          tidyComments: options.tidyComments.checked,
          encodeUrls: options.encodeUrls.checked,
          escape: options.escape.checked,
          trailingCommas: options.trailingCommas.checked,
          removeEmptyFields: options.removeEmptyFields.checked,
          removeDuplicateFields: options.removeDuplicateFields.checked,
          lowercase: options.lowercase.checked,
          generateKeys: options.generateKeys.checked,
          maxAuthors: options.maxAuthors.checked ? Number(options.maxAuthorsNum.value) : void 0
        };
      }

      function formatCLICommand() {
        var options2 = getOptions();
        $("#cli").innerHTML = "bibtex-tidy " + optionsToCLIArgs(options2).map(opt => {
          var i = opt.indexOf("=");

          if (i === -1) {
            return "<span class=\"opt-name\">".concat(opt, "</span>");
          } else {
            return ["<span class=\"opt-name\">".concat(opt.slice(0, i), "</span>"), "<span class=\"opt-val\">".concat(opt.slice(i + 1), "</span>")].join("=");
          }
        }).join(" ") + " YOUR_FILE.bib";
      }

      window.requestAnimationFrame(formatCLICommand);
    }

  });

  require_docs();
})();