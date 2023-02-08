/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("let container = document.getElementById(\"container\");\r\n\r\n\r\n\r\n\r\n\r\nlet header = document.createElement('div');\r\nheader.classList.add('header');\r\n\r\nlet headerHome =document.createElement('div');\r\nheaderHome.classList.add('headerHome');\r\nheaderHome.classList.add('headerSelected');\r\nheaderHome.innerHTML = '<p>Inicio</p>'\r\nheader.appendChild(headerHome);\r\n\r\nlet headerMenu = document.createElement('div');\r\nheaderMenu.classList.add('headerMenu');\r\nheaderMenu.innerHTML = '<p>Menu<p>'\r\nheader.appendChild(headerMenu);\r\n\r\nlet headerAbout = document.createElement('div');\r\nheaderAbout.classList.add('headerAbout');\r\nheaderAbout.innerHTML = '<p>Sobre Nosotros</p>';\r\nheader.appendChild(headerAbout)\r\n\r\n\r\n\r\ncontainer.append(header)\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;