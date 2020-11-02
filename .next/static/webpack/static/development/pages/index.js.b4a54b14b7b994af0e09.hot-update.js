webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prismic_javascript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prismic-javascript */ \"./node_modules/prismic-javascript/esm/prismic-javascript.mjs\");\n/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prismic-reactjs */ \"./node_modules/prismic-reactjs/dist/prismic-reactjs.js\");\n/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var layouts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! layouts */ \"./layouts/index.js\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components */ \"./components/index.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/antoineluta/Documents/GitHub/photolangage/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n // Project components & functions\n\n\n\n\n/**\r\n * Homepage component\r\n */\nvar Home = function Home(_ref) {\n  var doc = _ref.doc,\n      posts = _ref.posts;\n\n  if (doc && doc.data) {\n    return __jsx(layouts__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 7\n      }\n    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 9\n      }\n    }, __jsx(\"title\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 11\n      }\n    }, prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__[\"RichText\"].asText(doc.data.title))), __jsx(_components__WEBPACK_IMPORTED_MODULE_5__[\"Card\"], {\n      card: doc.data.body.cards,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }\n    }));\n  }\n\n  return null;\n};\n\n_c = Home;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJkb2MiLCJwb3N0cyIsImRhdGEiLCJSaWNoVGV4dCIsImFzVGV4dCIsInRpdGxlIiwiYm9keSIsImNhcmRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Q0FHQTs7QUFDQTtBQUNBOztBQUdBOzs7QUFHQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFvQjtBQUFBLE1BQWpCQyxHQUFpQixRQUFqQkEsR0FBaUI7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7O0FBQy9CLE1BQUlELEdBQUcsSUFBSUEsR0FBRyxDQUFDRSxJQUFmLEVBQXFCO0FBQ25CLFdBQ0UsTUFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFRQyx3REFBUSxDQUFDQyxNQUFULENBQWdCSixHQUFHLENBQUNFLElBQUosQ0FBU0csS0FBekIsQ0FBUixDQURGLENBREYsRUFJRSxNQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFFTCxHQUFHLENBQUNFLElBQUosQ0FBU0ksSUFBVCxDQUFjQyxLQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSkYsQ0FERjtBQVFEOztBQUNELFNBQU8sSUFBUDtBQUNELENBWkQ7O0tBQU1SLEk7O0FBNkJTQSxtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBQcmlzbWljIGZyb20gXCJwcmlzbWljLWphdmFzY3JpcHRcIjtcclxuaW1wb3J0IHsgUmljaFRleHQsIExpbmsgfSBmcm9tIFwicHJpc21pYy1yZWFjdGpzXCI7XHJcblxyXG4vLyBQcm9qZWN0IGNvbXBvbmVudHMgJiBmdW5jdGlvbnNcclxuaW1wb3J0IERlZmF1bHRMYXlvdXQgZnJvbSBcImxheW91dHNcIjtcclxuaW1wb3J0IHsgSGVhZGVyLCBDYXJkfSBmcm9tIFwiLi4vY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBDbGllbnQgfSBmcm9tIFwidXRpbHMvcHJpc21pY0hlbHBlcnNcIjtcclxuXHJcbi8qKlxyXG4gKiBIb21lcGFnZSBjb21wb25lbnRcclxuICovXHJcbmNvbnN0IEhvbWUgPSAoeyBkb2MsIHBvc3RzIH0pID0+IHtcclxuICBpZiAoZG9jICYmIGRvYy5kYXRhKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8RGVmYXVsdExheW91dD5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgIDx0aXRsZT57UmljaFRleHQuYXNUZXh0KGRvYy5kYXRhLnRpdGxlKX08L3RpdGxlPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8Q2FyZCBjYXJkPXtkb2MuZGF0YS5ib2R5LmNhcmRzfSAvPlxyXG4gICAgICA8L0RlZmF1bHRMYXlvdXQ+XHJcbiAgICApO1xyXG4gIH1cclxuICByZXR1cm4gbnVsbDtcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHByZXZpZXcgPSBudWxsLCBwcmV2aWV3RGF0YSA9IHt9IH0pIHtcclxuXHJcbiAgY29uc3QgeyByZWYgfSA9IHByZXZpZXdEYXRhXHJcbiAgY29uc3QgY2xpZW50ID0gQ2xpZW50KClcclxuICBjb25zdCBkb2MgPSBhd2FpdCBjbGllbnQuZ2V0QnlVSUQoXCJkZWNrXCIsIFwiZGVja1wiLCB7IGZldGNoTGlua3M6IFsnY2FyZHMuY2FyZCddfSkgfHwge31cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGRvYyxcclxuICAgICAgcHJldmlld1xyXG4gICAgfSxcclxuICAgIHVuc3RhYmxlX3JldmFsaWRhdGU6IDYwXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})