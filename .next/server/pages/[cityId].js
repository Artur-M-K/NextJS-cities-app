module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/[cityId]/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/cities/CityDetail.js":
/*!*****************************************!*\
  !*** ./components/cities/CityDetail.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CityDetail_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CityDetail.module.css */ "./components/cities/CityDetail.module.css");
/* harmony import */ var _CityDetail_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_CityDetail_module_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "L:\\PROGRAMOWANIE\\NEXT\\Udemy\\NEXT app\\big-project\\components\\cities\\CityDetail.js";



const CityDetail = props => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();

  const onClickHandler = () => {
    router.push('/');
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: _CityDetail_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.detail,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: props.image,
      alt: props.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: [props.title, " "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
      children: props.country
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: props.description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _CityDetail_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.actions,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: onClickHandler,
        children: "Back"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (CityDetail);

/***/ }),

/***/ "./components/cities/CityDetail.module.css":
/*!*************************************************!*\
  !*** ./components/cities/CityDetail.module.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"detail": "CityDetail_detail__1T5ig",
	"actions": "CityDetail_actions__3m6Av"
};


/***/ }),

/***/ "./pages/[cityId]/index.js":
/*!*********************************!*\
  !*** ./pages/[cityId]/index.js ***!
  \*********************************/
/*! exports provided: getStaticPaths, getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return getStaticPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongodb */ "mongodb");
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_cities_CityDetail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/cities/CityDetail */ "./components/cities/CityDetail.js");


var _jsxFileName = "L:\\PROGRAMOWANIE\\NEXT\\Udemy\\NEXT app\\big-project\\pages\\[cityId]\\index.js";





const CityDetails = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: props.cityData.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 12
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: props.cityData.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 12
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_cities_CityDetail__WEBPACK_IMPORTED_MODULE_4__["default"], {
      image: props.cityData.image,
      title: props.cityData.title,
      country: props.cityData.country,
      description: props.cityData.description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }, undefined)]
  }, void 0, true);
};

const getStaticPaths = async () => {
  const client = await mongodb__WEBPACK_IMPORTED_MODULE_3__["MongoClient"].connect('mongodb+srv://artur:leeloo83@cluster0.mm3bc.mongodb.net/cities?retryWrites=true&w=majority');
  const db = client.db();
  const citiesCollection = db.collection('cities');
  const cities = await citiesCollection.find({}, {
    _id: 1
  }).toArray();
  client.close();
  return {
    fallback: 'blocking',
    paths: cities.map(city => ({
      params: {
        cityId: city._id.toString()
      }
    }))
  };
};
const getStaticProps = async context => {
  const cityId = context.params.cityId;
  const client = await mongodb__WEBPACK_IMPORTED_MODULE_3__["MongoClient"].connect('mongodb+srv://artur:leeloo83@cluster0.mm3bc.mongodb.net/cities?retryWrites=true&w=majority');
  const db = client.db();
  const citiesCollection = db.collection('cities');
  const selectedCity = await citiesCollection.findOne({
    _id: Object(mongodb__WEBPACK_IMPORTED_MODULE_3__["ObjectId"])(cityId)
  });
  client.close();
  return {
    props: {
      cityData: {
        id: selectedCity._id.toString(),
        title: selectedCity.title,
        country: selectedCity.country,
        image: selectedCity.image,
        description: selectedCity.description
      }
    }
  };
};
/* harmony default export */ __webpack_exports__["default"] = (CityDetails);

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongodb");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jaXRpZXMvQ2l0eURldGFpbC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NpdGllcy9DaXR5RGV0YWlsLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvW2NpdHlJZF0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9uZ29kYlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJDaXR5RGV0YWlsIiwicHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJvbkNsaWNrSGFuZGxlciIsInB1c2giLCJjbGFzc2VzIiwiZGV0YWlsIiwiaW1hZ2UiLCJ0aXRsZSIsImNvdW50cnkiLCJkZXNjcmlwdGlvbiIsImFjdGlvbnMiLCJDaXR5RGV0YWlscyIsImNpdHlEYXRhIiwiZ2V0U3RhdGljUGF0aHMiLCJjbGllbnQiLCJNb25nb0NsaWVudCIsImNvbm5lY3QiLCJkYiIsImNpdGllc0NvbGxlY3Rpb24iLCJjb2xsZWN0aW9uIiwiY2l0aWVzIiwiZmluZCIsIl9pZCIsInRvQXJyYXkiLCJjbG9zZSIsImZhbGxiYWNrIiwicGF0aHMiLCJtYXAiLCJjaXR5IiwicGFyYW1zIiwiY2l0eUlkIiwidG9TdHJpbmciLCJnZXRTdGF0aWNQcm9wcyIsImNvbnRleHQiLCJzZWxlY3RlZENpdHkiLCJmaW5kT25lIiwiT2JqZWN0SWQiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FB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QURFO0FBRU54QixhQUFLLEVBQUUyQixZQUFZLENBQUMzQixLQUZkO0FBR05DLGVBQU8sRUFBRTBCLFlBQVksQ0FBQzFCLE9BSGhCO0FBSU5GLGFBQUssRUFBRTRCLFlBQVksQ0FBQzVCLEtBSmQ7QUFLTkcsbUJBQVcsRUFBRXlCLFlBQVksQ0FBQ3pCO0FBTHBCO0FBRFA7QUFESixHQUFQO0FBV0gsQ0F4Qk07QUEwQlFFLDBFQUFmLEU7Ozs7Ozs7Ozs7O0FDakVBLG9DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL1tjaXR5SWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9bY2l0eUlkXS9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9DaXR5RGV0YWlsLm1vZHVsZS5jc3MnO1xyXG5cclxuY29uc3QgQ2l0eURldGFpbCA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBvbkNsaWNrSGFuZGxlciA9ICgpID0+IHtcclxuICAgICAgICBcclxuICAgICAgICByb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMuZGV0YWlsfT5cclxuICAgICAgICA8aW1nIHNyYz17cHJvcHMuaW1hZ2V9IGFsdD17cHJvcHMudGl0bGV9IC8+XHJcbiAgICAgICAgPGgxPntwcm9wcy50aXRsZX0gPC9oMT5cclxuICAgICAgICA8aDQ+e3Byb3BzLmNvdW50cnl9PC9oND5cclxuICAgICAgICA8cD57cHJvcHMuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFjdGlvbnN9PlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2tIYW5kbGVyfT5CYWNrPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENpdHlEZXRhaWw7IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZGV0YWlsXCI6IFwiQ2l0eURldGFpbF9kZXRhaWxfXzFUNWlnXCIsXG5cdFwiYWN0aW9uc1wiOiBcIkNpdHlEZXRhaWxfYWN0aW9uc19fM202QXZcIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7IE1vbmdvQ2xpZW50LCBPYmplY3RJZCB9IGZyb20gJ21vbmdvZGInO1xyXG5pbXBvcnQgQ2l0eURldGFpbCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NpdGllcy9DaXR5RGV0YWlsJztcclxuXHJcbmNvbnN0IENpdHlEZXRhaWxzID0gKHByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgPHRpdGxlPntwcm9wcy5jaXR5RGF0YS50aXRsZX08L3RpdGxlPlxyXG4gICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3Byb3BzLmNpdHlEYXRhLmRlc2NyaXB0aW9ufSAvPlxyXG4gICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxDaXR5RGV0YWlsXHJcbiAgICAgICAgICAgIGltYWdlPXtwcm9wcy5jaXR5RGF0YS5pbWFnZX1cclxuICAgICAgICAgICAgdGl0bGU9e3Byb3BzLmNpdHlEYXRhLnRpdGxlfVxyXG4gICAgICAgICAgICBjb3VudHJ5PXtwcm9wcy5jaXR5RGF0YS5jb3VudHJ5fVxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj17cHJvcHMuY2l0eURhdGEuZGVzY3JpcHRpb259XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gYXN5bmMoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdCgnbW9uZ29kYitzcnY6Ly9hcnR1cjpsZWVsb284M0BjbHVzdGVyMC5tbTNiYy5tb25nb2RiLm5ldC9jaXRpZXM/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5Jyk7XHJcbiAgIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XHJcblxyXG4gICBjb25zdCBjaXRpZXNDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbignY2l0aWVzJyk7XHJcblxyXG4gICBjb25zdCBjaXRpZXMgPSBhd2FpdCBjaXRpZXNDb2xsZWN0aW9uLmZpbmQoe30sIHtfaWQ6IDF9KS50b0FycmF5KCk7XHJcblxyXG4gICBjbGllbnQuY2xvc2UoKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGZhbGxiYWNrOiAnYmxvY2tpbmcnLFxyXG4gICAgICAgIHBhdGhzOiBjaXRpZXMubWFwKGNpdHkgPT4gKHtwYXJhbXM6IHtjaXR5SWQ6IGNpdHkuX2lkLnRvU3RyaW5nKCl9fSkpLFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyhjb250ZXh0KSA9PiB7XHJcblxyXG4gICAgY29uc3QgY2l0eUlkID0gY29udGV4dC5wYXJhbXMuY2l0eUlkO1xyXG5cclxuICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoJ21vbmdvZGIrc3J2Oi8vYXJ0dXI6bGVlbG9vODNAY2x1c3RlcjAubW0zYmMubW9uZ29kYi5uZXQvY2l0aWVzP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eScpO1xyXG4gICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xyXG5cclxuICAgY29uc3QgY2l0aWVzQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oJ2NpdGllcycpO1xyXG5cclxuICAgY29uc3Qgc2VsZWN0ZWRDaXR5ID0gYXdhaXQgY2l0aWVzQ29sbGVjdGlvbi5maW5kT25lKHtfaWQ6IE9iamVjdElkKGNpdHlJZCl9KTtcclxuXHJcbiAgIGNsaWVudC5jbG9zZSgpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgY2l0eURhdGE6IHtcclxuICAgICAgICAgICAgICAgIGlkOiBzZWxlY3RlZENpdHkuX2lkLnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogc2VsZWN0ZWRDaXR5LnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgY291bnRyeTogc2VsZWN0ZWRDaXR5LmNvdW50cnksXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogc2VsZWN0ZWRDaXR5LmltYWdlLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHNlbGVjdGVkQ2l0eS5kZXNjcmlwdGlvblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2l0eURldGFpbHM7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=