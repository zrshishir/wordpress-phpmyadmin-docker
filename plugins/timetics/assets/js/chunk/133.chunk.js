"use strict";
(self["webpackChunktimetics"] = self["webpackChunktimetics"] || []).push([[133],{

/***/ 7133:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7484);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9655);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9250);
/* harmony import */ var _libs_bookingLib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6621);
/* harmony import */ var _FormField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5123);
/* harmony import */ var _common_CreateOrUpdate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3181);
/* harmony import */ var _components_MainPageHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8494);
/* harmony import */ var _services_meetings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3538);
/* harmony import */ var _actionCreators_meeting__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(629);
/* harmony import */ var _context_provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7258);
/* harmony import */ var _actionCreators_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3632);
/* harmony import */ var _frontend_utils_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4545);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











var _window$antd = window.antd,
  Button = _window$antd.Button,
  Form = _window$antd.Form,
  message = _window$antd.message,
  Skeleton = _window$antd.Skeleton;
var __ = wp.i18n.__;
var _React = React,
  useState = _React.useState,
  useEffect = _React.useEffect;
function CreateBooking() {
  var _booking$appointment;
  var _useStateValue = (0,_context_provider__WEBPACK_IMPORTED_MODULE_7__/* .useStateValue */ .K)(),
    _useStateValue2 = _slicedToArray(_useStateValue, 2),
    _useStateValue2$ = _useStateValue2[0],
    meetingReducer = _useStateValue2$.meeting,
    bookingReducer = _useStateValue2$.booking,
    dispatch = _useStateValue2[1];
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];
  var _useState3 = useState(),
    _useState4 = _slicedToArray(_useState3, 2),
    meetingData = _useState4[0],
    setMeetingData = _useState4[1];
  var _Form$useForm = Form.useForm(),
    _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
    form = _Form$useForm2[0];
  var _useSearchParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_10__/* .useSearchParams */ .lr)(),
    _useSearchParams2 = _slicedToArray(_useSearchParams, 1),
    searchParams = _useSearchParams2[0];
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_11__/* .useNavigate */ .s0)();
  var id = searchParams.get("id");
  var selectedDate = bookingReducer.selectedDate,
    meetingToBook = bookingReducer.meetingToBook,
    selectedStaffIdToBook = bookingReducer.selectedStaffIdToBook,
    _bookingReducer$booki = bookingReducer.booking,
    booking = _bookingReducer$booki === void 0 ? {} : _bookingReducer$booki,
    location_type = bookingReducer.location_type,
    location = bookingReducer.location;

  /**
   * get booking data
   */
  useEffect(function () {
    var loadData = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _res$data, _res$data$data;
        var res, items, _data$data, _data$data$appointmen, _data$data2, _data$data2$staff, _data$data3, _data$data4, _data$data4$staff, _data$data5, _data$data6, _data$data7, _data$data7$customer, _data$data8, _data$data8$customer, _data$data9, _data$data9$staff, _data$data10, _data$data11, _data$data12, _data$data13, _data$data14, _yield$getSingleBooki, data, meetingId, _getBookingData, staffs, meeting, selectedScheduleBasedOnStaff, offDays;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetchMeetingList(-1, 1);
              case 2:
                res = _context.sent;
                items = res === null || res === void 0 ? void 0 : (_res$data = res.data) === null || _res$data === void 0 ? void 0 : (_res$data$data = _res$data.data) === null || _res$data$data === void 0 ? void 0 : _res$data$data.items;
                setMeetingData(items);
                (0,_actionCreators_meeting__WEBPACK_IMPORTED_MODULE_6__/* .setMeetings */ .I)({
                  dispatch: dispatch,
                  value: items
                });
                if (!(id && items !== null && items !== void 0 && items.length)) {
                  _context.next = 18;
                  break;
                }
                setLoading(true);
                _context.next = 10;
                return (0,_libs_bookingLib__WEBPACK_IMPORTED_MODULE_1__/* .getSingleBookingApi */ .rx)(id);
              case 10:
                _yield$getSingleBooki = _context.sent;
                data = _yield$getSingleBooki.data;
                meetingId = data === null || data === void 0 ? void 0 : (_data$data = data.data) === null || _data$data === void 0 ? void 0 : (_data$data$appointmen = _data$data.appointment) === null || _data$data$appointmen === void 0 ? void 0 : _data$data$appointmen.id;
                _getBookingData = getBookingData({
                  meetingId: meetingId,
                  items: items
                }), staffs = _getBookingData.staffs, meeting = _getBookingData.meeting;
                selectedScheduleBasedOnStaff = meeting === null || meeting === void 0 ? void 0 : meeting.schedule[data === null || data === void 0 ? void 0 : (_data$data2 = data.data) === null || _data$data2 === void 0 ? void 0 : (_data$data2$staff = _data$data2.staff) === null || _data$data2$staff === void 0 ? void 0 : _data$data2$staff.id];
                offDays = (0,_frontend_utils_helper__WEBPACK_IMPORTED_MODULE_9__/* .getDayNumbers */ .HD)(selectedScheduleBasedOnStaff);
                dispatch({
                  type: _actionCreators_actions__WEBPACK_IMPORTED_MODULE_8__/* .actions.SET_BOOKING_STATE */ .N.SET_BOOKING_STATE,
                  payload: {
                    selectedMeetingId: data === null || data === void 0 ? void 0 : (_data$data3 = data.data) === null || _data$data3 === void 0 ? void 0 : _data$data3.id,
                    selectedStaffIdToBook: data === null || data === void 0 ? void 0 : (_data$data4 = data.data) === null || _data$data4 === void 0 ? void 0 : (_data$data4$staff = _data$data4.staff) === null || _data$data4$staff === void 0 ? void 0 : _data$data4$staff.id,
                    meetingStaffs: staffs,
                    meetingStaff: data === null || data === void 0 ? void 0 : (_data$data5 = data.data) === null || _data$data5 === void 0 ? void 0 : _data$data5.staff,
                    meetingToBook: meeting,
                    selectedDate: dayjs__WEBPACK_IMPORTED_MODULE_0___default()(data === null || data === void 0 ? void 0 : (_data$data6 = data.data) === null || _data$data6 === void 0 ? void 0 : _data$data6.start_date).format("YYYY-MM-DD"),
                    unavailableDayNumber: offDays,
                    booking: {
                      first_name: data === null || data === void 0 ? void 0 : (_data$data7 = data.data) === null || _data$data7 === void 0 ? void 0 : (_data$data7$customer = _data$data7.customer) === null || _data$data7$customer === void 0 ? void 0 : _data$data7$customer.first_name,
                      email: data === null || data === void 0 ? void 0 : (_data$data8 = data.data) === null || _data$data8 === void 0 ? void 0 : (_data$data8$customer = _data$data8.customer) === null || _data$data8$customer === void 0 ? void 0 : _data$data8$customer.email,
                      appointment: meeting === null || meeting === void 0 ? void 0 : meeting.id,
                      staff: data === null || data === void 0 ? void 0 : (_data$data9 = data.data) === null || _data$data9 === void 0 ? void 0 : (_data$data9$staff = _data$data9.staff) === null || _data$data9$staff === void 0 ? void 0 : _data$data9$staff.full_name,
                      start_date: dayjs__WEBPACK_IMPORTED_MODULE_0___default()(data === null || data === void 0 ? void 0 : (_data$data10 = data.data) === null || _data$data10 === void 0 ? void 0 : _data$data10.start_date).format("YYYY-MM-DD"),
                      start_time: data === null || data === void 0 ? void 0 : (_data$data11 = data.data) === null || _data$data11 === void 0 ? void 0 : _data$data11.start_time,
                      status: data === null || data === void 0 ? void 0 : (_data$data12 = data.data) === null || _data$data12 === void 0 ? void 0 : _data$data12.status,
                      location_type: data === null || data === void 0 ? void 0 : (_data$data13 = data.data) === null || _data$data13 === void 0 ? void 0 : _data$data13.location_type,
                      location: data === null || data === void 0 ? void 0 : (_data$data14 = data.data) === null || _data$data14 === void 0 ? void 0 : _data$data14.location
                    }
                  }
                });
                setLoading(false);
              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return function loadData() {
        return _ref.apply(this, arguments);
      };
    }();
    loadData();
    return function () {};
  }, []);

  /**
   * Meeting title on change get value
   * @param {number} value selected value
   */
  useEffect(function () {
    return function () {
      dispatch({
        type: _actionCreators_actions__WEBPACK_IMPORTED_MODULE_8__/* .actions.SET_BOOKING_STATE */ .N.SET_BOOKING_STATE,
        payload: {
          renderFlatPicker: false,
          booking: {},
          selectedStaffIdToBook: null,
          selectedMeetingId: null
        }
      });
    };
  }, []);
  var getBookingData = function getBookingData(_ref2) {
    var _meeting$;
    var meetingId = _ref2.meetingId,
      items = _ref2.items;
    var meeting = items === null || items === void 0 ? void 0 : items.filter(function (item) {
      return item.id == meetingId;
    });
    var staffs = meeting === null || meeting === void 0 ? void 0 : (_meeting$ = meeting[0]) === null || _meeting$ === void 0 ? void 0 : _meeting$.staff;
    return {
      meeting: meeting[0],
      staffs: staffs
    };
  };

  /**
   * fetch meetings to call api
   * @param {number} per_page posts per pages
   * @param {number} page page number
   */
  var fetchMeetingList = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(per_page, page) {
      var res;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return (0,_services_meetings__WEBPACK_IMPORTED_MODULE_5__/* .getAllMeetings */ .MY)({
                method: "GET",
                params: {
                  per_page: per_page,
                  paged: page
                }
              });
            case 2:
              res = _context2.sent;
              return _context2.abrupt("return", res);
            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return function fetchMeetingList(_x, _x2) {
      return _ref3.apply(this, arguments);
    };
  }();

  /**
   * On finish method that can handle booking create
   * @param {Object} values
   */
  var onFinish = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(values) {
      var res, _res;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (location && location_type) {
                values.location = location;
                values.location_type = location_type;
              }
              setLoading(true);
              if (!id) {
                _context3.next = 8;
                break;
              }
              _context3.next = 5;
              return (0,_libs_bookingLib__WEBPACK_IMPORTED_MODULE_1__/* .updateBookingApi */ .en)({
                id: id,
                values: _objectSpread(_objectSpread({}, values), {}, {
                  meeting_date: selectedDate,
                  staff: selectedStaffIdToBook,
                  start_date: selectedDate,
                  end_time: addTime({
                    startTime: values.start_time,
                    duration: meetingToBook.duration
                  })
                })
              });
            case 5:
              res = _context3.sent;
              _context3.next = 13;
              break;
            case 8:
              _context3.next = 10;
              return (0,_libs_bookingLib__WEBPACK_IMPORTED_MODULE_1__/* .createBookingApi */ .vz)({
                values: _objectSpread(_objectSpread({}, values), {}, {
                  staff: selectedStaffIdToBook,
                  start_date: selectedDate,
                  end_time: addTime({
                    startTime: values.start_time,
                    duration: meetingToBook.duration
                  })
                })
              });
            case 10:
              _res = _context3.sent;
              dispatch({
                type: _actionCreators_actions__WEBPACK_IMPORTED_MODULE_8__/* .actions.CLEAR_BOOKING_RELATED_DATA */ .N.CLEAR_BOOKING_RELATED_DATA,
                payload: {
                  startDateForSlots: new Date(),
                  name: "nadim"
                }
              });
              form.resetFields();
            case 13:
              setLoading(false);
              navigate("/bookings");
            case 15:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return function onFinish(_x3) {
      return _ref4.apply(this, arguments);
    };
  }();

  /**
   * On finish faild method that can handle booking create faild
   * @param {Object} values
   */
  var onFinishFailed = function onFinishFailed(errorInfo) {
    message.error(errorInfo);
  };
  if (loading) {
    return /*#__PURE__*/React.createElement(Skeleton, {
      active: true
    });
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "booking-form-wrapper"
  }, /*#__PURE__*/React.createElement(_components_MainPageHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    title: __("Create New Booking", "timetics")
  }), /*#__PURE__*/React.createElement("div", {
    className: "tt-container-wrapper"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    className: "tt-mb-30",
    size: "large",
    onClick: function onClick() {
      navigate("/bookings");
    }
  }, __("Back to Bookings", "timetics"))), /*#__PURE__*/React.createElement(Form, {
    name: "booking_create_form",
    className: "tt-form-container",
    layout: "vertical",
    autoComplete: "off",
    onFinish: onFinish,
    onFinishFailed: onFinishFailed
    // TODO: need to implement update booking
    ,
    initialValues: booking
  }, /*#__PURE__*/React.createElement(_FormField__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    meetingData: meetingData,
    defaultMeetingId: booking === null || booking === void 0 ? void 0 : (_booking$appointment = booking.appointment) === null || _booking$appointment === void 0 ? void 0 : _booking$appointment.id
  }), /*#__PURE__*/React.createElement(_common_CreateOrUpdate__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    id: id,
    loading: loading,
    type: "primary",
    htmlType: "submit",
    buttonText: id ? __("Update Booking", "timetics") : __("Create Booking", "timetics")
  }))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateBooking);
var addTime = function addTime(_ref5) {
  var _ref5$startTime = _ref5.startTime,
    startTime = _ref5$startTime === void 0 ? "10:30am" : _ref5$startTime,
    _ref5$duration = _ref5.duration,
    duration = _ref5$duration === void 0 ? "60 min" : _ref5$duration;
  var _duration$split = duration.split(" "),
    _duration$split2 = _slicedToArray(_duration$split, 2),
    num = _duration$split2[0],
    type = _duration$split2[1];
  if (type === "hr" || type === "hour") {
    num = num * 60;
  }
  if (type === "min" || type === "minute") {
    num = num;
  }
  var _startTime$split = startTime.split(":"),
    _startTime$split2 = _slicedToArray(_startTime$split, 2),
    hour = _startTime$split2[0],
    minute = _startTime$split2[1];
  var ampm = minute.substring(minute.length - 2);
  var min = parseInt(minute);
  var totalMin = parseInt(hour) * 60 + parseInt(min) + parseInt(num);
  var newHour = Math.floor(totalMin / 60);
  var newMin = totalMin % 60;
  var newTime = "".concat(newHour, ":").concat(newMin).concat(ampm);
  return newTime;
};

/***/ })

}]);