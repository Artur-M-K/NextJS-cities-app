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
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _CityDetail_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.name,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: [props.title, " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
        children: props.country
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: props.image,
      alt: props.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: props.description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _CityDetail_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.actions,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: onClickHandler,
        children: "Back"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
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
	"name": "CityDetail_name__2tocm",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jaXRpZXMvQ2l0eURldGFpbC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NpdGllcy9DaXR5RGV0YWlsLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvW2NpdHlJZF0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9uZ29kYlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJDaXR5RGV0YWlsIiwicHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJvbkNsaWNrSGFuZGxlciIsInB1c2giLCJjbGFzc2VzIiwiZGV0YWlsIiwibmFtZSIsInRpdGxlIiwiY291bnRyeSIsImltYWdlIiwiZGVzY3JpcHRpb24iLCJhY3Rpb25zIiwiQ2l0eURldGFpbHMiLCJjaXR5RGF0YSIsImdldFN0YXRpY1BhdGhzIiwiY2xpZW50IiwiTW9uZ29DbGllbnQiLCJjb25uZWN0IiwiZGIiLCJjaXRpZXNDb2xsZWN0aW9uIiwiY29sbGVjdGlvbiIsImNpdGllcyIsImZpbmQiLCJfaWQiLCJ0b0FycmF5IiwiY2xvc2UiLCJmYWxsYmFjayIsInBhdGhzIiwibWFwIiwiY2l0eSIsInBhcmFtcyIsImNpdHlJZCIsInRvU3RyaW5nIiwiZ2V0U3RhdGljUHJvcHMiLCJjb250ZXh0Iiwic2VsZWN0ZWRDaXR5IiwiZmluZE9uZSIsIk9iamVjdElkIiwiaWQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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QyxTQUFPO0FBQ0gxQixTQUFLLEVBQUU7QUFDSGMsY0FBUSxFQUFFO0FBQ055QixVQUFFLEVBQUVILFlBQVksQ0FBQ1osR0FBYixDQUFpQlMsUUFBakIsRUFERTtBQUVOekIsYUFBSyxFQUFFNEIsWUFBWSxDQUFDNUIsS0FGZDtBQUdOQyxlQUFPLEVBQUUyQixZQUFZLENBQUMzQixPQUhoQjtBQUlOQyxhQUFLLEVBQUUwQixZQUFZLENBQUMxQixLQUpkO0FBS05DLG1CQUFXLEVBQUV5QixZQUFZLENBQUN6QjtBQUxwQjtBQURQO0FBREosR0FBUDtBQVdILENBeEJNO0FBMEJRRSwwRUFBZixFOzs7Ozs7Ozs7OztBQ2pFQSxvQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9bY2l0eUlkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvW2NpdHlJZF0vaW5kZXguanNcIik7XG4iLCJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vQ2l0eURldGFpbC5tb2R1bGUuY3NzJztcclxuXHJcbmNvbnN0IENpdHlEZXRhaWwgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3Qgb25DbGlja0hhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcm91dGVyLnB1c2goJy8nKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc2VzLmRldGFpbH0+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubmFtZX0+XHJcbiAgICAgICAgICAgIDxoMT57cHJvcHMudGl0bGV9IDwvaDE+XHJcbiAgICAgICAgICAgIDxoND57cHJvcHMuY291bnRyeX08L2g0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxpbWcgc3JjPXtwcm9wcy5pbWFnZX0gYWx0PXtwcm9wcy50aXRsZX0gLz5cclxuICAgICAgICA8cD57cHJvcHMuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFjdGlvbnN9PlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2tIYW5kbGVyfT5CYWNrPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENpdHlEZXRhaWw7IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZGV0YWlsXCI6IFwiQ2l0eURldGFpbF9kZXRhaWxfXzFUNWlnXCIsXG5cdFwibmFtZVwiOiBcIkNpdHlEZXRhaWxfbmFtZV9fMnRvY21cIixcblx0XCJhY3Rpb25zXCI6IFwiQ2l0eURldGFpbF9hY3Rpb25zX18zbTZBdlwiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgTW9uZ29DbGllbnQsIE9iamVjdElkIH0gZnJvbSAnbW9uZ29kYic7XHJcbmltcG9ydCBDaXR5RGV0YWlsIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY2l0aWVzL0NpdHlEZXRhaWwnO1xyXG5cclxuY29uc3QgQ2l0eURldGFpbHMgPSAocHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICA8dGl0bGU+e3Byb3BzLmNpdHlEYXRhLnRpdGxlfTwvdGl0bGU+XHJcbiAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17cHJvcHMuY2l0eURhdGEuZGVzY3JpcHRpb259IC8+XHJcbiAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPENpdHlEZXRhaWxcclxuICAgICAgICAgICAgaW1hZ2U9e3Byb3BzLmNpdHlEYXRhLmltYWdlfVxyXG4gICAgICAgICAgICB0aXRsZT17cHJvcHMuY2l0eURhdGEudGl0bGV9XHJcbiAgICAgICAgICAgIGNvdW50cnk9e3Byb3BzLmNpdHlEYXRhLmNvdW50cnl9XHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtwcm9wcy5jaXR5RGF0YS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYygpID0+IHtcclxuXHJcbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KCdtb25nb2RiK3NydjovL2FydHVyOmxlZWxvbzgzQGNsdXN0ZXIwLm1tM2JjLm1vbmdvZGIubmV0L2NpdGllcz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHknKTtcclxuICAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcclxuXHJcbiAgIGNvbnN0IGNpdGllc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKCdjaXRpZXMnKTtcclxuXHJcbiAgIGNvbnN0IGNpdGllcyA9IGF3YWl0IGNpdGllc0NvbGxlY3Rpb24uZmluZCh7fSwge19pZDogMX0pLnRvQXJyYXkoKTtcclxuXHJcbiAgIGNsaWVudC5jbG9zZSgpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZmFsbGJhY2s6ICdibG9ja2luZycsXHJcbiAgICAgICAgcGF0aHM6IGNpdGllcy5tYXAoY2l0eSA9PiAoe3BhcmFtczoge2NpdHlJZDogY2l0eS5faWQudG9TdHJpbmcoKX19KSksXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jKGNvbnRleHQpID0+IHtcclxuXHJcbiAgICBjb25zdCBjaXR5SWQgPSBjb250ZXh0LnBhcmFtcy5jaXR5SWQ7XHJcblxyXG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdCgnbW9uZ29kYitzcnY6Ly9hcnR1cjpsZWVsb284M0BjbHVzdGVyMC5tbTNiYy5tb25nb2RiLm5ldC9jaXRpZXM/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5Jyk7XHJcbiAgIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XHJcblxyXG4gICBjb25zdCBjaXRpZXNDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbignY2l0aWVzJyk7XHJcblxyXG4gICBjb25zdCBzZWxlY3RlZENpdHkgPSBhd2FpdCBjaXRpZXNDb2xsZWN0aW9uLmZpbmRPbmUoe19pZDogT2JqZWN0SWQoY2l0eUlkKX0pO1xyXG5cclxuICAgY2xpZW50LmNsb3NlKCk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBjaXR5RGF0YToge1xyXG4gICAgICAgICAgICAgICAgaWQ6IHNlbGVjdGVkQ2l0eS5faWQudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBzZWxlY3RlZENpdHkudGl0bGUsXHJcbiAgICAgICAgICAgICAgICBjb3VudHJ5OiBzZWxlY3RlZENpdHkuY291bnRyeSxcclxuICAgICAgICAgICAgICAgIGltYWdlOiBzZWxlY3RlZENpdHkuaW1hZ2UsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogc2VsZWN0ZWRDaXR5LmRlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaXR5RGV0YWlsczsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb2RiXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==