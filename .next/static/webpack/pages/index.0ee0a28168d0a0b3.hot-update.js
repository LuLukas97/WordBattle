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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"./node_modules/@swc/helpers/esm/_ts_generator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\nvar HomePageTiles = function(param) {\n    var onStateUpdate = param.onStateUpdate;\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), 2), handleCategory = _useState[0], setHandleCategory = _useState[1];\n    var selectCategory = function() {\n        var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_3__._)(function(id) {\n            return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_4__._)(this, function(_state) {\n                setShowLetters(true);\n                setHandleCategory(id);\n                return [\n                    2\n                ];\n            });\n        });\n        return function selectCategory(id) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var handleClick = function(value) {\n        onStateUpdate(value);\n    };\n    var mix = [\n        \"M\",\n        \"i\",\n        \"x\"\n    ];\n    var random = [\n        \"R\",\n        \"A\",\n        \"N\",\n        \"D\",\n        \"O\",\n        \"M\"\n    ];\n    var food = [\n        \"F\",\n        \"O\",\n        \"O\",\n        \"D\",\n        \"O\",\n        \"M\"\n    ];\n    var mixLetters = function() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            onClick: function() {\n                return handleClick(\"Mix\");\n            },\n            className: \"row3\",\n            children: mix.map(function(letter, index) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"box\",\n                    children: letter\n                }, index, false, {\n                    fileName: \"D:\\\\Hobby\\\\letterdash\\\\components\\\\homepageTiles.js\",\n                    lineNumber: 22,\n                    columnNumber: 11\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"D:\\\\Hobby\\\\letterdash\\\\components\\\\homepageTiles.js\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, _this);\n    };\n    var randomLetters = function() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            onClick: function() {\n                return handleClick(\"Random\");\n            },\n            className: \"row6\",\n            children: random.map(function(letter, index) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"box\",\n                    children: letter\n                }, index, false, {\n                    fileName: \"D:\\\\Hobby\\\\letterdash\\\\components\\\\homepageTiles.js\",\n                    lineNumber: 34,\n                    columnNumber: 11\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"D:\\\\Hobby\\\\letterdash\\\\components\\\\homepageTiles.js\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, _this);\n    };\n    var foodLetters = function() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            onClick: function() {\n                return handleClick(\"Random\");\n            },\n            className: \"row6\",\n            children: random.map(function(letter, index) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"box\",\n                    children: letter\n                }, index, false, {\n                    fileName: \"D:\\\\Hobby\\\\letterdash\\\\components\\\\homepageTiles.js\",\n                    lineNumber: 45,\n                    columnNumber: 11\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"D:\\\\Hobby\\\\letterdash\\\\components\\\\homepageTiles.js\",\n            lineNumber: 43,\n            columnNumber: 7\n        }, _this);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            mixLetters(),\n            randomLetters()\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Hobby\\\\letterdash\\\\components\\\\homepageTiles.js\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, _this);\n};\n_s(HomePageTiles, \"JOweAWcQPWU5Jhft/cupc7VzoAQ=\");\n_c = HomePageTiles;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePageTiles);\nvar _c;\n$RefreshReg$(_c, \"HomePageTiles\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hvbWVwYWdlVGlsZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFFbkQsSUFBTUcsZ0JBQWdCO1FBQUdDLHNCQUFBQTs7SUFDdkIsSUFBNENILFlBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsUUFBN0NJLGlCQUFxQ0osY0FBckJLLG9CQUFxQkw7SUFFNUMsSUFBTU07bUJBQWlCLDRFQUFPQzs7Z0JBQzVCQyxlQUFlO2dCQUNmSCxrQkFBa0JFOzs7OztRQUNwQjt3QkFITUQsZUFBd0JDOzs7O0lBSTlCLElBQU1FLGNBQWMsU0FBQ0M7UUFDbkJQLGNBQWNPO0lBQ2hCO0lBQ0EsSUFBTUMsTUFBTTtRQUFDO1FBQUs7UUFBSztLQUFJO0lBQzNCLElBQU1DLFNBQVM7UUFBQztRQUFLO1FBQUs7UUFBSztRQUFLO1FBQUs7S0FBSTtJQUM3QyxJQUFNQyxPQUFPO1FBQUM7UUFBSztRQUFLO1FBQUs7UUFBSztRQUFLO0tBQUk7SUFHM0MsSUFBTUMsYUFBYTtRQUNqQixxQkFDRSw4REFBQ0M7WUFBT0MsU0FBUzt1QkFBTVAsWUFBWTs7WUFBUVEsV0FBVTtzQkFDbEROLElBQUlPLElBQUksU0FBQ0MsUUFBUUM7cUNBQ2hCLDhEQUFDQztvQkFBSUosV0FBVTs4QkFDWkU7bUJBRHVCQzs7Ozs7Ozs7Ozs7SUFNbEM7SUFFQSxJQUFNRSxnQkFBZ0I7UUFDcEIscUJBQ0UsOERBQUNQO1lBQU9DLFNBQVM7dUJBQU1QLFlBQVk7O1lBQVdRLFdBQVU7c0JBQ3JETCxPQUFPTSxJQUFJLFNBQUNDLFFBQVFDO3FDQUNuQiw4REFBQ0M7b0JBQUlKLFdBQVU7OEJBQ1pFO21CQUR1QkM7Ozs7Ozs7Ozs7O0lBTWxDO0lBQ0EsSUFBTUcsY0FBYztRQUNsQixxQkFDRSw4REFBQ1I7WUFBT0MsU0FBUzt1QkFBTVAsWUFBWTs7WUFBV1EsV0FBVTtzQkFDckRMLE9BQU9NLElBQUksU0FBQ0MsUUFBUUM7cUNBQ25CLDhEQUFDQztvQkFBSUosV0FBVTs4QkFDWkU7bUJBRHVCQzs7Ozs7Ozs7Ozs7SUFNbEM7SUFFQSxxQkFDRSw4REFBQ0M7O1lBQ0VQO1lBQ0FROzs7Ozs7O0FBR1A7R0F4RE1wQjtLQUFBQTtBQXlETiwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2hvbWVwYWdlVGlsZXMuanM/ODAxMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCBSZWFjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgSG9tZVBhZ2VUaWxlcyA9ICh7IG9uU3RhdGVVcGRhdGUgfSkgPT4ge1xyXG4gIGNvbnN0IFtoYW5kbGVDYXRlZ29yeSwgc2V0SGFuZGxlQ2F0ZWdvcnldID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgY29uc3Qgc2VsZWN0Q2F0ZWdvcnkgPSBhc3luYyAoaWQpID0+IHtcclxuICAgIHNldFNob3dMZXR0ZXJzKHRydWUpO1xyXG4gICAgc2V0SGFuZGxlQ2F0ZWdvcnkoaWQpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAodmFsdWUpID0+IHtcclxuICAgIG9uU3RhdGVVcGRhdGUodmFsdWUpO1xyXG4gIH07XHJcbiAgY29uc3QgbWl4ID0gW1wiTVwiLCBcImlcIiwgXCJ4XCJdO1xyXG4gIGNvbnN0IHJhbmRvbSA9IFtcIlJcIiwgXCJBXCIsIFwiTlwiLCBcIkRcIiwgXCJPXCIsIFwiTVwiXTtcclxuICBjb25zdCBmb29kID0gW1wiRlwiLCBcIk9cIiwgXCJPXCIsIFwiRFwiLCBcIk9cIiwgXCJNXCJdO1xyXG5cclxuXHJcbiAgY29uc3QgbWl4TGV0dGVycyA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soXCJNaXhcIil9IGNsYXNzTmFtZT1cInJvdzNcIj5cclxuICAgICAgICB7bWl4Lm1hcCgobGV0dGVyLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hcIiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAge2xldHRlcn1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmFuZG9tTGV0dGVycyA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soXCJSYW5kb21cIil9IGNsYXNzTmFtZT1cInJvdzZcIj5cclxuICAgICAgICB7cmFuZG9tLm1hcCgobGV0dGVyLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hcIiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAge2xldHRlcn1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICk7XHJcbiAgfTtcclxuICBjb25zdCBmb29kTGV0dGVycyA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soXCJSYW5kb21cIil9IGNsYXNzTmFtZT1cInJvdzZcIj5cclxuICAgICAgICB7cmFuZG9tLm1hcCgobGV0dGVyLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hcIiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAge2xldHRlcn1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHttaXhMZXR0ZXJzKCl9XHJcbiAgICAgIHtyYW5kb21MZXR0ZXJzKCl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZVRpbGVzO1xyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJSZWFjdCIsIkhvbWVQYWdlVGlsZXMiLCJvblN0YXRlVXBkYXRlIiwiaGFuZGxlQ2F0ZWdvcnkiLCJzZXRIYW5kbGVDYXRlZ29yeSIsInNlbGVjdENhdGVnb3J5IiwiaWQiLCJzZXRTaG93TGV0dGVycyIsImhhbmRsZUNsaWNrIiwidmFsdWUiLCJtaXgiLCJyYW5kb20iLCJmb29kIiwibWl4TGV0dGVycyIsImJ1dHRvbiIsIm9uQ2xpY2siLCJjbGFzc05hbWUiLCJtYXAiLCJsZXR0ZXIiLCJpbmRleCIsImRpdiIsInJhbmRvbUxldHRlcnMiLCJmb29kTGV0dGVycyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/homepageTiles.js\n"));

/***/ })

});