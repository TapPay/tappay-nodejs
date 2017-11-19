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

Object.defineProperty(exports, "__esModule", { value: true });
let config = {
    partner_key: '',
    env: '',
    base_url: ''
};
exports.default = config;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// .ts files
const config_1 = __webpack_require__(0);
const TapPayServices_1 = __webpack_require__(2);
const SANDBOX = "https://sandbox.tappayapis.com";
const PROD = "https://prod.tappayapis.com";
const initialize = ({ partner_key, env }) => {
    config_1.default.partner_key = partner_key;
    config_1.default.env = env;
    config_1.default.base_url = (env === 'sandbox') ? SANDBOX : PROD;
};
exports.default = {
    initialize,
    payByPrime: TapPayServices_1.payByPrime,
    payByToken: TapPayServices_1.payByToken,
    refund: TapPayServices_1.refund,
    getRecords: TapPayServices_1.getRecords,
    getRecordHistory: TapPayServices_1.getRecordHistory,
    capToday: TapPayServices_1.capToday,
    bindCard: TapPayServices_1.bindCard,
    removeCard: TapPayServices_1.removeCard
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// modules
const axios_1 = __webpack_require__(3);
// .ts file
const config_1 = __webpack_require__(0);
const makeRequest = (path, data, callback = null) => {
    axios_1.default.defaults.baseURL = config_1.default.base_url;
    axios_1.default.defaults.headers.post['x-api-key'] = config_1.default.partner_key;
    axios_1.default.defaults.headers.post['Content-Type'] = 'application/json';
    data['partner_key'] = config_1.default.partner_key;
    if (callback !== null) {
        // callback style
        axios_1.default.post(path, data).then((response) => {
            callback(null, response.data);
        }).catch((error) => {
            callback(error, null);
        });
    }
    else {
        // promise style
        return axios_1.default.post(path, data).then(response => response.data).catch(error => error);
    }
};
exports.payByPrime = (data, callback) => {
    return makeRequest('/tpc/payment/pay-by-prime', data, callback);
};
exports.payByToken = (data, callback) => {
    return makeRequest('/tpc/payment/pay-by-token', data, callback);
};
exports.refund = (data, callback) => {
    return makeRequest('/tpc/transaction/refund', data, callback);
};
exports.getRecords = (data, callback) => {
    return makeRequest('/tpc/transaction/query', data, callback);
};
exports.getRecordHistory = (data, callback) => {
    return makeRequest('/tpc/transaction/trade-history', data, callback);
};
exports.capToday = (data, callback) => {
    return makeRequest('/tpc/transaction/cap', data, callback);
};
exports.bindCard = (data, callback) => {
    return makeRequest('/tpc/card/bind', data, callback);
};
exports.removeCard = (data, callback) => {
    return makeRequest('/tpc/card/remove', data, callback);
};


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })
/******/ ]);