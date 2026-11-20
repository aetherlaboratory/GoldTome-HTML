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

/***/ "./src/common/Icons.js":
/*!*****************************!*\
  !*** ./src/common/Icons.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CloseAltIcon: () => (/* binding */ CloseAltIcon),
/* harmony export */   CloseFullScrennIcon: () => (/* binding */ CloseFullScrennIcon),
/* harmony export */   CloseIcon: () => (/* binding */ CloseIcon),
/* harmony export */   CloseSmallIcon: () => (/* binding */ CloseSmallIcon),
/* harmony export */   FileIcon: () => (/* binding */ FileIcon),
/* harmony export */   FolderIcon: () => (/* binding */ FolderIcon),
/* harmony export */   FolderOpenIcon: () => (/* binding */ FolderOpenIcon),
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
  viewBox: "0 0 256 256",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  fill: "none",
  height: "256",
  width: "256"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M98.3,50.3,128,80H32V56a8,8,0,0,1,8-8H92.7A7.9,7.9,0,0,1,98.3,50.3Z",
  opacity: "0.2"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M216.9,208H39.4a7.4,7.4,0,0,1-7.4-7.4V80H216a8,8,0,0,1,8,8V200.9A7.1,7.1,0,0,1,216.9,208Z",
  fill: "none",
  stroke: "#000",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "16"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M32,80V56a8,8,0,0,1,8-8H92.7a7.9,7.9,0,0,1,5.6,2.3L128,80",
  fill: "none",
  stroke: "#000",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "16"
}));
const FolderOpenIcon = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  viewBox: "0 0 256 256",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  fill: "none",
  height: "256",
  width: "256"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M32,208l30.2-90.5a8,8,0,0,1,7.6-5.5H208V88a8,8,0,0,0-8-8H130.7a8.1,8.1,0,0,1-4.8-1.6L98.1,57.6A8.1,8.1,0,0,0,93.3,56H40a8,8,0,0,0-8,8Z",
  opacity: "0.2"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M32,208V64a8,8,0,0,1,8-8H93.3a8.1,8.1,0,0,1,4.8,1.6l27.8,20.8a8.1,8.1,0,0,0,4.8,1.6H200a8,8,0,0,1,8,8v24",
  fill: "none",
  stroke: "#000",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "16"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M32,208l30.2-90.5a8,8,0,0,1,7.6-5.5H228.9a8,8,0,0,1,7.6,10.5L208,208Z",
  fill: "none",
  stroke: "#000",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "16"
}));
const FileIcon = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  viewBox: "0 0 16 16",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M2 1.75C2 0.784 2.784 0 3.75 0H10.336C10.8 0 11.245 0.184 11.573 0.513L14.487 3.427C14.816 3.755 15 4.2 15 4.664V14.25C15 14.7141 14.8156 15.1592 14.4874 15.4874C14.1592 15.8156 13.7141 16 13.25 16H3.75C3.28587 16 2.84075 15.8156 2.51256 15.4874C2.18437 15.1592 2 14.7141 2 14.25V1.75ZM3.75 1.5C3.6837 1.5 3.62011 1.52634 3.57322 1.57322C3.52634 1.62011 3.5 1.6837 3.5 1.75V14.25C3.5 14.388 3.612 14.5 3.75 14.5H13.25C13.3163 14.5 13.3799 14.4737 13.4268 14.4268C13.4737 14.3799 13.5 14.3163 13.5 14.25V6H10.75C10.2859 6 9.84075 5.81563 9.51256 5.48744C9.18437 5.15925 9 4.71413 9 4.25V1.5H3.75ZM10.5 1.562V4.25C10.5 4.388 10.612 4.5 10.75 4.5H13.438L13.427 4.487L10.513 1.573L10.5 1.562Z",
  fill: "#4B5463"
}));
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

/***/ "./src/filesmanager/components/ContextMenu.js":
/*!****************************************************!*\
  !*** ./src/filesmanager/components/ContextMenu.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);



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
  onRefresh,
  onPermissions,
  onMove,
  onSearch,
  showEdit,
  showCompress,
  showUncompress,
  showSearch
}) => {
  const menuRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const [measured, setMeasured] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [menuSize, setMenuSize] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)({
    width: 0,
    height: 0
  });

  // Measure menu size synchronously before browser paints
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(() => {
    if (menuRef.current) {
      const rect = menuRef.current.getBoundingClientRect();
      setMenuSize({
        width: rect.width,
        height: rect.height
      });
      setMeasured(true);
    }
  }, []);
  const style = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    let top = y;
    let left = x;
    if (measured) {
      if (top + menuSize.height > window.innerHeight) {
        top = top - menuSize.height;
      }
      if (left + menuSize.width > window.innerWidth) {
        left = left - menuSize.width;
      }
    }
    if (top < 0) top = 0;
    if (left < 0) left = 0;
    return {
      position: "fixed",
      top: `${top}px`,
      left: `${left}px`,
      zIndex: 1000,
      visibility: measured ? "visible" : "hidden"
    };
  }, [x, y, menuSize, measured]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "context-menu",
    ref: menuRef,
    style: style
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.MenuGroup, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {
    onClick: onCut
  }, "Cut"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {
    onClick: onCopy
  }, "Copy"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {
    onClick: onPaste
  }, "Paste"), showEdit && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {
    onClick: onEdit
  }, "Edit"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "w-full h-[1px] bg-[#e2e2e2] block"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {
    onClick: onRename
  }, "Rename"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {
    onClick: onMove
  }, "Move"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {
    onClick: onPermissions
  }, "Permissions"), showSearch && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {
    onClick: onSearch
  }, "Search"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "w-full h-[1px] bg-[#e2e2e2] block"
  }), showCompress && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {
    onClick: onCompress
  }, "Compress"), showUncompress && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {
    onClick: onUncompress
  }, "Uncompress"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContextMenu);

/***/ }),

/***/ "./src/filesmanager/components/FileContentTab.js":
/*!*******************************************************!*\
  !*** ./src/filesmanager/components/FileContentTab.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _monaco_editor_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @monaco-editor/react */ "./node_modules/@monaco-editor/react/dist/index.mjs");
/* harmony import */ var _common_Icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/Icons */ "./src/common/Icons.js");
/* harmony import */ var _utils_fileUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/fileUtils */ "./src/filesmanager/utils/fileUtils.js");






const abspath = filemanager.abspath;
const FileContentTab = ({
  content,
  onSave,
  onNavigate,
  onEditStateChange
}) => {
  const [editedContent, setEditedContent] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(content.contents);
  const [isEdited, setIsEdited] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(content.isEdited);
  const [showSnackbar, setShowSnackbar] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const language = (0,_utils_fileUtils__WEBPACK_IMPORTED_MODULE_5__.getLanguageFromExtension)(content.name);
  const [isFullscreen, setIsFullscreen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const editorRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const handleSave = () => {
    onSave(content.path, editedContent);
    setShowSnackbar(true);
    setTimeout(() => setShowSnackbar(false), 3000);
    setIsEdited(false);
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
    onEditStateChange(isEdited);
  }, [isEdited]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setEditedContent(content.contents);
  }, [content]);
  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor;
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `tab relative  ${isFullscreen ? "!fixed w-full h-full min-h-full left-0 top-0 z-[100000] fullscreen" : ""}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex items-center flex-wrap justify-between bg-base border-0 border-b border-solid border-b-[lightgrey] p-sm"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "ml-2",
    onClick: toggleFullscreen
  }, isFullscreen ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_common_Icons__WEBPACK_IMPORTED_MODULE_4__.CloseFullScrennIcon, null) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_common_Icons__WEBPACK_IMPORTED_MODULE_4__.OpenFullScrennIcon, null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, breadcrumb), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: "primary",
    onClick: handleSave
  }, "Save File")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_monaco_editor_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: content.path,
    height: "calc(100vh - 250px)",
    language: (0,_utils_fileUtils__WEBPACK_IMPORTED_MODULE_5__.getLanguageFromExtension)(content.name),
    value: editedContent,
    onChange: newContent => {
      setEditedContent(newContent);
      setIsEdited(true);
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
      zIndex: 1000
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Snackbar, null, "File saved successfully.")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FileContentTab);

/***/ }),

/***/ "./src/filesmanager/components/Sidebar.js":
/*!************************************************!*\
  !*** ./src/filesmanager/components/Sidebar.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Directory: () => (/* binding */ Directory),
/* harmony export */   Sidebar: () => (/* binding */ Sidebar),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_Icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/Icons */ "./src/common/Icons.js");
/* harmony import */ var _Sidebar_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Sidebar.scss */ "./src/filesmanager/components/Sidebar.scss");




const Directory = ({
  dir,
  onSelect,
  selectedPath
}) => {
  const [isOpen, setIsOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const isSelected = selectedPath === dir.path;
  const handleClick = () => {
    if (dir.subDirs && dir.subDirs.length > 0) {
      setIsOpen(!isOpen);
    }
    onSelect(dir);
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
    className: "flex gap-sm my-sm items-center",
    style: {
      backgroundColor: isSelected ? 'white' : 'transparent',
      outline: isSelected ? '1px solid #ddd' : 'none',
      padding: '0px 8px',
      borderRadius: '4px',
      cursor: 'pointer'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    onClick: hasSubDirectories ? handleClick : undefined,
    "aria-expanded": isOpen,
    className: "directory-toggle",
    style: {
      opacity: hasSubDirectories ? 1 : 0,
      cursor: hasSubDirectories ? 'pointer' : 'default'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "icon-wrapper icon-wrapper-toggle"
  }, isOpen ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_common_Icons__WEBPACK_IMPORTED_MODULE_2__.CloseIcon, null) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_common_Icons__WEBPACK_IMPORTED_MODULE_2__.OpenIcon, null))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "icon-wrapper"
  }, isOpen ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_common_Icons__WEBPACK_IMPORTED_MODULE_2__.FolderOpenIcon, null) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_common_Icons__WEBPACK_IMPORTED_MODULE_2__.FolderIcon, null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `directory-name ${hasSubDirectories ? "" : "no-subdirectories"}`,
    onClick: handleClick
  }, dir.name)), isOpen && hasSubDirectories && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", null, dir.subDirs.map((subDir, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Directory, {
    key: index,
    dir: subDir,
    onSelect: onSelect,
    selectedPath: selectedPath
  }))));
};
const Sidebar = ({
  onSelect,
  directories
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    id: "sidebar",
    className: "w-[250px] p-md bg-border border border-solid border-border rounded-tr-md rounded-br-md"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    onClick: () => onSelect({
      path: "/"
    })
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex items-center !gap-[8px] my-md cursor-pointer"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "icon-wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_common_Icons__WEBPACK_IMPORTED_MODULE_2__.HomeIcon, null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "icon-wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_common_Icons__WEBPACK_IMPORTED_MODULE_2__.FolderIcon, null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, "Home"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", null, directories.map((dir, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Directory, {
    key: index,
    dir: dir,
    onSelect: onSelect
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);

/***/ }),

/***/ "./src/filesmanager/components/UploadFilesModal.js":
/*!*********************************************************!*\
  !*** ./src/filesmanager/components/UploadFilesModal.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);



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
      minHeight: "200px"
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UploadFilesModal);

/***/ }),

/***/ "./src/filesmanager/components/modals/ImagePreviewModal.js":
/*!*****************************************************************!*\
  !*** ./src/filesmanager/components/modals/ImagePreviewModal.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ImagePreviewModal_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ImagePreviewModal.scss */ "./src/filesmanager/components/modals/ImagePreviewModal.scss");



const ImagePreviewModal = ({
  isOpen,
  item,
  url,
  onClose
}) => {
  if (!isOpen) return null;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Modal, {
    title: item?.name,
    onRequestClose: onClose,
    size: "large",
    className: "image-preview-modal"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: url,
    alt: item?.name,
    style: {
      maxWidth: 'inherit',
      maxHeight: 'inherit',
      width: 'inherit',
      height: 'inherit',
      objectFit: 'contain'
    }
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImagePreviewModal);

/***/ }),

/***/ "./src/filesmanager/components/modals/MoveModal.js":
/*!*********************************************************!*\
  !*** ./src/filesmanager/components/modals/MoveModal.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_Icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/Icons */ "./src/common/Icons.js");
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Sidebar */ "./src/filesmanager/components/Sidebar.js");




const MoveModal = ({
  isOpen,
  item,
  selectedDestination,
  directories,
  onClose,
  onSelect,
  onSubmit
}) => {
  if (!isOpen) return null;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Modal, {
    title: `Move ${item?.name}`,
    onRequestClose: onClose,
    size: "medium"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "move-modal-content"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mb-md"
  }, "Select destination folder"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "folder-tree-container move-modal-tree  bg-surface",
    style: {
      border: '1px solid #ddd',
      borderRadius: '4px',
      padding: '16px',
      maxHeight: '400px',
      overflowY: 'auto',
      marginBottom: '16px'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    onClick: () => onSelect('/'),
    style: {
      backgroundColor: selectedDestination === '/' ? 'white' : 'transparent',
      outline: selectedDestination === '/' ? '1px solid #ddd' : 'none',
      padding: '0',
      borderRadius: '4px',
      cursor: 'pointer'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex items-center !gap-[8px] my-md"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "icon-wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_common_Icons__WEBPACK_IMPORTED_MODULE_2__.HomeIcon, null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "icon-wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_common_Icons__WEBPACK_IMPORTED_MODULE_2__.FolderIcon, null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, "Home"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    style: {
      listStyle: 'none',
      margin: '0 0 0 20px',
      padding: 0
    }
  }, directories.map((dir, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Sidebar__WEBPACK_IMPORTED_MODULE_3__.Directory, {
    key: index,
    dir: dir,
    onSelect: dir => onSelect(dir.path),
    selectedPath: selectedDestination
  }))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex justify-end gap-sm"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: "secondary",
    onClick: onClose
  }, "Cancel"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: "primary",
    onClick: onSubmit,
    disabled: !selectedDestination
  }, "Move Here"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MoveModal);

/***/ }),

/***/ "./src/filesmanager/components/modals/PermissionsModal.js":
/*!****************************************************************!*\
  !*** ./src/filesmanager/components/modals/PermissionsModal.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


const PermissionsModal = ({
  isOpen,
  item,
  permissions,
  onClose,
  onPermissionsChange,
  onSubmit
}) => {
  if (!isOpen) return null;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Modal, {
    title: "Change Permissions",
    onRequestClose: onClose
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "permissions-modal-content"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mb-md"
  }, "Change permissions for: ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, item?.name)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mb-md"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: "Permissions",
    value: permissions,
    onChange: value => {
      // Only allow 3 digits 0-7
      if (/^[0-7]{0,3}$/.test(value)) {
        onPermissionsChange(value);
      }
    },
    maxLength: 3,
    placeholder: "755",
    className: "permissions-input"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mb-lg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "components-base-control__label"
  }, "Common permissions:"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "permission-buttons flex gap-md"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: "secondary",
    className: "permission-btn",
    onClick: () => onPermissionsChange('755'),
    title: "Executable files and directories \u2014 owner can modify, others can read and execute"
  }, "755"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: "secondary",
    className: "permission-btn",
    onClick: () => onPermissionsChange('644'),
    title: "Regular files \u2014 owner can edit, others can only read"
  }, "644"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: "secondary",
    className: "permission-btn",
    onClick: () => onPermissionsChange('600'),
    title: "Private files (e.g., .env, SSH keys) \u2014 accessible only by the owner"
  }, "600"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex justify-end gap-sm"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: "primary",
    onClick: onSubmit,
    disabled: permissions.length !== 3
  }, "Change Permissions"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PermissionsModal);

/***/ }),

/***/ "./src/filesmanager/components/modals/SearchModal.js":
/*!***********************************************************!*\
  !*** ./src/filesmanager/components/modals/SearchModal.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);




// File type configuration with labels
const FILE_TYPE_CONFIG = [{
  key: 'php',
  label: 'PHP'
}, {
  key: 'js',
  label: 'JavaScript (.js)'
}, {
  key: 'min.js',
  label: 'Minified JS (.min.js)'
}, {
  key: 'css',
  label: 'CSS'
}, {
  key: 'min.css',
  label: 'Minified CSS (.min.css)'
}, {
  key: 'txt',
  label: 'Text (.txt)'
}, {
  key: 'md',
  label: 'Markdown (.md)'
}, {
  key: 'json',
  label: 'JSON (.json)'
}, {
  key: 'html',
  label: 'HTML (.html)'
}, {
  key: 'ts',
  label: 'TypeScript (.ts)'
}, {
  key: 'tsx',
  label: 'TypeScript React (.tsx)'
}, {
  key: 'scss',
  label: 'SCSS (.scss)'
}, {
  key: 'sass',
  label: 'SASS (.sass)'
}, {
  key: 'jsx',
  label: 'JSX (.jsx)'
}, {
  key: 'vue',
  label: 'Vue (.vue)'
}, {
  key: 'yml',
  label: 'YAML (.yml)'
}, {
  key: 'yaml',
  label: 'YAML (.yaml)'
}, {
  key: 'ini',
  label: 'INI (.ini)'
}, {
  key: 'xml',
  label: 'XML (.xml)'
}];

// Default file types - all selected by default
const DEFAULT_FILE_TYPES = FILE_TYPE_CONFIG.reduce((acc, type) => {
  acc[type.key] = true;
  return acc;
}, {});
const SearchModal = ({
  isOpen,
  item,
  onClose,
  onSearch,
  onOpenFile,
  abspath
}) => {
  const [searchTerm, setSearchTerm] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)("");
  const [isSearching, setIsSearching] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [results, setResults] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  const [hasSearched, setHasSearched] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const inputRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  const [showFilters, setShowFilters] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(false);

  // File type filters - default all selected
  const [fileTypes, setFileTypes] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(DEFAULT_FILE_TYPES);

  // Reset state when modal closes
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (!isOpen) {
      setSearchTerm("");
      setIsSearching(false);
      setResults([]);
      setHasSearched(false);
      // Reset file types to default
      setFileTypes(DEFAULT_FILE_TYPES);
    }
  }, [isOpen]);

  // Focus input when modal opens
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (isOpen && inputRef.current) {
      // Small delay to ensure modal is fully rendered
      setTimeout(() => {
        const input = inputRef.current.querySelector('input');
        if (input) {
          input.focus();
        }
      }, 100);
    }
  }, [isOpen]);
  if (!isOpen) return null;
  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      return;
    }

    // Get selected file types
    const selectedTypes = Object.keys(fileTypes).filter(type => fileTypes[type]);
    if (selectedTypes.length === 0) {
      alert("Please select at least one file type to search.");
      setIsSearching(false);
      return;
    }

    // Hide filters when search starts
    setShowFilters(false);
    setIsSearching(true);
    setHasSearched(true);
    setResults([]);
    try {
      const searchResults = await onSearch(item.path, searchTerm, selectedTypes);
      setResults(searchResults);
    } catch (error) {
      console.error("Search error:", error);
      setResults([]);
    } finally {
      setIsSearching(false);
    }
  };
  const handleFileTypeChange = type => {
    setFileTypes(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  // Check if all file types are selected
  const allSelected = Object.values(fileTypes).every(selected => selected === true);

  // Handle select/unselect all
  const handleSelectAll = () => {
    const newState = !allSelected; // If all selected, unselect all; otherwise select all
    const allFileTypes = Object.keys(fileTypes);
    const updatedTypes = {};
    allFileTypes.forEach(type => {
      updatedTypes[type] = newState;
    });
    setFileTypes(updatedTypes);
  };
  const handleKeyPress = e => {
    if (e.key === "Enter" && !isSearching) {
      handleSearch();
    }
  };
  const handleResultClick = result => {
    onOpenFile(result);
  };
  const formatFilePath = filePath => {
    if (filePath.startsWith(abspath)) {
      return filePath.substring(abspath.length);
    }
    return filePath;
  };

  // Generate file types text for results
  const getFileTypesText = () => {
    const selectedTypes = Object.keys(fileTypes).filter(type => fileTypes[type]);
    const allTypes = Object.keys(fileTypes);

    // If all types are selected
    if (selectedTypes.length === allTypes.length) {
      return "all file types";
    }

    // If specific types are selected, format them
    const formattedTypes = selectedTypes.map(type => `.${type}`).join(", ");
    return formattedTypes;
  };
  const highlightMatch = (line, searchTerm) => {
    if (!searchTerm) return line;
    const escapedTerm = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${escapedTerm})`, 'gi');
    const parts = line.split(regex);
    return parts.map((part, index) => {
      // Check if this part matches the search term (case-insensitive)
      if (part.toLowerCase() === searchTerm.toLowerCase()) {
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("mark", {
          key: index,
          className: "bg-active text-contrast px-xsm rounded-sm underline underline-offset-[6px]"
        }, part);
      }
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
        key: index
      }, part);
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Modal, {
    title: `Search in ${item?.name}`,
    onRequestClose: onClose,
    size: "large"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "search-modal-content"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mb-md"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex gap-sm items-center search-field",
    style: {
      '--base-control-margin': '0'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, `
                .search-field .components-base-control__field {
                  margin: 0 !important;
                }
              `), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ref: inputRef,
    className: "relative flex items-center flex-1"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl
  // label="Search term"
  , {
    value: searchTerm,
    onChange: setSearchTerm,
    onKeyPress: handleKeyPress,
    placeholder: "Enter text to search...",
    disabled: isSearching,
    className: "flex-1"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: "tertiary",
    size: "small",
    onClick: () => setShowFilters(!showFilters),
    className: "absolute right-[8px]"
  }, showFilters ? "Hide Filters" : "Show Filters")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: "primary",
    onClick: handleSearch,
    disabled: !searchTerm.trim() || isSearching
  }, isSearching ? "Searching..." : "Search"))), showFilters && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mb-md mt-lg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex items-center justify-between mb-sm"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "components-base-control__label block text-caption font-semibold"
  }, "File Types to Search:"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CheckboxControl, {
    label: "Select All",
    checked: allSelected,
    onChange: handleSelectAll,
    disabled: isSearching
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "columns-4 gap-lg"
  }, FILE_TYPE_CONFIG.map(({
    key,
    label
  }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CheckboxControl, {
    key: key,
    label: label,
    checked: fileTypes[key],
    onChange: () => handleFileTypeChange(key),
    disabled: isSearching
  })))), isSearching && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex justify-center items-center py-lg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Spinner, null)), !isSearching && hasSearched && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "search-results"
  }, results.length === 0 ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "text-center py-lg text-input"
  }, "No results found for \"", searchTerm, "\"") : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mb-sm text-caption text-input"
  }, "Found ", results.length, " result", results.length !== 1 ? 's' : '', " in ", getFileTypesText()), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bg-base flex flex-col border border-border border-solid",
    style: {
      maxHeight: "500px",
      overflowY: "auto"
    }
  }, results.map((result, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: index,
    onClick: () => handleResultClick(result),
    className: "cursor-pointer hover:outline -outline-offset-4 hover:outline-[2px] hover:outline-border-active p-md transition-colors border-b border-b-solid border-border"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex items-start gap-sm"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex-1 min-w-0"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "text-body font-semibold text-contrast mb-xsm break-words"
  }, formatFilePath(result.filePath)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "text-caption text-input mb-xsm"
  }, "Line ", result.lineNumber), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "text-body text-contrast font-mono bg-code p-sm rounded-sm break-words whitespace-pre-wrap"
  }, highlightMatch(result.lineContent.trim(), searchTerm)))))))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchModal);

/***/ }),

/***/ "./src/filesmanager/utils/fetchHelpers.js":
/*!************************************************!*\
  !*** ./src/filesmanager/utils/fetchHelpers.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchDirectoryContents: () => (/* binding */ fetchDirectoryContents)
/* harmony export */ });
const ajaxurl = filemanager.ajaxurl;
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

/***/ }),

/***/ "./src/filesmanager/utils/fileOperations.js":
/*!**************************************************!*\
  !*** ./src/filesmanager/utils/fileOperations.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleCreateFile: () => (/* binding */ handleCreateFile),
/* harmony export */   handleCreateFolder: () => (/* binding */ handleCreateFolder)
/* harmony export */ });
/* harmony import */ var _fetchHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchHelpers */ "./src/filesmanager/utils/fetchHelpers.js");

const ajaxurl = filemanager.ajaxurl;
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
      });
      setTimeout(() => setUploadStatus({
        show: false,
        message: ""
      }), 3000);
      if (data.success) {
        console.log("File created successfully:", data.message);
        (0,_fetchHelpers__WEBPACK_IMPORTED_MODULE_0__.fetchDirectoryContents)(currentDirPath, setContents, sortContents);
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
      });
      setTimeout(() => setUploadStatus({
        show: false,
        message: ""
      }), 3000);
      if (data.success) {
        console.log("Folder created successfully:", data.message);
        (0,_fetchHelpers__WEBPACK_IMPORTED_MODULE_0__.fetchDirectoryContents)(currentDirPath, setContents, sortContents);
      }
    }).catch(error => console.error("Error creating folder:", error));
  }
};

/***/ }),

/***/ "./src/filesmanager/utils/fileUtils.js":
/*!*********************************************!*\
  !*** ./src/filesmanager/utils/fileUtils.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   escapeContentForSave: () => (/* binding */ escapeContentForSave),
/* harmony export */   getLanguageFromExtension: () => (/* binding */ getLanguageFromExtension),
/* harmony export */   unescapeContentForEdit: () => (/* binding */ unescapeContentForEdit)
/* harmony export */ });
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

/***/ }),

/***/ "./src/filesmanager/components/Sidebar.scss":
/*!**************************************************!*\
  !*** ./src/filesmanager/components/Sidebar.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/filesmanager/components/modals/ImagePreviewModal.scss":
/*!*******************************************************************!*\
  !*** ./src/filesmanager/components/modals/ImagePreviewModal.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/*!***********************************!*\
  !*** ./src/filesmanager/index.js ***!
  \***********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_Icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/Icons */ "./src/common/Icons.js");
/* harmony import */ var _components_UploadFilesModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/UploadFilesModal */ "./src/filesmanager/components/UploadFilesModal.js");
/* harmony import */ var _components_ContextMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/ContextMenu */ "./src/filesmanager/components/ContextMenu.js");
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Sidebar */ "./src/filesmanager/components/Sidebar.js");
/* harmony import */ var _components_FileContentTab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/FileContentTab */ "./src/filesmanager/components/FileContentTab.js");
/* harmony import */ var _components_modals_PermissionsModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/modals/PermissionsModal */ "./src/filesmanager/components/modals/PermissionsModal.js");
/* harmony import */ var _components_modals_MoveModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/modals/MoveModal */ "./src/filesmanager/components/modals/MoveModal.js");
/* harmony import */ var _components_modals_ImagePreviewModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/modals/ImagePreviewModal */ "./src/filesmanager/components/modals/ImagePreviewModal.js");
/* harmony import */ var _components_modals_SearchModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/modals/SearchModal */ "./src/filesmanager/components/modals/SearchModal.js");
/* harmony import */ var _utils_fetchHelpers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils/fetchHelpers */ "./src/filesmanager/utils/fetchHelpers.js");
/* harmony import */ var _utils_fileOperations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utils/fileOperations */ "./src/filesmanager/utils/fileOperations.js");

// Index.js





// Extracted components









// Utility functions


const ajaxurl = filemanager.ajaxurl;
const abspath = filemanager.abspath;

// All components and utilities are now imported from separate files
// (removed duplicate definitions)

const Files = ({
  selectedDir,
  onSelect,
  openTabs,
  onOpenTab,
  onCloseTab,
  directories,
  searchModal,
  setSearchModal
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
  const [showDragOverlay, setShowDragOverlay] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const handleRowClick = index => {
    setSelectedRow(index);
  };
  const [uploadMessages, setUploadMessages] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const maxMessages = 15;
  const [permissionsModal, setPermissionsModal] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)({
    isOpen: false,
    item: null,
    permissions: ''
  });
  const [moveModal, setMoveModal] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)({
    isOpen: false,
    item: null,
    selectedDestination: null
  });
  const [imagePreview, setImagePreview] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)({
    isOpen: false,
    item: null,
    url: ''
  });

  // Sorting state
  const [sortConfig, setSortConfig] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)({
    key: 'name',
    // 'name', 'size', 'lastModified'
    direction: 'asc' // 'asc' or 'desc'
  });

  // Track folder sizes being calculated
  const [calculatingFolders, setCalculatingFolders] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(new Set());
  const [folderSizes, setFolderSizes] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)({});

  // Helper function to format file size
  const formatFileSize = sizeInKB => {
    if (sizeInKB >= 1000000) {
      // >= 1 GB
      return `${(sizeInKB / 1048576).toFixed(2)} GB`;
    } else if (sizeInKB >= 1000) {
      // >= 1 MB
      return `${(sizeInKB / 1024).toFixed(2)} MB`;
    } else {
      return `${sizeInKB} KB`;
    }
  };
  const getFileKind = item => {
    if (!item.isFile) return "Folder";
    const ext = item.name.includes('.') ? item.name.split('.').pop().toLowerCase() : '';
    const kindMap = {
      php: "PHP Script",
      js: "JavaScript",
      jsx: "JavaScript",
      ts: "TypeScript",
      tsx: "TypeScript",
      css: "CSS Stylesheet",
      scss: "SCSS Stylesheet",
      html: "HTML Document",
      htm: "HTML Document",
      json: "JSON File",
      zip: "ZIP Archive",
      gz: "GZ Archive",
      tar: "TAR Archive",
      png: "Image",
      jpg: "Image",
      jpeg: "Image",
      gif: "Image",
      webp: "Image",
      svg: "Image",
      ico: "Image",
      bmp: "Image",
      md: "Markdown",
      txt: "Text File",
      xml: "XML File",
      sql: "SQL File",
      log: "Log File",
      env: "Environment File",
      yml: "YAML File",
      yaml: "YAML File",
      htaccess: "Config File",
      conf: "Config File",
      ini: "Config File",
      sh: "Shell Script",
      bat: "Batch File",
      py: "Python Script",
      rb: "Ruby Script",
      pdf: "PDF Document",
      doc: "Word Document",
      docx: "Word Document",
      xls: "Spreadsheet",
      xlsx: "Spreadsheet",
      csv: "CSV File",
      mp3: "Audio",
      wav: "Audio",
      mp4: "Video",
      mov: "Video",
      avi: "Video"
    };
    return kindMap[ext] || (ext ? ext.toUpperCase() + " File" : "File");
  };

  // Calculate folder size
  const calculateFolderSize = folderPath => {
    setCalculatingFolders(prev => new Set([...prev, folderPath]));
    fetch(ajaxurl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams({
        action: "calculate_folder_size",
        path: folderPath,
        verify_nonce: filemanager.DPDEV_nonce
      }).toString()
    }).then(response => response.json()).then(data => {
      if (data.success) {
        setFolderSizes(prev => ({
          ...prev,
          [folderPath]: data.data.size // Size in KB
        }));
      } else {
        addUploadMessage(`Failed to calculate folder size: ${data.message}`, 'error');
      }
    }).catch(error => {
      console.error("Error calculating folder size:", error);
      addUploadMessage("Error calculating folder size", 'error');
    }).finally(() => {
      setCalculatingFolders(prev => {
        const newSet = new Set(prev);
        newSet.delete(folderPath);
        return newSet;
      });
    });
  };

  // Sorting function
  const handleSort = key => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({
      key,
      direction
    });
  };

  // Get sort indicator component
  const getSortIndicator = columnKey => {
    const isActive = sortConfig.key === columnKey;
    const isAsc = isActive && sortConfig.direction === 'asc';
    const isDesc = isActive && sortConfig.direction === 'desc';
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "fm-sorting-indicators"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: `fm-sorting-indicator asc ${isAsc ? 'active' : ''}`,
      "aria-hidden": "true"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: `fm-sorting-indicator desc ${isDesc ? 'active' : ''}`,
      "aria-hidden": "true"
    }));
  };

  // Helper function to add upload message
  const addUploadMessage = (message, type = 'info') => {
    const newMessage = {
      id: Date.now() + Math.random(),
      text: message,
      type: type,
      // 'info', 'success', 'error'
      timestamp: Date.now()
    };
    setUploadMessages(prev => {
      const updated = [...prev, newMessage];
      // Keep only the last maxMessages
      return updated.slice(-maxMessages);
    });

    // Auto-remove success/error messages after 3 seconds
    if (type === 'success' || type === 'error') {
      setTimeout(() => {
        setUploadMessages(prev => prev.filter(msg => msg.id !== newMessage.id));
      }, 3000);
    }
  };

  // Helper function to update the last message (for progress updates)
  const updateLastMessage = message => {
    setUploadMessages(prev => {
      if (prev.length === 0) {
        return [{
          id: Date.now(),
          text: message,
          type: 'info',
          timestamp: Date.now()
        }];
      }
      const updated = [...prev];
      updated[updated.length - 1] = {
        ...updated[updated.length - 1],
        text: message,
        timestamp: Date.now()
      };
      return updated;
    });
  };

  // Helper function to clear all messages
  const clearUploadMessages = () => {
    setUploadMessages([]);
  };

  // Legacy compatibility wrapper
  const setUploadStatus = ({
    show,
    message
  }) => {
    if (!show) {
      clearUploadMessages();
    } else {
      addUploadMessage(message);
    }
  };

  // Helper function to recursively traverse folder structure
  const traverseFileTree = (item, path = "") => {
    return new Promise(resolve => {
      if (item.isFile) {
        item.file(file => {
          // Add relative path to file object
          file.relativePath = path ? `${path}/${file.name}` : file.name;
          resolve([file]);
        });
      } else if (item.isDirectory) {
        const dirReader = item.createReader();
        const entries = [];
        const readEntries = () => {
          dirReader.readEntries(async results => {
            if (results.length) {
              for (const entry of results) {
                const subPath = path ? `${path}/${item.name}` : item.name;
                const files = await traverseFileTree(entry, subPath);
                entries.push(...files);
              }
              readEntries(); // Continue reading
            } else {
              resolve(entries);
            }
          });
        };
        readEntries();
      }
    });
  };
  const [contextMenu, setContextMenu] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)({
    visible: false,
    x: 0,
    y: 0,
    item: null
  });

  // Keyboard navigation
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const handleKeyDown = e => {
      // Only handle keyboard navigation when not in an input/textarea
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        return;
      }

      // -1 represents the parent directory row (..), 0+ are regular content rows
      const minRow = isNotRoot ? -1 : 0;
      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setSelectedRow(prev => {
            if (prev === null) return minRow;
            return Math.min(prev + 1, contents.length - 1);
          });
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSelectedRow(prev => {
            if (prev === null || prev === minRow) return minRow;
            return prev - 1;
          });
          break;
        case 'Enter':
          e.preventDefault();
          console.log('Enter key pressed, selectedRow:', selectedRow, 'isNotRoot:', isNotRoot);
          if (selectedRow === -1 && isNotRoot) {
            // Selected the parent directory (..) row
            console.log('Calling handleGoUp from Enter key');
            handleGoUp();
          } else if (selectedRow !== null && contents[selectedRow]) {
            const item = contents[selectedRow];
            console.log('Opening item:', item);
            handleDoubleClick(item);
          }
          break;
        case 'Escape':
          e.preventDefault();
          if (isNotRoot) {
            handleGoUp();
          }
          break;
        case 'Backspace':
          e.preventDefault();
          if (isNotRoot) {
            handleGoUp();
          }
          break;
        case 'Delete':
          e.preventDefault();
          if (selectedRow !== null && selectedRow >= 0 && contents[selectedRow]) {
            // Delete the selected item
            const item = contents[selectedRow];
            console.log('Delete key pressed for item:', item);
            handleDelete(item);
          }
          break;
        default:
          break;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedRow, contents, isNotRoot]);

  // Scroll selected row into view
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (selectedRow !== null) {
      // Calculate the correct row index:
      // -1 = parent directory row (first row if isNotRoot)
      // 0+ = content rows (offset by 1 if isNotRoot to account for parent row)
      let rowIndex;
      if (selectedRow === -1) {
        rowIndex = 1; // First row
      } else {
        rowIndex = selectedRow + (isNotRoot ? 2 : 1); // +2 if parent row exists, +1 otherwise
      }
      const selectedElement = document.querySelector(`#files tbody tr:nth-child(${rowIndex})`);
      if (selectedElement) {
        selectedElement.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest'
        });
      }
    }
  }, [selectedRow, isNotRoot]);
  const sortContents = contents => {
    const sorted = [...contents].sort((a, b) => {
      // Keep folders first for all sort keys except 'kind'
      if (sortConfig.key !== 'kind') {
        if (a.isFile && !b.isFile) return 1;
        if (!a.isFile && b.isFile) return -1;
      }
      let comparison = 0;
      switch (sortConfig.key) {
        case 'name':
          comparison = a.name.localeCompare(b.name);
          break;
        case 'kind':
          {
            const kindA = getFileKind(a);
            const kindB = getFileKind(b);
            comparison = kindA.localeCompare(kindB);
            if (comparison === 0) {
              comparison = a.name.localeCompare(b.name);
            }
            break;
          }
        case 'size':
          if (a.isFile && b.isFile) {
            comparison = a.size - b.size;
          }
          break;
        case 'lastModified':
          comparison = a.lastModified.localeCompare(b.lastModified);
          break;
        default:
          comparison = a.name.localeCompare(b.name);
      }
      return sortConfig.direction === 'asc' ? comparison : -comparison;
    });
    return sorted;
  };
  const refreshDirectoryContents = () => {
    (0,_utils_fetchHelpers__WEBPACK_IMPORTED_MODULE_12__.fetchDirectoryContents)(selectedDir.path, setContents, sortContents);
  };

  // Re-sort contents when sort configuration changes
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (contents.length > 0) {
      setContents(sortContents(contents));
    }
  }, [sortConfig]);

  // Generate breadcrumbs from current path
  const getBreadcrumbs = () => {
    if (!selectedDir.path) return [];

    // Normalize path separators (handle both / and \)
    let normalizedPath = selectedDir.path.replace(/\\/g, '/');
    let normalizedAbspath = abspath.replace(/\\/g, '/');

    // Remove abspath to get relative path
    let relativePath = normalizedPath;
    if (relativePath.startsWith(normalizedAbspath)) {
      relativePath = relativePath.substring(normalizedAbspath.length);
    }

    // Handle root path
    if (relativePath === '/' || relativePath === '') {
      return [{
        name: 'Home',
        path: '/',
        isRoot: true
      }];
    }

    // Split path into parts
    const parts = relativePath.split('/').filter(Boolean);

    // Create breadcrumb items
    const breadcrumbs = [{
      name: 'Home',
      path: '/',
      isRoot: true
    }];

    // Add each path segment
    let currentPath = normalizedAbspath;
    parts.forEach(part => {
      currentPath = currentPath + '/' + part;
      breadcrumbs.push({
        name: part,
        path: currentPath,
        isRoot: false
      });
    });
    return breadcrumbs;
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
  const handlePermissions = () => {
    if (contextMenu.item) {
      setPermissionsModal({
        isOpen: true,
        item: contextMenu.item,
        permissions: contextMenu.item.permissions || '755'
      });
      setContextMenu({
        visible: false,
        x: 0,
        y: 0,
        item: null
      });
    }
  };
  const handlePermissionsSubmit = () => {
    if (!permissionsModal.item) return;
    fetch(ajaxurl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams({
        action: "change_permissions",
        path: permissionsModal.item.path,
        permissions: permissionsModal.permissions,
        verify_nonce: filemanager.DPDEV_nonce
      }).toString()
    }).then(response => response.json()).then(data => {
      const message = data.message || (data.success ? "Permissions changed successfully." : "Failed to change permissions.");
      addUploadMessage(message, data.success ? 'success' : 'error');
      if (data.success) {
        // Update the contents array to reflect the new permissions
        setContents(contents => contents.map(content => {
          if (content.path === permissionsModal.item.path) {
            return {
              ...content,
              permissions: permissionsModal.permissions
            };
          }
          return content;
        }));
      }
      setPermissionsModal({
        isOpen: false,
        item: null,
        permissions: ''
      });
    }).catch(error => {
      console.error("Error:", error);
      addUploadMessage("Error changing permissions", 'error');
    });
  };
  const handleMove = () => {
    if (contextMenu.item) {
      setMoveModal({
        isOpen: true,
        item: contextMenu.item,
        selectedDestination: null
      });
      setContextMenu({
        visible: false,
        x: 0,
        y: 0,
        item: null
      });
    }
  };
  const handleSearch = () => {
    if (contextMenu.item && !contextMenu.item.isFile && !searchModal.isOpen) {
      setSearchModal({
        isOpen: true,
        item: contextMenu.item
      });
      setContextMenu({
        visible: false,
        x: 0,
        y: 0,
        item: null
      });
    }
  };
  const handleMoveSubmit = () => {
    if (!moveModal.item || !moveModal.selectedDestination) {
      addUploadMessage("Please select a destination folder", 'error');
      return;
    }
    fetch(ajaxurl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams({
        action: "move_item",
        sourcePath: moveModal.item.path,
        destinationPath: moveModal.selectedDestination,
        verify_nonce: filemanager.DPDEV_nonce
      }).toString()
    }).then(response => response.json()).then(data => {
      const message = data.message || (data.success ? `${moveModal.item.name} moved successfully.` : "Failed to move item.");
      addUploadMessage(message, data.success ? 'success' : 'error');
      if (data.success) {
        // Remove the moved item from current view
        setContents(prevContents => prevContents.filter(content => content.path !== moveModal.item.path));
      }
      setMoveModal({
        isOpen: false,
        item: null,
        selectedDestination: null
      });
    }).catch(error => {
      console.error("Error:", error);
      addUploadMessage("Error moving item", 'error');
    });
  };
  const handleDelete = (item = null) => {
    // Use provided item or fall back to contextMenu item
    const itemToDelete = item || contextMenu.item;
    if (itemToDelete) {
      if (window.confirm("Are you sure, you want to delete " + itemToDelete.name + "?")) {
        fetch(ajaxurl, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          body: new URLSearchParams({
            action: "delete_item",
            path: itemToDelete.path,
            verify_nonce: filemanager.DPDEV_nonce
          }).toString()
        }).then(response => response.json()).then(data => {
          const message = data.success ? "File deleted successfully." : data.message;
          addUploadMessage(message, data.success ? 'success' : 'error');
          if (data.success) {
            // Remove the deleted item from the contents array
            setContents(prevContents => {
              const newContents = prevContents.filter(content => content.path !== itemToDelete.path);

              // Adjust selected row if needed
              if (selectedRow !== null && selectedRow >= newContents.length) {
                setSelectedRow(Math.max(0, newContents.length - 1));
              }
              return newContents;
            });
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
    // Check if it's an image file
    const isImage = /\.(jpg|png|gif|jpeg|webp|svg|ico|bmp)$/i.test(item.name);
    if (isImage) {
      // Open image preview
      const imageUrl = item.path.replace(abspath, window.location.origin + '/');
      setImagePreview({
        isOpen: true,
        item: item,
        url: imageUrl
      });
      return;
    }

    // Check for other non-editable extensions
    const hasNonEditableExtension = /\.(zip|pdf|doc|docx|ppt|pptx|pps|ppsx|odt|xls|xlsx|psd|mp3|m4a|ogg|wav|mp4|m4v|mov|wmv|avi|mpg|ogv|3gp|3g2)$/i.test(item.name);
    if (hasNonEditableExtension) {
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
    console.log('handleGoUp called, current path:', selectedDir.path);

    // Determine the separator (for cross-platform compatibility)
    const separator = selectedDir.path.includes("\\") ? "\\" : "/";
    const parts = selectedDir.path.split(separator).filter(Boolean);
    if (parts.length > 0) {
      parts.pop(); // Remove the last segment

      // Reconstruct path with leading separator
      const parentDir = parts.length === 0 ? separator : separator + parts.join(separator);
      console.log('Parts:', parts, 'Parent dir:', parentDir, 'Abspath:', abspath);

      // If parent dir equals abspath, navigate to root
      if (abspath === parentDir || parentDir === separator) {
        console.log('Navigating to root');
        onSelect({
          path: "/"
        });
      } else {
        console.log('Navigating to:', parentDir);
        onSelect({
          path: parentDir
        });
      }
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
    console.log("handleFileDrop called with files:", files);
    if (!files || files.length === 0) {
      console.log("No files to upload");
      return;
    }

    // Clear old messages and show initial message
    clearUploadMessages();
    addUploadMessage(`Starting upload of ${files.length} file(s)...`, 'info');

    // Upload files one by one with progress tracking
    let uploadedCount = 0;
    let failedCount = 0;
    const uploadFile = (file, index) => {
      // Determine the target path based on relative path (for folders)
      let targetPath = selectedDirPath;
      if (file.relativePath) {
        // Extract directory path from relative path
        const pathParts = file.relativePath.split('/');
        pathParts.pop(); // Remove filename
        if (pathParts.length > 0) {
          const subPath = pathParts.join('/');
          // Ensure proper path construction
          if (selectedDirPath === '/') {
            targetPath = '/' + subPath;
          } else if (selectedDirPath.endsWith('/')) {
            targetPath = selectedDirPath + subPath;
          } else {
            targetPath = selectedDirPath + '/' + subPath;
          }
        }
      }
      console.log('Target path for upload:', targetPath, 'Selected dir:', selectedDirPath);
      const formData = new FormData();
      formData.append("action", "upload_file");
      formData.append("path", targetPath);
      formData.append("verify_nonce", filemanager.DPDEV_nonce);
      formData.append("file", file);
      const displayName = file.relativePath || file.name;
      const shortName = displayName.length > 40 ? '...' + displayName.slice(-37) : displayName;
      console.log(`Uploading file ${index + 1}/${files.length}:`, displayName, 'to path:', targetPath);
      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        let messageId = Date.now() + Math.random();

        // Track upload progress
        xhr.upload.addEventListener("progress", e => {
          if (e.lengthComputable) {
            const percentComplete = Math.round(e.loaded / e.total * 100);
            const progressMsg = `[${index + 1}/${files.length}] ${shortName}: ${percentComplete}%`;

            // Update or add message
            setUploadMessages(prev => {
              const existing = prev.find(m => m.id === messageId);
              if (existing) {
                return prev.map(m => m.id === messageId ? {
                  ...m,
                  text: progressMsg,
                  timestamp: Date.now()
                } : m);
              } else {
                const newMsg = {
                  id: messageId,
                  text: progressMsg,
                  type: 'info',
                  timestamp: Date.now()
                };
                return [...prev, newMsg].slice(-maxMessages);
              }
            });
          }
        });
        xhr.addEventListener("load", () => {
          if (xhr.status === 200) {
            try {
              const data = JSON.parse(xhr.responseText);
              console.log(`File ${index + 1} full response:`, data);

              // Remove progress message
              setUploadMessages(prev => prev.filter(m => m.id !== messageId));
              if (data.success) {
                uploadedCount++;
                addUploadMessage(`✓ ${shortName}`, 'success');
              } else {
                failedCount++;
                const errorMsg = data.error || data.message || data.data?.message || 'Unknown error';
                console.error(`Upload failed for ${displayName}:`, errorMsg);
                console.error('Full error response:', data);
                addUploadMessage(`✗ ${shortName}: ${errorMsg}`, 'error');
              }
              resolve(data);
            } catch (error) {
              console.error(`Error parsing response for file ${index + 1}:`, error);
              console.error('Raw response:', xhr.responseText);
              failedCount++;
              setUploadMessages(prev => prev.filter(m => m.id !== messageId));
              addUploadMessage(`✗ ${shortName}: Parse error`, 'error');
              reject(error);
            }
          } else {
            console.error(`Upload failed for file ${index + 1}. Status: ${xhr.status}`);
            console.error('Response text:', xhr.responseText);
            failedCount++;
            setUploadMessages(prev => prev.filter(m => m.id !== messageId));
            addUploadMessage(`✗ ${shortName}: HTTP ${xhr.status}`, 'error');
            reject(new Error(`HTTP ${xhr.status}`));
          }
        });
        xhr.addEventListener("error", () => {
          console.error(`Network error uploading file ${index + 1}`);
          failedCount++;
          setUploadMessages(prev => prev.filter(m => m.id !== messageId));
          addUploadMessage(`✗ ${shortName}: Network error`, 'error');
          reject(new Error("Network error"));
        });
        xhr.open("POST", ajaxurl);
        xhr.send(formData);
      });
    };

    // Upload all files sequentially to show individual progress
    const uploadSequentially = async () => {
      for (let i = 0; i < files.length; i++) {
        try {
          await uploadFile(files[i], i);
        } catch (error) {
          console.error(`Failed to upload file ${i + 1}:`, error);
        }
      }
    };
    uploadSequentially().then(() => {
      (0,_utils_fetchHelpers__WEBPACK_IMPORTED_MODULE_12__.fetchDirectoryContents)(selectedDirPath, setContents, sortContents);
      const message = `✓ Upload complete: ${uploadedCount} succeeded${failedCount > 0 ? `, ${failedCount} failed` : ''}`;
      addUploadMessage(message, 'success');
    }).catch(error => {
      console.error("Error during upload:", error);
      addUploadMessage("An error occurred during the upload.", 'error');
    });
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (selectedDir) {
      setIsLoading(true); // Set loading to true when starting to fetch
      setSelectedRow(null); // Reset selection when changing directory
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
    if (contextMenu.visible) {
      document.addEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [contextMenu.visible]);

  // Add drag and drop detection for #wpbody
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const wpbody = document.querySelector("#wpbody");
    if (!wpbody) return;
    let dragCounter = 0;
    const handleDragEnter = e => {
      e.preventDefault();
      e.stopPropagation();
      // Check if dragging files (not text or other elements)
      if (e.dataTransfer.types && e.dataTransfer.types.includes("Files")) {
        dragCounter++;
        setShowDragOverlay(true);
      }
    };
    const handleDragOver = e => {
      e.preventDefault();
      e.stopPropagation();
    };
    const handleDragLeave = e => {
      e.preventDefault();
      e.stopPropagation();
      dragCounter--;
      if (dragCounter === 0) {
        setShowDragOverlay(false);
      }
    };
    const handleDrop = e => {
      e.preventDefault();
      e.stopPropagation();
      dragCounter = 0;
      setShowDragOverlay(false);
    };
    wpbody.addEventListener("dragenter", handleDragEnter);
    wpbody.addEventListener("dragover", handleDragOver);
    wpbody.addEventListener("dragleave", handleDragLeave);
    wpbody.addEventListener("drop", handleDrop);
    return () => {
      wpbody.removeEventListener("dragenter", handleDragEnter);
      wpbody.removeEventListener("dragover", handleDragOver);
      wpbody.removeEventListener("dragleave", handleDragLeave);
      wpbody.removeEventListener("drop", handleDrop);
    };
  }, []);
  const breadcrumbs = getBreadcrumbs();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "files"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "file-creation-buttons border-0 border-b border-solid border-border p-sm flex gap-sm justify-between items-center"
  }, breadcrumbs.length > 1 ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("nav", {
    className: "breadcrumbs",
    "aria-label": "Breadcrumb navigation"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ol", {
    className: "flex items-center gap-xs"
  }, breadcrumbs.map((crumb, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    key: crumb.path,
    className: "flex items-center gap-xs"
  }, index > 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "breadcrumb-separator",
    "aria-hidden": "true"
  }, "/"), index === breadcrumbs.length - 1 ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "breadcrumb-current",
    "aria-current": "page"
  }, crumb.name) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "breadcrumb-link",
    onClick: () => onSelect({
      path: crumb.path
    }),
    title: `Navigate to ${crumb.name}`
  }, crumb.name))))) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex gap-sm"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: "secondary",
    onClick: () => (0,_utils_fileOperations__WEBPACK_IMPORTED_MODULE_13__.handleCreateFile)(selectedDir.path, setContents, sortContents, setUploadStatus)
  }, "Create File"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: "secondary",
    onClick: () => (0,_utils_fileOperations__WEBPACK_IMPORTED_MODULE_13__.handleCreateFolder)(selectedDir.path, setContents, sortContents, setUploadStatus)
  }, "Create Folder"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_UploadFilesModal__WEBPACK_IMPORTED_MODULE_4__["default"], {
    selectedDirPath: selectedDir.path,
    onUpload: handleFileDrop
  }))), isLoading && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Spinner, null), !isLoading && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    tabIndex: 0,
    style: {
      outline: 'none'
    },
    role: "region",
    "aria-label": "File browser",
    "aria-describedby": "file-browser-help",
    onFocus: () => {
      // Auto-select first item when table gets focus and nothing is selected
      if (selectedRow === null && contents.length > 0) {
        setSelectedRow(0);
      }
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "file-browser-help",
    style: {
      position: 'absolute',
      left: '-10000px'
    }
  }, "Use arrow keys to navigate, Enter to open files or folders, Escape or Backspace to go up one level, Delete to remove selected item"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
    className: "w-full border-collapse",
    role: "grid",
    "aria-readonly": "false"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("thead", {
    className: "table-border"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
    role: "row"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    className: "text-left p-md cursor-pointer hover:bg-alt select-none",
    role: "columnheader",
    onClick: () => handleSort('name'),
    title: "Click to sort by name"
  }, "Name", getSortIndicator('name')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    className: "text-left",
    role: "columnheader"
  }, "Permissions"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    className: "text-left cursor-pointer hover:bg-alt select-none",
    role: "columnheader",
    onClick: () => handleSort('size'),
    title: "Click to sort by size"
  }, "Size", getSortIndicator('size')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    className: "text-left cursor-pointer hover:bg-alt select-none",
    role: "columnheader",
    onClick: () => handleSort('lastModified'),
    title: "Click to sort by date"
  }, "Last Modified", getSortIndicator('lastModified')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    className: "text-left cursor-pointer hover:bg-alt select-none",
    role: "columnheader",
    onClick: () => handleSort('kind'),
    title: "Click to sort by kind"
  }, "Kind", getSortIndicator('kind')))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", {
    role: "rowgroup"
  }, isNotRoot && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
    role: "row",
    "aria-selected": selectedRow === -1,
    "aria-label": "Parent directory",
    onClick: () => handleRowClick(-1),
    onDoubleClick: handleGoUp,
    className: `cursor-pointer hover:bg-active ${selectedRow === -1 ? "bg-active outline outline-offset-2 outline-border-active" : ""}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    className: "table-border py-sm",
    role: "gridcell"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "folder-item"
  }, "...")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    className: "table-border py-sm",
    role: "gridcell"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    className: "table-border py-sm",
    role: "gridcell"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    className: "table-border py-sm",
    role: "gridcell"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    className: "table-border py-sm",
    role: "gridcell"
  })), contents.map((content, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
    key: index,
    role: "row",
    "aria-selected": selectedRow === index,
    "aria-label": `${content.isFile ? 'File' : 'Folder'}: ${content.name}`,
    onClick: () => handleRowClick(index),
    onContextMenu: e => handleRightClick(e, content, index),
    onDoubleClick: () => handleDoubleClick(content),
    className: `cursor-pointer hover:bg-active ${selectedRow === index ? "bg-active outline outline-offset-2 outline-border-active" : ""}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    className: "table-border py-sm",
    role: "gridcell"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: content.isFile ? "file-item" : "folder-item"
  }, content.isFile ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "icon-wrapper",
    style: {
      display: 'inline-flex',
      marginRight: '8px',
      verticalAlign: 'middle'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_common_Icons__WEBPACK_IMPORTED_MODULE_3__.FileIcon, null)) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "icon-wrapper",
    style: {
      display: 'inline-flex',
      marginRight: '8px',
      verticalAlign: 'middle'
    }
  }, selectedDir.path === content.path ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_common_Icons__WEBPACK_IMPORTED_MODULE_3__.FolderOpenIcon, null) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_common_Icons__WEBPACK_IMPORTED_MODULE_3__.FolderIcon, null)), content.name)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    className: "table-border py-sm",
    role: "gridcell"
  }, content.permissions), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    className: "table-border py-sm",
    role: "gridcell"
  }, content.isFile ? formatFileSize(content.size) : calculatingFolders.has(content.path) ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "calculating-size"
  }, "Calculating...") : folderSizes[content.path] ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "folder-size"
  }, formatFileSize(folderSizes[content.path])) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "calculate-size-btn",
    onClick: e => {
      e.stopPropagation();
      calculateFolderSize(content.path);
    },
    title: "Click to calculate folder size"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "default-text"
  }, "\u2013"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "hover-text"
  }, "Calculate"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    className: "table-border py-sm",
    role: "gridcell"
  }, content.lastModified), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    className: "table-border py-sm",
    role: "gridcell"
  }, getFileKind(content))))))), contextMenu.visible && contextMenu.item && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_ContextMenu__WEBPACK_IMPORTED_MODULE_5__["default"], {
    x: contextMenu.x,
    y: contextMenu.y,
    onRename: handleRename,
    onDelete: () => handleDelete(contextMenu.item),
    onCompress: () => handleCompress(contextMenu.item, refreshDirectoryContents),
    onUncompress: () => handleUncompress(contextMenu.item, refreshDirectoryContents),
    onCut: () => handleCut(contextMenu.item, refreshDirectoryContents),
    onRefresh: () => handleRefresh(contextMenu.item, refreshDirectoryContents),
    onCopy: () => handleCopy(contextMenu.item, refreshDirectoryContents),
    onPaste: () => handlePaste(contextMenu.item, refreshDirectoryContents),
    onDownload: () => handleDownload(contextMenu.item, refreshDirectoryContents),
    onEdit: () => handleEdit(contextMenu.item),
    onPermissions: handlePermissions,
    onMove: handleMove,
    onSearch: handleSearch,
    showEdit: contextMenu.item.isFile && !contextMenu.item.name.includes(".zip"),
    showCompress: !contextMenu.item.name.includes(".zip"),
    showUncompress: contextMenu.item.name.includes(".zip"),
    showSearch: !contextMenu.item.isFile
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_modals_MoveModal__WEBPACK_IMPORTED_MODULE_9__["default"], {
    isOpen: moveModal.isOpen,
    item: moveModal.item,
    selectedDestination: moveModal.selectedDestination,
    directories: directories,
    onClose: () => setMoveModal({
      isOpen: false,
      item: null,
      selectedDestination: null
    }),
    onSelect: path => setMoveModal(prev => ({
      ...prev,
      selectedDestination: path
    })),
    onSubmit: handleMoveSubmit
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_modals_PermissionsModal__WEBPACK_IMPORTED_MODULE_8__["default"], {
    isOpen: permissionsModal.isOpen,
    item: permissionsModal.item,
    permissions: permissionsModal.permissions,
    onClose: () => setPermissionsModal({
      isOpen: false,
      item: null,
      permissions: ''
    }),
    onPermissionsChange: value => setPermissionsModal(prev => ({
      ...prev,
      permissions: value
    })),
    onSubmit: handlePermissionsSubmit
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_modals_ImagePreviewModal__WEBPACK_IMPORTED_MODULE_10__["default"], {
    isOpen: imagePreview.isOpen,
    item: imagePreview.item,
    url: imagePreview.url,
    onClose: () => setImagePreview({
      isOpen: false,
      item: null,
      url: ''
    })
  }), uploadMessages.length > 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      position: "fixed",
      bottom: "10px",
      right: "10px",
      zIndex: 1000000,
      display: "flex",
      flexDirection: "column-reverse",
      gap: "8px",
      maxHeight: "80vh",
      overflowY: "auto",
      pointerEvents: "none"
    }
  }, uploadMessages.map(msg => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: msg.id,
    style: {
      pointerEvents: "auto",
      animation: "slideIn 0.3s ease-out"
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Snackbar, null, msg.text)))), showDragOverlay && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "rgba(0, 0, 0, 0.7)",
      zIndex: 999999,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      pointerEvents: "all"
    },
    onDrop: async e => {
      e.preventDefault();
      e.stopPropagation();

      // Handle both files and folders
      const items = e.dataTransfer.items;
      const files = [];
      if (items) {
        // Use DataTransferItemList interface to support folders
        const promises = [];
        for (let i = 0; i < items.length; i++) {
          const item = items[i].webkitGetAsEntry();
          if (item) {
            promises.push(traverseFileTree(item, ""));
          }
        }
        const results = await Promise.all(promises);
        results.forEach(result => files.push(...result));
        console.log("Files dropped (including folders):", files);
        if (files.length > 0) {
          handleFileDrop(selectedDir.path, files);
        }
      } else {
        // Fallback to simple file list
        const fileList = Array.from(e.dataTransfer.files);
        console.log("Files dropped:", fileList);
        if (fileList.length > 0) {
          handleFileDrop(selectedDir.path, fileList);
        }
      }
      setShowDragOverlay(false);
    },
    onDragOver: e => {
      e.preventDefault();
      e.stopPropagation();
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      background: "#e7ecef",
      padding: "40px",
      borderRadius: "8px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--pri)",
      minHeight: "200px",
      minWidth: "400px",
      fontSize: "20px",
      fontWeight: "bold",
      pointerEvents: "none"
    }
  }, "Drop files and folders here to upload")));
};
const FileManager = () => {
  const [selectedDir, setSelectedDir] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)({
    path: ""
  }); // Use useState here
  const [contents, setContents] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)([]); // And here
  const [openTabs, setOpenTabs] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const [activeTab, setActiveTab] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)("files"); // Track the active tab
  const [directories, setDirectories] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const [searchModal, setSearchModal] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)({
    isOpen: false,
    item: null
  });

  // Function to handle directory selection
  const onSelectDirectory = dir => {
    setSelectedDir({
      path: dir.path
    });
    setActiveTab("files"); // Set the "Files" tab as active when a directory is selected from the sidebar
  };

  // Fetch directories for sidebar and move modal
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
      if (data.success) {
        setDirectories(data.data);
      }
    }).catch(error => console.error("Error:", error));
  }, []);

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
        onCloseTab: handleCloseTab,
        directories: directories,
        searchModal: searchModal,
        setSearchModal: setSearchModal
      });
    }
    if (activeTabContent) {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_FileContentTab__WEBPACK_IMPORTED_MODULE_7__["default"], {
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

  // Search handlers - moved to FileManager to persist across tab switches
  const handleSearchSubmit = async (folderPath, searchTerm, fileTypes = []) => {
    try {
      const formData = new URLSearchParams({
        action: "search_in_folder",
        path: folderPath,
        searchTerm: searchTerm,
        verify_nonce: filemanager.DPDEV_nonce
      });

      // Add file types as array
      fileTypes.forEach(type => {
        formData.append('fileTypes[]', type);
      });
      const response = await fetch(ajaxurl, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: formData.toString()
      });
      const data = await response.json();
      if (data.success) {
        return data.data.results || [];
      } else {
        throw new Error(data.message || "Search failed");
      }
    } catch (error) {
      console.error("Search error:", error);
      return [];
    }
  };
  const handleSearchResultClick = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(result => {
    // Open the file in a new tab using existing functionality
    const fileItem = {
      name: result.fileName,
      path: result.filePath,
      isFile: true,
      contents: "",
      // Will be loaded when tab opens
      isEditing: false
    };

    // Fetch file contents and open in tab
    fetch(ajaxurl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams({
        action: "get_file_contents",
        path: result.filePath,
        verify_nonce: filemanager.DPDEV_nonce
      }).toString()
    }).then(response => response.json()).then(data => {
      if (data.success) {
        const updatedItem = {
          ...fileItem,
          contents: data.data.contents.replace(/SLASH/g, "\\"),
          isEditing: true
        };
        // Use setOpenTabs and setActiveTab directly
        setOpenTabs(prevTabs => {
          if (!prevTabs.find(tab => tab.path === updatedItem.path)) {
            const newTabs = [...prevTabs, updatedItem];
            setActiveTab(updatedItem.path);
            return newTabs;
          }
          return prevTabs;
        });
        // Don't close modal - keep it open so user can open multiple files
      } else {
        console.error("Failed to fetch file contents:", data);
      }
    }).catch(error => {
      console.error("Error fetching file contents:", error);
    });
  }, []);
  const handleSearchModalClose = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    setSearchModal({
      isOpen: false,
      item: null
    });
  }, []);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "main",
    className: "grow relative"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tabs-buttons flex absolute top-0 left-0 -translate-y-full"
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
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_common_Icons__WEBPACK_IMPORTED_MODULE_3__.CloseSmallIcon, null))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "files",
    className: "panel-body clearfix border border-solid border-border rounded-bl-md  grid gap-md bg-base"
  }, renderTabContent())), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Sidebar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onSelect: onSelectDirectory,
    directories: directories
  }), searchModal.isOpen && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_modals_SearchModal__WEBPACK_IMPORTED_MODULE_11__["default"], {
    isOpen: searchModal.isOpen,
    item: searchModal.item,
    onClose: handleSearchModalClose,
    onSearch: handleSearchSubmit,
    onOpenFile: handleSearchResultClick,
    abspath: abspath
  }));
};
const root = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createRoot)(document.getElementById("fm-app"));
root.render((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(FileManager, null));
})();

/******/ })()
;
//# sourceMappingURL=index.js.map