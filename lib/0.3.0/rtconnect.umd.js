/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["rutoken-connect"] = factory();
	else
		root["rutoken-connect"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Status\": () => (/* binding */ Status),\n/* harmony export */   \"getStatus\": () => (/* binding */ getStatus)\n/* harmony export */ });\nconst Status = Object.freeze({\n    noExtension: -1,\n    ready: 0,\n    noNative: 1,\n    oldExtension: 2,\n    oldNative: 3,\n    error: 4,\n});\nconst lastStatus = Status.error;\n\nconst isFirefox = (function checkIsFirefox() {\n    const ua = window.navigator.userAgent;\n    return !!ua.match(/firefox/i) && !ua.match(/seamonkey/i);\n}());\n\nlet status;\nlet statusPromise;\n\nfunction getStatus() {\n    if (status !== undefined && status !== null) return Promise.resolve(status);\n    if (statusPromise !== undefined) return statusPromise;\n\n    let resolve;\n    let reject;\n    statusPromise = new Promise((resolveCallback, rejectCallback) => {\n        resolve = (value) => {\n            if (statusPromise !== undefined && status !== null) {\n                resolveCallback(value);\n            }\n            status = value;\n            statusPromise = undefined;\n        };\n\n        reject = (reason) => {\n            if (statusPromise !== undefined && status !== null) {\n                rejectCallback(reason);\n            }\n            status = null;\n            statusPromise = Promise.reject(reason);\n        };\n    });\n\n    const onMessage = (event) => {\n        if (event.source !== window || event.data === undefined || event.data.rutoken === undefined\n            || event.data.rutoken.uuid !== 'EE4F9C58-64D8-4FCD-AB45-0E3040EEB37D') {\n            return;\n        }\n\n        const { status: newStatus } = event.data.rutoken;\n        if (newStatus !== undefined && newStatus >= 0 && newStatus <= lastStatus) {\n            resolve(newStatus);\n        } else {\n            reject(new Error(`Couldn't parse extension status: ${newStatus}`));\n        }\n    };\n\n    window.addEventListener('message', onMessage);\n\n    let url = 'chrome-extension://acbchkahfmndkenefkcklofjmipghjjp/check_rtconnect_extension';\n    const options = {};\n\n    if (isFirefox) {\n        url = 'https://qbwjg564lyt1tdfo23xz5l3udvdfe0ux.rutoken.ru/api/v1/check_rtconnect_extension';\n        options.mode = 'no-cors';\n    }\n\n    return fetch(url, options).then(() => {\n        // request in firefox is not canceled - no extension\n        // request in chrome is successful - extension will send status\n        if (isFirefox) {\n            resolve(Status.noExtension);\n        }\n    }).catch((reason) => {\n        // request in firefox is canceled - extension is present\n        // request in chrome failed - no extension\n        if (isFirefox) {\n            setTimeout(() => {\n                if (status === undefined) {\n                    window.removeEventListener('message', onMessage);\n                    reject(reason);\n                }\n            }, 2000);\n        } else {\n            resolve(Status.noExtension);\n        }\n    }).then(() => {\n        if (status !== undefined && status !== null) {\n            return status;\n        }\n        return statusPromise;\n    });\n}\n\n\n\n\n//# sourceURL=webpack://rutoken-connect/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});