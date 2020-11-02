webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prismic_javascript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prismic-javascript */ \"./node_modules/prismic-javascript/esm/prismic-javascript.mjs\");\n/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prismic-reactjs */ \"./node_modules/prismic-reactjs/dist/prismic-reactjs.js\");\n/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var layouts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! layouts */ \"./layouts/index.js\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components */ \"./components/index.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/antoineluta/Documents/GitHub/photolangage/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n // Project components & functions\n\n\n\n\n/**\r\n * Homepage component\r\n */\nvar Home = function Home(_ref) {\n  var doc = _ref.doc,\n      posts = _ref.posts;\n\n  if (doc && doc.data) {\n    return __jsx(layouts__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 7\n      }\n    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 9\n      }\n    }, __jsx(\"title\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 11\n      }\n    }, prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__[\"RichText\"].asText(doc.data.title))), __jsx(_components__WEBPACK_IMPORTED_MODULE_5__[\"Card\"], {\n      card: doc.data.body.card,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }\n    }), __jsx(prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__[\"Link\"], {\n      href: \"\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }\n    }, __jsx(\"a\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 11\n      }\n    }, \"Blog Post\")));\n  }\n\n  return null;\n};\n\n_c = Home;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJkb2MiLCJwb3N0cyIsImRhdGEiLCJSaWNoVGV4dCIsImFzVGV4dCIsInRpdGxlIiwiYm9keSIsImNhcmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtDQUdBOztBQUNBO0FBQ0E7O0FBR0E7OztBQUdBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQW9CO0FBQUEsTUFBakJDLEdBQWlCLFFBQWpCQSxHQUFpQjtBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTs7QUFDL0IsTUFBSUQsR0FBRyxJQUFJQSxHQUFHLENBQUNFLElBQWYsRUFBcUI7QUFDbkIsV0FDRSxNQUFDLCtDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQVFDLHdEQUFRLENBQUNDLE1BQVQsQ0FBZ0JKLEdBQUcsQ0FBQ0UsSUFBSixDQUFTRyxLQUF6QixDQUFSLENBREYsQ0FERixFQUlFLE1BQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUVMLEdBQUcsQ0FBQ0UsSUFBSixDQUFTSSxJQUFULENBQWNDLElBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFKRixFQUtFLE1BQUMsb0RBQUQ7QUFBTSxVQUFJLEVBQUMsRUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixDQUxGLENBREY7QUFXRDs7QUFDRCxTQUFPLElBQVA7QUFDRCxDQWZEOztLQUFNUixJOztBQWdDU0EsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgUHJpc21pYyBmcm9tIFwicHJpc21pYy1qYXZhc2NyaXB0XCI7XHJcbmltcG9ydCB7IFJpY2hUZXh0LCBMaW5rIH0gZnJvbSBcInByaXNtaWMtcmVhY3Rqc1wiO1xyXG5cclxuLy8gUHJvamVjdCBjb21wb25lbnRzICYgZnVuY3Rpb25zXHJcbmltcG9ydCBEZWZhdWx0TGF5b3V0IGZyb20gXCJsYXlvdXRzXCI7XHJcbmltcG9ydCB7IEhlYWRlciwgQ2FyZH0gZnJvbSBcIi4uL2NvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgQ2xpZW50IH0gZnJvbSBcInV0aWxzL3ByaXNtaWNIZWxwZXJzXCI7XHJcblxyXG4vKipcclxuICogSG9tZXBhZ2UgY29tcG9uZW50XHJcbiAqL1xyXG5jb25zdCBIb21lID0gKHsgZG9jLCBwb3N0cyB9KSA9PiB7XHJcbiAgaWYgKGRvYyAmJiBkb2MuZGF0YSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPERlZmF1bHRMYXlvdXQ+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICA8dGl0bGU+e1JpY2hUZXh0LmFzVGV4dChkb2MuZGF0YS50aXRsZSl9PC90aXRsZT5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPENhcmQgY2FyZD17ZG9jLmRhdGEuYm9keS5jYXJkfSAvPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCJcIj5cclxuICAgICAgICAgIDxhPkJsb2cgUG9zdDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvRGVmYXVsdExheW91dD5cclxuICAgICk7XHJcbiAgfVxyXG4gIHJldHVybiBudWxsO1xyXG59O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcHJldmlldyA9IG51bGwsIHByZXZpZXdEYXRhID0ge30gfSkge1xyXG5cclxuICBjb25zdCB7IHJlZiB9ID0gcHJldmlld0RhdGFcclxuICBjb25zdCBjbGllbnQgPSBDbGllbnQoKVxyXG4gIGNvbnN0IGRvYyA9IGF3YWl0IGNsaWVudC5nZXRTaW5nbGUoXCJjYXJkXCIsIHsgZmV0Y2hMaW5rczogWydhcnRpY2xlLnRpdGxlJywnYXJ0aWNsZS5jb3ZlcicsJ2FydGljbGUuc3VtbWFyeSddfSkgfHwge31cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGRvYyxcclxuICAgICAgcHJldmlld1xyXG4gICAgfSxcclxuICAgIHVuc3RhYmxlX3JldmFsaWRhdGU6IDYwXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})