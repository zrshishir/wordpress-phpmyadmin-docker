"use strict";
(self["webpackChunktimetics"] = self["webpackChunktimetics"] || []).push([[377],{

/***/ 5377:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ meeting_MeetingList)
});

// EXTERNAL MODULE: ./node_modules/react-router/dist/index.js
var dist = __webpack_require__(9250);
// EXTERNAL MODULE: ./assets/src/admin/context/provider.js + 9 modules
var provider = __webpack_require__(7258);
// EXTERNAL MODULE: ./assets/src/admin/actionCreators/meeting.js
var actionCreators_meeting = __webpack_require__(629);
// EXTERNAL MODULE: ./assets/src/admin/services/meetings.js
var meetings = __webpack_require__(3538);
;// CONCATENATED MODULE: ./assets/src/common/CustomSelect.js
var _excluded = ["className", "name", "label", "required", "rules", "labelCol", "wrapperCol", "onChange", "valueField", "labelField"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var _window$antd = window.antd,
  Select = _window$antd.Select,
  Form = _window$antd.Form;
function CustomSelect(_ref) {
  var _props$data;
  var _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    name = _ref.name,
    _ref$label = _ref.label,
    label = _ref$label === void 0 ? "" : _ref$label,
    _ref$required = _ref.required,
    required = _ref$required === void 0 ? false : _ref$required,
    _ref$rules = _ref.rules,
    rules = _ref$rules === void 0 ? [] : _ref$rules,
    _ref$labelCol = _ref.labelCol,
    labelCol = _ref$labelCol === void 0 ? {} : _ref$labelCol,
    _ref$wrapperCol = _ref.wrapperCol,
    wrapperCol = _ref$wrapperCol === void 0 ? {} : _ref$wrapperCol,
    onChange = _ref.onChange,
    _ref$valueField = _ref.valueField,
    valueField = _ref$valueField === void 0 ? "value" : _ref$valueField,
    _ref$labelField = _ref.labelField,
    labelField = _ref$labelField === void 0 ? "label" : _ref$labelField,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(Form.Item, {
    className: "timetics-input ".concat(className),
    label: label,
    labelCol: labelCol,
    wrapperCol: wrapperCol,
    name: name,
    rules: rules
  }, /*#__PURE__*/React.createElement(Select, _extends({}, props, {
    onChange: onChange
  }), props === null || props === void 0 ? void 0 : (_props$data = props.data) === null || _props$data === void 0 ? void 0 : _props$data.map(function (option, i) {
    return /*#__PURE__*/React.createElement(Option, {
      key: "props.key-".concat(i),
      value: option[valueField]
    }, option[labelField]);
  })));
}
/* harmony default export */ const common_CustomSelect = (CustomSelect);
// EXTERNAL MODULE: ./assets/src/admin/actionCreators/common.js
var common = __webpack_require__(7157);
// EXTERNAL MODULE: ./assets/src/admin/actionCreators/actions.js
var actionCreators_actions = __webpack_require__(3632);
;// CONCATENATED MODULE: ./assets/src/admin/pages/meeting/Filters.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Filters_React = window.React;
var useEffect = Filters_React.useEffect,
  useState = Filters_React.useState;
var Filters_window$antd = window.antd,
  Filters_Form = Filters_window$antd.Form,
  Row = Filters_window$antd.Row,
  Col = Filters_window$antd.Col,
  Button = Filters_window$antd.Button,
  Typography = Filters_window$antd.Typography;






var Title = Typography.Title;
var __ = wp.i18n.__;
function Filters() {
  var _useStateValue = (0,provider/* useStateValue */.K)(),
    _useStateValue2 = _slicedToArray(_useStateValue, 2),
    staff = _useStateValue2[0].staff,
    dispatch = _useStateValue2[1];
  var _staff$staffs = staff.staffs,
    staffs = _staff$staffs === void 0 ? [] : _staff$staffs;
  var _Form$useForm = Filters_Form.useForm(),
    _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
    form = _Form$useForm2[0];
  var onFilter = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(values) {
      var _res$data, _res$data$data, _res$data2, _res$data2$data;
      var res, items;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(!(values !== null && values !== void 0 && values.staff_id) && !(values !== null && values !== void 0 && values.visibility))) {
                _context.next = 2;
                break;
              }
              return _context.abrupt("return", false);
            case 2:
              (0,common/* setState */.I)({
                dispatch: dispatch,
                name: "loading",
                value: true
              });
              _context.next = 5;
              return (0,meetings/* filterMeeting */.IW)({
                method: "GET",
                params: _objectSpread(_objectSpread({}, values), {}, {
                  per_page: 6,
                  paged: 1
                })
              });
            case 5:
              res = _context.sent;
              items = res === null || res === void 0 ? void 0 : (_res$data = res.data) === null || _res$data === void 0 ? void 0 : (_res$data$data = _res$data.data) === null || _res$data$data === void 0 ? void 0 : _res$data$data.items;
              (0,actionCreators_meeting/* setMeetings */.I)({
                dispatch: dispatch,
                value: items
              });
              dispatch({
                type: actionCreators_actions/* actions.SET_MEETINGS_PAGINATION_DATA */.N.SET_MEETINGS_PAGINATION_DATA,
                payload: {
                  totalItems: res === null || res === void 0 ? void 0 : (_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : (_res$data2$data = _res$data2.data) === null || _res$data2$data === void 0 ? void 0 : _res$data2$data.total
                }
              });
            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return function onFilter(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  var clearFilter = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var _res$data3, _res$data3$data, _res$data4, _res$data4$data;
      var values, res, items;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              values = form.getFieldsValue();
              if (!(!(values !== null && values !== void 0 && values.staff_id) && !(values !== null && values !== void 0 && values.visibility))) {
                _context2.next = 3;
                break;
              }
              return _context2.abrupt("return", false);
            case 3:
              form.resetFields();
              (0,common/* setState */.I)({
                dispatch: dispatch,
                name: "loading",
                value: true
              });
              _context2.next = 7;
              return (0,meetings/* getAllMeetings */.MY)({
                method: "GET",
                params: {
                  per_page: 6,
                  paged: 1
                }
              });
            case 7:
              res = _context2.sent;
              items = res === null || res === void 0 ? void 0 : (_res$data3 = res.data) === null || _res$data3 === void 0 ? void 0 : (_res$data3$data = _res$data3.data) === null || _res$data3$data === void 0 ? void 0 : _res$data3$data.items;
              (0,actionCreators_meeting/* setMeetings */.I)({
                dispatch: dispatch,
                value: items
              });
              (0,common/* setState */.I)({
                dispatch: dispatch,
                name: "loading",
                value: false
              });
              dispatch({
                type: actionCreators_actions/* actions.SET_MEETINGS_PAGINATION_DATA */.N.SET_MEETINGS_PAGINATION_DATA,
                payload: {
                  totalItems: res === null || res === void 0 ? void 0 : (_res$data4 = res.data) === null || _res$data4 === void 0 ? void 0 : (_res$data4$data = _res$data4.data) === null || _res$data4$data === void 0 ? void 0 : _res$data4$data.total
                }
              });
            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return function clearFilter() {
      return _ref2.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/Filters_React.createElement(Filters_React.Fragment, null, /*#__PURE__*/Filters_React.createElement(Filters_Form, {
    name: "meeting_filter"
    // layout="vertical"
    ,
    autoComplete: "on",
    onFinish: onFilter,
    form: form,
    onFinishFailed: function onFinishFailed(errorInfo) {}
  }, /*#__PURE__*/Filters_React.createElement(Row, {
    gutter: [12, 0]
  }, /*#__PURE__*/Filters_React.createElement(Col, {
    span: 24
  }, /*#__PURE__*/Filters_React.createElement(common_CustomSelect, {
    labelField: "full_name",
    valueField: "id",
    labelCol: {
      span: 24
    },
    placeholder: "Select",
    wrapperCol: {
      span: 24
    }
    // defaultValue={locationOptions[0]}
    ,
    label: __("Select staff", "timetics")
    // style={{ width: "100%" }}
    ,
    key: "staff",
    data: staffs,
    onChange: function onChange(value) {},
    name: "staff_id"
  })), /*#__PURE__*/Filters_React.createElement(Col, {
    span: 24
  }, /*#__PURE__*/Filters_React.createElement(common_CustomSelect
  // labelField={"full_name"}
  // valueField={"id"}
  // defaultValue={locationOptions[0]}
  , {
    label: __("Select status", "timetics")
    // style={{ width: "100%" }}
    ,
    labelCol: {
      span: 24
    },
    wrapperCol: {
      span: 24
    },
    placeholder: "Select",
    key: "visibility",
    data: [{
      key: "enabled",
      name: "Enabled",
      value: "enabled"
    }, {
      key: "disabled",
      name: "Disabled",
      value: "disabled"
    }],
    onChange: function onChange(value) {},
    name: "visibility"
  })), /*#__PURE__*/Filters_React.createElement(Col, {
    span: 12,
    align: "left"
  }, /*#__PURE__*/Filters_React.createElement(Button, {
    type: "border",
    onClick: clearFilter
  }, "Clear")), /*#__PURE__*/Filters_React.createElement(Col, {
    span: 12,
    align: "right"
  }, /*#__PURE__*/Filters_React.createElement(Button, {
    type: "primary",
    htmlType: "submit"
  }, "Apply")))));
}
/* harmony default export */ const meeting_Filters = (Filters);
// EXTERNAL MODULE: ./assets/src/common/icons/Icons.js
var Icons = __webpack_require__(2751);
;// CONCATENATED MODULE: ./assets/src/common/Actions.js
function Actions_typeof(obj) { "@babel/helpers - typeof"; return Actions_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, Actions_typeof(obj); }
function Actions_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ Actions_regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == Actions_typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function Actions_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function Actions_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { Actions_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { Actions_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function Actions_slicedToArray(arr, i) { return Actions_arrayWithHoles(arr) || Actions_iterableToArrayLimit(arr, i) || Actions_unsupportedIterableToArray(arr, i) || Actions_nonIterableRest(); }
function Actions_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function Actions_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Actions_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Actions_arrayLikeToArray(o, minLen); }
function Actions_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function Actions_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function Actions_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var Actions_window$antd = window.antd,
  Radio = Actions_window$antd.Radio,
  Actions_Button = Actions_window$antd.Button,
  Tooltip = Actions_window$antd.Tooltip,
  Popover = Actions_window$antd.Popover,
  Input = Actions_window$antd.Input;
var _React = React,
  Actions_useState = _React.useState;
function Actions() {
  var _useStateValue = (0,provider/* useStateValue */.K)(),
    _useStateValue2 = Actions_slicedToArray(_useStateValue, 2),
    meeting = _useStateValue2[0].meeting,
    dispatch = _useStateValue2[1];
  var getSearchData = /*#__PURE__*/function () {
    var _ref = Actions_asyncToGenerator( /*#__PURE__*/Actions_regeneratorRuntime().mark(function _callee(value) {
      var _res$data, _res$data$data, _res$data2, _res$data2$data;
      var res, items;
      return Actions_regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              (0,common/* setState */.I)({
                dispatch: dispatch,
                name: "loading",
                value: true
              });
              _context.next = 3;
              return (0,meetings/* searchMeeting */.wL)({
                method: "GET",
                params: {
                  search: value
                }
              });
            case 3:
              res = _context.sent;
              items = res === null || res === void 0 ? void 0 : (_res$data = res.data) === null || _res$data === void 0 ? void 0 : (_res$data$data = _res$data.data) === null || _res$data$data === void 0 ? void 0 : _res$data$data.items;
              (0,actionCreators_meeting/* setMeetings */.I)({
                dispatch: dispatch,
                value: items
              });
              dispatch({
                type: actionCreators_actions/* actions.SET_MEETINGS_PAGINATION_DATA */.N.SET_MEETINGS_PAGINATION_DATA,
                payload: {
                  totalItems: res === null || res === void 0 ? void 0 : (_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : (_res$data2$data = _res$data2.data) === null || _res$data2$data === void 0 ? void 0 : _res$data2$data.total
                }
              });
            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return function getSearchData(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  var searchDebounce = function searchDebounce(fn, delay) {
    var timer;
    return function () {
      var context = this,
        args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function () {
        getSearchData.apply(context, args);
      }, delay);
    };
  };
  var searchHandler = searchDebounce(getSearchData, 500);
  return /*#__PURE__*/React.createElement("div", {
    className: "tt-meeting-filter-area"
  }, /*#__PURE__*/React.createElement(Popover, {
    placement: "bottom",
    overlayClassName: "tt-filter-popover timetics-input",
    content: /*#__PURE__*/React.createElement(meeting_Filters, null),
    trigger: "click"
  }, /*#__PURE__*/React.createElement(Actions_Button, {
    className: "meeting-filter-btn",
    size: "large",
    icon: /*#__PURE__*/React.createElement(Icons/* FilterIcon */.k1, null)
  }, "Filter")), /*#__PURE__*/React.createElement("div", {
    className: "input-search-field"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Search",
    suffix: /*#__PURE__*/React.createElement(Icons/* SearchIcon */.W1, null),
    onChange: function onChange(e) {
      searchHandler(e.target.value);
    }
  }))));
}
/* harmony default export */ const common_Actions = (Actions);
// EXTERNAL MODULE: ./assets/src/common/Spinner.js
var Spinner = __webpack_require__(5729);
// EXTERNAL MODULE: ./assets/src/common/UseRequestConfig.js
var UseRequestConfig = __webpack_require__(4851);
// EXTERNAL MODULE: ./assets/src/admin/services/staffs.js
var staffs = __webpack_require__(7170);
// EXTERNAL MODULE: ./assets/src/axios/requestConfig.js
var requestConfig = __webpack_require__(2593);
// EXTERNAL MODULE: ./node_modules/axios/index.js + 40 modules
var node_modules_axios = __webpack_require__(1721);
;// CONCATENATED MODULE: ./assets/src/axios/useRequest.js
function useRequest_typeof(obj) { "@babel/helpers - typeof"; return useRequest_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, useRequest_typeof(obj); }
function useRequest_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function useRequest_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? useRequest_ownKeys(Object(source), !0).forEach(function (key) { useRequest_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : useRequest_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function useRequest_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function useRequest_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ useRequest_regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == useRequest_typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function useRequest_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function useRequest_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { useRequest_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { useRequest_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function useRequest_slicedToArray(arr, i) { return useRequest_arrayWithHoles(arr) || useRequest_iterableToArrayLimit(arr, i) || useRequest_unsupportedIterableToArray(arr, i) || useRequest_nonIterableRest(); }
function useRequest_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function useRequest_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return useRequest_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return useRequest_arrayLikeToArray(o, minLen); }
function useRequest_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function useRequest_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function useRequest_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var notification = window.antd.notification;
var useRequest_React = window.React;
var useRequest_useEffect = useRequest_React.useEffect;
function useRequest_useRequest() {
  var _timetics, _timetics2;
  var _useStateValue = useStateValue(),
    _useStateValue2 = useRequest_slicedToArray(_useStateValue, 2),
    meeting = _useStateValue2[0].meeting,
    dispatch = _useStateValue2[1];
  var instance = axios;
  instance.defaults.baseURL = (_timetics = timetics) === null || _timetics === void 0 ? void 0 : _timetics.site_url;
  instance.defaults.headers = {
    "X-WP-Nonce": (_timetics2 = timetics) === null || _timetics2 === void 0 ? void 0 : _timetics2.nonce
  };
  useRequest_useEffect(function () {
    var reqInterceptor = instance.interceptors.request.use(function (config) {
      dispatch({
        type: actions.SET_LOADING,
        payload: true
      });
      return config;
    }, function (err) {});
    var resInterceptor = instance.interceptors.response.use(function (res) {
      var _res$config;
      dispatch({
        type: actions.SET_LOADING,
        payload: false
      });
      if ((res === null || res === void 0 ? void 0 : (_res$config = res.config) === null || _res$config === void 0 ? void 0 : _res$config.method) !== "get") {
        var _res$data;
        notification.success({
          message: res === null || res === void 0 ? void 0 : (_res$data = res.data) === null || _res$data === void 0 ? void 0 : _res$data.message,
          // description: "Something went wrong! please try again.",
          placement: "topRight"
        });
      }
      return res;
    }, /*#__PURE__*/function () {
      var _ref = useRequest_asyncToGenerator( /*#__PURE__*/useRequest_regeneratorRuntime().mark(function _callee(err) {
        var _err$response, _err$response$data;
        return useRequest_regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (err.name && err.name == "AxiosError") {
                  //Error alet err?.response?.data?.message
                  notification.error({
                    message: err === null || err === void 0 ? void 0 : (_err$response = err.response) === null || _err$response === void 0 ? void 0 : (_err$response$data = _err$response.data) === null || _err$response$data === void 0 ? void 0 : _err$response$data.message,
                    // description: "Something went wrong! please try again.",
                    placement: "topRight"
                  });
                }
                return _context.abrupt("return", Promise.reject(err));
              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    return function () {
      instance.interceptors.response.eject(resInterceptor);
      instance.interceptors.response.eject(reqInterceptor);
    };
  }, []);
  var request = function request(url, config) {
    return instance.request(useRequest_objectSpread({
      url: url
    }, config));
  };
  return {
    request: request
  };
}
/* harmony default export */ const axios_useRequest = ((/* unused pure expression or super */ null && (useRequest_useRequest)));
// EXTERNAL MODULE: ./assets/src/admin/services/apiEndPoints.js
var apiEndPoints = __webpack_require__(7213);
;// CONCATENATED MODULE: ./assets/src/admin/services/test.js
function test_typeof(obj) { "@babel/helpers - typeof"; return test_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, test_typeof(obj); }
function test_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ test_regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == test_typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function test_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function test_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { test_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { test_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



function useTest() {
  var _useRequest = useRequest(),
    request = _useRequest.request;
  var getAllMeetings = /*#__PURE__*/function () {
    var _ref = test_asyncToGenerator( /*#__PURE__*/test_regeneratorRuntime().mark(function _callee(config) {
      return test_regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", request(apiEndpoint.meetings.meetingsList, config));
            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return function getAllMeetings(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  var getAllStaff = /*#__PURE__*/function () {
    var _ref2 = test_asyncToGenerator( /*#__PURE__*/test_regeneratorRuntime().mark(function _callee2(config) {
      return test_regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", request(apiEndpoint.staffs.getStaffs, config));
            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return function getAllStaff(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  return {
    getAllStaff: getAllStaff,
    getAllMeetings: getAllMeetings
  };
}
/* harmony default export */ const test = ((/* unused pure expression or super */ null && (useTest)));
;// CONCATENATED MODULE: ./assets/src/common/ConfirmModal.js
var ConfirmModal_ = wp.i18n.__;
var _antd = antd,
  Table = _antd.Table,
  ConfirmModal_Button = _antd.Button,
  Modal = _antd.Modal;
var ConfirmModal_confirm = Modal.confirm;
function useConfirmModal() {
  var showDeleteConfirm = function showDeleteConfirm(_ref) {
    var _ref$title = _ref.title,
      title = _ref$title === void 0 ? "Are you sure delete?" : _ref$title,
      _ref$okText = _ref.okText,
      okText = _ref$okText === void 0 ? "Yes" : _ref$okText,
      _ref$okType = _ref.okType,
      okType = _ref$okType === void 0 ? "danger" : _ref$okType,
      _ref$cancelText = _ref.cancelText,
      cancelText = _ref$cancelText === void 0 ? "No" : _ref$cancelText,
      _ref$onOk = _ref.onOk,
      onOk = _ref$onOk === void 0 ? function () {} : _ref$onOk;
    ConfirmModal_confirm({
      title: ConfirmModal_(title, "timetics"),
      okText: ConfirmModal_(okText, "timetics"),
      okType: okType,
      cancelText: ConfirmModal_(cancelText, "timetics"),
      onOk: onOk
    });
  };
  return {
    showDeleteConfirm: showDeleteConfirm
  };
}
/* harmony default export */ const ConfirmModal = (useConfirmModal);
// EXTERNAL MODULE: ./assets/src/admin/pages/meeting/hook/useMeetings.js
var useMeetings = __webpack_require__(7026);
;// CONCATENATED MODULE: ./assets/src/common/DeleteButton.js

var DeleteButton_ = wp.i18n.__;
var DeleteButton_Button = window.antd.Button;
function DeleteButton(_ref) {
  var className = _ref.className,
    size = _ref.size,
    onClick = _ref.onClick,
    label = _ref.label;
  return /*#__PURE__*/React.createElement(DeleteButton_Button, {
    className: "button-with-icon",
    danger: true,
    onClick: onClick
  }, /*#__PURE__*/React.createElement(Icons/* DeleteIcon */.pJ, null), " ", DeleteButton_(label || "Delete", "timetics"));
}
/* harmony default export */ const common_DeleteButton = (DeleteButton);
;// CONCATENATED MODULE: ./assets/src/admin/pages/meeting/MeetingCard.js
function MeetingCard_typeof(obj) { "@babel/helpers - typeof"; return MeetingCard_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, MeetingCard_typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || MeetingCard_unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return MeetingCard_arrayLikeToArray(arr); }
function MeetingCard_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ MeetingCard_regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == MeetingCard_typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function MeetingCard_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function MeetingCard_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? MeetingCard_ownKeys(Object(source), !0).forEach(function (key) { MeetingCard_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : MeetingCard_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function MeetingCard_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function MeetingCard_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function MeetingCard_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { MeetingCard_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { MeetingCard_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function MeetingCard_slicedToArray(arr, i) { return MeetingCard_arrayWithHoles(arr) || MeetingCard_iterableToArrayLimit(arr, i) || MeetingCard_unsupportedIterableToArray(arr, i) || MeetingCard_nonIterableRest(); }
function MeetingCard_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function MeetingCard_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return MeetingCard_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return MeetingCard_arrayLikeToArray(o, minLen); }
function MeetingCard_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function MeetingCard_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function MeetingCard_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var MeetingCard_React = React,
  MeetingCard_useState = MeetingCard_React.useState;
var MeetingCard_window$antd = window.antd,
  Switch = MeetingCard_window$antd.Switch,
  MeetingCard_Modal = MeetingCard_window$antd.Modal,
  Dropdown = MeetingCard_window$antd.Dropdown,
  MeetingCard_Button = MeetingCard_window$antd.Button,
  Space = MeetingCard_window$antd.Space,
  Checkbox = MeetingCard_window$antd.Checkbox,
  MeetingCard_Typography = MeetingCard_window$antd.Typography;
var MeetingCard_confirm = MeetingCard_Modal.confirm;
var MeetingCard_Title = MeetingCard_Typography.Title;










var MeetingCard_ = wp.i18n.__;
var MeetingCard = function MeetingCard(_ref) {
  var meeting = _ref.meeting;
  var navigate = (0,dist/* useNavigate */.s0)();
  var _useStateValue = (0,provider/* useStateValue */.K)(),
    _useStateValue2 = MeetingCard_slicedToArray(_useStateValue, 2),
    meetingReducer = _useStateValue2[0].meeting,
    dispatch = _useStateValue2[1];
  var _useConfirmModal = ConfirmModal(),
    showDeleteConfirm = _useConfirmModal.showDeleteConfirm;
  var _useMeetings = (0,useMeetings/* default */.Z)(),
    getMeetings = _useMeetings.getMeetings;
  var per_page = meetingReducer.per_page,
    paged = meetingReducer.paged,
    _meetingReducer$selec = meetingReducer.selectedMeetings,
    selectedMeetings = _meetingReducer$selec === void 0 ? [] : _meetingReducer$selec,
    _meetingReducer$hover = meetingReducer.hoverOnMeeting,
    hoverOnMeeting = _meetingReducer$hover === void 0 ? {} : _meetingReducer$hover;

  /**
   * handler for changing meeting visibility
   * @param {Boolean} checked
   * @param {Object} meet meeting object
   */
  var onVisibilityChange = /*#__PURE__*/function () {
    var _ref2 = MeetingCard_asyncToGenerator( /*#__PURE__*/MeetingCard_regeneratorRuntime().mark(function _callee(checked, meet) {
      var _meet$staff;
      var res;
      return MeetingCard_regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0,meetings/* updateMeeting */.$Z)({
                method: "PUT",
                data: MeetingCard_objectSpread(MeetingCard_objectSpread({}, meet), {}, {
                  staff: meet === null || meet === void 0 ? void 0 : (_meet$staff = meet.staff) === null || _meet$staff === void 0 ? void 0 : _meet$staff.map(function (s) {
                    return s === null || s === void 0 ? void 0 : s.id;
                  }),
                  visibility: checked
                }),
                id: meet === null || meet === void 0 ? void 0 : meet.id
              }, meet === null || meet === void 0 ? void 0 : meet.id);
            case 2:
              res = _context.sent;
              getMeetings({
                page: paged
              });
            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return function onVisibilityChange(_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  /**
   *Handler for edit meeting
   * @param {Event} e js Event Object.
   * @param {Object} meeting single meeting object.
   */
  var editMeeting = function editMeeting(e, meeting) {
    navigate("update?id=".concat(meeting.id));
  };

  /**
   *Handler for delete meeting
   * @param {Event} e js Event Object.
   * @param {Object} meeting single meeting object.
   */
  var deleteMeetingHandler = /*#__PURE__*/function () {
    var _ref3 = MeetingCard_asyncToGenerator( /*#__PURE__*/MeetingCard_regeneratorRuntime().mark(function _callee2(e, ap) {
      var res;
      return MeetingCard_regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return (0,meetings/* deleteMeeting */.wY)({
                method: "DELETE"
              }, ap === null || ap === void 0 ? void 0 : ap.id);
            case 2:
              res = _context2.sent;
              dispatch({
                type: actionCreators_actions/* actions.SET_MEETINGS_AFTER_DELETE */.N.SET_MEETINGS_AFTER_DELETE,
                payload: ap === null || ap === void 0 ? void 0 : ap.id
              });
              getMeetings({
                page: paged
              });
            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return function deleteMeetingHandler(_x3, _x4) {
      return _ref3.apply(this, arguments);
    };
  }();

  /**
   *Handler for duplicate meeting
   * @param {Event} e js Event Object.
   * @param {Object} meeting single meeting object.
   */
  var duplicateMeetingHandler = /*#__PURE__*/function () {
    var _ref4 = MeetingCard_asyncToGenerator( /*#__PURE__*/MeetingCard_regeneratorRuntime().mark(function _callee3(e, meeting) {
      var res;
      return MeetingCard_regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return (0,meetings/* duplicateMeeting */.Bi)({
                method: "POST"
              }, meeting === null || meeting === void 0 ? void 0 : meeting.id);
            case 2:
              res = _context3.sent;
              getMeetings({
                page: paged
              });
            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return function duplicateMeetingHandler(_x5, _x6) {
      return _ref4.apply(this, arguments);
    };
  }();

  /**
   * Handler for selecting meeting for delete multiple.
   * @param {*} e js event object
   * @param {*} meetingId id of meeting.
   */
  var onSelectMeeting = function onSelectMeeting(e, meetingId) {
    var _selectedMeetings = _toConsumableArray(selectedMeetings);
    if (e.target.checked) {
      _selectedMeetings.push(meetingId);
    } else {
      _selectedMeetings = _selectedMeetings.filter(function (id) {
        return id != meetingId;
      });
    }
    (0,common/* setState */.I)({
      dispatch: dispatch,
      name: "selectedMeetings",
      value: _selectedMeetings
    });
  };

  /**
   *Handler for listen to dropdown onclick
   * @param {number} key key from dropdown menu items
   */
  var onDropdownAction = function onDropdownAction(menu) {
    //menu == 2, view all bookings of a single meeting
    if (menu.key == 2) {
      navigate("/bookings?meeting_id=".concat(meeting.id));
    }
  };
  var handleMouseEnter = function handleMouseEnter(e) {
    var _hoverOnMeeting = {};
    _hoverOnMeeting[meeting.id] = true;
    (0,common/* setState */.I)({
      dispatch: dispatch,
      name: "hoverOnMeeting",
      value: _hoverOnMeeting
    });
  };
  var handleMouseLeave = function handleMouseLeave(e) {
    var _hoverOnMeeting = {};
    _hoverOnMeeting[meeting.id] = false;
    (0,common/* setState */.I)({
      dispatch: dispatch,
      name: "hoverOnMeeting",
      value: _hoverOnMeeting
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    className: (meeting === null || meeting === void 0 ? void 0 : meeting.visibility) == "enabled" ? "tt-single-meeting-card " : "tt-single-meeting-card disabled-meeting-card",
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave
    // style={{ backgroundColor: hoverOnMeeting ? "red" : "" }}
  }, hoverOnMeeting[meeting === null || meeting === void 0 ? void 0 : meeting.id] || selectedMeetings !== null && selectedMeetings !== void 0 && selectedMeetings.length ? /*#__PURE__*/React.createElement(Checkbox, {
    className: "tt-meeting-checkbox",
    onChange: function onChange(e) {
      return onSelectMeeting(e, meeting === null || meeting === void 0 ? void 0 : meeting.id);
    },
    checked: _toConsumableArray(selectedMeetings).includes(meeting === null || meeting === void 0 ? void 0 : meeting.id)
  }) : null, /*#__PURE__*/React.createElement("div", {
    className: "meeting-card-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "meeting-header-info-wrappers"
  }, /*#__PURE__*/React.createElement(MeetingCard_Title, {
    level: 5,
    className: "tt-meeting-title tt-margin-0",
    onClick: function onClick(e) {
      editMeeting(e, meeting);
    }
  }, meeting === null || meeting === void 0 ? void 0 : meeting.name), /*#__PURE__*/React.createElement(Switch, {
    checked: (meeting === null || meeting === void 0 ? void 0 : meeting.visibility) == "enabled" ? true : false,
    onChange: function onChange(checked) {
      var visibilityData = checked ? "enabled" : "disabled";
      onVisibilityChange(visibilityData, meeting);
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "meeting-meta"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "meeting-meta-list"
  }, /*#__PURE__*/React.createElement("li", {
    className: "tt-meeting-list-item"
  }, /*#__PURE__*/React.createElement("p", null, meeting.duration)), /*#__PURE__*/React.createElement("li", {
    className: "tt-meeting-list-item"
  }, /*#__PURE__*/React.createElement("p", null, meeting.type))))), /*#__PURE__*/React.createElement("div", {
    className: "meeting-card-footer"
  }, /*#__PURE__*/React.createElement(Space, {
    size: [15, 10],
    wrap: true,
    className: "meeting-action-list"
  }, /*#__PURE__*/React.createElement(MeetingCard_Button, {
    icon: /*#__PURE__*/React.createElement(Icons/* EditIcon */.dY, null),
    onClick: function onClick(e) {
      editMeeting(e, meeting);
    }
  }, MeetingCard_("Edit", "timetics")), /*#__PURE__*/React.createElement(MeetingCard_Button, {
    icon: /*#__PURE__*/React.createElement(Icons/* CloneIcon */.Qr, null),
    onClick: function onClick(e) {
      showDeleteConfirm({
        title: MeetingCard_("Are you sure to duplicate?", "timetics"),
        okText: MeetingCard_("Yes", "timetics"),
        okType: "danger",
        cancelText: MeetingCard_("No", "timetics"),
        onOk: function onOk() {
          duplicateMeetingHandler(e, meeting);
        }
      });
    }
  }, MeetingCard_("Clone", "timetics")), /*#__PURE__*/React.createElement(common_DeleteButton, {
    onClick: function onClick(e) {
      showDeleteConfirm({
        title: MeetingCard_("Are you sure delete?", "timetics"),
        okText: MeetingCard_("Yes", "timetics"),
        okType: "danger",
        cancelText: MeetingCard_("No", "timetics"),
        onOk: function onOk() {
          deleteMeetingHandler(e, meeting);
        }
      });
    },
    label: "Delete"
  }))));
};
/* harmony default export */ const meeting_MeetingCard = (MeetingCard);
var dropdownMenuitems = [
// {
//     key: "1",
//     label: (
//         <a
//             target="_blank"
//             rel="noopener noreferrer"
//             href="https://www.google.com"
//         >
//             {__("Preview", "timetics")}
//         </a>
//     ),
// },
{
  key: "2",
  label: /*#__PURE__*/React.createElement("a", null, MeetingCard_("View bookings", "timetics"))
}, {
  key: "3",
  label: /*#__PURE__*/React.createElement("a", {
    target: "_blank",
    rel: "noopener noreferrer",
    href: "https://www.google.com"
  }, MeetingCard_(" Share", "timetics"))
}];
;// CONCATENATED MODULE: ./assets/src/admin/pages/meeting/CreateOptionBtn.js
var _window;
function CreateOptionBtn_slicedToArray(arr, i) { return CreateOptionBtn_arrayWithHoles(arr) || CreateOptionBtn_iterableToArrayLimit(arr, i) || CreateOptionBtn_unsupportedIterableToArray(arr, i) || CreateOptionBtn_nonIterableRest(); }
function CreateOptionBtn_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function CreateOptionBtn_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return CreateOptionBtn_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return CreateOptionBtn_arrayLikeToArray(o, minLen); }
function CreateOptionBtn_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function CreateOptionBtn_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function CreateOptionBtn_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var CreateOptionBtn_window$antd = window.antd,
  CreateOptionBtn_Button = CreateOptionBtn_window$antd.Button,
  CreateOptionBtn_Dropdown = CreateOptionBtn_window$antd.Dropdown,
  CreateOptionBtn_Space = CreateOptionBtn_window$antd.Space,
  Divider = CreateOptionBtn_window$antd.Divider,
  CreateOptionBtn_Typography = CreateOptionBtn_window$antd.Typography,
  CreateOptionBtn_Row = CreateOptionBtn_window$antd.Row,
  CreateOptionBtn_Col = CreateOptionBtn_window$antd.Col,
  Badge = CreateOptionBtn_window$antd.Badge;
var CreateOptionBtn_Title = CreateOptionBtn_Typography.Title,
  Text = CreateOptionBtn_Typography.Text;
var CreateOptionBtn_ = wp.i18n.__;




var CreateOptionBtn_timetics = (_window = window) === null || _window === void 0 ? void 0 : _window.timetics;
var CreateOptionBtn = function CreateOptionBtn() {
  var navigate = (0,dist/* useNavigate */.s0)();
  var _useStateValue = (0,provider/* useStateValue */.K)(),
    _useStateValue2 = CreateOptionBtn_slicedToArray(_useStateValue, 2),
    meeting = _useStateValue2[0].meeting,
    dispatch = _useStateValue2[1];
  var proActiveClass = (CreateOptionBtn_timetics === null || CreateOptionBtn_timetics === void 0 ? void 0 : CreateOptionBtn_timetics.timeticsPro) != true ? "tt-bg-opacity" : "";
  var clickHandler = function clickHandler(e) {
    console.log(e.target.name);
    if (CreateOptionBtn_timetics !== null && CreateOptionBtn_timetics !== void 0 && CreateOptionBtn_timetics.timeticsPro) {
      (0,common/* setState */.I)({
        dispatch: dispatch,
        name: "meetingType",
        value: CreateOptionBtn_("One-to-Many", "timetics")
      });
      (0,common/* setState */.I)({
        dispatch: dispatch,
        name: "meetingTitle",
        value: CreateOptionBtn_("Create One-to-Many Meeting", "timetics")
      });
      navigate("create-new");
    }
  };
  var onSeatTypeHandler = function onSeatTypeHandler() {
    if (CreateOptionBtn_timetics !== null && CreateOptionBtn_timetics !== void 0 && CreateOptionBtn_timetics.timeticsPro) {
      (0,common/* setState */.I)({
        dispatch: dispatch,
        name: "meetingType",
        value: "seat"
      });
      (0,common/* setState */.I)({
        dispatch: dispatch,
        name: "meetingTitle",
        value: "Create One to many with seats map"
      });
      navigate("create-new");
    }
  };
  var item_list = [{
    key: "1",
    label: /*#__PURE__*/React.createElement("div", {
      className: "tt-meeting-create-btn"
    }, /*#__PURE__*/React.createElement(CreateOptionBtn_Space, {
      onClick: function onClick() {
        (0,common/* setState */.I)({
          dispatch: dispatch,
          name: "meetingType",
          value: "One-to-One"
        });
        (0,common/* setState */.I)({
          dispatch: dispatch,
          name: "meetingTitle",
          value: "Create One-to-One Meeting"
        });
        navigate("create-new");
      }
    }, /*#__PURE__*/React.createElement(CreateOptionBtn_Space, {
      size: "middle",
      align: "start"
    }, /*#__PURE__*/React.createElement(Icons/* UserIcon */.tB, {
      width: "20",
      height: "20"
    }), /*#__PURE__*/React.createElement("div", {
      className: "tt-create-meeting-title"
    }, /*#__PURE__*/React.createElement(CreateOptionBtn_Title, {
      level: 5,
      className: "tt-mt-0 tt-mb-5"
    }, CreateOptionBtn_("One-to-One", "timetics")), /*#__PURE__*/React.createElement(Text, {
      type: "secondary"
    }, CreateOptionBtn_("Single host with single invitee. Best for having a one-to-one conversation.", "timetics")))), /*#__PURE__*/React.createElement(Icons/* ArrowRightIcon */.LZ, null)))
  }, {
    key: "2",
    label: /*#__PURE__*/React.createElement("div", {
      className: "tt-meeting-create-btn ".concat(proActiveClass)
    }, /*#__PURE__*/React.createElement(CreateOptionBtn_Space, {
      size: "large",
      onClick: clickHandler
    }, /*#__PURE__*/React.createElement(CreateOptionBtn_Space, {
      size: "middle",
      align: "start"
    }, /*#__PURE__*/React.createElement(Icons/* GroupPeopleIcon */.A0, {
      width: "20",
      height: "20"
    }), /*#__PURE__*/React.createElement("div", {
      className: "tt-create-meeting-title"
    }, /*#__PURE__*/React.createElement(Badge, {
      count: "Pro"
    }, /*#__PURE__*/React.createElement(CreateOptionBtn_Title, {
      level: 5,
      className: "tt-mt-0 tt-mb-5"
    }, CreateOptionBtn_("One-to-Many", "timetics"))), /*#__PURE__*/React.createElement(Text, {
      type: "secondary"
    }, CreateOptionBtn_("Single host with multiple invitees. Best for taking classes and seminars.", "timetics")))), /*#__PURE__*/React.createElement(Icons/* ArrowRightIcon */.LZ, null)))
  }, {
    key: "3",
    label: /*#__PURE__*/React.createElement("div", {
      className: "tt-meeting-create-btn ".concat(proActiveClass)
    }, /*#__PURE__*/React.createElement(CreateOptionBtn_Space, {
      size: "large",
      onClick: onSeatTypeHandler
    }, /*#__PURE__*/React.createElement(CreateOptionBtn_Space, {
      size: "middle",
      align: "start"
    }, /*#__PURE__*/React.createElement(Icons/* TwoPeopleIcon */.NL, {
      color: "#808080",
      width: "20",
      height: "20"
    }), /*#__PURE__*/React.createElement("div", {
      className: "tt-create-meeting-title"
    }, /*#__PURE__*/React.createElement(Badge, {
      count: "Pro"
    }, /*#__PURE__*/React.createElement(CreateOptionBtn_Title, {
      level: 5,
      className: "tt-mt-0 tt-mb-5"
    }, CreateOptionBtn_("One-to-Many With Seat plan", "timetics"))), /*#__PURE__*/React.createElement(Text, {
      type: "secondary"
    }, CreateOptionBtn_("One-to-Many meetings with the option to create seat plans. Best for restaurants, cinema halls, and conferences.", "timetics")))), /*#__PURE__*/React.createElement(Icons/* ArrowRightIcon */.LZ, null)))
  }];
  var items = wp.hooks.applyFilters("timetics_meeting_create_type", item_list);
  return /*#__PURE__*/React.createElement("div", {
    className: "tt-meeting-create-btn"
  }, /*#__PURE__*/React.createElement(CreateOptionBtn_Dropdown, {
    menu: {
      items: items
    },
    trigger: ["click"],
    dropdownRender: function dropdownRender(menu) {
      return /*#__PURE__*/React.createElement("div", {
        className: "tt-dropdown-content"
      }, menu, /*#__PURE__*/React.createElement(Divider, {
        style: {
          margin: 0
        }
      }));
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: function onClick(e) {
      return e.preventDefault();
    }
  }, /*#__PURE__*/React.createElement(CreateOptionBtn_Button, {
    type: "primary",
    icon: /*#__PURE__*/React.createElement(Icons/* AddIcon */.dt, null),
    size: "large"
  }, CreateOptionBtn_("Add New", "timetics")))));
};
/* harmony default export */ const meeting_CreateOptionBtn = (CreateOptionBtn);
;// CONCATENATED MODULE: ./assets/src/admin/pages/meeting/MeetingList.js
function MeetingList_typeof(obj) { "@babel/helpers - typeof"; return MeetingList_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, MeetingList_typeof(obj); }
function MeetingList_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ MeetingList_regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == MeetingList_typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function MeetingList_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function MeetingList_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { MeetingList_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { MeetingList_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function MeetingList_slicedToArray(arr, i) { return MeetingList_arrayWithHoles(arr) || MeetingList_iterableToArrayLimit(arr, i) || MeetingList_unsupportedIterableToArray(arr, i) || MeetingList_nonIterableRest(); }
function MeetingList_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function MeetingList_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return MeetingList_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return MeetingList_arrayLikeToArray(o, minLen); }
function MeetingList_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function MeetingList_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function MeetingList_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var MeetingList_window$antd = window.antd,
  MeetingList_Input = MeetingList_window$antd.Input,
  Pagination = MeetingList_window$antd.Pagination,
  MeetingList_Button = MeetingList_window$antd.Button,
  MeetingList_Dropdown = MeetingList_window$antd.Dropdown,
  MeetingList_Row = MeetingList_window$antd.Row,
  MeetingList_Col = MeetingList_window$antd.Col,
  Result = MeetingList_window$antd.Result,
  MeetingList_Space = MeetingList_window$antd.Space,
  MeetingList_Divider = MeetingList_window$antd.Divider;


var MeetingList_React = React,
  MeetingList_useState = MeetingList_React.useState,
  MeetingList_useEffect = MeetingList_React.useEffect;
var MeetingList_ = wp.i18n.__;
var TextArea = MeetingList_Input.TextArea;
















function MeetingList() {
  var _meeting$meetings2;
  var _useStateValue = (0,provider/* useStateValue */.K)(),
    _useStateValue2 = MeetingList_slicedToArray(_useStateValue, 2),
    meeting = _useStateValue2[0].meeting,
    dispatch = _useStateValue2[1];
  var _useMeetings = (0,useMeetings/* default */.Z)(),
    getMeetings = _useMeetings.getMeetings,
    buldDeleteMeetingHandler = _useMeetings.buldDeleteMeetingHandler,
    clearSelectedMeetings = _useMeetings.clearSelectedMeetings,
    selectAllMeetings = _useMeetings.selectAllMeetings;
  var _useConfirmModal = ConfirmModal(),
    showDeleteConfirm = _useConfirmModal.showDeleteConfirm;
  var navigate = (0,dist/* useNavigate */.s0)();
  var getConfig = (0,UseRequestConfig/* default */.Z)();
  var loading = meeting.loading,
    per_page = meeting.per_page,
    paged = meeting.paged,
    totalItems = meeting.totalItems,
    _meeting$selectedMeet = meeting.selectedMeetings,
    selectedMeetings = _meeting$selectedMeet === void 0 ? [] : _meeting$selectedMeet;
  MeetingList_useEffect(function () {
    fetchMeetingList(paged);
  }, []);
  MeetingList_useEffect(function () {
    return function () {
      (0,common/* setState */.I)({
        dispatch: dispatch,
        name: "selectedMeetings",
        value: []
      });
    };
  }, []);
  var fetchMeetingList = /*#__PURE__*/function () {
    var _ref = MeetingList_asyncToGenerator( /*#__PURE__*/MeetingList_regeneratorRuntime().mark(function _callee(page) {
      return MeetingList_regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              getMeetings({
                page: page
              });
            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return function fetchMeetingList(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  var onBuldDeleteMeetings = function onBuldDeleteMeetings(e) {
    showDeleteConfirm({
      title: MeetingList_("Are you sure delete?", "timetics"),
      okText: MeetingList_("Yes", "timetics"),
      okType: "danger",
      cancelText: MeetingList_("No", "timetics"),
      onOk: function onOk() {
        buldDeleteMeetingHandler(e, selectedMeetings);
      }
    });
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "tt-meeting-menu-warper"
  }, /*#__PURE__*/React.createElement(meeting_CreateOptionBtn, null), /*#__PURE__*/React.createElement(common_Actions, null)), loading && /*#__PURE__*/React.createElement(Spinner/* default */.Z, {
    tip: MeetingList_("Loading...", "timetics"),
    type: "info",
    size: "large",
    wrapperClassName: "tt-spinner-wrapper"
  }), !loading && totalItems !== 0 && /*#__PURE__*/React.createElement(React.Fragment, null, selectedMeetings && selectedMeetings !== null && selectedMeetings !== void 0 && selectedMeetings.length ? /*#__PURE__*/React.createElement(MeetingList_Row, {
    className: "tt-meeting-card-bulk-action-wrapper tt-mb-20"
  }, /*#__PURE__*/React.createElement(MeetingList_Col, {
    xs: 24,
    lg: 12,
    xxl: 8
  }, /*#__PURE__*/React.createElement(MeetingList_Space, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(MeetingList_Button, {
    type: "text",
    icon: /*#__PURE__*/React.createElement(Icons/* XIcon */.b0, null),
    onClick: clearSelectedMeetings
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      marginRight: "8px"
    }
  }, selectedMeetings === null || selectedMeetings === void 0 ? void 0 : selectedMeetings.length), MeetingList_("Item Selected")), /*#__PURE__*/React.createElement(MeetingList_Divider, {
    type: "vertical"
  }), /*#__PURE__*/React.createElement(MeetingList_Button, {
    type: "text",
    icon: /*#__PURE__*/React.createElement(Icons/* CardViewIcon */.UC, null),
    onClick: function onClick(e) {
      var _meeting$meetings;
      var ids = meeting === null || meeting === void 0 ? void 0 : (_meeting$meetings = meeting.meetings) === null || _meeting$meetings === void 0 ? void 0 : _meeting$meetings.map(function (meet) {
        return meet.id;
      });
      selectAllMeetings(e, ids);
    }
  }, MeetingList_("Select all"))), /*#__PURE__*/React.createElement(common_DeleteButton, {
    onClick: onBuldDeleteMeetings,
    label: "Delete All"
  }))), /*#__PURE__*/React.createElement(MeetingList_Col, {
    xs: 24,
    lg: 12,
    xxl: 8
  })) : null, /*#__PURE__*/React.createElement(MeetingList_Row, {
    gutter: [20, 20],
    className: "tt-meeting-card-wrapper tt-mb-30"
  }, meeting === null || meeting === void 0 ? void 0 : (_meeting$meetings2 = meeting.meetings) === null || _meeting$meetings2 === void 0 ? void 0 : _meeting$meetings2.map(function (item, index) {
    return /*#__PURE__*/React.createElement(MeetingList_Col, {
      xs: 24,
      lg: 12,
      xxl: 8,
      key: "meeting-item-".concat(index)
    }, /*#__PURE__*/React.createElement(meeting_MeetingCard, {
      meeting: item,
      key: item.id
    }));
  })), totalItems > per_page && /*#__PURE__*/React.createElement("div", {
    className: "meeting-pagination"
  }, /*#__PURE__*/React.createElement(Pagination, {
    total: totalItems,
    current: paged,
    pageSize: per_page,
    onChange: function onChange(page) {
      (0,common/* setState */.I)({
        dispatch: dispatch,
        name: "paged",
        value: page
      });
      fetchMeetingList(page);
    }
  }))), !loading && totalItems === 0 && /*#__PURE__*/React.createElement(Result, {
    title: MeetingList_("Currently, you have no meetings.", "timetics"),
    subTitle: MeetingList_("Please, create a meeting.", "timetics")
  }));
}
/* harmony default export */ const meeting_MeetingList = (MeetingList);

/***/ })

}]);