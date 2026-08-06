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
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ About)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _icons_LoadingIcon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/LoadingIcon.js */ \"./src/icons/LoadingIcon.js\");\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/react */ \"./node_modules/@emotion/react/dist/emotion-react.browser.development.esm.js\");\n/* harmony import */ var _styling_colors_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styling/colors.js */ \"./src/styling/colors.js\");\n/** @jsx jsx */\n\n\n\n\n\nclass About extends react__WEBPACK_IMPORTED_MODULE_0__.Component {\n  render() {\n    return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"div\", {\n      className: \"fade-in\"\n    }, this.props.loading ? (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(_icons_LoadingIcon_js__WEBPACK_IMPORTED_MODULE_1__.LoadingIcon, null) : (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"div\", null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"div\", {\n      className: \"hero-secondary\",\n      style: {\n        backgroundImage: document.documentElement.classList.contains(\"webp\") ? \"url(\" + this.props.data.homebgs[Math.floor(Math.random() * this.props.data.homebgs.length)].webp + \")\" : \"url(\" + this.props.data.homebgs[Math.floor(Math.random() * this.props.data.homebgs.length)].fallback + \")\"\n      }\n    }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"div\", {\n      className: \"content\"\n    }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"h2\", {\n      className: \"page-title\"\n    }, \"ABOUT\", (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"strong\", null, \"\\u2022ME\"))), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"div\", {\n      css: (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.css)`\n                background-color: ${_styling_colors_js__WEBPACK_IMPORTED_MODULE_3__.colors.lightBlue};\n                padding: 2rem 4rem 3rem;\n                box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);\n                margin: 10px auto 0rem auto;\n                max-width: 50rem;\n                border-radius: 20px;\n              `\n    }, this.props.data.about.map(function (data, key) {\n      return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"p\", {\n        key: key\n      }, data);\n    }, this))));\n  }\n}\n\n//# sourceURL=webpack://my-app/./src/About.js?\n}");

/***/ }),

/***/ "./src/styling/colors.js":
/*!*******************************!*\
  !*** ./src/styling/colors.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   colors: () => (/* binding */ colors)\n/* harmony export */ });\nconst colors = {\n  white: \"#ffffff\",\n  darkBlue: \"#23294d\",\n  lightBlue: \"#343e75\"\n};\n\n//# sourceURL=webpack://my-app/./src/styling/colors.js?\n}");

/***/ })

}]);