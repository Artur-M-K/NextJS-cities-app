webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/head.js":
/*!***********************************!*\
  !*** ./node_modules/next/head.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/next-server/lib/head */ "./node_modules/next/dist/next-server/lib/head.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_cities_CityList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/cities/CityList */ "./components/cities/CityList.js");


var _jsxFileName = "L:\\PROGRAMOWANIE\\NEXT\\Udemy\\NEXT app\\big-project\\pages\\index.js",
    _this = undefined;


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

var HomePage = function HomePage(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_cities_CityList__WEBPACK_IMPORTED_MODULE_2__["default"], {
    cities: props.cities
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 9
  }, _this);
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


_c = HomePage;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c;

$RefreshReg$(_c, "HomePage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvaGVhZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJwcm9wcyIsImNpdGllcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsaUJBQWlCLG1CQUFPLENBQUMscUZBQTZCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXREO0NBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEtBQUQsRUFBVztBQUV6QixzQkFDSyxxRUFBQyxtRUFBRDtBQUFVLFVBQU0sRUFBRUEsS0FBSyxDQUFDQztBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREw7QUFHRixDQUxELEMsQ0FPQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0tBbEJNRixROztBQTJDU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTNhMTI0MDFkNTBmYzEwMTYwYWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkJylcbiIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSAnbW9uZ29kYic7XHJcbmltcG9ydCBDaXR5TGlzdCBmcm9tICcuLi9jb21wb25lbnRzL2NpdGllcy9DaXR5TGlzdCc7XHJcblxyXG4vLyBjb25zdCBEVU1NWV9EQVRBID0gW1xyXG4vLyAgICAge1xyXG4vLyAgICAgICAgIGlkOiAnbTEnLFxyXG4vLyAgICAgICAgIHRpdGxlOiAnV2Fyc2F3JyxcclxuLy8gICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY2RuLnBpeGFiYXkuY29tL3Bob3RvLzIwMTUvMTEvMDEvMTkvNDUvd2Fyc2F3LTEwMTc0NjhfMTI4MC5qcGcnLFxyXG4vLyAgICAgICAgIGNvdW50cnk6ICdQb2xhbmQnLFxyXG4vLyAgICAgICAgIGRlc2NyaXB0aW9uOiAnV2Fyc2F3LCBvZmZpY2lhbGx5IHRoZSBDYXBpdGFsIENpdHkgb2YgV2Fyc2F3LCBpcyB0aGUgY2FwaXRhbCBhbmQgbGFyZ2VzdCBjaXR5IG9mIFBvbGFuZC4gVGhlIG1ldHJvcG9saXMgc3RhbmRzIG9uIHRoZSBSaXZlciBWaXN0dWxhIGluIGVhc3QtY2VudHJhbCBQb2xhbmQgYW5kIGl0cyBwb3B1bGF0aW9uIGlzIG9mZmljaWFsbHkgZXN0aW1hdGVkIGF0IDEuOCBtaWxsaW9uIHJlc2lkZW50cyB3aXRoaW4gYSBncmVhdGVyIG1ldHJvcG9saXRhbiBhcmVhIG9mIDMuMSBtaWxsaW9uIHJlc2lkZW50cywgd2hpY2ggbWFrZXMgV2Fyc2F3IHRoZSA3dGggbW9zdC1wb3B1bG91cyBjYXBpdGFsIGNpdHkgaW4gdGhlIEV1cm9wZWFuIFVuaW9uLidcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgICAgaWQ6ICdtMicsXHJcbi8vICAgICAgICAgdGl0bGU6ICdEdWJsaW4nLFxyXG4vLyAgICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vcGhvdG8vMjAxNy8wNS8xNS8xNC8zMy9kdWJsaW4tMjMxNTAxM18xMjgwLmpwZycsXHJcbi8vICAgICAgICAgY291bnRyeTogJ0lyZWxhbmQnLFxyXG4vLyAgICAgICAgIGRlc2NyaXB0aW9uOiAnRHVibGluIGlzIHRoZSBjYXBpdGFsIG9mIElyZWxhbmQgYW5kIGlzIHRoZSBsYXJnZXN0IGNpdHkgaW4gdGhlIGNvdW50cnkuIFRoZSBjaXR5IGNlbnRlciBpcyBzbWFsbCBidXQgbGl2ZWx5IGFuZCBmdWxsIG9mIGNoYXJhY3RlcmlzdGljIHB1YnMgYW5kIHJlc3RhdXJhbnRzLCBzaG9wcGluZyBkaXN0cmljdHMsIHRoZWF0ZXJzLCBwYXJrcywgZ292ZXJubWVudCBidWlsZGluZ3MsIGFuZCBtdXNldW1zLiAnXHJcbi8vICAgICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICAgIGlkOiAnbTMnLFxyXG4vLyAgICAgICAgIHRpdGxlOiAnQmVybGluJyxcclxuLy8gICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY2RuLnBpeGFiYXkuY29tL3Bob3RvLzIwMTkvMDIvMTYvMjMvNDcvYmVybGluLTQwMDEzMTlfMTI4MC5qcGcnLFxyXG4vLyAgICAgICAgIGNvdW50cnk6ICdHZXJtYW55JyxcclxuLy8gICAgICAgICBkZXNjcmlwdGlvbjogJ0JlcmxpbiwgdGhlIGNhcGl0YWwgY2l0eSBvZiBHZXJtYW55LCBpcyByZW5vd25lZCBmb3IgaXRzIGV4Y2VwdGlvbmFsIHJhbmdlIG9mIGxhbmRtYXJrcywgdmlicmFudCBjdWx0dXJhbCBzY2VuZSBhbmQgd2F5IG9mIGxpZmUgdGhhdFxcJ3Mgc29tZWhvdyBhbGwgZ28geWV0IHJlbGF4ZWQuIEluIGZhY3QsIHRoZSBjaXR5IGlzIGJlc3Qga25vd24gZm9yIGl0cyBzdHJpa2luZyBjb250cmFzdHMuIEhpc3RvcmljYWwgYnVpbGRpbmdzIHN0YW5kIGFsb25nc2lkZSBtb2Rlcm4gYXJjaGl0ZWN0dXJlIGFzIHRoZSBwYXN0IGFuZCBwcmVzZW50IGludGVybWluZ2xlLidcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgICAgaWQ6ICdtNCcsXHJcbi8vICAgICAgICAgdGl0bGU6ICdQYXJpcycsXHJcbi8vICAgICAgICAgaW1hZ2U6ICdodHRwczovL2Nkbi5waXhhYmF5LmNvbS9waG90by8yMDE2LzExLzE4LzE5LzAxL3BhcmlzLTE4MzY0MTVfMTI4MC5qcGcnLFxyXG4vLyAgICAgICAgIGNvdW50cnk6ICdGcmFuY2UnLFxyXG4vLyAgICAgICAgIGRlc2NyaXB0aW9uOiAnUGFyaXMgKG5pY2tuYW1lZCB0aGUgXCJDaXR5IG9mIGxpZ2h0XCIpIGlzIHRoZSBjYXBpdGFsIGNpdHkgb2YgRnJhbmNlLCBhbmQgdGhlIGxhcmdlc3QgY2l0eSBpbiBGcmFuY2UuIC4uLiBQYXJpcyBpcyBhbHNvIHRoZSBjZW50ZXIgb2YgRnJlbmNoIGVjb25vbXksIHBvbGl0aWNzLCB0cmFmZmljIGFuZCBjdWx0dXJlLiBQYXJpcyBoYXMgbWFueSBhcnQgbXVzZXVtcyBhbmQgaGlzdG9yaWNhbCBidWlsZGluZ3MuIEFzIGEgdHJhZmZpYyBjZW50ZXIsIFBhcmlzIGhhcyBhIHZlcnkgZ29vZCB1bmRlcmdyb3VuZCBzdWJ3YXkgc3lzdGVtIChjYWxsZWQgdGhlIE1ldHJvKS4nXHJcbi8vICAgICB9XHJcblxyXG4vLyBdXHJcblxyXG5jb25zdCBIb21lUGFnZSA9IChwcm9wcykgPT4ge1xyXG5cclxuICAgcmV0dXJuICAoXHJcbiAgICAgICAgPENpdHlMaXN0IGNpdGllcz17cHJvcHMuY2l0aWVzfSAvPlxyXG4gICApXHJcbn1cclxuXHJcbi8vIGV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyhjb250ZXh0KSA9PiB7XHJcblxyXG4vLyAgICAgY29uc3QgcmVxID0gY29udGV4dC5yZXE7XHJcbi8vICAgICBjb25zdCByZXMgPSBjb250ZXh0LnJlcztcclxuXHJcbi8vICAgICAvL2ZldGNoIGRhdGEgZnJvbSBhbiBhcGkgb3IgZGF0YWJhc2VcclxuLy8gICAgIHJldHVybiB7XHJcbi8vICAgICAgICAgcHJvcHM6IHtcclxuLy8gICAgICAgICAgICAgY2l0aWVzOiBEVU1NWV9EQVRBXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfTtcclxuLy8gfVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gIGFzeW5jKCkgPT4ge1xyXG4gICAgLy9mZXRjaCBkYXRhIGZyb20gYW4gYXBpIG9yIGRhdGFiYXNlXHJcbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KCdtb25nb2RiK3NydjovL2FydHVyOmxlZWxvbzgzQGNsdXN0ZXIwLm1tM2JjLm1vbmdvZGIubmV0L2NpdGllcz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHknKTtcclxuICAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcclxuXHJcbiAgIGNvbnN0IGNpdGllc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKCdjaXRpZXMnKTtcclxuXHJcbiAgIGNvbnN0IGNpdGllcyA9IGF3YWl0IGNpdGllc0NvbGxlY3Rpb24uZmluZCgpLnRvQXJyYXkoKTtcclxuICAgY2xpZW50LmNsb3NlKCk7IFxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgY2l0aWVzOiBjaXRpZXMubWFwKGNpdHkgPT4gKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBjaXR5LnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgY291bnRyeTogY2l0eS5jb3VudHJ5LFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IGNpdHkuaW1hZ2UsXHJcbiAgICAgICAgICAgICAgICBpZDogY2l0eS5faWQudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJldmFsaWRhdGU6IDEwXHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTsiXSwic291cmNlUm9vdCI6IiJ9