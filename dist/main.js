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

eval("let container = document.getElementById(\"container\");\r\n\r\n\r\n\r\n\r\n\r\nlet header = document.createElement('div');\r\nheader.classList.add('header');\r\n\r\nlet headerHome =document.createElement('div');\r\nheaderHome.classList.add('headerHome');\r\nheaderHome.classList.add('headerSelected');\r\nheaderHome.innerHTML = '<p>Inicio</p>'\r\nheader.appendChild(headerHome);\r\n\r\nlet headerMenu = document.createElement('div');\r\nheaderMenu.classList.add('headerMenu');\r\nheaderMenu.innerHTML = '<p>Menú<p>'\r\nheader.appendChild(headerMenu);\r\n\r\nlet headerAbout = document.createElement('div');\r\nheaderAbout.classList.add('headerAbout');\r\nheaderAbout.innerHTML = '<p>Contacto</p>';\r\nheader.appendChild(headerAbout)\r\n\r\n\r\n\r\ncontainer.append(header)\r\n\r\n\r\n\r\n\r\n// INDEX CONTENT\r\n\r\nlet content = document.createElement('div');\r\ncontent.classList.add('content');\r\ncontent.setAttribute('id', 'content');\r\n\r\ncontent.innerHTML = `<p class=\"bienvenidos\">Bienvenidos</p>\r\n<p class=\"matadero\">El Matadero</p>\r\n<button type=\"button\" class=\"buttonMenu\">Ver el Menú</button>`\r\n\r\ncontainer.append(content)\r\n\r\n\r\n\r\n\r\n\r\n//  FOOTER\r\nlet footer = document.createElement('footer');\r\nfooter.classList.add('footer');\r\nfooter.setAttribute('id', 'footer')\r\nfooter.innerHTML = `<p>\r\n  Creado por\r\n  <a href=\"https://github.com/ramessj\" target=\"blank\">Ramiro Quesada</a>\r\n  • Hosteado en\r\n  <a href=\"https://github.com/ramessj/Restaurant-Page\" target=\"blank\">GitHub</a>\r\n</p>`;\r\n\r\ncontainer.append(footer);\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

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