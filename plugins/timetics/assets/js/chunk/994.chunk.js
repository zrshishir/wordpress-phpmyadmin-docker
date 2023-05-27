"use strict";
(self["webpackChunktimetics"] = self["webpackChunktimetics"] || []).push([[994],{

/***/ 9994:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ meeting_CreateMeeting)
});

// EXTERNAL MODULE: ./node_modules/react-router/dist/index.js
var dist = __webpack_require__(9250);
// EXTERNAL MODULE: ./node_modules/react-router-dom/dist/index.js
var react_router_dom_dist = __webpack_require__(9655);
// EXTERNAL MODULE: ./assets/src/common/Spinner.js
var Spinner = __webpack_require__(5729);
// EXTERNAL MODULE: ./assets/src/common/UseRequestConfig.js
var UseRequestConfig = __webpack_require__(4851);
// EXTERNAL MODULE: ./assets/src/helper/helpers.js
var helpers = __webpack_require__(4903);
// EXTERNAL MODULE: ./assets/src/admin/actionCreators/actions.js
var actions = __webpack_require__(3632);
// EXTERNAL MODULE: ./assets/src/admin/actionCreators/common.js
var common = __webpack_require__(7157);
// EXTERNAL MODULE: ./assets/src/admin/context/provider.js + 9 modules
var provider = __webpack_require__(7258);
// EXTERNAL MODULE: ./assets/src/admin/libs/meetingLib.js
var meetingLib = __webpack_require__(8188);
// EXTERNAL MODULE: ./assets/src/admin/services/meetings.js
var meetings = __webpack_require__(3538);
// EXTERNAL MODULE: ./assets/src/admin/services/staffs.js
var staffs = __webpack_require__(7170);
// EXTERNAL MODULE: ./assets/src/admin/pages/meeting/hook/useMeetings.js
var useMeetings = __webpack_require__(7026);
// EXTERNAL MODULE: ./assets/src/admin/pages/meeting/steps/FirstStep.js + 2 modules
var FirstStep = __webpack_require__(7593);
// EXTERNAL MODULE: ./node_modules/dayjs/dayjs.min.js
var dayjs_min = __webpack_require__(7484);
var dayjs_min_default = /*#__PURE__*/__webpack_require__.n(dayjs_min);
// EXTERNAL MODULE: ./assets/src/common/CreateOrUpdate.js
var CreateOrUpdate = __webpack_require__(3181);
// EXTERNAL MODULE: ./assets/src/common/SelectInput.js
var SelectInput = __webpack_require__(4378);
// EXTERNAL MODULE: ./assets/src/admin/components/Schedules.js
var Schedules = __webpack_require__(8253);
// EXTERNAL MODULE: ./assets/src/admin/utils/dummyData.js
var dummyData = __webpack_require__(5177);
// EXTERNAL MODULE: ./assets/src/common/TextInput.js
var TextInput = __webpack_require__(6582);
// EXTERNAL MODULE: ./assets/src/admin/pages/meeting/LocationType.js
var LocationType = __webpack_require__(5779);
// EXTERNAL MODULE: ./assets/src/admin/pages/meeting/TicketPrice.js
var TicketPrice = __webpack_require__(4500);
;// CONCATENATED MODULE: ./assets/src/admin/pages/meeting/steps/CreateStep.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











var __ = wp.i18n.__;


var React = window.React;
var useState = React.useState,
  useEffect = React.useEffect,
  useRef = React.useRef;
var _window$antd = window.antd,
  Col = _window$antd.Col,
  Row = _window$antd.Row,
  Form = _window$antd.Form,
  Button = _window$antd.Button,
  Space = _window$antd.Space,
  Select = _window$antd.Select;
var MEETING_TYPE = {
  oneToOne: "One-to-One",
  oneToMany: "One-to-Many",
  seat: "seat"
};
var ADDRESS_TYPE = {
  googleMeet: "google-meet",
  inPerson: "in-person-meeting",
  phoneCall: "phone-call"
};
function CreateStep(_ref) {
  var _meeting$locations;
  var onFinish = _ref.onFinish,
    _onFinishFailed = _ref.onFinishFailed,
    saveUpdate = _ref.saveUpdate;
  var _Form$useForm = Form.useForm(),
    _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
    form = _Form$useForm2[0];
  var _useMeetings = (0,useMeetings/* default */.Z)(),
    getStaffsSchedule = _useMeetings.getStaffsSchedule;
  var _useStateValue = (0,provider/* useStateValue */.K)(),
    _useStateValue2 = _slicedToArray(_useStateValue, 2),
    _useStateValue2$ = _useStateValue2[0],
    meetingReducer = _useStateValue2$.meeting,
    staffReducer = _useStateValue2$.staff,
    dispatch = _useStateValue2[1];
  var staffs = staffReducer.staffs;
  var _meetingReducer$meeti = meetingReducer.meeting,
    meeting = _meetingReducer$meeti === void 0 ? null : _meetingReducer$meeti,
    meetingId = meetingReducer.meetingId,
    loading = meetingReducer.loading,
    meetingType = meetingReducer.meetingType,
    _meetingReducer$meeti2 = meetingReducer.meetingCustom,
    meetingCustom = _meetingReducer$meeti2 === void 0 ? false : _meetingReducer$meeti2,
    meetingCustomValue = meetingReducer.meetingCustomValue,
    meetingStartDate = meetingReducer.meetingStartDate,
    meetingEndDate = meetingReducer.meetingEndDate,
    schedules = meetingReducer.schedules,
    _meetingReducer$selec = meetingReducer.selectedStaffIds,
    selectedStaffIds = _meetingReducer$selec === void 0 ? [] : _meetingReducer$selec,
    _meetingReducer$selec2 = meetingReducer.selectedStaff,
    selectedStaff = _meetingReducer$selec2 === void 0 ? [] : _meetingReducer$selec2,
    meetingDuration = meetingReducer.meetingDuration;
  var _useState = useState(["One-to-One", "One-to-Many", "seat"].includes(meetingType) ? "" : "multiple"),
    _useState2 = _slicedToArray(_useState, 2),
    staffSelectMode = _useState2[0],
    setStaffSelectMode = _useState2[1];
  var _useState3 = useState("09:00 AM"),
    _useState4 = _slicedToArray(_useState3, 2),
    startTime = _useState4[0],
    setStartTime = _useState4[1];
  var fp = useRef(null);
  useEffect(function () {
    form.setFieldsValue({
      staff: selectedStaffIds
    });
  }, [selectedStaffIds]);
  useEffect(function () {
    if (typeof window !== "undefined" && window.flatpickr && fp.current) {
      var _meeting$availability, _meeting$availability2, _meeting$availability3, _meeting$availability4, _window, _window$timetics;
      var inputEl = fp.current;
      var flatpickrInstance = window.flatpickr(inputEl, {
        defaultDate: meeting !== null && meeting !== void 0 && (_meeting$availability = meeting.availability) !== null && _meeting$availability !== void 0 && _meeting$availability.start && meeting !== null && meeting !== void 0 && (_meeting$availability2 = meeting.availability) !== null && _meeting$availability2 !== void 0 && _meeting$availability2.end ? [meeting === null || meeting === void 0 ? void 0 : (_meeting$availability3 = meeting.availability) === null || _meeting$availability3 === void 0 ? void 0 : _meeting$availability3.start, meeting === null || meeting === void 0 ? void 0 : (_meeting$availability4 = meeting.availability) === null || _meeting$availability4 === void 0 ? void 0 : _meeting$availability4.end] : [],
        // showMonths: 2,
        locale: {
          firstDayOfWeek: (0,helpers/* convertWeekDayToNumber */.wR)((_window = window) === null || _window === void 0 ? void 0 : (_window$timetics = _window.timetics) === null || _window$timetics === void 0 ? void 0 : _window$timetics.start_of_week) // start week on Monday
        },

        altFormat: "F j, Y",
        dateFormat: "Y-m-d",
        minDate: "today",
        // monthSelectorType: "static",
        mode: "range",
        onChange: function onChange(selectedDates, dateStr, instance) {
          // const day = getWeekDay(new Date(dateStr));

          dispatch({
            type: actions/* actions.SET_META_DATA_WITH_MEETING */.N.SET_META_DATA_WITH_MEETING,
            payload: {
              meetingStartDate: dayjs_min_default()(selectedDates[0]).format("YYYY-MM-DD"),
              meetingEndDate: dayjs_min_default()(selectedDates[1]).format("YYYY-MM-DD")
            }
          });
        }
      });
      return function () {
        flatpickrInstance.destroy();
      };
    }
  }, []);
  var selectStaffHandler = function selectStaffHandler(_ref2) {
    var values = _ref2.values,
      option = _ref2.option;
    var _staffs = [];
    var _staffsIds = [];
    var _schedules = {};
    if (Array.isArray(option)) {
      var _id = values.filter(function (id) {
        return !_toConsumableArray(selectedStaffIds).includes(id);
      });
      if (_id.length > 0) {
        _schedules[_id[0]] = getStaffsSchedule({
          staffId: _id[0]
        }); //dummySchedules({startTime,duration: meetingDuration,});
      }

      _staffs = option;
      _staffsIds = values;
      (0,common/* setState */.I)({
        dispatch: dispatch,
        name: "schedules",
        value: _objectSpread(_objectSpread({}, schedules), _schedules)
      });
    } else {
      _staffs = [option];
      _staffsIds = [values];
      _schedules[values] = getStaffsSchedule({
        staffId: values
      }); //dummySchedules({startTime,duration: meetingDuration,});
      (0,common/* setState */.I)({
        dispatch: dispatch,
        name: "schedules",
        value: _objectSpread({}, _schedules)
      });
    }
    (0,common/* setState */.I)({
      dispatch: dispatch,
      name: "selectedStaff",
      value: _staffs
    });
    (0,common/* setState */.I)({
      dispatch: dispatch,
      name: "selectedStaffIds",
      value: _staffsIds
    });
  };
  var deselectStaffHandler = function deselectStaffHandler(_ref3) {
    var id = _ref3.id,
      option = _ref3.option;
    var _schedules = _objectSpread({}, schedules);
    delete _schedules[id];
    (0,common/* setState */.I)({
      dispatch: dispatch,
      name: "schedules",
      value: _objectSpread({}, _schedules)
    });
    var _staffs = _toConsumableArray(selectedStaff);
    var _staffsIds = _toConsumableArray(selectedStaffIds);
    _staffs = _staffs.filter(function (item) {
      return item.id !== id;
    });
    _staffsIds = _staffsIds.filter(function (item) {
      return item !== id;
    });
    (0,common/* setState */.I)({
      dispatch: dispatch,
      name: "selectedStaff",
      value: _staffs
    });
    (0,common/* setState */.I)({
      dispatch: dispatch,
      name: "selectedStaffIds",
      value: _staffsIds
    });
    form.setFieldsValue({
      staff: _staffsIds
    });
  };
  var onFinished = function onFinished(values) {
    var _meetinBufferTime = 0;
    if (values !== null && values !== void 0 && values.buffer_time) {
      var _values$buffer_time;
      if ((values === null || values === void 0 ? void 0 : (_values$buffer_time = values.buffer_time) === null || _values$buffer_time === void 0 ? void 0 : _values$buffer_time.split(" ")[1]) == "hr") {
        _meetinBufferTime = +(values === null || values === void 0 ? void 0 : values.buffer_time.split(" ")[0]) * 60;
      } else {
        _meetinBufferTime = +(values === null || values === void 0 ? void 0 : values.buffer_time.split(" ")[0]);
      }
    }
    dispatch({
      type: actions/* actions.SET_META_DATA_WITH_MEETING */.N.SET_META_DATA_WITH_MEETING,
      payload: {
        meetingBufferTime: _meetinBufferTime
      }
    });
    onFinish(_objectSpread(_objectSpread(_objectSpread({}, meeting), values), {}, {
      availability: {
        start: meetingStartDate,
        end: meetingEndDate
      },
      duration: "30 min",
      fleunt_crm_webhook: "",
      price: [{
        "ticket_name": "default",
        "ticket_price": "",
        "ticket_quantity": "1"
      }],
      seat_plan: [],
      seat_plan_settings: '',
      visibility: "enabled"
    }));
  };
  return /*#__PURE__*/React.createElement(Form, {
    name: "dynamic_form_complex",
    layout: "vertical",
    autoComplete: "on",
    onFinish: onFinished,
    onFinishFailed: function onFinishFailed(errorInfo) {
      _onFinishFailed(_objectSpread(_objectSpread({}, errorInfo), {}, {
        values: _objectSpread(_objectSpread({}, errorInfo === null || errorInfo === void 0 ? void 0 : errorInfo.values), {}, {
          meeting_start_date: meetingStartDate,
          meeting_end_date: meetingEndDate
        })
      }));
    },
    initialValues: _objectSpread(_objectSpread({}, meeting), {}, {
      staff: selectedStaffIds,
      locations: meeting !== null && meeting !== void 0 && (_meeting$locations = meeting.locations) !== null && _meeting$locations !== void 0 && _meeting$locations.length ? meeting === null || meeting === void 0 ? void 0 : meeting.locations : [meetingType === MEETING_TYPE.seat ? {
        location_type: ADDRESS_TYPE.inPerson,
        location: ""
      } : {
        location_type: ADDRESS_TYPE.googleMeet,
        location: "Google Meet"
      }]
    })
  }, /*#__PURE__*/React.createElement(TextInput/* default */.Z, {
    label: __("Title", "timetics"),
    name: "name",
    required: true,
    rules: [{
      required: true,
      message: __("Please enter title!", "timetics")
    }],
    type: "text",
    size: "small",
    placeholder: __("Title", "timetics")
  }), loading == false && /*#__PURE__*/React.createElement(LocationType/* default */.Z, {
    form: form
  }), /*#__PURE__*/React.createElement(Form.Item, {
    className: "timetics-input",
    label: __("Meeting date range (meeting availibility)", "timetics"),
    labelCol: 24,
    wrapperCol: 24,
    name: "meeting_date_range"
    // rules={rules}
  }, /*#__PURE__*/React.createElement("input", {
    placeholder: "Select booking date",
    ref: fp,
    type: "text",
    className: "tt-flat-picker-input ant-input ant-input-lg",
    id: "booking-date",
    name: "booking-date"
  })), wp.hooks.applyFilters("ticket_price_repeater"), (meetingReducer === null || meetingReducer === void 0 ? void 0 : meetingReducer.meetingType) == "One-to-One" && /*#__PURE__*/React.createElement(TicketPrice/* default */.Z, null), /*#__PURE__*/React.createElement(Form.Item, {
    className: "timetics-input ",
    wrapperCol: 24,
    name: "staff",
    label: __("select host", "timetics"),
    rules: [{
      required: true,
      message: __("Please select host", "timetics")
    }]
  }, /*#__PURE__*/React.createElement(Select, {
    style: {
      width: "100%"
    },
    className: "tt-host-input timetics-input",
    placeholder: __("Select host", "timetics"),
    key: "staff",
    options: staffs,
    value: selectedStaffIds,
    fieldNames: {
      label: "full_name",
      value: "id"
    },
    mode: staffSelectMode,
    onChange: function onChange(values, option) {
      selectStaffHandler({
        values: values,
        option: option
      });
    },
    onDeselect: function onDeselect(id, option) {
      deselectStaffHandler({
        id: id,
        option: option
      });
    }
  })), selectedStaff !== null && selectedStaff !== void 0 && selectedStaff.length ? /*#__PURE__*/React.createElement(Form.Item, {
    className: "timetics-input ",
    wrapperCol: 24,
    label: __("Select availability ", "timetics")
  }, /*#__PURE__*/React.createElement(Schedules/* default */.Z, {
    meetingType: meetingType,
    schedules: schedules,
    selectedStaffIds: selectedStaffIds,
    selectedStaff: selectedStaff,
    meetingDuration: meetingDuration
  })) : null, /*#__PURE__*/React.createElement(Row, {
    justify: "end"
  }, /*#__PURE__*/React.createElement(Space, null, saveUpdate ? /*#__PURE__*/React.createElement(Button, {
    size: "large",
    type: "primary",
    htmlType: "submit"
  }, __("Save Updates", "timetics")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(CreateOrUpdate/* default */.Z, {
    id: meetingId,
    type: "primary",
    htmlType: "submit",
    size: "large",
    buttonText: meetingId ? "Update Meeting" : "Create Meeting"
  })))));
}
/* harmony default export */ const steps_CreateStep = (CreateStep);
;// CONCATENATED MODULE: ./assets/src/admin/pages/meeting/CreateMeeting.js
function CreateMeeting_slicedToArray(arr, i) { return CreateMeeting_arrayWithHoles(arr) || CreateMeeting_iterableToArrayLimit(arr, i) || CreateMeeting_unsupportedIterableToArray(arr, i) || CreateMeeting_nonIterableRest(); }
function CreateMeeting_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function CreateMeeting_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return CreateMeeting_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return CreateMeeting_arrayLikeToArray(o, minLen); }
function CreateMeeting_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function CreateMeeting_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function CreateMeeting_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var CreateMeeting_React = window.React;
var CreateMeeting_useState = CreateMeeting_React.useState,
  CreateMeeting_useEffect = CreateMeeting_React.useEffect;
var CreateMeeting_window$antd = window.antd,
  CreateMeeting_Button = CreateMeeting_window$antd.Button,
  CreateMeeting_Form = CreateMeeting_window$antd.Form,
  Typography = CreateMeeting_window$antd.Typography;
var Title = Typography.Title;
var CreateMeeting_ = wp.i18n.__;













function CreateMeeting() {
  var navigate = (0,dist/* useNavigate */.s0)();
  var _useStateValue = (0,provider/* useStateValue */.K)(),
    _useStateValue2 = CreateMeeting_slicedToArray(_useStateValue, 2),
    _useStateValue2$ = _useStateValue2[0],
    meetingReducer = _useStateValue2$.meeting,
    staff = _useStateValue2$.staff,
    dispatch = _useStateValue2[1];
  var _useSearchParams = (0,react_router_dom_dist/* useSearchParams */.lr)(),
    _useSearchParams2 = CreateMeeting_slicedToArray(_useSearchParams, 1),
    searchParams = _useSearchParams2[0];
  var getConfig = (0,UseRequestConfig/* default */.Z)();
  var _Form$useForm = CreateMeeting_Form.useForm(),
    _Form$useForm2 = CreateMeeting_slicedToArray(_Form$useForm, 1),
    form = _Form$useForm2[0];
  var _useState = CreateMeeting_useState(1),
    _useState2 = CreateMeeting_slicedToArray(_useState, 2),
    current = _useState2[0],
    setCurrent = _useState2[1];
  var _useMeetings = (0,useMeetings/* default */.Z)(),
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
  CreateMeeting_useEffect(function () {
    return function () {
      (0,common/* setState */.I)({
        dispatch: dispatch,
        name: "meeting",
        value: null
      });
      (0,common/* setState */.I)({
        dispatch: dispatch,
        name: "meetingId",
        value: null
      });
      (0,common/* setState */.I)({
        dispatch: dispatch,
        name: "meetingType",
        value: "One-to-One"
      });
      (0,common/* setState */.I)({
        dispatch: dispatch,
        name: "schedules",
        value: undefined
      });
      (0,common/* setState */.I)({
        dispatch: dispatch,
        name: "selectedStaffIds",
        value: []
      });
      (0,common/* setState */.I)({
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
    return /*#__PURE__*/CreateMeeting_React.createElement(Spinner/* default */.Z, {
      tip: CreateMeeting_("Loading...", "timetics"),
      type: "info",
      size: "large",
      wrapperClassName: "tt-spinner-wrapper"
    });
  }
  return /*#__PURE__*/CreateMeeting_React.createElement(CreateMeeting_React.Fragment, null, /*#__PURE__*/CreateMeeting_React.createElement("div", {
    className: "tt-container-wrapper"
  }, /*#__PURE__*/CreateMeeting_React.createElement(CreateMeeting_Button, {
    className: "tt-mb-20",
    size: "large",
    onClick: function onClick() {
      (0,common/* setState */.I)({
        dispatch: dispatch,
        name: "meeting",
        value: null
      });
      (0,common/* setState */.I)({
        dispatch: dispatch,
        name: "meetingId",
        value: null
      });
      navigate("/meetings");
    }
  }, CreateMeeting_("Back to Meetings", "timetics")), /*#__PURE__*/CreateMeeting_React.createElement(Title, {
    level: 3,
    className: "tt-meeting-type"
  }, meetingReducer === null || meetingReducer === void 0 ? void 0 : meetingReducer.meetingTitle), /*#__PURE__*/CreateMeeting_React.createElement("div", {
    className: "tt-form-container"
  }, /*#__PURE__*/CreateMeeting_React.createElement(steps_CreateStep, {
    onFinishFailed: onFinishFailed,
    onFinish: onFinish
  }))));
}
/* harmony default export */ const meeting_CreateMeeting = (CreateMeeting);

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