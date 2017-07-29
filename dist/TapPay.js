module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    api_key: '',
    environment: ''
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _configuration = __webpack_require__(0);

var _configuration2 = _interopRequireDefault(_configuration);

var _TapPayFactor = __webpack_require__(2);

var _TapPayFactor2 = _interopRequireDefault(_TapPayFactor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialize = function initialize(data) {
    if (data.environment !== 'sandbox' && data.environment !== 'production') {
        throw new Error('Enviroment does\'t match');
    }
    _configuration2.default.api_key = data.api_key;
    _configuration2.default.environment = data.environment;
};

exports.default = function () {
    return {
        initialize: initialize,
        refund: (0, _TapPayFactor2.default)('Refund').refund,
        getRecords: (0, _TapPayFactor2.default)('Record').getRecords,
        capToday: (0, _TapPayFactor2.default)('CapToday').capToday,
        DirectPay: (0, _TapPayFactor2.default)('DirectPay'),
        ApplePay: (0, _TapPayFactor2.default)('ApplePay'),
        AndroidPay: (0, _TapPayFactor2.default)('AndroidPay')
    };
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _TapPayRequest = __webpack_require__(3);

var _TapPayRequest2 = _interopRequireDefault(_TapPayRequest);

var _DirectPay = __webpack_require__(5);

var _DirectPay2 = _interopRequireDefault(_DirectPay);

var _Refund = __webpack_require__(6);

var _Refund2 = _interopRequireDefault(_Refund);

var _Record = __webpack_require__(7);

var _Record2 = _interopRequireDefault(_Record);

var _CapToday = __webpack_require__(8);

var _CapToday2 = _interopRequireDefault(_CapToday);

var _ApplePay = __webpack_require__(9);

var _ApplePay2 = _interopRequireDefault(_ApplePay);

var _AndroidPay = __webpack_require__(10);

var _AndroidPay2 = _interopRequireDefault(_AndroidPay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FACTOR_TABLE = {
    'DirectPay': _DirectPay2.default,
    'Refund': _Refund2.default,
    'Record': _Record2.default,
    'CapToday': _CapToday2.default,
    'ApplePay': _ApplePay2.default,
    'AndroidPay': _AndroidPay2.default
};

exports.default = function (type) {
    // Inject request into factor
    if (type in FACTOR_TABLE) return FACTOR_TABLE[type](_TapPayRequest2.default);else throw new Error('TapPay factor type does\'t match');
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _superagent = __webpack_require__(4);

var _superagent2 = _interopRequireDefault(_superagent);

var _configuration = __webpack_require__(0);

var _configuration2 = _interopRequireDefault(_configuration);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SANDBOX = 'https://sandbox.tappayapis.com';
var PROD = 'https://prod.tappayapis.com';

var request = function request(url, data) {
    var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;


    // Put the api_key into body
    data['partnerkey'] = _configuration2.default.api_key;

    var headers = {
        'Content-Type': 'application/json',
        'x-api-key': _configuration2.default.api_key
    };
    var desitination_url = _configuration2.default.environment === 'sandbox' ? SANDBOX : _configuration2.default.environment === 'production' ? PROD : SANDBOX;
    var final_url = '' + desitination_url + url;

    //  Support callback and Promise
    if (callback !== null && typeof callback === 'function') {
        _superagent2.default.post(final_url).set(headers).send(data).end(callback);
    } else {
        return _superagent2.default.post(final_url).set(headers).send(data);
    }
};

var TapPayRequest = {};

TapPayRequest.payByPrime = function (data, callback) {
    return request('/tpc/partner/directpay/paybyprime', data, callback);
};

TapPayRequest.payByApplePay = function (data, callback) {
    return request('/tpc/applepay/paymenttoken/pay', data, callback);
};

TapPayRequest.payByAndroidPay = function (data, callback) {
    return request('/tpc/androidpay/paymenttoken/pay', data, callback);
};

TapPayRequest.refund = function (data, callback) {
    return request('/tpc/partner/fastrefund', data, callback);
};

TapPayRequest.getRecords = function (data, callback) {
    return request('/tpc/partner/getrecordsplus', data, callback);
};

TapPayRequest.capTody = function (data, callback) {
    return request('/tpc/partner/captoday', data, callback);
};

exports.default = TapPayRequest;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("superagent");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (request) {
    return {
        payByPrime: function payByPrime(data, callback) {
            return request.payByPrime(data, callback);
        }
    };
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (request) {
    return {
        refund: function refund(data, callback) {
            return request.refund(data, callback);
        }
    };
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (request) {
    return {
        getRecords: function getRecords(data, callback) {
            return request.getRecords(data, callback);
        }
    };
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (request) {
    return {
        capToday: function capToday(data, callback) {
            return request.capToday(data, callback);
        }
    };
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (request) {
    return {
        pay: function pay(data, callback) {
            return request.payByApplePay(data, callback);
        }
    };
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (request) {
    return {
        pay: function pay(data, callback) {
            return request.payByAndroidPay(data, callback);
        }
    };
};

/***/ })
/******/ ]);