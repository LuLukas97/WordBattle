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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"./node_modules/@swc/helpers/esm/_ts_generator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\nvar home = function() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), 2), handleCategory = _useState[0], setHandleCategory = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), 2), handleRounds = _useState1[0], setHandleRounds = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), 2), showLetters = _useState2[0], setShowLetters = _useState2[1];\n    var selectCategory = function() {\n        var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_3__._)(function(id) {\n            return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_4__._)(this, function(_state) {\n                setShowLetters(true);\n                setHandleCategory(id);\n                return [\n                    2\n                ];\n            });\n        });\n        return function selectCategory(id) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var selectRounds = function() {\n        var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_3__._)(function(id) {\n            return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_4__._)(this, function(_state) {\n                setHandleRounds(id);\n                return [\n                    2\n                ];\n            });\n        });\n        return function selectRounds(id) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var letters = [\n        \"A\",\n        \"B\",\n        \"C\",\n        \"D\",\n        \"E\"\n    ];\n    var row = document.getElementById(\"row\");\n    row.innerHTML = letters.map(function(letter) {\n        return '<div class=\"box\">'.concat(letter, \"</div>\");\n    }).join(\"\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"wrapper\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"headerContainer\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"headerTitle\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"headerLetter\",\n                                children: \"Letter\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Hobby\\\\letterdash\\\\pages\\\\index.js\",\n                                lineNumber: 28,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"headerDash\",\n                                children: \"Dash\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Hobby\\\\letterdash\\\\pages\\\\index.js\",\n                                lineNumber: 29,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"dashImg\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Hobby\\\\letterdash\\\\pages\\\\index.js\",\n                                lineNumber: 30,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Hobby\\\\letterdash\\\\pages\\\\index.js\",\n                        lineNumber: 27,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Hobby\\\\letterdash\\\\pages\\\\index.js\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"letterDash\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"introText\",\n                            children: \" Like Wordle, but with categoriesss!\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Hobby\\\\letterdash\\\\pages\\\\index.js\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"gameRules\",\n                            children: \" Start by selecting a category: \"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Hobby\\\\letterdash\\\\pages\\\\index.js\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"category-flex\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    \"class\": \"row\",\n                                    id: \"row\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Hobby\\\\letterdash\\\\pages\\\\index.js\",\n                                    lineNumber: 38,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"category-btn\",\n                                    onClick: function() {\n                                        return selectCategory(\"Mix\");\n                                    },\n                                    children: \"Mix\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Hobby\\\\letterdash\\\\pages\\\\index.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"category-btn\",\n                                    onClick: function() {\n                                        return selectCategory(\"Random\");\n                                    },\n                                    children: \"Random\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Hobby\\\\letterdash\\\\pages\\\\index.js\",\n                                    lineNumber: 46,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"category-btn\",\n                                    onClick: function() {\n                                        return selectCategory(\"Food\");\n                                    },\n                                    children: \"Food\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Hobby\\\\letterdash\\\\pages\\\\index.js\",\n                                    lineNumber: 52,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"category-btn\",\n                                    onClick: function() {\n                                        return selectCategory(\"Tools\");\n                                    },\n                                    children: \"Tools\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Hobby\\\\letterdash\\\\pages\\\\index.js\",\n                                    lineNumber: 58,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"category-btn\",\n                                    onClick: function() {\n                                        return selectCategory(\"Games\");\n                                    },\n                                    children: \"Games\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Hobby\\\\letterdash\\\\pages\\\\index.js\",\n                                    lineNumber: 64,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"category-btn\",\n                                    onClick: function() {\n                                        return selectCategory(\"Objects\");\n                                    },\n                                    children: \"Objects\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Hobby\\\\letterdash\\\\pages\\\\index.js\",\n                                    lineNumber: 70,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Hobby\\\\letterdash\\\\pages\\\\index.js\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, _this),\n                        showLetters && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"cssanimation sequence fadeInBottom\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    children: \" Select amount of letter words: \"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Hobby\\\\letterdash\\\\pages\\\\index.js\",\n                                    lineNumber: 79,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"letterAmount-flex\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"letterAmount-btn\",\n                                            onClick: function() {\n                                                return selectRounds(3);\n                                            },\n                                            children: \"3\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Hobby\\\\letterdash\\\\pages\\\\index.js\",\n                                            lineNumber: 81,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"letterAmount-btn\",\n                                            onClick: function() {\n                                                return selectRounds(5);\n                                            },\n                                            children: \"5\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Hobby\\\\letterdash\\\\pages\\\\index.js\",\n                                            lineNumber: 87,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"letterAmount-btn\",\n                                            onClick: function() {\n                                                return selectRounds(7);\n                                            },\n                                            children: \"7\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Hobby\\\\letterdash\\\\pages\\\\index.js\",\n                                            lineNumber: 93,\n                                            columnNumber: 17\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Hobby\\\\letterdash\\\\pages\\\\index.js\",\n                                    lineNumber: 80,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    children: [\n                                        \"Game rules:\",\n                                        \" \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"summaryRules\",\n                                            children: handleCategory\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Hobby\\\\letterdash\\\\pages\\\\index.js\",\n                                            lineNumber: 102,\n                                            columnNumber: 17\n                                        }, _this),\n                                        \" category with \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"summaryRules\",\n                                            children: handleRounds\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Hobby\\\\letterdash\\\\pages\\\\index.js\",\n                                            lineNumber: 103,\n                                            columnNumber: 22\n                                        }, _this),\n                                        \" \",\n                                        \"rounds!\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Hobby\\\\letterdash\\\\pages\\\\index.js\",\n                                    lineNumber: 100,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"ready-btn\",\n                                    children: \"Ready? Start here! \"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Hobby\\\\letterdash\\\\pages\\\\index.js\",\n                                    lineNumber: 107,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Hobby\\\\letterdash\\\\pages\\\\index.js\",\n                            lineNumber: 78,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Hobby\\\\letterdash\\\\pages\\\\index.js\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Hobby\\\\letterdash\\\\pages\\\\index.js\",\n            lineNumber: 25,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Hobby\\\\letterdash\\\\pages\\\\index.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, _this);\n};\n_s(home, \"J3QgfeQizVY9W6x1VH4tN3Fh/vA=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (home);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FBVTs4Q0FBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPNUM7R0EvR01uQjtBQWlITiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIFJlYWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBob21lID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtoYW5kbGVDYXRlZ29yeSwgc2V0SGFuZGxlQ2F0ZWdvcnldID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbaGFuZGxlUm91bmRzLCBzZXRIYW5kbGVSb3VuZHNdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbc2hvd0xldHRlcnMsIHNldFNob3dMZXR0ZXJzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3Qgc2VsZWN0Q2F0ZWdvcnkgPSBhc3luYyAoaWQpID0+IHtcclxuICAgIHNldFNob3dMZXR0ZXJzKHRydWUpO1xyXG4gICAgc2V0SGFuZGxlQ2F0ZWdvcnkoaWQpO1xyXG4gIH07XHJcbiAgY29uc3Qgc2VsZWN0Um91bmRzID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgICBzZXRIYW5kbGVSb3VuZHMoaWQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGxldHRlcnMgPSBbXCJBXCIsIFwiQlwiLCBcIkNcIiwgXCJEXCIsIFwiRVwiXTtcclxuXHJcbiAgY29uc3Qgcm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb3dcIik7XHJcbiAgcm93LmlubmVySFRNTCA9IGxldHRlcnNcclxuICAgIC5tYXAoKGxldHRlcikgPT4gYDxkaXYgY2xhc3M9XCJib3hcIj4ke2xldHRlcn08L2Rpdj5gKVxyXG4gICAgLmpvaW4oXCJcIik7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlckNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJUaXRsZVwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoZWFkZXJMZXR0ZXJcIj5MZXR0ZXI8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhlYWRlckRhc2hcIj5EYXNoPC9zcGFuPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhc2hJbWdcIj48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV0dGVyRGFzaFwiPlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImludHJvVGV4dFwiPiBMaWtlIFdvcmRsZSwgYnV0IHdpdGggY2F0ZWdvcmllc3NzITwvaDE+XHJcblxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImdhbWVSdWxlc1wiPiBTdGFydCBieSBzZWxlY3RpbmcgYSBjYXRlZ29yeTogPC9oMj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0ZWdvcnktZmxleFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCIgaWQ9XCJyb3dcIj48L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXRlZ29yeS1idG5cIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNlbGVjdENhdGVnb3J5KFwiTWl4XCIpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgTWl4XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2F0ZWdvcnktYnRuXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZWxlY3RDYXRlZ29yeShcIlJhbmRvbVwiKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFJhbmRvbVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhdGVnb3J5LWJ0blwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2VsZWN0Q2F0ZWdvcnkoXCJGb29kXCIpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgRm9vZFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhdGVnb3J5LWJ0blwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2VsZWN0Q2F0ZWdvcnkoXCJUb29sc1wiKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFRvb2xzXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2F0ZWdvcnktYnRuXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZWxlY3RDYXRlZ29yeShcIkdhbWVzXCIpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgR2FtZXNcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXRlZ29yeS1idG5cIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNlbGVjdENhdGVnb3J5KFwiT2JqZWN0c1wiKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIE9iamVjdHNcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHtzaG93TGV0dGVycyAmJiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3NzYW5pbWF0aW9uIHNlcXVlbmNlIGZhZGVJbkJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgIDxoMj4gU2VsZWN0IGFtb3VudCBvZiBsZXR0ZXIgd29yZHM6IDwvaDI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXR0ZXJBbW91bnQtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsZXR0ZXJBbW91bnQtYnRuXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2VsZWN0Um91bmRzKDMpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAzXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGV0dGVyQW1vdW50LWJ0blwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNlbGVjdFJvdW5kcyg1KX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgNVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxldHRlckFtb3VudC1idG5cIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZWxlY3RSb3VuZHMoNyl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDdcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxoMj5cclxuICAgICAgICAgICAgICAgIEdhbWUgcnVsZXM6e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3VtbWFyeVJ1bGVzXCI+e2hhbmRsZUNhdGVnb3J5fTwvc3Bhbj4gY2F0ZWdvcnlcclxuICAgICAgICAgICAgICAgIHdpdGggPHNwYW4gY2xhc3NOYW1lPVwic3VtbWFyeVJ1bGVzXCI+e2hhbmRsZVJvdW5kc308L3NwYW4+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgcm91bmRzIVxyXG4gICAgICAgICAgICAgIDwvaDI+XHJcblxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicmVhZHktYnRuXCI+UmVhZHk/IFN0YXJ0IGhlcmUhIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhvbWU7XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlJlYWN0IiwiaG9tZSIsImhhbmRsZUNhdGVnb3J5Iiwic2V0SGFuZGxlQ2F0ZWdvcnkiLCJoYW5kbGVSb3VuZHMiLCJzZXRIYW5kbGVSb3VuZHMiLCJzaG93TGV0dGVycyIsInNldFNob3dMZXR0ZXJzIiwic2VsZWN0Q2F0ZWdvcnkiLCJpZCIsInNlbGVjdFJvdW5kcyIsImxldHRlcnMiLCJyb3ciLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwibWFwIiwibGV0dGVyIiwiam9pbiIsImRpdiIsImNsYXNzTmFtZSIsInNwYW4iLCJoMSIsImgyIiwiY2xhc3MiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});