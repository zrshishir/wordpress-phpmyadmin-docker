"use strict";
(self["webpackChunktimetics"] = self["webpackChunktimetics"] || []).push([[90],{

/***/ 2090:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ settings)
});

// EXTERNAL MODULE: ./assets/src/common/SelectInput.js
var SelectInput = __webpack_require__(4378);
// EXTERNAL MODULE: ./assets/src/common/TextInput.js
var TextInput = __webpack_require__(6582);
// EXTERNAL MODULE: ./assets/src/admin/components/TooltipText.js
var TooltipText = __webpack_require__(8854);
// EXTERNAL MODULE: ./assets/src/admin/context/provider.js + 9 modules
var provider = __webpack_require__(7258);
// EXTERNAL MODULE: ./assets/src/admin/services/generalSettings.js
var generalSettings = __webpack_require__(6750);
// EXTERNAL MODULE: ./assets/src/admin/actionCreators/actions.js
var actions = __webpack_require__(3632);
;// CONCATENATED MODULE: ./assets/src/admin/pages/settings/colorPickerSetting.js
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var colorPickerSetting_React = window.React;
var useState = colorPickerSetting_React.useState,
  useRef = colorPickerSetting_React.useRef,
  useEffect = colorPickerSetting_React.useEffect;


function ColorPickerSettings(_ref) {
  var name = _ref.name,
    defaultColor = _ref.defaultColor;
  var colorPickerInput = useRef(null);
  var _useStateValue = (0,provider/* useStateValue */.K)(),
    _useStateValue2 = _slicedToArray(_useStateValue, 2),
    settingsReducer = _useStateValue2[0].settings,
    dispatch = _useStateValue2[1];
  var settings = settingsReducer.settings;
  useEffect(function () {
    jQuery(colorPickerInput.current).wpColorPicker({
      change: function change(event, ui) {
        dispatch({
          type: actions/* actions.SET_SETTINGS_COLOR */.N.SET_SETTINGS_COLOR,
          payload: _defineProperty({}, name, ui.color.toString())
        });
      }
    });
  }, []);
  var handleChange = function handleChange(event) {
    var newValue = event.target.value;
    dispatch({
      type: actions/* actions.SET_SETTINGS_COLOR */.N.SET_SETTINGS_COLOR,
      payload: _defineProperty({}, name, newValue)
    });
  };
  return /*#__PURE__*/colorPickerSetting_React.createElement("div", {
    className: "tt-color-picker"
  }, /*#__PURE__*/colorPickerSetting_React.createElement("input", {
    type: "text",
    ref: colorPickerInput,
    onChange: handleChange,
    value: settings && settings[name] ? settings[name] : defaultColor
  }));
}
/* harmony default export */ const colorPickerSetting = (ColorPickerSettings);
;// CONCATENATED MODULE: ./assets/src/admin/pages/settings/General.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _timeticsObj$currency;
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { General_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function General_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function General_slicedToArray(arr, i) { return General_arrayWithHoles(arr) || General_iterableToArrayLimit(arr, i) || General_unsupportedIterableToArray(arr, i) || General_nonIterableRest(); }
function General_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function General_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return General_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return General_arrayLikeToArray(o, minLen); }
function General_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function General_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function General_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var General_React = window.React;
var _window$antd = window.antd,
  Button = _window$antd.Button,
  Form = _window$antd.Form,
  General_message = _window$antd.message,
  Skeleton = _window$antd.Skeleton,
  Row = _window$antd.Row,
  Col = _window$antd.Col,
  Typography = _window$antd.Typography,
  Space = _window$antd.Space,
  Select = _window$antd.Select,
  Input = _window$antd.Input;
var Title = Typography.Title,
  Text = Typography.Text;
var __ = wp.i18n.__;
var General_useState = General_React.useState,
  General_useEffect = General_React.useEffect;






var timeticsObj = window.timetics;
function General() {
  var _useStateValue = (0,provider/* useStateValue */.K)(),
    _useStateValue2 = General_slicedToArray(_useStateValue, 2),
    settingsReducer = _useStateValue2[0].settings,
    dispatch = _useStateValue2[1];
  var settings = settingsReducer.settings;
  var _useState = General_useState(false),
    _useState2 = General_slicedToArray(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];
  var _Form$useForm = Form.useForm(),
    _Form$useForm2 = General_slicedToArray(_Form$useForm, 1),
    form = _Form$useForm2[0];
  /**
   * On finish method that can handle general settings
   * @param {Object} values
   */
  var onFinish = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(values) {
      var _values, res;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _values = _objectSpread(_objectSpread({}, values), {}, {
                primary_color: settings.primary_color,
                secondary_color: settings.secondary_color
              });
              setLoading(true);
              _context.next = 4;
              return (0,generalSettings/* generalSettings */.g)({
                method: "PUT",
                data: _objectSpread({}, _values)
              });
            case 4:
              res = _context.sent;
              setLoading(false);
            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return function onFinish(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * On finish faild method that can handle staff create faild
   * @param {Object} values
   */
  var onFinishFailed = function onFinishFailed(errorInfo) {
    General_message.error(errorInfo);
  };
  if (loading) {
    return /*#__PURE__*/General_React.createElement(Skeleton, {
      active: true
    });
  }
  return /*#__PURE__*/General_React.createElement(General_React.Fragment, null, /*#__PURE__*/General_React.createElement(Form, {
    form: form,
    name: "settings",
    layout: "horizontal",
    autoComplete: "off",
    onFinish: onFinish,
    onFinishFailed: onFinishFailed,
    initialValues: settings
  }, generalSettingsData === null || generalSettingsData === void 0 ? void 0 : generalSettingsData.map(function (settingItem) {
    return /*#__PURE__*/General_React.createElement(Row, {
      gutter: [0, 15],
      className: "tt-general-sitting tt-mb-20",
      key: settingItem === null || settingItem === void 0 ? void 0 : settingItem.id,
      align: "middle"
    }, /*#__PURE__*/General_React.createElement(Col, {
      xs: 24,
      md: 14
    }, /*#__PURE__*/General_React.createElement(Title, {
      level: 5,
      className: "tt-margin-0"
    }, settingItem === null || settingItem === void 0 ? void 0 : settingItem.title), /*#__PURE__*/General_React.createElement(Text, {
      type: "secondary"
    }, settingItem === null || settingItem === void 0 ? void 0 : settingItem.subtext)), /*#__PURE__*/General_React.createElement(Col, {
      xs: 24,
      md: 10
    }, settingItem === null || settingItem === void 0 ? void 0 : settingItem.inputData));
  }), /*#__PURE__*/General_React.createElement(Button, {
    type: "primary",
    htmlType: "submit",
    size: "large",
    loading: loading
  }, __("Save change", "timetics"))));
}
/* harmony default export */ const settings_General = (General);
var generalSettingsData = [{
  id: 1,
  title: __("Date & Time Format", "timetics"),
  subtext: __("Change the date and time format to your likings", "timetics"),
  inputData: /*#__PURE__*/General_React.createElement(Form.Item, {
    className: "timetics-input tt-align-right",
    colon: false,
    wrapperCol: {
      span: 24
    }
  }, /*#__PURE__*/General_React.createElement(Space, {
    direction: "vertical ",
    size: [10]
  }, /*#__PURE__*/General_React.createElement(TooltipText/* default */.Z, {
    text: __("Selected current timezone is ".concat(timeticsObj === null || timeticsObj === void 0 ? void 0 : timeticsObj.default_timezone, ". Universal time is ").concat((timeticsObj === null || timeticsObj === void 0 ? void 0 : timeticsObj.date_format_string) + " " + (timeticsObj === null || timeticsObj === void 0 ? void 0 : timeticsObj.time_format_string), " "), "timetics"),
    placement: "top"
  }, /*#__PURE__*/General_React.createElement(Button, {
    type: "default",
    target: "_blank",
    href: (timeticsObj === null || timeticsObj === void 0 ? void 0 : timeticsObj.admin_url) + "/options-general.php#timezone_string",
    className: "tt-mb-10"
  }, __("Update date & time format", "timetics"))), /*#__PURE__*/General_React.createElement(Text, null, __("Default format:", "timetics"), /*#__PURE__*/General_React.createElement("code", null, timeticsObj === null || timeticsObj === void 0 ? void 0 : timeticsObj.date_format), /*#__PURE__*/General_React.createElement("code", null, timeticsObj === null || timeticsObj === void 0 ? void 0 : timeticsObj.time_format))))
}, {
  id: 2,
  title: __("First Day of The Week", "timetics"),
  subtext: __("Choose the day your week starts with", "timetics"),
  inputData: /*#__PURE__*/General_React.createElement(Form.Item, {
    className: "timetics-input tt-align-right",
    colon: false,
    wrapperCol: {
      span: 24
    }
  }, /*#__PURE__*/General_React.createElement(Space, {
    direction: "vertical ",
    size: [10]
  }, /*#__PURE__*/General_React.createElement(Button, {
    type: "default",
    target: "_blank",
    href: (timeticsObj === null || timeticsObj === void 0 ? void 0 : timeticsObj.admin_url) + "/options-general.php#timezone_string",
    className: "tt-mb-10"
  }, __("Update Week starts on", "timetics")), /*#__PURE__*/General_React.createElement(TooltipText/* default */.Z, {
    text: __("Week starts on", "timetics"),
    placement: "top"
  }, /*#__PURE__*/General_React.createElement(Text, null, __("Selected Week ", "timetics"), /*#__PURE__*/General_React.createElement("code", null, timeticsObj === null || timeticsObj === void 0 ? void 0 : timeticsObj.start_of_week)))))
}, {
  id: 3,
  title: __("Approval Status", "timetics"),
  subtext: __("Change the approval status to Approved or Pending or Cancelled", "timetics"),
  inputData: /*#__PURE__*/General_React.createElement(SelectInput/* default */.Z, {
    key: "default_booking_status",
    colon: false,
    wrapperCol: {
      span: 24
    },
    defaultValue: "approved",
    tooltip: __("Select Booking Status", "timetics"),
    options: [{
      value: "approved",
      label: "Approved"
    }, {
      value: "pending",
      label: "Pending"
    }, {
      value: "cancel",
      label: "Cancelled"
    }],
    name: "default_booking_status",
    placeholder: __("Select Booking Status", "timetics")
  })
}, {
  id: 4,
  title: __("Select Currency", "timetics"),
  subtext: __("Select your preferred currency", "timetics"),
  inputData: /*#__PURE__*/General_React.createElement(Form.Item, {
    className: "timetics-input",
    wrapperCol: {
      span: 24
    },
    tooltip: __("Select currency", "timetics"),
    name: "currency",
    placeholder: __("Select currency", "timetics")
  }, /*#__PURE__*/General_React.createElement(Select, {
    showSearch: true,
    className: "timetics-input",
    size: "large",
    placeholder: "Search currency by the country name",
    filterOption: function filterOption(input, option) {
      var _option$children$0$to;
      return ((_option$children$0$to = option === null || option === void 0 ? void 0 : option.children[0].toLowerCase()) !== null && _option$children$0$to !== void 0 ? _option$children$0$to : "").includes(input.toLowerCase());
    },
    filterSort: function filterSort(optionA, optionB) {
      var _optionA$children$, _optionB$children$;
      return ((_optionA$children$ = optionA === null || optionA === void 0 ? void 0 : optionA.children[0]) !== null && _optionA$children$ !== void 0 ? _optionA$children$ : "").toLowerCase().localeCompare(((_optionB$children$ = optionB === null || optionB === void 0 ? void 0 : optionB.children[0]) !== null && _optionB$children$ !== void 0 ? _optionB$children$ : "").toLowerCase());
    }
  }, timeticsObj === null || timeticsObj === void 0 ? void 0 : (_timeticsObj$currency = timeticsObj.currency_list) === null || _timeticsObj$currency === void 0 ? void 0 : _timeticsObj$currency.map(function (option, i) {
    return /*#__PURE__*/General_React.createElement(Option, {
      key: "props.key-".concat(i),
      value: option === null || option === void 0 ? void 0 : option.name
    }, option === null || option === void 0 ? void 0 : option.country, " --", /*#__PURE__*/General_React.createElement("span", {
      dangerouslySetInnerHTML: {
        __html: (option === null || option === void 0 ? void 0 : option.name) + "(" + (option === null || option === void 0 ? void 0 : option.symbol) + ")"
      }
    }));
  })))
}, {
  id: 5,
  title: __("Set primary color", "timetics"),
  subtext: __("Set your primary color", "timetics"),
  inputData: /*#__PURE__*/General_React.createElement("div", {
    className: "tt-color-setting"
  }, /*#__PURE__*/General_React.createElement(colorPickerSetting, {
    name: "primary_color",
    onChange: function onChange(key, value) {}
  }))
}, {
  id: 6,
  title: __("Set secondary color", "timetics"),
  subtext: __("Set your secondary color", "timetics"),
  inputData: /*#__PURE__*/General_React.createElement("div", {
    className: "tt-color-setting"
  }, /*#__PURE__*/General_React.createElement(colorPickerSetting, {
    name: "secondary_color",
    onChange: function onChange(key, value) {}
  }))
}];
// EXTERNAL MODULE: ./assets/src/admin/components/MainPageHeader.js
var MainPageHeader = __webpack_require__(8494);
;// CONCATENATED MODULE: ./assets/src/admin/pages/settings/integrationForm/GoogleCalendarForm.js
function GoogleCalendarForm_typeof(obj) { "@babel/helpers - typeof"; return GoogleCalendarForm_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, GoogleCalendarForm_typeof(obj); }
function GoogleCalendarForm_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ GoogleCalendarForm_regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == GoogleCalendarForm_typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function GoogleCalendarForm_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function GoogleCalendarForm_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? GoogleCalendarForm_ownKeys(Object(source), !0).forEach(function (key) { GoogleCalendarForm_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : GoogleCalendarForm_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function GoogleCalendarForm_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function GoogleCalendarForm_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function GoogleCalendarForm_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { GoogleCalendarForm_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { GoogleCalendarForm_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function GoogleCalendarForm_slicedToArray(arr, i) { return GoogleCalendarForm_arrayWithHoles(arr) || GoogleCalendarForm_iterableToArrayLimit(arr, i) || GoogleCalendarForm_unsupportedIterableToArray(arr, i) || GoogleCalendarForm_nonIterableRest(); }
function GoogleCalendarForm_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function GoogleCalendarForm_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return GoogleCalendarForm_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return GoogleCalendarForm_arrayLikeToArray(o, minLen); }
function GoogleCalendarForm_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function GoogleCalendarForm_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function GoogleCalendarForm_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var GoogleCalendarForm_React = window.React;
var GoogleCalendarForm_window$antd = window.antd,
  GoogleCalendarForm_Button = GoogleCalendarForm_window$antd.Button,
  GoogleCalendarForm_Form = GoogleCalendarForm_window$antd.Form,
  GoogleCalendarForm_Input = GoogleCalendarForm_window$antd.Input,
  Tooltip = GoogleCalendarForm_window$antd.Tooltip,
  GoogleCalendarForm_Typography = GoogleCalendarForm_window$antd.Typography,
  GoogleCalendarForm_message = GoogleCalendarForm_window$antd.message;
var GoogleCalendarForm_Text = GoogleCalendarForm_Typography.Text,
  Link = GoogleCalendarForm_Typography.Link;
var GoogleCalendarForm_ = wp.i18n.__;
var _window$React = window.React,
  GoogleCalendarForm_useState = _window$React.useState,
  GoogleCalendarForm_useEffect = _window$React.useEffect;



function GoogleCalendarForm() {
  var _useStateValue = (0,provider/* useStateValue */.K)(),
    _useStateValue2 = GoogleCalendarForm_slicedToArray(_useStateValue, 2),
    settingsReducer = _useStateValue2[0].settings,
    dispatch = _useStateValue2[1];
  var settings = settingsReducer.settings;
  var _useState = GoogleCalendarForm_useState(false),
    _useState2 = GoogleCalendarForm_slicedToArray(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];
  var _Form$useForm = GoogleCalendarForm_Form.useForm(),
    _Form$useForm2 = GoogleCalendarForm_slicedToArray(_Form$useForm, 1),
    form = _Form$useForm2[0];

  /**
   * On finish method that can handle staff create
   * @param {Object} values
   */
  var onFinish = /*#__PURE__*/function () {
    var _ref = GoogleCalendarForm_asyncToGenerator( /*#__PURE__*/GoogleCalendarForm_regeneratorRuntime().mark(function _callee(values) {
      var res;
      return GoogleCalendarForm_regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setLoading(true);
              _context.next = 3;
              return (0,generalSettings/* generalSettings */.g)({
                method: "PUT",
                data: GoogleCalendarForm_objectSpread({}, values)
              });
            case 3:
              res = _context.sent;
              setLoading(false);
            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return function onFinish(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  /**
   * On finish faild method that can handle staff create faild
   * @param {Object} values
   */
  var onFinishFailed = function onFinishFailed(errorInfo) {
    GoogleCalendarForm_message.error(errorInfo);
  };
  var copyToClipBored = function copyToClipBored(e) {
    navigator.clipboard.writeText(e.target.value);
    GoogleCalendarForm_message.success({
      content: "Redirect url copy to clipboard",
      style: {
        marginTop: "5vh"
      }
    });
  };
  return /*#__PURE__*/GoogleCalendarForm_React.createElement(GoogleCalendarForm_React.Fragment, null, /*#__PURE__*/GoogleCalendarForm_React.createElement(GoogleCalendarForm_Form, {
    form: form,
    name: "integration_form",
    layout: "vertical",
    onFinish: onFinish,
    onFinishFailed: onFinishFailed,
    initialValues: settings
  }, /*#__PURE__*/GoogleCalendarForm_React.createElement("p", null, GoogleCalendarForm_(" Login to your Google account, go to Google Cloud Console, create a project, complete OAuth  Consent screen process, click on Create Credentials, and you'll get your client id and secret key. If you get the ID and Keys for Google Calendar, Goole Meet will be integrated automatically. For full details read the ", "timetics"), /*#__PURE__*/GoogleCalendarForm_React.createElement(Link, {
    target: "_blank",
    type: "link",
    href: "https://docs.arraytics.com/docs/timetics/integrations/google-meet-calendar-integration/"
  }, GoogleCalendarForm_("documentation.", "timetics"))), /*#__PURE__*/GoogleCalendarForm_React.createElement(TextInput/* default */.Z, {
    label: GoogleCalendarForm_("Client ID", "timetics"),
    name: "google_app_client_id",
    type: "text",
    size: "middle",
    placeholder: GoogleCalendarForm_("Enter Client ID", "timetics"),
    tooltip: GoogleCalendarForm_("Enter Client ID", "timetics")
  }), /*#__PURE__*/GoogleCalendarForm_React.createElement(TextInput/* default */.Z, {
    label: GoogleCalendarForm_("Client Secret key", "timetics"),
    name: "google_app_client_secret",
    type: "text",
    size: "middle",
    tooltip: GoogleCalendarForm_("Enter Client Secret Key", "timetics"),
    placeholder: GoogleCalendarForm_("Enter Client Secret Key", "timetics")
  }), /*#__PURE__*/GoogleCalendarForm_React.createElement(TextInput/* default */.Z, {
    label: GoogleCalendarForm_("Redirect URl", "timetics"),
    name: "google_auth_redirect_uri",
    type: "text",
    size: "middle",
    readOnly: true,
    tooltip: GoogleCalendarForm_("Redirect URL will be automatically generated when you connect Google Calendar and Google Meet", "timetics"),
    placeholder: GoogleCalendarForm_("Redirect url", "timetics"),
    onClick: copyToClipBored
  }), /*#__PURE__*/GoogleCalendarForm_React.createElement(GoogleCalendarForm_Button, {
    type: "primary",
    htmlType: "submit",
    size: "large",
    loading: loading
  }, GoogleCalendarForm_("Save", "timetics"))));
}
// EXTERNAL MODULE: ./assets/src/common/icons/Icons.js
var Icons = __webpack_require__(2751);
;// CONCATENATED MODULE: ./assets/src/admin/pages/settings/Integrations.js
var Integrations_React = window.React;
var Integrations_useState = Integrations_React.useState;
var Integrations_window$antd = window.antd,
  Collapse = Integrations_window$antd.Collapse,
  Card = Integrations_window$antd.Card,
  Avatar = Integrations_window$antd.Avatar,
  Integrations_Space = Integrations_window$antd.Space,
  Integrations_Button = Integrations_window$antd.Button,
  Switch = Integrations_window$antd.Switch;
var Meta = Card.Meta;
var Panel = Collapse.Panel;

var Integrations_ = wp.i18n.__;



function Integrations() {
  var _integrationList$;
  return /*#__PURE__*/Integrations_React.createElement(Collapse
  // defaultActiveKey="google_calendar"
  , {
    className: "tt-integration-settings",
    accordion: true,
    bordered: true,
    collapsible: "header",
    ghost: true
    // expandIcon={({ isActive }) =>
    //     isActive ? (
    //         <Button size="large" className="tt-p-0" type="link">
    //             {__("Configure", "timetics")}
    //         </Button>
    //     ) : (
    //         <Button size="large" className="tt-p-0" type="link">
    //             {__("Configure", "timetics")}
    //         </Button>
    //     )
    // }
    ,
    defaultActiveKey: (_integrationList$ = integrationList[0]) === null || _integrationList$ === void 0 ? void 0 : _integrationList$.key,
    expandIconPosition: "end"
  }, integrationList === null || integrationList === void 0 ? void 0 : integrationList.map(function (item) {
    return /*#__PURE__*/Integrations_React.createElement(Panel, {
      extra: /*#__PURE__*/Integrations_React.createElement("span", {
        className: "tt-primary-color"
      }, Integrations_("Configure", "timetics")),
      header: /*#__PURE__*/Integrations_React.createElement(Card, {
        bodyStyle: {
          padding: "0"
        },
        bordered: false,
        size: "small",
        style: {
          backgroundColor: "transparent"
        }
      }, /*#__PURE__*/Integrations_React.createElement(Meta, {
        avatar: item === null || item === void 0 ? void 0 : item.icon,
        title: item === null || item === void 0 ? void 0 : item.title,
        description: item === null || item === void 0 ? void 0 : item.description
      })),
      key: item === null || item === void 0 ? void 0 : item.key
    }, item === null || item === void 0 ? void 0 : item.form);
  }), wp.hooks.applyFilters("iCalSetting"), wp.hooks.applyFilters("outlookCalSetting"));
}
/* harmony default export */ const settings_Integrations = (Integrations);
var integrationList = [{
  key: "google_calendar",
  title: Integrations_("Google Calendar/Meet", "timetics"),
  icon: /*#__PURE__*/Integrations_React.createElement(Icons/* GoogleCalendar */.eg, null),
  form: /*#__PURE__*/Integrations_React.createElement(GoogleCalendarForm, null),
  description: Integrations_("Connect Google Calendar/Meet to sync your events.", "timetics")
}];
// EXTERNAL MODULE: ./assets/src/admin/utils/dummyData.js
var dummyData = __webpack_require__(5177);
// EXTERNAL MODULE: ./assets/src/helper/availabilityModel.js
var availabilityModel = __webpack_require__(2758);
// EXTERNAL MODULE: ./assets/src/admin/components/SingleDaySchedule.js
var SingleDaySchedule = __webpack_require__(3017);
;// CONCATENATED MODULE: ./assets/src/admin/pages/settings/Availability.js
function Availability_typeof(obj) { "@babel/helpers - typeof"; return Availability_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, Availability_typeof(obj); }
function Availability_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function Availability_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? Availability_ownKeys(Object(source), !0).forEach(function (key) { Availability_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : Availability_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function Availability_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function Availability_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ Availability_regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == Availability_typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function Availability_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function Availability_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { Availability_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { Availability_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function Availability_slicedToArray(arr, i) { return Availability_arrayWithHoles(arr) || Availability_iterableToArrayLimit(arr, i) || Availability_unsupportedIterableToArray(arr, i) || Availability_nonIterableRest(); }
function Availability_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function Availability_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Availability_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Availability_arrayLikeToArray(o, minLen); }
function Availability_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function Availability_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function Availability_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var Availability_React = window.React;
var Availability_useState = Availability_React.useState;
var Availability_Button = window.antd.Button;
var Availability_ = wp.i18n.__;
function Availability() {
  var _schedules$staff;
  var _useStateValue = (0,provider/* useStateValue */.K)(),
    _useStateValue2 = Availability_slicedToArray(_useStateValue, 2),
    _useStateValue2$ = _useStateValue2[0],
    settingsReducer = _useStateValue2$.settings,
    meetingReducer = _useStateValue2$.meeting,
    dispatch = _useStateValue2[1];
  var timeCompareError = meetingReducer.timeCompareError;
  var settings = settingsReducer.settings;
  var schedules = settings.availability;
  var _useState = Availability_useState(false),
    _useState2 = Availability_slicedToArray(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];
  var saveAvailability = /*#__PURE__*/function () {
    var _ref = Availability_asyncToGenerator( /*#__PURE__*/Availability_regeneratorRuntime().mark(function _callee() {
      var convertedSchedule, res;
      return Availability_regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(timeCompareError !== null && timeCompareError !== void 0 && timeCompareError.hasError)) {
                _context.next = 2;
                break;
              }
              return _context.abrupt("return");
            case 2:
              convertedSchedule = (0,availabilityModel/* convertSchedulesForApi */.F6)(schedules["staff"]);
              setLoading(true);
              _context.next = 6;
              return (0,generalSettings/* generalSettings */.g)({
                method: "PUT",
                data: {
                  availability: convertedSchedule
                }
              });
            case 6:
              res = _context.sent;
              setLoading(false);
            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return function saveAvailability() {
      return _ref.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/Availability_React.createElement(Availability_React.Fragment, null, /*#__PURE__*/Availability_React.createElement("div", {
    className: "tt-schedules-container"
  }, /*#__PURE__*/Availability_React.createElement("div", {
    className: "tt-form-container"
  }, schedules && ((_schedules$staff = schedules["staff"]) === null || _schedules$staff === void 0 ? void 0 : _schedules$staff.map(function (schedule, schduleIndex) {
    return /*#__PURE__*/Availability_React.createElement(Availability_React.Fragment, {
      key: "schedule-item-".concat(schduleIndex)
    }, /*#__PURE__*/Availability_React.createElement(SingleDaySchedule/* default */.Z, {
      schedule: Availability_objectSpread({}, schedule)
      // key={`schdule-item-${index}`}
      ,
      scheduleIndex: schduleIndex,
      schedules: schedules["staff"],
      staffId: "staff"
    }));
  })))), /*#__PURE__*/Availability_React.createElement(Availability_Button, {
    type: "primary",
    htmlType: "button",
    size: "large",
    loading: loading,
    onClick: function onClick(e) {
      saveAvailability();
    },
    disabled: !!(timeCompareError !== null && timeCompareError !== void 0 && timeCompareError.hasError)
  }, Availability_("Save change", "timetics")));
}
/* harmony default export */ const settings_Availability = (Availability);
;// CONCATENATED MODULE: ./assets/src/admin/pages/settings/paymentsForm/Stripe.js
function Stripe_typeof(obj) { "@babel/helpers - typeof"; return Stripe_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, Stripe_typeof(obj); }
function Stripe_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ Stripe_regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == Stripe_typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function Stripe_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function Stripe_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? Stripe_ownKeys(Object(source), !0).forEach(function (key) { Stripe_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : Stripe_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function Stripe_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function Stripe_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function Stripe_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { Stripe_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { Stripe_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function Stripe_slicedToArray(arr, i) { return Stripe_arrayWithHoles(arr) || Stripe_iterableToArrayLimit(arr, i) || Stripe_unsupportedIterableToArray(arr, i) || Stripe_nonIterableRest(); }
function Stripe_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function Stripe_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Stripe_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Stripe_arrayLikeToArray(o, minLen); }
function Stripe_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function Stripe_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function Stripe_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Stripe_React = window.React;
var Stripe_window$antd = window.antd,
  Stripe_Button = Stripe_window$antd.Button,
  Stripe_Form = Stripe_window$antd.Form,
  Stripe_Typography = Stripe_window$antd.Typography;
var Stripe_Link = Stripe_Typography.Link;
var Stripe_ = wp.i18n.__;
var Stripe_window$React = window.React,
  Stripe_useState = Stripe_window$React.useState,
  Stripe_useEffect = Stripe_window$React.useEffect;



function Stripe() {
  var _useStateValue = (0,provider/* useStateValue */.K)(),
    _useStateValue2 = Stripe_slicedToArray(_useStateValue, 2),
    settingsReducer = _useStateValue2[0].settings,
    dispatch = _useStateValue2[1];
  var settings = settingsReducer.settings;
  var _useState = Stripe_useState(false),
    _useState2 = Stripe_slicedToArray(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];
  var _Form$useForm = Stripe_Form.useForm(),
    _Form$useForm2 = Stripe_slicedToArray(_Form$useForm, 1),
    form = _Form$useForm2[0];

  /**
   * On finish method that can handle staff create
   * @param {Object} values
   */
  var onFinish = /*#__PURE__*/function () {
    var _ref = Stripe_asyncToGenerator( /*#__PURE__*/Stripe_regeneratorRuntime().mark(function _callee(values) {
      var res;
      return Stripe_regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setLoading(true);
              _context.next = 3;
              return (0,generalSettings/* generalSettings */.g)({
                method: "PUT",
                data: Stripe_objectSpread({}, values)
              });
            case 3:
              res = _context.sent;
              setLoading(false);
            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return function onFinish(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  /**
   * On finish faild method that can handle staff create faild
   * @param {Object} values
   */
  var onFinishFailed = function onFinishFailed(errorInfo) {
    message.error(errorInfo);
  };
  return /*#__PURE__*/Stripe_React.createElement(Stripe_React.Fragment, null, /*#__PURE__*/Stripe_React.createElement(Stripe_Form, {
    form: form,
    name: "payment_stripe_form",
    layout: "vertical",
    onFinish: onFinish,
    onFinishFailed: onFinishFailed,
    initialValues: settings
  }, /*#__PURE__*/Stripe_React.createElement("p", null, Stripe_(" Connect or create a Stripe account to accept payments  directly onsite, including Payment Request buttons (such as Apple Pay and Google Pay), iDEAL, SEPA, Sofort, and more international payment methods.", "timetics"), /*#__PURE__*/Stripe_React.createElement(Stripe_Link, {
    target: "_blank",
    type: "link",
    href: "https://dashboard.stripe.com/account/webhooks"
  }, Stripe_("Stripe account settings", "timetics"))), /*#__PURE__*/Stripe_React.createElement(TextInput/* default */.Z, {
    label: Stripe_(" Publishable key", "timetics"),
    name: "stripe_pub_key",
    type: "text",
    size: "middle",
    placeholder: Stripe_("Enter  publishable key", "timetics"),
    tooltip: Stripe_('Only values starting with "pk__" will be saved.', "timetics")
  }), /*#__PURE__*/Stripe_React.createElement(TextInput/* default */.Z, {
    label: Stripe_("Secret key", "timetics"),
    name: "stripe_secret_key",
    type: "text",
    size: "middle",
    tooltip: Stripe_('Only values starting with "sk__" or "rk__" will be saved.', "timetics"),
    placeholder: Stripe_("Enter  secret key", "timetics")
  }), /*#__PURE__*/Stripe_React.createElement(Stripe_Button, {
    type: "primary",
    htmlType: "submit",
    size: "large",
    loading: loading
  }, Stripe_("Save", "timetics"))));
}
;// CONCATENATED MODULE: ./assets/src/admin/pages/settings/paymentsForm/Local.js
var _window, _wp, _window2;
function Local_slicedToArray(arr, i) { return Local_arrayWithHoles(arr) || Local_iterableToArrayLimit(arr, i) || Local_unsupportedIterableToArray(arr, i) || Local_nonIterableRest(); }
function Local_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function Local_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Local_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Local_arrayLikeToArray(o, minLen); }
function Local_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function Local_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function Local_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Local_window$React = (_window = window) === null || _window === void 0 ? void 0 : _window.React,
  Local_useState = Local_window$React.useState;


var _wp$i18n = (_wp = wp) === null || _wp === void 0 ? void 0 : _wp.i18n,
  Local_ = _wp$i18n.__;
var Local_window$antd = (_window2 = window) === null || _window2 === void 0 ? void 0 : _window2.antd,
  Local_Switch = Local_window$antd.Switch,
  Local_Space = Local_window$antd.Space;
function Local(_ref) {
  var onLocalPaymentStatusChange = _ref.onLocalPaymentStatusChange;
  var _useStateValue = (0,provider/* useStateValue */.K)(),
    _useStateValue2 = Local_slicedToArray(_useStateValue, 2),
    settingsReducer = _useStateValue2[0].settings,
    dispatch = _useStateValue2[1];
  var _useState = Local_useState(false),
    _useState2 = Local_slicedToArray(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];
  var settings = settingsReducer.settings;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Local_Space, {
    direction: "horizontal"
  }, /*#__PURE__*/React.createElement(Local_Switch, {
    checked: !!settings["local_pay_status"],
    onChange: function onChange(checked) {
      onLocalPaymentStatusChange(checked);
    },
    loading: loading
  })));
}
/* harmony default export */ const paymentsForm_Local = (Local);
;// CONCATENATED MODULE: ./assets/src/admin/pages/settings/Payments.js
function Payments_typeof(obj) { "@babel/helpers - typeof"; return Payments_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, Payments_typeof(obj); }
function Payments_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ Payments_regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == Payments_typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function Payments_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function Payments_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { Payments_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { Payments_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function Payments_slicedToArray(arr, i) { return Payments_arrayWithHoles(arr) || Payments_iterableToArrayLimit(arr, i) || Payments_unsupportedIterableToArray(arr, i) || Payments_nonIterableRest(); }
function Payments_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function Payments_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Payments_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Payments_arrayLikeToArray(o, minLen); }
function Payments_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function Payments_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function Payments_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Payments_useState = window.React.useState;



var Payments_window$antd = window.antd,
  Payments_Collapse = Payments_window$antd.Collapse,
  Payments_Card = Payments_window$antd.Card,
  Payments_Avatar = Payments_window$antd.Avatar,
  Payments_Space = Payments_window$antd.Space,
  Payments_Button = Payments_window$antd.Button,
  Payments_Switch = Payments_window$antd.Switch;
var Payments_Meta = Payments_Card.Meta;
var Payments_Panel = Payments_Collapse.Panel;
var Payments_ = wp.i18n.__;


function Payments() {
  var _useStateValue = (0,provider/* useStateValue */.K)(),
    _useStateValue2 = Payments_slicedToArray(_useStateValue, 2),
    settingsReducer = _useStateValue2[0].settings,
    dispatch = _useStateValue2[1];
  var _useState = Payments_useState(false),
    _useState2 = Payments_slicedToArray(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];
  var settings = settingsReducer.settings;
  var stripePaymentStatusChange = /*#__PURE__*/function () {
    var _ref = Payments_asyncToGenerator( /*#__PURE__*/Payments_regeneratorRuntime().mark(function _callee(checked) {
      var _res$data;
      var res;
      return Payments_regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setLoading(true);
              _context.next = 3;
              return (0,generalSettings/* generalSettings */.g)({
                method: "PUT",
                data: {
                  stripe_status: checked
                }
              });
            case 3:
              res = _context.sent;
              dispatch({
                type: "SET_SETTINGS",
                payload: res === null || res === void 0 ? void 0 : (_res$data = res.data) === null || _res$data === void 0 ? void 0 : _res$data.data
              });
              setLoading(false);
            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return function stripePaymentStatusChange(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  var onLocalPaymentStatusChange = /*#__PURE__*/function () {
    var _ref2 = Payments_asyncToGenerator( /*#__PURE__*/Payments_regeneratorRuntime().mark(function _callee2(checked) {
      var _res$data2;
      var res;
      return Payments_regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              setLoading(true);
              _context2.next = 3;
              return (0,generalSettings/* generalSettings */.g)({
                method: "PUT",
                data: {
                  local_pay_status: checked
                }
              });
            case 3:
              res = _context2.sent;
              dispatch({
                type: "SET_SETTINGS",
                payload: res === null || res === void 0 ? void 0 : (_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.data
              });
              setLoading(false);
            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return function onLocalPaymentStatusChange(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/React.createElement(Payments_Collapse, {
    className: "tt-payment-settings",
    bordered: true,
    ghost: true,
    expandIconPosition: "end",
    defaultActiveKey: !!settings["stripe_status"] ? 1 : null,
    collapsible: "header",
    expandIcon: function expandIcon(_ref3) {
      var isActive = _ref3.isActive;
      return /*#__PURE__*/React.createElement(Payments_Switch, {
        onClick: function onClick() {
          stripePaymentStatusChange(!settings["stripe_status"]);
        },
        checked: settings["stripe_status"]
      });
    }
  }, /*#__PURE__*/React.createElement(Payments_Panel, {
    key: "1",
    header: /*#__PURE__*/React.createElement(Payments_Card, {
      bodyStyle: {
        padding: "0"
      },
      bordered: false,
      onClick: function onClick(e) {
        return stripePaymentStatusChange(!settings["stripe_status"]);
      },
      size: "small",
      style: {
        backgroundColor: "transparent"
      }
    }, /*#__PURE__*/React.createElement(Payments_Meta, {
      avatar: /*#__PURE__*/React.createElement(Icons/* StripeIcon */.Lx, null),
      title: Payments_("Stripe Payment", "timetics"),
      description: Payments_("Connect your stripe payments.", "timetics")
    }))
  }, /*#__PURE__*/React.createElement(Stripe, null)), /*#__PURE__*/React.createElement(Payments_Panel, {
    className: "tt-local-payment-panel",
    extra: /*#__PURE__*/React.createElement(paymentsForm_Local, {
      onLocalPaymentStatusChange: onLocalPaymentStatusChange
    }),
    showArrow: false,
    key: "2",
    header: /*#__PURE__*/React.createElement(Payments_Card, {
      bodyStyle: {
        padding: "0"
      },
      bordered: false,
      size: "small",
      style: {
        backgroundColor: "transparent"
      },
      onClick: function onClick(e) {
        return onLocalPaymentStatusChange(!settings["local_pay_status"]);
      }
    }, /*#__PURE__*/React.createElement(Payments_Meta, {
      avatar: /*#__PURE__*/React.createElement(Icons/* DocIcon */.V7, null),
      title: Payments_("Local Payment", "timetics"),
      description: Payments_("Configure this section to pay locally.", "timetics")
    }))
  }));
}
/* harmony default export */ const settings_Payments = (Payments);
// EXTERNAL MODULE: external "React"
var external_React_ = __webpack_require__(7363);
// EXTERNAL MODULE: ./node_modules/react-quill/lib/index.js
var lib = __webpack_require__(1167);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);
// EXTERNAL MODULE: ./node_modules/react-quill/dist/quill.snow.css
var quill_snow = __webpack_require__(5097);
// EXTERNAL MODULE: ./assets/src/admin/actionCreators/common.js
var common = __webpack_require__(7157);
;// CONCATENATED MODULE: ./assets/src/admin/components/notification/EmailCustomizeModal.js
function EmailCustomizeModal_typeof(obj) { "@babel/helpers - typeof"; return EmailCustomizeModal_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, EmailCustomizeModal_typeof(obj); }
function EmailCustomizeModal_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ EmailCustomizeModal_regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == EmailCustomizeModal_typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function EmailCustomizeModal_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function EmailCustomizeModal_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? EmailCustomizeModal_ownKeys(Object(source), !0).forEach(function (key) { EmailCustomizeModal_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : EmailCustomizeModal_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function EmailCustomizeModal_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function EmailCustomizeModal_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function EmailCustomizeModal_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { EmailCustomizeModal_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { EmailCustomizeModal_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function EmailCustomizeModal_slicedToArray(arr, i) { return EmailCustomizeModal_arrayWithHoles(arr) || EmailCustomizeModal_iterableToArrayLimit(arr, i) || EmailCustomizeModal_unsupportedIterableToArray(arr, i) || EmailCustomizeModal_nonIterableRest(); }
function EmailCustomizeModal_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function EmailCustomizeModal_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return EmailCustomizeModal_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return EmailCustomizeModal_arrayLikeToArray(o, minLen); }
function EmailCustomizeModal_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function EmailCustomizeModal_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function EmailCustomizeModal_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var EmailCustomizeModal_useState = window.React.useState;
var EmailCustomizeModal_window$antd = window.antd,
  Modal = EmailCustomizeModal_window$antd.Modal,
  EmailCustomizeModal_Form = EmailCustomizeModal_window$antd.Form,
  EmailCustomizeModal_Input = EmailCustomizeModal_window$antd.Input,
  EmailCustomizeModal_Button = EmailCustomizeModal_window$antd.Button,
  EmailCustomizeModal_Space = EmailCustomizeModal_window$antd.Space,
  EmailCustomizeModal_Row = EmailCustomizeModal_window$antd.Row,
  EmailCustomizeModal_Typography = EmailCustomizeModal_window$antd.Typography;
var EmailCustomizeModal_Title = EmailCustomizeModal_Typography.Title;
var EmailCustomizeModal_ = wp.i18n.__;










function EmailCustomizeModal(_ref) {
  var open = _ref.open,
    dispatch = _ref.dispatch,
    title = _ref.title;
  var _useStateValue = (0,provider/* useStateValue */.K)(),
    _useStateValue2 = EmailCustomizeModal_slicedToArray(_useStateValue, 1),
    _useStateValue2$ = _useStateValue2[0],
    meetingReducer = _useStateValue2$.meeting,
    settingsReducer = _useStateValue2$.settings;
  var _Form$useForm = EmailCustomizeModal_Form.useForm(),
    _Form$useForm2 = EmailCustomizeModal_slicedToArray(_Form$useForm, 1),
    form = _Form$useForm2[0];
  var reactQuillRef = (0,external_React_.useRef)();
  var _useState = EmailCustomizeModal_useState(""),
    _useState2 = EmailCustomizeModal_slicedToArray(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  var notificationDataPrefix = settingsReducer.notificationDataPrefix,
    settings = settingsReducer.settings;
  var onSaveEmailData = /*#__PURE__*/function () {
    var _ref2 = EmailCustomizeModal_asyncToGenerator( /*#__PURE__*/EmailCustomizeModal_regeneratorRuntime().mark(function _callee(values) {
      var res;
      return EmailCustomizeModal_regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0,generalSettings/* generalSettings */.g)({
                method: "PUT",
                data: EmailCustomizeModal_objectSpread({}, values)
              });
            case 2:
              res = _context.sent;
              dispatch({
                type: actions/* actions.SET_EMAIL_CUSTOMIZE_DATA */.N.SET_EMAIL_CUSTOMIZE_DATA,
                payload: {
                  customizeEmail: false
                }
              });
            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return function onSaveEmailData(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  var onReset = function onReset() {
    form.resetFields();
    dispatch({
      type: actions/* actions.SET_EMAIL_CUSTOMIZE_DATA */.N.SET_EMAIL_CUSTOMIZE_DATA,
      payload: {
        customizeEmail: false
      }
    });
  };
  var handleEmailPlaceholder = function handleEmailPlaceholder(_ref3) {
    var _reactQuillRef$curren2;
    var target = _ref3.target;
    var editor = reactQuillRef.current.getEditor();
    var _reactQuillRef$curren = reactQuillRef === null || reactQuillRef === void 0 ? void 0 : (_reactQuillRef$curren2 = reactQuillRef.current) === null || _reactQuillRef$curren2 === void 0 ? void 0 : _reactQuillRef$curren2.unprivilegedEditor.getSelection(true),
      placeholderInsertIndex = _reactQuillRef$curren.index;
    editor === null || editor === void 0 ? void 0 : editor.insertText(placeholderInsertIndex, target.value);
  };
  return /*#__PURE__*/React.createElement(Modal, {
    className: "tt-booking-modal",
    centered: true,
    style: {
      top: 40
    },
    open: open,
    onOk: function onOk() {
      return dispatch({
        type: actions/* actions.SET_EMAIL_CUSTOMIZE_DATA */.N.SET_EMAIL_CUSTOMIZE_DATA,
        payload: {
          customizeEmail: false
        }
      });
    },
    onCancel: function onCancel() {
      return dispatch({
        type: actions/* actions.SET_EMAIL_CUSTOMIZE_DATA */.N.SET_EMAIL_CUSTOMIZE_DATA,
        payload: {
          customizeEmail: false
        }
      });
    },
    width: 670,
    okText: "Save",
    cancelText: "Cancel",
    closeIcon: /*#__PURE__*/React.createElement(Icons/* CloseFillIcon */.Ys, null),
    footer: null
  }, /*#__PURE__*/React.createElement("div", {
    className: "tt-booking-modal-wrapper"
  }, /*#__PURE__*/React.createElement(EmailCustomizeModal_Title, {
    level: 3,
    className: "tt-mt-0 tt-mb-15"
  }, EmailCustomizeModal_(title, "timetics")), /*#__PURE__*/React.createElement("div", {
    className: ""
  }, /*#__PURE__*/React.createElement(EmailCustomizeModal_Form, {
    layout: "vertical",
    form: form,
    onFinish: onSaveEmailData,
    initialValues: settings
  }, /*#__PURE__*/React.createElement(TextInput/* default */.Z, {
    label: EmailCustomizeModal_("FROM", "timetics"),
    name: "".concat(notificationDataPrefix, "email_from"),
    required: true,
    rules: [{
      required: true,
      type: "email",
      message: EmailCustomizeModal_("Please enter valid E-mail", "timetics")
    }],
    type: "email",
    size: "small",
    placeholder: EmailCustomizeModal_("Select email", "timetics")
  }), /*#__PURE__*/React.createElement(TextInput/* default */.Z, {
    label: EmailCustomizeModal_("EMAIL SUJECT", "timetics"),
    name: "".concat(notificationDataPrefix, "email_title"),
    required: true,
    rules: [{
      required: true,
      message: EmailCustomizeModal_("Please enter E-mail subject!", "timetics")
    }],
    type: "text",
    size: "small",
    placeholder: EmailCustomizeModal_("Your meeting with {Meeting_title}", "timetics")
  }), /*#__PURE__*/React.createElement(EmailCustomizeModal_Form.Item, {
    className: "timetics-input",
    label: EmailCustomizeModal_("EMAIL BODY"),
    labelCol: 24,
    wrapperCol: 24,
    name: "".concat(notificationDataPrefix, "email_body")
  }, /*#__PURE__*/React.createElement((lib_default()), {
    theme: "snow",
    value: value,
    className: "tt-mb-20",
    onChange: setValue,
    modules: modules,
    ref: reactQuillRef
  })), /*#__PURE__*/React.createElement(EmailCustomizeModal_Space, {
    wrap: true
  }, emailPreset === null || emailPreset === void 0 ? void 0 : emailPreset.map(function (item, ind) {
    return /*#__PURE__*/React.createElement(EmailCustomizeModal_Input, {
      readOnly: true,
      key: ind,
      value: item,
      onClick: handleEmailPlaceholder
    });
  })), /*#__PURE__*/React.createElement(EmailCustomizeModal_Row, {
    justify: "end"
  }, /*#__PURE__*/React.createElement(EmailCustomizeModal_Form.Item, {
    className: "tt-mb-0"
  }, /*#__PURE__*/React.createElement(EmailCustomizeModal_Space, {
    className: "tt-mt-10"
  }, /*#__PURE__*/React.createElement(EmailCustomizeModal_Button, {
    type: "default",
    htmlType: "button",
    onClick: onReset
  }, EmailCustomizeModal_("Cancel")), /*#__PURE__*/React.createElement(EmailCustomizeModal_Button, {
    type: "primary",
    htmlType: "submit"
  }, EmailCustomizeModal_("Save", "timetics")))))))));
}
/* harmony default export */ const notification_EmailCustomizeModal = (EmailCustomizeModal);

// uses for ReactQuill editor
var modules = {
  toolbar: [[{
    header: [1, 2, false]
  }, {
    font: []
  }], ["bold", "italic", "underline", "strike", "blockquote"], [{
    list: "ordered"
  }, {
    list: "bullet"
  }, {
    indent: "-1"
  }, {
    indent: "+1"
  }], ["link", "image"], ["clean"]]
};
var emailPreset = ["{%meeting_title%}", "{%meeting_date%}", "{%meeting_time%}", "{%meeting_location%}", "{%meeting_duration%}", "{%host_name%}", "{%host_email%}", "{%customer_name%}", "{%customer_email%}"];
;// CONCATENATED MODULE: ./assets/src/admin/components/notification/NotificationOption.js
function NotificationOption_typeof(obj) { "@babel/helpers - typeof"; return NotificationOption_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, NotificationOption_typeof(obj); }
function NotificationOption_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ NotificationOption_regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == NotificationOption_typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function NotificationOption_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function NotificationOption_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function NotificationOption_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { NotificationOption_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { NotificationOption_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function NotificationOption_slicedToArray(arr, i) { return NotificationOption_arrayWithHoles(arr) || NotificationOption_iterableToArrayLimit(arr, i) || NotificationOption_unsupportedIterableToArray(arr, i) || NotificationOption_nonIterableRest(); }
function NotificationOption_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function NotificationOption_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return NotificationOption_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return NotificationOption_arrayLikeToArray(o, minLen); }
function NotificationOption_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function NotificationOption_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function NotificationOption_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var NotificationOption_window$antd = window.antd,
  NotificationOption_Collapse = NotificationOption_window$antd.Collapse,
  NotificationOption_Space = NotificationOption_window$antd.Space,
  NotificationOption_Switch = NotificationOption_window$antd.Switch,
  NotificationOption_Button = NotificationOption_window$antd.Button,
  Divider = NotificationOption_window$antd.Divider,
  NotificationOption_Row = NotificationOption_window$antd.Row,
  NotificationOption_Col = NotificationOption_window$antd.Col,
  NotificationOption_Typography = NotificationOption_window$antd.Typography;
var NotificationOption_Title = NotificationOption_Typography.Title;
var NotificationOption_Panel = NotificationOption_Collapse.Panel;
var NotificationOption_ = wp.i18n.__;

function NotificationOption(_ref) {
  var i = _ref.i,
    activeKey = _ref.activeKey,
    setActiveKey = _ref.setActiveKey,
    panelTitle = _ref.panelTitle,
    customerModalTitle = _ref.customerModalTitle,
    customerActionDescription = _ref.customerActionDescription,
    hostModalTitle = _ref.hostModalTitle,
    hostActionDescription = _ref.hostActionDescription,
    customerNotification = _ref.customerNotification,
    hostNotification = _ref.hostNotification,
    children = _ref.children,
    notificationToCustomer = _ref.notificationToCustomer,
    notificationToHost = _ref.notificationToHost,
    emailDataPrefix = _ref.emailDataPrefix;
  var _useStateValue = (0,provider/* useStateValue */.K)(),
    _useStateValue2 = NotificationOption_slicedToArray(_useStateValue, 2),
    _useStateValue2$ = _useStateValue2[0],
    meetingReducer = _useStateValue2$.meeting,
    settingsReducer = _useStateValue2$.settings,
    dispatch = _useStateValue2[1];
  var meeting = meetingReducer.meeting;
  var settings = settingsReducer.settings;
  var onNotificationStatusChange = /*#__PURE__*/function () {
    var _ref2 = NotificationOption_asyncToGenerator( /*#__PURE__*/NotificationOption_regeneratorRuntime().mark(function _callee(checked, notificationStatusKey) {
      var _res$data;
      var res;
      return NotificationOption_regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0,generalSettings/* generalSettings */.g)({
                method: "PUT",
                data: NotificationOption_defineProperty({}, notificationStatusKey, checked)
              });
            case 2:
              res = _context.sent;
              dispatch({
                type: actions/* actions.SET_SETTINGS */.N.SET_SETTINGS,
                payload: res === null || res === void 0 ? void 0 : (_res$data = res.data) === null || _res$data === void 0 ? void 0 : _res$data.data
              });
            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return function onNotificationStatusChange(_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/React.createElement(NotificationOption_Space, {
    direction: "vertical",
    size: "middle",
    style: {
      display: "flex"
    },
    className: "tt-mb-20"
  }, /*#__PURE__*/React.createElement(NotificationOption_Collapse, {
    accordion: true,
    expandIconPosition: "end",
    activeKey: activeKey,
    onChange: function onChange(e) {
      setActiveKey(e);
    }
  }, /*#__PURE__*/React.createElement(NotificationOption_Panel, {
    className: "tt-notification-content",
    header: panelTitle,
    key: i
  }, children ? children : null, /*#__PURE__*/React.createElement(NotificationOption_Row, null, /*#__PURE__*/React.createElement(NotificationOption_Col, {
    span: 18
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(NotificationOption_Title, {
    level: 5,
    className: "tt-margin-0"
  }, NotificationOption_(" Notification to Customers/Attendees/Clients", "timetics")), /*#__PURE__*/React.createElement("p", {
    className: "tt-margin-0"
  }, customerActionDescription))), /*#__PURE__*/React.createElement(NotificationOption_Col, {
    span: 6
  }, /*#__PURE__*/React.createElement("div", {
    className: "tt-text-right"
  }, /*#__PURE__*/React.createElement(NotificationOption_Switch, {
    checked: !!settings[notificationToCustomer],
    onChange: function onChange(checked) {
      onNotificationStatusChange(checked, notificationToCustomer);
    }
  }), /*#__PURE__*/React.createElement(NotificationOption_Button, {
    type: "link",
    className: "tt-link-btn tt-mt-10",
    onClick: function onClick(e) {
      dispatch({
        type: actions/* actions.SET_EMAIL_CUSTOMIZE_DATA */.N.SET_EMAIL_CUSTOMIZE_DATA,
        payload: {
          customizeEmail: true,
          modalTitle: customerModalTitle,
          notificationDataPrefix: "".concat(emailDataPrefix, "customer_")
        }
      });
    }
  }, NotificationOption_("Configure Email", "timetics"))))), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(NotificationOption_Row, null, /*#__PURE__*/React.createElement(NotificationOption_Col, {
    span: 18
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(NotificationOption_Title, {
    level: 5,
    className: "tt-margin-0"
  }, NotificationOption_("Notification to Host", "timetics")), /*#__PURE__*/React.createElement("p", {
    className: "tt-margin-0"
  }, hostActionDescription))), /*#__PURE__*/React.createElement(NotificationOption_Col, {
    span: 6
  }, /*#__PURE__*/React.createElement("div", {
    className: "tt-text-right"
  }, /*#__PURE__*/React.createElement(NotificationOption_Switch, {
    checked: !!settings[notificationToHost],
    onChange: function onChange(checked) {
      onNotificationStatusChange(checked, notificationToHost);
    }
  }), /*#__PURE__*/React.createElement(NotificationOption_Button, {
    type: "link",
    className: "tt-link-btn tt-mt-10",
    onClick: function onClick(e) {
      dispatch({
        type: actions/* actions.SET_EMAIL_CUSTOMIZE_DATA */.N.SET_EMAIL_CUSTOMIZE_DATA,
        payload: {
          customizeEmail: true,
          modalTitle: hostModalTitle,
          notificationDataPrefix: "".concat(emailDataPrefix, "host_")
        }
      });
    }
  }, NotificationOption_("Configure Email", "timetics"))))))));
}
/* harmony default export */ const notification_NotificationOption = (NotificationOption);
;// CONCATENATED MODULE: ./assets/src/admin/components/notification/ReminderTime.js
function ReminderTime_typeof(obj) { "@babel/helpers - typeof"; return ReminderTime_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, ReminderTime_typeof(obj); }
function ReminderTime_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ ReminderTime_regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == ReminderTime_typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function ReminderTime_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function ReminderTime_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ReminderTime_ownKeys(Object(source), !0).forEach(function (key) { ReminderTime_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ReminderTime_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function ReminderTime_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function ReminderTime_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function ReminderTime_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { ReminderTime_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { ReminderTime_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ReminderTime_slicedToArray(arr, i) { return ReminderTime_arrayWithHoles(arr) || ReminderTime_iterableToArrayLimit(arr, i) || ReminderTime_unsupportedIterableToArray(arr, i) || ReminderTime_nonIterableRest(); }
function ReminderTime_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function ReminderTime_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return ReminderTime_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ReminderTime_arrayLikeToArray(o, minLen); }
function ReminderTime_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function ReminderTime_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function ReminderTime_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var ReminderTime_ = wp.i18n.__;
var ReminderTime_window$antd = window.antd,
  ReminderTime_Col = ReminderTime_window$antd.Col,
  ReminderTime_Row = ReminderTime_window$antd.Row,
  ReminderTime_Typography = ReminderTime_window$antd.Typography,
  ReminderTime_Form = ReminderTime_window$antd.Form,
  ReminderTime_Space = ReminderTime_window$antd.Space,
  ReminderTime_Button = ReminderTime_window$antd.Button,
  ReminderTime_Divider = ReminderTime_window$antd.Divider;
var ReminderTime_Title = ReminderTime_Typography.Title;
var ReminderTime_window$React = window.React,
  ReminderTime_useState = ReminderTime_window$React.useState,
  ReminderTime_useEffect = ReminderTime_window$React.useEffect;


function ReminderTime() {
  var _Form$useForm = ReminderTime_Form.useForm(),
    _Form$useForm2 = ReminderTime_slicedToArray(_Form$useForm, 1),
    form = _Form$useForm2[0];
  var _useStateValue = (0,provider/* useStateValue */.K)(),
    _useStateValue2 = ReminderTime_slicedToArray(_useStateValue, 1),
    settingsReducer = _useStateValue2[0].settings;
  var settings = settingsReducer.settings;
  /**
   * On finish method that can handle staff create
   * @param {Object} values
   */
  var onFinish = /*#__PURE__*/function () {
    var _ref = ReminderTime_asyncToGenerator( /*#__PURE__*/ReminderTime_regeneratorRuntime().mark(function _callee(values) {
      var res;
      return ReminderTime_regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0,generalSettings/* generalSettings */.g)({
                method: "PUT",
                data: ReminderTime_objectSpread({}, values)
              });
            case 2:
              res = _context.sent;
            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return function onFinish(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  /**
   * On finish faild method that can handle staff create faild
   * @param {Object} values
   */
  var onFinishFailed = function onFinishFailed(errorInfo) {
    message.error(errorInfo);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ReminderTime_Row, null, /*#__PURE__*/React.createElement(ReminderTime_Col, {
    span: 24
  }, /*#__PURE__*/React.createElement(ReminderTime_Title, {
    level: 5,
    className: "tt-mb-10"
  }, ReminderTime_("Send a Reminder Email Before", "timetics"))), /*#__PURE__*/React.createElement(ReminderTime_Col, {
    span: 24
  }, /*#__PURE__*/React.createElement(ReminderTime_Form, {
    name: "duration_form",
    layout: "vertical",
    autoComplete: "off",
    onFinish: onFinish,
    form: form,
    onFinishFailed: onFinishFailed,
    initialValues: ReminderTime_objectSpread(ReminderTime_objectSpread({}, settings), {}, {
      remainder_time: settings !== null && settings !== void 0 && settings.remainder_time ? settings === null || settings === void 0 ? void 0 : settings.remainder_time : [{
        "duration-time": 15,
        custom_duration_type: "min"
      }]
    })
  }, /*#__PURE__*/React.createElement(ReminderTime_Form.List, {
    name: "remainder_time"
  }, function (fields, _ref2) {
    var add = _ref2.add,
      remove = _ref2.remove;
    return /*#__PURE__*/React.createElement("div", null, fields.map(function (field, index) {
      return /*#__PURE__*/React.createElement(ReminderTime_Space, {
        key: "duration-time-".concat(index)
      }, /*#__PURE__*/React.createElement(TextInput/* default */.Z, {
        key: "duration-time_".concat(index),
        name: [index, "duration-time"],
        type: "number",
        size: "small",
        min: 1,
        label: ReminderTime_("Set custom time", "timetics")
      }), /*#__PURE__*/React.createElement(SelectInput/* default */.Z, {
        label: ReminderTime_("Day/Hour/Minute", "timetics"),
        name: [index, "custom_duration_type"],
        key: "custom_duration_type",
        data: reminderTime
      }), fields.length > 1 ? /*#__PURE__*/React.createElement(ReminderTime_Button, {
        className: "dynamic-delete-button",
        type: "link",
        onClick: function onClick() {
          return remove(field.name);
        },
        icon: /*#__PURE__*/React.createElement(Icons/* CloseFillIcon */.Ys, null)
      }) : null);
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ReminderTime_Space, null, /*#__PURE__*/React.createElement(ReminderTime_Button, {
      onClick: function onClick() {
        return add();
      }
    }, ReminderTime_("add", "timetics")), /*#__PURE__*/React.createElement(ReminderTime_Button, {
      type: "primary",
      htmlType: "submit"
    }, ReminderTime_("Save")))));
  })))), /*#__PURE__*/React.createElement(ReminderTime_Divider, {
    orientation: "left",
    plain: true
  }));
}
/* harmony default export */ const notification_ReminderTime = (ReminderTime);
var reminderTime = [{
  id: 1,
  label: "day(s) before",
  value: "day"
}, {
  id: 2,
  label: "hour(s) before",
  value: "hour"
}, {
  id: 3,
  label: "min(s) before",
  value: "min"
}];
;// CONCATENATED MODULE: ./assets/src/admin/pages/settings/Notification.js
function Notification_slicedToArray(arr, i) { return Notification_arrayWithHoles(arr) || Notification_iterableToArrayLimit(arr, i) || Notification_unsupportedIterableToArray(arr, i) || Notification_nonIterableRest(); }
function Notification_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function Notification_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Notification_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Notification_arrayLikeToArray(o, minLen); }
function Notification_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function Notification_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function Notification_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Notification_window$antd = window.antd,
  Notification_Button = Notification_window$antd.Button,
  Notification_Row = Notification_window$antd.Row,
  Notification_Col = Notification_window$antd.Col;
var Notification_useState = window.React.useState;




var Notification_ = wp.i18n.__;
function Notification() {
  var _useState = Notification_useState(0),
    _useState2 = Notification_slicedToArray(_useState, 2),
    activeKey = _useState2[0],
    setActiveKey = _useState2[1];
  var _useStateValue = (0,provider/* useStateValue */.K)(),
    _useStateValue2 = Notification_slicedToArray(_useStateValue, 2),
    _useStateValue2$ = _useStateValue2[0],
    meetingReducer = _useStateValue2$.meeting,
    settingsReducer = _useStateValue2$.settings,
    dispatch = _useStateValue2[1];
  var customizeEmail = settingsReducer.customizeEmail,
    modalTitle = settingsReducer.modalTitle,
    settings = settingsReducer.settings;
  var options = getNotificationOptions();
  return /*#__PURE__*/React.createElement(React.Fragment, null, options === null || options === void 0 ? void 0 : options.map(function (_ref, index) {
    var panelTitle = _ref.panelTitle,
      customerModalTitle = _ref.customerModalTitle,
      customerActionDescription = _ref.customerActionDescription,
      customerNotification = _ref.customerNotification,
      hostActionDescription = _ref.hostActionDescription,
      hostNotification = _ref.hostNotification,
      notificationToCustomer = _ref.notificationToCustomer,
      notificationToHost = _ref.notificationToHost,
      children = _ref.children,
      emailDataPrefix = _ref.emailDataPrefix,
      hostModalTitle = _ref.hostModalTitle;
    return /*#__PURE__*/React.createElement(notification_NotificationOption, {
      key: "".concat(index, "-notification-item"),
      i: index,
      activeKey: activeKey,
      setActiveKey: setActiveKey,
      panelTitle: panelTitle,
      customerModalTitle: customerModalTitle,
      customerActionDescription: customerActionDescription,
      hostModalTitle: hostModalTitle,
      hostActionDescription: hostActionDescription,
      customerNotification: customerNotification,
      hostNotification: hostNotification,
      children: children,
      notificationToCustomer: notificationToCustomer,
      notificationToHost: notificationToHost,
      emailDataPrefix: emailDataPrefix
    });
  }), /*#__PURE__*/React.createElement(notification_EmailCustomizeModal, {
    open: customizeEmail,
    dispatch: dispatch,
    title: modalTitle
  }));
}
/* harmony default export */ const settings_Notification = (Notification);
function getNotificationOptions() {
  return [{
    panelTitle: Notification_("After Booking Confirmation", "timetics"),
    customerModalTitle: Notification_("Notification to Customer After Booking Confirmation", "timetics"),
    customerActionDescription: Notification_("Your Attendees/Customers/Clients will receive a confirmation email containing a link to create that event on their calendar", "timetics"),
    hostModalTitle: Notification_("Notification to Host After Booking Confirmation", "timetics"),
    hostActionDescription: Notification_("The Host will receive a confirmation email containing a link to create that event on their calendar", "timetics"),
    customerNotification: "booking_created_email_customer",
    hostNotification: "booking_created_email_host",
    notificationToHost: "booking_created_host",
    notificationToCustomer: "booking_created_customer",
    emailDataPrefix: "booking_created_"
  }, {
    panelTitle: Notification_("After Booking Cancellation", "timetics"),
    customerModalTitle: Notification_("Notification to Customer After Booking Canceled", "timetics"),
    customerActionDescription: Notification_("Your Attendees/Customers/Clients will receive a cancellation email", "timetics"),
    hostModalTitle: Notification_("Notification to Host After Booking Canceled", "timetics"),
    hostActionDescription: Notification_("The Host will receive a cancellation email", "timetics"),
    customerNotification: "booking_canceled_email_customer",
    hostNotification: "booking_canceled_email_host",
    notificationToHost: "booking_canceled_host",
    notificationToCustomer: "booking_canceled_customer",
    emailDataPrefix: "booking_canceled_"
  }, {
    panelTitle: Notification_("After Booking is Rescheduled", "timetics"),
    customerModalTitle: Notification_("Notification to Customer After Booking Rescheduled", "timetics"),
    customerActionDescription: Notification_("Your Attendees/Customers/Clients will receive a confirmation email containing a link to create that event on their calendar", "timetics"),
    hostModalTitle: Notification_("Notification to Host After Booking Rescheduled", "timetics"),
    hostActionDescription: Notification_("The Host will receive a confirmation email containing a link to create that event on their calendar", "timetics"),
    customerNotification: "booking_rescheduled_email_customer",
    hostNotification: "booking_rescheduled_email_host",
    notificationToHost: "booking_rescheduled_host",
    notificationToCustomer: "booking_rescheduled_customer",
    emailDataPrefix: "booking_rescheduled_"
  }, {
    panelTitle: Notification_("Reminder Before Meeting", "timetics"),
    customerModalTitle: Notification_("Notification to Customer Reminder Before Meeting", "timetics"),
    customerActionDescription: Notification_("Your Attendees/Customers/Clients will receive an Email reminding them about the meeting", "timetics"),
    hostModalTitle: Notification_("Notification to Host Reminder Before Meeting", "timetics"),
    hostActionDescription: Notification_("The Host will receive a confirmation email containing a link to create that event on their calendar.", "timetics"),
    customerNotification: "booking_created_email_customer",
    hostNotification: "booking_created_email_host",
    children: /*#__PURE__*/React.createElement(notification_ReminderTime, null),
    notificationToHost: "booking_reminder_host",
    notificationToCustomer: "booking_reminder_customer",
    emailDataPrefix: "booking_reminder_"
    // key: notifications.booking_created_email_form,
  }];
}
// EXTERNAL MODULE: ./assets/src/admin/pages/settings/hook/useSettings.js
var useSettings = __webpack_require__(4764);
;// CONCATENATED MODULE: ./assets/src/admin/pages/settings/index.js
function settings_slicedToArray(arr, i) { return settings_arrayWithHoles(arr) || settings_iterableToArrayLimit(arr, i) || settings_unsupportedIterableToArray(arr, i) || settings_nonIterableRest(); }
function settings_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function settings_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return settings_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return settings_arrayLikeToArray(o, minLen); }
function settings_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function settings_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function settings_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var settings_React = window.React;
var settings_window$antd = window.antd,
  Tabs = settings_window$antd.Tabs,
  settings_Skeleton = settings_window$antd.Skeleton;
var settings_ = wp.i18n.__;





var settings_useEffect = settings_React.useEffect,
  settings_useState = settings_React.useState;







var Settings = function Settings() {
  var _useStateValue = (0,provider/* useStateValue */.K)(),
    _useStateValue2 = settings_slicedToArray(_useStateValue, 2),
    settingsReducer = _useStateValue2[0].settings,
    dispatch = _useStateValue2[1];
  var loading = settingsReducer.loading;
  var _useSettings = (0,useSettings/* default */.Z)(),
    getSettingsData = _useSettings.getSettingsData;
  settings_useEffect(function () {
    /**
     * Hnadler to get settings data from api, and set it to the settings reducer.
     */
    getSettingsData();
    (0,common/* setState */.I)({
      dispatch: dispatch,
      name: "editAvailability",
      value: true
    });
  }, []);
  settings_useEffect(function () {
    return function () {
      (0,common/* setState */.I)({
        dispatch: dispatch,
        name: "editAvailability",
        value: false
      });
    };
  }, []);

  /**
   * Tabs data
   */
  var tabsData = [{
    label: settings_("General", "timetics"),
    key: "general",
    children: /*#__PURE__*/settings_React.createElement(settings_General, null)
  }, {
    label: settings_("Availability", "timetics"),
    key: "availability",
    children: /*#__PURE__*/settings_React.createElement(settings_Availability, null)
  }, {
    label: settings_("Integrations", "timetics"),
    key: "integrations",
    children: /*#__PURE__*/settings_React.createElement(settings_Integrations, null)
  }, {
    label: settings_("Notifications", "timetics"),
    key: "notifications",
    children: /*#__PURE__*/settings_React.createElement(settings_Notification, null)
  }, {
    label: settings_("Payment", "timetics"),
    key: "payment",
    children: /*#__PURE__*/settings_React.createElement(settings_Payments, null)
  }];
  if (loading) {
    return /*#__PURE__*/settings_React.createElement(settings_Skeleton, {
      active: true
    });
  }
  return /*#__PURE__*/settings_React.createElement(settings_React.Fragment, null, /*#__PURE__*/settings_React.createElement(MainPageHeader/* default */.Z, {
    title: settings_("Settings", "timetics")
  }), /*#__PURE__*/settings_React.createElement("div", {
    className: "tt-container-wrapper"
  }, /*#__PURE__*/settings_React.createElement("div", {
    className: "tt-form-container"
  }, /*#__PURE__*/settings_React.createElement(Tabs, {
    defaultActiveKey: "general",
    size: "large",
    className: "tt-settings-wrapper",
    items: tabsData,
    tabPosition: "top"
  }))));
};
/* harmony default export */ const settings = (Settings);

/***/ })

}]);