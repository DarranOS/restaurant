/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dabo.js":
/*!*********************!*\
  !*** ./src/dabo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createDabo = () => {\n  console.log(\"Weeee Dabo\");\n  const dabo = document.createElement(\"img\");\n  dabo.src = \"images/dabo.jpg\";\n  dabo.setAttribute(\"id\", \"dabo\");\n  dabo.classList.add(\"img\");\n  return dabo;\n};\n\nconst dabo = () => {\n  const main = document.getElementById(\"main\");\n  while (main.hasChildNodes()) {\n    main.removeChild(main.childNodes[0]);\n  }\n  main.appendChild(createDabo());\n  return main;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dabo);\n\n\n//# sourceURL=webpack://restaurant/./src/dabo.js?");

/***/ }),

/***/ "./src/gagh.js":
/*!*********************!*\
  !*** ./src/gagh.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createGagh = () => {\n  console.log(\"Weeee gagh\");\n  const gagh = document.createElement(\"img\");\n  gagh.src = \"images/gagh.jpg\";\n  gagh.setAttribute(\"id\", \"gagh\");\n  gagh.classList.add(\"img\");\n  return gagh;\n};\n\nconst gagh = () => {\n  const main = document.getElementById(\"main\");\n  while (main.hasChildNodes()) {\n    main.removeChild(main.childNodes[0]);\n  }\n  main.appendChild(createGagh());\n  return main;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gagh);\n\n\n//# sourceURL=webpack://restaurant/./src/gagh.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createHome = () => {\n  console.log(\"Weeee Home\");\n  const quark = document.createElement(\"img\");\n  quark.src = \"images/Quark_DS9.jpg\";\n  quark.setAttribute(\"id\", \"quark\");\n  quark.classList.add(\"quark\");\n  return quark;\n};\n\nconst home = () => {\n  const main = document.getElementById(\"main\");\n  while (main.hasChildNodes()) {\n    main.removeChild(main.childNodes[0]);\n  }\n  main.classList.add(\"home\");\n  main.appendChild(createHome());\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);\n\n\n//# sourceURL=webpack://restaurant/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website */ \"./src/website.js\");\n\n\n(0,_website__WEBPACK_IMPORTED_MODULE_0__.default)();\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _dabo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dabo */ \"./src/dabo.js\");\n/* harmony import */ var _gagh__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gagh */ \"./src/gagh.js\");\n\n\n\n\nconst createHeader = () => {\n  const header = document.createElement(\"div\");\n\n  const title = document.createElement(\"h1\");\n  title.innerText = \"Quark's Bar\";\n  title.classList.add(\"header\");\n\n  const image = document.createElement(\"img\");\n  image.src = \"images/STDS9.jpg\";\n  image.setAttribute(\"id\", \"ds9\");\n  image.classList.add(\"quark\");\n\n  const nav = document.createElement(\"nav\");\n  nav.classList.add(\"nav\");\n\n  const navHome = document.createElement(\"button\");\n  navHome.setAttribute(\"id\", \"home\");\n  navHome.textContent = \"Home\";\n  navHome.addEventListener(\"click\", (e) => {\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__.default)();\n  });\n  nav.appendChild(navHome);\n  const navMenu = document.createElement(\"button\");\n  navMenu.setAttribute(\"id\", \"menu\");\n  navMenu.textContent = \"Menu\";\n  navMenu.addEventListener(\"click\", (e) => {\n    (0,_dabo__WEBPACK_IMPORTED_MODULE_1__.default)();\n  });\n  nav.appendChild(navMenu);\n  const navCont = document.createElement(\"button\");\n  navCont.setAttribute(\"id\", \"contactUs\");\n  navCont.textContent = \"Contact Us\";\n  navCont.addEventListener(\"click\", (e) => {\n    (0,_gagh__WEBPACK_IMPORTED_MODULE_2__.default)();\n  });\n\n  nav.appendChild(navCont);\n\n  header.appendChild(title);\n  header.appendChild(image);\n  header.appendChild(nav);\n  return header;\n};\n\nconst createMain = () => {\n  const main = document.createElement(\"div\");\n  main.setAttribute(\"id\", \"main\");\n  main.classList.add(\"main\");\n  return main;\n};\n\nconst createFooter = () => {\n  const footer = document.createElement(\"div\");\n  const copyright = document.createElement(\"p\");\n  copyright.classList.add(\"footer\");\n  copyright.textContent = \"@2021\";\n  footer.appendChild(copyright);\n  return footer;\n};\n\nconst initialiseSite = () => {\n  const container = document.getElementById(\"content\");\n  container.appendChild(createHeader());\n  container.appendChild(createMain());\n  container.appendChild(createFooter());\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialiseSite);\n\n\n//# sourceURL=webpack://restaurant/./src/website.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;