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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".category-flex {\\r\\n  border: 1px solid yellow;\\r\\n  grid-template-columns: repeat(\\r\\n    8,\\r\\n    1fr\\r\\n  ); /* Adjust the number of columns as needed */\\r\\n  grid-template-rows: repeat(1); /* Adjust the number of rows as needed */\\r\\n}\\r\\n.category-flex > button {\\r\\n  display: grid;\\r\\n  cursor: pointer;\\r\\n  grid-template-columns: repeat(\\r\\n    8,\\r\\n    1fr\\r\\n  ); /* Adjust the number of columns as needed */\\r\\n  background-color: #202123;\\r\\n\\r\\n  grid-template-rows: repeat(1); /* Adjust the number of rows as needed */\\r\\n  border: 1px solid white;\\r\\n}\\r\\n\\r\\n/* ------------- Row 3 */\\r\\n.box3 {\\r\\n  width: 100px;\\r\\n  height: 50px;\\r\\n  font-size: 38px;\\r\\n  color: white;\\r\\n  border: 1px solid white;\\r\\n  background-color: #202123;\\r\\n  display: grid;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.box3:focus {\\r\\n  background-color: green;\\r\\n}\\r\\n.row3 {\\r\\n  display: grid;\\r\\n\\r\\n  gap: 5px; /* Adjust the gap between boxes */\\r\\n\\r\\n  background-color: #202123;\\r\\n  border: none;\\r\\n}\\r\\n.row3:focus-within .box3 {\\r\\n  animation: flip 0.5s ease forwards;\\r\\n  animation-fill-mode: both;\\r\\n  background-color: #5aac39;\\r\\n}\\r\\n/* ------------- Row 4 */\\r\\n.box4 {\\r\\n  width: 50px;\\r\\n  height: 50px;\\r\\n  font-size: 38px;\\r\\n  color: white;\\r\\n  border: 1px solid white;\\r\\n  background-color: #202123;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n.box4:focus {\\r\\n  background-color: green;\\r\\n}\\r\\n.row4 {\\r\\n  display: grid;\\r\\n\\r\\n  gap: 5px; /* Adjust the gap between boxes */\\r\\n\\r\\n  border: none;\\r\\n}\\r\\n.row4:focus-within .box4 {\\r\\n  animation: flip 0.5s ease forwards;\\r\\n  animation-fill-mode: both;\\r\\n  background-color: #5aac39;\\r\\n}\\r\\n/* ------------- Row 5 */\\r\\n.box5 {\\r\\n  width: 50px;\\r\\n  height: 50px;\\r\\n  font-size: 38px;\\r\\n  color: white;\\r\\n  border: 1px solid white;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n.box5:focus {\\r\\n  background-color: green;\\r\\n}\\r\\n.row5 {\\r\\n  display: grid;\\r\\n\\r\\n  gap: 5px; /* Adjust the gap between boxes */\\r\\n  border: none;\\r\\n}\\r\\n.row5:focus-within .box5 {\\r\\n  animation: flip 0.5s ease forwards;\\r\\n  animation-fill-mode: both;\\r\\n  background-color: #5aac39;\\r\\n}\\r\\n/* ------------- Row 6 */\\r\\n.box6 {\\r\\n  width: 50px;\\r\\n  height: 50px;\\r\\n  font-size: 38px;\\r\\n  color: white;\\r\\n  border: 1px solid white;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n.box6:focus {\\r\\n  background-color: green;\\r\\n}\\r\\n.row6 {\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(\\r\\n    6,\\r\\n    1fr\\r\\n  ); /* Adjust the number of columns as needed */\\r\\n  gap: 5px; /* Adjust the gap between boxes */\\r\\n\\r\\n  border: none;\\r\\n}\\r\\n.row6:focus-within .box6 {\\r\\n  animation: flip 0.5s ease forwards;\\r\\n  animation-fill-mode: both;\\r\\n  background-color: #5aac39;\\r\\n}\\r\\n/* ------------- Row 7 */\\r\\n.box7 {\\r\\n  width: 50px;\\r\\n  height: 50px;\\r\\n  font-size: 38px;\\r\\n  color: white;\\r\\n  border: 1px solid white;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n.box7:focus {\\r\\n  background-color: green;\\r\\n}\\r\\n.row7 {\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(\\r\\n    7,\\r\\n    1fr\\r\\n  ); /* Adjust the number of columns as needed */\\r\\n  gap: 5px; /* Adjust the gap between boxes */\\r\\n\\r\\n  border: none;\\r\\n}\\r\\n.row7:focus-within .box7 {\\r\\n  animation: flip 0.5s ease forwards;\\r\\n  animation-fill-mode: both;\\r\\n  background-color: #5aac39;\\r\\n}\\r\\n@keyframes flip {\\r\\n  0% {\\r\\n    transform: scaleY(1);\\r\\n  }\\r\\n  50% {\\r\\n    transform: scaleY(0);\\r\\n  }\\r\\n  100% {\\r\\n    transform: scaleY(1);\\r\\n  }\\r\\n}\\r\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/HomeTiles.css\"],\"names\":[],\"mappings\":\"AAAA;EACE,wBAAwB;EACxB;;;GAGC,EAAE,2CAA2C;EAC9C,6BAA6B,EAAE,wCAAwC;AACzE;AACA;EACE,aAAa;EACb,eAAe;EACf;;;GAGC,EAAE,2CAA2C;EAC9C,yBAAyB;;EAEzB,6BAA6B,EAAE,wCAAwC;EACvE,uBAAuB;AACzB;;AAEA,wBAAwB;AACxB;EACE,YAAY;EACZ,YAAY;EACZ,eAAe;EACf,YAAY;EACZ,uBAAuB;EACvB,yBAAyB;EACzB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;AACzB;AACA;EACE,aAAa;;EAEb,QAAQ,EAAE,iCAAiC;;EAE3C,yBAAyB;EACzB,YAAY;AACd;AACA;EACE,kCAAkC;EAClC,yBAAyB;EACzB,yBAAyB;AAC3B;AACA,wBAAwB;AACxB;EACE,WAAW;EACX,YAAY;EACZ,eAAe;EACf,YAAY;EACZ,uBAAuB;EACvB,yBAAyB;EACzB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,uBAAuB;AACzB;AACA;EACE,aAAa;;EAEb,QAAQ,EAAE,iCAAiC;;EAE3C,YAAY;AACd;AACA;EACE,kCAAkC;EAClC,yBAAyB;EACzB,yBAAyB;AAC3B;AACA,wBAAwB;AACxB;EACE,WAAW;EACX,YAAY;EACZ,eAAe;EACf,YAAY;EACZ,uBAAuB;EACvB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,uBAAuB;AACzB;AACA;EACE,aAAa;;EAEb,QAAQ,EAAE,iCAAiC;EAC3C,YAAY;AACd;AACA;EACE,kCAAkC;EAClC,yBAAyB;EACzB,yBAAyB;AAC3B;AACA,wBAAwB;AACxB;EACE,WAAW;EACX,YAAY;EACZ,eAAe;EACf,YAAY;EACZ,uBAAuB;EACvB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,uBAAuB;AACzB;AACA;EACE,aAAa;EACb;;;GAGC,EAAE,2CAA2C;EAC9C,QAAQ,EAAE,iCAAiC;;EAE3C,YAAY;AACd;AACA;EACE,kCAAkC;EAClC,yBAAyB;EACzB,yBAAyB;AAC3B;AACA,wBAAwB;AACxB;EACE,WAAW;EACX,YAAY;EACZ,eAAe;EACf,YAAY;EACZ,uBAAuB;EACvB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,uBAAuB;AACzB;AACA;EACE,aAAa;EACb;;;GAGC,EAAE,2CAA2C;EAC9C,QAAQ,EAAE,iCAAiC;;EAE3C,YAAY;AACd;AACA;EACE,kCAAkC;EAClC,yBAAyB;EACzB,yBAAyB;AAC3B;AACA;EACE;IACE,oBAAoB;EACtB;EACA;IACE,oBAAoB;EACtB;EACA;IACE,oBAAoB;EACtB;AACF\",\"sourcesContent\":[\".category-flex {\\r\\n  border: 1px solid yellow;\\r\\n  grid-template-columns: repeat(\\r\\n    8,\\r\\n    1fr\\r\\n  ); /* Adjust the number of columns as needed */\\r\\n  grid-template-rows: repeat(1); /* Adjust the number of rows as needed */\\r\\n}\\r\\n.category-flex > button {\\r\\n  display: grid;\\r\\n  cursor: pointer;\\r\\n  grid-template-columns: repeat(\\r\\n    8,\\r\\n    1fr\\r\\n  ); /* Adjust the number of columns as needed */\\r\\n  background-color: #202123;\\r\\n\\r\\n  grid-template-rows: repeat(1); /* Adjust the number of rows as needed */\\r\\n  border: 1px solid white;\\r\\n}\\r\\n\\r\\n/* ------------- Row 3 */\\r\\n.box3 {\\r\\n  width: 100px;\\r\\n  height: 50px;\\r\\n  font-size: 38px;\\r\\n  color: white;\\r\\n  border: 1px solid white;\\r\\n  background-color: #202123;\\r\\n  display: grid;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.box3:focus {\\r\\n  background-color: green;\\r\\n}\\r\\n.row3 {\\r\\n  display: grid;\\r\\n\\r\\n  gap: 5px; /* Adjust the gap between boxes */\\r\\n\\r\\n  background-color: #202123;\\r\\n  border: none;\\r\\n}\\r\\n.row3:focus-within .box3 {\\r\\n  animation: flip 0.5s ease forwards;\\r\\n  animation-fill-mode: both;\\r\\n  background-color: #5aac39;\\r\\n}\\r\\n/* ------------- Row 4 */\\r\\n.box4 {\\r\\n  width: 50px;\\r\\n  height: 50px;\\r\\n  font-size: 38px;\\r\\n  color: white;\\r\\n  border: 1px solid white;\\r\\n  background-color: #202123;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n.box4:focus {\\r\\n  background-color: green;\\r\\n}\\r\\n.row4 {\\r\\n  display: grid;\\r\\n\\r\\n  gap: 5px; /* Adjust the gap between boxes */\\r\\n\\r\\n  border: none;\\r\\n}\\r\\n.row4:focus-within .box4 {\\r\\n  animation: flip 0.5s ease forwards;\\r\\n  animation-fill-mode: both;\\r\\n  background-color: #5aac39;\\r\\n}\\r\\n/* ------------- Row 5 */\\r\\n.box5 {\\r\\n  width: 50px;\\r\\n  height: 50px;\\r\\n  font-size: 38px;\\r\\n  color: white;\\r\\n  border: 1px solid white;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n.box5:focus {\\r\\n  background-color: green;\\r\\n}\\r\\n.row5 {\\r\\n  display: grid;\\r\\n\\r\\n  gap: 5px; /* Adjust the gap between boxes */\\r\\n  border: none;\\r\\n}\\r\\n.row5:focus-within .box5 {\\r\\n  animation: flip 0.5s ease forwards;\\r\\n  animation-fill-mode: both;\\r\\n  background-color: #5aac39;\\r\\n}\\r\\n/* ------------- Row 6 */\\r\\n.box6 {\\r\\n  width: 50px;\\r\\n  height: 50px;\\r\\n  font-size: 38px;\\r\\n  color: white;\\r\\n  border: 1px solid white;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n.box6:focus {\\r\\n  background-color: green;\\r\\n}\\r\\n.row6 {\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(\\r\\n    6,\\r\\n    1fr\\r\\n  ); /* Adjust the number of columns as needed */\\r\\n  gap: 5px; /* Adjust the gap between boxes */\\r\\n\\r\\n  border: none;\\r\\n}\\r\\n.row6:focus-within .box6 {\\r\\n  animation: flip 0.5s ease forwards;\\r\\n  animation-fill-mode: both;\\r\\n  background-color: #5aac39;\\r\\n}\\r\\n/* ------------- Row 7 */\\r\\n.box7 {\\r\\n  width: 50px;\\r\\n  height: 50px;\\r\\n  font-size: 38px;\\r\\n  color: white;\\r\\n  border: 1px solid white;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n.box7:focus {\\r\\n  background-color: green;\\r\\n}\\r\\n.row7 {\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(\\r\\n    7,\\r\\n    1fr\\r\\n  ); /* Adjust the number of columns as needed */\\r\\n  gap: 5px; /* Adjust the gap between boxes */\\r\\n\\r\\n  border: none;\\r\\n}\\r\\n.row7:focus-within .box7 {\\r\\n  animation: flip 0.5s ease forwards;\\r\\n  animation-fill-mode: both;\\r\\n  background-color: #5aac39;\\r\\n}\\r\\n@keyframes flip {\\r\\n  0% {\\r\\n    transform: scaleY(1);\\r\\n  }\\r\\n  50% {\\r\\n    transform: scaleY(0);\\r\\n  }\\r\\n  100% {\\r\\n    transform: scaleY(1);\\r\\n  }\\r\\n}\\r\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS5vbmVPZlsxM10udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLm9uZU9mWzEzXS51c2VbMl0hLi9zdHlsZXMvSG9tZVRpbGVzLmNzcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUN3SDtBQUN4SCw4QkFBOEIsa0hBQTJCO0FBQ3pEO0FBQ0EsMERBQTBELCtCQUErQixrRUFBa0UsaUZBQWlGLDhDQUE4Qyw2QkFBNkIsb0JBQW9CLHNCQUFzQixrRUFBa0UsNEVBQTRFLHlDQUF5Qyx1RUFBdUUsS0FBSyw0Q0FBNEMsbUJBQW1CLG1CQUFtQixzQkFBc0IsbUJBQW1CLDhCQUE4QixnQ0FBZ0Msb0JBQW9CLDhCQUE4QiwwQkFBMEIsS0FBSyxxQkFBcUIsOEJBQThCLEtBQUssV0FBVyxvQkFBb0Isb0JBQW9CLHNFQUFzRSxtQkFBbUIsS0FBSyw4QkFBOEIseUNBQXlDLGdDQUFnQyxnQ0FBZ0MsS0FBSyx3Q0FBd0Msa0JBQWtCLG1CQUFtQixzQkFBc0IsbUJBQW1CLDhCQUE4QixnQ0FBZ0Msb0JBQW9CLDhCQUE4QiwwQkFBMEIsS0FBSyxpQkFBaUIsOEJBQThCLEtBQUssV0FBVyxvQkFBb0Isb0JBQW9CLHlEQUF5RCxLQUFLLDhCQUE4Qix5Q0FBeUMsZ0NBQWdDLGdDQUFnQyxLQUFLLHdDQUF3QyxrQkFBa0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsOEJBQThCLG9CQUFvQiw4QkFBOEIsMEJBQTBCLEtBQUssaUJBQWlCLDhCQUE4QixLQUFLLFdBQVcsb0JBQW9CLG9CQUFvQixxREFBcUQsS0FBSyw4QkFBOEIseUNBQXlDLGdDQUFnQyxnQ0FBZ0MsS0FBSyx3Q0FBd0Msa0JB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OEIsS0FBSyxXQUFXLG9CQUFvQixrRUFBa0UsNERBQTRELHlEQUF5RCxLQUFLLDhCQUE4Qix5Q0FBeUMsZ0NBQWdDLGdDQUFnQyxLQUFLLHdDQUF3QyxrQkFBa0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsOEJBQThCLG9CQUFvQiw4QkFBOEIsMEJBQTBCLEtBQUssaUJBQWlCLDhCQUE4QixLQUFLLFdBQVcsb0JBQW9CLGtFQUFrRSw0REFBNEQseURBQXlELEtBQUssOEJBQThCLHlDQUF5QyxnQ0FBZ0MsZ0NBQWdDLEtBQUsscUJBQXFCLFVBQVUsNkJBQTZCLE9BQU8sV0FBVyw2QkFBNkIsT0FBTyxZQUFZLDZCQUE2QixPQUFPLEtBQUssdUJBQXVCO0FBQ3Q4UjtBQUNBLCtEQUFlLHVCQUF1QixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9Ib21lVGlsZXMuY3NzPzlkNjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5jYXRlZ29yeS1mbGV4IHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHllbGxvdztcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KFxcclxcbiAgICA4LFxcclxcbiAgICAxZnJcXHJcXG4gICk7IC8qIEFkanVzdCB0aGUgbnVtYmVyIG9mIGNvbHVtbnMgYXMgbmVlZGVkICovXFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxKTsgLyogQWRqdXN0IHRoZSBudW1iZXIgb2Ygcm93cyBhcyBuZWVkZWQgKi9cXHJcXG59XFxyXFxuLmNhdGVnb3J5LWZsZXggPiBidXR0b24ge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KFxcclxcbiAgICA4LFxcclxcbiAgICAxZnJcXHJcXG4gICk7IC8qIEFkanVzdCB0aGUgbnVtYmVyIG9mIGNvbHVtbnMgYXMgbmVlZGVkICovXFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMTIzO1xcclxcblxcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMSk7IC8qIEFkanVzdCB0aGUgbnVtYmVyIG9mIHJvd3MgYXMgbmVlZGVkICovXFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogLS0tLS0tLS0tLS0tLSBSb3cgMyAqL1xcclxcbi5ib3gzIHtcXHJcXG4gIHdpZHRoOiAxMDBweDtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMzhweDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjEyMztcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5ib3gzOmZvY3VzIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcclxcbn1cXHJcXG4ucm93MyB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcblxcclxcbiAgZ2FwOiA1cHg7IC8qIEFkanVzdCB0aGUgZ2FwIGJldHdlZW4gYm94ZXMgKi9cXHJcXG5cXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDIxMjM7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcbi5yb3czOmZvY3VzLXdpdGhpbiAuYm94MyB7XFxyXFxuICBhbmltYXRpb246IGZsaXAgMC41cyBlYXNlIGZvcndhcmRzO1xcclxcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1YWFjMzk7XFxyXFxufVxcclxcbi8qIC0tLS0tLS0tLS0tLS0gUm93IDQgKi9cXHJcXG4uYm94NCB7XFxyXFxuICB3aWR0aDogNTBweDtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMzhweDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjEyMztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5ib3g0OmZvY3VzIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcclxcbn1cXHJcXG4ucm93NCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcblxcclxcbiAgZ2FwOiA1cHg7IC8qIEFkanVzdCB0aGUgZ2FwIGJldHdlZW4gYm94ZXMgKi9cXHJcXG5cXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuLnJvdzQ6Zm9jdXMtd2l0aGluIC5ib3g0IHtcXHJcXG4gIGFuaW1hdGlvbjogZmxpcCAwLjVzIGVhc2UgZm9yd2FyZHM7XFxyXFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVhYWMzOTtcXHJcXG59XFxyXFxuLyogLS0tLS0tLS0tLS0tLSBSb3cgNSAqL1xcclxcbi5ib3g1IHtcXHJcXG4gIHdpZHRoOiA1MHB4O1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgZm9udC1zaXplOiAzOHB4O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4uYm94NTpmb2N1cyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXHJcXG59XFxyXFxuLnJvdzUge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG5cXHJcXG4gIGdhcDogNXB4OyAvKiBBZGp1c3QgdGhlIGdhcCBiZXR3ZWVuIGJveGVzICovXFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcbi5yb3c1OmZvY3VzLXdpdGhpbiAuYm94NSB7XFxyXFxuICBhbmltYXRpb246IGZsaXAgMC41cyBlYXNlIGZvcndhcmRzO1xcclxcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1YWFjMzk7XFxyXFxufVxcclxcbi8qIC0tLS0tLS0tLS0tLS0gUm93IDYgKi9cXHJcXG4uYm94NiB7XFxyXFxuICB3aWR0aDogNTBweDtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMzhweDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmJveDY6Zm9jdXMge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxyXFxufVxcclxcbi5yb3c2IHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChcXHJcXG4gICAgNixcXHJcXG4gICAgMWZyXFxyXFxuICApOyAvKiBBZGp1c3QgdGhlIG51bWJlciBvZiBjb2x1bW5zIGFzIG5lZWRlZCAqL1xcclxcbiAgZ2FwOiA1cHg7IC8qIEFkanVzdCB0aGUgZ2FwIGJldHdlZW4gYm94ZXMgKi9cXHJcXG5cXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuLnJvdzY6Zm9jdXMtd2l0aGluIC5ib3g2IHtcXHJcXG4gIGFuaW1hdGlvbjogZmxpcCAwLjVzIGVhc2UgZm9yd2FyZHM7XFxyXFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVhYWMzOTtcXHJcXG59XFxyXFxuLyogLS0tLS0tLS0tLS0tLSBSb3cgNyAqL1xcclxcbi5ib3g3IHtcXHJcXG4gIHdpZHRoOiA1MHB4O1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgZm9udC1zaXplOiAzOHB4O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4uYm94Nzpmb2N1cyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXHJcXG59XFxyXFxuLnJvdzcge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KFxcclxcbiAgICA3LFxcclxcbiAgICAxZnJcXHJcXG4gICk7IC8qIEFkanVzdCB0aGUgbnVtYmVyIG9mIGNvbHVtbnMgYXMgbmVlZGVkICovXFxyXFxuICBnYXA6IDVweDsgLyogQWRqdXN0IHRoZSBnYXAgYmV0d2VlbiBib3hlcyAqL1xcclxcblxcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG4ucm93Nzpmb2N1cy13aXRoaW4gLmJveDcge1xcclxcbiAgYW5pbWF0aW9uOiBmbGlwIDAuNXMgZWFzZSBmb3J3YXJkcztcXHJcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWFhYzM5O1xcclxcbn1cXHJcXG5Aa2V5ZnJhbWVzIGZsaXAge1xcclxcbiAgMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcXHJcXG4gIH1cXHJcXG4gIDUwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDApO1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL0hvbWVUaWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx3QkFBd0I7RUFDeEI7OztHQUdDLEVBQUUsMkNBQTJDO0VBQzlDLDZCQUE2QixFQUFFLHdDQUF3QztBQUN6RTtBQUNBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZjs7O0dBR0MsRUFBRSwyQ0FBMkM7RUFDOUMseUJBQXlCOztFQUV6Qiw2QkFBNkIsRUFBRSx3Q0FBd0M7RUFDdkUsdUJBQXVCO0FBQ3pCOztBQUVBLHdCQUF3QjtBQUN4QjtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtFQUNmLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxhQUFhOztFQUViLFFBQVEsRUFBRSxpQ0FBaUM7O0VBRTNDLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGtDQUFrQztFQUNsQyx5QkFBeUI7RUFDekIseUJBQXlCO0FBQzNCO0FBQ0Esd0JBQXdCO0FBQ3hCO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsWUFBWTtFQUNaLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsYUFBYTs7RUFFYixRQUFRLEVBQUUsaUNBQWlDOztFQUUzQyxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGtDQUFrQztFQUNsQyx5QkFBeUI7RUFDekIseUJBQXlCO0FBQzNCO0FBQ0Esd0JBQXdCO0FBQ3hCO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxhQUFhOztFQUViLFFBQVEsRUFBRSxpQ0FBaUM7RUFDM0MsWUFBWTtBQUNkO0FBQ0E7RUFDRSxrQ0FBa0M7RUFDbEMseUJBQXlCO0VBQ3pCLHlCQUF5QjtBQUMzQjtBQUNBLHdCQUF3QjtBQUN4QjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsYUFBYTtFQUNiOzs7R0FHQyxFQUFFLDJDQUEyQztFQUM5QyxRQUFRLEVBQUUsaUNBQWlDOztFQUUzQyxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGtDQUFrQztFQUNsQyx5QkFBeUI7RUFDekIseUJBQXlCO0FBQzNCO0FBQ0Esd0JBQXdCO0FBQ3hCO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxhQUFhO0VBQ2I7OztHQUdDLEVBQUUsMkNBQTJDO0VBQzlDLFFBQVEsRUFBRSxpQ0FBaUM7O0VBRTNDLFlBQVk7QUFDZDtBQUNBO0VBQ0Usa0NBQWtDO0VBQ2xDLHlCQUF5QjtFQUN6Qix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFO0lBQ0Usb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSxvQkFBb0I7RUFDdEI7RUFDQTtJQUNFLG9CQUFvQjtFQUN0QjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jYXRlZ29yeS1mbGV4IHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHllbGxvdztcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KFxcclxcbiAgICA4LFxcclxcbiAgICAxZnJcXHJcXG4gICk7IC8qIEFkanVzdCB0aGUgbnVtYmVyIG9mIGNvbHVtbnMgYXMgbmVlZGVkICovXFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxKTsgLyogQWRqdXN0IHRoZSBudW1iZXIgb2Ygcm93cyBhcyBuZWVkZWQgKi9cXHJcXG59XFxyXFxuLmNhdGVnb3J5LWZsZXggPiBidXR0b24ge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KFxcclxcbiAgICA4LFxcclxcbiAgICAxZnJcXHJcXG4gICk7IC8qIEFkanVzdCB0aGUgbnVtYmVyIG9mIGNvbHVtbnMgYXMgbmVlZGVkICovXFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMTIzO1xcclxcblxcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMSk7IC8qIEFkanVzdCB0aGUgbnVtYmVyIG9mIHJvd3MgYXMgbmVlZGVkICovXFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogLS0tLS0tLS0tLS0tLSBSb3cgMyAqL1xcclxcbi5ib3gzIHtcXHJcXG4gIHdpZHRoOiAxMDBweDtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMzhweDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjEyMztcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5ib3gzOmZvY3VzIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcclxcbn1cXHJcXG4ucm93MyB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcblxcclxcbiAgZ2FwOiA1cHg7IC8qIEFkanVzdCB0aGUgZ2FwIGJldHdlZW4gYm94ZXMgKi9cXHJcXG5cXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDIxMjM7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcbi5yb3czOmZvY3VzLXdpdGhpbiAuYm94MyB7XFxyXFxuICBhbmltYXRpb246IGZsaXAgMC41cyBlYXNlIGZvcndhcmRzO1xcclxcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1YWFjMzk7XFxyXFxufVxcclxcbi8qIC0tLS0tLS0tLS0tLS0gUm93IDQgKi9cXHJcXG4uYm94NCB7XFxyXFxuICB3aWR0aDogNTBweDtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMzhweDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjEyMztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5ib3g0OmZvY3VzIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcclxcbn1cXHJcXG4ucm93NCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcblxcclxcbiAgZ2FwOiA1cHg7IC8qIEFkanVzdCB0aGUgZ2FwIGJldHdlZW4gYm94ZXMgKi9cXHJcXG5cXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuLnJvdzQ6Zm9jdXMtd2l0aGluIC5ib3g0IHtcXHJcXG4gIGFuaW1hdGlvbjogZmxpcCAwLjVzIGVhc2UgZm9yd2FyZHM7XFxyXFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVhYWMzOTtcXHJcXG59XFxyXFxuLyogLS0tLS0tLS0tLS0tLSBSb3cgNSAqL1xcclxcbi5ib3g1IHtcXHJcXG4gIHdpZHRoOiA1MHB4O1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgZm9udC1zaXplOiAzOHB4O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4uYm94NTpmb2N1cyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXHJcXG59XFxyXFxuLnJvdzUge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG5cXHJcXG4gIGdhcDogNXB4OyAvKiBBZGp1c3QgdGhlIGdhcCBiZXR3ZWVuIGJveGVzICovXFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcbi5yb3c1OmZvY3VzLXdpdGhpbiAuYm94NSB7XFxyXFxuICBhbmltYXRpb246IGZsaXAgMC41cyBlYXNlIGZvcndhcmRzO1xcclxcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1YWFjMzk7XFxyXFxufVxcclxcbi8qIC0tLS0tLS0tLS0tLS0gUm93IDYgKi9cXHJcXG4uYm94NiB7XFxyXFxuICB3aWR0aDogNTBweDtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMzhweDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmJveDY6Zm9jdXMge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxyXFxufVxcclxcbi5yb3c2IHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChcXHJcXG4gICAgNixcXHJcXG4gICAgMWZyXFxyXFxuICApOyAvKiBBZGp1c3QgdGhlIG51bWJlciBvZiBjb2x1bW5zIGFzIG5lZWRlZCAqL1xcclxcbiAgZ2FwOiA1cHg7IC8qIEFkanVzdCB0aGUgZ2FwIGJldHdlZW4gYm94ZXMgKi9cXHJcXG5cXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuLnJvdzY6Zm9jdXMtd2l0aGluIC5ib3g2IHtcXHJcXG4gIGFuaW1hdGlvbjogZmxpcCAwLjVzIGVhc2UgZm9yd2FyZHM7XFxyXFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVhYWMzOTtcXHJcXG59XFxyXFxuLyogLS0tLS0tLS0tLS0tLSBSb3cgNyAqL1xcclxcbi5ib3g3IHtcXHJcXG4gIHdpZHRoOiA1MHB4O1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgZm9udC1zaXplOiAzOHB4O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4uYm94Nzpmb2N1cyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXHJcXG59XFxyXFxuLnJvdzcge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KFxcclxcbiAgICA3LFxcclxcbiAgICAxZnJcXHJcXG4gICk7IC8qIEFkanVzdCB0aGUgbnVtYmVyIG9mIGNvbHVtbnMgYXMgbmVlZGVkICovXFxyXFxuICBnYXA6IDVweDsgLyogQWRqdXN0IHRoZSBnYXAgYmV0d2VlbiBib3hlcyAqL1xcclxcblxcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG4ucm93Nzpmb2N1cy13aXRoaW4gLmJveDcge1xcclxcbiAgYW5pbWF0aW9uOiBmbGlwIDAuNXMgZWFzZSBmb3J3YXJkcztcXHJcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWFhYzM5O1xcclxcbn1cXHJcXG5Aa2V5ZnJhbWVzIGZsaXAge1xcclxcbiAgMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcXHJcXG4gIH1cXHJcXG4gIDUwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDApO1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[13].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[13].use[2]!./styles/HomeTiles.css\n"));

/***/ })

});