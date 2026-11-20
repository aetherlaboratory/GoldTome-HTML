/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@monaco-editor/loader/lib/es/_virtual/_rollupPluginBabelHelpers.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@monaco-editor/loader/lib/es/_virtual/_rollupPluginBabelHelpers.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   arrayLikeToArray: () => (/* binding */ _arrayLikeToArray),
/* harmony export */   arrayWithHoles: () => (/* binding */ _arrayWithHoles),
/* harmony export */   defineProperty: () => (/* binding */ _defineProperty),
/* harmony export */   iterableToArrayLimit: () => (/* binding */ _iterableToArrayLimit),
/* harmony export */   nonIterableRest: () => (/* binding */ _nonIterableRest),
/* harmony export */   objectSpread2: () => (/* binding */ _objectSpread2),
/* harmony export */   objectWithoutProperties: () => (/* binding */ _objectWithoutProperties),
/* harmony export */   objectWithoutPropertiesLoose: () => (/* binding */ _objectWithoutPropertiesLoose),
/* harmony export */   slicedToArray: () => (/* binding */ _slicedToArray),
/* harmony export */   unsupportedIterableToArray: () => (/* binding */ _unsupportedIterableToArray)
/* harmony export */ });
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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
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

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
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




/***/ }),

/***/ "./node_modules/@monaco-editor/loader/lib/es/config/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@monaco-editor/loader/lib/es/config/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var config = {
  paths: {
    vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.43.0/min/vs'
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (config);


/***/ }),

/***/ "./node_modules/@monaco-editor/loader/lib/es/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@monaco-editor/loader/lib/es/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _loader_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _loader_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loader/index.js */ "./node_modules/@monaco-editor/loader/lib/es/loader/index.js");




/***/ }),

/***/ "./node_modules/@monaco-editor/loader/lib/es/loader/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@monaco-editor/loader/lib/es/loader/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_virtual/_rollupPluginBabelHelpers.js */ "./node_modules/@monaco-editor/loader/lib/es/_virtual/_rollupPluginBabelHelpers.js");
/* harmony import */ var state_local__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! state-local */ "./node_modules/state-local/lib/es/state-local.js");
/* harmony import */ var _config_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/index.js */ "./node_modules/@monaco-editor/loader/lib/es/config/index.js");
/* harmony import */ var _validators_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../validators/index.js */ "./node_modules/@monaco-editor/loader/lib/es/validators/index.js");
/* harmony import */ var _utils_compose_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/compose.js */ "./node_modules/@monaco-editor/loader/lib/es/utils/compose.js");
/* harmony import */ var _utils_deepMerge_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/deepMerge.js */ "./node_modules/@monaco-editor/loader/lib/es/utils/deepMerge.js");
/* harmony import */ var _utils_makeCancelable_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/makeCancelable.js */ "./node_modules/@monaco-editor/loader/lib/es/utils/makeCancelable.js");








/** the local state of the module */

var _state$create = state_local__WEBPACK_IMPORTED_MODULE_1__["default"].create({
  config: _config_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  isInitialized: false,
  resolve: null,
  reject: null,
  monaco: null
}),
    _state$create2 = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__.slicedToArray)(_state$create, 2),
    getState = _state$create2[0],
    setState = _state$create2[1];
/**
 * set the loader configuration
 * @param {Object} config - the configuration object
 */


function config(globalConfig) {
  var _validators$config = _validators_index_js__WEBPACK_IMPORTED_MODULE_3__["default"].config(globalConfig),
      monaco = _validators$config.monaco,
      config = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__.objectWithoutProperties)(_validators$config, ["monaco"]);

  setState(function (state) {
    return {
      config: (0,_utils_deepMerge_js__WEBPACK_IMPORTED_MODULE_5__["default"])(state.config, config),
      monaco: monaco
    };
  });
}
/**
 * handles the initialization of the monaco-editor
 * @return {Promise} - returns an instance of monaco (with a cancelable promise)
 */


function init() {
  var state = getState(function (_ref) {
    var monaco = _ref.monaco,
        isInitialized = _ref.isInitialized,
        resolve = _ref.resolve;
    return {
      monaco: monaco,
      isInitialized: isInitialized,
      resolve: resolve
    };
  });

  if (!state.isInitialized) {
    setState({
      isInitialized: true
    });

    if (state.monaco) {
      state.resolve(state.monaco);
      return (0,_utils_makeCancelable_js__WEBPACK_IMPORTED_MODULE_6__["default"])(wrapperPromise);
    }

    if (window.monaco && window.monaco.editor) {
      storeMonacoInstance(window.monaco);
      state.resolve(window.monaco);
      return (0,_utils_makeCancelable_js__WEBPACK_IMPORTED_MODULE_6__["default"])(wrapperPromise);
    }

    (0,_utils_compose_js__WEBPACK_IMPORTED_MODULE_4__["default"])(injectScripts, getMonacoLoaderScript)(configureLoader);
  }

  return (0,_utils_makeCancelable_js__WEBPACK_IMPORTED_MODULE_6__["default"])(wrapperPromise);
}
/**
 * injects provided scripts into the document.body
 * @param {Object} script - an HTML script element
 * @return {Object} - the injected HTML script element
 */


function injectScripts(script) {
  return document.body.appendChild(script);
}
/**
 * creates an HTML script element with/without provided src
 * @param {string} [src] - the source path of the script
 * @return {Object} - the created HTML script element
 */


function createScript(src) {
  var script = document.createElement('script');
  return src && (script.src = src), script;
}
/**
 * creates an HTML script element with the monaco loader src
 * @return {Object} - the created HTML script element
 */


function getMonacoLoaderScript(configureLoader) {
  var state = getState(function (_ref2) {
    var config = _ref2.config,
        reject = _ref2.reject;
    return {
      config: config,
      reject: reject
    };
  });
  var loaderScript = createScript("".concat(state.config.paths.vs, "/loader.js"));

  loaderScript.onload = function () {
    return configureLoader();
  };

  loaderScript.onerror = state.reject;
  return loaderScript;
}
/**
 * configures the monaco loader
 */


function configureLoader() {
  var state = getState(function (_ref3) {
    var config = _ref3.config,
        resolve = _ref3.resolve,
        reject = _ref3.reject;
    return {
      config: config,
      resolve: resolve,
      reject: reject
    };
  });
  var require = window.require;

  require.config(state.config);

  require(['vs/editor/editor.main'], function (monaco) {
    storeMonacoInstance(monaco);
    state.resolve(monaco);
  }, function (error) {
    state.reject(error);
  });
}
/**
 * store monaco instance in local state
 */


function storeMonacoInstance(monaco) {
  if (!getState().monaco) {
    setState({
      monaco: monaco
    });
  }
}
/**
 * internal helper function
 * extracts stored monaco instance
 * @return {Object|null} - the monaco instance
 */


function __getMonacoInstance() {
  return getState(function (_ref4) {
    var monaco = _ref4.monaco;
    return monaco;
  });
}

var wrapperPromise = new Promise(function (resolve, reject) {
  return setState({
    resolve: resolve,
    reject: reject
  });
});
var loader = {
  config: config,
  init: init,
  __getMonacoInstance: __getMonacoInstance
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loader);


/***/ }),

/***/ "./node_modules/@monaco-editor/loader/lib/es/utils/compose.js":
/*!********************************************************************!*\
  !*** ./node_modules/@monaco-editor/loader/lib/es/utils/compose.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var compose = function compose() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function (x) {
    return fns.reduceRight(function (y, f) {
      return f(y);
    }, x);
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (compose);


/***/ }),

/***/ "./node_modules/@monaco-editor/loader/lib/es/utils/curry.js":
/*!******************************************************************!*\
  !*** ./node_modules/@monaco-editor/loader/lib/es/utils/curry.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function curry(fn) {
  return function curried() {
    var _this = this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return args.length >= fn.length ? fn.apply(this, args) : function () {
      for (var _len2 = arguments.length, nextArgs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        nextArgs[_key2] = arguments[_key2];
      }

      return curried.apply(_this, [].concat(args, nextArgs));
    };
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (curry);


/***/ }),

/***/ "./node_modules/@monaco-editor/loader/lib/es/utils/deepMerge.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@monaco-editor/loader/lib/es/utils/deepMerge.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_virtual/_rollupPluginBabelHelpers.js */ "./node_modules/@monaco-editor/loader/lib/es/_virtual/_rollupPluginBabelHelpers.js");


function merge(target, source) {
  Object.keys(source).forEach(function (key) {
    if (source[key] instanceof Object) {
      if (target[key]) {
        Object.assign(source[key], merge(target[key], source[key]));
      }
    }
  });
  return (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__.objectSpread2)((0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__.objectSpread2)({}, target), source);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (merge);


/***/ }),

/***/ "./node_modules/@monaco-editor/loader/lib/es/utils/isObject.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@monaco-editor/loader/lib/es/utils/isObject.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function isObject(value) {
  return {}.toString.call(value).includes('Object');
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isObject);


/***/ }),

/***/ "./node_modules/@monaco-editor/loader/lib/es/utils/makeCancelable.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@monaco-editor/loader/lib/es/utils/makeCancelable.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CANCELATION_MESSAGE: () => (/* binding */ CANCELATION_MESSAGE),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// The source (has been changed) is https://github.com/facebook/react/issues/5465#issuecomment-157888325
var CANCELATION_MESSAGE = {
  type: 'cancelation',
  msg: 'operation is manually canceled'
};

function makeCancelable(promise) {
  var hasCanceled_ = false;
  var wrappedPromise = new Promise(function (resolve, reject) {
    promise.then(function (val) {
      return hasCanceled_ ? reject(CANCELATION_MESSAGE) : resolve(val);
    });
    promise["catch"](reject);
  });
  return wrappedPromise.cancel = function () {
    return hasCanceled_ = true;
  }, wrappedPromise;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeCancelable);



/***/ }),

/***/ "./node_modules/@monaco-editor/loader/lib/es/validators/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@monaco-editor/loader/lib/es/validators/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   errorHandler: () => (/* binding */ errorHandler),
/* harmony export */   errorMessages: () => (/* binding */ errorMessages)
/* harmony export */ });
/* harmony import */ var _utils_curry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/curry.js */ "./node_modules/@monaco-editor/loader/lib/es/utils/curry.js");
/* harmony import */ var _utils_isObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/isObject.js */ "./node_modules/@monaco-editor/loader/lib/es/utils/isObject.js");



/**
 * validates the configuration object and informs about deprecation
 * @param {Object} config - the configuration object 
 * @return {Object} config - the validated configuration object
 */

function validateConfig(config) {
  if (!config) errorHandler('configIsRequired');
  if (!(0,_utils_isObject_js__WEBPACK_IMPORTED_MODULE_1__["default"])(config)) errorHandler('configType');

  if (config.urls) {
    informAboutDeprecation();
    return {
      paths: {
        vs: config.urls.monacoBase
      }
    };
  }

  return config;
}
/**
 * logs deprecation message
 */


function informAboutDeprecation() {
  console.warn(errorMessages.deprecation);
}

function throwError(errorMessages, type) {
  throw new Error(errorMessages[type] || errorMessages["default"]);
}

var errorMessages = {
  configIsRequired: 'the configuration object is required',
  configType: 'the configuration object should be an object',
  "default": 'an unknown error accured in `@monaco-editor/loader` package',
  deprecation: "Deprecation warning!\n    You are using deprecated way of configuration.\n\n    Instead of using\n      monaco.config({ urls: { monacoBase: '...' } })\n    use\n      monaco.config({ paths: { vs: '...' } })\n\n    For more please check the link https://github.com/suren-atoyan/monaco-loader#config\n  "
};
var errorHandler = (0,_utils_curry_js__WEBPACK_IMPORTED_MODULE_0__["default"])(throwError)(errorMessages);
var validators = {
  config: validateConfig
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validators);



/***/ }),

/***/ "./src/js/Icons.js":
/*!*************************!*\
  !*** ./src/js/Icons.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CloseAltIcon: () => (/* binding */ CloseAltIcon),
/* harmony export */   CloseFullScrennIcon: () => (/* binding */ CloseFullScrennIcon),
/* harmony export */   CloseIcon: () => (/* binding */ CloseIcon),
/* harmony export */   CloseSmallIcon: () => (/* binding */ CloseSmallIcon),
/* harmony export */   FolderIcon: () => (/* binding */ FolderIcon),
/* harmony export */   HomeIcon: () => (/* binding */ HomeIcon),
/* harmony export */   OpenFullScrennIcon: () => (/* binding */ OpenFullScrennIcon),
/* harmony export */   OpenIcon: () => (/* binding */ OpenIcon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

// Icons.js

const OpenIcon = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  className: "min-w-[12px]",
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 -960 960 960",
  width: "24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"
}));
const CloseIcon = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  className: "min-w-[12px]",
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 -960 960 960",
  width: "24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M200-440v-80h560v80H200Z"
}));
const CloseAltIcon = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  className: "min-w-[12px]",
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 -960 960 960",
  width: "24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M280-440h400v-80H280v80ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"
}));
const HomeIcon = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  className: "min-w-[12px] w-[16px]",
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 -960 960 960",
  width: "24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"
}));
const FolderIcon = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  className: "min-w-[16px]",
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  clipPath: "url(#clip0_2_2)"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M1.75 1C1.28587 1 0.840752 1.18437 0.512563 1.51256C0.184374 1.84075 0 2.28587 0 2.75L0 13.25C0 14.216 0.784 15 1.75 15H14.25C14.7141 15 15.1592 14.8156 15.4874 14.4874C15.8156 14.1592 16 13.7141 16 13.25V4.75C16 4.28587 15.8156 3.84075 15.4874 3.51256C15.1592 3.18437 14.7141 3 14.25 3H7.5C7.46119 3 7.42291 2.99096 7.3882 2.97361C7.35348 2.95625 7.32329 2.93105 7.3 2.9L6.4 1.7C6.07 1.26 5.55 1 5 1H1.75Z",
  fill: "#0D66EB"
})), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("clipPath", {
  id: "clip0_2_2"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  width: "16",
  height: "16",
  fill: "white"
}))));
const CloseSmallIcon = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  className: "min-w-[12px]",
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 -960 960 960",
  width: "24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m336-280-56-56 144-144-144-143 56-56 144 144 143-144 56 56-144 143 144 144-56 56-143-144-144 144Z"
}));
const OpenFullScrennIcon = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 -960 960 960",
  width: "24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M120-120v-320h80v184l504-504H520v-80h320v320h-80v-184L256-200h184v80H120Z"
}));
const CloseFullScrennIcon = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 -960 960 960",
  width: "24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m136-80-56-56 264-264H160v-80h320v320h-80v-184L136-80Zm344-400v-320h80v184l264-264 56 56-264 264h184v80H480Z"
}));

// Add more icons as needed

/***/ }),

/***/ "./node_modules/state-local/lib/es/state-local.js":
/*!********************************************************!*\
  !*** ./node_modules/state-local/lib/es/state-local.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
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

function compose() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function (x) {
    return fns.reduceRight(function (y, f) {
      return f(y);
    }, x);
  };
}

function curry(fn) {
  return function curried() {
    var _this = this;

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return args.length >= fn.length ? fn.apply(this, args) : function () {
      for (var _len3 = arguments.length, nextArgs = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        nextArgs[_key3] = arguments[_key3];
      }

      return curried.apply(_this, [].concat(args, nextArgs));
    };
  };
}

function isObject(value) {
  return {}.toString.call(value).includes('Object');
}

function isEmpty(obj) {
  return !Object.keys(obj).length;
}

function isFunction(value) {
  return typeof value === 'function';
}

function hasOwnProperty(object, property) {
  return Object.prototype.hasOwnProperty.call(object, property);
}

function validateChanges(initial, changes) {
  if (!isObject(changes)) errorHandler('changeType');
  if (Object.keys(changes).some(function (field) {
    return !hasOwnProperty(initial, field);
  })) errorHandler('changeField');
  return changes;
}

function validateSelector(selector) {
  if (!isFunction(selector)) errorHandler('selectorType');
}

function validateHandler(handler) {
  if (!(isFunction(handler) || isObject(handler))) errorHandler('handlerType');
  if (isObject(handler) && Object.values(handler).some(function (_handler) {
    return !isFunction(_handler);
  })) errorHandler('handlersType');
}

function validateInitial(initial) {
  if (!initial) errorHandler('initialIsRequired');
  if (!isObject(initial)) errorHandler('initialType');
  if (isEmpty(initial)) errorHandler('initialContent');
}

function throwError(errorMessages, type) {
  throw new Error(errorMessages[type] || errorMessages["default"]);
}

var errorMessages = {
  initialIsRequired: 'initial state is required',
  initialType: 'initial state should be an object',
  initialContent: 'initial state shouldn\'t be an empty object',
  handlerType: 'handler should be an object or a function',
  handlersType: 'all handlers should be a functions',
  selectorType: 'selector should be a function',
  changeType: 'provided value of changes should be an object',
  changeField: 'it seams you want to change a field in the state which is not specified in the "initial" state',
  "default": 'an unknown error accured in `state-local` package'
};
var errorHandler = curry(throwError)(errorMessages);
var validators = {
  changes: validateChanges,
  selector: validateSelector,
  handler: validateHandler,
  initial: validateInitial
};

function create(initial) {
  var handler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  validators.initial(initial);
  validators.handler(handler);
  var state = {
    current: initial
  };
  var didUpdate = curry(didStateUpdate)(state, handler);
  var update = curry(updateState)(state);
  var validate = curry(validators.changes)(initial);
  var getChanges = curry(extractChanges)(state);

  function getState() {
    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (state) {
      return state;
    };
    validators.selector(selector);
    return selector(state.current);
  }

  function setState(causedChanges) {
    compose(didUpdate, update, validate, getChanges)(causedChanges);
  }

  return [getState, setState];
}

function extractChanges(state, causedChanges) {
  return isFunction(causedChanges) ? causedChanges(state.current) : causedChanges;
}

function updateState(state, changes) {
  state.current = _objectSpread2(_objectSpread2({}, state.current), changes);
  return changes;
}

function didStateUpdate(state, handler, changes) {
  isFunction(handler) ? handler(state.current) : Object.keys(changes).forEach(function (field) {
    var _handler$field;

    return (_handler$field = handler[field]) === null || _handler$field === void 0 ? void 0 : _handler$field.call(handler, state.current[field]);
  });
  return changes;
}

var index = {
  create: create
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "./node_modules/@monaco-editor/react/dist/index.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/@monaco-editor/react/dist/index.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DiffEditor: () => (/* binding */ we),
/* harmony export */   Editor: () => (/* binding */ de),
/* harmony export */   "default": () => (/* binding */ Ft),
/* harmony export */   loader: () => (/* reexport safe */ _monaco_editor_loader__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   useMonaco: () => (/* binding */ Le)
/* harmony export */ });
/* harmony import */ var _monaco_editor_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @monaco-editor/loader */ "./node_modules/@monaco-editor/loader/lib/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
var le={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},v=le;var ae={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},Y=ae;function Me({children:e}){return react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{style:Y.container},e)}var Z=Me;var $=Z;function Ee({width:e,height:r,isEditorReady:n,loading:t,_ref:a,className:m,wrapperProps:E}){return react__WEBPACK_IMPORTED_MODULE_1__.createElement("section",{style:{...v.wrapper,width:e,height:r},...E},!n&&react__WEBPACK_IMPORTED_MODULE_1__.createElement($,null,t),react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{ref:a,style:{...v.fullWidth,...!n&&v.hide},className:m}))}var ee=Ee;var H=(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(ee);function Ce(e){(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(e,[])}var k=Ce;function he(e,r,n=!0){let t=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(!0);(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(t.current||!n?()=>{t.current=!1}:e,r)}var l=he;function D(){}function h(e,r,n,t){return De(e,t)||be(e,r,n,t)}function De(e,r){return e.editor.getModel(te(e,r))}function be(e,r,n,t){return e.editor.createModel(r,n,t?te(e,t):void 0)}function te(e,r){return e.Uri.parse(r)}function Oe({original:e,modified:r,language:n,originalLanguage:t,modifiedLanguage:a,originalModelPath:m,modifiedModelPath:E,keepCurrentOriginalModel:g=!1,keepCurrentModifiedModel:N=!1,theme:x="light",loading:P="Loading...",options:y={},height:V="100%",width:z="100%",className:F,wrapperProps:j={},beforeMount:A=D,onMount:q=D}){let[M,O]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),[T,s]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!0),u=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),c=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),w=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),d=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(q),o=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(A),b=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(!1);k(()=>{let i=_monaco_editor_loader__WEBPACK_IMPORTED_MODULE_0__["default"].init();return i.then(f=>(c.current=f)&&s(!1)).catch(f=>f?.type!=="cancelation"&&console.error("Monaco initialization: error:",f)),()=>u.current?I():i.cancel()}),l(()=>{if(u.current&&c.current){let i=u.current.getOriginalEditor(),f=h(c.current,e||"",t||n||"text",m||"");f!==i.getModel()&&i.setModel(f)}},[m],M),l(()=>{if(u.current&&c.current){let i=u.current.getModifiedEditor(),f=h(c.current,r||"",a||n||"text",E||"");f!==i.getModel()&&i.setModel(f)}},[E],M),l(()=>{let i=u.current.getModifiedEditor();i.getOption(c.current.editor.EditorOption.readOnly)?i.setValue(r||""):r!==i.getValue()&&(i.executeEdits("",[{range:i.getModel().getFullModelRange(),text:r||"",forceMoveMarkers:!0}]),i.pushUndoStop())},[r],M),l(()=>{u.current?.getModel()?.original.setValue(e||"")},[e],M),l(()=>{let{original:i,modified:f}=u.current.getModel();c.current.editor.setModelLanguage(i,t||n||"text"),c.current.editor.setModelLanguage(f,a||n||"text")},[n,t,a],M),l(()=>{c.current?.editor.setTheme(x)},[x],M),l(()=>{u.current?.updateOptions(y)},[y],M);let L=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{if(!c.current)return;o.current(c.current);let i=h(c.current,e||"",t||n||"text",m||""),f=h(c.current,r||"",a||n||"text",E||"");u.current?.setModel({original:i,modified:f})},[n,r,a,e,t,m,E]),U=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{!b.current&&w.current&&(u.current=c.current.editor.createDiffEditor(w.current,{automaticLayout:!0,...y}),L(),c.current?.editor.setTheme(x),O(!0),b.current=!0)},[y,x,L]);(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{M&&d.current(u.current,c.current)},[M]),(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{!T&&!M&&U()},[T,M,U]);function I(){let i=u.current?.getModel();g||i?.original?.dispose(),N||i?.modified?.dispose(),u.current?.dispose()}return react__WEBPACK_IMPORTED_MODULE_1__.createElement(H,{width:z,height:V,isEditorReady:M,loading:P,_ref:w,className:F,wrapperProps:j})}var ie=Oe;var we=(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(ie);function Pe(){let[e,r]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_monaco_editor_loader__WEBPACK_IMPORTED_MODULE_0__["default"].__getMonacoInstance());return k(()=>{let n;return e||(n=_monaco_editor_loader__WEBPACK_IMPORTED_MODULE_0__["default"].init(),n.then(t=>{r(t)})),()=>n?.cancel()}),e}var Le=Pe;function He(e){let r=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();return (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{r.current=e},[e]),r.current}var se=He;var _=new Map;function Ve({defaultValue:e,defaultLanguage:r,defaultPath:n,value:t,language:a,path:m,theme:E="light",line:g,loading:N="Loading...",options:x={},overrideServices:P={},saveViewState:y=!0,keepCurrentModel:V=!1,width:z="100%",height:F="100%",className:j,wrapperProps:A={},beforeMount:q=D,onMount:M=D,onChange:O,onValidate:T=D}){let[s,u]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),[c,w]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!0),d=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),o=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),b=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),L=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(M),U=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(q),I=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(),i=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(t),f=se(m),Q=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(!1),B=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(!1);k(()=>{let p=_monaco_editor_loader__WEBPACK_IMPORTED_MODULE_0__["default"].init();return p.then(R=>(d.current=R)&&w(!1)).catch(R=>R?.type!=="cancelation"&&console.error("Monaco initialization: error:",R)),()=>o.current?pe():p.cancel()}),l(()=>{let p=h(d.current,e||t||"",r||a||"",m||n||"");p!==o.current?.getModel()&&(y&&_.set(f,o.current?.saveViewState()),o.current?.setModel(p),y&&o.current?.restoreViewState(_.get(m)))},[m],s),l(()=>{o.current?.updateOptions(x)},[x],s),l(()=>{!o.current||t===void 0||(o.current.getOption(d.current.editor.EditorOption.readOnly)?o.current.setValue(t):t!==o.current.getValue()&&(B.current=!0,o.current.executeEdits("",[{range:o.current.getModel().getFullModelRange(),text:t,forceMoveMarkers:!0}]),o.current.pushUndoStop(),B.current=!1))},[t],s),l(()=>{let p=o.current?.getModel();p&&a&&d.current?.editor.setModelLanguage(p,a)},[a],s),l(()=>{g!==void 0&&o.current?.revealLine(g)},[g],s),l(()=>{d.current?.editor.setTheme(E)},[E],s);let X=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{if(!(!b.current||!d.current)&&!Q.current){U.current(d.current);let p=m||n,R=h(d.current,t||e||"",r||a||"",p||"");o.current=d.current?.editor.create(b.current,{model:R,automaticLayout:!0,...x},P),y&&o.current.restoreViewState(_.get(p)),d.current.editor.setTheme(E),g!==void 0&&o.current.revealLine(g),u(!0),Q.current=!0}},[e,r,n,t,a,m,x,P,y,E,g]);(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{s&&L.current(o.current,d.current)},[s]),(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{!c&&!s&&X()},[c,s,X]),i.current=t,(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{s&&O&&(I.current?.dispose(),I.current=o.current?.onDidChangeModelContent(p=>{B.current||O(o.current.getValue(),p)}))},[s,O]),(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{if(s){let p=d.current.editor.onDidChangeMarkers(R=>{let G=o.current.getModel()?.uri;if(G&&R.find(J=>J.path===G.path)){let J=d.current.editor.getModelMarkers({resource:G});T?.(J)}});return()=>{p?.dispose()}}return()=>{}},[s,T]);function pe(){I.current?.dispose(),V?y&&_.set(m,o.current.saveViewState()):o.current.getModel()?.dispose(),o.current.dispose()}return react__WEBPACK_IMPORTED_MODULE_1__.createElement(H,{width:z,height:F,isEditorReady:s,loading:N,_ref:b,className:j,wrapperProps:A})}var fe=Ve;var de=(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(fe);var Ft=de;
//# sourceMappingURL=index.mjs.map

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************************!*\
  !*** ./src/js/filesmanager.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _monaco_editor_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @monaco-editor/react */ "./node_modules/@monaco-editor/react/dist/index.mjs");
/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Icons */ "./src/js/Icons.js");

// Index.js



 // Import Snackbar component



// import './output.css';

const ajaxurl = filemanager.ajaxurl;
const abspath = filemanager.abspath;
const fetchDirectoryContents = (dirPath, setContents, sortContents) => {
  fetch(ajaxurl, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({
      action: "get_directory_contents",
      path: dirPath,
      verify_nonce: filemanager.DPDEV_nonce
    }).toString()
  }).then(response => response.json()).then(data => {
    if (data.success) {
      setContents(sortContents(data.data));
    }
  }).catch(error => console.error("Error:", error));
};
const UploadFilesModal = ({
  selectedDirPath,
  onUpload
}) => {
  const [isOpen, setOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);
  const handleFilesDrop = files => {
    console.log("Dropped files:", files);
    onUpload(selectedDirPath, files);
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: "secondary",
    onClick: openModal
  }, "Upload Files"), isOpen && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Modal, {
    className: "w-full max-w-[800px]",
    title: "Upload Files",
    size: "large",
    onRequestClose: closeModal
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      background: "#e7ecef",
      padding: 16,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--pri)",
      minHeight: "200px" // Set a minimum height
    }
  }, "Drop files here", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.DropZone, {
    onFilesDrop: handleFilesDrop
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex justify-between items-center gap-lg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    className: "mt-md",
    variant: "secondary",
    onClick: closeModal
  }, "Close"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Uploading a file or folder will override the current one if it exists."))));
};

// Add two functions to handle the creation of files and folders
const handleCreateFile = (currentDirPath, setContents, sortContents, setUploadStatus) => {
  const effectivePath = currentDirPath || "/";
  const fileName = window.prompt("Enter the name for the new file:");
  if (fileName) {
    fetch(ajaxurl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams({
        action: "create_file",
        path: effectivePath,
        fileName: fileName,
        verify_nonce: filemanager.DPDEV_nonce
      }).toString()
    }).then(response => response.json()).then(data => {
      const message = data.message || (data.success ? "File created successfully." : "Failed to create file.");
      setUploadStatus({
        show: true,
        message: message
      }); // Correctly use message here
      setTimeout(() => setUploadStatus({
        show: false,
        message: ""
      }), 3000);
      if (data.success) {
        console.log("File created successfully:", data.message);
        fetchDirectoryContents(currentDirPath, setContents, sortContents);
      }
    }).catch(error => console.error("Error creating file:", error));
  }
};
const handleCreateFolder = (currentDirPath, setContents, sortContents, setUploadStatus) => {
  const effectivePath = currentDirPath || "/";
  const folderName = window.prompt("Enter the name for the new folder:");
  if (folderName) {
    fetch(ajaxurl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams({
        action: "create_folder",
        path: effectivePath,
        folderName: folderName,
        verify_nonce: filemanager.DPDEV_nonce
      }).toString()
    }).then(response => response.json()).then(data => {
      const message = data.message || (data.success ? "Folder created successfully." : "Failed to create folder.");
      setUploadStatus({
        show: true,
        message: message
      }); // Correctly use message here
      setTimeout(() => setUploadStatus({
        show: false,
        message: ""
      }), 3000);
      if (data.success) {
        console.log("Folder created successfully:", data.message);
        fetchDirectoryContents(currentDirPath, setContents, sortContents);
      }
    }).catch(error => console.error("Error creating folder:", error));
  }
};
const getLanguageFromExtension = filename => {
  const extension = filename.split(".").pop();
  switch (extension) {
    case "js":
      return "javascript";
    case "json":
      return "json";
    case "html":
      return "html";
    case "css":
      return "css";
    case "php":
      return "php";
    case "md":
      return "md";
    // Add more cases as needed
    default:
      return "plaintext";
  }
};
const escapeContentForSave = content => {
  // Replace backslashes with double backslashes
  return content.replace(/\\/g, "\\\\");
};
const unescapeContentForEdit = content => {
  // Replace double backslashes with single backslash
  return content.replace(/\\\\/g, "\\");
};
const FileContentTab = ({
  content,
  onSave,
  onNavigate,
  onEditStateChange
}) => {
  const [editedContent, setEditedContent] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(content.contents);
  const [isEdited, setIsEdited] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(content.isEdited);
  const [showSnackbar, setShowSnackbar] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const language = getLanguageFromExtension(content.name);
  const [isFullscreen, setIsFullscreen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const editorRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)(null); // Reference to access the editor instance

  const handleSave = () => {
    onSave(content.path, editedContent);
    setShowSnackbar(true);
    setTimeout(() => setShowSnackbar(false), 3000);
    setIsEdited(false); // Reset isEdited to false after saving
  };

  // Function to remove absolute path from file path
  const removeAbsPath = (contentPath, absPath) => {
    if (contentPath.startsWith(absPath)) {
      return contentPath.substring(absPath.length);
    } else {
      return contentPath;
    }
  };

  // Function to append absolute path to file path
  const addAbsPath = (contentPath, absPath) => {
    if (contentPath.startsWith(absPath)) {
      return contentPath;
    } else {
      return `${absPath}${contentPath}`;
    }
  };

  // Function to create breadcrumb from file path
  const createBreadcrumb = (path, onNavigate) => {
    const parts = path.split("/").filter(part => part);
    return parts.map((part, index) => {
      // Construct the path up to this part
      const pathToPart = "/" + parts.slice(0, index + 1).join("/");
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
        key: index,
        onClick: () => onNavigate(addAbsPath(pathToPart, abspath))
      }, index > 0 && " / ", part);
    });
  };
  const breadcrumb = createBreadcrumb(removeAbsPath(content.path, abspath), onNavigate);
  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  // Function to update the editor layout
  const updateEditorLayout = () => {
    if (editorRef.current) {
      editorRef.current.layout();
    }
  };

  // Call updateEditorLayout whenever isFullscreen changes
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    updateEditorLayout();
  }, [isFullscreen]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const handleKeyDown = event => {
      if ((event.ctrlKey || event.metaKey) && event.key === "s") {
        event.preventDefault();
        handleSave();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [editedContent, handleSave]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    onEditStateChange(isEdited); // Call the callback with the current edit state
  }, [isEdited]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setEditedContent(content.contents);
    // Optionally reset editor state (cursor position, selections, etc.) here
  }, [content]);
  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor;
    // You can also set or reset editor state here
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `tab relative  ${isFullscreen ? "!fixed w-full h-full min-h-full left-0 top-0 z-[100000] fullscreen" : ""}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex items-center flex-wrap justify-between bg-base border-0 border-b border-solid border-b-[lightgrey] p-sm"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "ml-2" // Add additional classes as needed for styling
    ,
    onClick: toggleFullscreen
  }, isFullscreen ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Icons__WEBPACK_IMPORTED_MODULE_4__.CloseFullScrennIcon, null) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Icons__WEBPACK_IMPORTED_MODULE_4__.OpenFullScrennIcon, null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, breadcrumb), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: "primary",
    onClick: handleSave
  }, "Save File")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_monaco_editor_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: content.path // Use the content's unique identifier as key
    ,
    height: "calc(100vh - 250px)",
    language: getLanguageFromExtension(content.name),
    value: editedContent // Control the editor content
    ,
    onChange: newContent => {
      setEditedContent(newContent);
      setIsEdited(true); // Ensure this is correctly setting the state
    },
    editorDidMount: handleEditorDidMount,
    options: {
      minimap: {
        enabled: false
      },
      bracketPairColorization: true,
      cursorStyle: "line",
      tabSize: 4,
      automaticLayout: true,
      folding: true,
      showUnused: true,
      fontSize: "16px",
      wordWrap: "on",
      wrappingStrategy: "advanced"
    }
  }), showSnackbar && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      position: "absolute",
      bottom: "10px",
      right: "10px",
      zIndex: 1000 // Ensure it's above other elements
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Snackbar, null, "File saved successfully.")));
};
const ContextMenu = ({
  x,
  y,
  onRename,
  onDelete,
  onCompress,
  onUncompress,
  onCut,
  onCopy,
  onPaste,
  onDownload,
  onEdit,
  onRefresh
}) => {
  const style = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    // Get the #wpbody element
    const wpbody = document.querySelector("#wpbody");

    // Get the bounding rectangle of #wpbody
    const rect = wpbody.getBoundingClientRect();

    // Calculate the adjusted position
    // Subtract #wpbody's top and left from the click coordinates
    // Add any scroll offsets inside #wpbody if it's scrollable
    const adjustedX = x - rect.left + wpbody.scrollLeft - 15;
    const adjustedY = y - rect.top + wpbody.scrollTop - 15;
    return {
      position: "absolute",
      top: `${adjustedY}px`,
      left: `${adjustedX}px`,
      zIndex: 1000 // Ensure it appears above other elements
    };
  }, [x, y]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "context-menu",
    style: style
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.MenuGroup, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {
    onClick: onCut
  }, "Cut"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {
    onClick: onCopy
  }, "Copy"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {
    onClick: onPaste
  }, "Paste"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "show-hide-edit"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {
    onClick: onEdit
  }, "Edit")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "w-full h-[1px] bg-[#e2e2e2] block"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {
    onClick: onRename
  }, "Rename"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "w-full h-[1px] bg-[#e2e2e2] block"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "show-hide-compress"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {
    onClick: onCompress
  }, "Compress")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "show-hide-uncompress"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {
    onClick: onUncompress
  }, "Uncompress")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {
    onClick: onRefresh
  }, "Refresh"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {
    onClick: onDownload
  }, "Download"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "w-full h-[1px] bg-[#e2e2e2] block"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "[&_*]:text-[#cf3f3f]"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {
    onClick: onDelete
  }, "Delete"))));
};
const Directory = ({
  dir,
  onSelect
}) => {
  const [isOpen, setIsOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const handleClick = () => {
    if (dir.subDirs && dir.subDirs.length > 0) {
      setIsOpen(!isOpen);
    }
    onSelect(dir); // Make sure this updates selectedDir state
  };
  if (dir.isFile) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      className: "file-item"
    }, dir.name);
  }
  const hasSubDirectories = dir.subDirs && dir.subDirs.length > 0;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    className: "directory-item"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex gap-sm my-md items-center"
  }, hasSubDirectories && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    onClick: handleClick,
    "aria-expanded": isOpen,
    className: "directory-toggle"
  }, isOpen ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Icons__WEBPACK_IMPORTED_MODULE_4__.CloseIcon, null) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Icons__WEBPACK_IMPORTED_MODULE_4__.OpenIcon, null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Icons__WEBPACK_IMPORTED_MODULE_4__.FolderIcon, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `directory-name ${hasSubDirectories ? "" : "no-subdirectories"}`,
    onClick: handleClick
  }, dir.name)), isOpen && hasSubDirectories && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", null, dir.subDirs.map((subDir, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Directory, {
    key: index,
    dir: subDir,
    onSelect: onSelect
  }))));
};
const Sidebar = ({
  onSelect
}) => {
  const [directories, setDirectories] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    fetch(ajaxurl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams({
        action: "get_directories",
        verify_nonce: filemanager.DPDEV_nonce
      }).toString()
    }).then(response => response.json()).then(data => {
      // console.log("Response Data (Directories):", data); // Log the response data for directories
      if (data.success) {
        setDirectories(data.data);
      }
    }).catch(error => console.error("Error:", error));
  }, []);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    id: "sidebar",
    className: "w-[250px] !mt-lg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    onClick: () => onSelect({
      path: "/"
    })
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex items-center gap-[8px] my-md cursor-pointer"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Icons__WEBPACK_IMPORTED_MODULE_4__.HomeIcon, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Icons__WEBPACK_IMPORTED_MODULE_4__.FolderIcon, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, "Home"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", null, directories.map((dir, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Directory, {
    key: index,
    dir: dir,
    onSelect: onSelect
  }))));
};
const Files = ({
  selectedDir,
  onSelect,
  openTabs,
  onOpenTab,
  onCloseTab
}) => {
  const [cutCopyState, setCutCopyPath] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)({
    path: "none",
    cutOrCopy: ""
  });
  const [contents, setContents] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const isNotRoot = selectedDir.path && selectedDir.path !== "/";
  const [isLoading, setIsLoading] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const [selectedRow, setSelectedRow] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const [showUploadSuccess, setShowUploadSuccess] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const handleRowClick = index => {
    setSelectedRow(index);
  };
  const [uploadStatus, setUploadStatus] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)({
    show: false,
    message: ""
  });
  const [contextMenu, setContextMenu] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)({
    visible: false,
    x: 0,
    y: 0,
    item: null
  });
  const sortContents = contents => {
    return contents.sort((a, b) => {
      if (a.isFile && !b.isFile) return 1;
      if (!a.isFile && b.isFile) return -1;
      return a.name.localeCompare(b.name);
    });
  };
  const refreshDirectoryContents = () => {
    fetchDirectoryContents(selectedDir.path, setContents, sortContents);
  };

  // Handle right click
  const handleRightClick = (event, item, index) => {
    event.preventDefault();
    setContextMenu({
      visible: true,
      x: event.clientX,
      y: event.clientY,
      item
    });
    setSelectedRow(index);
  };
  const handleRename = () => {
    if (contextMenu.item) {
      const newName = prompt("Enter new name", contextMenu.item.name);
      if (newName && newName !== contextMenu.item.name) {
        fetch(ajaxurl, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          body: new URLSearchParams({
            action: "rename_item",
            // The action name in your PHP AJAX handler
            path: contextMenu.item.path,
            // Current path of the item
            newName: newName,
            // New name for the item
            verify_nonce: filemanager.DPDEV_nonce
          }).toString()
        }).then(response => response.json()).then(data => {
          const message = data.message || (data.success ? "File renamed successfully." : "Failed to rename file.");
          setUploadStatus({
            show: true,
            message: message
          }); // Use the message from the response
          setTimeout(() => setUploadStatus({
            show: false,
            message: ""
          }), 3000); // Hide after 3 seconds
          if (data.success) {
            // Update the contents array to reflect the renamed item
            setContents(contents => contents.map(content => {
              if (content.path === contextMenu.item.path) {
                let newPath = contextMenu.item.path.split(content.name)[0];
                return {
                  ...content,
                  name: newName,
                  path: newPath + newName
                };
              }
              return content;
            }));
            console.log("Item renamed successfully");
          }
        }).catch(error => console.error("Error:", error));
      }
      setContextMenu({
        visible: false,
        x: 0,
        y: 0,
        item: null
      });
    }
  };
  const handleDelete = () => {
    if (contextMenu.item) {
      if (window.confirm("Are you sure, you want to delete " + contextMenu.item.name + "?")) {
        fetch(ajaxurl, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          body: new URLSearchParams({
            action: "delete_item",
            // The action name in your PHP AJAX handler
            path: contextMenu.item.path,
            // Path of the item to be deleted
            verify_nonce: filemanager.DPDEV_nonce
          }).toString()
        }).then(response => response.json()).then(data => {
          const message = data.success ? "File deleted successfully." : data.message;
          setUploadStatus({
            show: true,
            message: message
          }); // Use the message from the response
          setTimeout(() => setUploadStatus({
            show: false,
            message: ""
          }), 3000); // Hide after 3 seconds
          if (data.success) {
            // Remove the deleted item from the contents array
            setContents(contents => contents.filter(content => content.path !== contextMenu.item.path));
            console.log("Item deleted successfully");
          }
        }).catch(error => console.error("Error:", error));
      }
      setContextMenu({
        visible: false,
        x: 0,
        y: 0,
        item: null
      });
    }
  };
  const handleCompress = (item, refresh) => {
    if (!item || !item.path) {
      console.error("Invalid item or path for compression");
      return;
    }
    fetch(ajaxurl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams({
        action: "compress_item",
        path: item.path,
        verify_nonce: filemanager.DPDEV_nonce
      }).toString()
    }).then(response => response.json()).then(data => {
      const message = data.message || (data.success ? "File compressed successfully." : "Failed to compress file.");
      setUploadStatus({
        show: true,
        message: message
      }); // Use the message from the response
      setTimeout(() => setUploadStatus({
        show: false,
        message: ""
      }), 3000); // Hide after 3 seconds
      if (data.success) {
        console.log("Compression successful:", data.message);
        refresh(); // Refresh directory contents
      } else {
        console.error("Failed to compress item:", data.message);
      }
    }).catch(error => console.error("Error in compression:", error));
    setContextMenu({
      visible: false,
      x: 0,
      y: 0,
      item: null
    });
  };
  const handleUncompress = (item, refresh) => {
    if (!item || !item.path) {
      console.error("Invalid item or path for uncompression");
      return;
    }
    if (!window.confirm("Please note that uncompress will replace the files and folders with same names")) {
      setContextMenu({
        visible: false,
        x: 0,
        y: 0,
        item: null
      });
      return;
    }
    fetch(ajaxurl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams({
        action: "uncompress_item",
        path: item.path,
        renameIfExists: true,
        // Indicate that the server should rename the file if it exists
        verify_nonce: filemanager.DPDEV_nonce
      }).toString()
    }).then(response => response.json()).then(data => {
      const message = data.message || (data.success ? "File extracted successfully." : "Failed to extract file.");
      setUploadStatus({
        show: true,
        message: message
      }); // Use the message from the response
      setTimeout(() => setUploadStatus({
        show: false,
        message: ""
      }), 3000); // Hide after 3 seconds
      if (data.success) {
        console.log("Uncompression successful:", data.message);
        refresh(); // Refresh directory contents
      } else {
        console.error("Failed to uncompress item:", data.message);
      }
    }).catch(error => console.error("Error in uncompression:", error));
    setContextMenu({
      visible: false,
      x: 0,
      y: 0,
      item: null
    });
  };
  const handleCut = (item, refresh) => {
    if (!item || !item.path) {
      console.error("Invalid item or path for cut");
      return;
    }
    setCutCopyPath({
      path: item.path,
      cutOrCopy: "cut"
    });
    setUploadStatus({
      show: true,
      message: "File(s) Copied"
    }); // Use the message from the response
    setContextMenu({
      visible: false,
      x: 0,
      y: 0,
      item: null
    });
    setTimeout(() => setUploadStatus({
      show: false,
      message: ""
    }), 3000); // Hide after 3 seconds
  };
  const handleRefresh = (item, refresh) => {
    if (!item || !item.path) {
      console.error("Invalid item or path for cut");
      return;
    }
    refresh();
    setContextMenu({
      visible: false,
      x: 0,
      y: 0,
      item: null
    });
  };
  const handleCopy = (item, refresh) => {
    if (!item || !item.path) {
      console.error("Invalid item or path for copy");
      return;
    }
    setCutCopyPath({
      path: item.path,
      cutOrCopy: "copy"
    });
    setUploadStatus({
      show: true,
      message: "File(s) Copied"
    }); // Use the message from the response
    setContextMenu({
      visible: false,
      x: 0,
      y: 0,
      item: null
    });
    setTimeout(() => setUploadStatus({
      show: false,
      message: ""
    }), 3000); // Hide after 3 seconds
  };
  const handlePaste = (item, refresh) => {
    if (!item || !item.path || cutCopyState.path == "none") {
      console.error("Invalid item or path for cut");
      return;
    }
    setUploadStatus({
      show: true,
      message: "Pasting..."
    }); // Use the message from the response
    fetch(ajaxurl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams({
        action: "paste_item",
        path: item.path,
        origin_path: cutCopyState.path,
        origin_action: cutCopyState.cutOrCopy,
        verify_nonce: filemanager.DPDEV_nonce
      }).toString()
    }).then(response => response.json()).then(data => {
      const message = data.success ? "File(s) pasted successfully." : "Failed to paste file(s).";
      setCutCopyPath({
        path: "none",
        cutOrCopy: ""
      });
      setUploadStatus({
        show: true,
        message
      });
      setTimeout(() => setUploadStatus({
        show: false,
        message: ""
      }), 3000); // Hide after 3 seconds
      setContextMenu({
        visible: false,
        x: 0,
        y: 0,
        item: null
      });
      if (data.success) {
        refresh(); // Refresh directory contents
      }
    }).catch(error => console.error("Error in paste:", error));
  };
  const handleDownload = (item, refresh) => {
    if (!item || !item.path) {
      console.error("Invalid item or path for download");
      return;
    }
    setUploadStatus({
      show: true,
      message: "Downloading..."
    });
    fetch(ajaxurl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams({
        action: "download_item",
        path: item.path,
        verify_nonce: filemanager.DPDEV_nonce
      }).toString()
    }).then(response => response.json()).then(data => {
      setUploadStatus({
        show: false,
        message: ""
      });
      if (data.success && data.data.fileUrl) {
        // Extract the filename from the URL
        const filename = data.data.fileUrl.split("/").pop();

        // Initiate file download
        const link = document.createElement("a");
        link.href = data.data.fileUrl;
        link.download = filename; // Set the download attribute to the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setUploadStatus({
          show: true,
          message: "File(s) downloaded successfully."
        });
        setTimeout(() => setUploadStatus({
          show: false,
          message: ""
        }), 3000);
      } else {
        setUploadStatus({
          show: true,
          message: "Failed to download file(s)."
        });
        setTimeout(() => setUploadStatus({
          show: false,
          message: ""
        }), 3000);
      }
      setContextMenu({
        visible: false,
        x: 0,
        y: 0,
        item: null
      });
      if (data.success) {
        refresh(); // Refresh directory contents
      }
    }).catch(error => console.error("Error in download:", error));
  };
  const handleEdit = item => {
    const hasExtension = /\.(jpg|zip|png|gif|jpeg|ico|pdf|doc|docx|ppt|pptx|pps|ppsx|odt|xls|xlsx|psd|mp3|m4a|ogg|wav|mp4|m4v|mov|wmv|avi|mpg|ogv|3gp|3g2)$/i.test(item.name);
    if (hasExtension) {
      return;
    }
    if (item.isFile) {
      fetch(ajaxurl, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
          action: "get_file_contents",
          path: item.path,
          verify_nonce: filemanager.DPDEV_nonce
        }).toString()
      }).then(response => response.json()).then(data => {
        if (data.success) {
          const updatedItem = {
            ...item,
            //contents: unescapeContentForEdit(data.data.contents),
            contents: data.data.contents.replace(/SLASH/g, "\\"),
            isEditing: true // Set editing state to true for this file
          };
          onOpenTab(updatedItem);
        } else {
          console.error("Failed to fetch file contents:", data);
        }
      }).catch(error => console.error("Error fetching file contents:", error));
    } else {
      onSelect(item);
    }
  };
  const handleDoubleClick = item => {
    const hasExtension = /\.(jpg|zip|png|gif|jpeg|ico|pdf|doc|docx|ppt|pptx|pps|ppsx|odt|xls|xlsx|psd|mp3|m4a|ogg|wav|mp4|m4v|mov|wmv|avi|mpg|ogv|3gp|3g2)$/i.test(item.name);
    if (hasExtension) {
      return;
    }
    if (item.isFile) {
      fetch(ajaxurl, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
          action: "get_file_contents",
          path: item.path,
          verify_nonce: filemanager.DPDEV_nonce
        }).toString()
      }).then(response => response.json()).then(data => {
        if (data.success) {
          const updatedItem = {
            ...item,
            //contents: unescapeContentForEdit(data.data.contents),
            contents: data.data.contents.replace(/SLASH/g, "\\"),
            isEditing: true // Set editing state to true for this file
          };
          onOpenTab(updatedItem);
        } else {
          console.error("Failed to fetch file contents:", data);
        }
      }).catch(error => console.error("Error fetching file contents:", error));
    } else {
      onSelect(item);
    }
  };
  const handleGoUp = () => {
    const pathParts = selectedDir.path.split("/").filter(Boolean);
    if (pathParts.length > 0) {
      pathParts.pop(); // Remove the last segment of the path
      const newPath = pathParts.length === 0 ? "/" : "/" + pathParts.join("/");
      onSelect({
        ...selectedDir,
        path: newPath
      });
    }
  };
  const handleSelect = item => {
    if (activeTab !== "files" && openTabs.length > 1) {
      // If there are open tabs other than "Files" and some other tab is active
      setActiveTab("files"); // Set the "Files" tab as active
    }
    onSelect(item);
  };
  const handleUploadFiles = (path, files) => {
    // Implement your file upload logic here
    // This can be an API call to your server with the files and the target path
    console.log("Uploading files to", path, files);
  };
  const handleFileDrop = (selectedDirPath, files) => {
    const formData = new FormData();
    formData.append("action", "upload_file"); // This should match the PHP handler
    formData.append("path", selectedDirPath);
    formData.append("verify_nonce", filemanager.DPDEV_nonce);
    formData.append("file", files[0]);
    console.log("Sending AJAX request to", ajaxurl);
    fetch(ajaxurl, {
      method: "POST",
      body: formData
    }).then(response => response.json()).then(data => {
      console.log("Response:", data);
      // Directly use the response message, regardless of success or failure
      const message = data.message || (data.success ? "File uploaded successfully." : "Failed to upload file.");
      fetchDirectoryContents(selectedDirPath, setContents, sortContents);
      setUploadStatus({
        show: true,
        message: message
      }); // Use the message from the response
      setTimeout(() => setUploadStatus({
        show: false,
        message: ""
      }), 3000); // Hide after 3 seconds
    }).catch(error => {
      console.error("Error:", error);
      // Handle any errors that might occur during the fetch operation
      setUploadStatus({
        show: true,
        message: "An error occurred during the upload."
      });
      setTimeout(() => setUploadStatus({
        show: false,
        message: ""
      }), 3000);
    });
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (selectedDir) {
      setIsLoading(true); // Set loading to true when starting to fetch
      fetch(ajaxurl, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
          action: "get_directory_contents",
          path: selectedDir.path,
          verify_nonce: filemanager.DPDEV_nonce
        }).toString()
      }).then(response => response.json()).then(data => {
        if (data.success) {
          setContents(sortContents(data.data));
        }
        setIsLoading(false); // Set loading to false after fetching
      }).catch(error => {
        console.error("Error:", error);
        setIsLoading(false); // Ensure loading is set to false even on error
      });
    } else {
      setIsLoading(false); // If no selectedDir, set loading to false
    }
  }, [selectedDir]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const handleOutsideClick = event => {
      if (contextMenu.visible && !event.target.closest(".context-menu")) {
        setContextMenu({
          visible: false,
          x: 0,
          y: 0,
          item: null
        });
      }
    };
    if (contextMenu.visible && contextMenu.item !== null) {
      var uncompressElement = document.querySelector(".show-hide-uncompress");
      var compressElement = document.querySelector(".show-hide-compress");
      var editElement = document.querySelector(".show-hide-edit");
      if (!contextMenu.item.name.includes(".zip")) {
        uncompressElement.style.display = "none";
        compressElement.style.display = "block";
        editElement.style.display = "block";
      } else {
        uncompressElement.style.display = "block";
        compressElement.style.display = "none";
        editElement.style.display = "none";
      }
      if (!contextMenu.item.isFile) {
        editElement.style.display = "none";
      }
    }
    if (contextMenu.visible) {
      document.addEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [contextMenu.visible]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "files"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "file-creation-buttons border-0 border-b border-solid border-border p-sm flex gap-sm justify-end"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: "secondary",
    onClick: () => handleCreateFile(selectedDir.path, setContents, sortContents, setUploadStatus)
  }, "Create File"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: "secondary",
    onClick: () => handleCreateFolder(selectedDir.path, setContents, sortContents, setUploadStatus)
  }, "Create Folder"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(UploadFilesModal, {
    selectedDirPath: selectedDir.path,
    onUpload: handleFileDrop,
    setContents: setContents,
    sortContents: sortContents
  })), isLoading && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Spinner, null), !isLoading && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
    className: "w-full border-collapse"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("thead", {
    className: "table-border"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    className: "text-left p-md"
  }, "Name"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    className: "text-left"
  }, "Permissions"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    className: "text-left"
  }, "Size"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    className: "text-left"
  }, "Last Modified"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", null, isNotRoot && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    className: "table-border py-sm"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "folder-item",
    onDoubleClick: () => {
      const separator = selectedDir.path.includes("\\") ? "\\" : "/";
      const parts = selectedDir.path.split(separator);
      const parentDir = parts.slice(0, -1).join(separator);
      if (abspath === parentDir) {
        onSelect({
          path: "/"
        });
      } else {
        onSelect({
          path: parentDir
        });
      }
    }
  }, "...")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    className: "table-border py-sm"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    className: "table-border py-sm"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    className: "table-border py-sm"
  })), contents.map((content, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
    key: index,
    onClick: () => handleRowClick(index),
    onContextMenu: e => handleRightClick(e, content, index),
    onDoubleClick: () => handleDoubleClick(content),
    className: `cursor-pointer hover:bg-active ${selectedRow === index ? "bg-active outline outline-offset-2 outline-border-active" : ""}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    className: "table-border py-sm"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: content.isFile ? "file-item" : "folder-item"
  }, content.name)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    className: "table-border py-sm"
  }, content.permissions), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    className: "table-border py-sm"
  }, content.isFile ? `${content.size} KB` : "–"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    className: "table-border py-sm"
  }, content.lastModified)))))), contextMenu.visible && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ContextMenu, {
    x: contextMenu.x,
    y: contextMenu.y,
    onRename: handleRename,
    onDelete: handleDelete,
    onCompress: () => handleCompress(contextMenu.item, refreshDirectoryContents),
    onUncompress: () => handleUncompress(contextMenu.item, refreshDirectoryContents),
    onCut: () => handleCut(contextMenu.item, refreshDirectoryContents),
    onRefresh: () => handleRefresh(contextMenu.item, refreshDirectoryContents),
    onCopy: () => handleCopy(contextMenu.item, refreshDirectoryContents),
    onPaste: () => handlePaste(contextMenu.item, refreshDirectoryContents),
    onDownload: () => handleDownload(contextMenu.item, refreshDirectoryContents),
    onEdit: () => handleEdit(contextMenu.item)
  }), uploadStatus.show && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      position: "fixed",
      bottom: "10px",
      right: "10px",
      zIndex: 1000000 // Ensure it's above other elements
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Snackbar, null, uploadStatus.message)));
};
const FileManager = () => {
  const [selectedDir, setSelectedDir] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)({
    path: ""
  }); // Use useState here
  const [contents, setContents] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)([]); // And here
  const [openTabs, setOpenTabs] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const [activeTab, setActiveTab] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)("files"); // Track the active tab

  // Function to handle directory selection
  const onSelectDirectory = dir => {
    setSelectedDir({
      path: dir.path
    });
    setActiveTab("files"); // Set the "Files" tab as active when a directory is selected from the sidebar
  };

  // Define the sortContents function
  const sortContents = contents => {
    return contents.sort((a, b) => {
      if (a.isFile && !b.isFile) return 1;
      if (!a.isFile && b.isFile) return -1;
      return a.name.localeCompare(b.name); // Sort by name
    });
  };
  const handleOpenTab = content => {
    if (!openTabs.find(tab => tab.path === content.path)) {
      const newTabs = [...openTabs, content];
      setOpenTabs(newTabs);
      setActiveTab(content.path); // Set the newly opened tab as active
    }
  };
  const handleCloseTab = content => {
    const tabToClose = openTabs.find(tab => tab.path === content.path);
    if (tabToClose && tabToClose.isEdited) {
      if (!window.confirm(`You have unsaved changes in "${content.name}". Are you sure you want to close this tab?`)) {
        return; // Exit the function if the user cancels
      }
    }

    // Proceed to close the tab if there are no unsaved changes or the user confirms
    const newTabs = openTabs.filter(tab => tab.path !== content.path);
    setOpenTabs(newTabs);
    if (activeTab === content.path) {
      setActiveTab("files");
    }
  };
  const handleSaveFile = (path, newContents) => {
    fetch(ajaxurl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams({
        action: "save_file_contents",
        path: path,
        contents: newContents,
        verify_nonce: filemanager.DPDEV_nonce
      }).toString()
    }).then(response => response.json()).then(data => {
      if (data.success) {
        console.log("File saved successfully");
        setOpenTabs(tabs => tabs.map(tab => tab.path === path ? {
          ...tab,
          contents: newContents,
          isEdited: false
        } : tab));
      } else {
        console.error("Failed to save file:", data);
      }
    }).catch(error => console.error("Error saving file:", error));
  };
  const renderTabContent = () => {
    const activeTabContent = openTabs.find(tab => tab.path === activeTab);
    if (activeTab === "files") {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Files, {
        selectedDir: selectedDir,
        onSelect: setSelectedDir,
        openTabs: openTabs,
        onOpenTab: handleOpenTab,
        onCloseTab: handleCloseTab
      });
    }
    if (activeTabContent) {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(FileContentTab, {
        content: activeTabContent,
        onSave: handleSaveFile,
        onNavigate: handleBreadcrumbNavigation,
        onEditStateChange: edited => {
          setOpenTabs(tabs => tabs.map(tab => {
            if (tab.path === activeTabContent.path) {
              tab.isEdited = edited;
            }
            return tab;
          }));
        },
        active: activeTab === activeTabContent.path // Assuming activeTab is the state tracking the active tab
      });
    }
  };
  const handleBreadcrumbNavigation = path => {
    // Implement the logic to handle navigation when breadcrumb is clicked
    setSelectedDir({
      path: path
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "main",
    className: "grow"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tabs-buttons flex"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: `border border-solid border-border border-b-0  hover:bg-alt p-sm bg-base ${activeTab === "files" ? "border-t-pri border-t-[2px] border-b-0 -mb-[1px] relative z-10 bg-base" : ""}`,
    onClick: () => setActiveTab("files")
  }, "Files"), openTabs.map((content, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: index,
    className: `tab-with-close group flex items-center border border-solid bg-base border-border border-b-0 border-l-0 bg-base hover:bg-alt ${activeTab === content.path ? "border-t-pri border-t-[2px] border-b-0 -mb-[1px] relative z-10 bg-base" : ""}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "border-0 p-sm pr-0 bg-base",
    onClick: () => setActiveTab(content.path)
  }, content.name), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "flex items-center pl-0 border-0 p-sm bg-transparent opacity-0 group-hover:opacity-100 hover:text-pri",
    onClick: () => handleCloseTab(content)
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Icons__WEBPACK_IMPORTED_MODULE_4__.CloseSmallIcon, null))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "files",
    className: "panel-body clearfix border border-solid border-border rounded-md rounded-tl-none mb-lg grid gap-md bg-base"
  }, renderTabContent())), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Sidebar, {
    onSelect: onSelectDirectory
  }));
};
const root = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createRoot)(document.getElementById("fm-app"));
root.render((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(FileManager, null));
})();

/******/ })()
;
//# sourceMappingURL=filesmanager.js.map