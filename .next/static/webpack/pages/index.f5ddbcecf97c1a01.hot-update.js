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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"./node_modules/@swc/helpers/esm/_ts_generator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_homepageTiles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/homepageTiles */ \"./components/homepageTiles.js\");\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar home = function() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), 2), handleCategory = _useState[0], setHandleCategory = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), 2), handleRounds = _useState1[0], setHandleRounds = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), 2), showLetters = _useState2[0], setShowLetters = _useState2[1];\n    var _useState3 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), 2), stateValue = _useState3[0], setStateValue = _useState3[1];\n    var selectCategory = function() {\n        var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_4__._)(function(id) {\n            return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_5__._)(this, function(_state) {\n                setShowLetters(true);\n                setHandleCategory(id);\n                return [\n                    2\n                ];\n            });\n        });\n        return function selectCategory(id) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var selectRounds = function() {\n        var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_4__._)(function(id) {\n            return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_5__._)(this, function(_state) {\n                setHandleRounds(id);\n                return [\n                    2\n                ];\n            });\n        });\n        return function selectRounds(id) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var handleStateUpdate = function(value) {\n        setStateValue(value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"wrapper\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"headerContainer\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"headerTitle\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"headerLetter\",\n                                children: \"Letter\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Hobby\\\\letterdash\\\\pages\\\\index.js\",\n                                lineNumber: 27,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"headerDash\",\n                                children: \"Dash\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Hobby\\\\letterdash\\\\pages\\\\index.js\",\n                                lineNumber: 28,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"dashImg\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Hobby\\\\letterdash\\\\pages\\\\index.js\",\n                                lineNumber: 29,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Hobby\\\\letterdash\\\\pages\\\\index.js\",\n                        lineNumber: 26,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Hobby\\\\letterdash\\\\pages\\\\index.js\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"letterDash\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"introText\",\n                            children: \" Like Wordle, but with categoriesss!\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Hobby\\\\letterdash\\\\pages\\\\index.js\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"gameRules\",\n                            children: \" Start by selecting a category: \"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Hobby\\\\letterdash\\\\pages\\\\index.js\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"category-flex\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Hobby\\\\letterdash\\\\pages\\\\index.js\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_homepageTiles__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            onStateUpdate: handleStateUpdate\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Hobby\\\\letterdash\\\\pages\\\\index.js\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"State Value: \",\n                                stateValue\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Hobby\\\\letterdash\\\\pages\\\\index.js\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, _this),\n                        stateValue && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"cssanimation sequence fadeInBottom\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    children: \" Select amount of letter words: \"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Hobby\\\\letterdash\\\\pages\\\\index.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"letterAmount-flex\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"letterAmount-btn\",\n                                            onClick: function() {\n                                                return selectRounds(3);\n                                            },\n                                            children: \"3\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Hobby\\\\letterdash\\\\pages\\\\index.js\",\n                                            lineNumber: 46,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"letterAmount-btn\",\n                                            onClick: function() {\n                                                return selectRounds(5);\n                                            },\n                                            children: \"5\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Hobby\\\\letterdash\\\\pages\\\\index.js\",\n                                            lineNumber: 52,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"letterAmount-btn\",\n                                            onClick: function() {\n                                                return selectRounds(7);\n                                            },\n                                            children: \"7\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Hobby\\\\letterdash\\\\pages\\\\index.js\",\n                                            lineNumber: 58,\n                                            columnNumber: 17\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Hobby\\\\letterdash\\\\pages\\\\index.js\",\n                                    lineNumber: 45,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    children: [\n                                        \"Game rules:\",\n                                        \" \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"summaryRules\",\n                                            children: handleCategory\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Hobby\\\\letterdash\\\\pages\\\\index.js\",\n                                            lineNumber: 67,\n                                            columnNumber: 17\n                                        }, _this),\n                                        \" category with \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"summaryRules\",\n                                            children: handleRounds\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Hobby\\\\letterdash\\\\pages\\\\index.js\",\n                                            lineNumber: 68,\n                                            columnNumber: 22\n                                        }, _this),\n                                        \" \",\n                                        \"rounds!\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Hobby\\\\letterdash\\\\pages\\\\index.js\",\n                                    lineNumber: 65,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"ready-btn\",\n                                    children: \"Ready? Start here! \"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Hobby\\\\letterdash\\\\pages\\\\index.js\",\n                                    lineNumber: 72,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Hobby\\\\letterdash\\\\pages\\\\index.js\",\n                            lineNumber: 43,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Hobby\\\\letterdash\\\\pages\\\\index.js\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Hobby\\\\letterdash\\\\pages\\\\index.js\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Hobby\\\\letterdash\\\\pages\\\\index.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, _this);\n};\n_s(home, \"Q2KxWw84L7yb3GyKkOWZKqZOqDM=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (home);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDSztBQUV4RCxJQUFNSSxPQUFPOztJQUNYLElBQTRDSCxZQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLFFBQTdDSSxpQkFBcUNKLGNBQXJCSyxvQkFBcUJMO0lBQzVDLElBQXdDQSxhQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLFFBQXpDTSxlQUFpQ04sZUFBbkJPLGtCQUFtQlA7SUFDeEMsSUFBc0NBLGFBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxZQUF4Q1EsY0FBK0JSLGVBQWxCUyxpQkFBa0JUO0lBQ3RDLElBQW9DQSxhQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQUMsU0FBdENVLGFBQTZCVixlQUFqQlcsZ0JBQWlCWDtJQUVwQyxJQUFNWTttQkFBaUIsNEVBQU9DOztnQkFDNUJKLGVBQWU7Z0JBQ2ZKLGtCQUFrQlE7Ozs7O1FBQ3BCO3dCQUhNRCxlQUF3QkM7Ozs7SUFJOUIsSUFBTUM7bUJBQWUsNEVBQU9EOztnQkFDMUJOLGdCQUFnQk07Ozs7O1FBQ2xCO3dCQUZNQyxhQUFzQkQ7Ozs7SUFJNUIsSUFBTUUsb0JBQW9CLFNBQUNDO1FBQ3pCTCxjQUFjSztJQUNoQjtJQUVBLHFCQUNFLDhEQUFDQztrQkFDQyw0RUFBQ0E7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNEO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNDO2dDQUFLRCxXQUFVOzBDQUFlOzs7Ozs7MENBQy9CLDhEQUFDQztnQ0FBS0QsV0FBVTswQ0FBYTs7Ozs7OzBDQUM3Qiw4REFBQ0Q7Z0NBQUlDLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUduQiw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDRTs0QkFBR0YsV0FBVTtzQ0FBWTs7Ozs7O3NDQUUxQiw4REFBQ0c7NEJBQUdILFdBQVU7c0NBQVk7Ozs7OztzQ0FDMUIsOERBQUNEOzRCQUFJQyxXQUFVOzs7Ozs7c0NBSWYsOERBQUNoQixpRUFBYUE7NEJBQUNvQixlQUFlUDs7Ozs7O3NDQUM5Qiw4REFBQ1E7O2dDQUFFO2dDQUFjYjs7Ozs7Ozt3QkFDaEJBLDRCQUNDLDhEQUFDTzs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNHOzhDQUFHOzs7Ozs7OENBQ0osOERBQUNKO29DQUFJQyxXQUFVOztzREFDYiw4REFBQ007NENBQ0NOLFdBQVU7NENBQ1ZPLFNBQVM7dURBQU1YLGFBQWE7O3NEQUM3Qjs7Ozs7O3NEQUdELDhEQUFDVTs0Q0FDQ04sV0FBVTs0Q0FDVk8sU0FBUzt1REFBTVgsYUFBYTs7c0RBQzdCOzs7Ozs7c0RBR0QsOERBQUNVOzRDQUNDTixXQUFVOzRDQUNWTyxTQUFTO3VEQUFNWCxhQUFhOztzREFDN0I7Ozs7Ozs7Ozs7Ozs4Q0FJSCw4REFBQ087O3dDQUFHO3dDQUNVO3NEQUNaLDhEQUFDRjs0Q0FBS0QsV0FBVTtzREFBZ0JkOzs7Ozs7d0NBQXNCO3NEQUNqRCw4REFBQ2U7NENBQUtELFdBQVU7c0RBQWdCWjs7Ozs7O3dDQUFxQjt3Q0FBSTs7Ozs7Ozs4Q0FJaEUsOERBQUNrQjtvQ0FBT04sV0FBVTs4Q0FBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPNUM7R0EzRU1mO0FBNkVOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgUmVhY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhvbWVQYWdlVGlsZXMgZnJvbSBcIi4uL2NvbXBvbmVudHMvaG9tZXBhZ2VUaWxlc1wiO1xyXG5cclxuY29uc3QgaG9tZSA9ICgpID0+IHtcclxuICBjb25zdCBbaGFuZGxlQ2F0ZWdvcnksIHNldEhhbmRsZUNhdGVnb3J5XSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2hhbmRsZVJvdW5kcywgc2V0SGFuZGxlUm91bmRzXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW3Nob3dMZXR0ZXJzLCBzZXRTaG93TGV0dGVyc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3N0YXRlVmFsdWUsIHNldFN0YXRlVmFsdWVdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IHNlbGVjdENhdGVnb3J5ID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgICBzZXRTaG93TGV0dGVycyh0cnVlKTtcclxuICAgIHNldEhhbmRsZUNhdGVnb3J5KGlkKTtcclxuICB9O1xyXG4gIGNvbnN0IHNlbGVjdFJvdW5kcyA9IGFzeW5jIChpZCkgPT4ge1xyXG4gICAgc2V0SGFuZGxlUm91bmRzKGlkKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTdGF0ZVVwZGF0ZSA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgc2V0U3RhdGVWYWx1ZSh2YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyQ29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclRpdGxlXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhlYWRlckxldHRlclwiPkxldHRlcjwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGVhZGVyRGFzaFwiPkRhc2g8L3NwYW4+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGFzaEltZ1wiPjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXR0ZXJEYXNoXCI+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaW50cm9UZXh0XCI+IExpa2UgV29yZGxlLCBidXQgd2l0aCBjYXRlZ29yaWVzc3MhPC9oMT5cclxuXHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZ2FtZVJ1bGVzXCI+IFN0YXJ0IGJ5IHNlbGVjdGluZyBhIGNhdGVnb3J5OiA8L2gyPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXRlZ29yeS1mbGV4XCI+XHJcbiAgICAgICAgICAgIHsvKiA8SG9tZVBhZ2VUaWxlcyBvblN0YXRlVXBkYXRlPXtoYW5kbGVTdGF0ZVVwZGF0ZX0gLz5cclxuICAgICAgICAgICAgPHA+U3RhdGUgVmFsdWU6IHtzdGF0ZVZhbHVlfTwvcD4gKi99XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxIb21lUGFnZVRpbGVzIG9uU3RhdGVVcGRhdGU9e2hhbmRsZVN0YXRlVXBkYXRlfSAvPlxyXG4gICAgICAgICAgPHA+U3RhdGUgVmFsdWU6IHtzdGF0ZVZhbHVlfTwvcD5cclxuICAgICAgICAgIHtzdGF0ZVZhbHVlICYmIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjc3NhbmltYXRpb24gc2VxdWVuY2UgZmFkZUluQm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgPGgyPiBTZWxlY3QgYW1vdW50IG9mIGxldHRlciB3b3JkczogPC9oMj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldHRlckFtb3VudC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxldHRlckFtb3VudC1idG5cIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZWxlY3RSb3VuZHMoMyl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDNcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsZXR0ZXJBbW91bnQtYnRuXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2VsZWN0Um91bmRzKDUpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA1XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGV0dGVyQW1vdW50LWJ0blwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNlbGVjdFJvdW5kcyg3KX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgN1xyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGgyPlxyXG4gICAgICAgICAgICAgICAgR2FtZSBydWxlczp7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdW1tYXJ5UnVsZXNcIj57aGFuZGxlQ2F0ZWdvcnl9PC9zcGFuPiBjYXRlZ29yeVxyXG4gICAgICAgICAgICAgICAgd2l0aCA8c3BhbiBjbGFzc05hbWU9XCJzdW1tYXJ5UnVsZXNcIj57aGFuZGxlUm91bmRzfTwvc3Bhbj57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICByb3VuZHMhXHJcbiAgICAgICAgICAgICAgPC9oMj5cclxuXHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJyZWFkeS1idG5cIj5SZWFkeT8gU3RhcnQgaGVyZSEgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaG9tZTtcclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUmVhY3QiLCJIb21lUGFnZVRpbGVzIiwiaG9tZSIsImhhbmRsZUNhdGVnb3J5Iiwic2V0SGFuZGxlQ2F0ZWdvcnkiLCJoYW5kbGVSb3VuZHMiLCJzZXRIYW5kbGVSb3VuZHMiLCJzaG93TGV0dGVycyIsInNldFNob3dMZXR0ZXJzIiwic3RhdGVWYWx1ZSIsInNldFN0YXRlVmFsdWUiLCJzZWxlY3RDYXRlZ29yeSIsImlkIiwic2VsZWN0Um91bmRzIiwiaGFuZGxlU3RhdGVVcGRhdGUiLCJ2YWx1ZSIsImRpdiIsImNsYXNzTmFtZSIsInNwYW4iLCJoMSIsImgyIiwib25TdGF0ZVVwZGF0ZSIsInAiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});