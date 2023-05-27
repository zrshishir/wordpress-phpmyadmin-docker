"use strict";
(self["webpackChunktimetics"] = self["webpackChunktimetics"] || []).push([[223],{

/***/ 5223:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ bookings_BookingLists)
});

// EXTERNAL MODULE: ./assets/src/admin/services/bookings.js
var bookings = __webpack_require__(6280);
// EXTERNAL MODULE: ./assets/src/admin/context/provider.js + 9 modules
var provider = __webpack_require__(7258);
// EXTERNAL MODULE: ./assets/src/admin/actionCreators/actions.js
var actions = __webpack_require__(3632);
// EXTERNAL MODULE: ./assets/src/admin/components/MainPageHeader.js
var MainPageHeader = __webpack_require__(8494);
// EXTERNAL MODULE: ./assets/src/common/icons/Icons.js
var Icons = __webpack_require__(2751);
// EXTERNAL MODULE: ./assets/src/helper/helpers.js
var helpers = __webpack_require__(4903);
;// CONCATENATED MODULE: ./assets/src/admin/pages/bookings/BookingModal.js


var __ = wp.i18n.__;
var _antd = antd,
  Space = _antd.Space,
  List = _antd.List,
  Modal = _antd.Modal,
  Avatar = _antd.Avatar,
  Divider = _antd.Divider,
  Typography = _antd.Typography;
var Title = Typography.Title;
/**
 * Booking modal component
 */
function BookingModal(_ref) {
  var _data$appointment, _window, _window$timetics, _window2, _window2$timetics, _window3, _window3$timetics, _data$staff, _data$staff2, _data$appointment2, _data$appointment3, _data$customer, _data$customer2, _data$attendees, _data$attendees2;
  var data = _ref.data,
    open = _ref.open,
    setOpen = _ref.setOpen;
  /**
   * Meeting data showing on modal
   */

  var meetingData = [{
    title: __("meeting name:", "timetics"),
    description: data === null || data === void 0 ? void 0 : (_data$appointment = data.appointment) === null || _data$appointment === void 0 ? void 0 : _data$appointment.name
  }, {
    title: __("date and time:", "timetics"),
    description: __("".concat((0,helpers/* convertWordpressDateFormatToDayjs */.ln)({
      date: data === null || data === void 0 ? void 0 : data.start_date,
      format: (_window = window) === null || _window === void 0 ? void 0 : (_window$timetics = _window.timetics) === null || _window$timetics === void 0 ? void 0 : _window$timetics.date_format
    }), " , ").concat((0,helpers/* convertWordpressTimeFormatToDayjs */.tU)({
      time: data === null || data === void 0 ? void 0 : data.start_time,
      format: (_window2 = window) === null || _window2 === void 0 ? void 0 : (_window2$timetics = _window2.timetics) === null || _window2$timetics === void 0 ? void 0 : _window2$timetics.time_format
    }), " to ").concat((0,helpers/* convertWordpressTimeFormatToDayjs */.tU)({
      time: data === null || data === void 0 ? void 0 : data.end_time,
      format: (_window3 = window) === null || _window3 === void 0 ? void 0 : (_window3$timetics = _window3.timetics) === null || _window3$timetics === void 0 ? void 0 : _window3$timetics.time_format
    }), "  "), "timetics")
  }, {
    title: __("host:", "timetics"),
    // TODO Have to work when api get fixed
    description: /*#__PURE__*/React.createElement(Space, {
      className: "tt-mt-10"
    }, /*#__PURE__*/React.createElement(Avatar, {
      src: "".concat(data === null || data === void 0 ? void 0 : (_data$staff = data.staff) === null || _data$staff === void 0 ? void 0 : _data$staff.image)
    }), /*#__PURE__*/React.createElement("span", null, data === null || data === void 0 ? void 0 : (_data$staff2 = data.staff) === null || _data$staff2 === void 0 ? void 0 : _data$staff2.full_name))
  }, {
    title: __("meeting location:", "timetics"),
    description: /*#__PURE__*/React.createElement(Space, null, /*#__PURE__*/React.createElement("span", null, __("Location type:", "timetics"), " ", data === null || data === void 0 ? void 0 : data.location_type), /*#__PURE__*/React.createElement(Divider, {
      type: "vertical"
    }), /*#__PURE__*/React.createElement("span", null, __("Location:", "timetics"), " ", data === null || data === void 0 ? void 0 : data.location))
  }, {
    title: __("selected seats:", "timetics"),
    description: /*#__PURE__*/React.createElement(Space, null, data !== null && data !== void 0 && data.seats ? (data === null || data === void 0 ? void 0 : data.seats.length) == 0 ? "N/A" : data === null || data === void 0 ? void 0 : data.seats.map(function (item, index) {
      return (item === null || item === void 0 ? void 0 : item.ticketType) + " " + (item === null || item === void 0 ? void 0 : item.number) + ",";
    }) : null)
  }, {
    title: __("Meeting created at:", "timetics"),
    description: (data === null || data === void 0 ? void 0 : (_data$appointment2 = data.appointment) === null || _data$appointment2 === void 0 ? void 0 : _data$appointment2.updatedAt) || new Date().toISOString({})
  },
  // TODO Have to work here.
  {
    title: __("time zone:", "timetics"),
    description: data === null || data === void 0 ? void 0 : (_data$appointment3 = data.appointment) === null || _data$appointment3 === void 0 ? void 0 : _data$appointment3.timezone
  }];
  /**
   * Customer data showing on modal
   */
  var customerData = [{
    title: __("name:", "timetics"),
    description: data === null || data === void 0 ? void 0 : (_data$customer = data.customer) === null || _data$customer === void 0 ? void 0 : _data$customer.full_name
  }, {
    title: __("email:", "timetics"),
    description: data === null || data === void 0 ? void 0 : (_data$customer2 = data.customer) === null || _data$customer2 === void 0 ? void 0 : _data$customer2.email
  }, {
    title: __("booking id:", "timetics"),
    description: data === null || data === void 0 ? void 0 : data.id
  }, {
    title: __("Phone:", "timetics"),
    description: data === null || data === void 0 ? void 0 : data.phone
  }, {
    title: __("additional notes:", "timetics"),
    description: data === null || data === void 0 ? void 0 : data.description
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Modal, {
    className: "tt-booking-modal",
    centered: true,
    style: {
      top: 40
    },
    open: open,
    onOk: function onOk() {
      return setOpen(false);
    },
    onCancel: function onCancel() {
      return setOpen(false);
    },
    width: 670,
    okText: "Reschedule",
    cancelText: "Cancel Booking",
    closeIcon: /*#__PURE__*/React.createElement(Icons/* CloseFillIcon */.Ys, null),
    footer: null
  }, /*#__PURE__*/React.createElement("div", {
    className: "tt-booking-modal-wrapper tt-mb-30"
  }, /*#__PURE__*/React.createElement(Title, {
    level: 3,
    className: "tt-mt-0 tt-mb-15"
  }, __("Booking details:", "timetics")), /*#__PURE__*/React.createElement("div", {
    className: "tt-booking-modal-details"
  }, /*#__PURE__*/React.createElement(List, {
    itemLayout: "horizontal",
    dataSource: meetingData,
    renderItem: function renderItem(item) {
      return /*#__PURE__*/React.createElement(List.Item, null, /*#__PURE__*/React.createElement(List.Item.Meta, {
        title: item.title,
        description: item.description
      }));
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "tt-booking-modal-wrapper ".concat((data === null || data === void 0 ? void 0 : (_data$attendees = data.attendees) === null || _data$attendees === void 0 ? void 0 : _data$attendees.length) > 0 ? "tt-mb-30" : null)
  }, /*#__PURE__*/React.createElement(Title, {
    level: 3,
    className: "tt-mt-0 tt-mb-15"
  }, __("Customer details:", "timetics")), /*#__PURE__*/React.createElement("div", {
    className: "tt-booking-modal-details"
  }, /*#__PURE__*/React.createElement(List, {
    itemLayout: "horizontal",
    dataSource: customerData,
    renderItem: function renderItem(item) {
      return /*#__PURE__*/React.createElement(List.Item, null, /*#__PURE__*/React.createElement(List.Item.Meta, {
        title: item.title,
        description: item.description
      }));
    }
  }))), (data === null || data === void 0 ? void 0 : (_data$attendees2 = data.attendees) === null || _data$attendees2 === void 0 ? void 0 : _data$attendees2.length) > 0 ? /*#__PURE__*/React.createElement("div", {
    className: "tt-booking-modal-wrapper"
  }, /*#__PURE__*/React.createElement(Title, {
    level: 3,
    className: "tt-mt-0 tt-mb-15"
  }, __("Invitee list:", "timetics")), /*#__PURE__*/React.createElement("div", {
    className: "tt-booking-modal-details"
  }, wp.hooks.applyFilters("inviteeTable", data === null || data === void 0 ? void 0 : data.attendees))) : null));
}
/* harmony default export */ const bookings_BookingModal = (BookingModal);
// EXTERNAL MODULE: ./node_modules/react-router-dom/dist/index.js
var dist = __webpack_require__(9655);
// EXTERNAL MODULE: ./node_modules/react-router/dist/index.js
var react_router_dist = __webpack_require__(9250);
;// CONCATENATED MODULE: ./assets/src/admin/pages/bookings/TableHeader.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var TableHeader_React = window.React;
var useState = TableHeader_React.useState;
var TableHeader_ = wp.i18n.__;
var TableHeader_antd = antd,
  Button = TableHeader_antd.Button,
  TableHeader_Space = TableHeader_antd.Space,
  Dropdown = TableHeader_antd.Dropdown,
  TableHeader_Typography = TableHeader_antd.Typography;
var TableHeader_Title = TableHeader_Typography.Title;



function TableHeader(_ref) {
  var showDeleteConfirm = _ref.showDeleteConfirm,
    setOpen = _ref.setOpen,
    setRescheduleModalOpen = _ref.setRescheduleModalOpen;
  var _useState = useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    currentRecord = _useState2[0],
    setCurrentRecord = _useState2[1];
  var navigate = (0,react_router_dist/* useNavigate */.s0)();
  /**
   *Handler for edit booking
   * @param {booking} e js booking Object.
   * @param {Object} booking single booking object.
   */
  var editBooking = function editBooking(record) {
    navigate("update?id=".concat(record));
  };
  // dropdown Menu items in the card items
  var menuItems = [{
    key: "1",
    label: TableHeader_("Edit", "timetics"),
    onClick: function onClick() {
      editBooking(currentRecord === null || currentRecord === void 0 ? void 0 : currentRecord.id);
    }
  }, {
    key: "2",
    label: TableHeader_("Delete", "timetics"),
    onClick: function onClick() {
      showDeleteConfirm(currentRecord === null || currentRecord === void 0 ? void 0 : currentRecord.id);
    }
  }
  // TODO: Reschedule button disable
  // {
  //     key: "3",
  //     label: __("Reschedule", "timetics"),
  //     onClick: () => {
  //         setRescheduleModalOpen(true);
  //     },
  // },
  ];

  /**
   *   booking data table column set
   */
  var columns = [{
    title: TableHeader_("Booking Date", "timetics"),
    dataIndex: "start_date",
    key: "start_date",
    render: function render(_, record) {
      var _window, _window$timetics, _window2, _window2$timetics;
      return /*#__PURE__*/TableHeader_React.createElement(TableHeader_React.Fragment, null, /*#__PURE__*/TableHeader_React.createElement(TableHeader_Title, {
        level: 5,
        className: "tt-margin-0"
      }, (0,helpers/* convertWordpressDateFormatToDayjs */.ln)({
        date: record === null || record === void 0 ? void 0 : record.start_date,
        format: (_window = window) === null || _window === void 0 ? void 0 : (_window$timetics = _window.timetics) === null || _window$timetics === void 0 ? void 0 : _window$timetics.date_format
      })), /*#__PURE__*/TableHeader_React.createElement("p", {
        className: "tt-mt-5 tt-mb-0"
      }, "@ ".concat((0,helpers/* convertWordpressTimeFormatToDayjs */.tU)({
        time: record === null || record === void 0 ? void 0 : record.start_time,
        format: (_window2 = window) === null || _window2 === void 0 ? void 0 : (_window2$timetics = _window2.timetics) === null || _window2$timetics === void 0 ? void 0 : _window2$timetics.time_format
      }))));
    }
  },
  // {
  //     title: __("Duration", "timetics"),
  //     dataIndex: "duration",
  //     key: "duration",
  //     responsive: ["xl"],
  //     render: (_, record) => {
  //         return (
  //             <>
  //                 <p className="tt-margin-0">
  //                     {record?.appointment?.duration}
  //                 </p>
  //             </>
  //         );
  //     },
  // },
  {
    title: TableHeader_("Meeting Name", "timetics"),
    dataIndex: "first_name",
    key: "first_name",
    render: function render(_, record) {
      var _record$appointment;
      return /*#__PURE__*/TableHeader_React.createElement(TableHeader_React.Fragment, null, /*#__PURE__*/TableHeader_React.createElement(TableHeader_Title, {
        level: 5,
        className: "tt-margin-0"
      }, record === null || record === void 0 ? void 0 : (_record$appointment = record.appointment) === null || _record$appointment === void 0 ? void 0 : _record$appointment.name));
    }
  }, {
    title: TableHeader_("Customer", "timetics"),
    dataIndex: "team_member",
    key: "team_member",
    render: function render(_, record) {
      var _record$customer;
      return /*#__PURE__*/TableHeader_React.createElement(TableHeader_React.Fragment, null, /*#__PURE__*/TableHeader_React.createElement("p", {
        className: "tt-margin-0 tt-customer-email"
      }, record === null || record === void 0 ? void 0 : (_record$customer = record.customer) === null || _record$customer === void 0 ? void 0 : _record$customer.email));
    }
  }, {
    title: TableHeader_("Status", "timetics"),
    dataIndex: "status",
    key: "status",
    render: function render(_, record) {
      var statusTextColor = record.status == "approved" ? "#00C14E" : record.status == "pending" ? "#EF8201" : "#E42D23";
      return /*#__PURE__*/TableHeader_React.createElement(TableHeader_React.Fragment, null, /*#__PURE__*/TableHeader_React.createElement("p", {
        style: {
          color: statusTextColor,
          textTransform: "capitalize"
        },
        className: "tt-meeting-status"
      }, record === null || record === void 0 ? void 0 : record.status));
    }
  }, {
    title: "Action",
    key: "action",
    render: function render(text, record, index) {
      // const _record = record;
      return /*#__PURE__*/TableHeader_React.createElement("div", {
        className: "tt-status-wrap"
      }, /*#__PURE__*/TableHeader_React.createElement(TableHeader_Space, {
        size: [16, 8],
        wrap: true
      }, /*#__PURE__*/TableHeader_React.createElement(Button, {
        onClick: function onClick(e) {
          e.preventDefault();
          e.stopPropagation();
          setOpen(true);
          setCurrentRecord(record);
        },
        icon: /*#__PURE__*/TableHeader_React.createElement(Icons/* EyeStrokeIcon */.Ze, null)
      }, /*#__PURE__*/TableHeader_React.createElement("span", null, TableHeader_("Details", "timetics"))), /*#__PURE__*/TableHeader_React.createElement(Dropdown, {
        menu: {
          items: menuItems
        },
        trigger: ["click"],
        overlayClassName: "tt-action-dropdown",
        placement: "bottomRight",
        onClick: function onClick() {
          setCurrentRecord(record);
        }
      }, /*#__PURE__*/TableHeader_React.createElement(Button, {
        className: "tt-more-action-btn"
      }, /*#__PURE__*/TableHeader_React.createElement(Icons/* DotIcon */.ZN, null)))));
    }
  }];
  return {
    columns: columns,
    currentRecord: currentRecord
  };
}
/* harmony default export */ const bookings_TableHeader = (TableHeader);
// EXTERNAL MODULE: ./assets/src/admin/hooks/useBulkDelete.js
var useBulkDelete = __webpack_require__(5278);
// EXTERNAL MODULE: ./assets/src/admin/hooks/useDebounceSearch.js
var useDebounceSearch = __webpack_require__(6885);
// EXTERNAL MODULE: ./assets/src/common/SelectInput.js
var SelectInput = __webpack_require__(4378);
// EXTERNAL MODULE: ./assets/src/admin/services/meetings.js
var meetings = __webpack_require__(3538);
;// CONCATENATED MODULE: ./assets/src/admin/pages/bookings/HeaderAction.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function HeaderAction_slicedToArray(arr, i) { return HeaderAction_arrayWithHoles(arr) || HeaderAction_iterableToArrayLimit(arr, i) || HeaderAction_unsupportedIterableToArray(arr, i) || HeaderAction_nonIterableRest(); }
function HeaderAction_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function HeaderAction_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return HeaderAction_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return HeaderAction_arrayLikeToArray(o, minLen); }
function HeaderAction_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function HeaderAction_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function HeaderAction_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var HeaderAction_ = wp.i18n.__;

var HeaderAction_antd = antd,
  HeaderAction_Button = HeaderAction_antd.Button,
  Row = HeaderAction_antd.Row,
  Col = HeaderAction_antd.Col,
  Form = HeaderAction_antd.Form,
  Input = HeaderAction_antd.Input;

var _React = React,
  HeaderAction_useState = _React.useState,
  useEffect = _React.useEffect;

function HeaderAction(_ref) {
  var searchHandler = _ref.searchHandler,
    setMeetingId = _ref.setMeetingId;
  var _useState = HeaderAction_useState(),
    _useState2 = HeaderAction_slicedToArray(_useState, 2),
    data = _useState2[0],
    setData = _useState2[1];
  var navigate = (0,react_router_dist/* useNavigate */.s0)();

  /**
   * Meeting title on change get value
   * @param {number} value selected value
   */
  useEffect(function () {
    fetchMeetingList(-1, 1);
  }, []);

  /**
   * fetch meetings to call api
   * @param {number} per_page posts per pages
   * @param {number} page page number
   */
  var fetchMeetingList = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(per_page, page) {
      var _res$data, _res$data$data;
      var res, items;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0,meetings/* getAllMeetings */.MY)({
                method: "GET",
                params: {
                  per_page: per_page,
                  paged: page
                }
              });
            case 2:
              res = _context.sent;
              items = res === null || res === void 0 ? void 0 : (_res$data = res.data) === null || _res$data === void 0 ? void 0 : (_res$data$data = _res$data.data) === null || _res$data$data === void 0 ? void 0 : _res$data$data.items;
              setData(items);
            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return function fetchMeetingList(_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  /**
   * Meeting title on change get value
   * @param {number} value selected value
   */
  var meetingOnChange = function meetingOnChange(value) {
    setMeetingId(value);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "tt-submenu-action-wrapper tt-mb-30"
  }, /*#__PURE__*/React.createElement(Row, {
    gutter: [16, 16]
  }, /*#__PURE__*/React.createElement(Col, {
    xs: {
      span: 16
    },
    sm: {
      span: 8
    },
    lg: {
      span: 8
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
      span: 12
    },
    sm: {
      span: 8
    },
    lg: {
      span: 8
    },
    xl: {
      span: 4,
      offset: 12
    }
  }, /*#__PURE__*/React.createElement(SelectInput/* default */.Z, {
    key: "appointment",
    options: data,
    allowClear: true,
    fieldNames: {
      label: "name",
      value: "id"
    },
    onChange: meetingOnChange,
    name: "appointment",
    showSearch: true,
    placeholder: HeaderAction_("Select Meeting", "timetics"),
    filterOption: function filterOption(input, option) {
      var _option$name;
      return ((_option$name = option === null || option === void 0 ? void 0 : option.name) !== null && _option$name !== void 0 ? _option$name : "").includes(input);
    },
    className: "tt-submenu-action-select"
  })), /*#__PURE__*/React.createElement(Col, {
    xs: {
      span: 12
    },
    sm: {
      span: 8
    },
    lg: {
      span: 8
    },
    xl: {
      span: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "input-search-field"
  }, /*#__PURE__*/React.createElement(Form.Item, null, /*#__PURE__*/React.createElement(Input, {
    type: "text",
    suffix: /*#__PURE__*/React.createElement(Icons/* SearchIcon */.W1, null),
    placeholder: HeaderAction_("Search...", "timetics"),
    onChange: function onChange(e) {
      searchHandler(e.target.value);
    }
  })))))));
}
/* harmony default export */ const bookings_HeaderAction = (HeaderAction);
// EXTERNAL MODULE: ./node_modules/dayjs/dayjs.min.js
var dayjs_min = __webpack_require__(7484);
var dayjs_min_default = /*#__PURE__*/__webpack_require__.n(dayjs_min);
// EXTERNAL MODULE: ./assets/src/admin/libs/bookingLib.js
var bookingLib = __webpack_require__(6621);
;// CONCATENATED MODULE: ./assets/src/admin/pages/bookings/RescheduleModal.js
function RescheduleModal_typeof(obj) { "@babel/helpers - typeof"; return RescheduleModal_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, RescheduleModal_typeof(obj); }
function RescheduleModal_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ RescheduleModal_regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == RescheduleModal_typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function RescheduleModal_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function RescheduleModal_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { RescheduleModal_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { RescheduleModal_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function RescheduleModal_slicedToArray(arr, i) { return RescheduleModal_arrayWithHoles(arr) || RescheduleModal_iterableToArrayLimit(arr, i) || RescheduleModal_unsupportedIterableToArray(arr, i) || RescheduleModal_nonIterableRest(); }
function RescheduleModal_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function RescheduleModal_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return RescheduleModal_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return RescheduleModal_arrayLikeToArray(o, minLen); }
function RescheduleModal_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function RescheduleModal_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function RescheduleModal_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _window$React = window.React,
  RescheduleModal_useState = _window$React.useState,
  RescheduleModal_useEffect = _window$React.useEffect,
  useRef = _window$React.useRef;
var _window$antd = window.antd,
  RescheduleModal_Form = _window$antd.Form,
  RescheduleModal_Row = _window$antd.Row,
  RescheduleModal_Col = _window$antd.Col,
  RescheduleModal_Modal = _window$antd.Modal,
  RescheduleModal_Button = _window$antd.Button;
var RescheduleModal_ = wp.i18n.__;




function RescheduleModal(_ref) {
  var data = _ref.data,
    rescheduleModalOpen = _ref.rescheduleModalOpen,
    setRescheduleModalOpen = _ref.setRescheduleModalOpen;
  var fp = useRef(null);
  var _Form$useForm = RescheduleModal_Form.useForm(),
    _Form$useForm2 = RescheduleModal_slicedToArray(_Form$useForm, 1),
    form = _Form$useForm2[0];
  var _useState = RescheduleModal_useState(false),
    _useState2 = RescheduleModal_slicedToArray(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];
  var _useState3 = RescheduleModal_useState(data === null || data === void 0 ? void 0 : data.date),
    _useState4 = RescheduleModal_slicedToArray(_useState3, 2),
    rescheduleDate = _useState4[0],
    setRescheduleDate = _useState4[1];
  var id = data === null || data === void 0 ? void 0 : data.id;
  var customerData = data === null || data === void 0 ? void 0 : data.customer;

  /**
   * Update single booking schedule date and time on finish
   */
  var onFinish = /*#__PURE__*/function () {
    var _ref2 = RescheduleModal_asyncToGenerator( /*#__PURE__*/RescheduleModal_regeneratorRuntime().mark(function _callee(values) {
      var res;
      return RescheduleModal_regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0,bookingLib/* updateBookingApi */.en)({
                id: id,
                values: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, data), customerData), values), {}, {
                  start_date: rescheduleDate,
                  payment_method: "local"
                })
              });
            case 2:
              res = _context.sent;
              // setLoading(false);
              setRescheduleModalOpen(false);
            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return function onFinish(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  var onFinishFailed = function onFinishFailed(errorInfo) {
    // console.log("Failed:", errorInfo);
  };
  var onChange = function onChange(dateString) {
    setRescheduleDate(dayjs_min_default()(dateString).format("MM-DD-YYYY"));
  };
  // handle cancel function
  var handleCancel = function handleCancel() {
    setRescheduleModalOpen(false);
  };
  RescheduleModal_useEffect(function () {
    //TODO need to fix according to flatpickr in useEffect...
    if (typeof window !== "undefined" && window.flatpickr && fp.current) {
      var _window, _window$timetics;
      var inputEl = fp.current;
      var flatpickrInstance = window.flatpickr(inputEl, {
        // defaultDate:null,
        altFormat: "F j, Y",
        dateFormat: "Y-m-d",
        minDate: "today",
        // monthSelectorType: "static",
        // mode: "range",
        locale: {
          firstDayOfWeek: (0,helpers/* convertWeekDayToNumber */.wR)((_window = window) === null || _window === void 0 ? void 0 : (_window$timetics = _window.timetics) === null || _window$timetics === void 0 ? void 0 : _window$timetics.start_of_week) // start week on Monday
        },

        onChange: function onChange(selectedDates, dateStr, instance) {
          // const day = getWeekDay(new Date(dateStr));
          // dispatch({
          //     type: actions.SET_META_DATA_WITH_MEETING,
          //     payload: {
          //         meetingStartDate: dayjs(selectedDates[0]).format(
          //             "YYYY-MM-DD"
          //         ),
          //         meetingEndDate: dayjs(selectedDates[1]).format(
          //             "YYYY-MM-DD"
          //         ),
          //     },
          // });
        }
      });
      return function () {
        flatpickrInstance.destroy();
      };
    }
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(RescheduleModal_Modal, {
    title: "Reschedule Booking",
    className: "tt-booking-modal",
    onOk: function onOk() {
      return handleCancel(false);
    },
    onCancel: function onCancel() {
      return setRescheduleModalOpen(false);
    },
    open: rescheduleModalOpen,
    width: 670,
    confirmLoading: loading,
    footer: null,
    closeIcon: /*#__PURE__*/React.createElement(Icons/* CloseFillIcon */.Ys, null)
  }, /*#__PURE__*/React.createElement(RescheduleModal_Form, {
    form: form,
    name: "reschedule_booking_form",
    className: "tt-form-container",
    layout: "vertical",
    autoComplete: "off",
    onFinish: onFinish,
    onFinishFailed: onFinishFailed,
    initialValues: data
  }, /*#__PURE__*/React.createElement(RescheduleModal_Row, {
    gutter: [20, 20]
  }, /*#__PURE__*/React.createElement(RescheduleModal_Col, {
    span: 12
  }, /*#__PURE__*/React.createElement(RescheduleModal_Form.Item, {
    className: "timetics-input ",
    label: RescheduleModal_("date", "timetics"),
    labelCol: 24,
    wrapperCol: 24,
    name: "date"
    // rules={rules}
  }, /*#__PURE__*/React.createElement("input", {
    placeholder: "Select booking date",
    ref: fp,
    type: "text",
    className: "tt-flat-picker-input ant-input ant-input-lg",
    id: "booking-date",
    name: "booking-date"
  }))), /*#__PURE__*/React.createElement(RescheduleModal_Col, {
    span: 12
  }, /*#__PURE__*/React.createElement(SelectInput/* default */.Z, {
    label: RescheduleModal_("Select time", "timetics"),
    key: "time",
    style: {
      width: "100%"
    },
    options: [{
      name: 1,
      value: "9:00 - 10:00"
    }, {
      name: 2,
      value: "11:00 - 12:00"
    }]
    // fieldNames={{ label: "name", value: "id" }}
    ,
    name: "start_time",
    placeholder: RescheduleModal_("Select Meeting", "timetics"),
    rules: [{
      required: true,
      message: RescheduleModal_("Time is required", "timetics")
    }]
  }))), /*#__PURE__*/React.createElement(RescheduleModal_Row, {
    justify: "end"
  }, /*#__PURE__*/React.createElement(RescheduleModal_Col, null, /*#__PURE__*/React.createElement(RescheduleModal_Button, {
    type: "primary",
    htmlType: "submit"
    // size="large"
  }, RescheduleModal_("Reschedule", "timetics")))))));
}
/* harmony default export */ const bookings_RescheduleModal = (RescheduleModal);
;// CONCATENATED MODULE: ./assets/src/admin/pages/bookings/BookingLists.js
function BookingLists_typeof(obj) { "@babel/helpers - typeof"; return BookingLists_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, BookingLists_typeof(obj); }
function BookingLists_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ BookingLists_regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == BookingLists_typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function BookingLists_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function BookingLists_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { BookingLists_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { BookingLists_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function BookingLists_slicedToArray(arr, i) { return BookingLists_arrayWithHoles(arr) || BookingLists_iterableToArrayLimit(arr, i) || BookingLists_unsupportedIterableToArray(arr, i) || BookingLists_nonIterableRest(); }
function BookingLists_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function BookingLists_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return BookingLists_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return BookingLists_arrayLikeToArray(o, minLen); }
function BookingLists_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function BookingLists_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function BookingLists_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var BookingLists_React = React,
  BookingLists_useState = BookingLists_React.useState,
  BookingLists_useEffect = BookingLists_React.useEffect;
var BookingLists_antd = antd,
  Table = BookingLists_antd.Table,
  BookingLists_Button = BookingLists_antd.Button,
  BookingLists_Modal = BookingLists_antd.Modal,
  Skeleton = BookingLists_antd.Skeleton,
  Empty = BookingLists_antd.Empty,
  BookingLists_Space = BookingLists_antd.Space;
var BookingLists_confirm = BookingLists_Modal.confirm;
var BookingLists_ = wp.i18n.__;




function BookingLists() {
  var _useStateValue = (0,provider/* useStateValue */.K)(),
    _useStateValue2 = BookingLists_slicedToArray(_useStateValue, 2),
    booking = _useStateValue2[0].booking,
    dispatch = _useStateValue2[1];
  var _useState = BookingLists_useState(true),
    _useState2 = BookingLists_slicedToArray(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];
  var bookingData = booking.bookings;
  var _useState3 = BookingLists_useState(1),
    _useState4 = BookingLists_slicedToArray(_useState3, 2),
    pageNumber = _useState4[0],
    setPageNumber = _useState4[1];
  var _useState5 = BookingLists_useState(20),
    _useState6 = BookingLists_slicedToArray(_useState5, 2),
    perPage = _useState6[0],
    setPerPage = _useState6[1];
  var _useState7 = BookingLists_useState(),
    _useState8 = BookingLists_slicedToArray(_useState7, 2),
    count = _useState8[0],
    setCount = _useState8[1];
  var _useState9 = BookingLists_useState(false),
    _useState10 = BookingLists_slicedToArray(_useState9, 2),
    open = _useState10[0],
    setOpen = _useState10[1];
  var _useState11 = BookingLists_useState(false),
    _useState12 = BookingLists_slicedToArray(_useState11, 2),
    openRescheduleModalOpen = _useState12[0],
    setRescheduleModalOpen = _useState12[1];
  var _useSearchParams = (0,dist/* useSearchParams */.lr)(),
    _useSearchParams2 = BookingLists_slicedToArray(_useSearchParams, 1),
    searchParams = _useSearchParams2[0];
  var _useState13 = BookingLists_useState(searchParams.get("meeting_id")),
    _useState14 = BookingLists_slicedToArray(_useState13, 2),
    meeting_id = _useState14[0],
    setMeetingId = _useState14[1];
  /**
   * fetch all bookings
   */
  var fetchAllBookings = /*#__PURE__*/function () {
    var _ref = BookingLists_asyncToGenerator( /*#__PURE__*/BookingLists_regeneratorRuntime().mark(function _callee() {
      var _res$data, _res$data$data, _res$data2, _res$data2$data, res, _res$data3, _res$data3$data, _res$data4, _res$data4$data, _res;
      return BookingLists_regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!meeting_id) {
                _context.next = 10;
                break;
              }
              setLoading(true);
              _context.next = 4;
              return (0,bookings/* getBookingByMeetingId */.JD)({
                method: "GET",
                params: {
                  per_page: perPage,
                  paged: pageNumber
                }
              }, meeting_id);
            case 4:
              res = _context.sent;
              setLoading(false);
              dispatch({
                type: actions/* actions.SET_BOOKINGS */.N.SET_BOOKINGS,
                payload: res === null || res === void 0 ? void 0 : (_res$data = res.data) === null || _res$data === void 0 ? void 0 : (_res$data$data = _res$data.data) === null || _res$data$data === void 0 ? void 0 : _res$data$data.items
              });
              setCount(res === null || res === void 0 ? void 0 : (_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : (_res$data2$data = _res$data2.data) === null || _res$data2$data === void 0 ? void 0 : _res$data2$data.total);
              _context.next = 17;
              break;
            case 10:
              // get all bookings
              setLoading(true);
              _context.next = 13;
              return (0,bookings/* getAllBooking */.Xy)({
                method: "GET",
                params: {
                  per_page: perPage,
                  paged: pageNumber
                }
              });
            case 13:
              _res = _context.sent;
              setLoading(false);
              dispatch({
                type: actions/* actions.SET_BOOKINGS */.N.SET_BOOKINGS,
                payload: _res === null || _res === void 0 ? void 0 : (_res$data3 = _res.data) === null || _res$data3 === void 0 ? void 0 : (_res$data3$data = _res$data3.data) === null || _res$data3$data === void 0 ? void 0 : _res$data3$data.items
              });
              setCount(_res === null || _res === void 0 ? void 0 : (_res$data4 = _res.data) === null || _res$data4 === void 0 ? void 0 : (_res$data4$data = _res$data4.data) === null || _res$data4$data === void 0 ? void 0 : _res$data4$data.total);
            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return function fetchAllBookings() {
      return _ref.apply(this, arguments);
    };
  }();

  // bulk delete hooks call
  var _useBulkDelete = (0,useBulkDelete/* default */.Z)({
      setLoading: setLoading,
      deleteAPi: bookings/* deleteAllBookings */.Nr,
      data: bookingData,
      fetchAllData: fetchAllBookings,
      action_type: actions/* actions.SET_BOOKINGS */.N.SET_BOOKINGS
    }),
    rowSelection = _useBulkDelete.rowSelection,
    selectedRowKeys = _useBulkDelete.selectedRowKeys,
    bulkDelete = _useBulkDelete.bulkDelete;
  var hasSelected = selectedRowKeys.length > 0;

  // search debounce custom hooks call
  var _useDebounceSearch = (0,useDebounceSearch/* default */.Z)({
      SearchApi: bookings/* BookingSearch */.ai,
      setLoading: setLoading,
      perPage: perPage,
      pageNumber: pageNumber,
      action_type: actions/* actions.SET_BOOKINGS */.N.SET_BOOKINGS,
      setCount: setCount
    }),
    searchHandler = _useDebounceSearch.searchHandler;

  /**
   *  api call for get all booking
   */
  BookingLists_useEffect(function () {
    var loadData = /*#__PURE__*/function () {
      var _ref2 = BookingLists_asyncToGenerator( /*#__PURE__*/BookingLists_regeneratorRuntime().mark(function _callee2() {
        return BookingLists_regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                fetchAllBookings();
              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
      return function loadData() {
        return _ref2.apply(this, arguments);
      };
    }();
    loadData();
  }, [pageNumber, perPage, meeting_id]);

  /**
   * single booking delete
   */
  var deleteSingleBooking = /*#__PURE__*/function () {
    var _ref3 = BookingLists_asyncToGenerator( /*#__PURE__*/BookingLists_regeneratorRuntime().mark(function _callee3(id) {
      var _res$data5;
      var res;
      return BookingLists_regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return (0,bookings/* deleteBooking */.FF)({
                method: "DELETE"
              }, id);
            case 2:
              res = _context3.sent;
              if ((res === null || res === void 0 ? void 0 : (_res$data5 = res.data) === null || _res$data5 === void 0 ? void 0 : _res$data5.status_code) == 200) {
                dispatch({
                  type: actions/* actions.SET_BOOKINGS */.N.SET_BOOKINGS,
                  payload: bookingData.filter(function (item) {
                    return item.id != id;
                  })
                });
              }
            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return function deleteSingleBooking(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  /**
   * @param id
   * Modal open when click delete button
   */
  var showDeleteConfirm = function showDeleteConfirm(id) {
    BookingLists_confirm({
      title: BookingLists_("Are you sure delete this booking?", "timetics"),
      okText: BookingLists_("Yes", "timetics"),
      okType: "danger",
      cancelText: BookingLists_("No", "timetics"),
      onOk: function onOk() {
        deleteSingleBooking(id);
      }
    });
  };

  // Table Header
  var _TableHeader = bookings_TableHeader({
      showDeleteConfirm: showDeleteConfirm,
      setOpen: setOpen,
      setRescheduleModalOpen: setRescheduleModalOpen
    }),
    columns = _TableHeader.columns,
    currentRecord = _TableHeader.currentRecord;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(MainPageHeader/* default */.Z, {
    title: BookingLists_("Bookings", "timetics")
  }), /*#__PURE__*/React.createElement(bookings_BookingModal, {
    data: currentRecord,
    open: open,
    setOpen: setOpen
  }), openRescheduleModalOpen ? /*#__PURE__*/React.createElement(bookings_RescheduleModal, {
    data: currentRecord,
    rescheduleModalOpen: openRescheduleModalOpen,
    setRescheduleModalOpen: setRescheduleModalOpen
  }) : null, /*#__PURE__*/React.createElement(bookings_HeaderAction, {
    searchHandler: searchHandler,
    setMeetingId: setMeetingId
  }), hasSelected && /*#__PURE__*/React.createElement(BookingLists_Space, {
    className: "tt-bulk-delete tt-mb-20"
  }, /*#__PURE__*/React.createElement(BookingLists_Button, {
    danger: true,
    onClick: function onClick(e) {
      BookingLists_confirm({
        title: BookingLists_("Are you sure delete selected bookings?", "timetics"),
        okText: BookingLists_("Yes", "timetics"),
        okType: "danger",
        cancelText: BookingLists_("No", "timetics"),
        onOk: function onOk() {
          bulkDelete();
        }
      });
    },
    loading: loading
  }, BookingLists_("Bulk Delete", "timetics")), /*#__PURE__*/React.createElement("span", null, hasSelected ? "".concat(selectedRowKeys.length, " items Selected") : "")), /*#__PURE__*/React.createElement(Table, {
    rowSelection: rowSelection,
    columns: columns,
    rowClassName: function rowClassName(record) {
      return record.status == "cancel" && "tt-booking-cancel";
    },
    dataSource: bookingData,
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
      x: 960,
      y: "calc(100vh - 250px)"
    },
    tableLayout: "auto",
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
/* harmony default export */ const bookings_BookingLists = (BookingLists);

/***/ })

}]);