"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/homepageTiles.js":
/*!*************************************!*\
  !*** ./components/homepageTiles.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar HomePageTiles = function() {\n    var mix = [\n        \"M\",\n        \"i\",\n        \"x\"\n    ];\n    var mixLetters = function() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            onClick: function() {\n                return selectCategory(\"Mix\");\n            },\n            className: \"row3\",\n            children: mix.map(function(letter, index) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"box\",\n                    children: letter\n                }, index, false, {\n                    fileName: \"D:\\\\Hobby\\\\letterdash\\\\components\\\\homepageTiles.js\",\n                    lineNumber: 10,\n                    columnNumber: 11\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"D:\\\\Hobby\\\\letterdash\\\\components\\\\homepageTiles.js\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, _this);\n    };\n    var random = [\n        \"R\",\n        \"A\",\n        \"N\",\n        \"D\",\n        \"O\",\n        \"M\"\n    ];\n    var randomLetters = function() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row6\",\n            children: random.map(function(letter, index) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"box\",\n                    children: letter\n                }, index, false, {\n                    fileName: \"D:\\\\Hobby\\\\letterdash\\\\components\\\\homepageTiles.js\",\n                    lineNumber: 24,\n                    columnNumber: 11\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"D:\\\\Hobby\\\\letterdash\\\\components\\\\homepageTiles.js\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, _this);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            mixLetters(),\n            randomLetters()\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Hobby\\\\letterdash\\\\components\\\\homepageTiles.js\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, _this);\n};\n_c = HomePageTiles;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePageTiles);\nvar _c;\n$RefreshReg$(_c, \"HomePageTiles\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hvbWVwYWdlVGlsZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEwQjtBQUUxQixJQUFNQyxnQkFBZ0I7SUFDcEIsSUFBTUMsTUFBTTtRQUFDO1FBQUs7UUFBSztLQUFJO0lBRTNCLElBQU1DLGFBQWE7UUFDakIscUJBQ0UsOERBQUNDO1lBQU9DLFNBQVM7dUJBQU1DLGVBQWU7O1lBQVFDLFdBQVU7c0JBQ3JETCxJQUFJTSxJQUFJLFNBQUNDLFFBQVFDO3FDQUNoQiw4REFBQ0M7b0JBQUlKLFdBQVU7OEJBQ1pFO21CQUR1QkM7Ozs7Ozs7Ozs7O0lBTWxDO0lBRUEsSUFBTUUsU0FBUztRQUFDO1FBQUs7UUFBSztRQUFLO1FBQUs7UUFBSztLQUFJO0lBRTdDLElBQU1DLGdCQUFnQjtRQUNwQixxQkFDRSw4REFBQ0Y7WUFBSUosV0FBVTtzQkFDWkssT0FBT0osSUFBSSxTQUFDQyxRQUFRQztxQ0FDbkIsOERBQUNDO29CQUFJSixXQUFVOzhCQUNaRTttQkFEdUJDOzs7Ozs7Ozs7OztJQU1sQztJQUVBLHFCQUNFLDhEQUFDQzs7WUFDRVI7WUFDQVU7Ozs7Ozs7QUFHUDtLQW5DTVo7QUFvQ04sK0RBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lcGFnZVRpbGVzLmpzPzgwMTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgSG9tZVBhZ2VUaWxlcyA9ICgpID0+IHtcclxuICBjb25zdCBtaXggPSBbXCJNXCIsIFwiaVwiLCBcInhcIl07XHJcblxyXG4gIGNvbnN0IG1peExldHRlcnMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNlbGVjdENhdGVnb3J5KFwiTWl4XCIpfSBjbGFzc05hbWU9XCJyb3czXCI+XHJcbiAgICAgICAge21peC5tYXAoKGxldHRlciwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94XCIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgIHtsZXR0ZXJ9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9idXR0b24+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJhbmRvbSA9IFtcIlJcIiwgXCJBXCIsIFwiTlwiLCBcIkRcIiwgXCJPXCIsIFwiTVwiXTtcclxuXHJcbiAgY29uc3QgcmFuZG9tTGV0dGVycyA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93NlwiPlxyXG4gICAgICAgIHtyYW5kb20ubWFwKChsZXR0ZXIsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveFwiIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICB7bGV0dGVyfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAge21peExldHRlcnMoKX1cclxuICAgICAge3JhbmRvbUxldHRlcnMoKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlVGlsZXM7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkhvbWVQYWdlVGlsZXMiLCJtaXgiLCJtaXhMZXR0ZXJzIiwiYnV0dG9uIiwib25DbGljayIsInNlbGVjdENhdGVnb3J5IiwiY2xhc3NOYW1lIiwibWFwIiwibGV0dGVyIiwiaW5kZXgiLCJkaXYiLCJyYW5kb20iLCJyYW5kb21MZXR0ZXJzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/homepageTiles.js\n"));

/***/ })

});