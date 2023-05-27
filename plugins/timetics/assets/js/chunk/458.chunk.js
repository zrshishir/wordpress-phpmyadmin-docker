"use strict";
(self["webpackChunktimetics"] = self["webpackChunktimetics"] || []).push([[458],{

/***/ 4458:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9250);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9655);
/* harmony import */ var _common_Spinner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5729);
/* harmony import */ var _common_UseRequestConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4851);
/* harmony import */ var _helper_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4903);
/* harmony import */ var _actionCreators_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3632);
/* harmony import */ var _actionCreators_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7157);
/* harmony import */ var _context_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7258);
/* harmony import */ var _libs_meetingLib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8188);
/* harmony import */ var _services_meetings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3538);
/* harmony import */ var _services_staffs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7170);
/* harmony import */ var _hook_useMeetings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7026);
/* harmony import */ var _steps_FirstStep__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7004);
/* harmony import */ var _steps_SecondStep__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9622);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var React = window.React;
var useState = React.useState,
  useEffect = React.useEffect;
var _window$antd = window.antd,
  Button = _window$antd.Button,
  Form = _window$antd.Form,
  Typography = _window$antd.Typography;
var Title = Typography.Title;
var __ = wp.i18n.__;













function CreateMeeting() {
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_12__/* .useNavigate */ .s0)();
  var _useStateValue = (0,_context_provider__WEBPACK_IMPORTED_MODULE_5__/* .useStateValue */ .K)(),
    _useStateValue2 = _slicedToArray(_useStateValue, 2),
    _useStateValue2$ = _useStateValue2[0],
    meetingReducer = _useStateValue2$.meeting,
    staff = _useStateValue2$.staff,
    dispatch = _useStateValue2[1];
  var _useSearchParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_13__/* .useSearchParams */ .lr)(),
    _useSearchParams2 = _slicedToArray(_useSearchParams, 1),
    searchParams = _useSearchParams2[0];
  var getConfig = (0,_common_UseRequestConfig__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
  var _Form$useForm = Form.useForm(),
    _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
    form = _Form$useForm2[0];
  var _useState = useState(1),
    _useState2 = _slicedToArray(_useState, 2),
    current = _useState2[0],
    setCurrent = _useState2[1];
  var _useMeetings = (0,_hook_useMeetings__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(),
    submitMeeting = _useMeetings.submitMeeting;
  var _meetingReducer$meeti = meetingReducer.meeting,
    meeting = _meetingReducer$meeti === void 0 ? null : _meetingReducer$meeti,
    meetingId = meetingReducer.meetingId,
    loading = meetingReducer.loading,
    meetingType = meetingReducer.meetingType,
    _meetingReducer$meeti2 = meetingReducer.meetingCustom,
    meetingCustom = _meetingReducer$meeti2 === void 0 ? false : _meetingReducer$meeti2,
    _meetingReducer$meeti3 = meetingReducer.meetingCustomValue,
    meetingCustomValue = _meetingReducer$meeti3 === void 0 ? "" : _meetingReducer$meeti3,
    meetingCustomTime = meetingReducer.meetingCustomTime,
    _meetingReducer$selec = meetingReducer.selectedStaffIds,
    selectedStaffIds = _meetingReducer$selec === void 0 ? [] : _meetingReducer$selec,
    schedules = meetingReducer.schedules,
    timeCompareError = meetingReducer.timeCompareError;
  var staffs = staff.staffs;
  var id = searchParams.get("id");
  useEffect(function () {
    return function () {
      (0,_actionCreators_common__WEBPACK_IMPORTED_MODULE_4__/* .setState */ .I)({
        dispatch: dispatch,
        name: "meeting",
        value: null
      });
      (0,_actionCreators_common__WEBPACK_IMPORTED_MODULE_4__/* .setState */ .I)({
        dispatch: dispatch,
        name: "meetingId",
        value: null
      });
      (0,_actionCreators_common__WEBPACK_IMPORTED_MODULE_4__/* .setState */ .I)({
        dispatch: dispatch,
        name: "meetingType",
        value: "One-to-One"
      });
      (0,_actionCreators_common__WEBPACK_IMPORTED_MODULE_4__/* .setState */ .I)({
        dispatch: dispatch,
        name: "schedules",
        value: undefined
      });
      (0,_actionCreators_common__WEBPACK_IMPORTED_MODULE_4__/* .setState */ .I)({
        dispatch: dispatch,
        name: "selectedStaffIds",
        value: []
      });
      (0,_actionCreators_common__WEBPACK_IMPORTED_MODULE_4__/* .setState */ .I)({
        dispatch: dispatch,
        name: "selectedStaff",
        value: []
      });
    };
  }, []);
  var onFinish = function onFinish(values) {
    submitMeeting({
      values: values,
      id: id,
      form: form
    });
  };

  /**
   *
   * @param {Object} errorInfo Error details of form submission(if any)
   */
  var onFinishFailed = function onFinishFailed(errorInfo) {
    // console.log("Failed:", errorInfo);
  };
  if (loading) {
    return /*#__PURE__*/React.createElement(_common_Spinner__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
      tip: __("Loading...", "timetics"),
      type: "info",
      size: "large",
      wrapperClassName: "tt-spinner-wrapper"
    });
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "tt-container-wrapper"
  }, /*#__PURE__*/React.createElement(Button, {
    className: "tt-mb-20",
    size: "large",
    onClick: function onClick() {
      (0,_actionCreators_common__WEBPACK_IMPORTED_MODULE_4__/* .setState */ .I)({
        dispatch: dispatch,
        name: "meeting",
        value: null
      });
      (0,_actionCreators_common__WEBPACK_IMPORTED_MODULE_4__/* .setState */ .I)({
        dispatch: dispatch,
        name: "meetingId",
        value: null
      });
      navigate("/meetings");
    }
  }, __("Back to Meetings", "timetics")), /*#__PURE__*/React.createElement(Title, {
    level: 3,
    className: "tt-meeting-type"
  }, meetingReducer === null || meetingReducer === void 0 ? void 0 : meetingReducer.meetingTitle), /*#__PURE__*/React.createElement("div", {
    className: "tt-meeting-create-step"
  }, /*#__PURE__*/React.createElement("p", null, __(__("Step ".concat(current, "  of 2"), "timetics"), "timetics")), /*#__PURE__*/React.createElement("div", {
    className: "step-bar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "step1"
  }), /*#__PURE__*/React.createElement("div", {
    className: "step2",
    style: current == 2 ? {
      opacity: "1"
    } : {}
  }))), /*#__PURE__*/React.createElement("div", {
    className: "tt-form-container"
  }, current == 1 && /*#__PURE__*/React.createElement(_steps_FirstStep__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
    onFinishFailed: onFinishFailed,
    current: current,
    setCurrent: setCurrent,
    form: form
  }), current == 2 && /*#__PURE__*/React.createElement(_steps_SecondStep__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
    onFinishFailed: onFinishFailed,
    onFinish: onFinish,
    current: current,
    setCurrent: setCurrent
  }))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateMeeting);

//Dummy data

var customTimer = [{
  id: 1,
  name: "hrs",
  value: "hrs"
}, {
  id: 2,
  name: "min",
  value: "min"
}];

/***/ })

}]);