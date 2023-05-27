/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 664:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? factory(exports, __webpack_require__(363)) :
	0;
}(this, (function (exports, React) { 'use strict';

	React = React && Object.prototype.hasOwnProperty.call(React, 'default') ? React['default'] : React;

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
	var ReactPropTypesSecret_1 = ReactPropTypesSecret;

	function emptyFunction() {}

	function emptyFunctionWithReset() {}

	emptyFunctionWithReset.resetWarningCache = emptyFunction;

	var factoryWithThrowingShims = function () {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret_1) {
	      // It is still safe when called from React.
	      return;
	    }

	    var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
	    err.name = 'Invariant Violation';
	    throw err;
	  }
	  shim.isRequired = shim;

	  function getShim() {
	    return shim;
	  }
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.

	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,
	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    elementType: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim,
	    checkPropTypes: emptyFunctionWithReset,
	    resetWarningCache: emptyFunction
	  };
	  ReactPropTypes.PropTypes = ReactPropTypes;
	  return ReactPropTypes;
	};

	var propTypes = createCommonjsModule(function (module) {
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	{
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = factoryWithThrowingShims();
	}
	});

	function ownKeys(object, enumerableOnly) {
	  var keys = Object.keys(object);

	  if (Object.getOwnPropertySymbols) {
	    var symbols = Object.getOwnPropertySymbols(object);

	    if (enumerableOnly) {
	      symbols = symbols.filter(function (sym) {
	        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
	      });
	    }

	    keys.push.apply(keys, symbols);
	  }

	  return keys;
	}

	function _objectSpread2(target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i] != null ? arguments[i] : {};

	    if (i % 2) {
	      ownKeys(Object(source), true).forEach(function (key) {
	        _defineProperty(target, key, source[key]);
	      });
	    } else if (Object.getOwnPropertyDescriptors) {
	      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
	    } else {
	      ownKeys(Object(source)).forEach(function (key) {
	        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
	      });
	    }
	  }

	  return target;
	}

	function _typeof(obj) {
	  "@babel/helpers - typeof";

	  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
	    _typeof = function (obj) {
	      return typeof obj;
	    };
	  } else {
	    _typeof = function (obj) {
	      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	    };
	  }

	  return _typeof(obj);
	}

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	}

	function _slicedToArray(arr, i) {
	  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
	}

	function _arrayWithHoles(arr) {
	  if (Array.isArray(arr)) return arr;
	}

	function _iterableToArrayLimit(arr, i) {
	  var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);

	  if (_i == null) return;
	  var _arr = [];
	  var _n = true;
	  var _d = false;

	  var _s, _e;

	  try {
	    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
	      _arr.push(_s.value);

	      if (i && _arr.length === i) break;
	    }
	  } catch (err) {
	    _d = true;
	    _e = err;
	  } finally {
	    try {
	      if (!_n && _i["return"] != null) _i["return"]();
	    } finally {
	      if (_d) throw _e;
	    }
	  }

	  return _arr;
	}

	function _unsupportedIterableToArray(o, minLen) {
	  if (!o) return;
	  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
	  var n = Object.prototype.toString.call(o).slice(8, -1);
	  if (n === "Object" && o.constructor) n = o.constructor.name;
	  if (n === "Map" || n === "Set") return Array.from(o);
	  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
	}

	function _arrayLikeToArray(arr, len) {
	  if (len == null || len > arr.length) len = arr.length;

	  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

	  return arr2;
	}

	function _nonIterableRest() {
	  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}

	var usePrevious = function usePrevious(value) {
	  var ref = React.useRef(value);
	  React.useEffect(function () {
	    ref.current = value;
	  }, [value]);
	  return ref.current;
	};

	var isUnknownObject = function isUnknownObject(raw) {
	  return raw !== null && _typeof(raw) === 'object';
	};
	var isPromise = function isPromise(raw) {
	  return isUnknownObject(raw) && typeof raw.then === 'function';
	}; // We are using types to enforce the `stripe` prop in this lib,
	// but in an untyped integration `stripe` could be anything, so we need
	// to do some sanity validation to prevent type errors.

	var isStripe = function isStripe(raw) {
	  return isUnknownObject(raw) && typeof raw.elements === 'function' && typeof raw.createToken === 'function' && typeof raw.createPaymentMethod === 'function' && typeof raw.confirmCardPayment === 'function';
	};

	var PLAIN_OBJECT_STR = '[object Object]';
	var isEqual = function isEqual(left, right) {
	  if (!isUnknownObject(left) || !isUnknownObject(right)) {
	    return left === right;
	  }

	  var leftArray = Array.isArray(left);
	  var rightArray = Array.isArray(right);
	  if (leftArray !== rightArray) return false;
	  var leftPlainObject = Object.prototype.toString.call(left) === PLAIN_OBJECT_STR;
	  var rightPlainObject = Object.prototype.toString.call(right) === PLAIN_OBJECT_STR;
	  if (leftPlainObject !== rightPlainObject) return false; // not sure what sort of special object this is (regexp is one option), so
	  // fallback to reference check.

	  if (!leftPlainObject && !leftArray) return left === right;
	  var leftKeys = Object.keys(left);
	  var rightKeys = Object.keys(right);
	  if (leftKeys.length !== rightKeys.length) return false;
	  var keySet = {};

	  for (var i = 0; i < leftKeys.length; i += 1) {
	    keySet[leftKeys[i]] = true;
	  }

	  for (var _i = 0; _i < rightKeys.length; _i += 1) {
	    keySet[rightKeys[_i]] = true;
	  }

	  var allKeys = Object.keys(keySet);

	  if (allKeys.length !== leftKeys.length) {
	    return false;
	  }

	  var l = left;
	  var r = right;

	  var pred = function pred(key) {
	    return isEqual(l[key], r[key]);
	  };

	  return allKeys.every(pred);
	};

	var extractAllowedOptionsUpdates = function extractAllowedOptionsUpdates(options, prevOptions, immutableKeys) {
	  if (!isUnknownObject(options)) {
	    return null;
	  }

	  return Object.keys(options).reduce(function (newOptions, key) {
	    var isUpdated = !isUnknownObject(prevOptions) || !isEqual(options[key], prevOptions[key]);

	    if (immutableKeys.includes(key)) {
	      if (isUpdated) {
	        console.warn("Unsupported prop change: options.".concat(key, " is not a mutable property."));
	      }

	      return newOptions;
	    }

	    if (!isUpdated) {
	      return newOptions;
	    }

	    return _objectSpread2(_objectSpread2({}, newOptions || {}), {}, _defineProperty({}, key, options[key]));
	  }, null);
	};

	var INVALID_STRIPE_ERROR = 'Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.'; // We are using types to enforce the `stripe` prop in this lib, but in a real
	// integration `stripe` could be anything, so we need to do some sanity
	// validation to prevent type errors.

	var validateStripe = function validateStripe(maybeStripe) {
	  if (maybeStripe === null || isStripe(maybeStripe)) {
	    return maybeStripe;
	  }

	  throw new Error(INVALID_STRIPE_ERROR);
	};

	var parseStripeProp = function parseStripeProp(raw) {
	  if (isPromise(raw)) {
	    return {
	      tag: 'async',
	      stripePromise: Promise.resolve(raw).then(validateStripe)
	    };
	  }

	  var stripe = validateStripe(raw);

	  if (stripe === null) {
	    return {
	      tag: 'empty'
	    };
	  }

	  return {
	    tag: 'sync',
	    stripe: stripe
	  };
	};

	var ElementsContext = /*#__PURE__*/React.createContext(null);
	ElementsContext.displayName = 'ElementsContext';
	var parseElementsContext = function parseElementsContext(ctx, useCase) {
	  if (!ctx) {
	    throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(useCase, " in an <Elements> provider."));
	  }

	  return ctx;
	};
	var CartElementContext = /*#__PURE__*/React.createContext(null);
	CartElementContext.displayName = 'CartElementContext';
	var parseCartElementContext = function parseCartElementContext(ctx, useCase) {
	  if (!ctx) {
	    throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(useCase, " in an <Elements> provider."));
	  }

	  return ctx;
	};
	/**
	 * The `Elements` provider allows you to use [Element components](https://stripe.com/docs/stripe-js/react#element-components) and access the [Stripe object](https://stripe.com/docs/js/initializing) in any nested component.
	 * Render an `Elements` provider at the root of your React app so that it is available everywhere you need it.
	 *
	 * To use the `Elements` provider, call `loadStripe` from `@stripe/stripe-js` with your publishable key.
	 * The `loadStripe` function will asynchronously load the Stripe.js script and initialize a `Stripe` object.
	 * Pass the returned `Promise` to `Elements`.
	 *
	 * @docs https://stripe.com/docs/stripe-js/react#elements-provider
	 */

	var Elements = function Elements(_ref) {
	  var rawStripeProp = _ref.stripe,
	      options = _ref.options,
	      children = _ref.children;
	  var parsed = React.useMemo(function () {
	    return parseStripeProp(rawStripeProp);
	  }, [rawStripeProp]);

	  var _React$useState = React.useState(null),
	      _React$useState2 = _slicedToArray(_React$useState, 2),
	      cart = _React$useState2[0],
	      setCart = _React$useState2[1];

	  var _React$useState3 = React.useState(null),
	      _React$useState4 = _slicedToArray(_React$useState3, 2),
	      cartState = _React$useState4[0],
	      setCartState = _React$useState4[1]; // For a sync stripe instance, initialize into context


	  var _React$useState5 = React.useState(function () {
	    return {
	      stripe: parsed.tag === 'sync' ? parsed.stripe : null,
	      elements: parsed.tag === 'sync' ? parsed.stripe.elements(options) : null
	    };
	  }),
	      _React$useState6 = _slicedToArray(_React$useState5, 2),
	      ctx = _React$useState6[0],
	      setContext = _React$useState6[1];

	  React.useEffect(function () {
	    var isMounted = true;

	    var safeSetContext = function safeSetContext(stripe) {
	      setContext(function (ctx) {
	        // no-op if we already have a stripe instance (https://github.com/stripe/react-stripe-js/issues/296)
	        if (ctx.stripe) return ctx;
	        return {
	          stripe: stripe,
	          elements: stripe.elements(options)
	        };
	      });
	    }; // For an async stripePromise, store it in context once resolved


	    if (parsed.tag === 'async' && !ctx.stripe) {
	      parsed.stripePromise.then(function (stripe) {
	        if (stripe && isMounted) {
	          // Only update Elements context if the component is still mounted
	          // and stripe is not null. We allow stripe to be null to make
	          // handling SSR easier.
	          safeSetContext(stripe);
	        }
	      });
	    } else if (parsed.tag === 'sync' && !ctx.stripe) {
	      // Or, handle a sync stripe instance going from null -> populated
	      safeSetContext(parsed.stripe);
	    }

	    return function () {
	      isMounted = false;
	    };
	  }, [parsed, ctx, options]); // Warn on changes to stripe prop

	  var prevStripe = usePrevious(rawStripeProp);
	  React.useEffect(function () {
	    if (prevStripe !== null && prevStripe !== rawStripeProp) {
	      console.warn('Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.');
	    }
	  }, [prevStripe, rawStripeProp]); // Apply updates to elements when options prop has relevant changes

	  var prevOptions = usePrevious(options);
	  React.useEffect(function () {
	    if (!ctx.elements) {
	      return;
	    }

	    var updates = extractAllowedOptionsUpdates(options, prevOptions, ['clientSecret', 'fonts']);

	    if (updates) {
	      ctx.elements.update(updates);
	    }
	  }, [options, prevOptions, ctx.elements]); // Attach react-stripe-js version to stripe.js instance

	  React.useEffect(function () {
	    var anyStripe = ctx.stripe;

	    if (!anyStripe || !anyStripe._registerWrapper || !anyStripe.registerAppInfo) {
	      return;
	    }

	    anyStripe._registerWrapper({
	      name: 'react-stripe-js',
	      version: "1.16.1"
	    });

	    anyStripe.registerAppInfo({
	      name: 'react-stripe-js',
	      version: "1.16.1",
	      url: 'https://stripe.com/docs/stripe-js/react'
	    });
	  }, [ctx.stripe]);
	  return /*#__PURE__*/React.createElement(ElementsContext.Provider, {
	    value: ctx
	  }, /*#__PURE__*/React.createElement(CartElementContext.Provider, {
	    value: {
	      cart: cart,
	      setCart: setCart,
	      cartState: cartState,
	      setCartState: setCartState
	    }
	  }, children));
	};
	Elements.propTypes = {
	  stripe: propTypes.any,
	  options: propTypes.object
	};
	var useElementsContextWithUseCase = function useElementsContextWithUseCase(useCaseMessage) {
	  var ctx = React.useContext(ElementsContext);
	  return parseElementsContext(ctx, useCaseMessage);
	};
	var useCartElementContextWithUseCase = function useCartElementContextWithUseCase(useCaseMessage) {
	  var ctx = React.useContext(CartElementContext);
	  return parseCartElementContext(ctx, useCaseMessage);
	};
	/**
	 * @docs https://stripe.com/docs/stripe-js/react#useelements-hook
	 */

	var useElements = function useElements() {
	  var _useElementsContextWi = useElementsContextWithUseCase('calls useElements()'),
	      elements = _useElementsContextWi.elements;

	  return elements;
	};
	/**
	 * @docs https://stripe.com/docs/stripe-js/react#usestripe-hook
	 */

	var useStripe = function useStripe() {
	  var _useElementsContextWi2 = useElementsContextWithUseCase('calls useStripe()'),
	      stripe = _useElementsContextWi2.stripe;

	  return stripe;
	};
	/**
	 * @docs https://stripe.com/docs/payments/checkout/cart-element
	 */

	var useCartElement = function useCartElement() {
	  var _useCartElementContex = useCartElementContextWithUseCase('calls useCartElement()'),
	      cart = _useCartElementContex.cart;

	  return cart;
	};
	/**
	 * @docs https://stripe.com/docs/payments/checkout/cart-element
	 */

	var useCartElementState = function useCartElementState() {
	  var _useCartElementContex2 = useCartElementContextWithUseCase('calls useCartElementState()'),
	      cartState = _useCartElementContex2.cartState;

	  return cartState;
	};
	/**
	 * @docs https://stripe.com/docs/stripe-js/react#elements-consumer
	 */

	var ElementsConsumer = function ElementsConsumer(_ref2) {
	  var children = _ref2.children;
	  var ctx = useElementsContextWithUseCase('mounts <ElementsConsumer>'); // Assert to satisfy the busted React.FC return type (it should be ReactNode)

	  return children(ctx);
	};
	ElementsConsumer.propTypes = {
	  children: propTypes.func.isRequired
	};

	var useAttachEvent = function useAttachEvent(elementRef, event, cb) {
	  React.useEffect(function () {
	    if (!cb || !elementRef.current) {
	      return function () {};
	    }

	    var element = elementRef.current;
	    element.on(event, cb);
	    return function () {
	      return element.off(event, cb);
	    };
	  }, [cb, event, elementRef]);
	};

	var capitalized = function capitalized(str) {
	  return str.charAt(0).toUpperCase() + str.slice(1);
	};

	var createElementComponent = function createElementComponent(type, isServer) {
	  var displayName = "".concat(capitalized(type), "Element");

	  var ClientElement = function ClientElement(_ref) {
	    var id = _ref.id,
	        className = _ref.className,
	        _ref$options = _ref.options,
	        options = _ref$options === void 0 ? {} : _ref$options,
	        onBlur = _ref.onBlur,
	        onFocus = _ref.onFocus,
	        onReady = _ref.onReady,
	        onChange = _ref.onChange,
	        onEscape = _ref.onEscape,
	        onClick = _ref.onClick,
	        onLoadError = _ref.onLoadError,
	        onLoaderStart = _ref.onLoaderStart,
	        onNetworksChange = _ref.onNetworksChange,
	        onCheckout = _ref.onCheckout,
	        onLineItemClick = _ref.onLineItemClick,
	        onConfirm = _ref.onConfirm,
	        onCancel = _ref.onCancel,
	        onShippingAddressChange = _ref.onShippingAddressChange,
	        onShippingRateChange = _ref.onShippingRateChange;

	    var _useElementsContextWi = useElementsContextWithUseCase("mounts <".concat(displayName, ">")),
	        elements = _useElementsContextWi.elements;

	    var elementRef = React.useRef(null);
	    var domNode = React.useRef(null);

	    var _useCartElementContex = useCartElementContextWithUseCase("mounts <".concat(displayName, ">")),
	        setCart = _useCartElementContex.setCart,
	        setCartState = _useCartElementContex.setCartState; // For every event where the merchant provides a callback, call element.on
	    // with that callback. If the merchant ever changes the callback, removes
	    // the old callback with element.off and then call element.on with the new one.


	    useAttachEvent(elementRef, 'blur', onBlur);
	    useAttachEvent(elementRef, 'focus', onFocus);
	    useAttachEvent(elementRef, 'escape', onEscape);
	    useAttachEvent(elementRef, 'click', onClick);
	    useAttachEvent(elementRef, 'loaderror', onLoadError);
	    useAttachEvent(elementRef, 'loaderstart', onLoaderStart);
	    useAttachEvent(elementRef, 'networkschange', onNetworksChange);
	    useAttachEvent(elementRef, 'lineitemclick', onLineItemClick);
	    useAttachEvent(elementRef, 'confirm', onConfirm);
	    useAttachEvent(elementRef, 'cancel', onCancel);
	    useAttachEvent(elementRef, 'shippingaddresschange', onShippingAddressChange);
	    useAttachEvent(elementRef, 'shippingratechange', onShippingRateChange);
	    var readyCallback;

	    if (type === 'cart') {
	      readyCallback = function readyCallback(event) {
	        setCartState(event);
	        onReady && onReady(event);
	      };
	    } else if (onReady) {
	      if (type === 'payButton') {
	        // Passes through the event, which includes visible PM types
	        readyCallback = onReady;
	      } else {
	        // For other Elements, pass through the Element itself.
	        readyCallback = function readyCallback() {
	          onReady(elementRef.current);
	        };
	      }
	    }

	    useAttachEvent(elementRef, 'ready', readyCallback);
	    var changeCallback = type === 'cart' ? function (event) {
	      setCartState(event);
	      onChange && onChange(event);
	    } : onChange;
	    useAttachEvent(elementRef, 'change', changeCallback);
	    var checkoutCallback = type === 'cart' ? function (event) {
	      setCartState(event);
	      onCheckout && onCheckout(event);
	    } : onCheckout;
	    useAttachEvent(elementRef, 'checkout', checkoutCallback);
	    React.useLayoutEffect(function () {
	      if (elementRef.current == null && elements && domNode.current != null) {
	        var element = elements.create(type, options);

	        if (type === 'cart' && setCart) {
	          // we know that elements.create return value must be of type StripeCartElement if type is 'cart',
	          // we need to cast because typescript is not able to infer which overloaded method is used based off param type
	          setCart(element);
	        }

	        elementRef.current = element;
	        element.mount(domNode.current);
	      }
	    });
	    var prevOptions = usePrevious(options);
	    React.useEffect(function () {
	      if (!elementRef.current) {
	        return;
	      }

	      var updates = extractAllowedOptionsUpdates(options, prevOptions, ['paymentRequest']);

	      if (updates) {
	        elementRef.current.update(updates);
	      }
	    }, [options, prevOptions]);
	    React.useLayoutEffect(function () {
	      return function () {
	        if (elementRef.current) {
	          elementRef.current.destroy();
	          elementRef.current = null;
	        }
	      };
	    }, []);
	    return /*#__PURE__*/React.createElement("div", {
	      id: id,
	      className: className,
	      ref: domNode
	    });
	  }; // Only render the Element wrapper in a server environment.


	  var ServerElement = function ServerElement(props) {
	    // Validate that we are in the right context by calling useElementsContextWithUseCase.
	    useElementsContextWithUseCase("mounts <".concat(displayName, ">"));
	    useCartElementContextWithUseCase("mounts <".concat(displayName, ">"));
	    var id = props.id,
	        className = props.className;
	    return /*#__PURE__*/React.createElement("div", {
	      id: id,
	      className: className
	    });
	  };

	  var Element = isServer ? ServerElement : ClientElement;
	  Element.propTypes = {
	    id: propTypes.string,
	    className: propTypes.string,
	    onChange: propTypes.func,
	    onBlur: propTypes.func,
	    onFocus: propTypes.func,
	    onReady: propTypes.func,
	    onEscape: propTypes.func,
	    onClick: propTypes.func,
	    onLoadError: propTypes.func,
	    onLoaderStart: propTypes.func,
	    onNetworksChange: propTypes.func,
	    onCheckout: propTypes.func,
	    onLineItemClick: propTypes.func,
	    onConfirm: propTypes.func,
	    onCancel: propTypes.func,
	    onShippingAddressChange: propTypes.func,
	    onShippingRateChange: propTypes.func,
	    options: propTypes.object
	  };
	  Element.displayName = displayName;
	  Element.__elementType = type;
	  return Element;
	};

	var isServer = typeof window === 'undefined';
	/**
	 * Requires beta access:
	 * Contact [Stripe support](https://support.stripe.com/) for more information.
	 *
	 * @docs https://stripe.com/docs/stripe-js/react#element-components
	 */

	var AuBankAccountElement = createElementComponent('auBankAccount', isServer);
	/**
	 * @docs https://stripe.com/docs/stripe-js/react#element-components
	 */

	var CardElement = createElementComponent('card', isServer);
	/**
	 * @docs https://stripe.com/docs/stripe-js/react#element-components
	 */

	var CardNumberElement = createElementComponent('cardNumber', isServer);
	/**
	 * @docs https://stripe.com/docs/stripe-js/react#element-components
	 */

	var CardExpiryElement = createElementComponent('cardExpiry', isServer);
	/**
	 * @docs https://stripe.com/docs/stripe-js/react#element-components
	 */

	var CardCvcElement = createElementComponent('cardCvc', isServer);
	/**
	 * @docs https://stripe.com/docs/stripe-js/react#element-components
	 */

	var FpxBankElement = createElementComponent('fpxBank', isServer);
	/**
	 * @docs https://stripe.com/docs/stripe-js/react#element-components
	 */

	var IbanElement = createElementComponent('iban', isServer);
	/**
	 * @docs https://stripe.com/docs/stripe-js/react#element-components
	 */

	var IdealBankElement = createElementComponent('idealBank', isServer);
	/**
	 * @docs https://stripe.com/docs/stripe-js/react#element-components
	 */

	var P24BankElement = createElementComponent('p24Bank', isServer);
	/**
	 * @docs https://stripe.com/docs/stripe-js/react#element-components
	 */

	var EpsBankElement = createElementComponent('epsBank', isServer);
	var PaymentElement = createElementComponent('payment', isServer);
	/**
	 * Requires beta access:
	 * Contact [Stripe support](https://support.stripe.com/) for more information.
	 *
	 * @docs https://stripe.com/docs/stripe-js/react#element-components
	 */

	var PayButtonElement = createElementComponent('payButton', isServer);
	/**
	 * @docs https://stripe.com/docs/stripe-js/react#element-components
	 */

	var PaymentRequestButtonElement = createElementComponent('paymentRequestButton', isServer);
	/**
	 * Requires beta access:
	 * Contact [Stripe support](https://support.stripe.com/) for more information.
	 *
	 * @docs https://stripe.com/docs/stripe-js/react#element-components
	 */

	var LinkAuthenticationElement = createElementComponent('linkAuthentication', isServer);
	/**
	 * @docs https://stripe.com/docs/stripe-js/react#element-components
	 */

	var AddressElement = createElementComponent('address', isServer);
	/**
	 * @deprecated
	 * Use `AddressElement` instead.
	 *
	 * @docs https://stripe.com/docs/stripe-js/react#element-components
	 */

	var ShippingAddressElement = createElementComponent('shippingAddress', isServer);
	/**
	 * Requires beta access:
	 * Contact [Stripe support](https://support.stripe.com/) for more information.
	 *
	 * @docs https://stripe.com/docs/elements/cart-element
	 */

	var CartElement = createElementComponent('cart', isServer);
	/**
	 * @docs https://stripe.com/docs/stripe-js/react#element-components
	 */

	var PaymentMethodMessagingElement = createElementComponent('paymentMethodMessaging', isServer);
	/**
	 * @docs https://stripe.com/docs/stripe-js/react#element-components
	 */

	var AffirmMessageElement = createElementComponent('affirmMessage', isServer);
	/**
	 * @docs https://stripe.com/docs/stripe-js/react#element-components
	 */

	var AfterpayClearpayMessageElement = createElementComponent('afterpayClearpayMessage', isServer);

	exports.AddressElement = AddressElement;
	exports.AffirmMessageElement = AffirmMessageElement;
	exports.AfterpayClearpayMessageElement = AfterpayClearpayMessageElement;
	exports.AuBankAccountElement = AuBankAccountElement;
	exports.CardCvcElement = CardCvcElement;
	exports.CardElement = CardElement;
	exports.CardExpiryElement = CardExpiryElement;
	exports.CardNumberElement = CardNumberElement;
	exports.CartElement = CartElement;
	exports.Elements = Elements;
	exports.ElementsConsumer = ElementsConsumer;
	exports.EpsBankElement = EpsBankElement;
	exports.FpxBankElement = FpxBankElement;
	exports.IbanElement = IbanElement;
	exports.IdealBankElement = IdealBankElement;
	exports.LinkAuthenticationElement = LinkAuthenticationElement;
	exports.P24BankElement = P24BankElement;
	exports.PayButtonElement = PayButtonElement;
	exports.PaymentElement = PaymentElement;
	exports.PaymentMethodMessagingElement = PaymentMethodMessagingElement;
	exports.PaymentRequestButtonElement = PaymentRequestButtonElement;
	exports.ShippingAddressElement = ShippingAddressElement;
	exports.useCartElement = useCartElement;
	exports.useCartElementState = useCartElementState;
	exports.useElements = useElements;
	exports.useStripe = useStripe;

	Object.defineProperty(exports, '__esModule', { value: true });

})));


/***/ }),

/***/ 71:
/***/ (() => {

jQuery(document).ready(function ($) {
  $(".tt-meeting-list-item .ant-btn").on("click", function () {
    var id = $(this).data("id");
    var getSelectedId = new CustomEvent("getSelectedId", {
      detail: {
        id: id,
        modal: true
      }
    });
    // To trigger the Event
    document.dispatchEvent(getSelectedId);
  });
});

/***/ }),

/***/ 484:
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}(this,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",f="month",h="quarter",c="year",d="date",l="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},v={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,f),s=n-i<0,u=e.clone().add(r+(s?-1:1),f);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:f,y:c,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",D={};D[g]=M;var p=function(t){return t instanceof _},S=function t(e,n,r){var i;if(!e)return g;if("string"==typeof e){var s=e.toLowerCase();D[s]&&(i=s),n&&(D[s]=n,i=s);var u=e.split("-");if(!i&&u.length>1)return t(u[0])}else{var a=e.name;D[a]=e,i=a}return!r&&i&&(g=i),i||!r&&g},w=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},O=v;O.l=S,O.i=p,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=S(t.locale,null,!0),this.parse(t)}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return O},m.isValid=function(){return!(this.$d.toString()===l)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!O.u(e)||e,h=O.p(t),l=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},$=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,v="set"+(this.$u?"UTC":"");switch(h){case c:return r?l(1,0):l(31,11);case f:return r?l(1,M):l(0,M+1);case o:var g=this.$locale().weekStart||0,D=(y<g?y+7:y)-g;return l(r?m-D:m+(6-D),M);case a:case d:return $(v+"Hours",0);case u:return $(v+"Minutes",1);case s:return $(v+"Seconds",2);case i:return $(v+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=O.p(t),h="set"+(this.$u?"UTC":""),l=(n={},n[a]=h+"Date",n[d]=h+"Date",n[f]=h+"Month",n[c]=h+"FullYear",n[u]=h+"Hours",n[s]=h+"Minutes",n[i]=h+"Seconds",n[r]=h+"Milliseconds",n)[o],$=o===a?this.$D+(e-this.$W):e;if(o===f||o===c){var y=this.clone().set(d,1);y.$d[l]($),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else l&&this.$d[l]($);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(r,h){var d,l=this;r=Number(r);var $=O.p(h),y=function(t){var e=w(l);return O.w(e.date(e.date()+Math.round(t*r)),l)};if($===f)return this.set(f,this.$M+r);if($===c)return this.set(c,this.$y+r);if($===a)return y(1);if($===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[$]||1,m=this.$d.getTime()+r*M;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,f=n.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},c=function(t){return O.s(s%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},$={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:O.s(a+1,2,"0"),MMM:h(n.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,o,2),ddd:h(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:O.s(s,2,"0"),h:c(1),hh:c(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:O.s(u,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:i};return r.replace(y,(function(t,e){return e||$[t]||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,l){var $,y=O.p(d),M=w(r),m=(M.utcOffset()-this.utcOffset())*e,v=this-M,g=O.m(this,M);return g=($={},$[c]=g/12,$[f]=g,$[h]=g/3,$[o]=(v-m)/6048e5,$[a]=(v-m)/864e5,$[u]=v/n,$[s]=v/e,$[i]=v/t,$)[y]||v,l?g:O.a(g)},m.daysInMonth=function(){return this.endOf(f).$D},m.$locale=function(){return D[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),T=_.prototype;return w.prototype=T,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",f],["$y",c],["$D",d]].forEach((function(t){T[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,_,w),t.$i=!0),w},w.locale=S,w.isDayjs=p,w.unix=function(t){return w(1e3*t)},w.en=D[g],w.Ls=D,w.p={},w}));

/***/ }),

/***/ 230:
/***/ ((module) => {

/* eslint-env browser */
module.exports = typeof self == 'object' ? self.FormData : window.FormData;


/***/ }),

/***/ 363:
/***/ ((module) => {

"use strict";
module.exports = React;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

;// CONCATENATED MODULE: ./assets/src/common/Spinner.js
var _antd = antd,
  Alert = _antd.Alert,
  Spin = _antd.Spin;
var Spinner_React = window.React;
function Spinner(_ref) {
  var tip = _ref.tip,
    msg = _ref.msg,
    desc = _ref.desc,
    type = _ref.type,
    wrapperClassName = _ref.wrapperClassName;
  return /*#__PURE__*/Spinner_React.createElement(Spin, {
    className: "tt-loader-spinner",
    tip: tip,
    wrapperClassName: wrapperClassName
  }, msg && desc && /*#__PURE__*/Spinner_React.createElement(Alert, {
    message: msg,
    description: desc,
    type: type
  }));
}
/* harmony default export */ const common_Spinner = (Spinner);
;// CONCATENATED MODULE: ./assets/src/frontend/actionCreators/actions.js
var actions_actions = {
  SET_LOADING: "SET_LOADING",
  SET_DATA_CONTROLS: "SET_DATA_CONTROLS",
  SET_SINGLE_MEETING_DATA: "SET_SINGLE_MEETING_DATA",
  SET_STATE: "SET_STATE",
  SET_MEETING_SLOTS: "SET_MEETING_SLOTS",
  CLEAR_BOOKING_RELATED_DATA: "CLEAR_BOOKING_RELATED_DATA",
  BOOKING_STATUS_CANCEL: "BOOKING_STATUS_CANCEL"
};
;// CONCATENATED MODULE: ./assets/src/frontend/reducers/meetingReducer.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var demo = "demo";
var meetingReducer = function meetingReducer(state, action) {
  switch (action.type) {
    case actions_actions.SET_STATE:
      {
        var payload = action.payload;
        return _objectSpread(_objectSpread({}, state), payload);
      }
    case actions_actions.SET_LOADING:
      {
        var _payload = action.payload;
        return _objectSpread(_objectSpread({}, state), {}, {
          loading: _payload
        });
      }
    case actions_actions.SET_DATA_CONTROLS:
      {
        var _payload2 = action.payload;
        return _objectSpread(_objectSpread({}, state), {}, {
          dataControls: _payload2
        });
      }
    case actions_actions.SET_SINGLE_MEETING_DATA:
      {
        var _payload3 = action.payload;
        return _objectSpread(_objectSpread({}, state), _payload3);
      }
    case actions_actions.SET_MEETING_SLOTS:
      {
        var _payload4 = action.payload;
        return _objectSpread(_objectSpread({}, state), _payload4);
      }
    case actions_actions.CLEAR_BOOKING_RELATED_DATA:
      {
        var _payload5 = action.payload;
        return _objectSpread(_objectSpread({}, state), {}, {
          step: 1,
          paymentStatus: null,
          response: null,
          contactInfo: null,
          bookingTime: "",
          selectedDate: null,
          selectedDaysSlots: [],
          selectedDay: null,
          unavailableDays: [],
          unavailableDayNumber: [],
          selectedStaff: null
        }, _payload5);
      }
    default:
      return state;
  }
};
;// CONCATENATED MODULE: ./assets/src/frontend/reducers/index.js

var mainReducer = function mainReducer(_ref, action) {
  var meeting = _ref.meeting;
  return {
    meeting: meetingReducer(meeting, action)
  };
};
/* harmony default export */ const reducers = (mainReducer);
;// CONCATENATED MODULE: ./assets/src/frontend/context/createContext.js
var createContext_React = window.React;
var createContext = createContext_React.createContext;
var TimeTicsContext = createContext();
;// CONCATENATED MODULE: ./assets/src/frontend/context/state.js
var initialState = {
  staff: {
    staff: {}
  },
  meeting: {
    step: 1
  },
  booking: {},
  customers: {},
  settings: {}
};

;// CONCATENATED MODULE: ./assets/src/frontend/context/provider.js
var provider_React = window.React;
var useContext = provider_React.useContext,
  useReducer = provider_React.useReducer;



var TimeTicsProvider = function TimeTicsProvider(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/provider_React.createElement(TimeTicsContext.Provider, {
    value: useReducer(reducers, initialState)
  }, children);
};
var provider_useStateValue = function useStateValue() {
  return useContext(TimeTicsContext);
};
TimeTicsProvider = wp.hooks.applyFilters("timetics_ctx", TimeTicsProvider, provider_useStateValue);
/* harmony default export */ const provider = (TimeTicsProvider);
;// CONCATENATED MODULE: ./assets/src/common/icons/Icons.js
// Optimized icon component
var EditIcon = function EditIcon(_ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "none" : _ref$color,
    _ref$width = _ref.width,
    width = _ref$width === void 0 ? "15" : _ref$width,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? "15" : _ref$height;
  return /*#__PURE__*/React.createElement("span", {
    className: "anticon"
  }, /*#__PURE__*/React.createElement("svg", {
    width: width,
    height: height,
    viewBox: "0 0 15 15",
    fill: color,
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.28759 2.25001L3.15634 7.68126C2.96259 7.88751 2.77509 8.29376 2.73759 8.57501L2.50634 10.6C2.42509 11.3313 2.95009 11.8313 3.67509 11.7063L5.68759 11.3625C5.96884 11.3125 6.36259 11.1063 6.55634 10.8938L11.6876 5.46251C12.5751 4.52501 12.9751 3.45626 11.5938 2.15001C10.2188 0.856264 9.17509 1.31251 8.28759 2.25001Z",
    stroke: "#606469",
    strokeWidth: "1.2",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.43164 3.15625C7.70039 4.88125 9.10039 6.2 10.8379 6.375",
    stroke: "#606469",
    strokeWidth: "1.2",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M1.875 13.75H13.125",
    stroke: "#606469",
    strokeWidth: "1.2",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};
var DeleteIcon = function DeleteIcon(_ref2) {
  var _ref2$color = _ref2.color,
    color = _ref2$color === void 0 ? "#FF3B30" : _ref2$color,
    _ref2$width = _ref2.width,
    width = _ref2$width === void 0 ? "15" : _ref2$width,
    _ref2$height = _ref2.height,
    height = _ref2$height === void 0 ? "15" : _ref2$height;
  return /*#__PURE__*/React.createElement("span", {
    className: "anticon"
  }, /*#__PURE__*/React.createElement("svg", {
    width: width,
    height: height,
    viewBox: "0 0 15 15",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M13.125 3.7373C11.0438 3.53105 8.95 3.4248 6.8625 3.4248C5.625 3.4248 4.3875 3.4873 3.15 3.6123L1.875 3.7373",
    stroke: "#E42D23",
    strokeWidth: "1.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.3125 3.10625L5.45 2.2875C5.55 1.69375 5.625 1.25 6.68125 1.25H8.31875C9.375 1.25 9.45625 1.71875 9.55 2.29375L9.6875 3.10625",
    stroke: "#E42D23",
    strokeWidth: "1.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.7813 5.7124L11.375 12.0062C11.3063 12.9874 11.25 13.7499 9.50625 13.7499H5.49375C3.75 13.7499 3.69375 12.9874 3.625 12.0062L3.21875 5.7124",
    stroke: "#E42D23",
    strokeWidth: "1.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.45605 10.3125H8.5373",
    stroke: "#E42D23",
    strokeWidth: "1.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.9375 7.8125H9.0625",
    stroke: "#E42D23",
    strokeWidth: "1.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};
var CloneIcon = function CloneIcon(_ref3) {
  var _ref3$color = _ref3.color,
    color = _ref3$color === void 0 ? "none" : _ref3$color,
    _ref3$width = _ref3.width,
    width = _ref3$width === void 0 ? "15" : _ref3$width,
    _ref3$height = _ref3.height,
    height = _ref3$height === void 0 ? "15" : _ref3$height;
  return /*#__PURE__*/React.createElement("span", {
    className: "anticon"
  }, /*#__PURE__*/React.createElement("svg", {
    width: width,
    height: height,
    viewBox: "0 0 15 15",
    fill: color,
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#clip0_5047_444)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 10H3.39375C1.9625 10 1.25 9.2875 1.25 7.85625V3.39375C1.25 1.9625 1.9625 1.25 3.39375 1.25H6.25C7.68125 1.25 8.39375 1.9625 8.39375 3.39375",
    stroke: "#606469",
    strokeWidth: "1.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.6055 13.75H8.74922C7.31797 13.75 6.60547 13.0375 6.60547 11.6062V7.14375C6.60547 5.7125 7.31797 5 8.74922 5H11.6055C13.0367 5 13.7492 5.7125 13.7492 7.14375V11.6062C13.7492 13.0375 13.0367 13.75 11.6055 13.75Z",
    stroke: "#606469",
    strokeWidth: "1.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.29297 9.375H11.3305",
    stroke: "#606469",
    strokeWidth: "1.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.3125 10.3939V8.35645",
    stroke: "#606469",
    strokeWidth: "1.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "clip0_5047_444"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "15",
    height: "15",
    fill: "white"
  })))));
};
var CardViewIcon = function CardViewIcon(_ref4) {
  var _ref4$color = _ref4.color,
    color = _ref4$color === void 0 ? "#0A1018" : _ref4$color,
    _ref4$width = _ref4.width,
    width = _ref4$width === void 0 ? "18" : _ref4$width,
    _ref4$height = _ref4.height,
    height = _ref4$height === void 0 ? "18" : _ref4$height;
  return /*#__PURE__*/React.createElement("span", {
    className: "anticon"
  }, /*#__PURE__*/React.createElement("svg", {
    width: width,
    height: height,
    viewBox: "0 0 18 18",
    fill: color,
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M15.3001 6.8076V3.9474C15.3001 3.0591 14.8969 2.7 13.8952 2.7H11.35C10.3483 2.7 9.94507 3.0591 9.94507 3.9474V6.8013C9.94507 7.6959 10.3483 8.0487 11.35 8.0487H13.8952C14.8969 8.055 15.3001 7.6959 15.3001 6.8076Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.3001 13.8951V11.3499C15.3001 10.3482 14.8969 9.945 13.8952 9.945H11.35C10.3483 9.945 9.94507 10.3482 9.94507 11.3499V13.8951C9.94507 14.8968 10.3483 15.3 11.35 15.3H13.8952C14.8969 15.3 15.3001 14.8968 15.3001 13.8951Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.05495 6.8076V3.9474C8.05495 3.0591 7.65175 2.7 6.65005 2.7H4.10485C3.10315 2.7 2.69995 3.0591 2.69995 3.9474V6.8013C2.69995 7.6959 3.10315 8.0487 4.10485 8.0487H6.65005C7.65175 8.055 8.05495 7.6959 8.05495 6.8076Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.05495 13.8951V11.3499C8.05495 10.3482 7.65175 9.945 6.65005 9.945H4.10485C3.10315 9.945 2.69995 10.3482 2.69995 11.3499V13.8951C2.69995 14.8968 3.10315 15.3 4.10485 15.3H6.65005C7.65175 15.3 8.05495 14.8968 8.05495 13.8951Z"
  })));
};
var XIcon = function XIcon(_ref5) {
  var _ref5$color = _ref5.color,
    color = _ref5$color === void 0 ? "#0A1018" : _ref5$color,
    _ref5$width = _ref5.width,
    width = _ref5$width === void 0 ? "18" : _ref5$width,
    _ref5$height = _ref5.height,
    height = _ref5$height === void 0 ? "18" : _ref5$height;
  return /*#__PURE__*/React.createElement("span", {
    className: "anticon"
  }, /*#__PURE__*/React.createElement("svg", {
    width: width,
    height: height,
    viewBox: "0 0 18 18",
    fill: color,
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M14.1365 5.1364C14.488 4.78492 14.488 4.21508 14.1365 3.8636C13.785 3.51213 13.2152 3.51213 12.8637 3.8636L9.0001 7.72721L5.13649 3.8636C4.78502 3.51213 4.21517 3.51213 3.8637 3.8636C3.51223 4.21508 3.51223 4.78492 3.8637 5.1364L7.72731 9L3.8637 12.8636C3.51223 13.2151 3.51223 13.7849 3.8637 14.1364C4.21517 14.4879 4.78502 14.4879 5.13649 14.1364L9.0001 10.2728L12.8637 14.1364C13.2152 14.4879 13.785 14.4879 14.1365 14.1364C14.488 13.7849 14.488 13.2151 14.1365 12.8636L10.2729 9L14.1365 5.1364Z"
  })));
};
var CloseFillIcon = function CloseFillIcon(_ref6) {
  var _ref6$color = _ref6.color,
    color = _ref6$color === void 0 ? "#0A1018" : _ref6$color,
    _ref6$width = _ref6.width,
    width = _ref6$width === void 0 ? "18" : _ref6$width,
    _ref6$height = _ref6.height,
    height = _ref6$height === void 0 ? "18" : _ref6$height;
  return /*#__PURE__*/React.createElement("span", {
    className: "anticon"
  }, /*#__PURE__*/React.createElement("svg", {
    width: width,
    height: height,
    viewBox: "0 0 18 18",
    fill: color,
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.9998 1.8C5.0326 1.8 1.7998 5.0328 1.7998 9C1.7998 12.9672 5.0326 16.2 8.9998 16.2C12.967 16.2 16.1998 12.9672 16.1998 9C16.1998 5.0328 12.967 1.8 8.9998 1.8ZM11.419 10.656C11.6278 10.8648 11.6278 11.2104 11.419 11.4192C11.311 11.5272 11.1742 11.5776 11.0374 11.5776C10.9006 11.5776 10.7638 11.5272 10.6558 11.4192L8.9998 9.7632L7.3438 11.4192C7.2358 11.5272 7.099 11.5776 6.9622 11.5776C6.8254 11.5776 6.6886 11.5272 6.5806 11.4192C6.3718 11.2104 6.3718 10.8648 6.5806 10.656L8.2366 9L6.5806 7.344C6.3718 7.1352 6.3718 6.7896 6.5806 6.5808C6.7894 6.372 7.135 6.372 7.3438 6.5808L8.9998 8.2368L10.6558 6.5808C10.8646 6.372 11.2102 6.372 11.419 6.5808C11.6278 6.7896 11.6278 7.1352 11.419 7.344L9.763 9L11.419 10.656Z"
  })));
};
var DotIcon = function DotIcon(_ref7) {
  var color = _ref7.color,
    _ref7$width = _ref7.width,
    width = _ref7$width === void 0 ? "18" : _ref7$width,
    _ref7$height = _ref7.height,
    height = _ref7$height === void 0 ? "18" : _ref7$height;
  return /*#__PURE__*/React.createElement("span", {
    className: "anticon"
  }, /*#__PURE__*/React.createElement("svg", {
    width: width,
    height: height,
    viewBox: "0 0 20 20",
    fill: color,
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("ellipse", {
    cx: "16.5882",
    cy: "10.4118",
    rx: "1.41178",
    ry: "1.41176",
    transform: "rotate(90 16.5882 10.4118)"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "9.99986",
    cy: "10.4118",
    rx: "1.41178",
    ry: "1.41176",
    transform: "rotate(90 9.99986 10.4118)"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "3.41148",
    cy: "10.4118",
    rx: "1.41178",
    ry: "1.41176",
    transform: "rotate(90 3.41148 10.4118)"
  })));
};
var AddIcon = function AddIcon(_ref8) {
  var _ref8$color = _ref8.color,
    color = _ref8$color === void 0 ? "#0A1018" : _ref8$color,
    _ref8$width = _ref8.width,
    width = _ref8$width === void 0 ? "18" : _ref8$width,
    _ref8$height = _ref8.height,
    height = _ref8$height === void 0 ? "18" : _ref8$height;
  return /*#__PURE__*/React.createElement("span", {
    className: "anticon"
  }, /*#__PURE__*/React.createElement("svg", {
    width: width,
    height: height,
    viewBox: "0 0 18 18",
    fill: color,
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.89995 3.6C9.89995 3.10294 9.49701 2.7 8.99995 2.7C8.50289 2.7 8.09995 3.10294 8.09995 3.6V8.1H3.59995C3.10289 8.1 2.69995 8.50294 2.69995 9C2.69995 9.49706 3.10289 9.9 3.59995 9.9H8.09995V14.4C8.09995 14.8971 8.50289 15.3 8.99995 15.3C9.49701 15.3 9.89995 14.8971 9.89995 14.4V9.9H14.4C14.897 9.9 15.3 9.49706 15.3 9C15.3 8.50294 14.897 8.1 14.4 8.1H9.89995V3.6Z"
  })));
};
var SearchIcon = function SearchIcon(_ref9) {
  var _ref9$color = _ref9.color,
    color = _ref9$color === void 0 ? "#0A1018" : _ref9$color,
    _ref9$width = _ref9.width,
    width = _ref9$width === void 0 ? "18" : _ref9$width,
    _ref9$height = _ref9.height,
    height = _ref9$height === void 0 ? "18" : _ref9$height;
  return /*#__PURE__*/React.createElement("span", {
    className: "anticon"
  }, /*#__PURE__*/React.createElement("svg", {
    width: width,
    height: height,
    viewBox: "0 0 20 20",
    fill: color,
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.2 3.6C6.10721 3.6 3.6 6.10721 3.6 9.2C3.6 12.2928 6.10721 14.8 9.2 14.8C10.7086 14.8 12.0779 14.2035 13.0848 13.2334C13.1059 13.2059 13.1291 13.1795 13.1542 13.1543C13.1794 13.1291 13.2059 13.106 13.2333 13.0849C14.2034 12.0779 14.8 10.7086 14.8 9.2C14.8 6.10721 12.2928 3.6 9.2 3.6ZM14.8255 13.6942C15.8108 12.4624 16.4 10.9 16.4 9.2C16.4 5.22355 13.1765 2 9.2 2C5.22355 2 2 5.22355 2 9.2C2 13.1765 5.22355 16.4 9.2 16.4C10.9 16.4 12.4624 15.8108 13.6941 14.8256L16.6342 17.7657C16.9467 18.0781 17.4532 18.0781 17.7656 17.7657C18.078 17.4533 18.078 16.9467 17.7656 16.6343L14.8255 13.6942Z"
  })));
};
var FilterIcon = function FilterIcon(_ref10) {
  var _ref10$color = _ref10.color,
    color = _ref10$color === void 0 ? "#0A1018" : _ref10$color,
    _ref10$width = _ref10.width,
    width = _ref10$width === void 0 ? "18" : _ref10$width,
    _ref10$height = _ref10.height,
    height = _ref10$height === void 0 ? "18" : _ref10$height;
  return /*#__PURE__*/React.createElement("span", {
    className: "anticon"
  }, /*#__PURE__*/React.createElement("svg", {
    width: width,
    height: height,
    viewBox: "0 0 20 20",
    fill: color,
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M11.6667 6.66667C11.6667 7.03486 11.9651 7.33333 12.3333 7.33333C12.7015 7.33333 13 7.03486 13 6.66667V5.33333H15.6667C16.0349 5.33333 16.3333 5.03486 16.3333 4.66667C16.3333 4.29848 16.0349 4 15.6667 4H13V2.66667C13 2.29848 12.7015 2 12.3333 2C11.9651 2 11.6667 2.29848 11.6667 2.66667V6.66667Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.66667 9.33333C9.29848 9.33333 9 9.63181 9 10C9 10.3682 9.29848 10.6667 9.66667 10.6667H15.6667C16.0349 10.6667 16.3333 10.3682 16.3333 10C16.3333 9.63181 16.0349 9.33333 15.6667 9.33333H9.66667Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 15.3333C3 14.9651 3.29848 14.6667 3.66667 14.6667H8.33333C8.70152 14.6667 9 14.9651 9 15.3333C9 15.7015 8.70152 16 8.33333 16H3.66667C3.29848 16 3 15.7015 3 15.3333Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.6667 14.6667V13.3333C11.6667 12.9651 11.3682 12.6667 11 12.6667C10.6318 12.6667 10.3333 12.9651 10.3333 13.3333V17.3333C10.3333 17.7015 10.6318 18 11 18C11.3682 18 11.6667 17.7015 11.6667 17.3333V16H15.6667C16.0349 16 16.3333 15.7015 16.3333 15.3333C16.3333 14.9651 16.0349 14.6667 15.6667 14.6667H11.6667Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 10C3 9.63181 3.29848 9.33333 3.66667 9.33333H6.33333V8C6.33333 7.63181 6.63181 7.33333 7 7.33333C7.36819 7.33333 7.66667 7.63181 7.66667 8V12C7.66667 12.3682 7.36819 12.6667 7 12.6667C6.63181 12.6667 6.33333 12.3682 6.33333 12V10.6667H3.66667C3.29848 10.6667 3 10.3682 3 10Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 4.66667C3 4.29848 3.29848 4 3.66667 4H9.66667C10.0349 4 10.3333 4.29848 10.3333 4.66667C10.3333 5.03486 10.0349 5.33333 9.66667 5.33333H3.66667C3.29848 5.33333 3 5.03486 3 4.66667Z"
  })));
};
var GroupPeopleIcon = function GroupPeopleIcon(_ref11) {
  var _ref11$color = _ref11.color,
    color = _ref11$color === void 0 ? "#0A1018" : _ref11$color,
    _ref11$width = _ref11.width,
    width = _ref11$width === void 0 ? "18" : _ref11$width,
    _ref11$height = _ref11.height,
    height = _ref11$height === void 0 ? "18" : _ref11$height;
  return /*#__PURE__*/React.createElement("span", {
    className: "anticon"
  }, /*#__PURE__*/React.createElement("svg", {
    width: width,
    height: height,
    viewBox: "0 0 18 18",
    fill: color,
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.90217 9.07826C7.38923 9.07826 6.16304 7.85207 6.16304 6.33913C6.16304 4.82619 7.38923 3.6 8.90217 3.6C8.93492 3.6 8.96753 3.60057 9 3.60171C9.03247 3.60057 9.06508 3.6 9.09783 3.6C10.6108 3.6 11.837 4.82619 11.837 6.33913C11.837 7.85207 10.6108 9.07826 9.09783 9.07826C9.06508 9.07826 9.03247 9.07769 9 9.07655C8.96753 9.07769 8.93492 9.07826 8.90217 9.07826ZM13.0601 14.5565H13.2557C13.6067 14.5565 13.8913 14.2719 13.8913 13.921C13.8913 11.8131 12.1836 10.1054 10.0758 10.1054H9.88013H8.11987H7.92422C5.81637 10.1054 4.1087 11.8131 4.1087 13.921C4.1087 14.2719 4.39331 14.5565 4.74426 14.5565H4.93991H13.0601ZM3.60795 14.5565H0.656965C0.295314 14.5565 0 14.2633 0 13.8996C0 11.9929 1.54504 10.4478 3.45173 10.4478H4.76566C4.81504 10.4478 4.86244 10.4498 4.91167 10.4519L4.91759 10.4521C4.00384 11.2353 3.42391 12.4016 3.42391 13.7005V13.8717C3.42391 14.1221 3.49239 14.3554 3.60795 14.5565ZM6.14806 8.37422C5.71365 8.80863 5.11447 9.07826 4.45109 9.07826C3.12646 9.07826 2.05435 8.00615 2.05435 6.68152C2.05435 5.3569 3.12646 4.28478 4.45109 4.28478C4.98179 4.28478 5.47184 4.45812 5.86987 4.74915C5.6195 5.22422 5.47826 5.76563 5.47826 6.33913C5.47826 7.10095 5.72649 7.80499 6.14806 8.37422ZM14.3921 14.5565H17.343C17.7047 14.5565 18 14.2633 18 13.8996C18 11.9929 16.455 10.4478 14.5483 10.4478H13.2343C13.185 10.4478 13.1376 10.4498 13.0883 10.4519L13.0824 10.4521C13.9962 11.2353 14.5761 12.4016 14.5761 13.7005V13.8717C14.5761 14.1221 14.5076 14.3554 14.3921 14.5565ZM11.8519 8.37422C12.2863 8.80863 12.8855 9.07826 13.5489 9.07826C14.8735 9.07826 15.9457 8.00615 15.9457 6.68152C15.9457 5.3569 14.8735 4.28478 13.5489 4.28478C13.0182 4.28478 12.5282 4.45812 12.1301 4.74915C12.3805 5.22422 12.5217 5.76563 12.5217 6.33913C12.5217 7.10095 12.2735 7.80499 11.8519 8.37422Z"
  })));
};
var TwoPeopleIcon = function TwoPeopleIcon(_ref12) {
  var _ref12$color = _ref12.color,
    color = _ref12$color === void 0 ? "#0A1018" : _ref12$color,
    _ref12$width = _ref12.width,
    width = _ref12$width === void 0 ? "18" : _ref12$width,
    _ref12$height = _ref12.height,
    height = _ref12$height === void 0 ? "18" : _ref12$height;
  return /*#__PURE__*/React.createElement("span", {
    className: "anticon"
  }, /*#__PURE__*/React.createElement("svg", {
    width: width,
    height: height,
    viewBox: "0 0 18 18",
    fill: color,
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9.9 5.4C9.9 7.38844 8.28844 9 6.3 9C4.31156 9 2.7 7.38844 2.7 5.4C2.7 3.41156 4.31156 1.8 6.3 1.8C8.28844 1.8 9.9 3.41156 9.9 5.4ZM0 15.3647C0 12.5944 2.24438 10.35 5.01469 10.35H7.58531C10.3556 10.35 12.6 12.5944 12.6 15.3647C12.6 15.8259 12.2259 16.2 11.7647 16.2H0.835313C0.374063 16.2 0 15.8259 0 15.3647ZM17.1366 16.2H13.2581C13.41 15.9356 13.5 15.6291 13.5 15.3V15.075C13.5 13.3678 12.7378 11.835 11.5369 10.8056C11.6044 10.8028 11.6691 10.8 11.7366 10.8H13.4634C15.9694 10.8 18 12.8306 18 15.3366C18 15.8147 17.6119 16.2 17.1366 16.2ZM12.15 9C11.2781 9 10.4906 8.64562 9.91969 8.07469C10.4738 7.32656 10.8 6.40125 10.8 5.4C10.8 4.64625 10.6144 3.93469 10.2853 3.31031C10.8084 2.92781 11.4525 2.7 12.15 2.7C13.8909 2.7 15.3 4.10906 15.3 5.85C15.3 7.59094 13.8909 9 12.15 9Z"
  })));
};
var ClockIcon = function ClockIcon(_ref13) {
  var _ref13$color = _ref13.color,
    color = _ref13$color === void 0 ? "#0A1018" : _ref13$color,
    _ref13$width = _ref13.width,
    width = _ref13$width === void 0 ? "18" : _ref13$width,
    _ref13$height = _ref13.height,
    height = _ref13$height === void 0 ? "18" : _ref13$height;
  return /*#__PURE__*/React.createElement("span", {
    className: "anticon"
  }, /*#__PURE__*/React.createElement("svg", {
    width: width,
    height: height,
    viewBox: "0 0 512 512",
    fill: color,
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M256 512C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256s-114.6 256-256 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"
  })));
};
var ArrowRightIcon = function ArrowRightIcon(_ref14) {
  var _ref14$color = _ref14.color,
    color = _ref14$color === void 0 ? "#0A1018" : _ref14$color,
    _ref14$width = _ref14.width,
    width = _ref14$width === void 0 ? "18" : _ref14$width,
    _ref14$height = _ref14.height,
    height = _ref14$height === void 0 ? "18" : _ref14$height;
  return /*#__PURE__*/React.createElement("span", {
    className: "anticon"
  }, /*#__PURE__*/React.createElement("svg", {
    width: width,
    height: height,
    fill: color,
    viewBox: "0 0 18 18",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5.39644 15.9806C5.00536 15.5907 5.00446 14.9575 5.39443 14.5664L10.8603 9.085L5.39443 3.60358C5.00446 3.2125 5.00536 2.57934 5.39644 2.18937C5.78751 1.7994 6.42068 1.80029 6.81065 2.19137L12.9806 8.3789C13.3698 8.76919 13.3698 9.40081 12.9806 9.79111L6.81065 15.9786C6.42068 16.3697 5.78751 16.3706 5.39644 15.9806Z"
  })));
};
var ArrowRightIcon2 = function ArrowRightIcon2(_ref15) {
  var _ref15$color = _ref15.color,
    color = _ref15$color === void 0 ? "#0A1018" : _ref15$color,
    _ref15$width = _ref15.width,
    width = _ref15$width === void 0 ? "18" : _ref15$width,
    _ref15$height = _ref15.height,
    height = _ref15$height === void 0 ? "18" : _ref15$height;
  return /*#__PURE__*/React.createElement("span", {
    className: "anticon"
  }, /*#__PURE__*/React.createElement("svg", {
    width: width,
    height: height,
    viewBox: "0 0 20 20",
    fill: color,
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 9.85698H15.714M11.1428 16.714L17.9998 9.85698L11.1428 3",
    stroke: "#0A1018",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};
var ArrowLeftIcon = function ArrowLeftIcon(_ref16) {
  var _ref16$color = _ref16.color,
    color = _ref16$color === void 0 ? "#0A1018" : _ref16$color,
    _ref16$width = _ref16.width,
    width = _ref16$width === void 0 ? "18" : _ref16$width,
    _ref16$height = _ref16.height,
    height = _ref16$height === void 0 ? "18" : _ref16$height;
  return /*#__PURE__*/React.createElement("span", {
    className: "anticon"
  }, /*#__PURE__*/React.createElement("svg", {
    width: width,
    height: height,
    viewBox: "0 0 20 20",
    fill: color,
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 9.85698H4.28603M8.8572 16.714L2.00021 9.85698L8.8572 3",
    stroke: "#0A1018",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};
var HelpIcon = function HelpIcon(_ref17) {
  var _ref17$color = _ref17.color,
    color = _ref17$color === void 0 ? "#3161F1" : _ref17$color,
    _ref17$width = _ref17.width,
    width = _ref17$width === void 0 ? "20" : _ref17$width,
    _ref17$height = _ref17.height,
    height = _ref17$height === void 0 ? "20" : _ref17$height;
  return /*#__PURE__*/React.createElement("span", {
    className: "anticon"
  }, /*#__PURE__*/React.createElement("svg", {
    width: width,
    height: height,
    fill: color,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M11.0482 4.59418H5.30125C5.06778 4.59418 4.84329 4.60316 4.62778 4.63012C2.21225 4.83678 1 6.26546 1 8.89818V12.4923C1 16.0865 2.43674 16.7963 5.30125 16.7963H5.66044C5.85799 16.7963 6.1184 16.9311 6.23513 17.0839L7.31269 18.5215C7.78861 19.1595 8.56086 19.1595 9.03678 18.5215L10.1143 17.0839C10.249 16.9042 10.4645 16.7963 10.689 16.7963H11.0482C13.6793 16.7963 15.107 15.5923 15.3136 13.1662C15.3405 12.9506 15.3495 12.726 15.3495 12.4923V8.89818C15.3495 6.03184 13.9127 4.59418 11.0482 4.59418ZM5.04084 11.7825C4.53798 11.7825 4.14288 11.3781 4.14288 10.884C4.14288 10.3898 4.54696 9.98541 5.04084 9.98541C5.53472 9.98541 5.9388 10.3898 5.9388 10.884C5.9388 11.3781 5.53472 11.7825 5.04084 11.7825ZM8.17474 11.7825C7.67188 11.7825 7.27677 11.3781 7.27677 10.884C7.27677 10.3898 7.68086 9.98541 8.17474 9.98541C8.66862 9.98541 9.0727 10.3898 9.0727 10.884C9.0727 11.3781 8.6776 11.7825 8.17474 11.7825ZM11.3176 11.7825C10.8148 11.7825 10.4196 11.3781 10.4196 10.884C10.4196 10.3898 10.8237 9.98541 11.3176 9.98541C11.8115 9.98541 12.2156 10.3898 12.2156 10.884C12.2156 11.3781 11.8115 11.7825 11.3176 11.7825Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.9422 5.304V8.89816C18.9422 10.6952 18.3855 11.9172 17.272 12.5912C17.0026 12.7529 16.6883 12.5372 16.6883 12.2227L16.6973 8.89816C16.6973 5.304 14.641 3.24635 11.0491 3.24635L5.58047 3.25533C5.26619 3.25533 5.05067 2.94084 5.21231 2.67128C5.88578 1.55709 7.10702 1 8.89398 1H14.641C17.5055 1 18.9422 2.43766 18.9422 5.304Z",
    fill: color
  })));
};
var DocumentIcon = function DocumentIcon(_ref18) {
  var _ref18$color = _ref18.color,
    color = _ref18$color === void 0 ? "#3161F1" : _ref18$color,
    _ref18$width = _ref18.width,
    width = _ref18$width === void 0 ? "18" : _ref18$width,
    _ref18$height = _ref18.height,
    height = _ref18$height === void 0 ? "18" : _ref18$height;
  return /*#__PURE__*/React.createElement("span", {
    className: "anticon"
  }, /*#__PURE__*/React.createElement("svg", {
    width: width,
    height: height,
    fill: color,
    viewBox: "0 0 18 18",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12.4115 0.188982C12.0428 -0.180018 11.4042 0.0719816 11.4042 0.584982V3.72598C11.4042 5.03998 12.5194 6.12898 13.8776 6.12898C14.732 6.13798 15.9192 6.13798 16.9356 6.13798C17.4482 6.13798 17.7181 5.53498 17.3583 5.17498C16.0631 3.86998 13.7427 1.52098 12.4115 0.188982Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.6398 7.371H14.0404C11.9088 7.371 10.1729 5.634 10.1729 3.501V0.9C10.1729 0.405 9.76819 0 9.27351 0H5.45997C2.68975 0 0.450195 1.8 0.450195 5.013V12.987C0.450195 16.2 2.68975 18 5.45997 18H12.5294C15.2996 18 17.5392 16.2 17.5392 12.987V8.271C17.5392 7.776 17.1344 7.371 16.6398 7.371ZM8.54498 14.175H4.9473C4.57854 14.175 4.27273 13.869 4.27273 13.5C4.27273 13.131 4.57854 12.825 4.9473 12.825H8.54498C8.91374 12.825 9.21955 13.131 9.21955 13.5C9.21955 13.869 8.91374 14.175 8.54498 14.175ZM10.3438 10.575H4.9473C4.57854 10.575 4.27273 10.269 4.27273 9.9C4.27273 9.531 4.57854 9.225 4.9473 9.225H10.3438C10.7126 9.225 11.0184 9.531 11.0184 9.9C11.0184 10.269 10.7126 10.575 10.3438 10.575Z",
    fill: color
  })));
};
var FeatureIcon = function FeatureIcon(_ref19) {
  var _ref19$color = _ref19.color,
    color = _ref19$color === void 0 ? "#3161F1" : _ref19$color,
    _ref19$width = _ref19.width,
    width = _ref19$width === void 0 ? "18" : _ref19$width,
    _ref19$height = _ref19.height,
    height = _ref19$height === void 0 ? "18" : _ref19$height;
  return /*#__PURE__*/React.createElement("span", {
    className: "anticon"
  }, /*#__PURE__*/React.createElement("svg", {
    width: width,
    height: height,
    fill: color,
    viewBox: "0 0 18 19",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13.5902 7.57803H16.1896C16.6843 7.57803 17.089 7.98303 17.089 8.47803V13.194C17.089 16.407 14.8494 18.207 12.0792 18.207H5.00977C2.23956 18.207 0 16.407 0 13.194V5.22003C0 2.00703 2.23956 0.207031 5.00977 0.207031H8.82332C9.318 0.207031 9.72274 0.612031 9.72274 1.10703V3.70803C9.72274 5.84103 11.4586 7.57803 13.5902 7.57803ZM11.9613 0.396012C11.5926 0.0270125 10.954 0.279013 10.954 0.792013V3.93301C10.954 5.24701 12.0693 6.33601 13.4274 6.33601C14.2818 6.34501 15.4689 6.34501 16.4852 6.34501H16.4854C16.998 6.34501 17.2679 5.74201 16.9081 5.38201C16.4894 4.96018 15.9637 4.42927 15.3988 3.85888L15.3932 3.85325L15.3913 3.85133L15.3905 3.8505L15.3902 3.85016C14.2096 2.65803 12.86 1.29526 11.9613 0.396012ZM3.0145 12.0732C3.0145 11.7456 3.28007 11.48 3.60768 11.48H5.32132V9.76639C5.32132 9.43879 5.58689 9.17321 5.9145 9.17321C6.2421 9.17321 6.50768 9.43879 6.50768 9.76639V11.48H8.22131C8.54892 11.48 8.8145 11.7456 8.8145 12.0732C8.8145 12.4008 8.54892 12.6664 8.22131 12.6664H6.50768V14.38C6.50768 14.7076 6.2421 14.9732 5.9145 14.9732C5.58689 14.9732 5.32132 14.7076 5.32132 14.38V12.6664H3.60768C3.28007 12.6664 3.0145 12.4008 3.0145 12.0732Z"
  })));
};
var UserIcon = function UserIcon(_ref20) {
  var _ref20$color = _ref20.color,
    color = _ref20$color === void 0 ? "#0A1018" : _ref20$color,
    _ref20$width = _ref20.width,
    width = _ref20$width === void 0 ? "18" : _ref20$width,
    _ref20$height = _ref20.height,
    height = _ref20$height === void 0 ? "18" : _ref20$height;
  return /*#__PURE__*/React.createElement("span", {
    className: "anticon"
  }, /*#__PURE__*/React.createElement("svg", {
    width: width,
    height: height,
    viewBox: "0 0 18 18",
    fill: color,
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12.6 5.4C12.6 7.38844 10.9884 9 8.99995 9C7.01151 9 5.39995 7.38844 5.39995 5.4C5.39995 3.41156 7.01151 1.8 8.99995 1.8C10.9884 1.8 12.6 3.41156 12.6 5.4ZM2.69995 15.3647C2.69995 12.5944 4.94433 10.35 7.71464 10.35H10.2853C13.0556 10.35 15.3 12.5944 15.3 15.3647C15.3 15.8259 14.9259 16.2 14.4646 16.2H3.53526C3.07401 16.2 2.69995 15.8259 2.69995 15.3647Z"
  })));
};
var StarIcon = function StarIcon(_ref21) {
  var _ref21$color = _ref21.color,
    color = _ref21$color === void 0 ? "#0A1018" : _ref21$color,
    _ref21$width = _ref21.width,
    width = _ref21$width === void 0 ? "18" : _ref21$width,
    _ref21$height = _ref21.height,
    height = _ref21$height === void 0 ? "18" : _ref21$height;
  return /*#__PURE__*/React.createElement("span", {
    className: "anticon"
  }, /*#__PURE__*/React.createElement("svg", {
    width: width,
    height: height,
    viewBox: "0 0 16 16",
    fill: color,
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.31171 2.02343C7.31162 2.0236 7.31179 2.02326 7.31171 2.02343L6.02201 4.62263C5.87468 4.92425 5.63147 5.17748 5.3861 5.36081C5.13993 5.54473 4.83023 5.70415 4.50625 5.75958L4.50393 5.75998L2.16361 6.15179C2.1635 6.15181 2.16372 6.15177 2.16361 6.15179C1.53002 6.25828 1.36693 6.50183 1.33587 6.59987C1.30459 6.69855 1.29782 6.9928 1.75157 7.45002L3.57126 9.28367C3.82431 9.53866 3.99034 9.8757 4.08129 10.1958C4.17232 10.5163 4.20784 10.8891 4.13024 11.238L4.12926 11.2424L3.60828 13.5123C3.41655 14.3472 3.6249 14.5927 3.66782 14.6243C3.71125 14.6562 4.00801 14.7812 4.74106 14.3428L6.93988 13.0312C7.26577 12.8401 7.65149 12.7635 8.00114 12.7635C8.35019 12.7635 8.7366 12.8399 9.06146 13.0339L11.2546 14.3421C11.9945 14.7825 12.2905 14.6574 12.3319 14.6269C12.3723 14.5972 12.581 14.354 12.3884 13.5118L11.8665 11.238C11.7889 10.8891 11.8245 10.5163 11.9155 10.1958C12.0064 9.8757 12.1725 9.53866 12.4255 9.28367L14.2452 7.45002L14.2468 7.44842C14.7035 6.99134 14.695 6.69818 14.6641 6.60108C14.6326 6.50249 14.4678 6.25844 13.8335 6.15185C13.8334 6.15183 13.8336 6.15187 13.8335 6.15185L11.4929 5.75998C11.1659 5.70506 10.8538 5.54633 10.6055 5.36173C10.3584 5.17799 10.1149 4.92449 9.96747 4.62268L8.6765 2.02094C8.3757 1.41153 8.09125 1.33088 7.99747 1.33088C7.90253 1.33088 7.61609 1.41346 7.31171 2.02343ZM9.85875 1.42766C9.46248 0.625148 8.82618 0 7.99747 0C7.16976 0 6.53156 0.623978 6.13164 1.42576L4.83963 4.0296L4.83722 4.03449C4.80832 4.09396 4.72941 4.19465 4.59946 4.29174C4.47014 4.38837 4.35107 4.43598 4.28597 4.44735C4.28625 4.4473 4.28569 4.4474 4.28597 4.44735L1.94681 4.83897C1.08384 4.9839 0.325465 5.41322 0.0777134 6.19502C-0.169838 6.9762 0.200137 7.76883 0.817662 8.39109L2.63735 10.2247C2.69248 10.2803 2.76491 10.398 2.81154 10.5621C2.85778 10.7249 2.85924 10.8651 2.84182 10.9454L2.32152 13.2123C2.32153 13.2123 2.32152 13.2124 2.32152 13.2123C2.10238 14.1667 2.1655 15.1672 2.88932 15.6994C3.61265 16.2312 4.57794 15.9879 5.4151 15.4873L7.60408 14.1815C7.60462 14.1812 7.60516 14.1809 7.6057 14.1806C7.68372 14.1354 7.82555 14.0943 8.00114 14.0943C8.17856 14.0943 8.31677 14.1362 8.38814 14.1788L10.5823 15.4877C11.4199 15.9863 12.3865 16.2338 13.11 15.7023C13.8346 15.17 13.8937 14.1674 13.6754 13.2129L13.155 10.9453C13.1375 10.8651 13.139 10.7249 13.1852 10.5621C13.2319 10.398 13.3043 10.2803 13.3594 10.2247L15.1775 8.3927C15.1777 8.39248 15.1779 8.39227 15.1782 8.39206C15.7997 7.76975 16.171 6.9763 15.9214 6.19382C15.6722 5.41256 14.9126 4.98385 14.0503 4.83902L11.7096 4.44716C11.6403 4.43543 11.5191 4.38703 11.3897 4.29082C11.2597 4.19416 11.181 4.09375 11.1522 4.03449L9.85875 1.42766C9.85885 1.42786 9.85866 1.42746 9.85875 1.42766Z"
  })));
};
var EyeFileIcon = function EyeFileIcon(_ref22) {
  var _ref22$color = _ref22.color,
    color = _ref22$color === void 0 ? "#0A1018" : _ref22$color,
    _ref22$width = _ref22.width,
    width = _ref22$width === void 0 ? "18" : _ref22$width,
    _ref22$height = _ref22.height,
    height = _ref22$height === void 0 ? "18" : _ref22$height;
  return /*#__PURE__*/React.createElement("span", {
    className: "anticon"
  }, /*#__PURE__*/React.createElement("svg", {
    width: width,
    height: height,
    viewBox: "0 0 18 18",
    fill: color,
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M16.4924 6.4332C14.6213 3.4929 11.8835 1.8 8.9999 1.8C7.5581 1.8 6.1568 2.2212 4.877 3.0069C3.5972 3.8007 2.447 4.959 1.5074 6.4332C0.697402 7.7049 0.697402 9.7704 1.5074 11.0421C3.3785 13.9905 6.1163 15.6753 8.9999 15.6753C10.4417 15.6753 11.843 15.2541 13.1228 14.4684C14.4026 13.6746 15.5528 12.5163 16.4924 11.0421C17.3024 9.7785 17.3024 7.7049 16.4924 6.4332ZM8.9999 12.0141C7.1855 12.0141 5.7275 10.548 5.7275 8.7417C5.7275 6.9354 7.1855 5.4693 8.9999 5.4693C10.8143 5.4693 12.2723 6.9354 12.2723 8.7417C12.2723 10.548 10.8143 12.0141 8.9999 12.0141Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.00015 6.42507C7.72845 6.42507 6.69165 7.46186 6.69165 8.74167C6.69165 10.0134 7.72845 11.0502 9.00015 11.0502C10.2719 11.0502 11.3168 10.0134 11.3168 8.74167C11.3168 7.46996 10.2719 6.42507 9.00015 6.42507Z"
  })));
};
var EyeStrokeIcon = function EyeStrokeIcon(_ref23) {
  var _ref23$color = _ref23.color,
    color = _ref23$color === void 0 ? "#0A1018" : _ref23$color,
    _ref23$width = _ref23.width,
    width = _ref23$width === void 0 ? "18" : _ref23$width,
    _ref23$height = _ref23.height,
    height = _ref23$height === void 0 ? "18" : _ref23$height;
  return /*#__PURE__*/React.createElement("span", {
    className: "anticon"
  }, /*#__PURE__*/React.createElement("svg", {
    width: width,
    height: height,
    viewBox: "0 0 18 18",
    fill: color,
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.99965 10.2677C9.8931 10.2677 10.6132 9.54762 10.6132 8.65417C10.6132 7.76071 9.8931 7.04065 8.99965 7.04065C8.10619 7.04065 7.38613 7.76071 7.38613 8.65417C7.38613 9.54762 8.10619 10.2677 8.99965 10.2677ZM8.99965 11.6177C10.6387 11.6177 11.9632 10.2932 11.9632 8.65417C11.9632 7.01513 10.6387 5.69065 8.99965 5.69065C7.36061 5.69065 6.03613 7.01513 6.03613 8.65417C6.03613 10.2932 7.36061 11.6177 8.99965 11.6177Z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15.4021 10.0736L15.4032 10.0718C15.604 9.75728 15.7499 9.24465 15.7499 8.65002C15.7499 8.0554 15.604 7.54276 15.4032 7.22824L15.4021 7.22647C13.6881 4.53198 11.3494 3.15 8.9999 3.15C6.65044 3.15 4.31173 4.53198 2.59774 7.22647L2.59661 7.22824C2.39585 7.54276 2.2499 8.0554 2.2499 8.65002C2.2499 9.24465 2.39585 9.75728 2.59661 10.0718L2.59774 10.0736C4.31173 12.7681 6.65044 14.1501 8.9999 14.1501C11.3494 14.1501 13.6881 12.7681 15.4021 10.0736ZM1.45867 10.7982C0.713648 9.63097 0.713648 7.66908 1.45867 6.50189C3.35432 3.52182 6.07778 1.8 8.9999 1.8C11.922 1.8 14.6455 3.52182 16.5411 6.50189C17.2862 7.66908 17.2862 9.63097 16.5411 10.7982C14.6455 13.7782 11.922 15.5001 8.9999 15.5001C6.07778 15.5001 3.35432 13.7782 1.45867 10.7982Z"
  })));
};
var GoogleMeet = function GoogleMeet() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M11.1816 10.4049L12.9362 12.4103L15.2955 13.9181L15.7068 10.4172L15.2955 6.99451L12.8909 8.31916L11.1816 10.4049Z",
    fill: "#00832D"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M1 13.5931V16.5756C1 17.2575 1.55228 17.8097 2.23414 17.8097H5.21666L5.83373 15.5554L5.21666 13.5931L3.17004 12.976L1 13.5931Z",
    fill: "#0066DA"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.21666 3L1 7.21666L3.17004 7.83373L5.21666 7.21666L5.82345 5.28111L5.21666 3Z",
    fill: "#E94235"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.21666 7.21666H1V13.5931H5.21666V7.21666Z",
    fill: "#2684FC"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.9902 4.78541L15.2956 6.99453V13.9181L18.0025 16.1375C18.4077 16.4542 19.0001 16.1652 19.0001 15.65V5.26261C19.0001 4.74118 18.3944 4.45527 17.9902 4.78541ZM11.1818 10.4049V13.5931H5.2168V17.8097H14.0615C14.7434 17.8097 15.2956 17.2575 15.2956 16.5756V13.9181L11.1818 10.4049Z",
    fill: "#00AC47"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.0615 3H5.2168V7.21666H11.1818V10.4049L15.2956 6.99657V4.23414C15.2956 3.55228 14.7434 3 14.0615 3Z",
    fill: "#FFBA00"
  }));
};
var Location = function Location(_ref24) {
  var _ref24$color = _ref24.color,
    color = _ref24$color === void 0 ? "#0A1018" : _ref24$color,
    _ref24$width = _ref24.width,
    width = _ref24$width === void 0 ? "20" : _ref24$width,
    _ref24$height = _ref24.height,
    height = _ref24$height === void 0 ? "20" : _ref24$height;
  return /*#__PURE__*/React.createElement("span", {
    className: "anticon"
  }, /*#__PURE__*/React.createElement("svg", {
    width: width,
    height: height,
    viewBox: "0 0 20 20",
    fill: color,
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9.98574 1C8.0012 1.00218 6.09855 1.79146 4.6952 3.19467C3.29184 4.59788 2.50238 6.50045 2.5 8.48499C2.5 10.4125 3.9925 13.429 6.93624 17.4505C7.28669 17.9306 7.74553 18.3211 8.27544 18.5904C8.80535 18.8597 9.39135 19 9.98574 19C10.5801 19 11.1661 18.8597 11.696 18.5904C12.2259 18.3211 12.6848 17.9306 13.0352 17.4505C15.979 13.429 17.4715 10.4125 17.4715 8.48499C17.4691 6.50045 16.6796 4.59788 15.2763 3.19467C13.8729 1.79146 11.9703 1.00218 9.98574 1ZM9.98574 11.4685C9.3924 11.4685 8.81238 11.2925 8.31903 10.9629C7.82568 10.6332 7.44117 10.1647 7.2141 9.61654C6.98704 9.06836 6.92763 8.46516 7.04339 7.88322C7.15914 7.30128 7.44486 6.76673 7.86442 6.34717C8.28398 5.92761 8.81853 5.64189 9.40047 5.52614C9.98241 5.41038 10.5856 5.46979 11.1338 5.69685C11.682 5.92392 12.1505 6.30843 12.4801 6.80178C12.8098 7.29513 12.9857 7.87515 12.9857 8.46849C12.9857 9.26414 12.6697 10.0272 12.1071 10.5898C11.5444 11.1524 10.7814 11.4685 9.98574 11.4685Z"
  })));
};
var Phone = function Phone(_ref25) {
  var _ref25$color = _ref25.color,
    color = _ref25$color === void 0 ? "#0A1018" : _ref25$color,
    _ref25$width = _ref25.width,
    width = _ref25$width === void 0 ? "20" : _ref25$width,
    _ref25$height = _ref25.height,
    height = _ref25$height === void 0 ? "20" : _ref25$height;
  return /*#__PURE__*/React.createElement("span", {
    className: "anticon"
  }, /*#__PURE__*/React.createElement("svg", {
    width: width,
    height: height,
    viewBox: "0 0 20 20",
    fill: color,
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18.2201 9.24952C18.0212 9.24952 17.8305 9.17052 17.6899 9.0299C17.5493 8.88928 17.4703 8.69855 17.4703 8.49968C17.4687 6.90922 16.8362 5.38435 15.7115 4.25972C14.5869 3.13509 13.062 2.50258 11.4716 2.50099C11.2727 2.50099 11.082 2.42199 10.9414 2.28137C10.8007 2.14075 10.7217 1.95003 10.7217 1.75116C10.7217 1.55229 10.8007 1.36156 10.9414 1.22094C11.082 1.08032 11.2727 1.00132 11.4716 1.00132C13.4596 1.0035 15.3656 1.79421 16.7713 3.19995C18.177 4.60569 18.9678 6.51166 18.9699 8.49968C18.9699 8.69855 18.8909 8.88928 18.7503 9.0299C18.6097 9.17052 18.419 9.24952 18.2201 9.24952ZM15.9706 8.49968C15.9706 7.30647 15.4966 6.16213 14.6529 5.3184C13.8091 4.47467 12.6648 4.00067 11.4716 4.00067C11.2727 4.00067 11.082 4.07967 10.9414 4.22029C10.8007 4.36091 10.7217 4.55163 10.7217 4.7505C10.7217 4.94937 10.8007 5.14009 10.9414 5.28072C11.082 5.42134 11.2727 5.50034 11.4716 5.50034C12.267 5.50034 13.0299 5.81634 13.5924 6.37883C14.1549 6.94131 14.4709 7.70421 14.4709 8.49968C14.4709 8.69855 14.5499 8.88928 14.6905 9.0299C14.8312 9.17052 15.0219 9.24952 15.2208 9.24952C15.4196 9.24952 15.6103 9.17052 15.751 9.0299C15.8916 8.88928 15.9706 8.69855 15.9706 8.49968ZM17.6075 17.6207L18.2898 16.8341C18.7241 16.3984 18.968 15.8083 18.968 15.1931C18.968 14.5779 18.7241 13.9878 18.2898 13.5521C18.2666 13.5288 16.4625 12.1409 16.4625 12.1409C16.0295 11.7287 15.4544 11.4992 14.8566 11.5001C14.2588 11.5009 13.6843 11.732 13.2524 12.1454L11.8232 13.3496C10.6566 12.8668 9.59689 12.1583 8.70489 11.2647C7.81288 10.3712 7.10618 9.31021 6.62538 8.14276L7.82512 6.71807C8.23881 6.2863 8.4702 5.7117 8.47118 5.11373C8.47215 4.51575 8.24265 3.9404 7.83037 3.50727C7.83037 3.50727 6.44092 1.70542 6.41767 1.68217C5.98986 1.25158 5.4098 1.00658 4.80285 1.00013C4.19589 0.993677 3.61076 1.22628 3.17388 1.64768L2.31157 2.39752C-2.78282 8.30773 8.18729 19.1931 14.2925 18.9974C14.909 19.001 15.5199 18.881 16.0893 18.6445C16.6587 18.4081 17.1749 18.06 17.6075 17.6207Z"
  })));
};
var GoogleCalendar = function GoogleCalendar() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M14.7388 5.26241L10.4758 4.78874L5.26526 5.26241L4.7915 9.99925L5.26517 14.7361L10.002 15.3282L14.7388 14.7361L15.2125 9.8809L14.7388 5.26241Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.21058 12.6124C6.85653 12.3732 6.61137 12.0239 6.47754 11.562L7.29941 11.2233C7.37402 11.5075 7.50425 11.7278 7.69019 11.8841C7.87496 12.0404 8.09995 12.1174 8.36284 12.1174C8.63167 12.1174 8.86261 12.0357 9.05557 11.8722C9.24852 11.7088 9.34572 11.5003 9.34572 11.2482C9.34572 10.99 9.24384 10.7792 9.04018 10.6158C8.83651 10.4525 8.58073 10.3707 8.27518 10.3707H7.80035V9.55717H8.22658C8.48947 9.55717 8.71096 9.48616 8.89096 9.34405C9.07096 9.20194 9.16096 9.00772 9.16096 8.76022C9.16096 8.54 9.08041 8.36468 8.9194 8.23328C8.75839 8.10188 8.55463 8.03555 8.30713 8.03555C8.06557 8.03555 7.8737 8.09954 7.73159 8.2286C7.58948 8.35766 7.48643 8.51633 7.42136 8.70344L6.60786 8.36477C6.71559 8.05922 6.91341 7.78922 7.20347 7.55595C7.49363 7.32267 7.86425 7.2054 8.31424 7.2054C8.64697 7.2054 8.94658 7.26939 9.21189 7.39845C9.47712 7.52751 9.68556 7.70633 9.83595 7.93367C9.98634 8.16218 10.0609 8.41805 10.0609 8.70218C10.0609 8.99233 9.99111 9.2374 9.85134 9.43873C9.71157 9.64006 9.53985 9.79396 9.33618 9.90177V9.95028C9.60501 10.0628 9.82407 10.2345 9.99696 10.4654C10.1687 10.6964 10.2551 10.9723 10.2551 11.2944C10.2551 11.6165 10.1734 11.9043 10.0099 12.1565C9.84648 12.4088 9.62031 12.6077 9.33375 12.7521C9.04603 12.8966 8.72275 12.97 8.36392 12.97C7.94831 12.9712 7.56464 12.8516 7.21058 12.6124Z",
    fill: "#1A73E8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.2531 8.5348L11.3555 9.1873L10.9043 8.50285L12.5231 7.33521H13.1437V12.8429H12.2531V8.5348Z",
    fill: "#1A73E8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.7388 18.9995L19.0019 14.7364L16.8704 13.7891L14.7388 14.7364L13.7915 16.8679L14.7388 18.9995Z",
    fill: "#EA4335"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4.3125 16.8685L5.25983 19H14.7334V14.7369H5.25983L4.3125 16.8685Z",
    fill: "#34A853"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2.421 1C1.63593 1 1 1.63593 1 2.421V14.7367L3.13154 15.684L5.26308 14.7367V5.26308H14.7367L15.684 3.13154L14.7368 1H2.421Z",
    fill: "#4285F4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M1 14.7369V17.579C1 18.3641 1.63593 19 2.421 19H5.26308V14.7369H1Z",
    fill: "#188038"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.7393 5.26249V14.7361H19.0023V5.26249L16.8708 4.31516L14.7393 5.26249Z",
    fill: "#FBBC04"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.0023 5.26308V2.421C19.0023 1.63584 18.3664 1 17.5813 1H14.7393V5.26308H19.0023Z",
    fill: "#1967D2"
  }));
};
var Zoom = function Zoom() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M17.2165 18H4.30818C3.45491 18 2.64541 17.5519 2.2516 16.7869C1.80309 15.9126 1.96718 14.8634 2.65635 14.1748L11.6375 5.20219H5.20519C3.43304 5.20219 2 3.7705 2 2H13.8909C14.7442 2 15.5537 2.44809 15.9475 3.21311C16.396 4.08743 16.2319 5.13661 15.5428 5.82514L6.56165 14.7978H14.0113C15.7834 14.7978 17.2165 16.2295 17.2165 18Z",
    fill: "#0B5CFF"
  }));
};
var OverviewMoneyIcon = function OverviewMoneyIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "70",
    height: "70",
    viewBox: "0 0 70 70",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("circle", {
    opacity: "0.15",
    cx: "35",
    cy: "35",
    r: "35",
    fill: "#F07B27"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M33.9497 29.5122V33.5162L32.5357 33.0262C31.8217 32.7742 31.3877 32.5362 31.3877 31.3182C31.3877 30.3242 32.1297 29.5122 33.0397 29.5122H33.9497V29.5122Z",
    fill: "#F07B27"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M38.6118 38.6821C38.6118 39.6761 37.8698 40.4881 36.9598 40.4881H36.0498V36.4841L37.4638 36.9741C38.1778 37.2261 38.6118 37.4641 38.6118 38.6821Z",
    fill: "#F07B27"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M40.866 21H29.134C24.038 21 21 24.038 21 29.134V40.866C21 45.962 24.038 49 29.134 49H40.866C45.962 49 49 45.962 49 40.866V29.134C49 24.038 45.962 21 40.866 21ZM38.164 35C39.256 35.378 40.712 36.176 40.712 38.682C40.712 40.838 39.032 42.588 36.96 42.588H36.05V43.4C36.05 43.974 35.574 44.45 35 44.45C34.426 44.45 33.95 43.974 33.95 43.4V42.588H33.446C31.15 42.588 29.288 40.642 29.288 38.262C29.288 37.688 29.75 37.212 30.338 37.212C30.912 37.212 31.388 37.688 31.388 38.262C31.388 39.494 32.312 40.488 33.446 40.488H33.95V35.742L31.836 35C30.744 34.622 29.288 33.824 29.288 31.318C29.288 29.162 30.968 27.412 33.04 27.412H33.95V26.6C33.95 26.026 34.426 25.55 35 25.55C35.574 25.55 36.05 26.026 36.05 26.6V27.412H36.554C38.85 27.412 40.712 29.358 40.712 31.738C40.712 32.312 40.25 32.788 39.662 32.788C39.088 32.788 38.612 32.312 38.612 31.738C38.612 30.506 37.688 29.512 36.554 29.512H36.05V34.258L38.164 35Z",
    fill: "#F07B27"
  }));
};
var OverviewPersonIcon = function OverviewPersonIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "70",
    height: "70",
    viewBox: "0 0 70 70",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("circle", {
    opacity: "0.15",
    cx: "35",
    cy: "35",
    r: "35",
    fill: "#01AF28"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M36.4 29.4C36.4 32.4931 33.8931 35 30.8 35C27.7069 35 25.2 32.4931 25.2 29.4C25.2 26.3069 27.7069 23.8 30.8 23.8C33.8931 23.8 36.4 26.3069 36.4 29.4ZM21 44.9006C21 40.5913 24.4913 37.1 28.8006 37.1H32.7994C37.1088 37.1 40.6 40.5913 40.6 44.9006C40.6 45.6181 40.0181 46.2 39.3006 46.2H22.2994C21.5819 46.2 21 45.6181 21 44.9006ZM47.6569 46.2H41.6238C41.86 45.7888 42 45.3119 42 44.8V44.45C42 41.7944 40.8144 39.41 38.9463 37.8088C39.0513 37.8044 39.1519 37.8 39.2569 37.8H41.9431C45.8413 37.8 49 40.9588 49 44.8569C49 45.6006 48.3962 46.2 47.6569 46.2ZM39.9 35C38.5437 35 37.3188 34.4488 36.4306 33.5606C37.2925 32.3969 37.8 30.9575 37.8 29.4C37.8 28.2275 37.5113 27.1206 36.9994 26.1494C37.8131 25.5544 38.815 25.2 39.9 25.2C42.6081 25.2 44.8 27.3919 44.8 30.1C44.8 32.8081 42.6081 35 39.9 35Z",
    fill: "#01AF28"
  }));
};
var OverviewUserIcon = function OverviewUserIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "70",
    height: "70",
    viewBox: "0 0 70 70",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("circle", {
    opacity: "0.17",
    cx: "35",
    cy: "35",
    r: "35",
    fill: "#AB2BE7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M40.0604 23.2728H29.3947C24.7619 23.2728 22 26.0346 22 30.6675V41.3332C22 44.9096 23.6419 47.366 26.531 48.2951C27.371 48.5879 28.3383 48.7279 29.3947 48.7279H40.0604C41.1168 48.7279 42.0841 48.5879 42.9241 48.2951C45.8133 47.366 47.4551 44.9096 47.4551 41.3332V30.6675C47.4551 26.0346 44.6932 23.2728 40.0604 23.2728ZM45.546 41.3332C45.546 44.0568 44.4769 45.7751 42.3259 46.4878C41.0913 44.0568 38.164 42.3259 34.7276 42.3259C31.2911 42.3259 28.3765 44.0441 27.1292 46.4878H27.1165C24.991 45.8005 23.9091 44.0696 23.9091 41.3459V30.6675C23.9091 27.0783 25.8055 25.1819 29.3947 25.1819H40.0604C43.6496 25.1819 45.546 27.0783 45.546 30.6675V41.3332Z",
    fill: "#AB2BE7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M34.7298 30.9093C32.2097 30.9093 30.1733 32.9457 30.1733 35.4658C30.1733 37.9858 32.2097 40.0349 34.7298 40.0349C37.2499 40.0349 39.2863 37.9858 39.2863 35.4658C39.2863 32.9457 37.2499 30.9093 34.7298 30.9093Z",
    fill: "#AB2BE7"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "44.9096",
    cy: "27.091",
    r: "3.81827",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M44.9089 32.182C47.7206 32.182 49.9999 29.9027 49.9999 27.091C49.9999 24.2793 47.7206 22 44.9089 22C42.0972 22 39.8179 24.2793 39.8179 27.091C39.8179 29.9027 42.0972 32.182 44.9089 32.182ZM43.9644 25.1923C43.9644 24.6651 44.3917 24.2377 44.9189 24.2377C45.4461 24.2377 45.8735 24.6651 45.8735 25.1923V26.1469H46.8281C47.3552 26.1469 47.7826 26.5742 47.7826 27.1014C47.7826 27.6286 47.3552 28.056 46.8281 28.056H45.8735V29.0106C45.8735 29.5378 45.4461 29.9651 44.9189 29.9651C44.3917 29.9651 43.9644 29.5378 43.9644 29.0106V28.056H43.0098C42.4826 28.056 42.0552 27.6286 42.0552 27.1014C42.0552 26.5742 42.4826 26.1469 43.0098 26.1469H43.9644V25.1923Z",
    fill: "#AB2BE7"
  }));
};
var OverviewCalendarIcon = function OverviewCalendarIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "70",
    height: "70",
    viewBox: "0 0 70 70",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("circle", {
    opacity: "0.15",
    cx: "35",
    cy: "35",
    r: "35",
    fill: "#24A4EC"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M41.5614 24.1171V22.0121C41.5614 21.4588 41.1024 21 40.5489 21C39.9954 21 39.5365 21.4588 39.5365 22.0121V24.0362H30.7619V22.0121C30.7619 21.4588 30.3029 21 29.7495 21C29.196 21 28.737 21.4588 28.737 22.0121V24.1171C25.0922 24.4545 23.3238 26.627 23.0538 29.8521C23.0268 30.2435 23.3508 30.5673 23.7288 30.5673H46.5696C46.9611 30.5673 47.2851 30.23 47.2446 29.8521C46.9746 26.627 45.2062 24.4545 41.5614 24.1171Z",
    fill: "#24A4EC"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M45.9489 32.5911H24.3499C23.6075 32.5911 23 33.1984 23 33.9405V42.2529C23 46.3012 25.0249 49 29.7497 49H40.5491C45.2739 49 47.2988 46.3012 47.2988 42.2529V33.9405C47.2988 33.1984 46.6913 32.5911 45.9489 32.5911ZM31.3831 43.8857C31.2481 44.0072 31.0996 44.1016 30.9376 44.1691C30.7756 44.2366 30.6001 44.2771 30.4246 44.2771C30.2491 44.2771 30.0737 44.2366 29.9117 44.1691C29.7497 44.1016 29.6012 44.0072 29.4662 43.8857C29.2232 43.6293 29.0747 43.2785 29.0747 42.9276C29.0747 42.5768 29.2232 42.2259 29.4662 41.9696C29.6012 41.8481 29.7497 41.7536 29.9117 41.6862C30.2356 41.5512 30.6136 41.5512 30.9376 41.6862C31.0996 41.7536 31.2481 41.8481 31.3831 41.9696C31.6261 42.2259 31.7746 42.5768 31.7746 42.9276C31.7746 43.2785 31.6261 43.6293 31.3831 43.8857ZM31.6666 38.7175C31.5991 38.8794 31.5046 39.0278 31.3831 39.1628C31.2481 39.2842 31.0996 39.3787 30.9376 39.4461C30.7756 39.5136 30.6001 39.5541 30.4246 39.5541C30.2491 39.5541 30.0737 39.5136 29.9117 39.4461C29.7497 39.3787 29.6012 39.2842 29.4662 39.1628C29.3447 39.0278 29.2502 38.8794 29.1827 38.7175C29.1152 38.5555 29.0747 38.3801 29.0747 38.2047C29.0747 38.0293 29.1152 37.8538 29.1827 37.6919C29.2502 37.53 29.3447 37.3815 29.4662 37.2466C29.6012 37.1252 29.7497 37.0307 29.9117 36.9632C30.2356 36.8283 30.6136 36.8283 30.9376 36.9632C31.0996 37.0307 31.2481 37.1252 31.3831 37.2466C31.5046 37.3815 31.5991 37.53 31.6666 37.6919C31.7341 37.8538 31.7746 38.0293 31.7746 38.2047C31.7746 38.3801 31.7341 38.5555 31.6666 38.7175ZM36.1079 39.1628C35.9729 39.2842 35.8244 39.3787 35.6624 39.4461C35.5004 39.5136 35.3249 39.5541 35.1494 39.5541C34.9739 39.5541 34.7984 39.5136 34.6364 39.4461C34.4744 39.3787 34.326 39.2842 34.191 39.1628C33.948 38.9064 33.7995 38.5555 33.7995 38.2047C33.7995 37.8538 33.948 37.503 34.191 37.2466C34.326 37.1252 34.4744 37.0307 34.6364 36.9632C34.9604 36.8148 35.3384 36.8148 35.6624 36.9632C35.8244 37.0307 35.9729 37.1252 36.1079 37.2466C36.3509 37.503 36.4993 37.8538 36.4993 38.2047C36.4993 38.5555 36.3509 38.9064 36.1079 39.1628Z",
    fill: "#24A4EC"
  }));
};
var DocIcon = function DocIcon(_ref26) {
  var _ref26$color = _ref26.color,
    color = _ref26$color === void 0 ? "#3161F1" : _ref26$color,
    _ref26$width = _ref26.width,
    width = _ref26$width === void 0 ? "25" : _ref26$width,
    _ref26$height = _ref26.height,
    height = _ref26$height === void 0 ? "25" : _ref26$height;
  return /*#__PURE__*/React.createElement("svg", {
    width: width,
    height: height,
    fill: color,
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M19.2106 0H6.57897C2.7895 0 0.263184 2.52632 0.263184 6.31579V13.8947C0.263184 17.6842 2.7895 20.2105 6.57897 20.2105V22.9011C6.57897 23.9116 7.70318 24.5179 8.53687 23.9495L14.1579 20.2105H19.2106C23 20.2105 25.5263 17.6842 25.5263 13.8947V6.31579C25.5263 2.52632 23 0 19.2106 0ZM12.8948 15.3726C12.3642 15.3726 11.9474 14.9432 11.9474 14.4253C11.9474 13.9074 12.3642 13.4779 12.8948 13.4779C13.4253 13.4779 13.8421 13.9074 13.8421 14.4253C13.8421 14.9432 13.4253 15.3726 12.8948 15.3726ZM14.4863 10.1305C13.9937 10.4589 13.8421 10.6737 13.8421 11.0274V11.2926C13.8421 11.8105 13.4127 12.24 12.8948 12.24C12.3769 12.24 11.9474 11.8105 11.9474 11.2926V11.0274C11.9474 9.5621 13.0211 8.8421 13.4253 8.56421C13.8927 8.24842 14.0442 8.03368 14.0442 7.70526C14.0442 7.07368 13.5263 6.55579 12.8948 6.55579C12.2632 6.55579 11.7453 7.07368 11.7453 7.70526C11.7453 8.22316 11.3158 8.65263 10.7979 8.65263C10.28 8.65263 9.85055 8.22316 9.85055 7.70526C9.85055 6.02526 11.2148 4.66105 12.8948 4.66105C14.5748 4.66105 15.939 6.02526 15.939 7.70526C15.939 9.14526 14.8779 9.86526 14.4863 10.1305Z"
  }));
};
var StripeIcon = function StripeIcon(_ref27) {
  var _ref27$color = _ref27.color,
    color = _ref27$color === void 0 ? "#3161F1" : _ref27$color,
    _ref27$width = _ref27.width,
    width = _ref27$width === void 0 ? "25" : _ref27$width,
    _ref27$height = _ref27.height,
    height = _ref27$height === void 0 ? "25" : _ref27$height;
  return /*#__PURE__*/React.createElement("svg", {
    width: width,
    height: height,
    fill: color,
    viewBox: "0 0 14 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5.56044 5.95604C5.56044 5.0989 6.26374 4.76923 7.42857 4.76923C9.0989 4.76923 11.2088 5.27472 12.8791 6.17582V1.01099C11.0549 0.285714 9.25275 0 7.42857 0C2.96703 0 0 2.32967 0 6.21978C0 12.2857 8.35165 11.3187 8.35165 13.9341C8.35165 14.9451 7.47253 15.2747 6.24176 15.2747C4.41758 15.2747 2.08791 14.5275 0.241758 13.5165V18.7473C2.28571 19.6264 4.35165 20 6.24176 20C10.8132 20 13.956 17.7363 13.956 13.8022C13.9341 7.25275 5.56044 8.41758 5.56044 5.95604Z"
  }));
};
var calendarIcon = function calendarIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "#0A1018",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12.242 3.40308V2.32048C12.242 2.03595 12.0061 1.8 11.7215 1.8C11.437 1.8 11.2011 2.03595 11.2011 2.32048V3.36145H6.69022V2.32048C6.69022 2.03595 6.45427 1.8 6.16974 1.8C5.88521 1.8 5.64926 2.03595 5.64926 2.32048V3.40308C3.77552 3.57658 2.86641 4.69388 2.72762 6.35248C2.71374 6.55374 2.88029 6.72029 3.0746 6.72029H14.8167C15.0179 6.72029 15.1845 6.5468 15.1637 6.35248C15.0249 4.69388 14.1158 3.57658 12.242 3.40308Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.4978 7.76126H3.39417C3.01248 7.76126 2.7002 8.07355 2.7002 8.45524V12.7301C2.7002 14.8121 3.74116 16.2 6.17008 16.2H11.7219C14.1508 16.2 15.1918 14.8121 15.1918 12.7301V8.45524C15.1918 8.07355 14.8795 7.76126 14.4978 7.76126ZM7.00979 13.5698C6.94039 13.6323 6.86405 13.6809 6.78077 13.7156C6.6975 13.7503 6.60728 13.7711 6.51706 13.7711C6.42685 13.7711 6.33663 13.7503 6.25335 13.7156C6.17008 13.6809 6.09374 13.6323 6.02434 13.5698C5.89942 13.438 5.82309 13.2575 5.82309 13.0771C5.82309 12.8967 5.89942 12.7162 6.02434 12.5844C6.09374 12.5219 6.17008 12.4734 6.25335 12.4387C6.41991 12.3693 6.61422 12.3693 6.78077 12.4387C6.86405 12.4734 6.94039 12.5219 7.00979 12.5844C7.1347 12.7162 7.21104 12.8967 7.21104 13.0771C7.21104 13.2575 7.1347 13.438 7.00979 13.5698ZM7.15552 10.9119C7.12082 10.9952 7.07224 11.0715 7.00979 11.1409C6.94039 11.2034 6.86405 11.252 6.78077 11.2867C6.6975 11.3214 6.60728 11.3422 6.51706 11.3422C6.42685 11.3422 6.33663 11.3214 6.25335 11.2867C6.17008 11.252 6.09374 11.2034 6.02434 11.1409C5.96188 11.0715 5.9133 10.9952 5.87861 10.9119C5.84391 10.8286 5.82309 10.7384 5.82309 10.6482C5.82309 10.558 5.84391 10.4678 5.87861 10.3845C5.9133 10.3012 5.96188 10.2249 6.02434 10.1555C6.09374 10.093 6.17008 10.0444 6.25335 10.0097C6.41991 9.94034 6.61422 9.94034 6.78077 10.0097C6.86405 10.0444 6.94039 10.093 7.00979 10.1555C7.07224 10.2249 7.12082 10.3012 7.15552 10.3845C7.19022 10.4678 7.21104 10.558 7.21104 10.6482C7.21104 10.7384 7.19022 10.8286 7.15552 10.9119ZM9.4387 11.1409C9.3693 11.2034 9.29297 11.252 9.20969 11.2867C9.12641 11.3214 9.0362 11.3422 8.94598 11.3422C8.85576 11.3422 8.76555 11.3214 8.68227 11.2867C8.59899 11.252 8.52265 11.2034 8.45326 11.1409C8.32834 11.0091 8.252 10.8286 8.252 10.6482C8.252 10.4678 8.32834 10.2873 8.45326 10.1555C8.52265 10.093 8.59899 10.0444 8.68227 10.0097C8.84882 9.9334 9.04314 9.9334 9.20969 10.0097C9.29297 10.0444 9.3693 10.093 9.4387 10.1555C9.56362 10.2873 9.63996 10.4678 9.63996 10.6482C9.63996 10.8286 9.56362 11.0091 9.4387 11.1409Z"
  }));
};
var CalendarIcon2 = function CalendarIcon2(_ref28) {
  var _ref28$color = _ref28.color,
    color = _ref28$color === void 0 ? "#3161F1" : _ref28$color,
    _ref28$width = _ref28.width,
    width = _ref28$width === void 0 ? "20" : _ref28$width,
    _ref28$height = _ref28.height,
    height = _ref28$height === void 0 ? "20" : _ref28$height;
  return /*#__PURE__*/React.createElement("svg", {
    width: width,
    height: height,
    fill: color,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M14.1279 3.00386V1.6506C14.1279 1.29494 13.833 1 13.4773 1C13.1216 1 12.8267 1.29494 12.8267 1.6506V2.95181H7.18815V1.6506C7.18815 1.29494 6.89321 1 6.53755 1C6.18189 1 5.88695 1.29494 5.88695 1.6506V3.00386C3.54478 3.22072 2.40839 4.61735 2.2349 6.6906C2.21755 6.94217 2.42574 7.15036 2.66863 7.15036H17.3462C17.5978 7.15036 17.806 6.93349 17.78 6.6906C17.6065 4.61735 16.4701 3.22072 14.1279 3.00386Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.9472 8.45158H3.06767C2.59056 8.45158 2.2002 8.84194 2.2002 9.31905V14.6627C2.2002 17.2651 3.5014 19 6.53755 19H13.4773C16.5135 19 17.8147 17.2651 17.8147 14.6627V9.31905C17.8147 8.84194 17.4243 8.45158 16.9472 8.45158ZM7.58718 15.7123C7.50044 15.7904 7.40502 15.8511 7.30092 15.8945C7.19682 15.9378 7.08405 15.9639 6.97128 15.9639C6.85851 15.9639 6.74574 15.9378 6.64164 15.8945C6.53755 15.8511 6.44212 15.7904 6.35538 15.7123C6.19923 15.5475 6.10381 15.3219 6.10381 15.0964C6.10381 14.8709 6.19923 14.6453 6.35538 14.4805C6.44212 14.4024 6.53755 14.3417 6.64164 14.2983C6.84983 14.2116 7.09273 14.2116 7.30092 14.2983C7.40502 14.3417 7.50044 14.4024 7.58718 14.4805C7.74333 14.6453 7.83875 14.8709 7.83875 15.0964C7.83875 15.3219 7.74333 15.5475 7.58718 15.7123ZM7.76935 12.3899C7.72598 12.494 7.66526 12.5894 7.58718 12.6762C7.50044 12.7542 7.40502 12.815 7.30092 12.8583C7.19682 12.9017 7.08405 12.9277 6.97128 12.9277C6.85851 12.9277 6.74574 12.9017 6.64164 12.8583C6.53755 12.815 6.44212 12.7542 6.35538 12.6762C6.2773 12.5894 6.21658 12.494 6.17321 12.3899C6.12983 12.2858 6.10381 12.173 6.10381 12.0603C6.10381 11.9475 6.12983 11.8347 6.17321 11.7306C6.21658 11.6265 6.2773 11.5311 6.35538 11.4443C6.44212 11.3663 6.53755 11.3056 6.64164 11.2622C6.84983 11.1754 7.09273 11.1754 7.30092 11.2622C7.40502 11.3056 7.50044 11.3663 7.58718 11.4443C7.66526 11.5311 7.72598 11.6265 7.76935 11.7306C7.81273 11.8347 7.83875 11.9475 7.83875 12.0603C7.83875 12.173 7.81273 12.2858 7.76935 12.3899ZM10.6233 12.6762C10.5366 12.7542 10.4412 12.815 10.3371 12.8583C10.233 12.9017 10.1202 12.9277 10.0074 12.9277C9.89465 12.9277 9.78188 12.9017 9.67779 12.8583C9.57369 12.815 9.47827 12.7542 9.39152 12.6762C9.23538 12.5113 9.13996 12.2858 9.13996 12.0603C9.13996 11.8347 9.23538 11.6092 9.39152 11.4443C9.47827 11.3663 9.57369 11.3056 9.67779 11.2622C9.88598 11.1668 10.1289 11.1668 10.3371 11.2622C10.4412 11.3056 10.5366 11.3663 10.6233 11.4443C10.7795 11.6092 10.8749 11.8347 10.8749 12.0603C10.8749 12.2858 10.7795 12.5113 10.6233 12.6762Z"
  }));
};
var MoneyIcon = function MoneyIcon(_ref29) {
  var _ref29$color = _ref29.color,
    color = _ref29$color === void 0 ? "#3161F1" : _ref29$color,
    _ref29$width = _ref29.width,
    width = _ref29$width === void 0 ? "20" : _ref29$width,
    _ref29$height = _ref29.height,
    height = _ref29$height === void 0 ? "20" : _ref29$height;
  return /*#__PURE__*/React.createElement("svg", {
    width: width,
    height: height,
    fill: color,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M17 3.5H7C4 3.5 2 5 2 8.5V15.5C2 19 4 20.5 7 20.5H17C20 20.5 22 19 22 15.5V8.5C22 5 20 3.5 17 3.5ZM6.25 14.5C6.25 14.91 5.91 15.25 5.5 15.25C5.09 15.25 4.75 14.91 4.75 14.5V9.5C4.75 9.09 5.09 8.75 5.5 8.75C5.91 8.75 6.25 9.09 6.25 9.5V14.5ZM12 15C10.34 15 9 13.66 9 12C9 10.34 10.34 9 12 9C13.66 9 15 10.34 15 12C15 13.66 13.66 15 12 15ZM19.25 14.5C19.25 14.91 18.91 15.25 18.5 15.25C18.09 15.25 17.75 14.91 17.75 14.5V9.5C17.75 9.09 18.09 8.75 18.5 8.75C18.91 8.75 19.25 9.09 19.25 9.5V14.5Z"
  }));
};
var TicketIcon = function TicketIcon(_ref30) {
  var _ref30$color = _ref30.color,
    color = _ref30$color === void 0 ? "#3161F1" : _ref30$color,
    _ref30$width = _ref30.width,
    width = _ref30$width === void 0 ? "20" : _ref30$width,
    _ref30$height = _ref30.height,
    height = _ref30$height === void 0 ? "20" : _ref30$height;
  return /*#__PURE__*/React.createElement("svg", {
    width: width,
    height: height,
    viewBox: "0 0 18 18",
    fill: color,
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M16.4961 8.06247C16.8036 8.06247 17.0586 7.80747 17.0586 7.49997V6.74997C17.0586 3.44247 16.0536 2.43747 12.7461 2.43747H8.05859V4.12497C8.05859 4.43247 7.80359 4.68747 7.49609 4.68747C7.18859 4.68747 6.93359 4.43247 6.93359 4.12497V2.43747H5.24609C1.93859 2.43747 0.933594 3.44247 0.933594 6.74997V7.12497C0.933594 7.43247 1.18859 7.68747 1.49609 7.68747C2.21609 7.68747 2.80859 8.27997 2.80859 8.99997C2.80859 9.71997 2.21609 10.3125 1.49609 10.3125C1.18859 10.3125 0.933594 10.5675 0.933594 10.875V11.25C0.933594 14.5575 1.93859 15.5625 5.24609 15.5625H6.93359V13.875C6.93359 13.5675 7.18859 13.3125 7.49609 13.3125C7.80359 13.3125 8.05859 13.5675 8.05859 13.875V15.5625H12.7461C16.0536 15.5625 17.0586 14.5575 17.0586 11.25C17.0586 10.9425 16.8036 10.6875 16.4961 10.6875C15.7761 10.6875 15.1836 10.095 15.1836 9.37497C15.1836 8.65497 15.7761 8.06247 16.4961 8.06247ZM8.05859 10.6275C8.05859 10.935 7.80359 11.19 7.49609 11.19C7.18859 11.19 6.93359 10.935 6.93359 10.6275V7.37247C6.93359 7.06497 7.18859 6.80997 7.49609 6.80997C7.80359 6.80997 8.05859 7.06497 8.05859 7.37247V10.6275Z"
  }));
};
var DollarIcon = function DollarIcon(_ref31) {
  var _ref31$color = _ref31.color,
    color = _ref31$color === void 0 ? "#3161F1" : _ref31$color,
    _ref31$width = _ref31.width,
    width = _ref31$width === void 0 ? "20" : _ref31$width,
    _ref31$height = _ref31.height,
    height = _ref31$height === void 0 ? "20" : _ref31$height;
  return /*#__PURE__*/React.createElement("svg", {
    width: width,
    height: height,
    viewBox: "0 0 18 18",
    fill: color,
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12.4891 0.666504H5.50573C2.4724 0.666504 0.664062 2.47484 0.664062 5.50817V12.4915C0.664062 15.5248 2.4724 17.3332 5.50573 17.3332H12.4891C15.5224 17.3332 17.3307 15.5248 17.3307 12.4915V5.50817C17.3307 2.47484 15.5224 0.666504 12.4891 0.666504ZM10.8807 8.99984C11.5307 9.22484 12.3974 9.69984 12.3974 11.1915C12.3974 12.4748 11.3974 13.5165 10.1641 13.5165H9.62239V13.9998C9.62239 14.3415 9.33906 14.6248 8.99739 14.6248C8.65573 14.6248 8.37239 14.3415 8.37239 13.9998V13.5165H8.07239C6.70573 13.5165 5.59739 12.3582 5.59739 10.9415C5.59739 10.5998 5.8724 10.3165 6.22239 10.3165C6.56406 10.3165 6.84739 10.5998 6.84739 10.9415C6.84739 11.6748 7.3974 12.2665 8.07239 12.2665H8.37239V9.4415L7.11406 8.99984C6.46406 8.77484 5.59739 8.29984 5.59739 6.80817C5.59739 5.52484 6.59739 4.48317 7.83073 4.48317H8.37239V3.99984C8.37239 3.65817 8.65573 3.37484 8.99739 3.37484C9.33906 3.37484 9.62239 3.65817 9.62239 3.99984V4.48317H9.92239C11.2891 4.48317 12.3974 5.6415 12.3974 7.05817C12.3974 7.39984 12.1224 7.68317 11.7724 7.68317C11.4307 7.68317 11.1474 7.39984 11.1474 7.05817C11.1474 6.32484 10.5974 5.73317 9.92239 5.73317H9.62239V8.55817L10.8807 8.99984Z"
  }));
};
var ChairIcon = function ChairIcon(_ref32) {
  var _ref32$color = _ref32.color,
    color = _ref32$color === void 0 ? "#3161F1" : _ref32$color,
    _ref32$width = _ref32.width,
    width = _ref32$width === void 0 ? "20" : _ref32$width,
    _ref32$height = _ref32.height,
    height = _ref32$height === void 0 ? "20" : _ref32$height;
  return /*#__PURE__*/React.createElement("svg", {
    width: width,
    height: height,
    viewBox: "0 0 17 18",
    fill: color,
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M16.5 8.25C16.5 6.5955 15.1545 5.25 13.5 5.25V3.75C13.5 1.68225 11.8178 0 9.75 0L6.75 0C4.68225 0 3 1.68225 3 3.75V5.25C1.3455 5.25 0 6.5955 0 8.25L0 12C0 12.0127 3.50119e-08 12.0262 0.000750035 12.039C0.02175 13.2615 1.02225 14.25 2.25 14.25L7.5 14.25V16.5H4.5C4.086 16.5 3.75 16.8353 3.75 17.25C3.75 17.6647 4.086 18 4.5 18H12C12.414 18 12.75 17.6647 12.75 17.25C12.75 16.8353 12.414 16.5 12 16.5H9V14.25H14.25C15.4778 14.25 16.4783 13.2615 16.4993 12.039C16.4993 12.0262 16.5 12.0135 16.5 12V8.25ZM15 8.25V9.879C14.7653 9.79575 14.5133 9.75 14.25 9.75H13.5L13.5 6.75C14.3273 6.75 15 7.42275 15 8.25ZM4.5 3.75C4.5 2.5095 5.5095 1.5 6.75 1.5L9.75 1.5C10.9905 1.5 12 2.5095 12 3.75L12 9.75L4.5 9.75V3.75ZM3 6.75L3 9.75H2.25C1.98675 9.75 1.73475 9.79575 1.5 9.879V8.25C1.5 7.42275 2.17275 6.75 3 6.75ZM14.25 12.75L2.25 12.75C1.83675 12.75 1.5 12.414 1.5 12C1.5 11.586 1.83675 11.25 2.25 11.25L14.25 11.25C14.6633 11.25 15 11.586 15 12C15 12.414 14.6633 12.75 14.25 12.75Z"
  }));
};

;// CONCATENATED MODULE: ./assets/src/common/TextAreaInput.js
var _excluded = ["className", "name", "label", "required", "rules", "labelCol", "wrapperCol"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var _window$antd = window.antd,
  Input = _window$antd.Input,
  Form = _window$antd.Form;
var TextArea = Input.TextArea;
function TextAreaInput(_ref) {
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
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(Form.Item, {
    className: "timetics-input ".concat(className),
    label: label,
    labelCol: labelCol,
    wrapperCol: wrapperCol,
    name: name,
    rules: rules
  }, /*#__PURE__*/React.createElement(TextArea, props));
}
/* harmony default export */ const common_TextAreaInput = (TextAreaInput);
;// CONCATENATED MODULE: ./assets/src/common/TextInput.js
var TextInput_excluded = ["className", "name", "label", "required", "rules", "labelCol", "wrapperCol", "tooltip"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function TextInput_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = TextInput_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function TextInput_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var TextInput_window$antd = window.antd,
  TextInput_Input = TextInput_window$antd.Input,
  TextInput_Form = TextInput_window$antd.Form;
function TextInput(_ref) {
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
    _ref$tooltip = _ref.tooltip,
    tooltip = _ref$tooltip === void 0 ? "" : _ref$tooltip,
    props = TextInput_objectWithoutProperties(_ref, TextInput_excluded);
  return /*#__PURE__*/React.createElement(TextInput_Form.Item, {
    className: "timetics-input ".concat(className),
    label: label,
    labelCol: labelCol,
    wrapperCol: wrapperCol,
    name: name,
    tooltip: tooltip,
    rules: rules
  }, /*#__PURE__*/React.createElement(TextInput_Input, _extends({}, props, {
    size: "large"
  })));
}
/* harmony default export */ const common_TextInput = (TextInput);
;// CONCATENATED MODULE: ./assets/src/frontend/pages/bookings/Header.js
var __ = wp.i18n.__;
var Typography = window.antd.Typography;
var Title = Typography.Title;
function Header(_ref) {
  var stepTitle = _ref.stepTitle,
    componentTitle = _ref.componentTitle;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Title, {
    className: "tt-section-title tt-mb-20",
    level: 2
  }, componentTitle));
}
/* harmony default export */ const bookings_Header = (Header);
;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/bind.js


function bind(fn, thisArg) {
  return function wrap() {
    return fn.apply(thisArg, arguments);
  };
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/utils.js




// utils is a library of generic helper functions non-specific to axios

const {toString: utils_toString} = Object.prototype;
const {getPrototypeOf} = Object;

const kindOf = (cache => thing => {
    const str = utils_toString.call(thing);
    return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
})(Object.create(null));

const kindOfTest = (type) => {
  type = type.toLowerCase();
  return (thing) => kindOf(thing) === type
}

const typeOfTest = type => thing => typeof thing === type;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 *
 * @returns {boolean} True if value is an Array, otherwise false
 */
const {isArray} = Array;

/**
 * Determine if a value is undefined
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if the value is undefined, otherwise false
 */
const isUndefined = typeOfTest('undefined');

/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
const isArrayBuffer = kindOfTest('ArrayBuffer');


/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  let result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (isArrayBuffer(val.buffer));
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a String, otherwise false
 */
const isString = typeOfTest('string');

/**
 * Determine if a value is a Function
 *
 * @param {*} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
const isFunction = typeOfTest('function');

/**
 * Determine if a value is a Number
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Number, otherwise false
 */
const isNumber = typeOfTest('number');

/**
 * Determine if a value is an Object
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an Object, otherwise false
 */
const isObject = (thing) => thing !== null && typeof thing === 'object';

/**
 * Determine if a value is a Boolean
 *
 * @param {*} thing The value to test
 * @returns {boolean} True if value is a Boolean, otherwise false
 */
const isBoolean = thing => thing === true || thing === false;

/**
 * Determine if a value is a plain Object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a plain Object, otherwise false
 */
const isPlainObject = (val) => {
  if (kindOf(val) !== 'object') {
    return false;
  }

  const prototype = getPrototypeOf(val);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
}

/**
 * Determine if a value is a Date
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Date, otherwise false
 */
const isDate = kindOfTest('Date');

/**
 * Determine if a value is a File
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
const isFile = kindOfTest('File');

/**
 * Determine if a value is a Blob
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Blob, otherwise false
 */
const isBlob = kindOfTest('Blob');

/**
 * Determine if a value is a FileList
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
const isFileList = kindOfTest('FileList');

/**
 * Determine if a value is a Stream
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Stream, otherwise false
 */
const isStream = (val) => isObject(val) && isFunction(val.pipe);

/**
 * Determine if a value is a FormData
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an FormData, otherwise false
 */
const isFormData = (thing) => {
  const pattern = '[object FormData]';
  return thing && (
    (typeof FormData === 'function' && thing instanceof FormData) ||
    utils_toString.call(thing) === pattern ||
    (isFunction(thing.toString) && thing.toString() === pattern)
  );
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
const isURLSearchParams = kindOfTest('URLSearchParams');

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 *
 * @returns {String} The String freed of excess whitespace
 */
const trim = (str) => str.trim ?
  str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 *
 * @param {Boolean} [allOwnKeys = false]
 * @returns {void}
 */
function forEach(obj, fn, {allOwnKeys = false} = {}) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  let i;
  let l;

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
    const len = keys.length;
    let key;

    for (i = 0; i < len; i++) {
      key = keys[i];
      fn.call(null, obj[key], key, obj);
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 *
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  const result = {};
  const assignValue = (val, key) => {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (let i = 0, l = arguments.length; i < l; i++) {
    arguments[i] && forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 *
 * @param {Boolean} [allOwnKeys]
 * @returns {Object} The resulting value of object a
 */
const extend = (a, b, thisArg, {allOwnKeys}= {}) => {
  forEach(b, (val, key) => {
    if (thisArg && isFunction(val)) {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  }, {allOwnKeys});
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 *
 * @returns {string} content value without BOM
 */
const stripBOM = (content) => {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

/**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 *
 * @returns {void}
 */
const inherits = (constructor, superConstructor, props, descriptors) => {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors);
  constructor.prototype.constructor = constructor;
  Object.defineProperty(constructor, 'super', {
    value: superConstructor.prototype
  });
  props && Object.assign(constructor.prototype, props);
}

/**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function|Boolean} [filter]
 * @param {Function} [propFilter]
 *
 * @returns {Object}
 */
const toFlatObject = (sourceObj, destObj, filter, propFilter) => {
  let props;
  let i;
  let prop;
  const merged = {};

  destObj = destObj || {};
  // eslint-disable-next-line no-eq-null,eqeqeq
  if (sourceObj == null) return destObj;

  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i = props.length;
    while (i-- > 0) {
      prop = props[i];
      if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
        destObj[prop] = sourceObj[prop];
        merged[prop] = true;
      }
    }
    sourceObj = filter !== false && getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);

  return destObj;
}

/**
 * Determines whether a string ends with the characters of a specified string
 *
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 *
 * @returns {boolean}
 */
const endsWith = (str, searchString, position) => {
  str = String(str);
  if (position === undefined || position > str.length) {
    position = str.length;
  }
  position -= searchString.length;
  const lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
}


/**
 * Returns new array from array like object or null if failed
 *
 * @param {*} [thing]
 *
 * @returns {?Array}
 */
const toArray = (thing) => {
  if (!thing) return null;
  if (isArray(thing)) return thing;
  let i = thing.length;
  if (!isNumber(i)) return null;
  const arr = new Array(i);
  while (i-- > 0) {
    arr[i] = thing[i];
  }
  return arr;
}

/**
 * Checking if the Uint8Array exists and if it does, it returns a function that checks if the
 * thing passed in is an instance of Uint8Array
 *
 * @param {TypedArray}
 *
 * @returns {Array}
 */
// eslint-disable-next-line func-names
const isTypedArray = (TypedArray => {
  // eslint-disable-next-line func-names
  return thing => {
    return TypedArray && thing instanceof TypedArray;
  };
})(typeof Uint8Array !== 'undefined' && getPrototypeOf(Uint8Array));

/**
 * For each entry in the object, call the function with the key and value.
 *
 * @param {Object<any, any>} obj - The object to iterate over.
 * @param {Function} fn - The function to call for each entry.
 *
 * @returns {void}
 */
const forEachEntry = (obj, fn) => {
  const generator = obj && obj[Symbol.iterator];

  const iterator = generator.call(obj);

  let result;

  while ((result = iterator.next()) && !result.done) {
    const pair = result.value;
    fn.call(obj, pair[0], pair[1]);
  }
}

/**
 * It takes a regular expression and a string, and returns an array of all the matches
 *
 * @param {string} regExp - The regular expression to match against.
 * @param {string} str - The string to search.
 *
 * @returns {Array<boolean>}
 */
const matchAll = (regExp, str) => {
  let matches;
  const arr = [];

  while ((matches = regExp.exec(str)) !== null) {
    arr.push(matches);
  }

  return arr;
}

/* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */
const isHTMLForm = kindOfTest('HTMLFormElement');

const toCamelCase = str => {
  return str.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,
    function replacer(m, p1, p2) {
      return p1.toUpperCase() + p2;
    }
  );
};

/* Creating a function that will check if an object has a property. */
const utils_hasOwnProperty = (({hasOwnProperty}) => (obj, prop) => hasOwnProperty.call(obj, prop))(Object.prototype);

/**
 * Determine if a value is a RegExp object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a RegExp object, otherwise false
 */
const isRegExp = kindOfTest('RegExp');

const reduceDescriptors = (obj, reducer) => {
  const descriptors = Object.getOwnPropertyDescriptors(obj);
  const reducedDescriptors = {};

  forEach(descriptors, (descriptor, name) => {
    if (reducer(descriptor, name, obj) !== false) {
      reducedDescriptors[name] = descriptor;
    }
  });

  Object.defineProperties(obj, reducedDescriptors);
}

/**
 * Makes all methods read-only
 * @param {Object} obj
 */

const freezeMethods = (obj) => {
  reduceDescriptors(obj, (descriptor, name) => {
    const value = obj[name];

    if (!isFunction(value)) return;

    descriptor.enumerable = false;

    if ('writable' in descriptor) {
      descriptor.writable = false;
      return;
    }

    if (!descriptor.set) {
      descriptor.set = () => {
        throw Error('Can not read-only method \'' + name + '\'');
      };
    }
  });
}

const toObjectSet = (arrayOrString, delimiter) => {
  const obj = {};

  const define = (arr) => {
    arr.forEach(value => {
      obj[value] = true;
    });
  }

  isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));

  return obj;
}

const noop = () => {}

const toFiniteNumber = (value, defaultValue) => {
  value = +value;
  return Number.isFinite(value) ? value : defaultValue;
}

/* harmony default export */ const utils = ({
  isArray,
  isArrayBuffer,
  isBuffer,
  isFormData,
  isArrayBufferView,
  isString,
  isNumber,
  isBoolean,
  isObject,
  isPlainObject,
  isUndefined,
  isDate,
  isFile,
  isBlob,
  isRegExp,
  isFunction,
  isStream,
  isURLSearchParams,
  isTypedArray,
  isFileList,
  forEach,
  merge,
  extend,
  trim,
  stripBOM,
  inherits,
  toFlatObject,
  kindOf,
  kindOfTest,
  endsWith,
  toArray,
  forEachEntry,
  matchAll,
  isHTMLForm,
  hasOwnProperty: utils_hasOwnProperty,
  hasOwnProp: utils_hasOwnProperty, // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors,
  freezeMethods,
  toObjectSet,
  toCamelCase,
  noop,
  toFiniteNumber
});

;// CONCATENATED MODULE: ./node_modules/axios/lib/core/AxiosError.js




/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */
function AxiosError(message, code, config, request, response) {
  Error.call(this);

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    this.stack = (new Error()).stack;
  }

  this.message = message;
  this.name = 'AxiosError';
  code && (this.code = code);
  config && (this.config = config);
  request && (this.request = request);
  response && (this.response = response);
}

utils.inherits(AxiosError, Error, {
  toJSON: function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});

const AxiosError_prototype = AxiosError.prototype;
const descriptors = {};

[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED',
  'ERR_NOT_SUPPORT',
  'ERR_INVALID_URL'
// eslint-disable-next-line func-names
].forEach(code => {
  descriptors[code] = {value: code};
});

Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(AxiosError_prototype, 'isAxiosError', {value: true});

// eslint-disable-next-line func-names
AxiosError.from = (error, code, config, request, response, customProps) => {
  const axiosError = Object.create(AxiosError_prototype);

  utils.toFlatObject(error, axiosError, function filter(obj) {
    return obj !== Error.prototype;
  }, prop => {
    return prop !== 'isAxiosError';
  });

  AxiosError.call(axiosError, error.message, code, config, request, response);

  axiosError.cause = error;

  axiosError.name = error.name;

  customProps && Object.assign(axiosError, customProps);

  return axiosError;
};

/* harmony default export */ const core_AxiosError = (AxiosError);

// EXTERNAL MODULE: ./node_modules/form-data/lib/browser.js
var browser = __webpack_require__(230);
;// CONCATENATED MODULE: ./node_modules/axios/lib/env/classes/FormData.js

/* harmony default export */ const classes_FormData = (browser);

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/toFormData.js






/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */
function isVisitable(thing) {
  return utils.isPlainObject(thing) || utils.isArray(thing);
}

/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */
function removeBrackets(key) {
  return utils.endsWith(key, '[]') ? key.slice(0, -2) : key;
}

/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */
function renderKey(path, key, dots) {
  if (!path) return key;
  return path.concat(key).map(function each(token, i) {
    // eslint-disable-next-line no-param-reassign
    token = removeBrackets(token);
    return !dots && i ? '[' + token + ']' : token;
  }).join(dots ? '.' : '');
}

/**
 * If the array is an array and none of its elements are visitable, then it's a flat array.
 *
 * @param {Array<any>} arr - The array to check
 *
 * @returns {boolean}
 */
function isFlatArray(arr) {
  return utils.isArray(arr) && !arr.some(isVisitable);
}

const predicates = utils.toFlatObject(utils, {}, null, function filter(prop) {
  return /^is[A-Z]/.test(prop);
});

/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */
function isSpecCompliant(thing) {
  return thing && utils.isFunction(thing.append) && thing[Symbol.toStringTag] === 'FormData' && thing[Symbol.iterator];
}

/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **/

/**
 * It converts an object into a FormData object
 *
 * @param {Object<any, any>} obj - The object to convert to form data.
 * @param {string} formData - The FormData object to append to.
 * @param {Object<string, any>} options
 *
 * @returns
 */
function toFormData(obj, formData, options) {
  if (!utils.isObject(obj)) {
    throw new TypeError('target must be an object');
  }

  // eslint-disable-next-line no-param-reassign
  formData = formData || new (classes_FormData || FormData)();

  // eslint-disable-next-line no-param-reassign
  options = utils.toFlatObject(options, {
    metaTokens: true,
    dots: false,
    indexes: false
  }, false, function defined(option, source) {
    // eslint-disable-next-line no-eq-null,eqeqeq
    return !utils.isUndefined(source[option]);
  });

  const metaTokens = options.metaTokens;
  // eslint-disable-next-line no-use-before-define
  const visitor = options.visitor || defaultVisitor;
  const dots = options.dots;
  const indexes = options.indexes;
  const _Blob = options.Blob || typeof Blob !== 'undefined' && Blob;
  const useBlob = _Blob && isSpecCompliant(formData);

  if (!utils.isFunction(visitor)) {
    throw new TypeError('visitor must be a function');
  }

  function convertValue(value) {
    if (value === null) return '';

    if (utils.isDate(value)) {
      return value.toISOString();
    }

    if (!useBlob && utils.isBlob(value)) {
      throw new core_AxiosError('Blob is not supported. Use a Buffer instead.');
    }

    if (utils.isArrayBuffer(value) || utils.isTypedArray(value)) {
      return useBlob && typeof Blob === 'function' ? new Blob([value]) : Buffer.from(value);
    }

    return value;
  }

  /**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */
  function defaultVisitor(value, key, path) {
    let arr = value;

    if (value && !path && typeof value === 'object') {
      if (utils.endsWith(key, '{}')) {
        // eslint-disable-next-line no-param-reassign
        key = metaTokens ? key : key.slice(0, -2);
        // eslint-disable-next-line no-param-reassign
        value = JSON.stringify(value);
      } else if (
        (utils.isArray(value) && isFlatArray(value)) ||
        (utils.isFileList(value) || utils.endsWith(key, '[]') && (arr = utils.toArray(value))
        )) {
        // eslint-disable-next-line no-param-reassign
        key = removeBrackets(key);

        arr.forEach(function each(el, index) {
          !(utils.isUndefined(el) || el === null) && formData.append(
            // eslint-disable-next-line no-nested-ternary
            indexes === true ? renderKey([key], index, dots) : (indexes === null ? key : key + '[]'),
            convertValue(el)
          );
        });
        return false;
      }
    }

    if (isVisitable(value)) {
      return true;
    }

    formData.append(renderKey(path, key, dots), convertValue(value));

    return false;
  }

  const stack = [];

  const exposedHelpers = Object.assign(predicates, {
    defaultVisitor,
    convertValue,
    isVisitable
  });

  function build(value, path) {
    if (utils.isUndefined(value)) return;

    if (stack.indexOf(value) !== -1) {
      throw Error('Circular reference detected in ' + path.join('.'));
    }

    stack.push(value);

    utils.forEach(value, function each(el, key) {
      const result = !(utils.isUndefined(el) || el === null) && visitor.call(
        formData, el, utils.isString(key) ? key.trim() : key, path, exposedHelpers
      );

      if (result === true) {
        build(el, path ? path.concat(key) : [key]);
      }
    });

    stack.pop();
  }

  if (!utils.isObject(obj)) {
    throw new TypeError('data must be an object');
  }

  build(obj);

  return formData;
}

/* harmony default export */ const helpers_toFormData = (toFormData);

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/AxiosURLSearchParams.js




/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */
function encode(str) {
  const charMap = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\x00'
  };
  return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
    return charMap[match];
  });
}

/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */
function AxiosURLSearchParams(params, options) {
  this._pairs = [];

  params && helpers_toFormData(params, this, options);
}

const AxiosURLSearchParams_prototype = AxiosURLSearchParams.prototype;

AxiosURLSearchParams_prototype.append = function append(name, value) {
  this._pairs.push([name, value]);
};

AxiosURLSearchParams_prototype.toString = function toString(encoder) {
  const _encode = encoder ? function(value) {
    return encoder.call(this, value, encode);
  } : encode;

  return this._pairs.map(function each(pair) {
    return _encode(pair[0]) + '=' + _encode(pair[1]);
  }, '').join('&');
};

/* harmony default export */ const helpers_AxiosURLSearchParams = (AxiosURLSearchParams);

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/buildURL.js





/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */
function buildURL_encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @param {?object} options
 *
 * @returns {string} The formatted url
 */
function buildURL(url, params, options) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }
  
  const _encode = options && options.encode || buildURL_encode;

  const serializeFn = options && options.serialize;

  let serializedParams;

  if (serializeFn) {
    serializedParams = serializeFn(params, options);
  } else {
    serializedParams = utils.isURLSearchParams(params) ?
      params.toString() :
      new helpers_AxiosURLSearchParams(params, options).toString(_encode);
  }

  if (serializedParams) {
    const hashmarkIndex = url.indexOf("#");

    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/core/InterceptorManager.js




class InterceptorManager {
  constructor() {
    this.handlers = [];
  }

  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(fulfilled, rejected, options) {
    this.handlers.push({
      fulfilled,
      rejected,
      synchronous: options ? options.synchronous : false,
      runWhen: options ? options.runWhen : null
    });
    return this.handlers.length - 1;
  }

  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  }

  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    if (this.handlers) {
      this.handlers = [];
    }
  }

  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(fn) {
    utils.forEach(this.handlers, function forEachHandler(h) {
      if (h !== null) {
        fn(h);
      }
    });
  }
}

/* harmony default export */ const core_InterceptorManager = (InterceptorManager);

;// CONCATENATED MODULE: ./node_modules/axios/lib/defaults/transitional.js


/* harmony default export */ const defaults_transitional = ({
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
});

;// CONCATENATED MODULE: ./node_modules/axios/lib/platform/browser/classes/URLSearchParams.js



/* harmony default export */ const classes_URLSearchParams = (typeof URLSearchParams !== 'undefined' ? URLSearchParams : helpers_AxiosURLSearchParams);

;// CONCATENATED MODULE: ./node_modules/axios/lib/platform/browser/classes/FormData.js


/* harmony default export */ const browser_classes_FormData = (FormData);

;// CONCATENATED MODULE: ./node_modules/axios/lib/platform/browser/index.js



/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 *
 * @returns {boolean}
 */
const isStandardBrowserEnv = (() => {
  let product;
  if (typeof navigator !== 'undefined' && (
    (product = navigator.product) === 'ReactNative' ||
    product === 'NativeScript' ||
    product === 'NS')
  ) {
    return false;
  }

  return typeof window !== 'undefined' && typeof document !== 'undefined';
})();

/* harmony default export */ const platform_browser = ({
  isBrowser: true,
  classes: {
    URLSearchParams: classes_URLSearchParams,
    FormData: browser_classes_FormData,
    Blob
  },
  isStandardBrowserEnv,
  protocols: ['http', 'https', 'file', 'blob', 'url', 'data']
});

;// CONCATENATED MODULE: ./node_modules/axios/lib/platform/index.js




;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/toURLEncodedForm.js






function toURLEncodedForm(data, options) {
  return helpers_toFormData(data, new platform_browser.classes.URLSearchParams(), Object.assign({
    visitor: function(value, key, path, helpers) {
      if (platform_browser.isNode && utils.isBuffer(value)) {
        this.append(key, value.toString('base64'));
        return false;
      }

      return helpers.defaultVisitor.apply(this, arguments);
    }
  }, options));
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/formDataToJSON.js




/**
 * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
 *
 * @param {string} name - The name of the property to get.
 *
 * @returns An array of strings.
 */
function parsePropPath(name) {
  // foo[x][y][z]
  // foo.x.y.z
  // foo-x-y-z
  // foo x y z
  return utils.matchAll(/\w+|\[(\w*)]/g, name).map(match => {
    return match[0] === '[]' ? '' : match[1] || match[0];
  });
}

/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */
function arrayToObject(arr) {
  const obj = {};
  const keys = Object.keys(arr);
  let i;
  const len = keys.length;
  let key;
  for (i = 0; i < len; i++) {
    key = keys[i];
    obj[key] = arr[key];
  }
  return obj;
}

/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */
function formDataToJSON(formData) {
  function buildPath(path, value, target, index) {
    let name = path[index++];
    const isNumericKey = Number.isFinite(+name);
    const isLast = index >= path.length;
    name = !name && utils.isArray(target) ? target.length : name;

    if (isLast) {
      if (utils.hasOwnProp(target, name)) {
        target[name] = [target[name], value];
      } else {
        target[name] = value;
      }

      return !isNumericKey;
    }

    if (!target[name] || !utils.isObject(target[name])) {
      target[name] = [];
    }

    const result = buildPath(path, value, target[name], index);

    if (result && utils.isArray(target[name])) {
      target[name] = arrayToObject(target[name]);
    }

    return !isNumericKey;
  }

  if (utils.isFormData(formData) && utils.isFunction(formData.entries)) {
    const obj = {};

    utils.forEachEntry(formData, (name, value) => {
      buildPath(parsePropPath(name), value, obj, 0);
    });

    return obj;
  }

  return null;
}

/* harmony default export */ const helpers_formDataToJSON = (formDataToJSON);

;// CONCATENATED MODULE: ./node_modules/axios/lib/core/settle.js




/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 *
 * @returns {object} The response.
 */
function settle(resolve, reject, response) {
  const validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(new core_AxiosError(
      'Request failed with status code ' + response.status,
      [core_AxiosError.ERR_BAD_REQUEST, core_AxiosError.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
      response.config,
      response.request,
      response
    ));
  }
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/cookies.js





/* harmony default export */ const cookies = (platform_browser.isStandardBrowserEnv ?

// Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        const cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        const match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

// Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })());

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/isAbsoluteURL.js


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 *
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/combineURLs.js


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 *
 * @returns {string} The combined URL
 */
function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/core/buildFullPath.js





/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 *
 * @returns {string} The combined full path
 */
function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/isURLSameOrigin.js





/* harmony default export */ const isURLSameOrigin = (platform_browser.isStandardBrowserEnv ?

// Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    const msie = /(msie|trident)/i.test(navigator.userAgent);
    const urlParsingNode = document.createElement('a');
    let originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      let href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
          urlParsingNode.pathname :
          '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      const parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
          parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })());

;// CONCATENATED MODULE: ./node_modules/axios/lib/cancel/CanceledError.js





/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */
function CanceledError(message, config, request) {
  // eslint-disable-next-line no-eq-null,eqeqeq
  core_AxiosError.call(this, message == null ? 'canceled' : message, core_AxiosError.ERR_CANCELED, config, request);
  this.name = 'CanceledError';
}

utils.inherits(CanceledError, core_AxiosError, {
  __CANCEL__: true
});

/* harmony default export */ const cancel_CanceledError = (CanceledError);

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/parseProtocol.js


function parseProtocol(url) {
  const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
  return match && match[1] || '';
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/parseHeaders.js




// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
const ignoreDuplicateOf = utils.toObjectSet([
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
]);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} rawHeaders Headers needing to be parsed
 *
 * @returns {Object} Headers parsed into an object
 */
/* harmony default export */ const parseHeaders = (rawHeaders => {
  const parsed = {};
  let key;
  let val;
  let i;

  rawHeaders && rawHeaders.split('\n').forEach(function parser(line) {
    i = line.indexOf(':');
    key = line.substring(0, i).trim().toLowerCase();
    val = line.substring(i + 1).trim();

    if (!key || (parsed[key] && ignoreDuplicateOf[key])) {
      return;
    }

    if (key === 'set-cookie') {
      if (parsed[key]) {
        parsed[key].push(val);
      } else {
        parsed[key] = [val];
      }
    } else {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
});

;// CONCATENATED MODULE: ./node_modules/axios/lib/core/AxiosHeaders.js





const $internals = Symbol('internals');
const $defaults = Symbol('defaults');

function normalizeHeader(header) {
  return header && String(header).trim().toLowerCase();
}

function normalizeValue(value) {
  if (value === false || value == null) {
    return value;
  }

  return utils.isArray(value) ? value.map(normalizeValue) : String(value);
}

function parseTokens(str) {
  const tokens = Object.create(null);
  const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let match;

  while ((match = tokensRE.exec(str))) {
    tokens[match[1]] = match[2];
  }

  return tokens;
}

function matchHeaderValue(context, value, header, filter) {
  if (utils.isFunction(filter)) {
    return filter.call(this, value, header);
  }

  if (!utils.isString(value)) return;

  if (utils.isString(filter)) {
    return value.indexOf(filter) !== -1;
  }

  if (utils.isRegExp(filter)) {
    return filter.test(value);
  }
}

function formatHeader(header) {
  return header.trim()
    .toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
      return char.toUpperCase() + str;
    });
}

function buildAccessors(obj, header) {
  const accessorName = utils.toCamelCase(' ' + header);

  ['get', 'set', 'has'].forEach(methodName => {
    Object.defineProperty(obj, methodName + accessorName, {
      value: function(arg1, arg2, arg3) {
        return this[methodName].call(this, header, arg1, arg2, arg3);
      },
      configurable: true
    });
  });
}

function findKey(obj, key) {
  key = key.toLowerCase();
  const keys = Object.keys(obj);
  let i = keys.length;
  let _key;
  while (i-- > 0) {
    _key = keys[i];
    if (key === _key.toLowerCase()) {
      return _key;
    }
  }
  return null;
}

function AxiosHeaders(headers, defaults) {
  headers && this.set(headers);
  this[$defaults] = defaults || null;
}

Object.assign(AxiosHeaders.prototype, {
  set: function(header, valueOrRewrite, rewrite) {
    const self = this;

    function setHeader(_value, _header, _rewrite) {
      const lHeader = normalizeHeader(_header);

      if (!lHeader) {
        throw new Error('header name must be a non-empty string');
      }

      const key = findKey(self, lHeader);

      if (key && _rewrite !== true && (self[key] === false || _rewrite === false)) {
        return;
      }

      self[key || _header] = normalizeValue(_value);
    }

    if (utils.isPlainObject(header)) {
      utils.forEach(header, (_value, _header) => {
        setHeader(_value, _header, valueOrRewrite);
      });
    } else {
      setHeader(valueOrRewrite, header, rewrite);
    }

    return this;
  },

  get: function(header, parser) {
    header = normalizeHeader(header);

    if (!header) return undefined;

    const key = findKey(this, header);

    if (key) {
      const value = this[key];

      if (!parser) {
        return value;
      }

      if (parser === true) {
        return parseTokens(value);
      }

      if (utils.isFunction(parser)) {
        return parser.call(this, value, key);
      }

      if (utils.isRegExp(parser)) {
        return parser.exec(value);
      }

      throw new TypeError('parser must be boolean|regexp|function');
    }
  },

  has: function(header, matcher) {
    header = normalizeHeader(header);

    if (header) {
      const key = findKey(this, header);

      return !!(key && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
    }

    return false;
  },

  delete: function(header, matcher) {
    const self = this;
    let deleted = false;

    function deleteHeader(_header) {
      _header = normalizeHeader(_header);

      if (_header) {
        const key = findKey(self, _header);

        if (key && (!matcher || matchHeaderValue(self, self[key], key, matcher))) {
          delete self[key];

          deleted = true;
        }
      }
    }

    if (utils.isArray(header)) {
      header.forEach(deleteHeader);
    } else {
      deleteHeader(header);
    }

    return deleted;
  },

  clear: function() {
    return Object.keys(this).forEach(this.delete.bind(this));
  },

  normalize: function(format) {
    const self = this;
    const headers = {};

    utils.forEach(this, (value, header) => {
      const key = findKey(headers, header);

      if (key) {
        self[key] = normalizeValue(value);
        delete self[header];
        return;
      }

      const normalized = format ? formatHeader(header) : String(header).trim();

      if (normalized !== header) {
        delete self[header];
      }

      self[normalized] = normalizeValue(value);

      headers[normalized] = true;
    });

    return this;
  },

  toJSON: function(asStrings) {
    const obj = Object.create(null);

    utils.forEach(Object.assign({}, this[$defaults] || null, this),
      (value, header) => {
        if (value == null || value === false) return;
        obj[header] = asStrings && utils.isArray(value) ? value.join(', ') : value;
      });

    return obj;
  }
});

Object.assign(AxiosHeaders, {
  from: function(thing) {
    if (utils.isString(thing)) {
      return new this(parseHeaders(thing));
    }
    return thing instanceof this ? thing : new this(thing);
  },

  accessor: function(header) {
    const internals = this[$internals] = (this[$internals] = {
      accessors: {}
    });

    const accessors = internals.accessors;
    const prototype = this.prototype;

    function defineAccessor(_header) {
      const lHeader = normalizeHeader(_header);

      if (!accessors[lHeader]) {
        buildAccessors(prototype, _header);
        accessors[lHeader] = true;
      }
    }

    utils.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);

    return this;
  }
});

AxiosHeaders.accessor(['Content-Type', 'Content-Length', 'Accept', 'Accept-Encoding', 'User-Agent']);

utils.freezeMethods(AxiosHeaders.prototype);
utils.freezeMethods(AxiosHeaders);

/* harmony default export */ const core_AxiosHeaders = (AxiosHeaders);

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/speedometer.js


/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */
function speedometer(samplesCount, min) {
  samplesCount = samplesCount || 10;
  const bytes = new Array(samplesCount);
  const timestamps = new Array(samplesCount);
  let head = 0;
  let tail = 0;
  let firstSampleTS;

  min = min !== undefined ? min : 1000;

  return function push(chunkLength) {
    const now = Date.now();

    const startedAt = timestamps[tail];

    if (!firstSampleTS) {
      firstSampleTS = now;
    }

    bytes[head] = chunkLength;
    timestamps[head] = now;

    let i = tail;
    let bytesCount = 0;

    while (i !== head) {
      bytesCount += bytes[i++];
      i = i % samplesCount;
    }

    head = (head + 1) % samplesCount;

    if (head === tail) {
      tail = (tail + 1) % samplesCount;
    }

    if (now - firstSampleTS < min) {
      return;
    }

    const passed = startedAt && now - startedAt;

    return  passed ? Math.round(bytesCount * 1000 / passed) : undefined;
  };
}

/* harmony default export */ const helpers_speedometer = (speedometer);

;// CONCATENATED MODULE: ./node_modules/axios/lib/adapters/xhr.js
















function progressEventReducer(listener, isDownloadStream) {
  let bytesNotified = 0;
  const _speedometer = helpers_speedometer(50, 250);

  return e => {
    const loaded = e.loaded;
    const total = e.lengthComputable ? e.total : undefined;
    const progressBytes = loaded - bytesNotified;
    const rate = _speedometer(progressBytes);
    const inRange = loaded <= total;

    bytesNotified = loaded;

    const data = {
      loaded,
      total,
      progress: total ? (loaded / total) : undefined,
      bytes: progressBytes,
      rate: rate ? rate : undefined,
      estimated: rate && total && inRange ? (total - loaded) / rate : undefined
    };

    data[isDownloadStream ? 'download' : 'upload'] = true;

    listener(data);
  };
}

function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    let requestData = config.data;
    const requestHeaders = core_AxiosHeaders.from(config.headers).normalize();
    const responseType = config.responseType;
    let onCanceled;
    function done() {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(onCanceled);
      }

      if (config.signal) {
        config.signal.removeEventListener('abort', onCanceled);
      }
    }

    if (utils.isFormData(requestData) && platform_browser.isStandardBrowserEnv) {
      requestHeaders.setContentType(false); // Let the browser set it
    }

    let request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      const username = config.auth.username || '';
      const password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.set('Authorization', 'Basic ' + btoa(username + ':' + password));
    }

    const fullPath = buildFullPath(config.baseURL, config.url);

    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      const responseHeaders = core_AxiosHeaders.from(
        'getAllResponseHeaders' in request && request.getAllResponseHeaders()
      );
      const responseData = !responseType || responseType === 'text' ||  responseType === 'json' ?
        request.responseText : request.response;
      const response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      };

      settle(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);

      // Clean up request
      request = null;
    }

    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(new core_AxiosError('Request aborted', core_AxiosError.ECONNABORTED, config, request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(new core_AxiosError('Network Error', core_AxiosError.ERR_NETWORK, config, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      let timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
      const transitional = config.transitional || defaults_transitional;
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(new core_AxiosError(
        timeoutErrorMessage,
        transitional.clarifyTimeoutError ? core_AxiosError.ETIMEDOUT : core_AxiosError.ECONNABORTED,
        config,
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (platform_browser.isStandardBrowserEnv) {
      // Add xsrf header
      const xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath))
        && config.xsrfCookieName && cookies.read(config.xsrfCookieName);

      if (xsrfValue) {
        requestHeaders.set(config.xsrfHeaderName, xsrfValue);
      }
    }

    // Remove Content-Type if data is undefined
    requestData === undefined && requestHeaders.setContentType(null);

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
        request.setRequestHeader(key, val);
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = config.responseType;
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', progressEventReducer(config.onDownloadProgress, true));
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', progressEventReducer(config.onUploadProgress));
    }

    if (config.cancelToken || config.signal) {
      // Handle cancellation
      // eslint-disable-next-line func-names
      onCanceled = cancel => {
        if (!request) {
          return;
        }
        reject(!cancel || cancel.type ? new cancel_CanceledError(null, config, request) : cancel);
        request.abort();
        request = null;
      };

      config.cancelToken && config.cancelToken.subscribe(onCanceled);
      if (config.signal) {
        config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
      }
    }

    const protocol = parseProtocol(fullPath);

    if (protocol && platform_browser.protocols.indexOf(protocol) === -1) {
      reject(new core_AxiosError('Unsupported protocol ' + protocol + ':', core_AxiosError.ERR_BAD_REQUEST, config));
      return;
    }


    // Send the request
    request.send(requestData || null);
  });
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/adapters/index.js




const adapters = {
  http: xhrAdapter,
  xhr: xhrAdapter
}

/* harmony default export */ const lib_adapters = ({
  getAdapter: (nameOrAdapter) => {
    if(utils.isString(nameOrAdapter)){
      const adapter = adapters[nameOrAdapter];

      if (!nameOrAdapter) {
        throw Error(
          utils.hasOwnProp(nameOrAdapter) ?
            `Adapter '${nameOrAdapter}' is not available in the build` :
            `Can not resolve adapter '${nameOrAdapter}'`
        );
      }

      return adapter
    }

    if (!utils.isFunction(nameOrAdapter)) {
      throw new TypeError('adapter is not a function');
    }

    return nameOrAdapter;
  },
  adapters
});

;// CONCATENATED MODULE: ./node_modules/axios/lib/defaults/index.js











const DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

/**
 * If the browser has an XMLHttpRequest object, use the XHR adapter, otherwise use the HTTP
 * adapter
 *
 * @returns {Function}
 */
function getDefaultAdapter() {
  let adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = lib_adapters.getAdapter('xhr');
  } else if (typeof process !== 'undefined' && utils.kindOf(process) === 'process') {
    // For node use HTTP adapter
    adapter = lib_adapters.getAdapter('http');
  }
  return adapter;
}

/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */
function stringifySafely(rawValue, parser, encoder) {
  if (utils.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils.trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }

  return (encoder || JSON.stringify)(rawValue);
}

const defaults = {

  transitional: defaults_transitional,

  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    const contentType = headers.getContentType() || '';
    const hasJSONContentType = contentType.indexOf('application/json') > -1;
    const isObjectPayload = utils.isObject(data);

    if (isObjectPayload && utils.isHTMLForm(data)) {
      data = new FormData(data);
    }

    const isFormData = utils.isFormData(data);

    if (isFormData) {
      if (!hasJSONContentType) {
        return data;
      }
      return hasJSONContentType ? JSON.stringify(helpers_formDataToJSON(data)) : data;
    }

    if (utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      headers.setContentType('application/x-www-form-urlencoded;charset=utf-8', false);
      return data.toString();
    }

    let isFileList;

    if (isObjectPayload) {
      if (contentType.indexOf('application/x-www-form-urlencoded') > -1) {
        return toURLEncodedForm(data, this.formSerializer).toString();
      }

      if ((isFileList = utils.isFileList(data)) || contentType.indexOf('multipart/form-data') > -1) {
        const _FormData = this.env && this.env.FormData;

        return helpers_toFormData(
          isFileList ? {'files[]': data} : data,
          _FormData && new _FormData(),
          this.formSerializer
        );
      }
    }

    if (isObjectPayload || hasJSONContentType ) {
      headers.setContentType('application/json', false);
      return stringifySafely(data);
    }

    return data;
  }],

  transformResponse: [function transformResponse(data) {
    const transitional = this.transitional || defaults.transitional;
    const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    const JSONRequested = this.responseType === 'json';

    if (data && utils.isString(data) && ((forcedJSONParsing && !this.responseType) || JSONRequested)) {
      const silentJSONParsing = transitional && transitional.silentJSONParsing;
      const strictJSONParsing = !silentJSONParsing && JSONRequested;

      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw core_AxiosError.from(e, core_AxiosError.ERR_BAD_RESPONSE, this, null, this.response);
          }
          throw e;
        }
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  env: {
    FormData: platform_browser.classes.FormData,
    Blob: platform_browser.classes.Blob
  },

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },

  headers: {
    common: {
      'Accept': 'application/json, text/plain, */*'
    }
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

/* harmony default export */ const lib_defaults = (defaults);

;// CONCATENATED MODULE: ./node_modules/axios/lib/core/transformData.js






/**
 * Transform the data for a request or a response
 *
 * @param {Array|Function} fns A single function or Array of functions
 * @param {?Object} response The response object
 *
 * @returns {*} The resulting transformed data
 */
function transformData(fns, response) {
  const config = this || lib_defaults;
  const context = response || config;
  const headers = core_AxiosHeaders.from(context.headers);
  let data = context.data;

  utils.forEach(fns, function transform(fn) {
    data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
  });

  headers.normalize();

  return data;
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/cancel/isCancel.js


function isCancel(value) {
  return !!(value && value.__CANCEL__);
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/core/dispatchRequest.js








/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }

  if (config.signal && config.signal.aborted) {
    throw new cancel_CanceledError();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 *
 * @returns {Promise} The Promise to be fulfilled
 */
function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  config.headers = core_AxiosHeaders.from(config.headers);

  // Transform request data
  config.data = transformData.call(
    config,
    config.transformRequest
  );

  const adapter = config.adapter || lib_defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData.call(
      config,
      config.transformResponse,
      response
    );

    response.headers = core_AxiosHeaders.from(response.headers);

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config,
          config.transformResponse,
          reason.response
        );
        reason.response.headers = core_AxiosHeaders.from(reason.response.headers);
      }
    }

    return Promise.reject(reason);
  });
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/core/mergeConfig.js




/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 *
 * @returns {Object} New object resulting from merging config2 to config1
 */
function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  const config = {};

  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  // eslint-disable-next-line consistent-return
  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(undefined, config2[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(undefined, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function mergeDirectKeys(prop) {
    if (prop in config2) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  const mergeMap = {
    'url': valueFromConfig2,
    'method': valueFromConfig2,
    'data': valueFromConfig2,
    'baseURL': defaultToConfig2,
    'transformRequest': defaultToConfig2,
    'transformResponse': defaultToConfig2,
    'paramsSerializer': defaultToConfig2,
    'timeout': defaultToConfig2,
    'timeoutMessage': defaultToConfig2,
    'withCredentials': defaultToConfig2,
    'adapter': defaultToConfig2,
    'responseType': defaultToConfig2,
    'xsrfCookieName': defaultToConfig2,
    'xsrfHeaderName': defaultToConfig2,
    'onUploadProgress': defaultToConfig2,
    'onDownloadProgress': defaultToConfig2,
    'decompress': defaultToConfig2,
    'maxContentLength': defaultToConfig2,
    'maxBodyLength': defaultToConfig2,
    'beforeRedirect': defaultToConfig2,
    'transport': defaultToConfig2,
    'httpAgent': defaultToConfig2,
    'httpsAgent': defaultToConfig2,
    'cancelToken': defaultToConfig2,
    'socketPath': defaultToConfig2,
    'responseEncoding': defaultToConfig2,
    'validateStatus': mergeDirectKeys
  };

  utils.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
    const merge = mergeMap[prop] || mergeDeepProperties;
    const configValue = merge(prop);
    (utils.isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);
  });

  return config;
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/env/data.js
const VERSION = "1.1.3";
;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/validator.js





const validators = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((type, i) => {
  validators[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});

const deprecatedWarnings = {};

/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */
validators.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return '[Axios v' + VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return (value, opt, opts) => {
    if (validator === false) {
      throw new core_AxiosError(
        formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')),
        core_AxiosError.ERR_DEPRECATED
      );
    }

    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(
        formatMessage(
          opt,
          ' has been deprecated since v' + version + ' and will be removed in the near future'
        )
      );
    }

    return validator ? validator(value, opt, opts) : true;
  };
};

/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new core_AxiosError('options must be an object', core_AxiosError.ERR_BAD_OPTION_VALUE);
  }
  const keys = Object.keys(options);
  let i = keys.length;
  while (i-- > 0) {
    const opt = keys[i];
    const validator = schema[opt];
    if (validator) {
      const value = options[opt];
      const result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new core_AxiosError('option ' + opt + ' must be ' + result, core_AxiosError.ERR_BAD_OPTION_VALUE);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new core_AxiosError('Unknown option ' + opt, core_AxiosError.ERR_BAD_OPTION);
    }
  }
}

/* harmony default export */ const validator = ({
  assertOptions,
  validators
});

;// CONCATENATED MODULE: ./node_modules/axios/lib/core/Axios.js











const Axios_validators = validator.validators;

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */
class Axios {
  constructor(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
      request: new core_InterceptorManager(),
      response: new core_InterceptorManager()
    };
  }

  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  request(configOrUrl, config) {
    /*eslint no-param-reassign:0*/
    // Allow for axios('example/url'[, config]) a la fetch API
    if (typeof configOrUrl === 'string') {
      config = config || {};
      config.url = configOrUrl;
    } else {
      config = configOrUrl || {};
    }

    config = mergeConfig(this.defaults, config);

    const {transitional, paramsSerializer} = config;

    if (transitional !== undefined) {
      validator.assertOptions(transitional, {
        silentJSONParsing: Axios_validators.transitional(Axios_validators.boolean),
        forcedJSONParsing: Axios_validators.transitional(Axios_validators.boolean),
        clarifyTimeoutError: Axios_validators.transitional(Axios_validators.boolean)
      }, false);
    }

    if (paramsSerializer !== undefined) {
      validator.assertOptions(paramsSerializer, {
        encode: Axios_validators.function,
        serialize: Axios_validators.function
      }, true);
    }

    // Set config.method
    config.method = (config.method || this.defaults.method || 'get').toLowerCase();

    // Flatten headers
    const defaultHeaders = config.headers && utils.merge(
      config.headers.common,
      config.headers[config.method]
    );

    defaultHeaders && utils.forEach(
      ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
      function cleanHeaderConfig(method) {
        delete config.headers[method];
      }
    );

    config.headers = new core_AxiosHeaders(config.headers, defaultHeaders);

    // filter out skipped interceptors
    const requestInterceptorChain = [];
    let synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
        return;
      }

      synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

      requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
    });

    const responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });

    let promise;
    let i = 0;
    let len;

    if (!synchronousRequestInterceptors) {
      const chain = [dispatchRequest.bind(this), undefined];
      chain.unshift.apply(chain, requestInterceptorChain);
      chain.push.apply(chain, responseInterceptorChain);
      len = chain.length;

      promise = Promise.resolve(config);

      while (i < len) {
        promise = promise.then(chain[i++], chain[i++]);
      }

      return promise;
    }

    len = requestInterceptorChain.length;

    let newConfig = config;

    i = 0;

    while (i < len) {
      const onFulfilled = requestInterceptorChain[i++];
      const onRejected = requestInterceptorChain[i++];
      try {
        newConfig = onFulfilled(newConfig);
      } catch (error) {
        onRejected.call(this, error);
        break;
      }
    }

    try {
      promise = dispatchRequest.call(this, newConfig);
    } catch (error) {
      return Promise.reject(error);
    }

    i = 0;
    len = responseInterceptorChain.length;

    while (i < len) {
      promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
    }

    return promise;
  }

  getUri(config) {
    config = mergeConfig(this.defaults, config);
    const fullPath = buildFullPath(config.baseURL, config.url);
    return buildURL(fullPath, config.params, config.paramsSerializer);
  }
}

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method,
      url,
      data: (config || {}).data
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/

  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data, config) {
      return this.request(mergeConfig(config || {}, {
        method,
        headers: isForm ? {
          'Content-Type': 'multipart/form-data'
        } : {},
        url,
        data
      }));
    };
  }

  Axios.prototype[method] = generateHTTPMethod();

  Axios.prototype[method + 'Form'] = generateHTTPMethod(true);
});

/* harmony default export */ const core_Axios = (Axios);

;// CONCATENATED MODULE: ./node_modules/axios/lib/cancel/CancelToken.js




/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */
class CancelToken {
  constructor(executor) {
    if (typeof executor !== 'function') {
      throw new TypeError('executor must be a function.');
    }

    let resolvePromise;

    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });

    const token = this;

    // eslint-disable-next-line func-names
    this.promise.then(cancel => {
      if (!token._listeners) return;

      let i = token._listeners.length;

      while (i-- > 0) {
        token._listeners[i](cancel);
      }
      token._listeners = null;
    });

    // eslint-disable-next-line func-names
    this.promise.then = onfulfilled => {
      let _resolve;
      // eslint-disable-next-line func-names
      const promise = new Promise(resolve => {
        token.subscribe(resolve);
        _resolve = resolve;
      }).then(onfulfilled);

      promise.cancel = function reject() {
        token.unsubscribe(_resolve);
      };

      return promise;
    };

    executor(function cancel(message, config, request) {
      if (token.reason) {
        // Cancellation has already been requested
        return;
      }

      token.reason = new cancel_CanceledError(message, config, request);
      resolvePromise(token.reason);
    });
  }

  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  }

  /**
   * Subscribe to the cancel signal
   */

  subscribe(listener) {
    if (this.reason) {
      listener(this.reason);
      return;
    }

    if (this._listeners) {
      this._listeners.push(listener);
    } else {
      this._listeners = [listener];
    }
  }

  /**
   * Unsubscribe from the cancel signal
   */

  unsubscribe(listener) {
    if (!this._listeners) {
      return;
    }
    const index = this._listeners.indexOf(listener);
    if (index !== -1) {
      this._listeners.splice(index, 1);
    }
  }

  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let cancel;
    const token = new CancelToken(function executor(c) {
      cancel = c;
    });
    return {
      token,
      cancel
    };
  }
}

/* harmony default export */ const cancel_CancelToken = (CancelToken);

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/spread.js


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 *
 * @returns {Function}
 */
function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/isAxiosError.js




/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 *
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
function isAxiosError(payload) {
  return utils.isObject(payload) && (payload.isAxiosError === true);
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/axios.js

















/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  const context = new core_Axios(defaultConfig);
  const instance = bind(core_Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, core_Axios.prototype, context, {allOwnKeys: true});

  // Copy context to instance
  utils.extend(instance, context, null, {allOwnKeys: true});

  // Factory for creating new instances
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };

  return instance;
}

// Create the default instance to be exported
const axios = createInstance(lib_defaults);

// Expose Axios class to allow class inheritance
axios.Axios = core_Axios;

// Expose Cancel & CancelToken
axios.CanceledError = cancel_CanceledError;
axios.CancelToken = cancel_CancelToken;
axios.isCancel = isCancel;
axios.VERSION = VERSION;
axios.toFormData = helpers_toFormData;

// Expose AxiosError class
axios.AxiosError = core_AxiosError;

// alias for CanceledError for backward compatibility
axios.Cancel = axios.CanceledError;

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};

axios.spread = spread;

// Expose isAxiosError
axios.isAxiosError = isAxiosError;

axios.formToJSON = thing => {
  return helpers_formDataToJSON(utils.isHTMLForm(thing) ? new FormData(thing) : thing);
};

/* harmony default export */ const lib_axios = (axios);

;// CONCATENATED MODULE: ./node_modules/axios/index.js


// Keep top-level export same with static properties
// so that it can keep same with es module or cjs
const {
  Axios: axios_Axios,
  AxiosError: axios_AxiosError,
  CanceledError: axios_CanceledError,
  isCancel: axios_isCancel,
  CancelToken: axios_CancelToken,
  VERSION: axios_VERSION,
  all: axios_all,
  Cancel,
  isAxiosError: axios_isAxiosError,
  spread: axios_spread,
  toFormData: axios_toFormData
} = lib_axios;

/* harmony default export */ const node_modules_axios = (lib_axios);


;// CONCATENATED MODULE: ./assets/src/axios/requestConfig.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _timetics, _timetics2;
function requestConfig_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function requestConfig_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? requestConfig_ownKeys(Object(source), !0).forEach(function (key) { requestConfig_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : requestConfig_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function requestConfig_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var notification = window.antd.notification;
node_modules_axios.defaults.baseURL = (_timetics = timetics) === null || _timetics === void 0 ? void 0 : _timetics.site_url;
node_modules_axios.defaults.headers = {
  "X-WP-Nonce": (_timetics2 = timetics) === null || _timetics2 === void 0 ? void 0 : _timetics2.nonce
};
var CANCEL_TOKEN_SOURCE = node_modules_axios.CancelToken.source();
function generateNewCancelTokenSource() {
  CANCEL_TOKEN_SOURCE = node_modules_axios.CancelToken.source();
}
node_modules_axios.interceptors.response.use(function (res) {
  var _res$config, _res$data;
  if ((res === null || res === void 0 ? void 0 : (_res$config = res.config) === null || _res$config === void 0 ? void 0 : _res$config.method) !== "get" && res !== null && res !== void 0 && (_res$data = res.data) !== null && _res$data !== void 0 && _res$data.message) {
    var _res$config2, _res$config2$params, _res$data2;
    //To stop toast for any post or put request, add stopToast: true in params of request
    if (res !== null && res !== void 0 && (_res$config2 = res.config) !== null && _res$config2 !== void 0 && (_res$config2$params = _res$config2.params) !== null && _res$config2$params !== void 0 && _res$config2$params.stopToast) return res;
    notification.success({
      message: res === null || res === void 0 ? void 0 : (_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.message,
      // description: "Something went wrong! please try again.",
      placement: "topRight"
    });
  }
  return res;
}, /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(err) {
    var _err$response, _err$response$data;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
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
var requestConfig_request = function request(url, config) {
  return node_modules_axios.request(requestConfig_objectSpread({
    url: url
  }, config));
};
var finishPendingRequests = function finishPendingRequests(cancellationReason) {
  CANCEL_TOKEN_SOURCE.cancel(cancellationReason);
  generateNewCancelTokenSource();
};

;// CONCATENATED MODULE: ./assets/src/admin/services/apiEndPoints.js
var apiEndPoints_apiEndpoint = {
  meetings: {
    meetingsList: "/wp-json/timetics/v1/appointments",
    meeting: "/wp-json/timetics/v1/appointments",
    createMeeting: "/wp-json/timetics/v1/appointments",
    deleteMeeting: "/wp-json/timetics/v1/appointments",
    duplicateMeeting: "/wp-json/timetics/v1/appointments/:id/duplicate",
    search: "wp-json/timetics/v1/appointments/search",
    filterMeeting: "wp-json/timetics/v1/appointments/filter"
  },
  staffs: {
    staff: "/wp-json/timetics/v1/staffs",
    search: "/wp-json/timetics/v1/staffs/search"
  },
  bookings: {
    booking: "/wp-json/timetics/v1/bookings",
    search: "/wp-json/timetics/v1/bookings/search",
    slots: "wp-json/timetics/v1/bookings/entries",
    updatePaymentStatus: "/wp-json/timetics/v1/bookings/:bookingId/payment",
    paymentOptions: "/wp-json/timetics/v1/bookings/payment_methods"
  },
  customers: {
    customers: "/wp-json/timetics/v1/customers",
    search: "/wp-json/timetics/v1/customers/search"
  },
  overview: {
    overview: "/wp-json/timetics/v1/reports/overview"
  },
  payment: {
    stripe: "/wp-json/timetics/v1/stripe/payment"
  },
  settings: {
    settings: "/wp-json/timetics/v1/settings"
  }
};
;// CONCATENATED MODULE: ./assets/src/admin/services/bookings.js
function bookings_typeof(obj) { "@babel/helpers - typeof"; return bookings_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, bookings_typeof(obj); }
function bookings_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ bookings_regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == bookings_typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function bookings_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function bookings_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { bookings_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { bookings_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var createBooking = /*#__PURE__*/function () {
  var _ref = bookings_asyncToGenerator( /*#__PURE__*/bookings_regeneratorRuntime().mark(function _callee(config) {
    return bookings_regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", requestConfig_request(apiEndPoints_apiEndpoint.bookings.booking, config));
          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return function createBooking(_x) {
    return _ref.apply(this, arguments);
  };
}();
var getAllBooking = /*#__PURE__*/(/* unused pure expression or super */ null && (function () {
  var _ref2 = bookings_asyncToGenerator( /*#__PURE__*/bookings_regeneratorRuntime().mark(function _callee2(config) {
    return bookings_regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", request(apiEndpoint.bookings.booking, config));
          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return function getAllBooking(_x2) {
    return _ref2.apply(this, arguments);
  };
}()));
var deleteBooking = /*#__PURE__*/(/* unused pure expression or super */ null && (function () {
  var _ref3 = bookings_asyncToGenerator( /*#__PURE__*/bookings_regeneratorRuntime().mark(function _callee3(config, id) {
    return bookings_regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", request("".concat(apiEndpoint.bookings.booking, "/").concat(id), config));
          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return function deleteBooking(_x3, _x4) {
    return _ref3.apply(this, arguments);
  };
}()));
var bookings_getSingleBooking = /*#__PURE__*/(/* unused pure expression or super */ null && (function () {
  var _ref4 = bookings_asyncToGenerator( /*#__PURE__*/bookings_regeneratorRuntime().mark(function _callee4(config, id) {
    return bookings_regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            return _context4.abrupt("return", request("".concat(apiEndpoint.bookings.booking, "/").concat(id), config));
          case 1:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return function getSingleBooking(_x5, _x6) {
    return _ref4.apply(this, arguments);
  };
}()));
var deleteAllBookings = /*#__PURE__*/(/* unused pure expression or super */ null && (function () {
  var _ref5 = bookings_asyncToGenerator( /*#__PURE__*/bookings_regeneratorRuntime().mark(function _callee5(config) {
    return bookings_regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            return _context5.abrupt("return", request(apiEndpoint.bookings.booking, config));
          case 1:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return function deleteAllBookings(_x7) {
    return _ref5.apply(this, arguments);
  };
}()));
var bookings_updateBooking = /*#__PURE__*/function () {
  var _ref6 = bookings_asyncToGenerator( /*#__PURE__*/bookings_regeneratorRuntime().mark(function _callee6(config, id) {
    return bookings_regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            return _context6.abrupt("return", requestConfig_request("".concat(apiEndPoints_apiEndpoint.bookings.booking, "/").concat(id), config));
          case 1:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return function updateBooking(_x8, _x9) {
    return _ref6.apply(this, arguments);
  };
}();
var updatePaymentStatus = /*#__PURE__*/function () {
  var _ref7 = bookings_asyncToGenerator( /*#__PURE__*/bookings_regeneratorRuntime().mark(function _callee7(config, id) {
    var url;
    return bookings_regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            url = apiEndPoints_apiEndpoint.bookings.updatePaymentStatus.replace(":bookingId", id);
            return _context7.abrupt("return", requestConfig_request(url, config));
          case 2:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return function updatePaymentStatus(_x10, _x11) {
    return _ref7.apply(this, arguments);
  };
}();
var getBookingByMeetingId = /*#__PURE__*/(/* unused pure expression or super */ null && (function () {
  var _ref8 = bookings_asyncToGenerator( /*#__PURE__*/bookings_regeneratorRuntime().mark(function _callee8(config, id) {
    return bookings_regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            return _context8.abrupt("return", request("".concat(apiEndpoint.bookings.booking, "/?meeting_id=").concat(id), config));
          case 1:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));
  return function getBookingByMeetingId(_x12, _x13) {
    return _ref8.apply(this, arguments);
  };
}()));
var BookingSearch = /*#__PURE__*/(/* unused pure expression or super */ null && (function () {
  var _ref9 = bookings_asyncToGenerator( /*#__PURE__*/bookings_regeneratorRuntime().mark(function _callee9(config) {
    return bookings_regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            return _context9.abrupt("return", request(apiEndpoint.bookings.search, config));
          case 1:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));
  return function BookingSearch(_x14) {
    return _ref9.apply(this, arguments);
  };
}()));

;// CONCATENATED MODULE: ./assets/src/admin/libs/bookingLib.js
function bookingLib_typeof(obj) { "@babel/helpers - typeof"; return bookingLib_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, bookingLib_typeof(obj); }
function bookingLib_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ bookingLib_regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == bookingLib_typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function bookingLib_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function bookingLib_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? bookingLib_ownKeys(Object(source), !0).forEach(function (key) { bookingLib_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : bookingLib_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function bookingLib_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function bookingLib_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function bookingLib_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { bookingLib_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { bookingLib_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createBookingApi = /*#__PURE__*/function () {
  var _ref2 = bookingLib_asyncToGenerator( /*#__PURE__*/bookingLib_regeneratorRuntime().mark(function _callee(_ref) {
    var values, stopToast, res, _values$payment_metho;
    return bookingLib_regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            values = _ref.values, stopToast = _ref.stopToast;
            _context.prev = 1;
            _context.next = 4;
            return createBooking({
              method: "POST",
              data: bookingLib_objectSpread(bookingLib_objectSpread({}, values), {}, {
                payment_method: (_values$payment_metho = values === null || values === void 0 ? void 0 : values.payment_method) !== null && _values$payment_metho !== void 0 ? _values$payment_metho : "cash"
              }),
              params: {
                stopToast: stopToast
              }
            });
          case 4:
            res = _context.sent;
            _context.next = 10;
            break;
          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](1);
            res = _context.t0;
          case 10:
            return _context.abrupt("return", res);
          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 7]]);
  }));
  return function createBookingApi(_x) {
    return _ref2.apply(this, arguments);
  };
}();
var updateBookingApi = /*#__PURE__*/(/* unused pure expression or super */ null && (function () {
  var _ref4 = bookingLib_asyncToGenerator( /*#__PURE__*/bookingLib_regeneratorRuntime().mark(function _callee2(_ref3) {
    var id, values, res, _values$payment_metho2;
    return bookingLib_regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = _ref3.id, values = _ref3.values;
            _context2.prev = 1;
            _context2.next = 4;
            return updateBooking({
              method: "PUT",
              data: bookingLib_objectSpread(bookingLib_objectSpread({}, values), {}, {
                payment_method: (_values$payment_metho2 = values === null || values === void 0 ? void 0 : values.payment_method) !== null && _values$payment_metho2 !== void 0 ? _values$payment_metho2 : "cash"
              })
            }, id);
          case 4:
            res = _context2.sent;
            _context2.next = 10;
            break;
          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](1);
            res = _context2.t0;
          case 10:
            return _context2.abrupt("return", res);
          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 7]]);
  }));
  return function updateBookingApi(_x2) {
    return _ref4.apply(this, arguments);
  };
}()));
var updateBookingPayment = /*#__PURE__*/function () {
  var _ref6 = bookingLib_asyncToGenerator( /*#__PURE__*/bookingLib_regeneratorRuntime().mark(function _callee3(_ref5) {
    var id, values, _ref5$stopToast, stopToast, res;
    return bookingLib_regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = _ref5.id, values = _ref5.values, _ref5$stopToast = _ref5.stopToast, stopToast = _ref5$stopToast === void 0 ? false : _ref5$stopToast;
            _context3.prev = 1;
            _context3.next = 4;
            return updatePaymentStatus({
              method: "PUT",
              data: bookingLib_objectSpread({}, values),
              params: {
                stopToast: stopToast
              }
            }, id);
          case 4:
            res = _context3.sent;
            _context3.next = 10;
            break;
          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](1);
            res = _context3.t0;
          case 10:
            return _context3.abrupt("return", res);
          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 7]]);
  }));
  return function updateBookingPayment(_x3) {
    return _ref6.apply(this, arguments);
  };
}();
var getSingleBookingApi = /*#__PURE__*/(/* unused pure expression or super */ null && (function () {
  var _ref7 = bookingLib_asyncToGenerator( /*#__PURE__*/bookingLib_regeneratorRuntime().mark(function _callee4(id) {
    var res;
    return bookingLib_regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return getSingleBooking({
              method: "GET"
            }, id);
          case 3:
            res = _context4.sent;
            _context4.next = 9;
            break;
          case 6:
            _context4.prev = 6;
            _context4.t0 = _context4["catch"](0);
            res = _context4.t0;
          case 9:
            return _context4.abrupt("return", res);
          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 6]]);
  }));
  return function getSingleBookingApi(_x4) {
    return _ref7.apply(this, arguments);
  };
}()));
// EXTERNAL MODULE: ./node_modules/dayjs/dayjs.min.js
var dayjs_min = __webpack_require__(484);
var dayjs_min_default = /*#__PURE__*/__webpack_require__.n(dayjs_min);
;// CONCATENATED MODULE: ./assets/src/admin/actionCreators/actions.js
var actionCreators_actions_actions = {
  SET_LOADING: "SET_LOADING",
  SET_STATE: "SET_STATE",
  SET_MEETINGS: "SET_MEETINGS",
  SET_MEETINGS_PAGINATION_DATA: "SET_MEETINGS_PAGINATION_DATA",
  SET_MEETINGS_AFTER_DELETE: "SET_MEETINGS_AFTER_DELETE",
  SET_MEETINGS_AFTER_DUPLICATE: "SET_MEETINGS_AFTER_DUPLICATE",
  SET_STAFFS: "SET_STAFFS",
  SET_STAFF: "SET_STAFF",
  SET_PAGINGATE_DATA: "SET_PAGINGATE_DATA",
  SET_BOOKINGS: "SETBOOKINGS",
  SET_CUSTOMERS: "SET_CUSTOMERS",
  SET_META_DATA_WITH_MEETING: "SET_META_DATA_WITH_MEETING",
  SET_STAFF_SCHEDULE: "SET_STAFF_SCHEDULE",
  CLEAR_MEETING_DATA_FOR_UPDATE: "CLEAR_MEETING_DATA_FOR_UPDATE",
  SET_EMAIL_CUSTOMIZE_DATA: "SET_EMAIL_CUSTOMIZE_DATA",
  SET_SETTINGS: "SET_SETTINGS",
  SET_SETTINGS_LOADING: "SET_SETTINGS_LOADING",
  SET_SETTINGS_SCHEDULE: "SET_SETTINGS_SCHEDULE",
  SET_SELECTED_DATE: "SET_SELECTED_DATE",
  SET_MEETING_TO_BOOK: "SET_MEETING_TO_BOOK",
  SET_SELECTED_STAFF_ID_TO_BOOK: "SET_SELECTED_STAFF_ID_TO_BOOK",
  SET_MEETING_SLOTS: "SET_MEETING_SLOTS",
  SET_BOOKING_STATE: "SET_BOOKING_STATE",
  SET_SETTINGS_CURRENCY: "SET_SETTINGS_CURRENCY",
  CLEAR_BOOKING_RELATED_DATA: "CLEAR_BOOKING_RELATED_DATA",
  SET_SETTINGS_COLOR: "SET_SETTINGS_COLOR",
  SET_SEATS: "SET_SEATS",
  SET_SEAT_REDUCER_STATE: "SET_SEAT_REDUCER_STATE"
};
;// CONCATENATED MODULE: ./assets/src/admin/actionCreators/common.js

var common_setState = function setState(_ref) {
  var dispatch = _ref.dispatch,
    name = _ref.name,
    value = _ref.value;
  dispatch({
    type: actions.SET_STATE,
    field: name,
    payload: value
  });
};
;// CONCATENATED MODULE: ./assets/src/admin/utils/dummyData.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


/**
 *
 * @param {Object} param0
 * @returns time-options for availability of staff
 */
var getTimeOptions = function getTimeOptions(_ref) {
  var _ref$duration = _ref.duration,
    duration = _ref$duration === void 0 ? 10 : _ref$duration,
    startTime = _ref.startTime,
    endTime = _ref.endTime;
  var timeOptions = [];
  var _startTime = new Date(dummyData_createDateObject(startTime)).getTime();
  var _endTime = new Date(dummyData_createDateObject(endTime)).getTime();
  var addMins = duration * 1000 * 60;
  timeOptions.push({
    value: _startTime,
    label: dummyData_getTimeStringFromDateObject(new Date(_startTime).toString())
  });
  while (_startTime < _endTime) {
    _startTime += addMins;
    timeOptions.push({
      value: _startTime,
      label: dummyData_getTimeStringFromDateObject(new Date(_startTime).toString())
    });
  }
  return timeOptions;
};
var timeOptions = [{
  value: dummyData_createDateObject("10:00 AM"),
  label: "10:00 AM"
}, {
  value: dummyData_createDateObject("10:30 AM"),
  label: "10:30 AM"
}, {
  value: dummyData_createDateObject("11:00 AM"),
  label: "11:00 AM"
}, {
  value: dummyData_createDateObject("12:00 PM"),
  label: "12:00 PM"
}, {
  value: dummyData_createDateObject("01:00 PM"),
  label: "01:00 PM"
}, {
  value: dummyData_createDateObject("02:00 PM"),
  label: "02:00 PM"
}, {
  value: dummyData_createDateObject("03:45 PM"),
  label: "03:45 PM"
}, {
  value: dummyData_createDateObject("06:00 PM"),
  label: "06:00 PM"
}];
var getOneScheduleObj = function getOneScheduleObj(timeSloteIndex) {
  var startTime = timeOptions[timeSloteIndex + 1];
  var endTime = timeOptions[timeSloteIndex + 2];
  return {
    start: startTime,
    end: endTime
  };
};
var dummyData_getOneScheduleObj = function _getOneScheduleObj(_ref2) {
  var _start, _end;
  var schedules = _ref2.schedules,
    duration = _ref2.duration,
    bufferTime = _ref2.bufferTime,
    dayEnd = _ref2.dayEnd;
  var startTime = (_start = _toConsumableArray(schedules)[_toConsumableArray(schedules).length - 1].start) === null || _start === void 0 ? void 0 : _start.label;
  var endTime = (_end = _toConsumableArray(schedules)[_toConsumableArray(schedules).length - 1].end) === null || _end === void 0 ? void 0 : _end.label;
  //added buffer time here... endTime(09:40 ) + bufferTime(120) = new start time
  if (bufferTime) {
    var _startTime = new Date(dummyData_createDateObject(endTime, 24)).getTime();
    var addMins = duration * 1000 * 60; //bufferTime * 1000 * 60;
    endTime = dummyData_getTimeStringFromDateObject(new Date(_startTime + addMins));
  }
  return {
    startTime: endTime,
    duration: duration,
    dayEnd: dayEnd
  };
};
var getSlotTime = function getSlotTime(_ref3) {
  var startTime = _ref3.startTime,
    _ref3$duration = _ref3.duration,
    duration = _ref3$duration === void 0 ? 10 : _ref3$duration,
    _ref3$dayEnd = _ref3.dayEnd,
    dayEnd = _ref3$dayEnd === void 0 ? "05:00 PM" : _ref3$dayEnd;
  var _startTime = new Date(dummyData_createDateObject(startTime, 24)).getTime();
  var _dayEndInMs = new Date(dummyData_createDateObject(dayEnd)).getTime();
  var addMins = duration * 1000 * 60;
  var _endTime = _startTime + addMins;
  // if (_startTime >= _dayEndInMs || _endTime > _dayEndInMs) {
  //     return false;
  // }
  return {
    start: {
      value: _startTime,
      label: dummyData_getTimeStringFromDateObject(new Date(_startTime).toString())
    },
    end: {
      value: _endTime,
      label: dummyData_getTimeStringFromDateObject(new Date(_endTime).toString())
    }
  };
};
var dummyData_getSlotStartAndEndTime = function getSlotStartAndEndTime(_ref4) {
  var startTime = _ref4.startTime,
    _ref4$duration = _ref4.duration,
    duration = _ref4$duration === void 0 ? 10 : _ref4$duration,
    _ref4$dayEnd = _ref4.dayEnd,
    dayEnd = _ref4$dayEnd === void 0 ? "05:00 PM" : _ref4$dayEnd;
  var _startTime = new Date(dummyData_createDateObject(startTime, 24)).getTime();
  var _dayEndInMs = new Date(dummyData_createDateObject(dayEnd)).getTime();
  var addMins = duration * 1000 * 60;
  var _endTime = _startTime + addMins;
  // if (_startTime >= _dayEndInMs || _endTime > _dayEndInMs) {
  //     return false;
  // }
  return {
    start: _startTime,
    end: _endTime
  };
};
var dummySchedules = function dummySchedules(_ref5) {
  var startTime = _ref5.startTime,
    duration = _ref5.duration;
  return [{
    key: "Fri",
    name: "Friday",
    status: false,
    schedules: [getSlotTime({
      startTime: startTime,
      duration: duration
    })],
    actions: ["AddIcon", "DeleteIcon"]
  }, {
    key: "Sat",
    name: "Saturday",
    status: false,
    schedules: [getSlotTime({
      startTime: startTime,
      duration: duration
    })],
    actions: ["AddIcon", "DeleteIcon"]
  }, {
    key: "Sun",
    name: "Sunday",
    status: true,
    schedules: [getSlotTime({
      startTime: startTime,
      duration: duration
    })],
    actions: ["AddIcon", "DeleteIcon"]
  }, {
    key: "Mon",
    name: "Monday",
    status: true,
    schedules: [getSlotTime({
      startTime: startTime,
      duration: duration
    })],
    actions: ["AddIcon", "DeleteIcon"]
  }, {
    key: "Tue",
    name: "Tuesday",
    status: true,
    schedules: [getSlotTime({
      startTime: startTime,
      duration: duration
    })],
    actions: ["AddIcon", "DeleteIcon"]
  }, {
    key: "Wed",
    name: "Wednesday",
    status: true,
    schedules: [getSlotTime({
      startTime: startTime,
      duration: duration
    })],
    actions: ["AddIcon", "DeleteIcon"]
  }, {
    key: "Thu",
    name: "Thursday",
    status: true,
    schedules: [getSlotTime({
      startTime: startTime,
      duration: duration
    })],
    actions: ["AddIcon", "DeleteIcon"]
  }];
};
function dummyData_createDateObject(time) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 12;
  var startTime = new Date();
  var parts = time === null || time === void 0 ? void 0 : time.match(/(\d+):(\d+) (AM|PM)/);
  if (parts) {
    var hours = parseInt(parts[1]),
      minutes = parseInt(parts[2]),
      tt = parts[3];
    if (tt == "PM" && hours < 12) hours += 12;
    startTime.setHours(hours, minutes, 0, 0);
  } else {
    var _parts = time === null || time === void 0 ? void 0 : time.split(":");
    var _hours = parseInt(_parts[0]),
      _minutes = parseInt(_parts[1]);
    startTime.setHours(_hours, _minutes, 0, 0);
  }
  return startTime.toString();
}

/**
 *
 * @param {*} dateObj new Date() object of javascript.
 * @returns time in string format like: 09:20
 */
function dummyData_getTimeStringFromDateObject(dateObj) {
  //TODO should be added in the localStorage and get from there...
  var timeFormat = 24;
  var time = dayjs_min_default()(dateObj).format(timeFormat == 24 ? "HH:mm" : "hh:mm A");
  return time;
}
;// CONCATENATED MODULE: ./assets/src/helper/availabilityModel.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || availabilityModel_unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function availabilityModel_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return availabilityModel_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return availabilityModel_arrayLikeToArray(o, minLen); }
function availabilityModel_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function availabilityModel_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function availabilityModel_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? availabilityModel_ownKeys(Object(source), !0).forEach(function (key) { availabilityModel_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : availabilityModel_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function availabilityModel_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/**
 * Handler for converting schedule object to api format
 * @param {Object} schedule single schedule object of a day
 * @returns schedule object with start and end time in milliseconds
 */
var convertScheduleForApi = function convertScheduleForApi(schedule) {
  var _schedule = availabilityModel_objectSpread({}, schedule);
  if (_schedule.schedules) {
    _schedule = _schedule.schedules.map(function (item) {
      return {
        start: getTimeStringFromMilliseconds(item.start.value),
        end: getTimeStringFromMilliseconds(item.end.value)
      };
    });
  }
  return _schedule;
};
/**
 *  Handler for converting schedules array to api format
 * @param {Array} schedules Array of schedule objects
 * @returns Converted schedules for api format
 */
var convertSchedulesForApi = function convertSchedulesForApi(schedules) {
  var _schedules = {};
  schedules.map(function (item) {
    if (item.status === false) {
      _schedules[item.key] = [];
    } else {
      _schedules[item.key] = convertScheduleForApi(item);
    }
  });
  return _schedules;
};

//currently not in use
/**
 *
 * @param {Objec} schedule  single schedule object of a day
 * @returns converted schedule object as per ui format
 */
var convertScheduleForUi = function convertScheduleForUi(schedule) {
  var _schedule = availabilityModel_objectSpread({}, schedule);
  if (_schedule.schedules) {
    _schedule = _schedule.schedules.map(function (item) {
      return {
        start: {
          value: new Date(createDateObject(item.start, 24)).getTime(),
          label: item.start
        },
        end: {
          value: new Date(createDateObject(item.end, 24)).getTime(),
          label: item.end
        }
      };
    });
  }
  return _schedule;
};

/**
 *
 * @param {Array} schedules Array of schedule objects
 * @returns converted schedules as per ui format
 */
var availabilityModel_convertSchedulesForUi = function convertSchedulesForUi(schedules) {
  var _schedules = [];
  for (var _i = 0, _Object$entries = Object.entries(schedules); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
      key = _Object$entries$_i[0],
      value = _Object$entries$_i[1];
    var _schedule = {
      key: key,
      name: getDayFullname(key),
      status: value.length > 0 ? true : false,
      schedules: value !== null && value !== void 0 && value.length ? value.map(function (item) {
        return {
          start: {
            value: new Date(dummyData_createDateObject(item.start, 24)).getTime(),
            label: getTimeStringFromTimeStringBasedOnFormat(item.start)
          },
          end: {
            value: new Date(dummyData_createDateObject(item.end, 24)).getTime(),
            label: getTimeStringFromTimeStringBasedOnFormat(item.end)
          }
        };
      }) : [getSlotTime({
        startTime: "09:00 AM",
        duration: 10
      })]
    };
    _schedules.push(_schedule);
  }
  return _schedules;
};
var getTimeStringFromTimeStringBasedOnFormat = function getTimeStringFromTimeStringBasedOnFormat() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "5:00 PM";
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 24;
  //convert time string to 12 hour format or 24 hour format based on format
  var _time$split = time.split(":"),
    _time$split2 = _slicedToArray(_time$split, 2),
    hours = _time$split2[0],
    minutes = _time$split2[1];
  var _minutes$split = minutes.split(" "),
    _minutes$split2 = _slicedToArray(_minutes$split, 2),
    min = _minutes$split2[0],
    ampm2 = _minutes$split2[1];
  var _hours = ampm2 === "pm" ? parseInt(hours) + 12 : hours;
  var _minutes = min;
  if (format === 24) {
    return _hours + ":" + _minutes;
  } else {
    return _hours + ":" + _minutes + " " + ampm;
  }
};
var getTimeStringFromMilliseconds = function getTimeStringFromMilliseconds(time) {
  var date = new Date(time);
  var _time = getTimeStringFromDateObject(date);
  return _time;
};
var getMilliseconsFromTimeString = function getMilliseconsFromTimeString() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "9:00 am";
  var _time$split3 = time.split(":"),
    _time$split4 = _slicedToArray(_time$split3, 3),
    hours = _time$split4[0],
    minutes = _time$split4[1],
    ampm = _time$split4[2];
  var _minutes$split3 = minutes.split(" "),
    _minutes$split4 = _slicedToArray(_minutes$split3, 2),
    min = _minutes$split4[0],
    ampm2 = _minutes$split4[1];
  var _hours = ampm == "pm" ? parseInt(hours) + 12 : parseInt(hours);
  var _minutes = parseInt(min);
  var _time = new Date();
  _time.setHours(_hours);
  _time.setMinutes(_minutes);
  return _time.getTime();
};
var getDayFullname = function getDayFullname(day) {
  var days = {
    Mon: "Monday",
    Tue: "Tuesday",
    Wed: "Wednesday",
    Thu: "Thursday",
    Fri: "Friday",
    Sat: "Saturday",
    Sun: "Sunday"
  };
  return days[day];
};
;// CONCATENATED MODULE: ./assets/src/helper/helpers.js
function helpers_toConsumableArray(arr) { return helpers_arrayWithoutHoles(arr) || helpers_iterableToArray(arr) || helpers_unsupportedIterableToArray(arr) || helpers_nonIterableSpread(); }
function helpers_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function helpers_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return helpers_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return helpers_arrayLikeToArray(o, minLen); }
function helpers_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function helpers_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return helpers_arrayLikeToArray(arr); }
function helpers_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function helpers_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function helpers_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? helpers_ownKeys(Object(source), !0).forEach(function (key) { helpers_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : helpers_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function helpers_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var ttFetch = function ttFetch(slug, callback, options) {
  return fetch(slug, options).then(function (res) {
    return res.json();
  }).then(function (data) {
    if (callback) {
      callback(data);
    }
  });
};
var getNextTimeSlot = function getNextTimeSlot(timeSlotes) {
  var lastSlot = timeSlotes[timeSlotes.length - 1];
  var newSlot = {
    start: incrementTime({
      prevTime: lastSlot.end,
      add: 1,
      spec: "hr"
    }),
    end: incrementTime({
      prevTime: lastSlot.end,
      add: 2,
      spec: "hr"
    })
  };
  return newSlot;
};
var _getNextTimeSlot = function _getNextTimeSlot(_ref) {
  var schedules = _ref.schedules,
    duration = _ref.duration,
    bufferTime = _ref.bufferTime,
    dayEnd = _ref.dayEnd;
  var _getOneScheduleObj2 = _getOneScheduleObj({
      schedules: schedules,
      duration: duration,
      bufferTime: bufferTime,
      dayEnd: dayEnd
    }),
    startTime = _getOneScheduleObj2.startTime,
    _duration = _getOneScheduleObj2.duration,
    _dayEnd = _getOneScheduleObj2.dayEnd;
  var _getSlotStartAndEndTi = getSlotStartAndEndTime({
      startTime: startTime,
      duration: _duration,
      dayEnd: _dayEnd
    }),
    start = _getSlotStartAndEndTi.start,
    end = _getSlotStartAndEndTi.end;
  var startLabel = getTimeStringFromDateObject(new Date(start).toString());
  var endLabel = getTimeStringFromDateObject(new Date(end).toString());
  return {
    start: {
      value: start,
      label: getTimeStringFromDateObject(new Date(start).toString())
    },
    end: {
      value: end,
      label: getTimeStringFromDateObject(new Date(end).toString())
    }
  };
};
var incrementTime = function incrementTime(_ref2) {
  var prevTime = _ref2.prevTime,
    _ref2$add = _ref2.add,
    add = _ref2$add === void 0 ? 1 : _ref2$add,
    _ref2$spec = _ref2.spec,
    spec = _ref2$spec === void 0 ? "hr" : _ref2$spec;
  var hour = prevTime.split(":")[0];
  var minutes = prevTime.split(":")[1];
  if (spec == "hr") {
    if (hour == "00") {
      hour = 1;
    } else if (+hour + 1 > 23) {
      hour = "00";
    } else {
      hour = +hour + add;
    }
    // hour = +hour + 1 > 23 ? "00" : hour == "00" ? 1 : +hour + add;
  }

  if (spec == "min") {
    minutes = minutes >= 59 ? "00" : +minutes + add;
  }
  return "".concat(hour, ":").concat(minutes);
};
var _compareTime = function _compareTime(_ref3) {
  var _schedule$schedules;
  var key = _ref3.key,
    value = _ref3.value,
    timeSlotIndex = _ref3.timeSlotIndex,
    scheduleIndex = _ref3.scheduleIndex,
    schedule = _ref3.schedule;
  var status = {
    hasError: false,
    "with": []
  };
  var _value = value.value;
  var timeInMs = new Date(_value).getTime();
  var startArr = [];
  schedule === null || schedule === void 0 ? void 0 : (_schedule$schedules = schedule.schedules) === null || _schedule$schedules === void 0 ? void 0 : _schedule$schedules.map(function (item) {
    startArr.push({
      start: new Date(item.start.value).getTime(),
      end: new Date(item.end.value).getTime(),
      time: timeInMs
    });
  });
  for (var i = 0; i < startArr.length; i++) {
    for (var j = 0; j < startArr.length; j++) {
      if (startArr[j].start > startArr[i].start && startArr[j].end < startArr[i].end || startArr[j].end > startArr[i].start && startArr[j].end < startArr[i].end || startArr[j].start >= startArr[j].end) {
        status.hasError = true;
        status.scheduleIndex = scheduleIndex;
        status["with"].push(i);
        status["with"].push(j);
      }
    }
  }
  return status;
};
var compareTime = function compareTime(_ref4) {
  var _schedule$schedules2, _status$scheduleIndex;
  var key = _ref4.key,
    value = _ref4.value,
    timeSlotIndex = _ref4.timeSlotIndex,
    scheduleIndex = _ref4.scheduleIndex,
    schedule = _ref4.schedule,
    timeCompareError = _ref4.timeCompareError;
  var status = helpers_objectSpread({}, timeCompareError);
  var _value = value.value;
  var timeInMs = new Date(_value).getTime();
  var startArr = [];
  schedule === null || schedule === void 0 ? void 0 : (_schedule$schedules2 = schedule.schedules) === null || _schedule$schedules2 === void 0 ? void 0 : _schedule$schedules2.map(function (item) {
    startArr.push(convertMillisecondsToTodaysDateObject(item.start.value), convertMillisecondsToTodaysDateObject(item.end.value));
  });
  var _conflictWith = [];
  var scIndexStatus = [];

  // check if any possible time conflicts and set error in timeCompareError
  for (var i = 0; i < startArr.length; i++) {
    var _checkIfHave = status["with"][scheduleIndex] ? status["with"][scheduleIndex] : [];
    var conflict = Math.floor(i / 2);
    var conflictWith = Math.floor(i / 2);
    if (startArr[i] > startArr[i + 1]) {
      scIndexStatus[i] = false;
      status.hasError = true;
      status.scheduleIndex = helpers_toConsumableArray(new Set([].concat(helpers_toConsumableArray(status.scheduleIndex), [scheduleIndex])));
      _conflictWith.push(conflict, conflictWith + 1);
      status["with"][scheduleIndex] = helpers_toConsumableArray(new Set([].concat(helpers_toConsumableArray(_checkIfHave), helpers_toConsumableArray(_conflictWith))));
    }
    if (i % 2 == 0 && startArr[i] == startArr[i + 1]) {
      _conflictWith = [];
      scIndexStatus[i] = false;
      status.hasError = true;
      status.scheduleIndex = helpers_toConsumableArray(new Set([].concat(helpers_toConsumableArray(status.scheduleIndex), [scheduleIndex])));
      _conflictWith.push(conflict);
      status["with"][scheduleIndex] = helpers_toConsumableArray(new Set([].concat(helpers_toConsumableArray(_checkIfHave), helpers_toConsumableArray(_conflictWith))));
    }
    _conflictWith = [];
    if (startArr[i] <= startArr[i + 1]) {
      scIndexStatus[i] = true;
    }
  }

  //clear error base on scheduleIndex

  if (scIndexStatus.every(function (item) {
    return item == true;
  })) {
    status.scheduleIndex = helpers_toConsumableArray(status.scheduleIndex).filter(function (item) {
      return item != scheduleIndex;
    });
    status["with"][scheduleIndex] = [];
  }

  // No error if status object's scheduleIndex array length is 0 Or status object's with object property count is 0
  if (((_status$scheduleIndex = status.scheduleIndex) === null || _status$scheduleIndex === void 0 ? void 0 : _status$scheduleIndex.length) == 0 || Object.keys(status["with"]).length == 0) {
    status.hasError = false;
  }
  return status;
};

/**
 *
 * @param {*} errorObj Error object returned from compareTime function.
 * @returns structured error data
 */
var prepareTimeSlotConflict = function prepareTimeSlotConflict(_ref5) {
  var prevErrorObj = _ref5.prevErrorObj,
    newError = _ref5.newError;
  // const validTimeError = {
  //     ..._status,
  //     errros: { [_status.scheduleIndex]: [..._status.with] },
  // };

  return "";
};

/**
 * Upload image form wordpress media
 * @param {*} event
 * @param {*} setImageUrl
 * @returns media
 */

var UploadImageFromMedia = function UploadImageFromMedia(event, getImgURL, getImgID) {
  event.preventDefault();
  var mediaUploader;
  if (mediaUploader) {
    mediaUploader.open();
    return;
  }
  mediaUploader = wp.media.frames.file_frame = wp.media({
    title: "Choose Image",
    button: {
      text: "Choose Image"
    },
    multiple: false
  });

  // When a file is selected, grab the URL and set it as the text field's value
  mediaUploader.on("select", function () {
    var attachmentURL = mediaUploader.state().get("selection").first().toJSON();
    getImgURL(attachmentURL.url);
    getImgID(attachmentURL.id);
  });

  // Open the uploader dialog
  var media = mediaUploader.open();
  return media;
};
var setScheduleDataToContex = function setScheduleDataToContex(_ref6) {
  var dispatch = _ref6.dispatch,
    meeting = _ref6.meeting,
    staffs = _ref6.staffs;
  var _staffs = staffs === null || staffs === void 0 ? void 0 : staffs.filter(function (staff) {
    return helpers_toConsumableArray(meeting === null || meeting === void 0 ? void 0 : meeting.staff).includes(staff.id);
  });
  var _staffsIds = meeting.staff;
  var _schedules = {};
  Object.keys(meeting === null || meeting === void 0 ? void 0 : meeting.schedule).map(function (item) {
    _schedules[item] = convertSchedulesForUi(meeting === null || meeting === void 0 ? void 0 : meeting.schedule[item]);
  });
  setState({
    dispatch: dispatch,
    name: "selectedStaff",
    value: _staffs
  });
  setState({
    dispatch: dispatch,
    name: "selectedStaffIds",
    value: _staffsIds
  });
  setState({
    dispatch: dispatch,
    name: "schedules",
    value: helpers_objectSpread({}, _schedules)
  });
};
var convertMillisecondsToTodaysDateObject = function convertMillisecondsToTodaysDateObject(milliseconds) {
  var date = new Date(milliseconds);
  var dateObject = {
    day: date.getDate(),
    month: date.getMonth() + 1,
    year: date.getFullYear(),
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  };

  //convert dateObject to js date object
  var dateObjectToMilliseconds = new Date(dateObject.year, dateObject.month - 1, dateObject.day, dateObject.hour, dateObject.minute, dateObject.second).getTime();
  return dateObjectToMilliseconds;
};

//convert wordpress date format to dayjs date format
var convertWordpressDateFormatToDayjs = function convertWordpressDateFormatToDayjs(_ref7) {
  var _window, _window$timetics;
  var _ref7$format = _ref7.format,
    format = _ref7$format === void 0 ? (_window = window) === null || _window === void 0 ? void 0 : (_window$timetics = _window.timetics) === null || _window$timetics === void 0 ? void 0 : _window$timetics.date_format : _ref7$format,
    date = _ref7.date;
  if (!date) return;
  var jsFormat = format.replace("d", "DD").replace("D", "D").replace("j", "D").replace("l", "DD").replace("m", "MM").replace("n", "M").replace("F", "MMMM").replace("Y", "YYYY");
  return dayjs_min_default()(date).format(jsFormat);
};
var convertWordpressTimeFormatToDayjs = function convertWordpressTimeFormatToDayjs(_ref8) {
  var _window2, _window2$timetics;
  var _ref8$format = _ref8.format,
    format = _ref8$format === void 0 ? (_window2 = window) === null || _window2 === void 0 ? void 0 : (_window2$timetics = _window2.timetics) === null || _window2$timetics === void 0 ? void 0 : _window2$timetics.time_format : _ref8$format,
    time = _ref8.time;
  if (!time) return;
  var jsFormat = format.replace("g", "h").replace("G", "H").replace("h", "hh").replace("H", "HH").replace("i", "mm").replace("s", "ss").replace("a", "a").replace("A", "A");
  var hour = parseInt(time === null || time === void 0 ? void 0 : time.split(":")[0]);
  var minute = parseInt(time.split(":")[1].slice(0, 2));
  var date = dayjs_min_default()().hour(hour).minute(minute);
  if (time.endsWith("pm") && hour < 12) {
    date = date.add(12, "hour");
  }
  return date.format(jsFormat);
};
var convertWeekDayToNumber = function convertWeekDayToNumber(day) {
  var weekDays = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
  return weekDays.indexOf(day.toLowerCase());
};
;// CONCATENATED MODULE: ./assets/src/frontend/pages/bookings/SidebarInfo.js
function SidebarInfo_slicedToArray(arr, i) { return SidebarInfo_arrayWithHoles(arr) || SidebarInfo_iterableToArrayLimit(arr, i) || SidebarInfo_unsupportedIterableToArray(arr, i) || SidebarInfo_nonIterableRest(); }
function SidebarInfo_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function SidebarInfo_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return SidebarInfo_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return SidebarInfo_arrayLikeToArray(o, minLen); }
function SidebarInfo_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function SidebarInfo_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function SidebarInfo_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var SidebarInfo_ = wp.i18n.__;
var SidebarInfo_window$antd = window.antd,
  SidebarInfo_Typography = SidebarInfo_window$antd.Typography,
  Space = SidebarInfo_window$antd.Space,
  List = SidebarInfo_window$antd.List;
var Text = SidebarInfo_Typography.Text;
function SidebarInfo() {
  var _meeting$price, _window, _window$timetics, _window2, _window2$timetics, _timetics, _meeting$price2, _timetics3, _meeting$locations, _meeting$locations2;
  var _useStateValue = provider_useStateValue(),
    _useStateValue2 = SidebarInfo_slicedToArray(_useStateValue, 2),
    meetingReducer = _useStateValue2[0].meeting,
    dispatch = _useStateValue2[1];
  var meeting = meetingReducer.meeting,
    selectedDate = meetingReducer.selectedDate,
    bookingTime = meetingReducer.bookingTime,
    slots = meetingReducer.slots,
    _meetingReducer$selec = meetingReducer.selectedSeats,
    selectedSeats = _meetingReducer$selec === void 0 ? [] : _meetingReducer$selec,
    _meetingReducer$selec2 = meetingReducer.selectedSeat,
    selectedSeat = _meetingReducer$selec2 === void 0 ? [] : _meetingReducer$selec2;

  // Total left book
  var bookedMeeting = 0;
  slots === null || slots === void 0 ? void 0 : slots.days.map(function (item) {
    item === null || item === void 0 ? void 0 : item.slots.map(function (b) {
      if (b.booked == 1) {
        bookedMeeting++;
      }
    });
  });
  var totalQuantity = meeting === null || meeting === void 0 ? void 0 : (_meeting$price = meeting.price) === null || _meeting$price === void 0 ? void 0 : _meeting$price.map(function (item, index) {
    return item["ticket_quantity"];
  });
  var leftQuantity = totalQuantity - bookedMeeting;
  return /*#__PURE__*/React.createElement(List, {
    className: "tt-meeting-location-list"
  }, selectedDate && /*#__PURE__*/React.createElement(List.Item, null, /*#__PURE__*/React.createElement(Space, {
    wrap: true
  }, /*#__PURE__*/React.createElement(CalendarIcon2, null), convertWordpressDateFormatToDayjs({
    date: selectedDate,
    format: (_window = window) === null || _window === void 0 ? void 0 : (_window$timetics = _window.timetics) === null || _window$timetics === void 0 ? void 0 : _window$timetics.date_format
  }), convertWordpressTimeFormatToDayjs({
    time: bookingTime,
    format: (_window2 = window) === null || _window2 === void 0 ? void 0 : (_window2$timetics = _window2.timetics) === null || _window2$timetics === void 0 ? void 0 : _window2$timetics.time_format
  }))), (meeting === null || meeting === void 0 ? void 0 : meeting.type) === "seat" ? /*#__PURE__*/React.createElement(React.Fragment, null, selectedSeats !== null && selectedSeats !== void 0 && selectedSeats.length ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "tt-booking-side-info tt-mt-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tt-booking-info-icon-chair"
  }, /*#__PURE__*/React.createElement(ChairIcon, null), /*#__PURE__*/React.createElement("span", null, SidebarInfo_("Selected seats: ", "timetics"))), /*#__PURE__*/React.createElement("div", {
    className: "tt-booking-info-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tt-seat-selected-number"
  }, selectedSeat === null || selectedSeat === void 0 ? void 0 : selectedSeat.map(function (item, index) {
    return /*#__PURE__*/React.createElement(Text, {
      key: index,
      className: "tt-selected-seat"
    }, item, ",");
  })))), /*#__PURE__*/React.createElement(List.Item, null, /*#__PURE__*/React.createElement(Space, {
    wrap: true
  }, /*#__PURE__*/React.createElement(TicketIcon, null), SidebarInfo_("Ticket quantity: ", "timetics"), selectedSeats === null || selectedSeats === void 0 ? void 0 : selectedSeats.length)), /*#__PURE__*/React.createElement(List.Item, null, /*#__PURE__*/React.createElement(Space, {
    wrap: true
  }, /*#__PURE__*/React.createElement(DollarIcon, null), SidebarInfo_("Total Price: ", "timetics"), (_timetics = timetics) === null || _timetics === void 0 ? void 0 : _timetics.currency, selectedSeats === null || selectedSeats === void 0 ? void 0 : selectedSeats.reduce(function (accumulator, currentValue) {
    return accumulator + +(currentValue === null || currentValue === void 0 ? void 0 : currentValue.price);
  }, 0).toFixed(2)))) : null) : null, (meeting === null || meeting === void 0 ? void 0 : meeting.type) !== "seat" ? Array.isArray(meeting === null || meeting === void 0 ? void 0 : meeting.price) ? meeting === null || meeting === void 0 ? void 0 : (_meeting$price2 = meeting.price) === null || _meeting$price2 === void 0 ? void 0 : _meeting$price2.map(function (item, index) {
    var _timetics2;
    return /*#__PURE__*/React.createElement(List.Item, {
      key: index
    }, /*#__PURE__*/React.createElement(Space, null, /*#__PURE__*/React.createElement(MoneyIcon, null), /*#__PURE__*/React.createElement(Space, {
      size: 3,
      wrap: true
    }, (_timetics2 = timetics) === null || _timetics2 === void 0 ? void 0 : _timetics2.currency, (item === null || item === void 0 ? void 0 : item.ticket_price) || 0)));
  }) : /*#__PURE__*/React.createElement(List.Item, null, /*#__PURE__*/React.createElement(Space, null, /*#__PURE__*/React.createElement(MoneyIcon, null), /*#__PURE__*/React.createElement(Space, {
    size: 3
  }, (_timetics3 = timetics) === null || _timetics3 === void 0 ? void 0 : _timetics3.currency, meeting === null || meeting === void 0 ? void 0 : meeting.price))) : null, (meeting === null || meeting === void 0 ? void 0 : meeting.type) !== "seat" && /*#__PURE__*/React.createElement(List.Item, null, /*#__PURE__*/React.createElement(Space, null, /*#__PURE__*/React.createElement(ClockIcon, null), meeting === null || meeting === void 0 ? void 0 : meeting.duration)), (meeting === null || meeting === void 0 ? void 0 : (_meeting$locations = meeting.locations) === null || _meeting$locations === void 0 ? void 0 : _meeting$locations.length) == 1 && (meeting === null || meeting === void 0 ? void 0 : (_meeting$locations2 = meeting.locations) === null || _meeting$locations2 === void 0 ? void 0 : _meeting$locations2.map(function (item, index) {
    return /*#__PURE__*/React.createElement(List.Item, {
      key: index
    }, (item === null || item === void 0 ? void 0 : item.location_type) == "google-meet" ? /*#__PURE__*/React.createElement(Space, {
      wrap: true
    }, /*#__PURE__*/React.createElement(GoogleMeet, null), SidebarInfo_("Google Meet", "timetics")) : (item === null || item === void 0 ? void 0 : item.location_type) == "phone-call" ? /*#__PURE__*/React.createElement(Space, {
      wrap: true
    }, /*#__PURE__*/React.createElement(Phone, null), SidebarInfo_("Phone Call", "timetics")) : /*#__PURE__*/React.createElement(Space, {
      wrap: true
    }, /*#__PURE__*/React.createElement(Location, null), item === null || item === void 0 ? void 0 : item.location));
  })), (meeting === null || meeting === void 0 ? void 0 : meeting.type) === "One-to-Many" && bookingTime && /*#__PURE__*/React.createElement(List.Item, null, SidebarInfo_("".concat(leftQuantity, " seats are left of ").concat(totalQuantity), "timetics")), /*#__PURE__*/React.createElement(List.Item, {
    className: "tt-mt-30"
  }, /*#__PURE__*/React.createElement(Space, {
    wrap: true
  }, SidebarInfo_("Timezone : ", "timetics"), /*#__PURE__*/React.createElement(Text, {
    strong: true
  }, " ", meeting === null || meeting === void 0 ? void 0 : meeting.timezone))));
}
;// CONCATENATED MODULE: ./assets/src/frontend/utils/helper.js


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
      unavailableDates.push(dayjs_min_default()(_date).format("YYYY-MM-DD"));
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
  var startDate = dayjs(date).toDate();
  var endDate = new Date(date);
  endDate.setDate(getDayCountOfMonth(startDate));
  return {
    startDate: dayjs(dayjs(date).toDate()).format("YYYY-MM-DD"),
    endDate: dayjs(endDate).format("YYYY-MM-DD")
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
;// CONCATENATED MODULE: ./assets/src/frontend/pages/bookings/ContactInfo.js
function ContactInfo_typeof(obj) { "@babel/helpers - typeof"; return ContactInfo_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, ContactInfo_typeof(obj); }
function ContactInfo_toConsumableArray(arr) { return ContactInfo_arrayWithoutHoles(arr) || ContactInfo_iterableToArray(arr) || ContactInfo_unsupportedIterableToArray(arr) || ContactInfo_nonIterableSpread(); }
function ContactInfo_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function ContactInfo_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function ContactInfo_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return ContactInfo_arrayLikeToArray(arr); }
function ContactInfo_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ ContactInfo_regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == ContactInfo_typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function ContactInfo_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function ContactInfo_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ContactInfo_ownKeys(Object(source), !0).forEach(function (key) { ContactInfo_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ContactInfo_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function ContactInfo_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function ContactInfo_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function ContactInfo_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { ContactInfo_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { ContactInfo_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ContactInfo_slicedToArray(arr, i) { return ContactInfo_arrayWithHoles(arr) || ContactInfo_iterableToArrayLimit(arr, i) || ContactInfo_unsupportedIterableToArray(arr, i) || ContactInfo_nonIterableRest(); }
function ContactInfo_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function ContactInfo_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return ContactInfo_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ContactInfo_arrayLikeToArray(o, minLen); }
function ContactInfo_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function ContactInfo_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function ContactInfo_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var ContactInfo_ = wp.i18n.__;
var ContactInfo_window$antd = window.antd,
  Button = ContactInfo_window$antd.Button,
  ContactInfo_Typography = ContactInfo_window$antd.Typography,
  ContactInfo_Space = ContactInfo_window$antd.Space,
  ContactInfo_List = ContactInfo_window$antd.List,
  Row = ContactInfo_window$antd.Row,
  Col = ContactInfo_window$antd.Col,
  ContactInfo_Form = ContactInfo_window$antd.Form,
  Radio = ContactInfo_window$antd.Radio,
  Select = ContactInfo_window$antd.Select;
var ContactInfo_Text = ContactInfo_Typography.Text,
  ContactInfo_Title = ContactInfo_Typography.Title;




function ContactInfo() {
  var _meeting$locations2, _meeting$locations3;
  var _useStateValue = provider_useStateValue(),
    _useStateValue2 = ContactInfo_slicedToArray(_useStateValue, 2),
    meetingReducer = _useStateValue2[0].meeting,
    dispatch = _useStateValue2[1];
  var meeting = meetingReducer.meeting,
    selectedDate = meetingReducer.selectedDate,
    bookingTime = meetingReducer.bookingTime,
    selectedDay = meetingReducer.selectedDay,
    contactInfo = meetingReducer.contactInfo,
    selectedStaff = meetingReducer.selectedStaff,
    loading = meetingReducer.loading,
    paymentOptions = meetingReducer.paymentOptions,
    _meetingReducer$selec = meetingReducer.selectedSeats,
    selectedSeats = _meetingReducer$selec === void 0 ? [] : _meetingReducer$selec;
  var stepValue = (meeting === null || meeting === void 0 ? void 0 : meeting.type) == "seat" ? 2 : 1;
  /**
   *
   * @param {Object} values contains contact info of a user who wants to book a meeting
   */
  var onFinishContactForm = /*#__PURE__*/function () {
    var _ref = ContactInfo_asyncToGenerator( /*#__PURE__*/ContactInfo_regeneratorRuntime().mark(function _callee(values) {
      var _meeting$locations;
      var location, payload, res, noPayment, isLocalPaymentActive, isFree, step, total, _meeting$price$;
      return ContactInfo_regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch({
                type: actions_actions.SET_STATE,
                payload: {
                  loading: true
                }
              });
              if ((meeting === null || meeting === void 0 ? void 0 : (_meeting$locations = meeting.locations) === null || _meeting$locations === void 0 ? void 0 : _meeting$locations.length) > 1) {
                location = Object.keys(JSON.parse(values.location_type)).length < 2 ? {
                  location: "Google meet",
                  location_type: "google-meet"
                } : JSON.parse(values.location_type);
              } else {
                location = meeting === null || meeting === void 0 ? void 0 : meeting.locations[0];
              }
              payload = ContactInfo_objectSpread(ContactInfo_objectSpread({}, values), {}, {
                staff: selectedStaff === null || selectedStaff === void 0 ? void 0 : selectedStaff.id,
                appointment: meeting === null || meeting === void 0 ? void 0 : meeting.id,
                date: selectedDate,
                start_date: selectedDate,
                start_time: bookingTime,
                end_time: bookingTime,
                attendees: values.attendees,
                seats: selectedSeats === null || selectedSeats === void 0 ? void 0 : selectedSeats.map(function (item) {
                  return item === null || item === void 0 ? void 0 : item.id;
                })
              }, location);
              _context.next = 5;
              return createBookingApi({
                values: payload,
                stopToast: true
              });
            case 5:
              res = _context.sent;
              // if noPayment is true then create booking and then redirect to success page
              noPayment = isNoPayment(paymentOptions); //if isLocalPayment is true then create booking and then redirect to success page
              isLocalPaymentActive = isLocalPayment(paymentOptions);
              isFree = isFreeMeeting({
                meeting: meeting
              });
              step = getStepNo({
                isFree: isFree,
                noPayment: noPayment,
                isLocalPaymentActive: isLocalPaymentActive,
                selectedPaymentMethod: values.payment_method,
                meetingType: meeting === null || meeting === void 0 ? void 0 : meeting.type
              }); //if meeting is free then create booking and then redirect to success page
              total = 0;
              if ((meeting === null || meeting === void 0 ? void 0 : meeting.type) == "seat") {
                selectedSeats === null || selectedSeats === void 0 ? void 0 : selectedSeats.map(function (item) {
                  total += +(item === null || item === void 0 ? void 0 : item.price);
                });
              } else {
                total = meeting === null || meeting === void 0 ? void 0 : (_meeting$price$ = meeting.price[0]) === null || _meeting$price$ === void 0 ? void 0 : _meeting$price$.ticket_price;
              }
              dispatch({
                type: actions_actions.SET_STATE,
                payload: {
                  contactInfo: payload,
                  response: res === null || res === void 0 ? void 0 : res.data,
                  step: step,
                  loading: false,
                  payment_method: values.payment_method,
                  selectedSeats: [],
                  selectedSeat: [],
                  totalOrderPrice: total
                }
              });
              if (step == 1) {
                // here step is 1 means that meeting is booked and payment is done, redirect to success page.
                dispatch({
                  type: actions_actions.SET_STATE,
                  payload: {
                    paymentStatus: {
                      status: "succeeded"
                    }
                  }
                });
              }
            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return function onFinishContactForm(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  if (loading) {
    return /*#__PURE__*/React.createElement(common_Spinner, {
      tip: ContactInfo_("Loading...", "timetics"),
      type: "info",
      size: "large",
      wrapperClassName: "tt-spinner-wrapper"
    });
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(bookings_Header, {
    stepTitle: "Step 2",
    componentTitle: ContactInfo_("Give your information", "timetics")
  }), /*#__PURE__*/React.createElement(Row, {
    gutter: [24, 24]
  }, /*#__PURE__*/React.createElement(Col, {
    xs: 24,
    sm: 24,
    md: 8,
    lg: 8
  }, /*#__PURE__*/React.createElement("div", {
    className: "tt-form-left-sidebar"
  }, /*#__PURE__*/React.createElement(ContactInfo_Title, {
    className: "tt-meeting-name tt-mb-10",
    level: 3
  }, meeting === null || meeting === void 0 ? void 0 : meeting.name), /*#__PURE__*/React.createElement("div", {
    className: "selected-author tt-mb-10"
  }, /*#__PURE__*/React.createElement(ContactInfo_Text, null, ContactInfo_("with", "timetics")), /*#__PURE__*/React.createElement(ContactInfo_Text, {
    strong: true
  }, " ", selectedStaff === null || selectedStaff === void 0 ? void 0 : selectedStaff.full_name)), /*#__PURE__*/React.createElement(SidebarInfo, null))), /*#__PURE__*/React.createElement(Col, {
    xs: 24,
    sm: 24,
    md: 16,
    lg: 16
  }, /*#__PURE__*/React.createElement(ContactInfo_Form, {
    name: "booking-contact-form",
    layout: "vertical",
    className: "tt-booking-body-wrap",
    autoComplete: "on",
    onFinish: onFinishContactForm,
    onFinishFailed: function onFinishFailed(errors) {
      console.log(errors);
    },
    initialValues: ContactInfo_objectSpread({}, contactInfo)
  }, /*#__PURE__*/React.createElement(common_TextInput, {
    label: ContactInfo_("Name", "timetics"),
    name: "first_name",
    required: true,
    rules: [{
      required: true,
      message: ContactInfo_("Enter your name!", "timetics")
    }],
    type: "text",
    size: "small",
    placeholder: ContactInfo_("Enter your name", "timetics")
  }), /*#__PURE__*/React.createElement(common_TextInput, {
    label: ContactInfo_("E-mail", "timetics"),
    name: "email",
    rules: [{
      type: "email",
      message: "The input is not valid E-mail!"
    }, {
      required: true,
      message: ContactInfo_("Enter your e-mail!", "timetics")
    }],
    type: "email",
    size: "small",
    placeholder: ContactInfo_("Enter your e-mail", "timetics")
  }), /*#__PURE__*/React.createElement(common_TextInput, {
    label: ContactInfo_("Phone", "timetics"),
    name: "phone",
    type: "number",
    size: "small",
    placeholder: ContactInfo_("Enter your phone number", "timetics")
  }), (meeting === null || meeting === void 0 ? void 0 : (_meeting$locations2 = meeting.locations) === null || _meeting$locations2 === void 0 ? void 0 : _meeting$locations2.length) > 1 && /*#__PURE__*/React.createElement(ContactInfo_Form.Item, {
    className: "timetics-input",
    label: ContactInfo_("Location", "timetics"),
    required: true,
    name: "location_type",
    rules: [{
      required: true,
      message: ContactInfo_("Location is required!", "timetics")
    }]
  }, /*#__PURE__*/React.createElement(Select, {
    placeholder: ContactInfo_("Enter your location", "timetics")
  }, meeting === null || meeting === void 0 ? void 0 : (_meeting$locations3 = meeting.locations) === null || _meeting$locations3 === void 0 ? void 0 : _meeting$locations3.map(function (item, index) {
    return /*#__PURE__*/React.createElement(Select.Option, {
      key: index,
      value: JSON.stringify(item)
    }, /*#__PURE__*/React.createElement(ContactInfo_Space, {
      align: "center",
      className: "tt-meeting-location-type"
    }, locationIcons[item.location_type], locationMeeting[item.location_type]));
  }))), (selectedSeats === null || selectedSeats === void 0 ? void 0 : selectedSeats.length) > 1 ? wp.hooks.applyFilters("inviteeFields") : null, /*#__PURE__*/React.createElement(common_TextAreaInput, {
    label: ContactInfo_("Additional notes", "timetics"),
    labelCol: 24,
    wrapperCol: 24,
    name: "description",
    placeholder: ContactInfo_("Please share anything that will help prepare for our meeting", "timetics"),
    autoSize: {
      minRows: 5,
      maxRows: 5
    }
  }), !isNoPayment(paymentOptions) && /*#__PURE__*/React.createElement(ContactInfo_Form.Item, {
    name: "payment_method",
    className: "timetics-input",
    label: ContactInfo_("Payment type", "timetics"),
    labelCol: 24,
    wrapperCol: 24,
    rules: [{
      required: true,
      message: ContactInfo_("Payment type is required!", "timetics")
    }]
  }, /*#__PURE__*/React.createElement(Radio.Group, {
    size: "large ",
    className: "tt-payment-radio-btn"
  }, ContactInfo_toConsumableArray(paymentOptions).filter(function (item) {
    return !!(item !== null && item !== void 0 && item.status);
  }).map(function (item, index) {
    return /*#__PURE__*/React.createElement(Radio.Button, {
      key: index,
      value: item.name,
      className: "tt-payment-btn"
    }, /*#__PURE__*/React.createElement(ContactInfo_Space, {
      align: "center"
    }, /*#__PURE__*/React.createElement("span", {
      className: "tt-payment-radio-btn-icon"
    }, item.name == "Stripe" && /*#__PURE__*/React.createElement(StripeIcon, {
      width: "16",
      height: "16"
    }), item.name == "Local Pay" && /*#__PURE__*/React.createElement(MoneyIcon, null)), item.name));
  }))), /*#__PURE__*/React.createElement(Row, {
    align: "end"
  }, /*#__PURE__*/React.createElement(ContactInfo_Space, {
    wrap: true
  }, /*#__PURE__*/React.createElement(Button, {
    className: "backbtn",
    size: "large",
    htmlType: "button",
    ghost: true
    // icon={}
    ,
    onClick: function onClick() {
      dispatch({
        type: actions_actions.SET_STATE,
        payload: {
          step: stepValue,
          selectedSeats: [],
          selectedSeat: []
        }
      });
    }
  }, /*#__PURE__*/React.createElement(ArrowLeftIcon, null), ContactInfo_("Go back", "timetics")), /*#__PURE__*/React.createElement(Button, {
    className: "submit-btn",
    size: "large",
    type: "primary",
    htmlType: "submit"
    // icon={}
  }, ContactInfo_("Confirm Appointment", "timetics"), /*#__PURE__*/React.createElement(ArrowRightIcon2, null))))))));
}
/* harmony default export */ const bookings_ContactInfo = (ContactInfo);
var locationIcons = {
  "google-meet": /*#__PURE__*/React.createElement(GoogleMeet, null),
  "phone-call": /*#__PURE__*/React.createElement(Phone, {
    color: "#3161F1"
  }),
  "in-person-meeting": /*#__PURE__*/React.createElement(Location, {
    color: "#3161F1"
  })
};
var locationMeeting = {
  "google-meet": ContactInfo_("Google Meet", "timetics"),
  "phone-call": ContactInfo_("Phone Call", "timetics"),
  "in-person-meeting": ContactInfo_("In Person Meeting", "timetics")
};
;// CONCATENATED MODULE: ./node_modules/@stripe/stripe-js/dist/stripe.esm.js
var V3_URL = 'https://js.stripe.com/v3';
var V3_URL_REGEX = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/;
var EXISTING_SCRIPT_MESSAGE = 'loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used';
var findScript = function findScript() {
  var scripts = document.querySelectorAll("script[src^=\"".concat(V3_URL, "\"]"));

  for (var i = 0; i < scripts.length; i++) {
    var script = scripts[i];

    if (!V3_URL_REGEX.test(script.src)) {
      continue;
    }

    return script;
  }

  return null;
};

var injectScript = function injectScript(params) {
  var queryString = params && !params.advancedFraudSignals ? '?advancedFraudSignals=false' : '';
  var script = document.createElement('script');
  script.src = "".concat(V3_URL).concat(queryString);
  var headOrBody = document.head || document.body;

  if (!headOrBody) {
    throw new Error('Expected document.body not to be null. Stripe.js requires a <body> element.');
  }

  headOrBody.appendChild(script);
  return script;
};

var registerWrapper = function registerWrapper(stripe, startTime) {
  if (!stripe || !stripe._registerWrapper) {
    return;
  }

  stripe._registerWrapper({
    name: 'stripe-js',
    version: "1.46.0",
    startTime: startTime
  });
};

var stripePromise = null;
var loadScript = function loadScript(params) {
  // Ensure that we only attempt to load Stripe.js at most once
  if (stripePromise !== null) {
    return stripePromise;
  }

  stripePromise = new Promise(function (resolve, reject) {
    if (typeof window === 'undefined') {
      // Resolve to null when imported server side. This makes the module
      // safe to import in an isomorphic code base.
      resolve(null);
      return;
    }

    if (window.Stripe && params) {
      console.warn(EXISTING_SCRIPT_MESSAGE);
    }

    if (window.Stripe) {
      resolve(window.Stripe);
      return;
    }

    try {
      var script = findScript();

      if (script && params) {
        console.warn(EXISTING_SCRIPT_MESSAGE);
      } else if (!script) {
        script = injectScript(params);
      }

      script.addEventListener('load', function () {
        if (window.Stripe) {
          resolve(window.Stripe);
        } else {
          reject(new Error('Stripe.js not available'));
        }
      });
      script.addEventListener('error', function () {
        reject(new Error('Failed to load Stripe.js'));
      });
    } catch (error) {
      reject(error);
      return;
    }
  });
  return stripePromise;
};
var initStripe = function initStripe(maybeStripe, args, startTime) {
  if (maybeStripe === null) {
    return null;
  }

  var stripe = maybeStripe.apply(undefined, args);
  registerWrapper(stripe, startTime);
  return stripe;
}; // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types

// own script injection.

var stripePromise$1 = Promise.resolve().then(function () {
  return loadScript(null);
});
var loadCalled = false;
stripePromise$1["catch"](function (err) {
  if (!loadCalled) {
    console.warn(err);
  }
});
var loadStripe = function loadStripe() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  loadCalled = true;
  var startTime = Date.now();
  return stripePromise$1.then(function (maybeStripe) {
    return initStripe(maybeStripe, args, startTime);
  });
};



// EXTERNAL MODULE: ./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js
var react_stripe_umd = __webpack_require__(664);
;// CONCATENATED MODULE: ./assets/src/frontend/stripe/CheckoutForm.js
function CheckoutForm_typeof(obj) { "@babel/helpers - typeof"; return CheckoutForm_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, CheckoutForm_typeof(obj); }
function CheckoutForm_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ CheckoutForm_regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == CheckoutForm_typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function CheckoutForm_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function CheckoutForm_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { CheckoutForm_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { CheckoutForm_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function CheckoutForm_slicedToArray(arr, i) { return CheckoutForm_arrayWithHoles(arr) || CheckoutForm_iterableToArrayLimit(arr, i) || CheckoutForm_unsupportedIterableToArray(arr, i) || CheckoutForm_nonIterableRest(); }
function CheckoutForm_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function CheckoutForm_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return CheckoutForm_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return CheckoutForm_arrayLikeToArray(o, minLen); }
function CheckoutForm_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function CheckoutForm_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function CheckoutForm_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var CheckoutForm_React = window.React;
var useState = CheckoutForm_React.useState,
  useEffect = CheckoutForm_React.useEffect;
var CheckoutForm_antd = antd,
  CheckoutForm_Button = CheckoutForm_antd.Button,
  CheckoutForm_Space = CheckoutForm_antd.Space,
  CheckoutForm_Row = CheckoutForm_antd.Row;
var CheckoutForm_ = wp.i18n.__;



var CheckoutForm = function CheckoutForm() {
  var _useStateValue = provider_useStateValue(),
    _useStateValue2 = CheckoutForm_slicedToArray(_useStateValue, 2),
    meetingReducer = _useStateValue2[0].meeting,
    dispatch = _useStateValue2[1];
  var contactInfo = meetingReducer.contactInfo;
  var _useState = useState(false),
    _useState2 = CheckoutForm_slicedToArray(_useState, 2),
    isLoading = _useState2[0],
    setIsLoading = _useState2[1];
  var _useState3 = useState(null),
    _useState4 = CheckoutForm_slicedToArray(_useState3, 2),
    message = _useState4[0],
    setMessage = _useState4[1];
  var _useState5 = useState(contactInfo === null || contactInfo === void 0 ? void 0 : contactInfo.email),
    _useState6 = CheckoutForm_slicedToArray(_useState5, 2),
    email = _useState6[0],
    setEmail = _useState6[1];
  var stripe = (0,react_stripe_umd.useStripe)();
  var elements = (0,react_stripe_umd.useElements)();
  var paymentElementOptions = {
    layout: "tabs"
  };
  var handleSubmit = /*#__PURE__*/function () {
    var _ref = CheckoutForm_asyncToGenerator( /*#__PURE__*/CheckoutForm_regeneratorRuntime().mark(function _callee(e) {
      var _yield$stripe$confirm, paymentIntent, error;
      return CheckoutForm_regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              if (!(!stripe || !elements)) {
                _context.next = 3;
                break;
              }
              return _context.abrupt("return");
            case 3:
              setIsLoading(true);
              _context.next = 6;
              return stripe.confirmPayment({
                elements: elements,
                confirmParams: {
                  // Make sure to change this to your payment completion page
                  return_url: timetics.site_url
                },
                redirect: "if_required"
              });
            case 6:
              _yield$stripe$confirm = _context.sent;
              paymentIntent = _yield$stripe$confirm.paymentIntent;
              error = _yield$stripe$confirm.error;
              if ("succeeded" == (paymentIntent === null || paymentIntent === void 0 ? void 0 : paymentIntent.status)) {
                // Redirect to payment success component
              } else if ("failed" == (paymentIntent === null || paymentIntent === void 0 ? void 0 : paymentIntent.status)) {
                // Redirect to payment failed component
              }
              dispatch({
                type: actions_actions.SET_STATE,
                payload: {
                  paymentStatus: paymentIntent
                }
              });

              // This point will only be reached if there is an immediate error when
              // confirming the payment. Otherwise, your customer will be redirected to
              // your `return_url`. For some payment methods like iDEAL, your customer will
              // be redirected to an intermediate site first to authorize the payment, then
              // redirected to the `return_url`.
              if ((error === null || error === void 0 ? void 0 : error.type) === "card_error" || (error === null || error === void 0 ? void 0 : error.type) === "validation_error") {
                setMessage(error === null || error === void 0 ? void 0 : error.message);
              }
              setIsLoading(false);
            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return function handleSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/CheckoutForm_React.createElement("form", {
    id: "payment-form",
    onSubmit: handleSubmit
  }, /*#__PURE__*/CheckoutForm_React.createElement(react_stripe_umd.LinkAuthenticationElement, {
    id: "link-authentication-element",
    onChange: function onChange(e) {
      return setEmail(e.value.email);
    },
    value: email
  }), /*#__PURE__*/CheckoutForm_React.createElement(react_stripe_umd.PaymentElement, {
    id: "payment-element",
    options: paymentElementOptions
  }), /*#__PURE__*/CheckoutForm_React.createElement(CheckoutForm_Row, {
    justify: "end"
  }, /*#__PURE__*/CheckoutForm_React.createElement(CheckoutForm_Space, {
    wrap: true
  }, /*#__PURE__*/CheckoutForm_React.createElement(CheckoutForm_Button, {
    onClick: function onClick() {
      dispatch({
        type: actions_actions.SET_STATE,
        payload: {
          step: 2
        }
      });
    },
    size: "large"
  }, CheckoutForm_("Back", "timetics")), /*#__PURE__*/CheckoutForm_React.createElement("button", {
    disabled: isLoading || !stripe || !elements,
    id: "submit",
    className: "ant-btn ant-btn-primary ant-btn-lg"
  }, /*#__PURE__*/CheckoutForm_React.createElement("span", {
    id: "button-text"
  }, isLoading ? /*#__PURE__*/CheckoutForm_React.createElement("div", {
    className: "spinner",
    id: "spinner"
  }) : CheckoutForm_("Pay now", "timetics"))))), message && /*#__PURE__*/CheckoutForm_React.createElement("div", {
    id: "payment-message"
  }, message));
};
/* harmony default export */ const stripe_CheckoutForm = (CheckoutForm);
;// CONCATENATED MODULE: ./assets/src/frontend/stripe/StripePayment.js
var StripePayment_timetics;
function StripePayment_slicedToArray(arr, i) { return StripePayment_arrayWithHoles(arr) || StripePayment_iterableToArrayLimit(arr, i) || StripePayment_unsupportedIterableToArray(arr, i) || StripePayment_nonIterableRest(); }
function StripePayment_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function StripePayment_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return StripePayment_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return StripePayment_arrayLikeToArray(o, minLen); }
function StripePayment_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function StripePayment_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function StripePayment_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var StripePayment_React = window.React;
var StripePayment_useState = StripePayment_React.useState,
  StripePayment_useEffect = StripePayment_React.useEffect;





var StripePayment_Typography = window.antd.Typography;
var StripePayment_ = wp.i18n.__;
var StripePayment_Text = StripePayment_Typography.Text;
var stripPubKey = ((StripePayment_timetics = timetics) === null || StripePayment_timetics === void 0 ? void 0 : StripePayment_timetics.stripe_pub_key) || " ";
var StripePayment_stripePromise = loadStripe(stripPubKey);
var StripePayment_antd = antd,
  Skeleton = StripePayment_antd.Skeleton;

/**
 * Stripe Payment Compoment
 *
 * @return jsx
 */
var StripePayment = function StripePayment(item) {
  var _useState = StripePayment_useState(),
    _useState2 = StripePayment_slicedToArray(_useState, 2),
    clientSecret = _useState2[0],
    setClientSecret = _useState2[1];
  var amount = item.amount,
    currency = item.currency;
  var _useState3 = StripePayment_useState(null),
    _useState4 = StripePayment_slicedToArray(_useState3, 2),
    error = _useState4[0],
    setError = _useState4[1];
  var _useState5 = StripePayment_useState(false),
    _useState6 = StripePayment_slicedToArray(_useState5, 2),
    loading = _useState6[0],
    setLoading = _useState6[1];
  StripePayment_useEffect(function () {
    //TODO need to calculate the price here...
    setLoading(true);
    var r = requestConfig_request(apiEndPoints_apiEndpoint.payment.stripe, {
      method: "post",
      data: {
        amount: amount,
        currency: currency
      }
    }).then(function (res) {
      //TODO need to handle error for stripe api key and secret key
      setClientSecret(res.data.client_secret);
      if (res.data.error) {
        setError(res.data.error);
      }
      setLoading(false);
    });

    //cancel axios request on unmount
    return function () {
      finishPendingRequests();
    };
  }, [amount]);
  var appearance = {
    theme: "stripe"
  };
  var options = {
    clientSecret: clientSecret,
    appearance: appearance
  };
  if (loading) {
    return /*#__PURE__*/StripePayment_React.createElement(Skeleton, {
      active: true
    });
  }
  return /*#__PURE__*/StripePayment_React.createElement("div", {
    className: "timetics-stripe tt-booking-body-wrap"
  }, clientSecret && /*#__PURE__*/StripePayment_React.createElement(react_stripe_umd.Elements, {
    options: options,
    stripe: StripePayment_stripePromise
  }, /*#__PURE__*/StripePayment_React.createElement(stripe_CheckoutForm, null)), error && /*#__PURE__*/StripePayment_React.createElement(StripePayment_Text, {
    style: {
      color: "#E42D23"
    }
  }, StripePayment_("Error: ".concat(error === null || error === void 0 ? void 0 : error.message, " "), "timetics")));
};
/* harmony default export */ const stripe_StripePayment = (StripePayment);
;// CONCATENATED MODULE: ./assets/src/frontend/pages/bookings/PaymentForm.js
function PaymentForm_slicedToArray(arr, i) { return PaymentForm_arrayWithHoles(arr) || PaymentForm_iterableToArrayLimit(arr, i) || PaymentForm_unsupportedIterableToArray(arr, i) || PaymentForm_nonIterableRest(); }
function PaymentForm_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function PaymentForm_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return PaymentForm_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return PaymentForm_arrayLikeToArray(o, minLen); }
function PaymentForm_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function PaymentForm_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function PaymentForm_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var PaymentForm_ = wp.i18n.__;

var PaymentForm_window$antd = window.antd,
  PaymentForm_Button = PaymentForm_window$antd.Button,
  PaymentForm_Typography = PaymentForm_window$antd.Typography,
  PaymentForm_Space = PaymentForm_window$antd.Space,
  PaymentForm_List = PaymentForm_window$antd.List,
  PaymentForm_Row = PaymentForm_window$antd.Row,
  PaymentForm_Col = PaymentForm_window$antd.Col,
  PaymentForm_Form = PaymentForm_window$antd.Form;
var PaymentForm_Text = PaymentForm_Typography.Text,
  PaymentForm_Title = PaymentForm_Typography.Title;
function PaymentForm() {
  var _timetics, _timetics2;
  var _useStateValue = provider_useStateValue(),
    _useStateValue2 = PaymentForm_slicedToArray(_useStateValue, 2),
    meetingReducer = _useStateValue2[0].meeting,
    dispatch = _useStateValue2[1];
  var meeting = meetingReducer.meeting,
    selectedDate = meetingReducer.selectedDate,
    bookingTime = meetingReducer.bookingTime,
    selectedDay = meetingReducer.selectedDay,
    contactInfo = meetingReducer.contactInfo,
    selectedStaff = meetingReducer.selectedStaff,
    payment_method = meetingReducer.payment_method,
    _meetingReducer$selec = meetingReducer.selectedSeats,
    selectedSeats = _meetingReducer$selec === void 0 ? [] : _meetingReducer$selec,
    totalOrderPrice = meetingReducer.totalOrderPrice;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(bookings_Header, {
    stepTitle: "Step 2",
    componentTitle: "Payment"
  }), /*#__PURE__*/React.createElement(PaymentForm_Row, {
    gutter: [24, 24]
  }, /*#__PURE__*/React.createElement(PaymentForm_Col, {
    xs: 24,
    sm: 24,
    md: 8,
    lg: 8
  }, /*#__PURE__*/React.createElement("div", {
    className: "tt-form-left-sidebar"
  }, /*#__PURE__*/React.createElement(PaymentForm_Title, {
    className: "tt-meeting-name tt-mb-10",
    level: 3
  }, meeting === null || meeting === void 0 ? void 0 : meeting.name), /*#__PURE__*/React.createElement("div", {
    className: "selected-author tt-mb-10"
  }, /*#__PURE__*/React.createElement(PaymentForm_Text, null, PaymentForm_("with", "timetics")), /*#__PURE__*/React.createElement(PaymentForm_Text, {
    strong: true
  }, " ", selectedStaff === null || selectedStaff === void 0 ? void 0 : selectedStaff.full_name)), /*#__PURE__*/React.createElement(SidebarInfo, null))), /*#__PURE__*/React.createElement(PaymentForm_Col, {
    xs: 24,
    sm: 24,
    md: 16,
    lg: 16
  }, (_timetics = timetics) !== null && _timetics !== void 0 && _timetics.currency && meeting !== null && meeting !== void 0 && meeting.price && payment_method == "Stripe" ?
  /*#__PURE__*/
  // TODO - need to calculate price here...
  React.createElement(stripe_StripePayment, {
    amount: totalOrderPrice,
    currency: (_timetics2 = timetics) === null || _timetics2 === void 0 ? void 0 : _timetics2.currency
  }) : null)));
}
/* harmony default export */ const bookings_PaymentForm = (PaymentForm);
;// CONCATENATED MODULE: ./assets/src/admin/services/meetings.js
function meetings_typeof(obj) { "@babel/helpers - typeof"; return meetings_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, meetings_typeof(obj); }
function meetings_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ meetings_regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == meetings_typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function meetings_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function meetings_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { meetings_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { meetings_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var getAllMeetings = /*#__PURE__*/(/* unused pure expression or super */ null && (function () {
  var _ref = meetings_asyncToGenerator( /*#__PURE__*/meetings_regeneratorRuntime().mark(function _callee(config) {
    return meetings_regeneratorRuntime().wrap(function _callee$(_context) {
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
}()));
var getSingleMeeting = /*#__PURE__*/function () {
  var _ref2 = meetings_asyncToGenerator( /*#__PURE__*/meetings_regeneratorRuntime().mark(function _callee2(config, id) {
    return meetings_regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", requestConfig_request("".concat(apiEndPoints_apiEndpoint.meetings.meeting, "/").concat(id), config));
          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return function getSingleMeeting(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();
var createMeeting = /*#__PURE__*/(/* unused pure expression or super */ null && (function () {
  var _ref3 = meetings_asyncToGenerator( /*#__PURE__*/meetings_regeneratorRuntime().mark(function _callee3(config) {
    return meetings_regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", request(apiEndpoint.meetings.createMeeting, config));
          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return function createMeeting(_x4) {
    return _ref3.apply(this, arguments);
  };
}()));
var updateMeeting = /*#__PURE__*/(/* unused pure expression or super */ null && (function () {
  var _ref4 = meetings_asyncToGenerator( /*#__PURE__*/meetings_regeneratorRuntime().mark(function _callee4(config, id) {
    return meetings_regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            return _context4.abrupt("return", request("".concat(apiEndpoint.meetings.createMeeting, "/").concat(id), config));
          case 1:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return function updateMeeting(_x5, _x6) {
    return _ref4.apply(this, arguments);
  };
}()));
var deleteMeeting = /*#__PURE__*/(/* unused pure expression or super */ null && (function () {
  var _ref5 = meetings_asyncToGenerator( /*#__PURE__*/meetings_regeneratorRuntime().mark(function _callee5(config, id) {
    return meetings_regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            return _context5.abrupt("return", request("".concat(apiEndpoint.meetings.deleteMeeting, "/").concat(id), config));
          case 1:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return function deleteMeeting(_x7, _x8) {
    return _ref5.apply(this, arguments);
  };
}()));
var buldDeleteMeeting = /*#__PURE__*/(/* unused pure expression or super */ null && (function () {
  var _ref6 = meetings_asyncToGenerator( /*#__PURE__*/meetings_regeneratorRuntime().mark(function _callee6(config) {
    return meetings_regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            return _context6.abrupt("return", request("".concat(apiEndpoint.meetings.deleteMeeting), config));
          case 1:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return function buldDeleteMeeting(_x9) {
    return _ref6.apply(this, arguments);
  };
}()));
var duplicateMeeting = /*#__PURE__*/(/* unused pure expression or super */ null && (function () {
  var _ref7 = meetings_asyncToGenerator( /*#__PURE__*/meetings_regeneratorRuntime().mark(function _callee7(config, id) {
    return meetings_regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            return _context7.abrupt("return", request("".concat(apiEndpoint.meetings.duplicateMeeting.replace(":id", id)), config));
          case 1:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return function duplicateMeeting(_x10, _x11) {
    return _ref7.apply(this, arguments);
  };
}()));
var searchMeeting = /*#__PURE__*/(/* unused pure expression or super */ null && (function () {
  var _ref8 = meetings_asyncToGenerator( /*#__PURE__*/meetings_regeneratorRuntime().mark(function _callee8(config) {
    return meetings_regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            return _context8.abrupt("return", request("".concat(apiEndpoint.meetings.search), config));
          case 1:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));
  return function searchMeeting(_x12) {
    return _ref8.apply(this, arguments);
  };
}()));
var filterMeeting = /*#__PURE__*/(/* unused pure expression or super */ null && (function () {
  var _ref9 = meetings_asyncToGenerator( /*#__PURE__*/meetings_regeneratorRuntime().mark(function _callee9(config) {
    return meetings_regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            return _context9.abrupt("return", request("".concat(apiEndpoint.meetings.filterMeeting), config));
          case 1:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));
  return function filterMeeting(_x13) {
    return _ref9.apply(this, arguments);
  };
}()));
var getSlots = /*#__PURE__*/function () {
  var _ref11 = meetings_asyncToGenerator( /*#__PURE__*/meetings_regeneratorRuntime().mark(function _callee10(config, _ref10) {
    var staffId, meetingId, startDate, endDate;
    return meetings_regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            staffId = _ref10.staffId, meetingId = _ref10.meetingId, startDate = _ref10.startDate, endDate = _ref10.endDate;
            return _context10.abrupt("return", requestConfig_request("".concat(apiEndPoints_apiEndpoint.bookings.slots, "?staff_id=").concat(staffId, "&meeting_id=").concat(meetingId, "&start_date=").concat(startDate, "&end_date=").concat(endDate), config));
          case 2:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  }));
  return function getSlots(_x14, _x15) {
    return _ref11.apply(this, arguments);
  };
}();

;// CONCATENATED MODULE: ./assets/src/frontend/pages/bookings/hooks/useBooking.js
function useBooking_slicedToArray(arr, i) { return useBooking_arrayWithHoles(arr) || useBooking_iterableToArrayLimit(arr, i) || useBooking_unsupportedIterableToArray(arr, i) || useBooking_nonIterableRest(); }
function useBooking_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function useBooking_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return useBooking_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return useBooking_arrayLikeToArray(o, minLen); }
function useBooking_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function useBooking_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function useBooking_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function useBooking() {
  var _useStateValue = provider_useStateValue(),
    _useStateValue2 = useBooking_slicedToArray(_useStateValue, 2),
    meetingReducer = _useStateValue2[0].meeting,
    dispatch = _useStateValue2[1];
  var slots = meetingReducer.slots;
  var covertedSchedules = function covertedSchedules(schedules) {
    var _schedules = {};
    Object.keys(schedules).map(function (item) {
      _schedules[item] = availabilityModel_convertSchedulesForUi(schedules[item]);
    });
    return _schedules;
  };
  var getSlotsForSelectedDay = function getSlotsForSelectedDay(_ref) {
    var _slots$days, _data$, _data$$slots;
    var selectedDate = _ref.selectedDate;
    var data = slots === null || slots === void 0 ? void 0 : (_slots$days = slots.days) === null || _slots$days === void 0 ? void 0 : _slots$days.filter(function (item) {
      return dayjs_min_default()(item === null || item === void 0 ? void 0 : item.date).format("YYYY-MM-DD") === dayjs_min_default()(selectedDate).format("YYYY-MM-DD");
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
;// CONCATENATED MODULE: ./assets/src/frontend/pages/bookings/BookingCalendar.js
function BookingCalendar_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function BookingCalendar_toConsumableArray(arr) { return BookingCalendar_arrayWithoutHoles(arr) || BookingCalendar_iterableToArray(arr) || BookingCalendar_unsupportedIterableToArray(arr) || BookingCalendar_nonIterableSpread(); }
function BookingCalendar_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function BookingCalendar_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function BookingCalendar_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return BookingCalendar_arrayLikeToArray(arr); }
function BookingCalendar_slicedToArray(arr, i) { return BookingCalendar_arrayWithHoles(arr) || BookingCalendar_iterableToArrayLimit(arr, i) || BookingCalendar_unsupportedIterableToArray(arr, i) || BookingCalendar_nonIterableRest(); }
function BookingCalendar_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function BookingCalendar_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return BookingCalendar_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return BookingCalendar_arrayLikeToArray(o, minLen); }
function BookingCalendar_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function BookingCalendar_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function BookingCalendar_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var _window$React = window.React,
  useRef = _window$React.useRef,
  BookingCalendar_useEffect = _window$React.useEffect;
function BookingCalendar() {
  var _useStateValue = provider_useStateValue(),
    _useStateValue2 = BookingCalendar_slicedToArray(_useStateValue, 2),
    meetingReducer = _useStateValue2[0].meeting,
    dispatch = _useStateValue2[1];
  var fp = useRef(null);
  var _useBooking = hooks_useBooking(),
    getSlotsForSelectedDay = _useBooking.getSlotsForSelectedDay;
  var meeting = meetingReducer.meeting,
    unavailableDates = meetingReducer.unavailableDates,
    unavailableDays = meetingReducer.unavailableDays,
    selectedDate = meetingReducer.selectedDate,
    currentMonth = meetingReducer.currentMonth,
    _meetingReducer$unava = meetingReducer.unavailableDayNumber,
    unavailableDayNumber = _meetingReducer$unava === void 0 ? [] : _meetingReducer$unava,
    selectedStaff = meetingReducer.selectedStaff,
    startDateForSlots = meetingReducer.startDateForSlots,
    slots = meetingReducer.slots,
    bookingTime = meetingReducer.bookingTime;

  // const { id: selectedStaffIdToBook } = selectedStaff;

  BookingCalendar_useEffect(function () {
    if (typeof window !== "undefined" && window.flatpickr) {
      var _meeting$availability, _meeting$availability2, _meeting$availability3, _window, _window$timetics;
      var inputEl = fp.current;
      var flatpickrInstance = window.flatpickr(inputEl, {
        //intially selected date is today, but don't fetch slots initially, that's defaultDate is commented
        // defaultDate: selectedDate,
        inline: true,
        altFormat: "F j, Y",
        dateFormat: "Y-m-d",
        minDate: meeting !== null && meeting !== void 0 && meeting.availability ? new Date(meeting === null || meeting === void 0 ? void 0 : (_meeting$availability = meeting.availability) === null || _meeting$availability === void 0 ? void 0 : _meeting$availability.start) < new Date() ? new Date() : meeting === null || meeting === void 0 ? void 0 : (_meeting$availability2 = meeting.availability) === null || _meeting$availability2 === void 0 ? void 0 : _meeting$availability2.start : new Date().fp_incr(30),
        monthSelectorType: "static",
        maxDate: meeting !== null && meeting !== void 0 && meeting.availability ? meeting === null || meeting === void 0 ? void 0 : (_meeting$availability3 = meeting.availability) === null || _meeting$availability3 === void 0 ? void 0 : _meeting$availability3.end : new Date().fp_incr(30),
        disable: [function (date) {
          return BookingCalendar_toConsumableArray(unavailableDayNumber).includes(date.getDay());
        }],
        locale: {
          firstDayOfWeek: convertWeekDayToNumber((_window = window) === null || _window === void 0 ? void 0 : (_window$timetics = _window.timetics) === null || _window$timetics === void 0 ? void 0 : _window$timetics.start_of_week) // start week on Monday
        },

        onChange: function onChange(selectedDates, dateStr, instance) {
          var day = getWeekDay(new Date(dateStr));
          dispatch({
            type: actions_actions.SET_STATE,
            payload: {
              selectedDate: dateStr,
              selectedDay: day
            }
          });
        },
        onMonthChange: function onMonthChange(selectedDates, dateStr, instance) {
          var _payload;
          var newDateStr = dayjs_min_default()().month(instance.currentMonth).startOf("month").toDate();

          //TODO newDateStr is the date for the first day of the month
          //but when we set it to the context it has the value of the last day of the month

          var unavailableDates = getDateListFromDayStrings({
            days: unavailableDays,
            currentMonth: instance === null || instance === void 0 ? void 0 : instance.currentMonth
          });
          dispatch({
            type: actions_actions.SET_STATE,
            payload: (_payload = {
              currentMonth: instance === null || instance === void 0 ? void 0 : instance.currentMonth,
              unavailableDates: unavailableDates
            }, BookingCalendar_defineProperty(_payload, "currentMonth", instance === null || instance === void 0 ? void 0 : instance.currentMonth), BookingCalendar_defineProperty(_payload, "startDateForSlots", dayjs_min_default()(newDateStr).format("YYYY-MM-DD")), BookingCalendar_defineProperty(_payload, "selectedDate", null), _payload)
          });
        }
      });
      return function () {
        flatpickrInstance.destroy();
      };
    }
  }, [unavailableDayNumber]);
  BookingCalendar_useEffect(function () {
    if (selectedDate) {
      var selectedDaysSlots = getSlotsForSelectedDay({
        selectedDate: dayjs_min_default()(selectedDate).format("YYYY-MM-DD")
      });
      var day = getWeekDay(new Date(selectedDate));
      dispatch({
        type: actions_actions.SET_MEETING_SLOTS,
        payload: {
          selectedDay: day,
          //commented out to hide the slot component on load by default
          // selectedDate: dayjs(new Date()).format("YYYY-MM-DD"),
          selectedDaysSlots: selectedDaysSlots
        }
      });
    }
  }, [selectedDate]);

  /**
   *Called On change of selected date
   */
  BookingCalendar_useEffect(function () {
    if (selectedDate && slots) {
      var currentDateSlot = slots === null || slots === void 0 ? void 0 : slots.days.filter(function (day) {
        return (day === null || day === void 0 ? void 0 : day.date) === selectedDate;
      });

      // hand picking data for current selected date
      if (currentDateSlot) {
        dispatch({
          type: actions_actions.SET_STATE,
          payload: {
            currentDateSlot: currentDateSlot[0]
          }
        });
      }
    }
  }, [selectedDate, slots]);
  return /*#__PURE__*/React.createElement("div", {
    className: "tt-flatpickr-calendar"
  }, /*#__PURE__*/React.createElement("input", {
    ref: fp,
    type: "text",
    className: "flatpickr-input"
  }));
}
/* harmony default export */ const bookings_BookingCalendar = (BookingCalendar);
;// CONCATENATED MODULE: ./assets/src/frontend/pages/bookings/BookingSlot.js
function BookingSlot_slicedToArray(arr, i) { return BookingSlot_arrayWithHoles(arr) || BookingSlot_iterableToArrayLimit(arr, i) || BookingSlot_unsupportedIterableToArray(arr, i) || BookingSlot_nonIterableRest(); }
function BookingSlot_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function BookingSlot_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return BookingSlot_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return BookingSlot_arrayLikeToArray(o, minLen); }
function BookingSlot_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function BookingSlot_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function BookingSlot_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var BookingSlot_ = wp.i18n.__;
var BookingSlot_window$antd = window.antd,
  BookingSlot_Typography = BookingSlot_window$antd.Typography,
  BookingSlot_Button = BookingSlot_window$antd.Button,
  BookingSlot_List = BookingSlot_window$antd.List,
  Tooltip = BookingSlot_window$antd.Tooltip;
var BookingSlot_Title = BookingSlot_Typography.Title,
  BookingSlot_Text = BookingSlot_Typography.Text;
var BookingSlot_window$React = window.React,
  BookingSlot_useEffect = BookingSlot_window$React.useEffect,
  BookingSlot_useState = BookingSlot_window$React.useState;
function BookingSlot() {
  var _window, _window$timetics, _currentSlot$2, _currentSlot$4, _currentSlot$4$slots;
  var _useStateValue = provider_useStateValue(),
    _useStateValue2 = BookingSlot_slicedToArray(_useStateValue, 2),
    meetingReducer = _useStateValue2[0].meeting,
    dispatch = _useStateValue2[1];
  var _useState = BookingSlot_useState([]),
    _useState2 = BookingSlot_slicedToArray(_useState, 2),
    currentSlot = _useState2[0],
    setCurrentSlot = _useState2[1];
  var meeting = meetingReducer.meeting,
    selectedDate = meetingReducer.selectedDate,
    selectedDay = meetingReducer.selectedDay,
    _meetingReducer$timeS = meetingReducer.timeSlots,
    timeSlots = _meetingReducer$timeS === void 0 ? [] : _meetingReducer$timeS,
    selectedStaff = meetingReducer.selectedStaff,
    bookingTime = meetingReducer.bookingTime,
    slots = meetingReducer.slots,
    _meetingReducer$meeti = meetingReducer.meetingQuantity,
    meetingQuantity = _meetingReducer$meeti === void 0 ? 0 : _meetingReducer$meeti,
    currentDateSlot = meetingReducer.currentDateSlot;
  BookingSlot_useEffect(function () {
    if (selectedDate) {
      setCurrentSlot(slots === null || slots === void 0 ? void 0 : slots.days.filter(function (day) {
        return (day === null || day === void 0 ? void 0 : day.date) === selectedDate;
      }));
    }
  }, [selectedDate]);
  BookingSlot_useEffect(function () {
    var quantity = 0;
    if ((meeting === null || meeting === void 0 ? void 0 : meeting.type) == "seat") {
      var _meeting$seat_plan;
      quantity = meeting === null || meeting === void 0 ? void 0 : (_meeting$seat_plan = meeting.seat_plan) === null || _meeting$seat_plan === void 0 ? void 0 : _meeting$seat_plan.reduce(function (acc, cur) {
        if (cur.shapeType === "chair" || cur.type === "chair") {
          acc += 1;
        } else if (cur.type === "table") {
          acc += cur.chairs.length;
        }
        return acc;
      }, 0);
    } else {
      var _meeting$price;
      meeting === null || meeting === void 0 ? void 0 : (_meeting$price = meeting.price) === null || _meeting$price === void 0 ? void 0 : _meeting$price.map(function (p) {
        quantity += +p.ticket_quantity;
      });
    }
    dispatch({
      type: actions_actions.SET_STATE,
      payload: {
        meetingQuantity: quantity
      }
    });
  }, [meeting]);
  BookingSlot_useEffect(function () {
    var _currentDateSlot$;
    var _currentSlot = bookingTime && (currentDateSlot === null || currentDateSlot === void 0 ? void 0 : (_currentDateSlot$ = currentDateSlot[0]) === null || _currentDateSlot$ === void 0 ? void 0 : _currentDateSlot$.slots.filter(function (slot) {
      return (slot === null || slot === void 0 ? void 0 : slot.start_time) == bookingTime;
    }));
    if (_currentSlot) {
      var _currentSlot$;
      dispatch({
        type: actions_actions.SET_STATE,
        payload: {
          currentSlot: _currentSlot === null || _currentSlot === void 0 ? void 0 : (_currentSlot$ = _currentSlot[0]) === null || _currentSlot$ === void 0 ? void 0 : _currentSlot$.seats
        }
      });
    }
  }, [bookingTime]);
  return /*#__PURE__*/React.createElement("div", {
    className: "tt-slot-list-wrap"
  }, /*#__PURE__*/React.createElement(BookingSlot_Text, {
    className: "tt-selected-date"
  }, BookingSlot_(selectedDay, "timetics"), " -", " ", convertWordpressDateFormatToDayjs({
    date: selectedDate,
    format: (_window = window) === null || _window === void 0 ? void 0 : (_window$timetics = _window.timetics) === null || _window$timetics === void 0 ? void 0 : _window$timetics.date_format
  })), /*#__PURE__*/React.createElement(BookingSlot_List, {
    dataSource: currentSlot === null || currentSlot === void 0 ? void 0 : (_currentSlot$2 = currentSlot[0]) === null || _currentSlot$2 === void 0 ? void 0 : _currentSlot$2.slots,
    className: "tt-slot-list",
    split: false,
    renderItem: function renderItem(item, index) {
      var _item$seats, _item$seats2;
      var booked = item !== null && item !== void 0 && (_item$seats = item.seats) !== null && _item$seats !== void 0 && _item$seats.length ? item === null || item === void 0 ? void 0 : (_item$seats2 = item.seats) === null || _item$seats2 === void 0 ? void 0 : _item$seats2.length : item === null || item === void 0 ? void 0 : item.booked;
      // if (item.status == "available") {
      //TODO need hasinur vai fix this baseed on seat capacity
      if (booked < meetingQuantity) {
        var _window3, _window3$timetics;
        return /*#__PURE__*/React.createElement(BookingSlot_List.Item, {
          key: index
        }, /*#__PURE__*/React.createElement(Tooltip, {
          title: meeting.type !== "One-to-One" && BookingSlot_("".concat(meetingQuantity - booked, " seats are left of ").concat(meetingQuantity), "timetics-pro")
        }, /*#__PURE__*/React.createElement(BookingSlot_Button, {
          type: "primary",
          ghost: true,
          block: true,
          key: index,
          onClick: function onClick(e) {
            var _window2, _window2$timetics, _currentSlot$3;
            var _currentSlot = currentDateSlot === null || currentDateSlot === void 0 ? void 0 : currentDateSlot.slots.filter(function (slot) {
              return (slot === null || slot === void 0 ? void 0 : slot.start_time) == (item === null || item === void 0 ? void 0 : item.start_time);
            });
            dispatch({
              type: actions_actions.SET_STATE,
              payload: {
                step: 2,
                bookingTime: convertWordpressTimeFormatToDayjs({
                  time: item === null || item === void 0 ? void 0 : item.start_time,
                  format: (_window2 = window) === null || _window2 === void 0 ? void 0 : (_window2$timetics = _window2.timetics) === null || _window2$timetics === void 0 ? void 0 : _window2$timetics.time_format
                }),
                currentSlot: _currentSlot === null || _currentSlot === void 0 ? void 0 : (_currentSlot$3 = _currentSlot[0]) === null || _currentSlot$3 === void 0 ? void 0 : _currentSlot$3.seats
              }
            });
          }
        }, convertWordpressTimeFormatToDayjs({
          time: item === null || item === void 0 ? void 0 : item.start_time,
          format: (_window3 = window) === null || _window3 === void 0 ? void 0 : (_window3$timetics = _window3.timetics) === null || _window3$timetics === void 0 ? void 0 : _window3$timetics.time_format
        }))));
      }
    }
  }), (currentSlot === null || currentSlot === void 0 ? void 0 : (_currentSlot$4 = currentSlot[0]) === null || _currentSlot$4 === void 0 ? void 0 : (_currentSlot$4$slots = _currentSlot$4.slots) === null || _currentSlot$4$slots === void 0 ? void 0 : _currentSlot$4$slots.every(function (slot) {
    return (slot === null || slot === void 0 ? void 0 : slot.status) == "unavailable";
  })) && /*#__PURE__*/React.createElement(BookingSlot_Text, {
    type: "danger",
    className: "tt-selected-date"
  }, BookingSlot_("No available slot.", "timetics")));
}
/* harmony default export */ const bookings_BookingSlot = (BookingSlot);
;// CONCATENATED MODULE: ./assets/src/frontend/pages/bookings/BookingDate.js
function BookingDate_slicedToArray(arr, i) { return BookingDate_arrayWithHoles(arr) || BookingDate_iterableToArrayLimit(arr, i) || BookingDate_unsupportedIterableToArray(arr, i) || BookingDate_nonIterableRest(); }
function BookingDate_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function BookingDate_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return BookingDate_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return BookingDate_arrayLikeToArray(o, minLen); }
function BookingDate_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function BookingDate_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function BookingDate_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var BookingDate_useEffect = window.React.useEffect;
var BookingDate_window$antd = window.antd,
  BookingDate_Row = BookingDate_window$antd.Row,
  BookingDate_Col = BookingDate_window$antd.Col;
function BookingDate() {
  var _useStateValue = provider_useStateValue(),
    _useStateValue2 = BookingDate_slicedToArray(_useStateValue, 2),
    meetingReducer = _useStateValue2[0].meeting,
    dispatch = _useStateValue2[1];
  var dataControls = meetingReducer.dataControls,
    selectedDay = meetingReducer.selectedDay,
    selectedDate = meetingReducer.selectedDate,
    selectedStaff = meetingReducer.selectedStaff,
    meeting = meetingReducer.meeting,
    slots = meetingReducer.slots;

  // get total meeting quantity
  var totalQuantity = meeting === null || meeting === void 0 ? void 0 : meeting.price.reduce(function (acc, current) {
    return +acc + +current.ticket_quantity;
  }, 0);

  // one to many booked meeting count
  var bookedMeeting = 0;
  slots === null || slots === void 0 ? void 0 : slots.days.map(function (item) {
    item === null || item === void 0 ? void 0 : item.slots.map(function (b) {
      if (b.booked == 1 && bookedMeeting < totalQuantity) {
        bookedMeeting++;
      }
    });
  });
  var leftQuantity = totalQuantity - bookedMeeting;
  BookingDate_useEffect(function () {
    dispatch({
      type: actions_actions.SET_STATE,
      payload: {
        totalQuantity: totalQuantity,
        leftQuantity: leftQuantity
      }
    });
    return function () {};
  }, [selectedDate]);
  var colSpan = selectedDate ? 16 : 24;
  return /*#__PURE__*/React.createElement("div", {
    className: "tt-booking-body-wrap"
  }, /*#__PURE__*/React.createElement(BookingDate_Row, {
    gutter: [16, 16]
  }, /*#__PURE__*/React.createElement(BookingDate_Col, {
    xs: 24,
    sm: 24,
    md: colSpan,
    lg: colSpan
  }, /*#__PURE__*/React.createElement(bookings_BookingCalendar, null)), selectedDate ? /*#__PURE__*/React.createElement(BookingDate_Col, {
    xs: 24,
    sm: 24,
    md: 8,
    lg: 8
  }, /*#__PURE__*/React.createElement(bookings_BookingSlot, null)) : null));
}
/* harmony default export */ const bookings_BookingDate = (BookingDate);
;// CONCATENATED MODULE: ./assets/src/frontend/pages/bookings/MeetingDetails.js
function MeetingDetails_slicedToArray(arr, i) { return MeetingDetails_arrayWithHoles(arr) || MeetingDetails_iterableToArrayLimit(arr, i) || MeetingDetails_unsupportedIterableToArray(arr, i) || MeetingDetails_nonIterableRest(); }
function MeetingDetails_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function MeetingDetails_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return MeetingDetails_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return MeetingDetails_arrayLikeToArray(o, minLen); }
function MeetingDetails_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function MeetingDetails_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function MeetingDetails_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var MeetingDetails_window$antd = window.antd,
  MeetingDetails_Typography = MeetingDetails_window$antd.Typography,
  MeetingDetails_List = MeetingDetails_window$antd.List,
  Avatar = MeetingDetails_window$antd.Avatar,
  MeetingDetails_Select = MeetingDetails_window$antd.Select,
  MeetingDetails_Space = MeetingDetails_window$antd.Space,
  MeetingDetails_notification = MeetingDetails_window$antd.notification;
var MeetingDetails_useEffect = window.React.useEffect;
var MeetingDetails_Title = MeetingDetails_Typography.Title,
  MeetingDetails_Text = MeetingDetails_Typography.Text;
var MeetingDetails_ = wp.i18n.__;
function MeetingDetails() {
  var _useStateValue = provider_useStateValue(),
    _useStateValue2 = MeetingDetails_slicedToArray(_useStateValue, 2),
    meetingRedcuer = _useStateValue2[0].meeting,
    dispatch = _useStateValue2[1];
  var meeting = meetingRedcuer.meeting,
    selectedStaff = meetingRedcuer.selectedStaff;
  MeetingDetails_useEffect(function () {
    dispatch({
      type: actions_actions.SET_STATE,
      payload: {
        selectedStaff: selectedStaff ? selectedStaff : meeting === null || meeting === void 0 ? void 0 : meeting.staff[0]
      }
    });

    // if (
    //     !!window.timetics.stripe_configure == false &&
    //     !!meeting?.price == true
    // ) {
    //     notification.info({
    //         message: __("Stripe is not configured", "timetics"),
    //         description: "Please configure Stripe to book a meeting",
    //         placement: "topRight",
    //         duration: 0,
    //     });
    // }

    return function () {};
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "tt-form-left-sidebar"
  }, (meeting === null || meeting === void 0 ? void 0 : meeting.type) == "Many-to-One" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(MeetingDetails_Text, {
    strong: true
  }, MeetingDetails_("select host", "timetics")), /*#__PURE__*/React.createElement(MeetingDetails_Select, {
    style: {
      width: "100%"
    },
    className: "tt-host-input timetics-input",
    key: "staff",
    options: meeting === null || meeting === void 0 ? void 0 : meeting.staff,
    value: selectedStaff === null || selectedStaff === void 0 ? void 0 : selectedStaff.id,
    fieldNames: {
      label: "full_name",
      value: "id"
    },
    placeholder: MeetingDetails_("Select your meeting host", "timetics"),
    onChange: function onChange(value) {
      var _meeting$staff;
      dispatch({
        type: actions_actions.SET_STATE,
        payload: {
          selectedStaff: meeting === null || meeting === void 0 ? void 0 : (_meeting$staff = meeting.staff) === null || _meeting$staff === void 0 ? void 0 : _meeting$staff.filter(function (item) {
            return item.id == value;
          })[0]
        }
      });
    }
  })) : /*#__PURE__*/React.createElement(MeetingDetails_Space, {
    className: "tt-host-item tt-mb-20"
  }, /*#__PURE__*/React.createElement(Avatar, {
    size: 40,
    src: selectedStaff === null || selectedStaff === void 0 ? void 0 : selectedStaff.image
  }), /*#__PURE__*/React.createElement(MeetingDetails_Text, null, selectedStaff === null || selectedStaff === void 0 ? void 0 : selectedStaff.full_name)), /*#__PURE__*/React.createElement(MeetingDetails_Title, {
    className: "fff tt-meeting-name",
    level: 3
  }, meeting === null || meeting === void 0 ? void 0 : meeting.name), /*#__PURE__*/React.createElement(MeetingDetails_Text, {
    className: "tt-meeting-description tt-mb-30",
    type: "secondary"
  }, meeting === null || meeting === void 0 ? void 0 : meeting.description), /*#__PURE__*/React.createElement(SidebarInfo, null));
}
/* harmony default export */ const bookings_MeetingDetails = (MeetingDetails);
;// CONCATENATED MODULE: ./assets/src/admin/services/generalSettings.js
function generalSettings_typeof(obj) { "@babel/helpers - typeof"; return generalSettings_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, generalSettings_typeof(obj); }
function generalSettings_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ generalSettings_regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == generalSettings_typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function generalSettings_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function generalSettings_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { generalSettings_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { generalSettings_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var generalSettings = /*#__PURE__*/function () {
  var _ref = generalSettings_asyncToGenerator( /*#__PURE__*/generalSettings_regeneratorRuntime().mark(function _callee(config) {
    return generalSettings_regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", requestConfig_request(apiEndPoints_apiEndpoint.settings.settings, config));
          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return function generalSettings(_x) {
    return _ref.apply(this, arguments);
  };
}();
var paymentOptions = /*#__PURE__*/function () {
  var _ref2 = generalSettings_asyncToGenerator( /*#__PURE__*/generalSettings_regeneratorRuntime().mark(function _callee2(config) {
    return generalSettings_regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", requestConfig_request(apiEndPoints_apiEndpoint.bookings.paymentOptions, config));
          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return function paymentOptions(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

;// CONCATENATED MODULE: ./assets/src/frontend/pages/bookings/BookingSchedule.js
function BookingSchedule_typeof(obj) { "@babel/helpers - typeof"; return BookingSchedule_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, BookingSchedule_typeof(obj); }
function BookingSchedule_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ BookingSchedule_regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == BookingSchedule_typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function BookingSchedule_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function BookingSchedule_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? BookingSchedule_ownKeys(Object(source), !0).forEach(function (key) { BookingSchedule_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : BookingSchedule_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function BookingSchedule_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function BookingSchedule_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function BookingSchedule_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { BookingSchedule_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { BookingSchedule_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function BookingSchedule_slicedToArray(arr, i) { return BookingSchedule_arrayWithHoles(arr) || BookingSchedule_iterableToArrayLimit(arr, i) || BookingSchedule_unsupportedIterableToArray(arr, i) || BookingSchedule_nonIterableRest(); }
function BookingSchedule_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function BookingSchedule_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return BookingSchedule_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return BookingSchedule_arrayLikeToArray(o, minLen); }
function BookingSchedule_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function BookingSchedule_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function BookingSchedule_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











var BookingSchedule_window$antd = window.antd,
  BookingSchedule_Row = BookingSchedule_window$antd.Row,
  BookingSchedule_Col = BookingSchedule_window$antd.Col;
var BookingSchedule_useEffect = window.React.useEffect;
var BookingSchedule_ = wp.i18n.__;
function BookingSchedule() {
  var _useStateValue = provider_useStateValue(),
    _useStateValue2 = BookingSchedule_slicedToArray(_useStateValue, 2),
    meetingReducer = _useStateValue2[0].meeting,
    dispatch = _useStateValue2[1];
  var dataControls = meetingReducer.dataControls,
    loading = meetingReducer.loading,
    meeting = meetingReducer.meeting,
    selectedStaff = meetingReducer.selectedStaff;

  /**
   * Handler to get single meeting data and set it to the context.
   * @param {*} param0 Object of data controls.
   * @returns false is dataControls is not set.
   */
  var getSingleMeetingData = /*#__PURE__*/function () {
    var _ref2 = BookingSchedule_asyncToGenerator( /*#__PURE__*/BookingSchedule_regeneratorRuntime().mark(function _callee(_ref) {
      var _meeting, _meeting3, _meeting4;
      var dataControls, _yield$getSingleMeeti, data, _yield$paymentOptions, _paymentOptions, generalSettingsRes, meeting, _schedules, unavailableDays, unavailableDayNumber;
      return BookingSchedule_regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dataControls = _ref.dataControls;
              if (dataControls !== null && dataControls !== void 0 && dataControls.id) {
                _context.next = 4;
                break;
              }
              dispatch({
                type: actions_actions.SET_LOADING,
                payload: false
              });
              return _context.abrupt("return", false);
            case 4:
              _context.next = 6;
              return getSingleMeeting({
                method: "GET"
              }, dataControls === null || dataControls === void 0 ? void 0 : dataControls.id);
            case 6:
              _yield$getSingleMeeti = _context.sent;
              data = _yield$getSingleMeeti.data;
              _context.next = 10;
              return paymentOptions({
                method: "GET"
              });
            case 10:
              _yield$paymentOptions = _context.sent;
              _paymentOptions = _yield$paymentOptions.data;
              _context.next = 14;
              return generalSettings({
                method: "GET"
              });
            case 14:
              generalSettingsRes = _context.sent;
              meeting = data === null || data === void 0 ? void 0 : data.data;
              _schedules = {};
              Object.keys((_meeting = meeting) === null || _meeting === void 0 ? void 0 : _meeting.schedule).map(function (item) {
                var _meeting2;
                _schedules[item] = availabilityModel_convertSchedulesForUi((_meeting2 = meeting) === null || _meeting2 === void 0 ? void 0 : _meeting2.schedule[item]);
              });
              meeting = BookingSchedule_objectSpread(BookingSchedule_objectSpread({}, meeting), {}, {
                schedule: _schedules
              });
              unavailableDays = getDaysThatNotAvailable(_schedules[selectedStaff ? selectedStaff.id : (_meeting3 = meeting) === null || _meeting3 === void 0 ? void 0 : _meeting3.staff[0].id]);
              unavailableDayNumber = getDayNumber({
                days: unavailableDays
              });
              dispatch({
                type: actions_actions.SET_SINGLE_MEETING_DATA,
                payload: {
                  meeting: meeting,
                  selectedStaff: selectedStaff ? selectedStaff : (_meeting4 = meeting) === null || _meeting4 === void 0 ? void 0 : _meeting4.staff[0],
                  unavailableDayNumber: unavailableDayNumber,
                  unavailableDays: unavailableDays,
                  loading: false,
                  paymentOptions: _paymentOptions === null || _paymentOptions === void 0 ? void 0 : _paymentOptions.data,
                  generalSettings: generalSettingsRes === null || generalSettingsRes === void 0 ? void 0 : generalSettingsRes.data
                }
              });
            case 22:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return function getSingleMeetingData(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  var getSlotsOfAMeeting = /*#__PURE__*/function () {
    var _ref4 = BookingSchedule_asyncToGenerator( /*#__PURE__*/BookingSchedule_regeneratorRuntime().mark(function _callee2(_ref3) {
      var dataControls, staffId, startDate, endDate, _yield$getSlots, data;
      return BookingSchedule_regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              dataControls = _ref3.dataControls, staffId = _ref3.staffId, startDate = _ref3.startDate, endDate = _ref3.endDate;
              _context2.next = 3;
              return getSlots({
                method: "GET"
              }, {
                staffId: staffId,
                meetingId: dataControls === null || dataControls === void 0 ? void 0 : dataControls.id,
                startDate: dayjs_min_default()(startDate).format("YYYY-MM-DD"),
                endDate: dayjs_min_default()(endDate).format("YYYY-MM-DD")
              });
            case 3:
              _yield$getSlots = _context2.sent;
              data = _yield$getSlots.data;
              dispatch({
                type: actions_actions.SET_MEETING_SLOTS,
                payload: {
                  slots: data === null || data === void 0 ? void 0 : data.data
                }
              });
            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return function getSlotsOfAMeeting(_x2) {
      return _ref4.apply(this, arguments);
    };
  }();
  BookingSchedule_useEffect(function () {
    dispatch({
      type: actions_actions.SET_LOADING,
      payload: true
    });
    getSingleMeetingData({
      dataControls: dataControls
    });
    return function () {
      dispatch({
        type: actions_actions.SET_LOADING,
        payload: false
      });
    };
  }, [dataControls]);
  BookingSchedule_useEffect(function () {
    var _meeting$availability, _meeting$availability2;
    if (selectedStaff !== null && selectedStaff !== void 0 && selectedStaff.id && meeting !== null && meeting !== void 0 && (_meeting$availability = meeting.availability) !== null && _meeting$availability !== void 0 && _meeting$availability.start && meeting !== null && meeting !== void 0 && (_meeting$availability2 = meeting.availability) !== null && _meeting$availability2 !== void 0 && _meeting$availability2.end) {
      var _meeting$availability3, _meeting$availability4;
      getSlotsOfAMeeting({
        dataControls: dataControls,
        staffId: selectedStaff === null || selectedStaff === void 0 ? void 0 : selectedStaff.id,
        startDate: meeting === null || meeting === void 0 ? void 0 : (_meeting$availability3 = meeting.availability) === null || _meeting$availability3 === void 0 ? void 0 : _meeting$availability3.start,
        endDate: meeting === null || meeting === void 0 ? void 0 : (_meeting$availability4 = meeting.availability) === null || _meeting$availability4 === void 0 ? void 0 : _meeting$availability4.end
      });
    }
  }, [meeting, selectedStaff]);
  if (!dataControls || loading) {
    return /*#__PURE__*/React.createElement(common_Spinner, {
      tip: BookingSchedule_("Loading...", "timetics"),
      type: "info",
      size: "large",
      wrapperClassName: "tt-spinner-wrapper"
    });
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(bookings_Header, {
    stepTitle: "Step 1",
    componentTitle: BookingSchedule_("Choose a time that works for you.", "timetics")
  }), /*#__PURE__*/React.createElement(BookingSchedule_Row, {
    gutter: [24, 24]
  }, /*#__PURE__*/React.createElement(BookingSchedule_Col, {
    xs: 24,
    sm: 24,
    md: 8
  }, /*#__PURE__*/React.createElement(bookings_MeetingDetails, null)), /*#__PURE__*/React.createElement(BookingSchedule_Col, {
    xs: 24,
    sm: 24,
    md: 16
  }, /*#__PURE__*/React.createElement(bookings_BookingDate, null))));
}
/* harmony default export */ const bookings_BookingSchedule = (BookingSchedule);
// EXTERNAL MODULE: external "React"
var external_React_ = __webpack_require__(363);
;// CONCATENATED MODULE: ./assets/src/frontend/pages/bookings/CancelBooking.js
function CancelBooking_slicedToArray(arr, i) { return CancelBooking_arrayWithHoles(arr) || CancelBooking_iterableToArrayLimit(arr, i) || CancelBooking_unsupportedIterableToArray(arr, i) || CancelBooking_nonIterableRest(); }
function CancelBooking_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function CancelBooking_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return CancelBooking_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return CancelBooking_arrayLikeToArray(o, minLen); }
function CancelBooking_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function CancelBooking_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function CancelBooking_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var CancelBooking_window$antd = window.antd,
  CancelBooking_Button = CancelBooking_window$antd.Button,
  Result = CancelBooking_window$antd.Result,
  CancelBooking_Typography = CancelBooking_window$antd.Typography,
  Divider = CancelBooking_window$antd.Divider,
  CancelBooking_Space = CancelBooking_window$antd.Space;
var CancelBooking_Text = CancelBooking_Typography.Text,
  Link = CancelBooking_Typography.Link;


var CancelBooking_ = wp.i18n.__;

function CancelBooking() {
  var _useStateValue = useStateValue(),
    _useStateValue2 = CancelBooking_slicedToArray(_useStateValue, 2),
    meetingReducer = _useStateValue2[0].meeting,
    dispatch = _useStateValue2[1];
  return /*#__PURE__*/React.createElement("div", {
    className: "tt-meeting-booking-success-wrapper"
  }, /*#__PURE__*/React.createElement(Result, {
    status: "info",
    title: CancelBooking_("Your booking schedule is canceled", "timetics"),
    subTitle: CancelBooking_("Your booking schedule is canceled, please schedule book aging.", "timetics"),
    extra: /*#__PURE__*/React.createElement("div", {
      className: "tt-booking-schedule-cancel"
    }, /*#__PURE__*/React.createElement(CancelBooking_Button, {
      className: "tt-mb-30",
      size: "large",
      onClick: function onClick() {
        dispatch({
          type: actions.CLEAR_BOOKING_RELATED_DATA,
          payload: {}
        });
      }
    }, CancelBooking_("Book again", "timetics")))
  }));
}
/* harmony default export */ const bookings_CancelBooking = ((/* unused pure expression or super */ null && (CancelBooking)));
;// CONCATENATED MODULE: ./assets/src/frontend/pages/bookings/BookingSuccess.js
function BookingSuccess_typeof(obj) { "@babel/helpers - typeof"; return BookingSuccess_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, BookingSuccess_typeof(obj); }
function BookingSuccess_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ BookingSuccess_regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == BookingSuccess_typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function BookingSuccess_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function BookingSuccess_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? BookingSuccess_ownKeys(Object(source), !0).forEach(function (key) { BookingSuccess_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : BookingSuccess_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function BookingSuccess_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function BookingSuccess_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function BookingSuccess_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { BookingSuccess_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { BookingSuccess_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function BookingSuccess_slicedToArray(arr, i) { return BookingSuccess_arrayWithHoles(arr) || BookingSuccess_iterableToArrayLimit(arr, i) || BookingSuccess_unsupportedIterableToArray(arr, i) || BookingSuccess_nonIterableRest(); }
function BookingSuccess_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function BookingSuccess_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return BookingSuccess_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return BookingSuccess_arrayLikeToArray(o, minLen); }
function BookingSuccess_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function BookingSuccess_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function BookingSuccess_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var BookingSuccess_window$antd = window.antd,
  BookingSuccess_Button = BookingSuccess_window$antd.Button,
  BookingSuccess_Result = BookingSuccess_window$antd.Result,
  BookingSuccess_Typography = BookingSuccess_window$antd.Typography,
  BookingSuccess_Divider = BookingSuccess_window$antd.Divider,
  BookingSuccess_Space = BookingSuccess_window$antd.Space;
var BookingSuccess_Text = BookingSuccess_Typography.Text,
  BookingSuccess_Link = BookingSuccess_Typography.Link;







var BookingSuccess_ = wp.i18n.__;
function BookingSuccess() {
  var _window, _window$timetics, _window2, _window2$timetics, _wp, _wp$hooks;
  var _useStateValue = provider_useStateValue(),
    _useStateValue2 = BookingSuccess_slicedToArray(_useStateValue, 2),
    meetingReducer = _useStateValue2[0].meeting,
    dispatch = _useStateValue2[1];
  var meeting = meetingReducer.meeting,
    selectedDate = meetingReducer.selectedDate,
    bookingTime = meetingReducer.bookingTime,
    selectedDay = meetingReducer.selectedDay,
    contactInfo = meetingReducer.contactInfo,
    selectedStaff = meetingReducer.selectedStaff,
    response = meetingReducer.response,
    payment_method = meetingReducer.payment_method;
  var bookingStatusUpdate = /*#__PURE__*/function () {
    var _ref = BookingSuccess_asyncToGenerator( /*#__PURE__*/BookingSuccess_regeneratorRuntime().mark(function _callee(bookingData) {
      var _bookingData$appointm, _res$data, _res$data$data;
      var bookingId, _bookingData$customer, email, first_name, full_name, res;
      return BookingSuccess_regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              bookingId = bookingData === null || bookingData === void 0 ? void 0 : bookingData.id;
              _bookingData$customer = bookingData === null || bookingData === void 0 ? void 0 : bookingData.customer, email = _bookingData$customer.email, first_name = _bookingData$customer.first_name, full_name = _bookingData$customer.full_name;
              _context.next = 4;
              return bookings_updateBooking({
                method: "PUT",
                data: BookingSuccess_objectSpread(BookingSuccess_objectSpread({}, bookingData), {}, {
                  appointment: bookingData === null || bookingData === void 0 ? void 0 : (_bookingData$appointm = bookingData.appointment) === null || _bookingData$appointm === void 0 ? void 0 : _bookingData$appointm.id,
                  email: email,
                  first_name: first_name,
                  full_name: full_name,
                  status: "cancel",
                  payment_method: payment_method !== null && payment_method !== void 0 ? payment_method : "cash"
                }),
                params: {
                  stopToast: true
                }
              }, bookingId);
            case 4:
              res = _context.sent;
              if ((res === null || res === void 0 ? void 0 : (_res$data = res.data) === null || _res$data === void 0 ? void 0 : (_res$data$data = _res$data.data) === null || _res$data$data === void 0 ? void 0 : _res$data$data.status) == "cancel") {
                dispatch({
                  type: actions_actions.SET_STATE,
                  payload: {
                    paymentStatus: {
                      status: "canceled"
                    },
                    step: 1
                  }
                });
              }
            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return function bookingStatusUpdate(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/React.createElement("div", {
    className: "tt-meeting-booking-result-wrapper"
  }, /*#__PURE__*/React.createElement(BookingSuccess_Result, {
    status: "success",
    title: BookingSuccess_("This meeting is scheduled", "timetics"),
    subTitle: BookingSuccess_("We sent an email to you and the other attendees a calendar invitation with all the details.", "timetics"),
    extra: /*#__PURE__*/React.createElement("div", {
      className: "tt-meeting-booking-info-wrapper"
    }, /*#__PURE__*/React.createElement("div", {
      className: "tt-meeting-booking-info"
    }, /*#__PURE__*/React.createElement(BookingSuccess_Divider, null), /*#__PURE__*/React.createElement("div", {
      className: "tt-single-meeting-booking-info tt-mb-20"
    }, /*#__PURE__*/React.createElement("div", {
      className: "tt-meeting-booking-WQ"
    }, /*#__PURE__*/React.createElement(BookingSuccess_Text, null, " ", BookingSuccess_("What", "timetics"))), /*#__PURE__*/React.createElement("div", {
      className: "tt-meeting-booking-details"
    }, /*#__PURE__*/React.createElement(BookingSuccess_Text, null, meeting === null || meeting === void 0 ? void 0 : meeting.name))), /*#__PURE__*/React.createElement("div", {
      className: "tt-single-meeting-booking-info tt-mb-20"
    }, /*#__PURE__*/React.createElement("div", {
      className: "tt-meeting-booking-WQ"
    }, /*#__PURE__*/React.createElement(BookingSuccess_Text, null, " ", BookingSuccess_("When", "timetics"))), /*#__PURE__*/React.createElement("div", {
      className: "tt-meeting-booking-details"
    }, /*#__PURE__*/React.createElement(BookingSuccess_Text, null, convertWordpressDateFormatToDayjs({
      date: selectedDate,
      format: (_window = window) === null || _window === void 0 ? void 0 : (_window$timetics = _window.timetics) === null || _window$timetics === void 0 ? void 0 : _window$timetics.date_format
    }), " , ", " ", convertWordpressTimeFormatToDayjs({
      time: bookingTime,
      format: (_window2 = window) === null || _window2 === void 0 ? void 0 : (_window2$timetics = _window2.timetics) === null || _window2$timetics === void 0 ? void 0 : _window2$timetics.time_format
    })))), /*#__PURE__*/React.createElement("div", {
      className: "tt-single-meeting-booking-info tt-mb-20"
    }, /*#__PURE__*/React.createElement("div", {
      className: "tt-meeting-booking-WQ"
    }, /*#__PURE__*/React.createElement(BookingSuccess_Text, null, " ", BookingSuccess_("With", "timetics"))), /*#__PURE__*/React.createElement("div", {
      className: "tt-meeting-booking-details"
    }, /*#__PURE__*/React.createElement(BookingSuccess_Text, {
      strong: true
    }, selectedStaff === null || selectedStaff === void 0 ? void 0 : selectedStaff.full_name))), /*#__PURE__*/React.createElement("div", {
      className: "tt-single-meeting-booking-info tt-mb-20"
    }, /*#__PURE__*/React.createElement("div", {
      className: "tt-meeting-booking-WQ"
    }, /*#__PURE__*/React.createElement(BookingSuccess_Text, null, " ", BookingSuccess_("Where", "timetics"))), /*#__PURE__*/React.createElement("div", {
      className: "tt-meeting-booking-details"
    }, (contactInfo === null || contactInfo === void 0 ? void 0 : contactInfo.location_type) == "google-meet" ? /*#__PURE__*/React.createElement(BookingSuccess_Space, {
      wrap: true,
      style: {
        lineHeight: "1"
      }
    }, /*#__PURE__*/React.createElement(GoogleMeet, null), BookingSuccess_("Google Meet", "timetics")) : (contactInfo === null || contactInfo === void 0 ? void 0 : contactInfo.location_type) == "phone-call" ? /*#__PURE__*/React.createElement(BookingSuccess_Space, {
      wrap: true
    }, /*#__PURE__*/React.createElement(Phone, null), contactInfo === null || contactInfo === void 0 ? void 0 : contactInfo.location) : /*#__PURE__*/React.createElement(BookingSuccess_Space, {
      wrap: true
    }, /*#__PURE__*/React.createElement(Location, null), contactInfo === null || contactInfo === void 0 ? void 0 : contactInfo.location))), /*#__PURE__*/React.createElement(BookingSuccess_Divider, null), /*#__PURE__*/React.createElement(BookingSuccess_Space, null, /*#__PURE__*/React.createElement(BookingSuccess_Button, {
      className: "tt-mb-30",
      size: "large",
      type: "primary",
      onClick: function onClick() {
        dispatch({
          type: actions_actions.CLEAR_BOOKING_RELATED_DATA,
          payload: {}
        });
      }
    }, BookingSuccess_("Book again", "timetics")), /*#__PURE__*/React.createElement(BookingSuccess_Button, {
      className: "tt-mb-30",
      size: "large",
      onClick: function onClick() {
        bookingStatusUpdate(response === null || response === void 0 ? void 0 : response.data);
      }
    }, BookingSuccess_("Cancel booking", "timetics"))), /*#__PURE__*/React.createElement(BookingSuccess_Divider, {
      style: {
        marginTop: "0",
        marginBottom: "20px"
      }
    }), window.timeticsPro && ((_wp = wp) === null || _wp === void 0 ? void 0 : (_wp$hooks = _wp.hooks) === null || _wp$hooks === void 0 ? void 0 : _wp$hooks.applyFilters("calendarAdd", response))))
  }));
}
/* harmony default export */ const bookings_BookingSuccess = (BookingSuccess);
;// CONCATENATED MODULE: ./assets/src/frontend/pages/bookings/SeatMap.js
function SeatMap_toConsumableArray(arr) { return SeatMap_arrayWithoutHoles(arr) || SeatMap_iterableToArray(arr) || SeatMap_unsupportedIterableToArray(arr) || SeatMap_nonIterableSpread(); }
function SeatMap_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function SeatMap_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function SeatMap_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return SeatMap_arrayLikeToArray(arr); }
function SeatMap_slicedToArray(arr, i) { return SeatMap_arrayWithHoles(arr) || SeatMap_iterableToArrayLimit(arr, i) || SeatMap_unsupportedIterableToArray(arr, i) || SeatMap_nonIterableRest(); }
function SeatMap_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function SeatMap_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return SeatMap_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return SeatMap_arrayLikeToArray(o, minLen); }
function SeatMap_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function SeatMap_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function SeatMap_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var SeatMap_ = wp.i18n.__;
var SeatMap_window$antd = window.antd,
  SeatMap_Row = SeatMap_window$antd.Row,
  SeatMap_Col = SeatMap_window$antd.Col,
  SeatMap_Typography = SeatMap_window$antd.Typography,
  SeatMap_Space = SeatMap_window$antd.Space,
  SeatMap_Button = SeatMap_window$antd.Button;
var SeatMap_Title = SeatMap_Typography.Title,
  SeatMap_Text = SeatMap_Typography.Text;
function SeatMap() {
  var _wp, _wp$hooks;
  var _useStateValue = provider_useStateValue(),
    _useStateValue2 = SeatMap_slicedToArray(_useStateValue, 2),
    meetingRedcuer = _useStateValue2[0].meeting,
    dispatch = _useStateValue2[1];
  var meeting = meetingRedcuer.meeting,
    currentSlot = meetingRedcuer.currentSlot,
    _meetingRedcuer$selec = meetingRedcuer.selectedSeats,
    selectedSeats = _meetingRedcuer$selec === void 0 ? [] : _meetingRedcuer$selec,
    _meetingRedcuer$selec2 = meetingRedcuer.selectedSeat,
    selectedSeat = _meetingRedcuer$selec2 === void 0 ? [] : _meetingRedcuer$selec2;
  var onSelectHandler = function onSelectHandler(data) {
    if (Array.isArray(data)) {
      var _selectedSeat = data.map(function (chair) {
        return "".concat(chair === null || chair === void 0 ? void 0 : chair.ticketType, " - ").concat(chair === null || chair === void 0 ? void 0 : chair.number);
      });
      dispatch({
        type: actions_actions.SET_STATE,
        payload: {
          selectedSeats: [].concat(SeatMap_toConsumableArray(selectedSeats), SeatMap_toConsumableArray(data)),
          selectedSeat: [].concat(SeatMap_toConsumableArray(selectedSeat), SeatMap_toConsumableArray(_selectedSeat))
        }
      });
    } else {
      var _selectedSeat2 = "".concat(data === null || data === void 0 ? void 0 : data.ticketType, " - ").concat(data === null || data === void 0 ? void 0 : data.number);
      dispatch({
        type: actions_actions.SET_STATE,
        payload: {
          selectedSeats: [].concat(SeatMap_toConsumableArray(selectedSeats), [data]),
          selectedSeat: [].concat(SeatMap_toConsumableArray(selectedSeat), [_selectedSeat2])
        }
      });
    }
  };
  var onUnselectHandler = function onUnselectHandler(data) {
    if (Array.isArray(data)) {
      var _selectedSeat = data.map(function (chair) {
        return "".concat(chair === null || chair === void 0 ? void 0 : chair.ticketType, " - ").concat(chair === null || chair === void 0 ? void 0 : chair.number);
      });
      var _selectedSeats = data.map(function (chair) {
        return chair.id;
      });
      dispatch({
        type: actions_actions.SET_STATE,
        payload: {
          selectedSeats: SeatMap_toConsumableArray(selectedSeats.filter(function (seat) {
            return !_selectedSeats.includes(seat.id);
          })),
          selectedSeat: SeatMap_toConsumableArray(selectedSeat.filter(function (seat) {
            return !_selectedSeat.includes(seat);
          }))
        }
      });
    } else {
      var _selectedSeat3 = "".concat(data === null || data === void 0 ? void 0 : data.ticketType, " - ").concat(data === null || data === void 0 ? void 0 : data.number);
      dispatch({
        type: actions_actions.SET_STATE,
        payload: {
          selectedSeats: selectedSeats.filter(function (seat) {
            return (seat === null || seat === void 0 ? void 0 : seat.id) !== (data === null || data === void 0 ? void 0 : data.id);
          }),
          selectedSeat: selectedSeat.filter(function (seat) {
            return seat !== _selectedSeat3;
          })
        }
      });
    }
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SeatMap_Row, {
    gutter: [24, 24]
  }, /*#__PURE__*/React.createElement(SeatMap_Col, {
    xs: 24,
    sm: 24,
    md: 8,
    lg: 6
  }, /*#__PURE__*/React.createElement("div", {
    className: "tt-form-left-sidebar"
  }, /*#__PURE__*/React.createElement(SeatMap_Title, {
    className: "tt-meeting-name",
    level: 3
  }, meeting === null || meeting === void 0 ? void 0 : meeting.name), /*#__PURE__*/React.createElement(SeatMap_Text, {
    className: "tt-meeting-description tt-mb-30",
    type: "secondary"
  }, meeting === null || meeting === void 0 ? void 0 : meeting.description), /*#__PURE__*/React.createElement(SidebarInfo, null))), /*#__PURE__*/React.createElement(SeatMap_Col, {
    xs: 24,
    sm: 24,
    md: 16,
    lg: 18
  }, /*#__PURE__*/React.createElement("div", {
    className: "tt-booking-body-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: ""
  }, (_wp = wp) === null || _wp === void 0 ? void 0 : (_wp$hooks = _wp.hooks) === null || _wp$hooks === void 0 ? void 0 : _wp$hooks.applyFilters("seatMap", meeting === null || meeting === void 0 ? void 0 : meeting.seat_plan, // an array of individual seat data
  meeting === null || meeting === void 0 ? void 0 : meeting.seat_plan_settings,
  // object regarding the canvas settings
  currentSlot,
  // an array of number id
  onSelectHandler, onUnselectHandler)), /*#__PURE__*/React.createElement(SeatMap_Row, {
    align: "end"
  }, /*#__PURE__*/React.createElement(SeatMap_Space, {
    className: "tt-seat-booking-button"
  }, /*#__PURE__*/React.createElement(SeatMap_Button, {
    className: "backbtn",
    size: "large",
    type: "primary",
    htmlType: "button",
    ghost: true,
    onClick: function onClick() {
      dispatch({
        type: actions_actions.SET_STATE,
        payload: {
          step: 1,
          selectedSeats: [],
          selectedSeat: []
        }
      });
    }
  }, /*#__PURE__*/React.createElement(ArrowLeftIcon, null), SeatMap_("Go back", "timetics-pro")), /*#__PURE__*/React.createElement(SeatMap_Button, {
    className: "submit-btn",
    size: "large",
    type: "primary",
    htmlType: "button",
    disabled: (selectedSeats === null || selectedSeats === void 0 ? void 0 : selectedSeats.length) === 0,
    onClick: function onClick(e) {
      e.preventDefault();
      if ((selectedSeats === null || selectedSeats === void 0 ? void 0 : selectedSeats.length) === 0) return;
      dispatch({
        type: actions_actions.SET_STATE,
        payload: {
          step: 3
          // bookingSeat:
        }
      });
    }
  }, SeatMap_("Next", "timetics-pro"), /*#__PURE__*/React.createElement(ArrowRightIcon2, null))))))));
}
/* harmony default export */ const bookings_SeatMap = (SeatMap);
;// CONCATENATED MODULE: ./assets/src/frontend/frontendSteps/FrontendSteps.js
function FrontendSteps_slicedToArray(arr, i) { return FrontendSteps_arrayWithHoles(arr) || FrontendSteps_iterableToArrayLimit(arr, i) || FrontendSteps_unsupportedIterableToArray(arr, i) || FrontendSteps_nonIterableRest(); }
function FrontendSteps_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function FrontendSteps_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return FrontendSteps_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return FrontendSteps_arrayLikeToArray(o, minLen); }
function FrontendSteps_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function FrontendSteps_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function FrontendSteps_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var FrontendSteps_window$antd = window.antd,
  FrontendSteps_Button = FrontendSteps_window$antd.Button,
  message = FrontendSteps_window$antd.message,
  Steps = FrontendSteps_window$antd.Steps;
var FrontendSteps_useState = window.React.useState;
var FrontendSteps = function FrontendSteps() {
  var _useStateValue = provider_useStateValue(),
    _useStateValue2 = FrontendSteps_slicedToArray(_useStateValue, 2),
    meetingReducer = _useStateValue2[0].meeting,
    dispatch = _useStateValue2[1];
  var meeting = meetingReducer.meeting,
    step = meetingReducer.step;
  var _useState = FrontendSteps_useState(0),
    _useState2 = FrontendSteps_slicedToArray(_useState, 2),
    current = _useState2[0],
    setCurrent = _useState2[1];
  var next = function next() {
    setCurrent(current + 1);
  };
  var prev = function prev() {
    setCurrent(current - 1);
  };
  var steps = [{
    title: "1",
    content: /*#__PURE__*/React.createElement(bookings_BookingSchedule, null)
  }, {
    title: "2",
    content: /*#__PURE__*/React.createElement(bookings_ContactInfo, null)
  }, {
    title: "3",
    content: /*#__PURE__*/React.createElement(bookings_PaymentForm, null)
  }];
  var steps2 = [{
    title: "1",
    content: /*#__PURE__*/React.createElement(bookings_BookingSchedule, null)
  }, {
    title: "2",
    content: /*#__PURE__*/React.createElement(bookings_SeatMap, null)
  }, {
    title: "3",
    content: /*#__PURE__*/React.createElement(bookings_ContactInfo, null)
  }, {
    title: "4",
    content: /*#__PURE__*/React.createElement(bookings_PaymentForm, null)
  }];
  var items = steps.map(function (item) {
    return {
      key: item.title,
      title: item.title
    };
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, (meeting === null || meeting === void 0 ? void 0 : meeting.type) == "seat" ? steps2[step - 1].content : steps[step - 1].content));
};
/* harmony default export */ const frontendSteps_FrontendSteps = (FrontendSteps);
;// CONCATENATED MODULE: ./assets/src/frontend/pages/bookings/index.js
function bookings_slicedToArray(arr, i) { return bookings_arrayWithHoles(arr) || bookings_iterableToArrayLimit(arr, i) || bookings_unsupportedIterableToArray(arr, i) || bookings_nonIterableRest(); }
function bookings_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function bookings_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return bookings_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return bookings_arrayLikeToArray(o, minLen); }
function bookings_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function bookings_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function bookings_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function Bookings() {
  var _useStateValue = provider_useStateValue(),
    _useStateValue2 = bookings_slicedToArray(_useStateValue, 2),
    meetingReducer = _useStateValue2[0].meeting,
    dispatch = _useStateValue2[1];
  var step = meetingReducer.step;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(frontendSteps_FrontendSteps, null));
}
/* harmony default export */ const bookings = (Bookings);
;// CONCATENATED MODULE: ./assets/src/frontend/pages/bookings/BookingResult.js
function BookingResult_slicedToArray(arr, i) { return BookingResult_arrayWithHoles(arr) || BookingResult_iterableToArrayLimit(arr, i) || BookingResult_unsupportedIterableToArray(arr, i) || BookingResult_nonIterableRest(); }
function BookingResult_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function BookingResult_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return BookingResult_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return BookingResult_arrayLikeToArray(o, minLen); }
function BookingResult_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function BookingResult_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function BookingResult_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var BookingResult_window$antd = window.antd,
  BookingResult_Button = BookingResult_window$antd.Button,
  BookingResult_Result = BookingResult_window$antd.Result,
  BookingResult_Typography = BookingResult_window$antd.Typography,
  BookingResult_Divider = BookingResult_window$antd.Divider,
  BookingResult_Space = BookingResult_window$antd.Space;
var BookingResult_Text = BookingResult_Typography.Text,
  BookingResult_Link = BookingResult_Typography.Link;



var BookingResult_ = wp.i18n.__;
function BookingResult(_ref) {
  var status = _ref.status,
    title = _ref.title,
    subTitle = _ref.subTitle,
    extra = _ref.extra;
  var _useStateValue = provider_useStateValue(),
    _useStateValue2 = BookingResult_slicedToArray(_useStateValue, 2),
    meetingReducer = _useStateValue2[0].meeting,
    dispatch = _useStateValue2[1];
  var meeting = meetingReducer.meeting,
    selectedDate = meetingReducer.selectedDate,
    bookingTime = meetingReducer.bookingTime,
    selectedDay = meetingReducer.selectedDay,
    contactInfo = meetingReducer.contactInfo,
    selectedStaff = meetingReducer.selectedStaff;
  //TODO need to make error page for booking error
  return /*#__PURE__*/React.createElement("div", {
    className: "tt-meeting-booking-result-wrapper"
  }, /*#__PURE__*/React.createElement(BookingResult_Result, {
    status: status,
    title: title,
    subTitle: subTitle,
    extra: extra
  }));
}
;// CONCATENATED MODULE: ./assets/src/frontend/pages/bookings/BookingStatus.js
function BookingStatus_slicedToArray(arr, i) { return BookingStatus_arrayWithHoles(arr) || BookingStatus_iterableToArrayLimit(arr, i) || BookingStatus_unsupportedIterableToArray(arr, i) || BookingStatus_nonIterableRest(); }
function BookingStatus_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function BookingStatus_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return BookingStatus_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return BookingStatus_arrayLikeToArray(o, minLen); }
function BookingStatus_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function BookingStatus_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function BookingStatus_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var BookingStatus_window$antd = window.antd,
  BookingStatus_Button = BookingStatus_window$antd.Button,
  BookingStatus_Result = BookingStatus_window$antd.Result,
  BookingStatus_Typography = BookingStatus_window$antd.Typography,
  BookingStatus_Divider = BookingStatus_window$antd.Divider,
  BookingStatus_Space = BookingStatus_window$antd.Space;
var BookingStatus_Text = BookingStatus_Typography.Text,
  BookingStatus_Link = BookingStatus_Typography.Link;





var BookingStatus_useEffect = window.React.useEffect;
var BookingStatus_ = wp.i18n.__;
function BookingStatus() {
  var _useStateValue = provider_useStateValue(),
    _useStateValue2 = BookingStatus_slicedToArray(_useStateValue, 2),
    meetingReducer = _useStateValue2[0].meeting,
    dispatch = _useStateValue2[1];
  var paymentStatus = meetingReducer.paymentStatus,
    response = meetingReducer.response,
    meeting = meetingReducer.meeting,
    payment_method = meetingReducer.payment_method;
  BookingStatus_useEffect(function () {
    //TODO payment method should be dynamic, now it is hardcoded because we only support stripe and don't have any other payment method to select.
    if (!!(meeting !== null && meeting !== void 0 && meeting.price)) {
      var _response$data;
      var payload = {
        payment_method: payment_method !== null && payment_method !== void 0 ? payment_method : "cash",
        status: paymentStatus === null || paymentStatus === void 0 ? void 0 : paymentStatus.status,
        payment_details: paymentStatus
      };
      updateBookingPayment({
        id: response === null || response === void 0 ? void 0 : (_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.id,
        values: payload,
        stopToast: true
      });
    }
    return function () {};
  }, []);
  if ((paymentStatus === null || paymentStatus === void 0 ? void 0 : paymentStatus.status) == "canceled") {
    return /*#__PURE__*/React.createElement(BookingResult, {
      status: "info",
      title: BookingStatus_("Booking canceled.", "timetics"),
      subTitle: BookingStatus_("Booking was canceled.", "timetics"),
      extra: /*#__PURE__*/React.createElement("div", {
        className: "tt-booking-schedule-cancel"
      }, /*#__PURE__*/React.createElement(BookingStatus_Button, {
        className: "tt-mb-30",
        size: "large",
        onClick: function onClick() {
          dispatch({
            type: actions_actions.CLEAR_BOOKING_RELATED_DATA,
            payload: {}
          });
        }
      }, BookingStatus_("Book again", "timetics")))
    });
  }
  if ((paymentStatus === null || paymentStatus === void 0 ? void 0 : paymentStatus.status) == "succeeded") {
    return /*#__PURE__*/React.createElement(bookings_BookingSuccess, null);
  }
  return /*#__PURE__*/React.createElement(BookingResult, {
    status: "error",
    title: BookingStatus_("Couldn't schedule this booking", "timetics"),
    subTitle: BookingStatus_("Something went wrong, Please try again.", "timetics"),
    extra: /*#__PURE__*/React.createElement("div", {
      className: "tt-booking-schedule-cancel"
    }, /*#__PURE__*/React.createElement(BookingStatus_Button, {
      className: "tt-mb-30",
      size: "large",
      onClick: function onClick() {
        dispatch({
          type: actions_actions.CLEAR_BOOKING_RELATED_DATA,
          payload: {}
        });
      }
    }, BookingStatus_("Book again", "timetics")))
  });
}
/* harmony default export */ const bookings_BookingStatus = (BookingStatus);
;// CONCATENATED MODULE: ./assets/src/frontend/pages/BookingPage.js
function BookingPage_slicedToArray(arr, i) { return BookingPage_arrayWithHoles(arr) || BookingPage_iterableToArrayLimit(arr, i) || BookingPage_unsupportedIterableToArray(arr, i) || BookingPage_nonIterableRest(); }
function BookingPage_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function BookingPage_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return BookingPage_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return BookingPage_arrayLikeToArray(o, minLen); }
function BookingPage_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function BookingPage_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function BookingPage_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var BookingPage_useEffect = window.React.useEffect;
function BookingPage(_ref) {
  var dataControls = _ref.dataControls;
  var _useStateValue = provider_useStateValue(),
    _useStateValue2 = BookingPage_slicedToArray(_useStateValue, 2),
    meetingReducer = _useStateValue2[0].meeting,
    dispatch = _useStateValue2[1];
  var paymentStatus = meetingReducer.paymentStatus,
    response = meetingReducer.response;
  BookingPage_useEffect(function () {
    dispatch({
      type: actions_actions.SET_DATA_CONTROLS,
      payload: dataControls
    });
    return function () {};
  }, []);

  // return <BookingError />;

  return /*#__PURE__*/React.createElement(React.Fragment, null, paymentStatus !== null && paymentStatus !== void 0 && paymentStatus.status ? /*#__PURE__*/React.createElement(bookings_BookingStatus, null) : /*#__PURE__*/React.createElement(bookings, null));
}
/* harmony default export */ const pages_BookingPage = (BookingPage);
;// CONCATENATED MODULE: ./assets/src/frontend/app.js



var app_ = wp.i18n.__;
var app_React = window.React;
var Suspense = app_React.Suspense,
  app_useEffect = app_React.useEffect;
function App(_ref) {
  var dataControls = _ref.dataControls;
  return /*#__PURE__*/app_React.createElement(provider, null, /*#__PURE__*/app_React.createElement(Suspense, {
    fallback: /*#__PURE__*/app_React.createElement(common_Spinner, {
      tip: app_("Loading...", "timetics"),
      type: "info",
      size: "large",
      wrapperClassName: "tt-spinner-wrapper"
    })
  }, /*#__PURE__*/app_React.createElement(pages_BookingPage, {
    dataControls: dataControls
  })));
}
;// CONCATENATED MODULE: ./assets/src/frontend/bookingListModal.js
function bookingListModal_slicedToArray(arr, i) { return bookingListModal_arrayWithHoles(arr) || bookingListModal_iterableToArrayLimit(arr, i) || bookingListModal_unsupportedIterableToArray(arr, i) || bookingListModal_nonIterableRest(); }
function bookingListModal_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function bookingListModal_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return bookingListModal_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return bookingListModal_arrayLikeToArray(o, minLen); }
function bookingListModal_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function bookingListModal_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function bookingListModal_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var bookingListModal_React = window.React;
var Modal = window.antd.Modal;
var bookingListModal_useState = bookingListModal_React.useState,
  bookingListModal_useEffect = bookingListModal_React.useEffect;

function BookingListModal() {
  var _useState = bookingListModal_useState(false),
    _useState2 = bookingListModal_slicedToArray(_useState, 2),
    isModalOpen = _useState2[0],
    setIsModalOpen = _useState2[1];
  var _useState3 = bookingListModal_useState(""),
    _useState4 = bookingListModal_slicedToArray(_useState3, 2),
    id = _useState4[0],
    setId = _useState4[1];
  bookingListModal_useEffect(function () {
    document.addEventListener("getSelectedId", function (event) {
      setId(event.detail.id);
      setIsModalOpen(event.detail.modal);
    });
  }, []);
  var handleOk = function handleOk() {
    setIsModalOpen(false);
  };
  var handleCancel = function handleCancel() {
    setIsModalOpen(false);
  };
  return /*#__PURE__*/bookingListModal_React.createElement("div", null, /*#__PURE__*/bookingListModal_React.createElement(Modal, {
    open: isModalOpen,
    onOk: handleOk,
    onCancel: handleCancel,
    destroyOnClose: true,
    footer: null,
    maskClosable: false,
    width: 1000,
    wrapClassName: "tt-booking-list-modal"
  }, /*#__PURE__*/bookingListModal_React.createElement(App, {
    dataControls: {
      id: id
    }
  })));
}
;// CONCATENATED MODULE: ./assets/src/frontend/index.js
function frontend_slicedToArray(arr, i) { return frontend_arrayWithHoles(arr) || frontend_iterableToArrayLimit(arr, i) || frontend_unsupportedIterableToArray(arr, i) || frontend_nonIterableRest(); }
function frontend_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function frontend_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return frontend_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return frontend_arrayLikeToArray(o, minLen); }
function frontend_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function frontend_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function frontend_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var frontend_React = window.React;
var ReactVersion = frontend_React.version;
var ReactDOM = window.ReactDOM;


var init = function init($scope) {
  var _$scope$find = $scope.find(".timetics-single-booking-wrapper"),
    _$scope$find2 = frontend_slicedToArray(_$scope$find, 1),
    root = _$scope$find2[0];
  var _$scope$find3 = $scope.find(".timetics-booking-modal"),
    _$scope$find4 = frontend_slicedToArray(_$scope$find3, 1),
    modalRoot = _$scope$find4[0];
  var dataControls = root === null || root === void 0 ? void 0 : root.getAttribute("data-controls");

  /**
   * Renders the main component
   */

  if (ReactVersion >= "18.0.0") {
    if (root && ReactVersion >= "18.0.0") {
      var rootEl = ReactDOM.createRoot(root, {
        legacy: true
      });
      rootEl.render( /*#__PURE__*/frontend_React.createElement(App, {
        dataControls: JSON.parse(dataControls)
      }));
    }
    if (modalRoot && ReactVersion >= "18.0.0") {
      var modalEl = ReactDOM.createRoot(modalRoot);
      modalEl.render( /*#__PURE__*/frontend_React.createElement(BookingListModal, null));
    }
  } else {
    if (root) {
      ReactDOM.render( /*#__PURE__*/frontend_React.createElement(App, {
        dataControls: JSON.parse(dataControls)
      }), root);
    }

    /**
     * Renders booking list modal
     */
    if (modalRoot) {
      ReactDOM.render( /*#__PURE__*/frontend_React.createElement(BookingListModal, null), modalRoot);
    }
  }
};
jQuery(window)
// .on("elementor/frontend/init", () => {
//     let widgetsList = [
//         "etn-event-calendar",
//     ];
//     init(elementorFrontend.elements.$body);

//     widgetsList.forEach((event) => {
//         elementorFrontend.hooks.addAction(
//             "frontend/element_ready/" + event + ".default",
//             init
//         );
//     });
// })

/*
 * Load all the shortcodes elements here.
 */.on("load", function () {
  var shortcodeEls = document.querySelectorAll(".timetics-shortcode-wrapper");
  shortcodeEls.forEach(function (el) {
    init(jQuery(el));
  });
});
// EXTERNAL MODULE: ./assets/src/meetingListModal.js
var meetingListModal = __webpack_require__(71);
;// CONCATENATED MODULE: ./assets/src/frontend.js


})();

/******/ })()
;