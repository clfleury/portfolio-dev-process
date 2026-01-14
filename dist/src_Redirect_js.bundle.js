"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmy_app"] = self["webpackChunkmy_app"] || []).push([["src_Redirect_js"],{

/***/ "./src/Redirect.js":
/*!*************************!*\
  !*** ./src/Redirect.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Redirect)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nclass Redirect extends react__WEBPACK_IMPORTED_MODULE_0__.Component {\n  constructor(props) {\n    super();\n    this.state = {\n      ...props\n    };\n  }\n  componentWillMount() {\n    window.location = this.state.loc;\n  }\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"section\", null, \"Redirecting...\");\n  }\n}\n\n//# sourceURL=webpack://my-app/./src/Redirect.js?\n}");

/***/ })

}]);