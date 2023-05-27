"use strict";
(self["webpackChunktimetics"] = self["webpackChunktimetics"] || []).push([[179],{

/***/ 1179:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ staff_StaffList)
});

// EXTERNAL MODULE: ./assets/src/admin/services/staffs.js
var staffs = __webpack_require__(7170);
// EXTERNAL MODULE: ./assets/src/admin/context/provider.js + 9 modules
var provider = __webpack_require__(7258);
// EXTERNAL MODULE: ./assets/src/admin/actionCreators/actions.js
var actions = __webpack_require__(3632);
// EXTERNAL MODULE: ./assets/src/admin/components/MainPageHeader.js
var MainPageHeader = __webpack_require__(8494);
// EXTERNAL MODULE: ./assets/src/admin/hooks/useBulkDelete.js
var useBulkDelete = __webpack_require__(5278);
// EXTERNAL MODULE: ./assets/src/admin/hooks/useDebounceSearch.js
var useDebounceSearch = __webpack_require__(6885);
// EXTERNAL MODULE: ./node_modules/react-router/dist/index.js
var dist = __webpack_require__(9250);
// EXTERNAL MODULE: ./assets/src/common/icons/Icons.js
var Icons = __webpack_require__(2751);
;// CONCATENATED MODULE: ./assets/src/admin/pages/staff/TableHeader.js
var TableHeader_React = window.React;
var _antd = antd,
  Button = _antd.Button,
  Space = _antd.Space;
var __ = wp.i18n.__;


function TableHeader(_ref) {
  var showDeleteConfirm = _ref.showDeleteConfirm;
  var navigate = (0,dist/* useNavigate */.s0)();
  /**
   *Handler for edit Staff
   * @param {staff} e js staff Object.
   * @param {Object} staff single staff object.
   */
  var editStaff = function editStaff(record) {
    navigate("update?id=".concat(record.id));
  };

  /**
   *   Staff data table column set
   */
  var columns = [{
    title: __("ID", "timetics"),
    dataIndex: "id",
    key: "id"
  }, {
    title: __("Name", "timetics"),
    dataIndex: "full_name",
    key: "full_name"
  }, {
    title: __("Email", "timetics"),
    dataIndex: "email",
    key: "email"
  }, {
    title: __("Phone", "timetics"),
    dataIndex: "phone",
    key: "phone"
  }, {
    title: "Action",
    key: "action",
    render: function render(_, record) {
      var _timetics;
      return /*#__PURE__*/TableHeader_React.createElement(Space, {
        className: "tt-action-wrap",
        wrap: true
      }, (record === null || record === void 0 ? void 0 : record.status) == 1 || ((_timetics = timetics) === null || _timetics === void 0 ? void 0 : _timetics.current_user_id) == record.id ? /*#__PURE__*/TableHeader_React.createElement(Button, {
        onClick: function onClick() {
          editStaff(record);
        }
      }, /*#__PURE__*/TableHeader_React.createElement(Space, null, /*#__PURE__*/TableHeader_React.createElement(Icons/* EditIcon */.dY, null), __("Manage", "timetics"))) : /*#__PURE__*/TableHeader_React.createElement(Button, {
        disabled: true,
        type: "warning"
      }, __("Invitation pending", "timetics")), /*#__PURE__*/TableHeader_React.createElement(Button, {
        onClick: function onClick() {
          showDeleteConfirm(record === null || record === void 0 ? void 0 : record.id);
        },
        danger: true
      }, /*#__PURE__*/TableHeader_React.createElement(Space, null, /*#__PURE__*/TableHeader_React.createElement(Icons/* DeleteIcon */.pJ, null), __("Remove", "timetics"))));
    }
  }];
  return {
    columns: columns
  };
}
/* harmony default export */ const staff_TableHeader = (TableHeader);
// EXTERNAL MODULE: ./assets/src/common/SelectInput.js
var SelectInput = __webpack_require__(4378);
;// CONCATENATED MODULE: ./assets/src/admin/pages/staff/HeaderAction.js


var HeaderAction_ = wp.i18n.__;

var HeaderAction_antd = antd,
  HeaderAction_Button = HeaderAction_antd.Button,
  Row = HeaderAction_antd.Row,
  Col = HeaderAction_antd.Col,
  Form = HeaderAction_antd.Form,
  Input = HeaderAction_antd.Input;
function HeaderAction(_ref) {
  var searchHandler = _ref.searchHandler;
  var navigate = (0,dist/* useNavigate */.s0)();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "tt-submenu-action-wrapper tt-mb-30"
  }, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, {
    xs: {
      span: 24
    },
    sm: {
      span: 12
    },
    xl: {
      span: 4
    }
  }, /*#__PURE__*/React.createElement(HeaderAction_Button, {
    onClick: function onClick() {
      navigate("create-new");
    },
    size: "large",
    type: "primary"
  }, HeaderAction_("Add New", "timetics"))), /*#__PURE__*/React.createElement(Col, {
    xs: {
      span: 24
    },
    sm: {
      span: 12
    },
    xl: {
      span: 4,
      offset: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "input-search-field"
  }, /*#__PURE__*/React.createElement(Form.Item, null, /*#__PURE__*/React.createElement(Input, {
    type: "text",
    suffix: /*#__PURE__*/React.createElement(Icons/* SearchIcon */.W1, null),
    placeholder: HeaderAction_("Search", "timetics"),
    onChange: function onChange(e) {
      searchHandler(e.target.value);
    }
  })))))));
}
/* harmony default export */ const staff_HeaderAction = (HeaderAction);
;// CONCATENATED MODULE: ./assets/src/admin/pages/staff/StaffList.js
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










var _React = React,
  useState = _React.useState,
  useEffect = _React.useEffect;
var StaffList_antd = antd,
  Table = StaffList_antd.Table,
  StaffList_Button = StaffList_antd.Button,
  Modal = StaffList_antd.Modal,
  Skeleton = StaffList_antd.Skeleton,
  Empty = StaffList_antd.Empty,
  StaffList_Row = StaffList_antd.Row,
  StaffList_Col = StaffList_antd.Col,
  StaffList_Input = StaffList_antd.Input,
  StaffList_Form = StaffList_antd.Form,
  StaffList_Space = StaffList_antd.Space;
var StaffList_confirm = Modal.confirm;
var StaffList_ = wp.i18n.__;
function StaffList() {
  var _useStateValue = (0,provider/* useStateValue */.K)(),
    _useStateValue2 = _slicedToArray(_useStateValue, 2),
    staff = _useStateValue2[0].staff,
    dispatch = _useStateValue2[1];
  var _useState = useState(true),
    _useState2 = _slicedToArray(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];
  var staffData = staff.staffs;
  var _useState3 = useState(1),
    _useState4 = _slicedToArray(_useState3, 2),
    pageNumber = _useState4[0],
    setPageNumber = _useState4[1];
  var _useState5 = useState(20),
    _useState6 = _slicedToArray(_useState5, 2),
    perPage = _useState6[0],
    setPerPage = _useState6[1];
  var _useState7 = useState(),
    _useState8 = _slicedToArray(_useState7, 2),
    count = _useState8[0],
    setCount = _useState8[1];

  /**
   * get all staff
   */
  var fetchAllStaffs = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _res$data, _res$data$data, _res$data2, _res$data2$data;
      var res;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0,staffs/* getAllStaff */.iS)({
                method: "GET",
                params: {
                  per_page: perPage,
                  paged: pageNumber
                }
              });
            case 2:
              res = _context.sent;
              setLoading(false);
              dispatch({
                type: actions/* actions.SET_STAFFS */.N.SET_STAFFS,
                payload: res === null || res === void 0 ? void 0 : (_res$data = res.data) === null || _res$data === void 0 ? void 0 : (_res$data$data = _res$data.data) === null || _res$data$data === void 0 ? void 0 : _res$data$data.items
              });
              setCount(res === null || res === void 0 ? void 0 : (_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : (_res$data2$data = _res$data2.data) === null || _res$data2$data === void 0 ? void 0 : _res$data2$data.total);
            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return function fetchAllStaffs() {
      return _ref.apply(this, arguments);
    };
  }();

  // bulk delete custom hooks call
  var _useBulkDelete = (0,useBulkDelete/* default */.Z)({
      setLoading: setLoading,
      deleteAPi: staffs/* bulkDeleteStaffs */.cm,
      data: staffData,
      fetchAllData: fetchAllStaffs,
      action_type: actions/* actions.SET_STAFFS */.N.SET_STAFFS
    }),
    rowSelection = _useBulkDelete.rowSelection,
    selectedRowKeys = _useBulkDelete.selectedRowKeys,
    bulkDelete = _useBulkDelete.bulkDelete;
  var hasSelected = selectedRowKeys.length > 0;

  // search debounce custom hooks call
  var _useDebounceSearch = (0,useDebounceSearch/* default */.Z)({
      SearchApi: staffs/* staffSearch */.sK,
      setLoading: setLoading,
      perPage: perPage,
      pageNumber: pageNumber,
      action_type: actions/* actions.SET_STAFFS */.N.SET_STAFFS,
      setCount: setCount
    }),
    searchHandler = _useDebounceSearch.searchHandler;

  /**
   *  api call for get all staff
   */
  useEffect(function () {
    fetchAllStaffs();
  }, [pageNumber, perPage]);

  /**
   * single staff delete
   * @param {*} id staff id
   */
  var deleteSingleStaff = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(id) {
      var _res$data3;
      var res;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return (0,staffs/* deleteStaff */.nS)({
                method: "DELETE"
              }, id);
            case 2:
              res = _context2.sent;
              if ((res === null || res === void 0 ? void 0 : (_res$data3 = res.data) === null || _res$data3 === void 0 ? void 0 : _res$data3.status_code) == 200) {
                dispatch({
                  type: actions/* actions.SET_STAFFS */.N.SET_STAFFS,
                  payload: staffData.filter(function (item) {
                    return item.id != id;
                  })
                });
              }
            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return function deleteSingleStaff(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  /**
   * @param id
   * Modal open when click delete button
   */
  var showDeleteConfirm = function showDeleteConfirm(id) {
    StaffList_confirm({
      title: StaffList_("Are you sure delete this staff?", "timetics"),
      okText: StaffList_("Yes", "timetics"),
      okType: "danger",
      cancelText: StaffList_("No", "timetics"),
      onOk: function onOk() {
        deleteSingleStaff(id);
      }
    });
  };
  var _TableHeader = staff_TableHeader({
      showDeleteConfirm: showDeleteConfirm
    }),
    columns = _TableHeader.columns;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(MainPageHeader/* default */.Z, {
    title: StaffList_("Staffs", "timetics")
  }), /*#__PURE__*/React.createElement(staff_HeaderAction, {
    searchHandler: searchHandler
  }), hasSelected && /*#__PURE__*/React.createElement(StaffList_Space, {
    className: "tt-bulk-delete tt-mb-20"
  }, /*#__PURE__*/React.createElement(StaffList_Button, {
    danger: true,
    onClick: function onClick(e) {
      StaffList_confirm({
        title: StaffList_("Are you sure delete selected staffs?", "timetics"),
        okText: StaffList_("Yes", "timetics"),
        okType: "danger",
        cancelText: StaffList_("No", "timetics"),
        onOk: function onOk() {
          bulkDelete();
        }
      });
    },
    loading: loading
  }, StaffList_("Bulk Delete", "timetics")), /*#__PURE__*/React.createElement("span", null, selectedRowKeys.length, " ", StaffList_("items Selected", "timetics"))), /*#__PURE__*/React.createElement(Table, {
    rowSelection: _objectSpread({
      columnWidth: 40
    }, rowSelection),
    rowClassName: function rowClassName(record) {
      return record.status == 0 && "disabled-row";
    },
    columns: columns,
    dataSource: staffData,
    rowKey: function rowKey(record) {
      return record.id;
    },
    loading: loading,
    locale: {
      emptyText: loading ? /*#__PURE__*/React.createElement(Skeleton, {
        active: true
      }) : /*#__PURE__*/React.createElement(Empty, null)
    },
    sticky: true,
    scroll: {
      x: 1024,
      y: "calc(100vh - 250px)"
    }
    // tableLayout="auto"
    ,
    pagination: {
      total: count,
      defaultPageSize: perPage,
      showSizeChanger: true,
      pageSizeOptions: ["10", "20", "50", "100"],
      className: ["tt-ant-pagination"],
      onChange: function onChange(page_no, perPage) {
        setPageNumber(page_no);
        setPerPage(perPage);
        setLoading(true);
      }
    }
  }));
}
/* harmony default export */ const staff_StaffList = (StaffList);

/***/ }),

/***/ 7170:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OF": () => (/* binding */ integrationList),
/* harmony export */   "Qf": () => (/* binding */ updateStaff),
/* harmony export */   "cm": () => (/* binding */ bulkDeleteStaffs),
/* harmony export */   "iS": () => (/* binding */ getAllStaff),
/* harmony export */   "jK": () => (/* binding */ createStaff),
/* harmony export */   "jT": () => (/* binding */ getSingleStaff),
/* harmony export */   "nS": () => (/* binding */ deleteStaff),
/* harmony export */   "oN": () => (/* binding */ integrationRevoke),
/* harmony export */   "sK": () => (/* binding */ staffSearch)
/* harmony export */ });
/* unused harmony export updateStaffPassword */
/* harmony import */ var _axios_requestConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2593);
/* harmony import */ var _apiEndPoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7213);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var getAllStaff = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(config) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", (0,_axios_requestConfig__WEBPACK_IMPORTED_MODULE_0__/* .request */ .Q)(_apiEndPoints__WEBPACK_IMPORTED_MODULE_1__/* .apiEndpoint.staffs.staff */ ._.staffs.staff, config));
          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return function getAllStaff(_x) {
    return _ref.apply(this, arguments);
  };
}();
var createStaff = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(config) {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", (0,_axios_requestConfig__WEBPACK_IMPORTED_MODULE_0__/* .request */ .Q)(_apiEndPoints__WEBPACK_IMPORTED_MODULE_1__/* .apiEndpoint.staffs.staff */ ._.staffs.staff, config));
          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return function createStaff(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
var deleteStaff = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(config, id) {
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", (0,_axios_requestConfig__WEBPACK_IMPORTED_MODULE_0__/* .request */ .Q)("".concat(_apiEndPoints__WEBPACK_IMPORTED_MODULE_1__/* .apiEndpoint.staffs.staff */ ._.staffs.staff, "/").concat(id), config));
          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return function deleteStaff(_x3, _x4) {
    return _ref3.apply(this, arguments);
  };
}();
var getSingleStaff = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(config, id) {
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            return _context4.abrupt("return", (0,_axios_requestConfig__WEBPACK_IMPORTED_MODULE_0__/* .request */ .Q)("".concat(_apiEndPoints__WEBPACK_IMPORTED_MODULE_1__/* .apiEndpoint.staffs.staff */ ._.staffs.staff, "/").concat(id), config));
          case 1:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return function getSingleStaff(_x5, _x6) {
    return _ref4.apply(this, arguments);
  };
}();
var bulkDeleteStaffs = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(config) {
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            return _context5.abrupt("return", (0,_axios_requestConfig__WEBPACK_IMPORTED_MODULE_0__/* .request */ .Q)(_apiEndPoints__WEBPACK_IMPORTED_MODULE_1__/* .apiEndpoint.staffs.staff */ ._.staffs.staff, config));
          case 1:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return function bulkDeleteStaffs(_x7) {
    return _ref5.apply(this, arguments);
  };
}();
var updateStaff = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(config, id) {
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            return _context6.abrupt("return", (0,_axios_requestConfig__WEBPACK_IMPORTED_MODULE_0__/* .request */ .Q)("".concat(_apiEndPoints__WEBPACK_IMPORTED_MODULE_1__/* .apiEndpoint.staffs.staff */ ._.staffs.staff, "/").concat(id), config));
          case 1:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return function updateStaff(_x8, _x9) {
    return _ref6.apply(this, arguments);
  };
}();
var updateStaffPassword = /*#__PURE__*/(/* unused pure expression or super */ null && (function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(config, id) {
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            return _context7.abrupt("return", request("".concat(apiEndpoint.staffs.staff, "/").concat(id, "/update-password"), config));
          case 1:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return function updateStaffPassword(_x10, _x11) {
    return _ref7.apply(this, arguments);
  };
}()));
var integrationList = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(config, id) {
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            return _context8.abrupt("return", (0,_axios_requestConfig__WEBPACK_IMPORTED_MODULE_0__/* .request */ .Q)("".concat(_apiEndPoints__WEBPACK_IMPORTED_MODULE_1__/* .apiEndpoint.staffs.staff */ ._.staffs.staff, "/").concat(id, "/integrations"), config));
          case 1:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));
  return function integrationList(_x12, _x13) {
    return _ref8.apply(this, arguments);
  };
}();
var integrationRevoke = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(config, id) {
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            return _context9.abrupt("return", (0,_axios_requestConfig__WEBPACK_IMPORTED_MODULE_0__/* .request */ .Q)("".concat(_apiEndPoints__WEBPACK_IMPORTED_MODULE_1__/* .apiEndpoint.staffs.staff */ ._.staffs.staff, "/").concat(id, "/integrations/auth-revoke?integration_name=google-auth"), config));
          case 1:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));
  return function integrationRevoke(_x14, _x15) {
    return _ref9.apply(this, arguments);
  };
}();
var staffSearch = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(config) {
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            return _context10.abrupt("return", (0,_axios_requestConfig__WEBPACK_IMPORTED_MODULE_0__/* .request */ .Q)(_apiEndPoints__WEBPACK_IMPORTED_MODULE_1__/* .apiEndpoint.staffs.search */ ._.staffs.search, config));
          case 1:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  }));
  return function staffSearch(_x16) {
    return _ref10.apply(this, arguments);
  };
}();


/***/ })

}]);