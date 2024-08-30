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

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   aboutDisplay: () => (/* binding */ aboutDisplay)\n/* harmony export */ });\n/* harmony import */ var _images_about_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/about.jpg */ \"./src/images/about.jpg\");\n/* harmony import */ var _images_about2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/about2.jpg */ \"./src/images/about2.jpg\");\n\n\n\nconst aboutDisplay = () => {\n    const content = document.querySelector(\".content\")\n\n    const about = document.createElement(\"div\")\n    about.classList.add(\"about\")\n\n    const image_one = document.createElement(\"img\")\n    image_one.src = _images_about_jpg__WEBPACK_IMPORTED_MODULE_0__\n    image_one.classList.add(\"about-image\")\n\n    const image_two = document.createElement(\"img\")\n    image_two.src = _images_about2_jpg__WEBPACK_IMPORTED_MODULE_1__\n    image_two.classList.add(\"about-image\")\n\n    const paragraph = document.createElement(\"p\")\n    paragraph.classList.add(\"about-paragraph\")\n    paragraph.innerText = \"With a prime location in the heart of the red town in Gueliz, the Mamma Mia puts the Italian gastronomy culture in the forefront. Thanks to our experienced cooks, you will discover the different regions of Italy in Morocco. Your restaurant Mammamia offers you fresh pastas, pizzas, desserts and a large choice of moroccan, french and italian wines. In its classic trattoria style, you will enjoy the best Italian dishes in Marrakech.\"\n\n    about.append(image_one,image_two,paragraph)\n    content.append(about)\n}\n\n\n\n//# sourceURL=webpack://project-restaurant-page/./src/about.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _initial_page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initial-page-load */ \"./src/initial-page-load.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n//import \"./initial-page-load.js\"\n\n\n\n\nconst displayFunction = () => {\n    const buttons = document.querySelector(\".middle-bar\")\n    const content = document.querySelector(\".content\")\n    \n\n    buttons.addEventListener(\"click\",(e) => {\n        \n        if(e.target.id == \"home\"){\n            content.innerHTML = \"\"\n            ;(0,_initial_page_load__WEBPACK_IMPORTED_MODULE_0__.displayControler)();\n        }\n        else if(e.target.id == \"menu\"){\n            content.innerHTML = \"\"\n            ;(0,_menu__WEBPACK_IMPORTED_MODULE_1__.displayMenu)();\n        }\n        else if(e.target.id == \"about\"){\n            content.innerHTML = \"\"\n            ;(0,_about__WEBPACK_IMPORTED_MODULE_2__.aboutDisplay)();\n        }\n    })\n    ;(0,_initial_page_load__WEBPACK_IMPORTED_MODULE_0__.displayControler)();\n}\n\ndisplayFunction();\n\n//# sourceURL=webpack://project-restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/initial-page-load.js":
/*!**********************************!*\
  !*** ./src/initial-page-load.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayControler: () => (/* binding */ displayControler)\n/* harmony export */ });\n/* harmony import */ var _images_content_image_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/content-image.png */ \"./src/images/content-image.png\");\n/* harmony import */ var _images_image_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/image.png */ \"./src/images/image.png\");\n\n\n\nconst displayControler = () => {\n    const content = document.querySelector(\".content\")\n    \n    // left content creation\n    const left_content = document.createElement(\"div\")\n    left_content.classList.add(\"left-content\")\n\n    const heading = document.createElement('h1');\n    heading.innerHTML = '<span class=\"orange\">Food</span> <br> & Good <br><span class=\"orange\">Moments</span>';\n\n\n    const paragraph = document.createElement('p');\n    paragraph.innerHTML = 'Eat the food you dream about at affordable prices. No<br> need to come to us just call us. We are providing and<br> delivering you the yummy foods.</p>'\n    \n    const button = document.createElement(\"button\")\n    button.innerText = \"View Menu\"\n    button.classList.add(\"view-menu\")\n\n    left_content.append(heading,paragraph,button)\n    content.appendChild(left_content)\n\n    //right content\n    const right_content = document.createElement(\"div\")\n    right_content.classList.add(\"right-content\")\n\n    \n    const img_one =  document.createElement(\"img\")\n    img_one.classList.add(\"content-image\")\n    img_one.src = _images_content_image_png__WEBPACK_IMPORTED_MODULE_0__\n\n    const img_two =  document.createElement(\"img\")\n    img_two.classList.add(\"pizza-image\")\n    img_two.src = _images_image_png__WEBPACK_IMPORTED_MODULE_1__\n\n    right_content.append(img_one,img_two)\n    content.appendChild(right_content)\n}\n\n\n\n//# sourceURL=webpack://project-restaurant-page/./src/initial-page-load.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayMenu: () => (/* binding */ displayMenu)\n/* harmony export */ });\n/* harmony import */ var _images_pizza1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/pizza1.jpg */ \"./src/images/pizza1.jpg\");\n/* harmony import */ var _images_pizza2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/pizza2.jpg */ \"./src/images/pizza2.jpg\");\n/* harmony import */ var _images_pizza3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/pizza3.jpg */ \"./src/images/pizza3.jpg\");\n/* harmony import */ var _images_pizza4_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/pizza4.jpg */ \"./src/images/pizza4.jpg\");\n\n\n\n\n\nconst displayMenu = () => {\n    const content = document.querySelector(\".content\")\n\n    const menu = document.createElement(\"div\")\n    menu.classList.add(\"menu\")\n\n    const title = document.createElement(\"h1\")\n    title.classList.add(\"menu-title\")\n    title.innerText = \"Our Menu\"\n    \n    const food_menu = document.createElement(\"div\")\n    food_menu.classList.add(\"food-menu\")\n\n    \n    const foodone = document.createElement(\"div\")\n    foodone.classList.add(\"food\")\n    const image_one = document.createElement(\"img\")\n    image_one.src = _images_pizza1_jpg__WEBPACK_IMPORTED_MODULE_0__\n    const button_one = document.createElement(\"button\")\n    button_one.innerText = \"ORDER\"\n    button_one.classList.add(\"order\")\n    const heading_one = document.createElement(\"h3\")\n    heading_one.innerText = \"Beef Tex-Mex\"\n    const paragraph_one = document.createElement(\"p\")\n    paragraph_one.innerText = \"Pizza Sauce, Mozzarella, Onions, Green Peppers, Beef, Jalapeno and Tomatoes\"\n    foodone.append(image_one,button_one,heading_one,paragraph_one)\n\n    const foodtwo = document.createElement(\"div\")\n    foodtwo.classList.add(\"food\")\n    const image_two = document.createElement(\"img\")\n    image_two.src = _images_pizza2_jpg__WEBPACK_IMPORTED_MODULE_1__\n    const button_two = document.createElement(\"button\")\n    button_two.innerText = \"ORDER\"\n    button_two.classList.add(\"order\")\n    const heading_two = document.createElement(\"h3\")\n    heading_two.innerText = \"Chicken Tex-Mex\"\n    const paragraph_two = document.createElement(\"p\")\n    paragraph_two.innerText = \"Pizza Sauce, Mozzarella, Onions, Green Peppers, Black Olives, Grilled Chicken Breast, Jalapeno & Oregano\"\n    foodtwo.append(image_two,button_two,heading_two,paragraph_two)\n\n\n    const foodthree = document.createElement(\"div\")\n    foodthree.classList.add(\"food\")\n    const image_three = document.createElement(\"img\")\n    image_three.src = _images_pizza3_jpg__WEBPACK_IMPORTED_MODULE_2__\n    const button_three = document.createElement(\"button\")\n    button_three.innerText = \"ORDER\"\n    button_three.classList.add(\"order\")\n    const heading_three = document.createElement(\"h3\")\n    heading_three.innerText = \"American\"\n    const paragraph_three = document.createElement(\"p\")\n    paragraph_three.innerText = \"Pizza Sauce, Mozzarella,Beef Pepperoni, Beef, Mushrooms and Second layer of Mozzarella.\"\n    foodthree.append(image_three,button_three,heading_three,paragraph_three)\n\n    const foodfour = document.createElement(\"div\")\n    foodfour.classList.add(\"food\")\n    const image_four = document.createElement(\"img\")\n    image_four.src = _images_pizza4_jpg__WEBPACK_IMPORTED_MODULE_3__\n    const button_four = document.createElement(\"button\")\n    button_four.innerText = \"ORDER\"\n    button_four.classList.add(\"order\")\n    const heading_four = document.createElement(\"h3\")\n    heading_four.innerText = \"Veggie\"\n    const paragraph_four = document.createElement(\"p\")\n    paragraph_four.innerText = \"Pizza Sauce, Mozzarella, Onions, Green Peppers, Mushrooms & Black Olives\"\n    foodfour.append(image_four,button_four,heading_four,paragraph_four)\n\n    food_menu.append(foodone,foodtwo,foodthree,foodfour)\n\n    menu.append(title,food_menu)\n    content.append(menu)\n}\n\n\n\n//# sourceURL=webpack://project-restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/images/about.jpg":
/*!******************************!*\
  !*** ./src/images/about.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"85ca0633aba4dcb635fe.jpg\";\n\n//# sourceURL=webpack://project-restaurant-page/./src/images/about.jpg?");

/***/ }),

/***/ "./src/images/about2.jpg":
/*!*******************************!*\
  !*** ./src/images/about2.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4f35cf74f36fdf86edb4.jpg\";\n\n//# sourceURL=webpack://project-restaurant-page/./src/images/about2.jpg?");

/***/ }),

/***/ "./src/images/content-image.png":
/*!**************************************!*\
  !*** ./src/images/content-image.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9e9983b4ff7a379dd6f9.png\";\n\n//# sourceURL=webpack://project-restaurant-page/./src/images/content-image.png?");

/***/ }),

/***/ "./src/images/image.png":
/*!******************************!*\
  !*** ./src/images/image.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"830cc866c0f0366be915.png\";\n\n//# sourceURL=webpack://project-restaurant-page/./src/images/image.png?");

/***/ }),

/***/ "./src/images/pizza1.jpg":
/*!*******************************!*\
  !*** ./src/images/pizza1.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bde4a3048c3b9f8bfebf.jpg\";\n\n//# sourceURL=webpack://project-restaurant-page/./src/images/pizza1.jpg?");

/***/ }),

/***/ "./src/images/pizza2.jpg":
/*!*******************************!*\
  !*** ./src/images/pizza2.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5f3ef5ad90780064caed.jpg\";\n\n//# sourceURL=webpack://project-restaurant-page/./src/images/pizza2.jpg?");

/***/ }),

/***/ "./src/images/pizza3.jpg":
/*!*******************************!*\
  !*** ./src/images/pizza3.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cb65df141e40fb92ebba.jpg\";\n\n//# sourceURL=webpack://project-restaurant-page/./src/images/pizza3.jpg?");

/***/ }),

/***/ "./src/images/pizza4.jpg":
/*!*******************************!*\
  !*** ./src/images/pizza4.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cc72fcc09098b6c49fc2.jpg\";\n\n//# sourceURL=webpack://project-restaurant-page/./src/images/pizza4.jpg?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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