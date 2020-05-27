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
/******/ 	__webpack_require__.p = "assets/scripts/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./section22/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./section22/app.js":
/*!**************************!*\
  !*** ./section22/app.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const storeBtn = document.getElementById('store-btn');\nconst retrBtn = document.getElementById('retrieve-btn');\nlet db;\nconst dbRequest = indexedDB.open('StorageDummy', 1);\n\ndbRequest.onsuccess = function (event) {\n  db = event.target.result;\n};\n\ndbRequest.onupgradeneeded = function (event) {\n  db = event.target.result;\n  const objStore = db.createObjectStore('products', {\n    keyPath: 'id'\n  });\n\n  objStore.transaction.oncomplete = function (event) {\n    const productsStore = db.transaction('products', 'readwrite').objectStore('products');\n    productsStore.add({\n      id: 'p1',\n      title: 'A First Product',\n      price: 12.99,\n      tags: ['Expensive', 'Luxury']\n    });\n  };\n};\n\ndbRequest.onerror = function (event) {\n  console.log('ERROR!');\n};\n\nstoreBtn.addEventListener('click', () => {\n  if (!db) {\n    return;\n  }\n\n  const productsStore = db.transaction('products', 'readwrite').objectStore('products');\n  productsStore.add({\n    id: 'p2',\n    title: 'A Second Product',\n    price: 122.99,\n    tags: ['Expensive', 'Luxury']\n  });\n});\nretrBtn.addEventListener('click', () => {\n  const productsStore = db.transaction('products', 'readwrite').objectStore('products');\n  const request = productsStore.get('p2');\n\n  request.onsuccess = function () {\n    console.log(request.result);\n  };\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZWN0aW9uMjIvYXBwLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc2VjdGlvbjIyL2FwcC5qcz83Y2Y0Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHN0b3JlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0b3JlLWJ0bicpO1xyXG5jb25zdCByZXRyQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JldHJpZXZlLWJ0bicpO1xyXG5cclxubGV0IGRiO1xyXG5cclxuY29uc3QgZGJSZXF1ZXN0ID0gaW5kZXhlZERCLm9wZW4oJ1N0b3JhZ2VEdW1teScsIDEpO1xyXG5cclxuZGJSZXF1ZXN0Lm9uc3VjY2VzcyA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgZGIgPSBldmVudC50YXJnZXQucmVzdWx0O1xyXG59O1xyXG5cclxuZGJSZXF1ZXN0Lm9udXBncmFkZW5lZWRlZCA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgZGIgPSBldmVudC50YXJnZXQucmVzdWx0O1xyXG5cclxuICBjb25zdCBvYmpTdG9yZSA9IGRiLmNyZWF0ZU9iamVjdFN0b3JlKCdwcm9kdWN0cycsIHsga2V5UGF0aDogJ2lkJyB9KTtcclxuXHJcbiAgb2JqU3RvcmUudHJhbnNhY3Rpb24ub25jb21wbGV0ZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBjb25zdCBwcm9kdWN0c1N0b3JlID0gZGJcclxuICAgICAgLnRyYW5zYWN0aW9uKCdwcm9kdWN0cycsICdyZWFkd3JpdGUnKVxyXG4gICAgICAub2JqZWN0U3RvcmUoJ3Byb2R1Y3RzJyk7XHJcbiAgICBwcm9kdWN0c1N0b3JlLmFkZCh7XHJcbiAgICAgIGlkOiAncDEnLFxyXG4gICAgICB0aXRsZTogJ0EgRmlyc3QgUHJvZHVjdCcsXHJcbiAgICAgIHByaWNlOiAxMi45OSxcclxuICAgICAgdGFnczogWydFeHBlbnNpdmUnLCAnTHV4dXJ5J11cclxuICAgIH0pO1xyXG4gIH07XHJcbn07XHJcblxyXG5kYlJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgY29uc29sZS5sb2coJ0VSUk9SIScpO1xyXG59O1xyXG5cclxuc3RvcmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgaWYgKCFkYikge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBjb25zdCBwcm9kdWN0c1N0b3JlID0gZGJcclxuICAgIC50cmFuc2FjdGlvbigncHJvZHVjdHMnLCAncmVhZHdyaXRlJylcclxuICAgIC5vYmplY3RTdG9yZSgncHJvZHVjdHMnKTtcclxuICBwcm9kdWN0c1N0b3JlLmFkZCh7XHJcbiAgICBpZDogJ3AyJyxcclxuICAgIHRpdGxlOiAnQSBTZWNvbmQgUHJvZHVjdCcsXHJcbiAgICBwcmljZTogMTIyLjk5LFxyXG4gICAgdGFnczogWydFeHBlbnNpdmUnLCAnTHV4dXJ5J11cclxuICB9KTtcclxufSk7XHJcblxyXG5yZXRyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIGNvbnN0IHByb2R1Y3RzU3RvcmUgPSBkYlxyXG4gICAgLnRyYW5zYWN0aW9uKCdwcm9kdWN0cycsICdyZWFkd3JpdGUnKVxyXG4gICAgLm9iamVjdFN0b3JlKCdwcm9kdWN0cycpO1xyXG4gIGNvbnN0IHJlcXVlc3QgPSBwcm9kdWN0c1N0b3JlLmdldCgncDInKTtcclxuXHJcbiAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSBmdW5jdGlvbigpIHtcclxuICAgIGNvbnNvbGUubG9nKHJlcXVlc3QucmVzdWx0KTtcclxuICB9XHJcbn0pOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./section22/app.js\n");

/***/ })

/******/ });