"use strict";
(self["webpackChunktimetics"] = self["webpackChunktimetics"] || []).push([[123],{

/***/ 5123:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ bookings_FormField)
});

// EXTERNAL MODULE: ./node_modules/dayjs/dayjs.min.js
var dayjs_min = __webpack_require__(7484);
var dayjs_min_default = /*#__PURE__*/__webpack_require__.n(dayjs_min);
// EXTERNAL MODULE: ./assets/src/common/TextInput.js
var TextInput = __webpack_require__(6582);
// EXTERNAL MODULE: ./assets/src/common/SelectInput.js
var SelectInput = __webpack_require__(4378);
// EXTERNAL MODULE: ./assets/src/admin/actionCreators/actions.js
var actions = __webpack_require__(3632);
// EXTERNAL MODULE: ./assets/src/frontend/utils/helper.js
var helper = __webpack_require__(4545);
// EXTERNAL MODULE: ./assets/src/admin/context/provider.js + 9 modules
var provider = __webpack_require__(7258);
// EXTERNAL MODULE: ./assets/src/admin/services/meetings.js
var services_meetings = __webpack_require__(3538);
;// CONCATENATED MODULE: ./assets/src/admin/pages/bookings/hooks/useBooking.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


function useBooking() {
  var _useStateValue = (0,provider/* useStateValue */.K)(),
    _useStateValue2 = _slicedToArray(_useStateValue, 2),
    bookingReducer = _useStateValue2[0].booking,
    dispatch = _useStateValue2[1];
  var slots = bookingReducer.slots;
  var covertedSchedules = function covertedSchedules(schedules) {
    var _schedules = {};
    Object.keys(schedules).map(function (item) {
      _schedules[item] = convertSchedulesForUi(schedules[item]);
    });
    return _schedules;
  };
  var getSlotsForSelectedDay = function getSlotsForSelectedDay(_ref) {
    var _slots$days, _data$, _data$$slots;
    var selectedDate = _ref.selectedDate,
      _slots = _ref.slots;
    var __slots = _slots || slots;
    var data = __slots === null || __slots === void 0 ? void 0 : (_slots$days = __slots.days) === null || _slots$days === void 0 ? void 0 : _slots$days.filter(function (item) {
      return dayjs_min_default()(item === null || item === void 0 ? void 0 : item.date).format("YYYY-MM-DD") == dayjs_min_default()(selectedDate).format("YYYY-MM-DD");
    });
    var _singleDaySlots = data === null || data === void 0 ? void 0 : (_data$ = data[0]) === null || _data$ === void 0 ? void 0 : (_data$$slots = _data$.slots) === null || _data$$slots === void 0 ? void 0 : _data$$slots.filter(function (item) {
      return item.status == "available";
    });
    return _singleDaySlots;
  };
  return {
    getSlotsForSelectedDay: getSlotsForSelectedDay
  };
}
/* harmony default export */ const hooks_useBooking = (useBooking);
// EXTERNAL MODULE: ./assets/src/common/icons/Icons.js
var Icons = __webpack_require__(2751);
// EXTERNAL MODULE: ./assets/src/helper/helpers.js
var helpers = __webpack_require__(4903);
;// CONCATENATED MODULE: ./assets/src/admin/pages/bookings/FormField.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || FormField_unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return FormField_arrayLikeToArray(arr); }
function FormField_slicedToArray(arr, i) { return FormField_arrayWithHoles(arr) || FormField_iterableToArrayLimit(arr, i) || FormField_unsupportedIterableToArray(arr, i) || FormField_nonIterableRest(); }
function FormField_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function FormField_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return FormField_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return FormField_arrayLikeToArray(o, minLen); }
function FormField_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function FormField_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function FormField_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var __ = wp.i18n.__;
var _React = React,
  useState = _React.useState,
  useEffect = _React.useEffect,
  useRef = _React.useRef;








var _antd = antd,
  Row = _antd.Row,
  Col = _antd.Col,
  Select = _antd.Select,
  Form = _antd.Form,
  Space = _antd.Space;
var _wp$hooks = wp.hooks,
  adAction = _wp$hooks.adAction,
  doAction = _wp$hooks.doAction;
function FormField(_ref) {
  var _filterData$, _meetingToBook$locati2;
  var meetingData = _ref.meetingData;
  var fp = useRef(null);
  var _useStateValue = (0,provider/* useStateValue */.K)(),
    _useStateValue2 = FormField_slicedToArray(_useStateValue, 2),
    _useStateValue2$ = _useStateValue2[0],
    meetingReducer = _useStateValue2$.meeting,
    bookingReducer = _useStateValue2$.booking,
    dispatch = _useStateValue2[1];
  var _useBooking = hooks_useBooking(),
    getSlotsForSelectedDay = _useBooking.getSlotsForSelectedDay;
  var meeting = meetingReducer.meeting,
    meetings = meetingReducer.meetings;
  var selectedStaffIdToBook = bookingReducer.selectedStaffIdToBook,
    meetingToBook = bookingReducer.meetingToBook,
    _bookingReducer$selec = bookingReducer.selectedDate,
    selectedDate = _bookingReducer$selec === void 0 ? dayjs_min_default()(new Date()).format("YYYY-MM-DD") : _bookingReducer$selec,
    _bookingReducer$unava = bookingReducer.unavailableDayNumber,
    unavailableDayNumber = _bookingReducer$unava === void 0 ? [] : _bookingReducer$unava,
    selectedDaysSlots = bookingReducer.selectedDaysSlots,
    slots = bookingReducer.slots,
    renderFlatPicker = bookingReducer.renderFlatPicker,
    startDateForSlots = bookingReducer.startDateForSlots,
    meetingStaffs = bookingReducer.meetingStaffs,
    booking = bookingReducer.booking,
    selectedMeetingId = bookingReducer.selectedMeetingId;
  useEffect(function () {
    if (typeof window !== "undefined" && window.flatpickr && fp.current) {
      var _meetingToBook$availa;
      var inputEl = fp.current;
      var flatpickrInstance = window.flatpickr(inputEl, {
        defaultDate: selectedDate ? selectedDate : null,
        //TODO need to add default date if selected date is available
        altFormat: "F j, Y",
        dateFormat: "Y-m-d",
        minDate: "today",
        monthSelectorType: "static",
        maxDate: meetingToBook !== null && meetingToBook !== void 0 && meetingToBook.availability ? meetingToBook === null || meetingToBook === void 0 ? void 0 : (_meetingToBook$availa = meetingToBook.availability) === null || _meetingToBook$availa === void 0 ? void 0 : _meetingToBook$availa.end : new Date().fp_incr(30),
        disable: [function (date) {
          return _toConsumableArray(unavailableDayNumber).includes(date.getDay());
        }],
        // locale: {
        //     firstDayOfWeek: convertWeekDayToNumber(
        //         window?.timetics?.start_of_week
        //     ), // start week on Monday
        // },

        onChange: function onChange(selectedDates, dateStr, instance) {
          var day = (0,helper/* getWeekDay */.YV)(new Date(dateStr));
          dispatch({
            type: actions/* actions.SET_SELECTED_DATE */.N.SET_SELECTED_DATE,
            payload: {
              selectedDate: dateStr,
              selectedDay: day
            }
          });
        },
        onMonthChange: function onMonthChange(selectedDates, dateStr, instance) {
          var newDateStr = dayjs_min_default()().month(instance.currentMonth).startOf("month").toDate();
          dispatch({
            type: actions/* actions.SET_BOOKING_STATE */.N.SET_BOOKING_STATE,
            payload: {
              startDateForSlots: dayjs_min_default()(newDateStr).format("YYYY-MM-DD")
            }
          });
        }
      });
      return function () {
        flatpickrInstance.destroy();
      };
    }
  }, [renderFlatPicker]);
  useEffect(function () {
    var loadData = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _yield$getSlots, data, _selectedDaysSlots;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(selectedStaffIdToBook && meetingToBook !== null && meetingToBook !== void 0 && meetingToBook.id)) {
                  _context.next = 7;
                  break;
                }
                _context.next = 3;
                return (0,services_meetings/* getSlots */.FJ)({
                  method: "GET"
                }, _objectSpread({
                  staffId: selectedStaffIdToBook,
                  meetingId: meetingToBook === null || meetingToBook === void 0 ? void 0 : meetingToBook.id
                }, (0,helper/* getDateRangeOfStartDateAndEndOfTheMonth */.$N)(startDateForSlots || dayjs_min_default()().format("YYYY-MM-DD"))));
              case 3:
                _yield$getSlots = _context.sent;
                data = _yield$getSlots.data;
                _selectedDaysSlots = getSlotsForSelectedDay({
                  slots: data.data,
                  selectedDate: dayjs_min_default()(new Date()).format("YYYY-MM-DD")
                });
                dispatch({
                  type: actions/* actions.SET_MEETING_SLOTS */.N.SET_MEETING_SLOTS,
                  payload: {
                    slots: data === null || data === void 0 ? void 0 : data.data,
                    selectedDate: selectedDate ? selectedDate : dayjs_min_default()(new Date()).format("YYYY-MM-DD"),
                    selectedDaysSlots: _selectedDaysSlots
                  }
                });
              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return function loadData() {
        return _ref2.apply(this, arguments);
      };
    }();
    loadData();
  }, [selectedStaffIdToBook, startDateForSlots]);

  /**
   *Called On change of selected date
   */
  useEffect(function () {
    // console.log("selectedDate: ", selectedDate);
    var _selectedDaysSlots = getSlotsForSelectedDay({
      selectedDate: dayjs_min_default()(selectedDate).format("YYYY-MM-DD")
    });
    dispatch({
      type: actions/* actions.SET_SELECTED_DATE */.N.SET_SELECTED_DATE,
      payload: {
        selectedDaysSlots: _selectedDaysSlots
      }
    });
  }, [selectedDate]);

  /**
   * Meeting title on change get value
   * @param {number} value selected value
   */
  var meetingOnChange = function meetingOnChange(value) {
    var _meetingToBook$;
    if (!value) {
      dispatch({
        type: actions/* actions.SET_MEETING_TO_BOOK */.N.SET_MEETING_TO_BOOK,
        payload: {
          meetingToBook: undefined,
          staffsOfMeetingToBook: undefined,
          selectedStaffIdToBook: undefined,
          selectedDate: null,
          selectedMeetingId: null
        }
      });
      return;
    }
    dispatch({
      type: actions/* actions.SET_BOOKING_STATE */.N.SET_BOOKING_STATE,
      payload: {
        selectedMeetingId: value
      }
    });
    var meetingToBook = meetings === null || meetings === void 0 ? void 0 : meetings.filter(function (item) {
      return (item === null || item === void 0 ? void 0 : item.id) == value;
    });
    var staffsOfMeetingToBook = meetingToBook === null || meetingToBook === void 0 ? void 0 : (_meetingToBook$ = meetingToBook[0]) === null || _meetingToBook$ === void 0 ? void 0 : _meetingToBook$.staff;
    dispatch({
      type: actions/* actions.SET_MEETING_TO_BOOK */.N.SET_MEETING_TO_BOOK,
      payload: {
        meetingToBook: meetingToBook === null || meetingToBook === void 0 ? void 0 : meetingToBook[0],
        staffsOfMeetingToBook: staffsOfMeetingToBook,
        meetingStaffs: staffsOfMeetingToBook,
        renderFlatPicker: new Date().getTime()
        // selectedStaffIdToBook: staffsOfMeetingToBook?.[0]?.id,
        // selectedDate: dayjs(new Date()).format("YYYY-MM-DD"),
      }
    });
  };

  var onSelectStaff = function onSelectStaff(value) {
    var selectedScheduleBasedOnStaff = meetingToBook === null || meetingToBook === void 0 ? void 0 : meetingToBook.schedule[value];
    var offDays = (0,helper/* getDayNumbers */.HD)(selectedScheduleBasedOnStaff);
    dispatch({
      type: actions/* actions.SET_SELECTED_STAFF_ID_TO_BOOK */.N.SET_SELECTED_STAFF_ID_TO_BOOK,
      payload: {
        selectedStaffIdToBook: value,
        unavailableDayNumber: offDays,
        renderFlatPicker: new Date().getTime()
      }
    });
  };

  /**
   * get selected meeting data
   */
  var filterData = meetings === null || meetings === void 0 ? void 0 : meetings.filter(function (item) {
    return (item === null || item === void 0 ? void 0 : item.id) == selectedMeetingId;
  });
  var meetingDate = filterData === null || filterData === void 0 ? void 0 : (_filterData$ = filterData[0]) === null || _filterData$ === void 0 ? void 0 : _filterData$.availability;
  // const meetingStaff = filterData?.[0]?.staff;

  /**
   * disable date
   * @param {*} current
   * @returns true or false
   */

  function disabledDate(current) {
    var startDate = dayjs_min_default()(meetingDate === null || meetingDate === void 0 ? void 0 : meetingDate.start);
    var endDate = dayjs_min_default()(meetingDate === null || meetingDate === void 0 ? void 0 : meetingDate.end).add(1, "day");
    return current < startDate || current > endDate;
  }

  /**
   * booking status
   */
  var status = [{
    id: 1,
    name: __("Pending", "timetics"),
    value: "pending"
  }, {
    id: 2,
    name: __("Approved", "timetics"),
    value: "approved"
  }, {
    id: 2,
    name: __("Cancel", "timetics"),
    value: "cancel"
  }];
  var showField = !!(filterData !== null && filterData !== void 0 && filterData.length) || !!selectedMeetingId ? true : false;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TextInput/* default */.Z, {
    label: __("Customer's name", "timetics"),
    name: "first_name",
    type: "text",
    size: "small",
    rules: [{
      required: true,
      message: __("Customer name is required!", "timetics")
    }],
    placeholder: __("Jhon Deo", "timetics")
  }), /*#__PURE__*/React.createElement(TextInput/* default */.Z, {
    label: __("Customer's Email", "timetics"),
    name: "email",
    type: "email",
    size: "small",
    rules: [{
      required: true,
      message: "Customer email is required!"
    }],
    placeholder: __("name@yourdomain.com", "timetics")
  }), /*#__PURE__*/React.createElement(SelectInput/* default */.Z, {
    label: __("Select Meeting", "timetics"),
    key: "appointment",
    options: meetingData,
    fieldNames: {
      label: "name",
      value: "id"
    },
    onChange: meetingOnChange,
    name: "appointment",
    showSearch: true,
    allowClear: true,
    placeholder: __("Please Select Your Meeting", "timetics"),
    filterOption: function filterOption(input, option) {
      var _option$name;
      return ((_option$name = option === null || option === void 0 ? void 0 : option.name) !== null && _option$name !== void 0 ? _option$name : "").includes(input);
    },
    rules: [{
      required: true,
      message: __("Meeting title is required", "timetics")
    }]
  }), showField && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SelectInput/* default */.Z, {
    label: __("Select Host", "timetics"),
    key: "host",
    style: {
      width: "100%"
    },
    options: meetingStaffs,
    fieldNames: {
      label: "full_name",
      value: "id"
    }
    // default/initial value remain set for the name.
    ,
    name: "staff",
    placeholder: __("Select Host", "timetics"),
    onChange: onSelectStaff
    // defaultValue={selectedStaffIdToBook}
    ,
    rules: [{
      required: true,
      message: __("Host is required", "timetics")
    }]
  }), (meetingToBook === null || meetingToBook === void 0 ? void 0 : meetingToBook.type) == "seat" ? /*#__PURE__*/React.createElement(TextInput/* default */.Z, {
    label: __("Number of invitee", "timetics"),
    name: "seat",
    defaultValue: 1,
    type: "number",
    size: "small",
    placeholder: __("Enter Number of invitee", "timetics")
  }) : null, /*#__PURE__*/React.createElement(Form.Item, {
    label: __("Select Location", "timetics"),
    className: "timetics-input",
    key: "location_type",
    style: {
      width: "100%"
    }
    // options={meetingToBook?.locations}
    // fieldNames={{
    //     label: "location_type",
    //     value: "location_type",
    // }}
    // default/initial value remain set for the name.
    ,
    name: "location_type",
    placeholder: __("Select Location", "timetics")
  }, /*#__PURE__*/React.createElement(Select, {
    size: "large",
    className: "tt-location-item"
    // name={"location_type"}
    ,
    key: "location_type",
    onChange: function onChange(value) {
      var _meetingToBook$locati;
      dispatch({
        type: actions/* actions.SET_BOOKING_STATE */.N.SET_BOOKING_STATE,
        payload: _objectSpread({}, meetingToBook === null || meetingToBook === void 0 ? void 0 : (_meetingToBook$locati = meetingToBook.locations) === null || _meetingToBook$locati === void 0 ? void 0 : _meetingToBook$locati.filter(function (item) {
          return item.location_type == value;
        })[0])
      });
    }
  }, meetingToBook === null || meetingToBook === void 0 ? void 0 : (_meetingToBook$locati2 = meetingToBook.locations) === null || _meetingToBook$locati2 === void 0 ? void 0 : _meetingToBook$locati2.map(function (option, i) {
    return /*#__PURE__*/React.createElement(Select.Option, {
      key: "".concat(i, "-meeting-location"),
      value: option.location_type
    }, /*#__PURE__*/React.createElement(Space, {
      className: "tt-location-option"
    }, locationIcons[option.location_type], option.location_type));
  }))), selectedStaffIdToBook && /*#__PURE__*/React.createElement(Row, {
    gutter: [20, 20]
  }, /*#__PURE__*/React.createElement(Col, {
    span: 12
  }, /*#__PURE__*/React.createElement(Form.Item, {
    className: "timetics-input",
    label: "Select date"
    // name={"start_date"}
    // rules={[
    //     {
    //         required: true,
    //         message: __(
    //             "Date is required",
    //             "timetics"
    //         ),
    //     },
    // ]}
  }, /*#__PURE__*/React.createElement("input", {
    placeholder: "Select booking date",
    ref: fp,
    type: "text",
    className: "tt-flat-picker-input ant-input ant-input-lg",
    id: "booking-date",
    name: "booking-date"
  }))), /*#__PURE__*/React.createElement(Col, {
    span: 12
  }, /*#__PURE__*/React.createElement(SelectInput/* default */.Z, {
    label: __("Select time", "timetics"),
    key: "time",
    style: {
      width: "100%"
    },
    options: selectedDaysSlots === null || selectedDaysSlots === void 0 ? void 0 : selectedDaysSlots.filter(function (slot) {
      return (slot === null || slot === void 0 ? void 0 : slot.status) == "available";
    }),
    fieldNames: {
      label: "start_time",
      value: "start_time"
    },
    name: "start_time",
    placeholder: __("Select Meeting", "timetics"),
    rules: [{
      required: true,
      message: __("Time is required", "timetics")
    }]
  })))), /*#__PURE__*/React.createElement(SelectInput/* default */.Z
  // defaultValue={__("Approved", "timetics")}
  , {
    className: "tt-booking-status-field",
    popupClassName: "tt-booking-status-options",
    style: {
      width: "100%"
    },
    key: "status",
    data: status,
    fieldNames: {
      label: "name",
      value: "value"
    },
    label: __("Status", "timetics"),
    name: "status",
    placeholder: __("Select Booking status", "timetics")
  }));
}
/* harmony default export */ const bookings_FormField = (FormField);
var locationIcons = {
  "google-meet": /*#__PURE__*/React.createElement(Icons/* GoogleMeet */.gB, null),
  "phone-call": /*#__PURE__*/React.createElement(Icons/* Phone */.LP, null),
  "in-person-meeting": /*#__PURE__*/React.createElement(Icons/* Location */.Ye, null)
};

/***/ }),

/***/ 4545:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$N": () => (/* binding */ getDateRangeOfStartDateAndEndOfTheMonth),
/* harmony export */   "HD": () => (/* binding */ getDayNumbers),
/* harmony export */   "YV": () => (/* binding */ getWeekDay)
/* harmony export */ });
/* unused harmony exports getDayCountOfMonth, getDaysThatNotAvailable, getDateListFromDayStrings, getTimeSlot, convertMilisecondsToCurrentDateAsMiliseconds, getDayNumber, isNoPayment, isLocalPayment, isFreeMeeting, getPaymentMethods, getStepNo, genrateSeats */
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7484);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);


/**
 *Handler for getting the day of the week from a date.
 * @param {Object} date Js Date object
 * @returns {String} Day of the week
 */
function getWeekDay(date) {
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return days[date.getDay()];
}

/**
 *Handler for getting the day count of a month.
 * @param {Object} date Js Date object
 * @returns {Number} Day count of the month
 */
var getDayCountOfMonth = function getDayCountOfMonth() {
  var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
  date.setDate(1); // Set date to the first of the month
  date.setMonth(date.getMonth() + 1); // Set date to the first of the next month
  date.setDate(date.getDate() - 1); // Set date to the last day of the current month
  var dayCount = date.getDate();
  return dayCount;
};
var getDaysThatNotAvailable = function getDaysThatNotAvailable(schedules) {
  if (!schedules) return [];
  var days = schedules.filter(function (day) {
    return !day.status;
  });
  return days.map(function (day) {
    return day.name.toLocaleLowerCase();
  });
};
var getDateListFromDayStrings = function getDateListFromDayStrings(_ref) {
  var _ref$days = _ref.days,
    days = _ref$days === void 0 ? [] : _ref$days,
    _ref$currentMonth = _ref.currentMonth,
    currentMonth = _ref$currentMonth === void 0 ? new Date().getMonth() : _ref$currentMonth;
  var unavailableDates = [];
  var date = new Date();
  var dateForCurrentMonth = new Date(date.setMonth(currentMonth));
  // get currentMonth day count
  var dayCount = getDayCountOfMonth(new Date(dateForCurrentMonth));
  for (var i = 1; i <= dayCount; i++) {
    var _date = new Date(dateForCurrentMonth);
    _date.setDate(i);
    var day = _date.toLocaleDateString("en", {
      weekday: "long"
    }).toLocaleLowerCase();
    if (days.includes(day)) {
      unavailableDates.push(dayjs(_date).format("YYYY-MM-DD"));
    }
  }
  return unavailableDates;
};
var getTimeSlot = function getTimeSlot(_ref2) {
  var schedule = _ref2.schedule,
    selectedDate = _ref2.selectedDate,
    selectedDay = _ref2.selectedDay,
    duration = _ref2.duration;
  //get number from du
  var num = parseInt(duration);
  //get unit from du
  var splittedDuration = duration.split(" ");
  //convert unit to seconds
  var multiplier = splittedDuration[1] == "min" ? 60 * 1000 : 60 * 60 * 1000;
  var durationInMilliseconds = multiplier * splittedDuration[0];
  var day = schedule.find(function (day) {
    return day.name === selectedDay;
  });

  // divide the time slots into 30 minutes intervals and return the time slots

  var timeSlots = [];
  var startTime = convertMilisecondsToCurrentDateAsMiliseconds(day.schedules[0].start.value, selectedDate);
  var endTime = convertMilisecondsToCurrentDateAsMiliseconds(day.schedules[0].end.value, selectedDate);
  for (var i = startTime; endTime - i >= durationInMilliseconds; i += durationInMilliseconds) {
    var date = new Date(selectedDate);
    date.setHours(0, 0, 0, 0);
    date.setHours(new Date(i).getHours(), new Date(i).getMinutes(), new Date(i).getSeconds(), new Date(i).getMilliseconds());
    timeSlots.push(date.getTime());
  }
  return timeSlots;
};
var convertMilisecondsToCurrentDateAsMiliseconds = function convertMilisecondsToCurrentDateAsMiliseconds(miliseconds, selectedDate) {
  var date = new Date(miliseconds);
  // date.setHours(0, 0, 0, 0);
  date.setDate(new Date(selectedDate).getDate());
  date.setHours(new Date(date).getHours(), new Date(date).getMinutes(), new Date(date).getSeconds(), new Date(date).getMilliseconds());
  return date.getTime();
};
var getDayNumber = function getDayNumber(_ref3) {
  var days = _ref3.days;
  var _days = {
    sunday: 0,
    monday: 1,
    tuesday: 2,
    wednesday: 3,
    thursday: 4,
    friday: 5,
    saturday: 6
  };

  //convert days to numbers based on _days object
  var dayNumbers = days.map(function (day) {
    return _days[day];
  });
  return dayNumbers;
};
var getDateRangeOfStartDateAndEndOfTheMonth = function getDateRangeOfStartDateAndEndOfTheMonth(date) {
  //get date range of the month based on start date
  var startDate = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date).toDate();
  var endDate = new Date(date);
  endDate.setDate(getDayCountOfMonth(startDate));
  return {
    startDate: dayjs__WEBPACK_IMPORTED_MODULE_0___default()(dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date).toDate()).format("YYYY-MM-DD"),
    endDate: dayjs__WEBPACK_IMPORTED_MODULE_0___default()(endDate).format("YYYY-MM-DD")
  };
};
var getDayNumbers = function getDayNumbers(schedule) {
  var _days = {
    sun: 0,
    mon: 1,
    tue: 2,
    wed: 3,
    thu: 4,
    fri: 5,
    sat: 6
  };

  //convert days to numbers based on _days object
  var dayNumbers = Object.keys(schedule).map(function (day) {
    if (schedule[day].length < 1) {
      return _days["".concat(String(day).toLocaleLowerCase())];
    }
  });
  //remove undefined values
  var _dayNumbers = dayNumbers.filter(function (day) {
    return day !== undefined;
  });
  return _dayNumbers;
};
var isNoPayment = function isNoPayment(paymentMethods) {
  var noPayment = paymentMethods === null || paymentMethods === void 0 ? void 0 : paymentMethods.every(function (method) {
    return !method.status;
  });
  return noPayment;
};
var isLocalPayment = function isLocalPayment(paymentMethods) {
  var localPayment = paymentMethods.some(function (method) {
    return method.name == "Local Pay" && method.status;
  });
  return localPayment;
};
var isFreeMeeting = function isFreeMeeting(_ref4) {
  var meeting = _ref4.meeting;
  var freeMeeting = meeting.price == 0 || !!meeting.price == false;
  return freeMeeting;
};
var getPaymentMethods = function getPaymentMethods(paymentMethods) {
  var methods = paymentMethods.filter(function (method) {
    return method.status;
  });
  return methods;
};
var getStepNo = function getStepNo(_ref5) {
  var isFree = _ref5.isFree,
    noPayment = _ref5.noPayment,
    isLocalPaymentActive = _ref5.isLocalPaymentActive,
    selectedPaymentMethod = _ref5.selectedPaymentMethod,
    meetingType = _ref5.meetingType;
  var status = 3;
  if (isFree) {
    status = 1;
    return status;
  }
  if (noPayment) {
    status = 1;
    return status;
  }
  if (isLocalPaymentActive && selectedPaymentMethod == "Local Pay") {
    status = 1;
    return status;
  }
  if (selectedPaymentMethod == "Paypal" || selectedPaymentMethod == "Stripe") {
    status = meetingType == "seat" ? 4 : 3;
  }
  return status;
};

// demo/test for seat generation
var genrateSeats = function genrateSeats(_ref6) {
  var _ref6$row = _ref6.row,
    row = _ref6$row === void 0 ? 4 : _ref6$row,
    _ref6$column = _ref6.column,
    column = _ref6$column === void 0 ? 12 : _ref6$column,
    _ref6$label = _ref6.label,
    label = _ref6$label === void 0 ? "a,Z|0,100" : _ref6$label,
    _ref6$ticketType = _ref6.ticketType,
    ticketType = _ref6$ticketType === void 0 ? "vip" : _ref6$ticketType;
  var seats = [];
  var labels = label.split("|");
  var rowLabels = labels[0].split(",");
  var columnLabels = labels[1].split(",");
  var rowLabelStart = rowLabels[0];
  var rowLabelEnd = rowLabels[1];
  var columnLabelStart = columnLabels[0];
  var columnLabelEnd = columnLabels[1];
  for (var i = 0; i < row; i++) {
    var _row = [];
    for (var j = 0; j < column; j++) {
      var seat = {
        row: String.fromCharCode(rowLabelStart.charCodeAt(0) + i),
        column: +(columnLabelStart + j),
        status: "available",
        type: ticketType
      };
      _row.push(seat);
    }
    seats.push(_row);
  }
};
genrateSeats({
  row: 4,
  column: 12,
  label: "a,Z|0,100",
  ticketType: "vip"
});

/***/ })

}]);