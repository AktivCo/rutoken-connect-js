/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@aktivco/rutoken-connect/dist/rtconnect.umd.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@aktivco/rutoken-connect/dist/rtconnect.umd.js ***!
  \*********************************************************************/
/***/ ((module) => {

/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
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
/******/ 	var __nested_webpack_require_4667__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__nested_webpack_require_4667__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__nested_webpack_require_4667__.o(definition, key) && !__nested_webpack_require_4667__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__nested_webpack_require_4667__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__nested_webpack_require_4667__.r = (exports) => {
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
/******/ 	__webpack_modules__["./src/index.js"](0, __webpack_exports__, __nested_webpack_require_4667__);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});

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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _aktivco_rutoken_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aktivco/rutoken-connect */ "./node_modules/@aktivco/rutoken-connect/dist/rtconnect.umd.js");
/* harmony import */ var _aktivco_rutoken_connect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_aktivco_rutoken_connect__WEBPACK_IMPORTED_MODULE_0__);


function setStatus(message) {
    if (document.readyState !== 'complete') {
        document.addEventListener('DOMContentLoaded', () => {
            document.getElementById('status').textContent = message;
        }, { once: true });
    } else {
        document.getElementById('status').textContent = message;
    }
}

_aktivco_rutoken_connect__WEBPACK_IMPORTED_MODULE_0__.getStatus()
    .then((status) => {
        let message = '';
        switch (status) {
        case _aktivco_rutoken_connect__WEBPACK_IMPORTED_MODULE_0__.Status.ready:
            message = 'Готово к работе';
            break;
        case _aktivco_rutoken_connect__WEBPACK_IMPORTED_MODULE_0__.Status.noExtension:
            message = 'Расширение не установлено';
            break;
        case _aktivco_rutoken_connect__WEBPACK_IMPORTED_MODULE_0__.Status.noNative:
            message = 'Приложение не установлено';
            break;
        case _aktivco_rutoken_connect__WEBPACK_IMPORTED_MODULE_0__.Status.oldNative:
            message = 'Приложение необходимо обновить';
            break;
        case _aktivco_rutoken_connect__WEBPACK_IMPORTED_MODULE_0__.Status.oldExtension:
            message = 'Расширение необходимо обновить';
            break;
        case _aktivco_rutoken_connect__WEBPACK_IMPORTED_MODULE_0__.Status.error:
            message = 'Произошла ошибка, обратитесь в техническую поддержку';
            break;
        default:
            throw status;
        }
        setStatus(message);
    })
    .catch((error) => {
        const message = 'Неизвестен';
        console.warn(error);
        setStatus(message);
    });

})();

/******/ })()
;
//# sourceMappingURL=index.js.map