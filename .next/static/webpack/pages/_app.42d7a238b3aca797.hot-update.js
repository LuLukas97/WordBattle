"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[13].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[13].use[2]!./styles/HomeTiles.css":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[13].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[13].use[2]!./styles/HomeTiles.css ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".category-flex {\\r\\n  border: 1px solid yellow;\\r\\n  grid-template-columns: repeat(\\r\\n    8,\\r\\n    1fr\\r\\n  ); /* Adjust the number of columns as needed */\\r\\n  grid-template-rows: repeat(1); /* Adjust the number of rows as needed */\\r\\n}\\r\\n.category-flex > button {\\r\\n  display: grid;\\r\\n  cursor: pointer;\\r\\n\\r\\n  background-color: #202123;\\r\\n\\r\\n  grid-template-rows: repeat(1); /* Adjust the number of rows as needed */\\r\\n  border: 1px solid white;\\r\\n}\\r\\n\\r\\n/* ------------- Row 3 */\\r\\n.box3 {\\r\\n  width: 50px;\\r\\n  height: 50px;\\r\\n  font-size: 38px;\\r\\n  color: white;\\r\\n  border: 1px solid white;\\r\\n  display: grid;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.box3:focus {\\r\\n  background-color: green;\\r\\n}\\r\\n.row3 {\\r\\n  display: grid;\\r\\n\\r\\n  grid-template-columns: repeat(\\r\\n    3,\\r\\n    1fr\\r\\n  ); /* Adjust the number of columns as needed */\\r\\n  gap: 5px; /* Adjust the gap between boxes */\\r\\n  border: none;\\r\\n}\\r\\n.row3:focus-within .box3 {\\r\\n  animation: flip 0.5s ease forwards;\\r\\n  animation-fill-mode: both;\\r\\n  background-color: #5aac39;\\r\\n}\\r\\n/* ------------- Row 4 */\\r\\n.box4 {\\r\\n  width: 50px;\\r\\n  height: 50px;\\r\\n  font-size: 38px;\\r\\n  color: white;\\r\\n  border: 1px solid white;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n.box4:focus {\\r\\n  background-color: green;\\r\\n}\\r\\n.row4 {\\r\\n  display: grid;\\r\\n\\r\\n  gap: 5px; /* Adjust the gap between boxes */\\r\\n  grid-template-columns: repeat(\\r\\n    4,\\r\\n    1fr\\r\\n  ); /* Adjust the number of columns as needed */\\r\\n  border: none;\\r\\n}\\r\\n.row4:focus-within .box4 {\\r\\n  animation: flip 0.5s ease forwards;\\r\\n  animation-fill-mode: both;\\r\\n  background-color: #5aac39;\\r\\n}\\r\\n/* ------------- Row 5 */\\r\\n.box5 {\\r\\n  width: 50px;\\r\\n  height: 50px;\\r\\n  font-size: 38px;\\r\\n  color: white;\\r\\n  border: 1px solid white;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n.box5:focus {\\r\\n  background-color: green;\\r\\n}\\r\\n.row5 {\\r\\n  display: grid;\\r\\n\\r\\n  gap: 5px; /* Adjust the gap between boxes */\\r\\n  border: none;\\r\\n}\\r\\n.row5:focus-within .box5 {\\r\\n  animation: flip 0.5s ease forwards;\\r\\n  animation-fill-mode: both;\\r\\n  background-color: #5aac39;\\r\\n}\\r\\n/* ------------- Row 6 */\\r\\n.box6 {\\r\\n  width: 50px;\\r\\n  height: 50px;\\r\\n  font-size: 38px;\\r\\n  color: white;\\r\\n  border: 1px solid white;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n.box6:focus {\\r\\n  background-color: green;\\r\\n}\\r\\n.row6 {\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(\\r\\n    6,\\r\\n    1fr\\r\\n  ); /* Adjust the number of columns as needed */\\r\\n  gap: 5px; /* Adjust the gap between boxes */\\r\\n\\r\\n  border: none;\\r\\n}\\r\\n.row6:focus-within .box6 {\\r\\n  animation: flip 0.5s ease forwards;\\r\\n  animation-fill-mode: both;\\r\\n  background-color: #5aac39;\\r\\n}\\r\\n/* ------------- Row 7 */\\r\\n.box7 {\\r\\n  width: 50px;\\r\\n  height: 50px;\\r\\n  font-size: 38px;\\r\\n  color: white;\\r\\n  border: 1px solid white;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n.box7:focus {\\r\\n  background-color: green;\\r\\n}\\r\\n.row7 {\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(\\r\\n    7,\\r\\n    1fr\\r\\n  ); /* Adjust the number of columns as needed */\\r\\n  gap: 5px; /* Adjust the gap between boxes */\\r\\n\\r\\n  border: none;\\r\\n}\\r\\n.row7:focus-within .box7 {\\r\\n  animation: flip 0.5s ease forwards;\\r\\n  animation-fill-mode: both;\\r\\n  background-color: #5aac39;\\r\\n}\\r\\n@keyframes flip {\\r\\n  0% {\\r\\n    transform: scaleY(1);\\r\\n  }\\r\\n  50% {\\r\\n    transform: scaleY(0);\\r\\n  }\\r\\n  100% {\\r\\n    transform: scaleY(1);\\r\\n  }\\r\\n}\\r\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/HomeTiles.css\"],\"names\":[],\"mappings\":\"AAAA;EACE,wBAAwB;EACxB;;;GAGC,EAAE,2CAA2C;EAC9C,6BAA6B,EAAE,wCAAwC;AACzE;AACA;EACE,aAAa;EACb,eAAe;;EAEf,yBAAyB;;EAEzB,6BAA6B,EAAE,wCAAwC;EACvE,uBAAuB;AACzB;;AAEA,wBAAwB;AACxB;EACE,WAAW;EACX,YAAY;EACZ,eAAe;EACf,YAAY;EACZ,uBAAuB;EACvB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;AACzB;AACA;EACE,aAAa;;EAEb;;;GAGC,EAAE,2CAA2C;EAC9C,QAAQ,EAAE,iCAAiC;EAC3C,YAAY;AACd;AACA;EACE,kCAAkC;EAClC,yBAAyB;EACzB,yBAAyB;AAC3B;AACA,wBAAwB;AACxB;EACE,WAAW;EACX,YAAY;EACZ,eAAe;EACf,YAAY;EACZ,uBAAuB;EACvB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,uBAAuB;AACzB;AACA;EACE,aAAa;;EAEb,QAAQ,EAAE,iCAAiC;EAC3C;;;GAGC,EAAE,2CAA2C;EAC9C,YAAY;AACd;AACA;EACE,kCAAkC;EAClC,yBAAyB;EACzB,yBAAyB;AAC3B;AACA,wBAAwB;AACxB;EACE,WAAW;EACX,YAAY;EACZ,eAAe;EACf,YAAY;EACZ,uBAAuB;EACvB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,uBAAuB;AACzB;AACA;EACE,aAAa;;EAEb,QAAQ,EAAE,iCAAiC;EAC3C,YAAY;AACd;AACA;EACE,kCAAkC;EAClC,yBAAyB;EACzB,yBAAyB;AAC3B;AACA,wBAAwB;AACxB;EACE,WAAW;EACX,YAAY;EACZ,eAAe;EACf,YAAY;EACZ,uBAAuB;EACvB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,uBAAuB;AACzB;AACA;EACE,aAAa;EACb;;;GAGC,EAAE,2CAA2C;EAC9C,QAAQ,EAAE,iCAAiC;;EAE3C,YAAY;AACd;AACA;EACE,kCAAkC;EAClC,yBAAyB;EACzB,yBAAyB;AAC3B;AACA,wBAAwB;AACxB;EACE,WAAW;EACX,YAAY;EACZ,eAAe;EACf,YAAY;EACZ,uBAAuB;EACvB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,uBAAuB;AACzB;AACA;EACE,aAAa;EACb;;;GAGC,EAAE,2CAA2C;EAC9C,QAAQ,EAAE,iCAAiC;;EAE3C,YAAY;AACd;AACA;EACE,kCAAkC;EAClC,yBAAyB;EACzB,yBAAyB;AAC3B;AACA;EACE;IACE,oBAAoB;EACtB;EACA;IACE,oBAAoB;EACtB;EACA;IACE,oBAAoB;EACtB;AACF\",\"sourcesContent\":[\".category-flex {\\r\\n  border: 1px solid yellow;\\r\\n  grid-template-columns: repeat(\\r\\n    8,\\r\\n    1fr\\r\\n  ); /* Adjust the number of columns as needed */\\r\\n  grid-template-rows: repeat(1); /* Adjust the number of rows as needed */\\r\\n}\\r\\n.category-flex > button {\\r\\n  display: grid;\\r\\n  cursor: pointer;\\r\\n\\r\\n  background-color: #202123;\\r\\n\\r\\n  grid-template-rows: repeat(1); /* Adjust the number of rows as needed */\\r\\n  border: 1px solid white;\\r\\n}\\r\\n\\r\\n/* ------------- Row 3 */\\r\\n.box3 {\\r\\n  width: 50px;\\r\\n  height: 50px;\\r\\n  font-size: 38px;\\r\\n  color: white;\\r\\n  border: 1px solid white;\\r\\n  display: grid;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.box3:focus {\\r\\n  background-color: green;\\r\\n}\\r\\n.row3 {\\r\\n  display: grid;\\r\\n\\r\\n  grid-template-columns: repeat(\\r\\n    3,\\r\\n    1fr\\r\\n  ); /* Adjust the number of columns as needed */\\r\\n  gap: 5px; /* Adjust the gap between boxes */\\r\\n  border: none;\\r\\n}\\r\\n.row3:focus-within .box3 {\\r\\n  animation: flip 0.5s ease forwards;\\r\\n  animation-fill-mode: both;\\r\\n  background-color: #5aac39;\\r\\n}\\r\\n/* ------------- Row 4 */\\r\\n.box4 {\\r\\n  width: 50px;\\r\\n  height: 50px;\\r\\n  font-size: 38px;\\r\\n  color: white;\\r\\n  border: 1px solid white;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n.box4:focus {\\r\\n  background-color: green;\\r\\n}\\r\\n.row4 {\\r\\n  display: grid;\\r\\n\\r\\n  gap: 5px; /* Adjust the gap between boxes */\\r\\n  grid-template-columns: repeat(\\r\\n    4,\\r\\n    1fr\\r\\n  ); /* Adjust the number of columns as needed */\\r\\n  border: none;\\r\\n}\\r\\n.row4:focus-within .box4 {\\r\\n  animation: flip 0.5s ease forwards;\\r\\n  animation-fill-mode: both;\\r\\n  background-color: #5aac39;\\r\\n}\\r\\n/* ------------- Row 5 */\\r\\n.box5 {\\r\\n  width: 50px;\\r\\n  height: 50px;\\r\\n  font-size: 38px;\\r\\n  color: white;\\r\\n  border: 1px solid white;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n.box5:focus {\\r\\n  background-color: green;\\r\\n}\\r\\n.row5 {\\r\\n  display: grid;\\r\\n\\r\\n  gap: 5px; /* Adjust the gap between boxes */\\r\\n  border: none;\\r\\n}\\r\\n.row5:focus-within .box5 {\\r\\n  animation: flip 0.5s ease forwards;\\r\\n  animation-fill-mode: both;\\r\\n  background-color: #5aac39;\\r\\n}\\r\\n/* ------------- Row 6 */\\r\\n.box6 {\\r\\n  width: 50px;\\r\\n  height: 50px;\\r\\n  font-size: 38px;\\r\\n  color: white;\\r\\n  border: 1px solid white;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n.box6:focus {\\r\\n  background-color: green;\\r\\n}\\r\\n.row6 {\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(\\r\\n    6,\\r\\n    1fr\\r\\n  ); /* Adjust the number of columns as needed */\\r\\n  gap: 5px; /* Adjust the gap between boxes */\\r\\n\\r\\n  border: none;\\r\\n}\\r\\n.row6:focus-within .box6 {\\r\\n  animation: flip 0.5s ease forwards;\\r\\n  animation-fill-mode: both;\\r\\n  background-color: #5aac39;\\r\\n}\\r\\n/* ------------- Row 7 */\\r\\n.box7 {\\r\\n  width: 50px;\\r\\n  height: 50px;\\r\\n  font-size: 38px;\\r\\n  color: white;\\r\\n  border: 1px solid white;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n.box7:focus {\\r\\n  background-color: green;\\r\\n}\\r\\n.row7 {\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(\\r\\n    7,\\r\\n    1fr\\r\\n  ); /* Adjust the number of columns as needed */\\r\\n  gap: 5px; /* Adjust the gap between boxes */\\r\\n\\r\\n  border: none;\\r\\n}\\r\\n.row7:focus-within .box7 {\\r\\n  animation: flip 0.5s ease forwards;\\r\\n  animation-fill-mode: both;\\r\\n  background-color: #5aac39;\\r\\n}\\r\\n@keyframes flip {\\r\\n  0% {\\r\\n    transform: scaleY(1);\\r\\n  }\\r\\n  50% {\\r\\n    transform: scaleY(0);\\r\\n  }\\r\\n  100% {\\r\\n    transform: scaleY(1);\\r\\n  }\\r\\n}\\r\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS5vbmVPZlsxM10udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLm9uZU9mWzEzXS51c2VbMl0hLi9zdHlsZXMvSG9tZVRpbGVzLmNzcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUN3SDtBQUN4SCw4QkFBOEIsa0hBQTJCO0FBQ3pEO0FBQ0EsMERBQTBELCtCQUErQixrRUFBa0UsaUZBQWlGLDhDQUE4Qyw2QkFBNkIsb0JBQW9CLHNCQUFzQixvQ0FBb0MseUNBQXlDLHVFQUF1RSxLQUFLLDRDQUE0QyxrQkFBa0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsOEJBQThCLG9CQUFvQiw4QkFBOEIsMEJBQTBCLEtBQUsscUJBQXFCLDhCQUE4QixLQUFLLFdBQVcsb0JBQW9CLHNFQUFzRSw0REFBNEQscURBQXFELEtBQUssOEJBQThCLHlDQUF5QyxnQ0FBZ0MsZ0NBQWdDLEtBQUssd0NBQXdDLGtCQUFrQixtQkFBbUIsc0JBQXNCLG1CQUFtQiw4QkFBOEIsb0JBQW9CLDhCQUE4QiwwQkFBMEIsS0FBSyxpQkFBaUIsOEJBQThCLEtBQUssV0FBVyxvQkFBb0Isb0JBQW9CLG9HQUFvRywrREFBK0QsS0FBSyw4QkFBOEIseUNBQXlDLGdDQUFnQyxnQ0FBZ0MsS0FBSyx3Q0FBd0Msa0JBQWtCLG1CQUFtQixzQkFBc0IsbUJBQW1CLDhCQUE4QixvQkFBb0IsOEJBQThCLDBCQUEwQixLQUFLLGlCQUFpQiw4QkFBOEIsS0FBSyxXQUFXLG9CQUFvQixvQkFBb0IscURBQXFELEtBQUssOEJBQThCLHlDQUF5QyxnQ0FBZ0MsZ0NBQWdDLEtBQUssd0NBQXdDLGtCQUFrQixtQkFBbUIsc0JB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NEQseURBQXlELEtBQUssOEJBQThCLHlDQUF5QyxnQ0FBZ0MsZ0NBQWdDLEtBQUssd0NBQXdDLGtCQUFrQixtQkFBbUIsc0JBQXNCLG1CQUFtQiw4QkFBOEIsb0JBQW9CLDhCQUE4QiwwQkFBMEIsS0FBSyxpQkFBaUIsOEJBQThCLEtBQUssV0FBVyxvQkFBb0Isa0VBQWtFLDREQUE0RCx5REFBeUQsS0FBSyw4QkFBOEIseUNBQXlDLGdDQUFnQyxnQ0FBZ0MsS0FBSyxxQkFBcUIsVUFBVSw2QkFBNkIsT0FBTyxXQUFXLDZCQUE2QixPQUFPLFlBQVksNkJBQTZCLE9BQU8sS0FBSyx1QkFBdUI7QUFDejhSO0FBQ0EsK0RBQWUsdUJBQXVCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL0hvbWVUaWxlcy5jc3M/OWQ2MyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmNhdGVnb3J5LWZsZXgge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgeWVsbG93O1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoXFxyXFxuICAgIDgsXFxyXFxuICAgIDFmclxcclxcbiAgKTsgLyogQWRqdXN0IHRoZSBudW1iZXIgb2YgY29sdW1ucyBhcyBuZWVkZWQgKi9cXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEpOyAvKiBBZGp1c3QgdGhlIG51bWJlciBvZiByb3dzIGFzIG5lZWRlZCAqL1xcclxcbn1cXHJcXG4uY2F0ZWdvcnktZmxleCA+IGJ1dHRvbiB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcblxcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjEyMztcXHJcXG5cXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEpOyAvKiBBZGp1c3QgdGhlIG51bWJlciBvZiByb3dzIGFzIG5lZWRlZCAqL1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi8qIC0tLS0tLS0tLS0tLS0gUm93IDMgKi9cXHJcXG4uYm94MyB7XFxyXFxuICB3aWR0aDogNTBweDtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMzhweDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJveDM6Zm9jdXMge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxyXFxufVxcclxcbi5yb3czIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuXFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChcXHJcXG4gICAgMyxcXHJcXG4gICAgMWZyXFxyXFxuICApOyAvKiBBZGp1c3QgdGhlIG51bWJlciBvZiBjb2x1bW5zIGFzIG5lZWRlZCAqL1xcclxcbiAgZ2FwOiA1cHg7IC8qIEFkanVzdCB0aGUgZ2FwIGJldHdlZW4gYm94ZXMgKi9cXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuLnJvdzM6Zm9jdXMtd2l0aGluIC5ib3gzIHtcXHJcXG4gIGFuaW1hdGlvbjogZmxpcCAwLjVzIGVhc2UgZm9yd2FyZHM7XFxyXFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVhYWMzOTtcXHJcXG59XFxyXFxuLyogLS0tLS0tLS0tLS0tLSBSb3cgNCAqL1xcclxcbi5ib3g0IHtcXHJcXG4gIHdpZHRoOiA1MHB4O1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgZm9udC1zaXplOiAzOHB4O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4uYm94NDpmb2N1cyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXHJcXG59XFxyXFxuLnJvdzQge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG5cXHJcXG4gIGdhcDogNXB4OyAvKiBBZGp1c3QgdGhlIGdhcCBiZXR3ZWVuIGJveGVzICovXFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChcXHJcXG4gICAgNCxcXHJcXG4gICAgMWZyXFxyXFxuICApOyAvKiBBZGp1c3QgdGhlIG51bWJlciBvZiBjb2x1bW5zIGFzIG5lZWRlZCAqL1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG4ucm93NDpmb2N1cy13aXRoaW4gLmJveDQge1xcclxcbiAgYW5pbWF0aW9uOiBmbGlwIDAuNXMgZWFzZSBmb3J3YXJkcztcXHJcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWFhYzM5O1xcclxcbn1cXHJcXG4vKiAtLS0tLS0tLS0tLS0tIFJvdyA1ICovXFxyXFxuLmJveDUge1xcclxcbiAgd2lkdGg6IDUwcHg7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICBmb250LXNpemU6IDM4cHg7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5ib3g1OmZvY3VzIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcclxcbn1cXHJcXG4ucm93NSB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcblxcclxcbiAgZ2FwOiA1cHg7IC8qIEFkanVzdCB0aGUgZ2FwIGJldHdlZW4gYm94ZXMgKi9cXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuLnJvdzU6Zm9jdXMtd2l0aGluIC5ib3g1IHtcXHJcXG4gIGFuaW1hdGlvbjogZmxpcCAwLjVzIGVhc2UgZm9yd2FyZHM7XFxyXFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVhYWMzOTtcXHJcXG59XFxyXFxuLyogLS0tLS0tLS0tLS0tLSBSb3cgNiAqL1xcclxcbi5ib3g2IHtcXHJcXG4gIHdpZHRoOiA1MHB4O1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgZm9udC1zaXplOiAzOHB4O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4uYm94Njpmb2N1cyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXHJcXG59XFxyXFxuLnJvdzYge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KFxcclxcbiAgICA2LFxcclxcbiAgICAxZnJcXHJcXG4gICk7IC8qIEFkanVzdCB0aGUgbnVtYmVyIG9mIGNvbHVtbnMgYXMgbmVlZGVkICovXFxyXFxuICBnYXA6IDVweDsgLyogQWRqdXN0IHRoZSBnYXAgYmV0d2VlbiBib3hlcyAqL1xcclxcblxcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG4ucm93Njpmb2N1cy13aXRoaW4gLmJveDYge1xcclxcbiAgYW5pbWF0aW9uOiBmbGlwIDAuNXMgZWFzZSBmb3J3YXJkcztcXHJcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWFhYzM5O1xcclxcbn1cXHJcXG4vKiAtLS0tLS0tLS0tLS0tIFJvdyA3ICovXFxyXFxuLmJveDcge1xcclxcbiAgd2lkdGg6IDUwcHg7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICBmb250LXNpemU6IDM4cHg7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5ib3g3OmZvY3VzIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcclxcbn1cXHJcXG4ucm93NyB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoXFxyXFxuICAgIDcsXFxyXFxuICAgIDFmclxcclxcbiAgKTsgLyogQWRqdXN0IHRoZSBudW1iZXIgb2YgY29sdW1ucyBhcyBuZWVkZWQgKi9cXHJcXG4gIGdhcDogNXB4OyAvKiBBZGp1c3QgdGhlIGdhcCBiZXR3ZWVuIGJveGVzICovXFxyXFxuXFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcbi5yb3c3OmZvY3VzLXdpdGhpbiAuYm94NyB7XFxyXFxuICBhbmltYXRpb246IGZsaXAgMC41cyBlYXNlIGZvcndhcmRzO1xcclxcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1YWFjMzk7XFxyXFxufVxcclxcbkBrZXlmcmFtZXMgZmxpcCB7XFxyXFxuICAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xcclxcbiAgfVxcclxcbiAgNTAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMvSG9tZVRpbGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHdCQUF3QjtFQUN4Qjs7O0dBR0MsRUFBRSwyQ0FBMkM7RUFDOUMsNkJBQTZCLEVBQUUsd0NBQXdDO0FBQ3pFO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsZUFBZTs7RUFFZix5QkFBeUI7O0VBRXpCLDZCQUE2QixFQUFFLHdDQUF3QztFQUN2RSx1QkFBdUI7QUFDekI7O0FBRUEsd0JBQXdCO0FBQ3hCO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsYUFBYTs7RUFFYjs7O0dBR0MsRUFBRSwyQ0FBMkM7RUFDOUMsUUFBUSxFQUFFLGlDQUFpQztFQUMzQyxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGtDQUFrQztFQUNsQyx5QkFBeUI7RUFDekIseUJBQXlCO0FBQzNCO0FBQ0Esd0JBQXdCO0FBQ3hCO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxhQUFhOztFQUViLFFBQVEsRUFBRSxpQ0FBaUM7RUFDM0M7OztHQUdDLEVBQUUsMkNBQTJDO0VBQzlDLFlBQVk7QUFDZDtBQUNBO0VBQ0Usa0NBQWtDO0VBQ2xDLHlCQUF5QjtFQUN6Qix5QkFBeUI7QUFDM0I7QUFDQSx3QkFBd0I7QUFDeEI7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGFBQWE7O0VBRWIsUUFBUSxFQUFFLGlDQUFpQztFQUMzQyxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGtDQUFrQztFQUNsQyx5QkFBeUI7RUFDekIseUJBQXlCO0FBQzNCO0FBQ0Esd0JBQXdCO0FBQ3hCO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxhQUFhO0VBQ2I7OztHQUdDLEVBQUUsMkNBQTJDO0VBQzlDLFFBQVEsRUFBRSxpQ0FBaUM7O0VBRTNDLFlBQVk7QUFDZDtBQUNBO0VBQ0Usa0NBQWtDO0VBQ2xDLHlCQUF5QjtFQUN6Qix5QkFBeUI7QUFDM0I7QUFDQSx3QkFBd0I7QUFDeEI7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGFBQWE7RUFDYjs7O0dBR0MsRUFBRSwyQ0FBMkM7RUFDOUMsUUFBUSxFQUFFLGlDQUFpQzs7RUFFM0MsWUFBWTtBQUNkO0FBQ0E7RUFDRSxrQ0FBa0M7RUFDbEMseUJBQXlCO0VBQ3pCLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0U7SUFDRSxvQkFBb0I7RUFDdEI7RUFDQTtJQUNFLG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0Usb0JBQW9CO0VBQ3RCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNhdGVnb3J5LWZsZXgge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgeWVsbG93O1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoXFxyXFxuICAgIDgsXFxyXFxuICAgIDFmclxcclxcbiAgKTsgLyogQWRqdXN0IHRoZSBudW1iZXIgb2YgY29sdW1ucyBhcyBuZWVkZWQgKi9cXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEpOyAvKiBBZGp1c3QgdGhlIG51bWJlciBvZiByb3dzIGFzIG5lZWRlZCAqL1xcclxcbn1cXHJcXG4uY2F0ZWdvcnktZmxleCA+IGJ1dHRvbiB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcblxcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjEyMztcXHJcXG5cXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEpOyAvKiBBZGp1c3QgdGhlIG51bWJlciBvZiByb3dzIGFzIG5lZWRlZCAqL1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi8qIC0tLS0tLS0tLS0tLS0gUm93IDMgKi9cXHJcXG4uYm94MyB7XFxyXFxuICB3aWR0aDogNTBweDtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMzhweDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJveDM6Zm9jdXMge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxyXFxufVxcclxcbi5yb3czIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuXFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChcXHJcXG4gICAgMyxcXHJcXG4gICAgMWZyXFxyXFxuICApOyAvKiBBZGp1c3QgdGhlIG51bWJlciBvZiBjb2x1bW5zIGFzIG5lZWRlZCAqL1xcclxcbiAgZ2FwOiA1cHg7IC8qIEFkanVzdCB0aGUgZ2FwIGJldHdlZW4gYm94ZXMgKi9cXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuLnJvdzM6Zm9jdXMtd2l0aGluIC5ib3gzIHtcXHJcXG4gIGFuaW1hdGlvbjogZmxpcCAwLjVzIGVhc2UgZm9yd2FyZHM7XFxyXFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVhYWMzOTtcXHJcXG59XFxyXFxuLyogLS0tLS0tLS0tLS0tLSBSb3cgNCAqL1xcclxcbi5ib3g0IHtcXHJcXG4gIHdpZHRoOiA1MHB4O1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgZm9udC1zaXplOiAzOHB4O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4uYm94NDpmb2N1cyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXHJcXG59XFxyXFxuLnJvdzQge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG5cXHJcXG4gIGdhcDogNXB4OyAvKiBBZGp1c3QgdGhlIGdhcCBiZXR3ZWVuIGJveGVzICovXFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChcXHJcXG4gICAgNCxcXHJcXG4gICAgMWZyXFxyXFxuICApOyAvKiBBZGp1c3QgdGhlIG51bWJlciBvZiBjb2x1bW5zIGFzIG5lZWRlZCAqL1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG4ucm93NDpmb2N1cy13aXRoaW4gLmJveDQge1xcclxcbiAgYW5pbWF0aW9uOiBmbGlwIDAuNXMgZWFzZSBmb3J3YXJkcztcXHJcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWFhYzM5O1xcclxcbn1cXHJcXG4vKiAtLS0tLS0tLS0tLS0tIFJvdyA1ICovXFxyXFxuLmJveDUge1xcclxcbiAgd2lkdGg6IDUwcHg7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICBmb250LXNpemU6IDM4cHg7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5ib3g1OmZvY3VzIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcclxcbn1cXHJcXG4ucm93NSB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcblxcclxcbiAgZ2FwOiA1cHg7IC8qIEFkanVzdCB0aGUgZ2FwIGJldHdlZW4gYm94ZXMgKi9cXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuLnJvdzU6Zm9jdXMtd2l0aGluIC5ib3g1IHtcXHJcXG4gIGFuaW1hdGlvbjogZmxpcCAwLjVzIGVhc2UgZm9yd2FyZHM7XFxyXFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVhYWMzOTtcXHJcXG59XFxyXFxuLyogLS0tLS0tLS0tLS0tLSBSb3cgNiAqL1xcclxcbi5ib3g2IHtcXHJcXG4gIHdpZHRoOiA1MHB4O1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgZm9udC1zaXplOiAzOHB4O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4uYm94Njpmb2N1cyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXHJcXG59XFxyXFxuLnJvdzYge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KFxcclxcbiAgICA2LFxcclxcbiAgICAxZnJcXHJcXG4gICk7IC8qIEFkanVzdCB0aGUgbnVtYmVyIG9mIGNvbHVtbnMgYXMgbmVlZGVkICovXFxyXFxuICBnYXA6IDVweDsgLyogQWRqdXN0IHRoZSBnYXAgYmV0d2VlbiBib3hlcyAqL1xcclxcblxcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG4ucm93Njpmb2N1cy13aXRoaW4gLmJveDYge1xcclxcbiAgYW5pbWF0aW9uOiBmbGlwIDAuNXMgZWFzZSBmb3J3YXJkcztcXHJcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWFhYzM5O1xcclxcbn1cXHJcXG4vKiAtLS0tLS0tLS0tLS0tIFJvdyA3ICovXFxyXFxuLmJveDcge1xcclxcbiAgd2lkdGg6IDUwcHg7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICBmb250LXNpemU6IDM4cHg7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5ib3g3OmZvY3VzIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcclxcbn1cXHJcXG4ucm93NyB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoXFxyXFxuICAgIDcsXFxyXFxuICAgIDFmclxcclxcbiAgKTsgLyogQWRqdXN0IHRoZSBudW1iZXIgb2YgY29sdW1ucyBhcyBuZWVkZWQgKi9cXHJcXG4gIGdhcDogNXB4OyAvKiBBZGp1c3QgdGhlIGdhcCBiZXR3ZWVuIGJveGVzICovXFxyXFxuXFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcbi5yb3c3OmZvY3VzLXdpdGhpbiAuYm94NyB7XFxyXFxuICBhbmltYXRpb246IGZsaXAgMC41cyBlYXNlIGZvcndhcmRzO1xcclxcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1YWFjMzk7XFxyXFxufVxcclxcbkBrZXlmcmFtZXMgZmxpcCB7XFxyXFxuICAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xcclxcbiAgfVxcclxcbiAgNTAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[13].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[13].use[2]!./styles/HomeTiles.css\n"));

/***/ })

});