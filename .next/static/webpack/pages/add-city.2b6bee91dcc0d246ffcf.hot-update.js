webpackHotUpdate_N_E("pages/add-city",{

/***/ "./pages/add-city/index.js":
/*!*********************************!*\
  !*** ./pages/add-city/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var L_PROGRAMOWANIE_NEXT_Udemy_NEXT_app_big_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var L_PROGRAMOWANIE_NEXT_Udemy_NEXT_app_big_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(L_PROGRAMOWANIE_NEXT_Udemy_NEXT_app_big_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var L_PROGRAMOWANIE_NEXT_Udemy_NEXT_app_big_project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_cities_NewCityForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/cities/NewCityForm */ "./components/cities/NewCityForm.js");




var _jsxFileName = "L:\\PROGRAMOWANIE\\NEXT\\Udemy\\NEXT app\\big-project\\pages\\add-city\\index.js",
    _this = undefined,
    _s = $RefreshSig$();




var NewCityPage = function NewCityPage() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  var addCityHandler = /*#__PURE__*/function () {
    var _ref = Object(L_PROGRAMOWANIE_NEXT_Udemy_NEXT_app_big_project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/L_PROGRAMOWANIE_NEXT_Udemy_NEXT_app_big_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(enteredCityData) {
      var response, data;
      return L_PROGRAMOWANIE_NEXT_Udemy_NEXT_app_big_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch('/api/new-city', {
                method: 'POST',
                body: JSON.stringify(enteredCityData),
                headers: {
                  'Content-Type': 'application/json'
                }
              });

            case 2:
              response = _context.sent;
              _context.next = 5;
              return response.json();

            case 5:
              data = _context.sent;
              console.log(data);
              router.push('/');

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function addCityHandler(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_cities_NewCityForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onAddCity: addCityHandler
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 9
  }, _this);
};

_s(NewCityPage, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c = NewCityPage;
/* harmony default export */ __webpack_exports__["default"] = (NewCityPage);

var _c;

$RefreshReg$(_c, "NewCityPage");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRkLWNpdHkvaW5kZXguanMiXSwibmFtZXMiOlsiTmV3Q2l0eVBhZ2UiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJhZGRDaXR5SGFuZGxlciIsImVudGVyZWRDaXR5RGF0YSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFBQTs7QUFDdEIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFDQSxNQUFNQyxjQUFjO0FBQUEsd1RBQUUsaUJBQU1DLGVBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDS0MsS0FBSyxDQUFDLGVBQUQsRUFBa0I7QUFDMUNDLHNCQUFNLEVBQUUsTUFEa0M7QUFFMUNDLG9CQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlTCxlQUFmLENBRm9DO0FBRzFDTSx1QkFBTyxFQUFFO0FBQ0wsa0NBQWdCO0FBRFg7QUFIaUMsZUFBbEIsQ0FEVjs7QUFBQTtBQUNaQyxzQkFEWTtBQUFBO0FBQUEscUJBU0NBLFFBQVEsQ0FBQ0MsSUFBVCxFQVREOztBQUFBO0FBU1pDLGtCQVRZO0FBV2xCQyxxQkFBTyxDQUFDQyxHQUFSLENBQVlGLElBQVo7QUFFQVosb0JBQU0sQ0FBQ2UsSUFBUCxDQUFZLEdBQVo7O0FBYmtCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUY7O0FBQUEsb0JBQWRiLGNBQWM7QUFBQTtBQUFBO0FBQUEsS0FBcEI7O0FBZ0JBLHNCQUNJLHFFQUFDLHNFQUFEO0FBQWEsYUFBUyxFQUFFQTtBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFHSCxDQXJCRDs7R0FBTUgsVztVQUNhRSxxRDs7O0tBRGJGLFc7QUF1QlNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkZC1jaXR5LjJiNmJlZTkxZGNjMGQyNDZmZmNmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IE5ld0NpdHlGb3JtIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2NpdGllcy9OZXdDaXR5Rm9ybVwiO1xyXG5cclxuY29uc3QgTmV3Q2l0eVBhZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IGFkZENpdHlIYW5kbGVyID1hc3luYyhlbnRlcmVkQ2l0eURhdGEpID0+IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL25ldy1jaXR5Jywge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZW50ZXJlZENpdHlEYXRhKSxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICAgICAgICByb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxOZXdDaXR5Rm9ybSBvbkFkZENpdHk9e2FkZENpdHlIYW5kbGVyfS8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5ld0NpdHlQYWdlOyJdLCJzb3VyY2VSb290IjoiIn0=