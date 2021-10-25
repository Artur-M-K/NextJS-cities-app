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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/cities/CityItem.js":
/*!***************************************!*\
  !*** ./components/cities/CityItem.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ui_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/Card */ "./components/ui/Card.js");
/* harmony import */ var _CityItem_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CityItem.module.css */ "./components/cities/CityItem.module.css");
/* harmony import */ var _CityItem_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_CityItem_module_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "L:\\PROGRAMOWANIE\\NEXT\\Udemy\\NEXT app\\big-project\\components\\cities\\CityItem.js";




function CityItem(props) {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();

  const showDetailHandler = () => {
    router.push(`/${props.id}`);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
    className: _CityItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.item,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _CityItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.image,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: props.image,
          alt: props.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _CityItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.content,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          children: props.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("address", {
          children: props.country
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _CityItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.actions,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: showDetailHandler,
          children: "Show Details"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (CityItem);

/***/ }),

/***/ "./components/cities/CityItem.module.css":
/*!***********************************************!*\
  !*** ./components/cities/CityItem.module.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"item": "CityItem_item__21MpP",
	"image": "CityItem_image__30tNU",
	"content": "CityItem_content__2oity",
	"actions": "CityItem_actions__1bKQx"
};


/***/ }),

/***/ "./components/cities/CityList.js":
/*!***************************************!*\
  !*** ./components/cities/CityList.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CityItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CityItem */ "./components/cities/CityItem.js");
/* harmony import */ var _CityList_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CityList.module.css */ "./components/cities/CityList.module.css");
/* harmony import */ var _CityList_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_CityList_module_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "L:\\PROGRAMOWANIE\\NEXT\\Udemy\\NEXT app\\big-project\\components\\cities\\CityList.js";



function CityList(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
    className: _CityList_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.list,
    children: props.cities.map(city => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CityItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      id: city.id,
      image: city.image,
      title: city.title,
      country: city.country
    }, city.id, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }, this))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (CityList);

/***/ }),

/***/ "./components/cities/CityList.module.css":
/*!***********************************************!*\
  !*** ./components/cities/CityList.module.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"list": "CityList_list__2GD18"
};


/***/ }),

/***/ "./components/ui/Card.js":
/*!*******************************!*\
  !*** ./components/ui/Card.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card.module.css */ "./components/ui/Card.module.css");
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Card_module_css__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "L:\\PROGRAMOWANIE\\NEXT\\Udemy\\NEXT app\\big-project\\components\\ui\\Card.js";


function Card(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _Card_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.card,
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 10
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./components/ui/Card.module.css":
/*!***************************************!*\
  !*** ./components/ui/Card.module.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"card": "Card_card__3KSLO"
};


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongodb */ "mongodb");
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_cities_CityList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/cities/CityList */ "./components/cities/CityList.js");

var _jsxFileName = "L:\\PROGRAMOWANIE\\NEXT\\Udemy\\NEXT app\\big-project\\pages\\index.js";

 // const DUMMY_DATA = [
//     {
//         id: 'm1',
//         title: 'Warsaw',
//         image: 'https://cdn.pixabay.com/photo/2015/11/01/19/45/warsaw-1017468_1280.jpg',
//         country: 'Poland',
//         description: 'Warsaw, officially the Capital City of Warsaw, is the capital and largest city of Poland. The metropolis stands on the River Vistula in east-central Poland and its population is officially estimated at 1.8 million residents within a greater metropolitan area of 3.1 million residents, which makes Warsaw the 7th most-populous capital city in the European Union.'
//     },
//     {
//         id: 'm2',
//         title: 'Dublin',
//         image: 'https://cdn.pixabay.com/photo/2017/05/15/14/33/dublin-2315013_1280.jpg',
//         country: 'Ireland',
//         description: 'Dublin is the capital of Ireland and is the largest city in the country. The city center is small but lively and full of characteristic pubs and restaurants, shopping districts, theaters, parks, government buildings, and museums. '
//     },
//     {
//         id: 'm3',
//         title: 'Berlin',
//         image: 'https://cdn.pixabay.com/photo/2019/02/16/23/47/berlin-4001319_1280.jpg',
//         country: 'Germany',
//         description: 'Berlin, the capital city of Germany, is renowned for its exceptional range of landmarks, vibrant cultural scene and way of life that\'s somehow all go yet relaxed. In fact, the city is best known for its striking contrasts. Historical buildings stand alongside modern architecture as the past and present intermingle.'
//     },
//     {
//         id: 'm4',
//         title: 'Paris',
//         image: 'https://cdn.pixabay.com/photo/2016/11/18/19/01/paris-1836415_1280.jpg',
//         country: 'France',
//         description: 'Paris (nicknamed the "City of light") is the capital city of France, and the largest city in France. ... Paris is also the center of French economy, politics, traffic and culture. Paris has many art museums and historical buildings. As a traffic center, Paris has a very good underground subway system (called the Metro).'
//     }
// ]

const HomePage = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_cities_CityList__WEBPACK_IMPORTED_MODULE_2__["default"], {
    cities: props.cities
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 9
  }, undefined);
}; // export const getServerSideProps = async(context) => {
//     const req = context.req;
//     const res = context.res;
//     //fetch data from an api or database
//     return {
//         props: {
//             cities: DUMMY_DATA
//         }
//     };
// }


const getStaticProps = async () => {
  //fetch data from an api or database
  const client = await mongodb__WEBPACK_IMPORTED_MODULE_1__["MongoClient"].connect('mongodb+srv://artur:leeloo83@cluster0.mm3bc.mongodb.net/cities?retryWrites=true&w=majority');
  const db = client.db();
  const citiesCollection = db.collection('cities');
  const cities = await citiesCollection.find().toArray();
  client.close();
  return {
    props: {
      cities: cities.map(city => ({
        title: city.title,
        country: city.country,
        image: city.image,
        id: city._id.toString()
      }))
    },
    revalidate: 10
  };
};
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongodb");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jaXRpZXMvQ2l0eUl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jaXRpZXMvQ2l0eUl0ZW0ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NpdGllcy9DaXR5TGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NpdGllcy9DaXR5TGlzdC5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdWkvQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3VpL0NhcmQubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb2RiXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJDaXR5SXRlbSIsInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwic2hvd0RldGFpbEhhbmRsZXIiLCJwdXNoIiwiaWQiLCJjbGFzc2VzIiwiaXRlbSIsImltYWdlIiwidGl0bGUiLCJjb250ZW50IiwiY291bnRyeSIsImFjdGlvbnMiLCJDaXR5TGlzdCIsImxpc3QiLCJjaXRpZXMiLCJtYXAiLCJjaXR5IiwiQ2FyZCIsImNhcmQiLCJjaGlsZHJlbiIsIkhvbWVQYWdlIiwiZ2V0U3RhdGljUHJvcHMiLCJjbGllbnQiLCJNb25nb0NsaWVudCIsImNvbm5lY3QiLCJkYiIsImNpdGllc0NvbGxlY3Rpb24iLCJjb2xsZWN0aW9uIiwiZmluZCIsInRvQXJyYXkiLCJjbG9zZSIsIl9pZCIsInRvU3RyaW5nIiwicmV2YWxpZGF0ZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FB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QSxNQUFNLENBQUNDLEdBQVAsQ0FBV0MsSUFBSSxLQUFLO0FBQ3hCUixhQUFLLEVBQUVRLElBQUksQ0FBQ1IsS0FEWTtBQUV4QkUsZUFBTyxFQUFFTSxJQUFJLENBQUNOLE9BRlU7QUFHeEJILGFBQUssRUFBRVMsSUFBSSxDQUFDVCxLQUhZO0FBSXhCSCxVQUFFLEVBQUVZLElBQUksQ0FBQ2UsR0FBTCxDQUFTQyxRQUFUO0FBSm9CLE9BQUwsQ0FBZjtBQURMLEtBREo7QUFTSEMsY0FBVSxFQUFFO0FBVFQsR0FBUDtBQVdILENBckJNO0FBdUJRYix1RUFBZixFOzs7Ozs7Ozs7OztBQzlFQSxvQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IENhcmQgZnJvbSAnLi4vdWkvQ2FyZCc7XG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL0NpdHlJdGVtLm1vZHVsZS5jc3MnO1xuXG5mdW5jdGlvbiBDaXR5SXRlbShwcm9wcykge1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IHNob3dEZXRhaWxIYW5kbGVyID0gKCkgPT4ge1xuICAgIHJvdXRlci5wdXNoKGAvJHtwcm9wcy5pZH1gKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGxpIGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtfT5cbiAgICAgIDxDYXJkPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZX0+XG4gICAgICAgICAgPGltZyBzcmM9e3Byb3BzLmltYWdlfSBhbHQ9e3Byb3BzLnRpdGxlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XG4gICAgICAgICAgPGgzPntwcm9wcy50aXRsZX08L2gzPlxuICAgICAgICAgIDxhZGRyZXNzPntwcm9wcy5jb3VudHJ5fTwvYWRkcmVzcz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFjdGlvbnN9PlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2hvd0RldGFpbEhhbmRsZXJ9PlNob3cgRGV0YWlsczwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQ2FyZD5cbiAgICA8L2xpPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDaXR5SXRlbTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIml0ZW1cIjogXCJDaXR5SXRlbV9pdGVtX18yMU1wUFwiLFxuXHRcImltYWdlXCI6IFwiQ2l0eUl0ZW1faW1hZ2VfXzMwdE5VXCIsXG5cdFwiY29udGVudFwiOiBcIkNpdHlJdGVtX2NvbnRlbnRfXzJvaXR5XCIsXG5cdFwiYWN0aW9uc1wiOiBcIkNpdHlJdGVtX2FjdGlvbnNfXzFiS1F4XCJcbn07XG4iLCJpbXBvcnQgQ2l0eUl0ZW0gZnJvbSAnLi9DaXR5SXRlbSc7XG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL0NpdHlMaXN0Lm1vZHVsZS5jc3MnO1xuXG5mdW5jdGlvbiBDaXR5TGlzdChwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDx1bCBjbGFzc05hbWU9e2NsYXNzZXMubGlzdH0+XG4gICAgICB7cHJvcHMuY2l0aWVzLm1hcCgoY2l0eSkgPT4gKFxuICAgICAgICA8Q2l0eUl0ZW1cbiAgICAgICAgICBrZXk9e2NpdHkuaWR9XG4gICAgICAgICAgaWQ9e2NpdHkuaWR9XG4gICAgICAgICAgaW1hZ2U9e2NpdHkuaW1hZ2V9XG4gICAgICAgICAgdGl0bGU9e2NpdHkudGl0bGV9XG4gICAgICAgICAgY291bnRyeT17Y2l0eS5jb3VudHJ5fVxuICAgICAgICAvPlxuICAgICAgKSl9XG4gICAgPC91bD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2l0eUxpc3Q7XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJsaXN0XCI6IFwiQ2l0eUxpc3RfbGlzdF9fMkdEMThcIlxufTtcbiIsImltcG9ydCBjbGFzc2VzIGZyb20gJy4vQ2FyZC5tb2R1bGUuY3NzJztcblxuZnVuY3Rpb24gQ2FyZChwcm9wcykge1xuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZH0+e3Byb3BzLmNoaWxkcmVufTwvZGl2Pjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNhcmRcIjogXCJDYXJkX2NhcmRfXzNLU0xPXCJcbn07XG4iLCJpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gJ21vbmdvZGInO1xyXG5pbXBvcnQgQ2l0eUxpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9jaXRpZXMvQ2l0eUxpc3QnO1xyXG5cclxuLy8gY29uc3QgRFVNTVlfREFUQSA9IFtcclxuLy8gICAgIHtcclxuLy8gICAgICAgICBpZDogJ20xJyxcclxuLy8gICAgICAgICB0aXRsZTogJ1dhcnNhdycsXHJcbi8vICAgICAgICAgaW1hZ2U6ICdodHRwczovL2Nkbi5waXhhYmF5LmNvbS9waG90by8yMDE1LzExLzAxLzE5LzQ1L3dhcnNhdy0xMDE3NDY4XzEyODAuanBnJyxcclxuLy8gICAgICAgICBjb3VudHJ5OiAnUG9sYW5kJyxcclxuLy8gICAgICAgICBkZXNjcmlwdGlvbjogJ1dhcnNhdywgb2ZmaWNpYWxseSB0aGUgQ2FwaXRhbCBDaXR5IG9mIFdhcnNhdywgaXMgdGhlIGNhcGl0YWwgYW5kIGxhcmdlc3QgY2l0eSBvZiBQb2xhbmQuIFRoZSBtZXRyb3BvbGlzIHN0YW5kcyBvbiB0aGUgUml2ZXIgVmlzdHVsYSBpbiBlYXN0LWNlbnRyYWwgUG9sYW5kIGFuZCBpdHMgcG9wdWxhdGlvbiBpcyBvZmZpY2lhbGx5IGVzdGltYXRlZCBhdCAxLjggbWlsbGlvbiByZXNpZGVudHMgd2l0aGluIGEgZ3JlYXRlciBtZXRyb3BvbGl0YW4gYXJlYSBvZiAzLjEgbWlsbGlvbiByZXNpZGVudHMsIHdoaWNoIG1ha2VzIFdhcnNhdyB0aGUgN3RoIG1vc3QtcG9wdWxvdXMgY2FwaXRhbCBjaXR5IGluIHRoZSBFdXJvcGVhbiBVbmlvbi4nXHJcbi8vICAgICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICAgIGlkOiAnbTInLFxyXG4vLyAgICAgICAgIHRpdGxlOiAnRHVibGluJyxcclxuLy8gICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY2RuLnBpeGFiYXkuY29tL3Bob3RvLzIwMTcvMDUvMTUvMTQvMzMvZHVibGluLTIzMTUwMTNfMTI4MC5qcGcnLFxyXG4vLyAgICAgICAgIGNvdW50cnk6ICdJcmVsYW5kJyxcclxuLy8gICAgICAgICBkZXNjcmlwdGlvbjogJ0R1YmxpbiBpcyB0aGUgY2FwaXRhbCBvZiBJcmVsYW5kIGFuZCBpcyB0aGUgbGFyZ2VzdCBjaXR5IGluIHRoZSBjb3VudHJ5LiBUaGUgY2l0eSBjZW50ZXIgaXMgc21hbGwgYnV0IGxpdmVseSBhbmQgZnVsbCBvZiBjaGFyYWN0ZXJpc3RpYyBwdWJzIGFuZCByZXN0YXVyYW50cywgc2hvcHBpbmcgZGlzdHJpY3RzLCB0aGVhdGVycywgcGFya3MsIGdvdmVybm1lbnQgYnVpbGRpbmdzLCBhbmQgbXVzZXVtcy4gJ1xyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgICBpZDogJ20zJyxcclxuLy8gICAgICAgICB0aXRsZTogJ0JlcmxpbicsXHJcbi8vICAgICAgICAgaW1hZ2U6ICdodHRwczovL2Nkbi5waXhhYmF5LmNvbS9waG90by8yMDE5LzAyLzE2LzIzLzQ3L2Jlcmxpbi00MDAxMzE5XzEyODAuanBnJyxcclxuLy8gICAgICAgICBjb3VudHJ5OiAnR2VybWFueScsXHJcbi8vICAgICAgICAgZGVzY3JpcHRpb246ICdCZXJsaW4sIHRoZSBjYXBpdGFsIGNpdHkgb2YgR2VybWFueSwgaXMgcmVub3duZWQgZm9yIGl0cyBleGNlcHRpb25hbCByYW5nZSBvZiBsYW5kbWFya3MsIHZpYnJhbnQgY3VsdHVyYWwgc2NlbmUgYW5kIHdheSBvZiBsaWZlIHRoYXRcXCdzIHNvbWVob3cgYWxsIGdvIHlldCByZWxheGVkLiBJbiBmYWN0LCB0aGUgY2l0eSBpcyBiZXN0IGtub3duIGZvciBpdHMgc3RyaWtpbmcgY29udHJhc3RzLiBIaXN0b3JpY2FsIGJ1aWxkaW5ncyBzdGFuZCBhbG9uZ3NpZGUgbW9kZXJuIGFyY2hpdGVjdHVyZSBhcyB0aGUgcGFzdCBhbmQgcHJlc2VudCBpbnRlcm1pbmdsZS4nXHJcbi8vICAgICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICAgIGlkOiAnbTQnLFxyXG4vLyAgICAgICAgIHRpdGxlOiAnUGFyaXMnLFxyXG4vLyAgICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vcGhvdG8vMjAxNi8xMS8xOC8xOS8wMS9wYXJpcy0xODM2NDE1XzEyODAuanBnJyxcclxuLy8gICAgICAgICBjb3VudHJ5OiAnRnJhbmNlJyxcclxuLy8gICAgICAgICBkZXNjcmlwdGlvbjogJ1BhcmlzIChuaWNrbmFtZWQgdGhlIFwiQ2l0eSBvZiBsaWdodFwiKSBpcyB0aGUgY2FwaXRhbCBjaXR5IG9mIEZyYW5jZSwgYW5kIHRoZSBsYXJnZXN0IGNpdHkgaW4gRnJhbmNlLiAuLi4gUGFyaXMgaXMgYWxzbyB0aGUgY2VudGVyIG9mIEZyZW5jaCBlY29ub215LCBwb2xpdGljcywgdHJhZmZpYyBhbmQgY3VsdHVyZS4gUGFyaXMgaGFzIG1hbnkgYXJ0IG11c2V1bXMgYW5kIGhpc3RvcmljYWwgYnVpbGRpbmdzLiBBcyBhIHRyYWZmaWMgY2VudGVyLCBQYXJpcyBoYXMgYSB2ZXJ5IGdvb2QgdW5kZXJncm91bmQgc3Vid2F5IHN5c3RlbSAoY2FsbGVkIHRoZSBNZXRybykuJ1xyXG4vLyAgICAgfVxyXG5cclxuLy8gXVxyXG5cclxuY29uc3QgSG9tZVBhZ2UgPSAocHJvcHMpID0+IHtcclxuXHJcbiAgIHJldHVybiAgKFxyXG4gICAgICAgIDxDaXR5TGlzdCBjaXRpZXM9e3Byb3BzLmNpdGllc30gLz5cclxuICAgKVxyXG59XHJcblxyXG4vLyBleHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMoY29udGV4dCkgPT4ge1xyXG5cclxuLy8gICAgIGNvbnN0IHJlcSA9IGNvbnRleHQucmVxO1xyXG4vLyAgICAgY29uc3QgcmVzID0gY29udGV4dC5yZXM7XHJcblxyXG4vLyAgICAgLy9mZXRjaCBkYXRhIGZyb20gYW4gYXBpIG9yIGRhdGFiYXNlXHJcbi8vICAgICByZXR1cm4ge1xyXG4vLyAgICAgICAgIHByb3BzOiB7XHJcbi8vICAgICAgICAgICAgIGNpdGllczogRFVNTVlfREFUQVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH07XHJcbi8vIH1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9ICBhc3luYygpID0+IHtcclxuICAgIC8vZmV0Y2ggZGF0YSBmcm9tIGFuIGFwaSBvciBkYXRhYmFzZVxyXG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdCgnbW9uZ29kYitzcnY6Ly9hcnR1cjpsZWVsb284M0BjbHVzdGVyMC5tbTNiYy5tb25nb2RiLm5ldC9jaXRpZXM/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5Jyk7XHJcbiAgIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XHJcblxyXG4gICBjb25zdCBjaXRpZXNDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbignY2l0aWVzJyk7XHJcblxyXG4gICBjb25zdCBjaXRpZXMgPSBhd2FpdCBjaXRpZXNDb2xsZWN0aW9uLmZpbmQoKS50b0FycmF5KCk7XHJcbiAgIGNsaWVudC5jbG9zZSgpOyBcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIGNpdGllczogY2l0aWVzLm1hcChjaXR5ID0+ICh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogY2l0eS50aXRsZSxcclxuICAgICAgICAgICAgICAgIGNvdW50cnk6IGNpdHkuY291bnRyeSxcclxuICAgICAgICAgICAgICAgIGltYWdlOiBjaXR5LmltYWdlLFxyXG4gICAgICAgICAgICAgICAgaWQ6IGNpdHkuX2lkLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZXZhbGlkYXRlOiAxMFxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==