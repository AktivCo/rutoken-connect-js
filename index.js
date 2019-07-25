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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@aktivco/rutoken-connect/dist/rtconnect.umd.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@aktivco/rutoken-connect/dist/rtconnect.umd.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
  if (true) module.exports = factory();else {}
})(window, function () {
  return (
    /******/
    function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/

      /******/
      // The require function

      /******/

      function __webpack_require__(moduleId) {
        /******/

        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId]) {
          /******/
          return installedModules[moduleId].exports;
          /******/
        }
        /******/
        // Create a new module (and put it into the cache)

        /******/


        var module = installedModules[moduleId] = {
          /******/
          i: moduleId,

          /******/
          l: false,

          /******/
          exports: {}
          /******/

        };
        /******/

        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/

        /******/
        // Flag the module as loaded

        /******/

        module.l = true;
        /******/

        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/

      /******/

      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __webpack_require__.m = modules;
      /******/

      /******/
      // expose the module cache

      /******/

      __webpack_require__.c = installedModules;
      /******/

      /******/
      // define getter function for harmony exports

      /******/

      __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
          /******/
          Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
          });
          /******/
        }
        /******/

      };
      /******/

      /******/
      // define __esModule on exports

      /******/


      __webpack_require__.r = function (exports) {
        /******/
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
          /******/
          Object.defineProperty(exports, Symbol.toStringTag, {
            value: 'Module'
          });
          /******/
        }
        /******/


        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        /******/
      };
      /******/

      /******/
      // create a fake namespace object

      /******/
      // mode & 1: value is a module id, require it

      /******/
      // mode & 2: merge all properties of value into the ns

      /******/
      // mode & 4: return value when already ns object

      /******/
      // mode & 8|1: behave like require

      /******/


      __webpack_require__.t = function (value, mode) {
        /******/
        if (mode & 1) value = __webpack_require__(value);
        /******/

        if (mode & 8) return value;
        /******/

        if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
        /******/

        var ns = Object.create(null);
        /******/

        __webpack_require__.r(ns);
        /******/


        Object.defineProperty(ns, 'default', {
          enumerable: true,
          value: value
        });
        /******/

        if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) {
          return value[key];
        }.bind(null, key));
        /******/

        return ns;
        /******/
      };
      /******/

      /******/
      // getDefaultExport function for compatibility with non-harmony modules

      /******/


      __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
        /******/
        function getDefault() {
          return module['default'];
        } :
        /******/
        function getModuleExports() {
          return module;
        };
        /******/

        __webpack_require__.d(getter, 'a', getter);
        /******/


        return getter;
        /******/
      };
      /******/

      /******/
      // Object.prototype.hasOwnProperty.call

      /******/


      __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/

      /******/
      // __webpack_public_path__

      /******/


      __webpack_require__.p = "";
      /******/

      /******/

      /******/
      // Load entry module and return exports

      /******/

      return __webpack_require__(__webpack_require__.s = 0);
      /******/
    }(
    /************************************************************************/

    /******/
    [
    /* 0 */

    /***/
    function (module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Status", function () {
        return Status;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getStatus", function () {
        return getStatus;
      });

      const Status = Object.freeze({
        noExtension: -1,
        ready: 0,
        noNative: 1,
        oldExtension: 2,
        oldNative: 3,
        error: 4
      });
      const lastStatus = Status.error;
      const isFirefox = typeof InstallTrigger !== 'undefined';
      let status;
      let statusPromise;

      function getStatus() {
        if (status !== undefined && status !== null) return Promise.resolve(status);
        if (statusPromise !== undefined) return statusPromise;
        let resolve;
        let reject;
        statusPromise = new Promise((resolveCallback, rejectCallback) => {
          resolve = value => {
            if (statusPromise !== undefined && status !== null) {
              resolveCallback(value);
            }

            status = value;
            statusPromise = undefined;
          };

          reject = reason => {
            if (statusPromise !== undefined && status !== null) {
              rejectCallback(reason);
            }

            status = null;
            statusPromise = Promise.reject(reason);
          };
        });

        const onMessage = event => {
          if (event.source !== window || event.data === undefined || event.data.rutoken === undefined || event.data.rutoken.uuid !== 'EE4F9C58-64D8-4FCD-AB45-0E3040EEB37D') {
            return;
          }

          const newStatus = event.data.rutoken.status;

          if (newStatus !== undefined && newStatus >= 0 && newStatus <= lastStatus) {
            resolve(newStatus);
          } else {
            reject(new Error(`Couldn't parse extension status: ${newStatus}`));
          }
        };

        window.addEventListener('message', onMessage);
        let url = 'chrome-extension://acbchkahfmndkenefkcklofjmipghjjp/check_rtconnect_extension';
        const options = {};

        if (isFirefox) {
          url = 'https://qbwjg564lyt1tdfo23xz5l3udvdfe0ux.rutoken.ru/api/v1/check_rtconnect_extension';
          options.mode = 'no-cors';
        }

        return fetch(url, options).then(() => {
          // request in firefox is not canceled - no extension
          // request in chrome is successful - extension will send status
          if (isFirefox) {
            resolve(Status.noExtension);
          }
        }).catch(reason => {
          // request in firefox is canceled - extension is present
          // request in chrome failed - no extension
          if (isFirefox) {
            setTimeout(() => {
              if (status === undefined) {
                window.removeEventListener('message', onMessage);
                reject(reason);
              }
            }, 2000);
          } else {
            resolve(Status.noExtension);
          }
        }).then(() => {
          if (status !== undefined && status !== null) {
            return status;
          }

          return statusPromise;
        });
      }
      /***/

    }])
  );
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _aktivco_rutoken_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aktivco/rutoken-connect */ "./node_modules/@aktivco/rutoken-connect/dist/rtconnect.umd.js");
/* harmony import */ var _aktivco_rutoken_connect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_aktivco_rutoken_connect__WEBPACK_IMPORTED_MODULE_0__);


function setStatus(message) {
  if (document.readyState !== 'complete') {
    document.addEventListener('DOMContentLoaded', () => {
      document.getElementById('status').textContent = message;
    }, {
      once: true
    });
  } else {
    document.getElementById('status').textContent = message;
  }
}

_aktivco_rutoken_connect__WEBPACK_IMPORTED_MODULE_0__["getStatus"]().then(status => {
  let message = '';

  switch (status) {
    case _aktivco_rutoken_connect__WEBPACK_IMPORTED_MODULE_0__["Status"].ready:
      message = 'Готово к работе';
      break;

    case _aktivco_rutoken_connect__WEBPACK_IMPORTED_MODULE_0__["Status"].noExtension:
      message = 'Расширение не установлено';
      break;

    case _aktivco_rutoken_connect__WEBPACK_IMPORTED_MODULE_0__["Status"].noNative:
      message = 'Приложение не установлено';
      break;

    case _aktivco_rutoken_connect__WEBPACK_IMPORTED_MODULE_0__["Status"].oldNative:
      message = 'Приложение необходимо обновить';
      break;

    case _aktivco_rutoken_connect__WEBPACK_IMPORTED_MODULE_0__["Status"].oldExtension:
      message = 'Расширение необходимо обновить';
      break;

    case _aktivco_rutoken_connect__WEBPACK_IMPORTED_MODULE_0__["Status"].error:
      message = 'Произошла ошибка, обратитесь в техническую поддержку';
      break;

    default:
      throw status;
  }

  setStatus(message);
}).catch(error => {
  const message = 'Неизвестен';
  console.warn(error);
  setStatus(message);
});

/***/ })

/******/ });
//# sourceMappingURL=index.js.map