"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmy_app"] = self["webpackChunkmy_app"] || []).push([["src_About_js"],{

/***/ "./src/About.js":
/*!**********************!*\
  !*** ./src/About.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ About)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _icons_LoadingIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/LoadingIcon */ \"./src/icons/LoadingIcon.js\");\n\n\nclass About extends react__WEBPACK_IMPORTED_MODULE_0__.Component {\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"fade-in\"\n    }, this.props.loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_icons_LoadingIcon__WEBPACK_IMPORTED_MODULE_1__.LoadingIcon, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"hero-secondary\",\n      style: {\n        backgroundImage: document.documentElement.classList.contains(\"webp\") ? \"url(\" + this.props.data.homebgs[Math.floor(Math.random() * this.props.data.homebgs.length)].webp + \")\" : \"url(\" + this.props.data.homebgs[Math.floor(Math.random() * this.props.data.homebgs.length)].fallback + \")\"\n      }\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"content\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h2\", {\n      className: \"page-title\"\n    }, \"ABOUT\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"strong\", null, \"\\u2022ME\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"content\",\n      style: {\n        backgroundColor: \"#23294d\",\n        marginTop: \"10px\",\n        paddingTop: \"20px\"\n      }\n    }, this.props.data.about.map(function (data, key) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", {\n        key: key\n      }, data);\n    }, this))));\n  }\n}\n\n//# sourceURL=webpack://my-app/./src/About.js?\n}");

/***/ })

}]);