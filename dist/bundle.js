/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./apiService.js":
/*!***********************!*\
  !*** ./apiService.js ***!
  \***********************/
/*! exports provided: dohvatiPodatke */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dohvatiPodatke\", function() { return dohvatiPodatke; });\n\r\nconst dohvatiPodatke = () => fetch('https://cityscapes-masters.herokuapp.com/cityElements')\r\n        .then((response) => response.json())\r\n        .then(response => response);\r\n\r\n\n\n//# sourceURL=webpack:///./apiService.js?");

/***/ }),

/***/ "./dataParser.js":
/*!***********************!*\
  !*** ./dataParser.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _model_park_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model/park.js */ \"./model/park.js\");\n/* harmony import */ var _model_ulica_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/ulica.js */ \"./model/ulica.js\");\n\r\n\r\n\r\nconst parsePark = (data) => {\r\n    const parkovi = [];\r\n    data.forEach(element => {\r\n        parkovi.push(new _model_park_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](element.name, element.year, element.area, element.treesCount));\r\n    });\r\n    return parkovi;\r\n}\r\nconst parseUlica = (data) => {\r\n    const ulice = [];\r\n    data.forEach(element => {\r\n        ulice.push(new _model_ulica_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](element.name, element.year, element.streetLength, element.size));\r\n    });\r\n    return ulice;\r\n}\r\nconst parseData = (data) => {\r\n    let parsedData = {};\r\n    if (data.parkovi) {\r\n        parsedData.parkovi = parsePark(data.parkovi);\r\n    }\r\n    if (data.ulice) {\r\n        parsedData.ulice = parseUlica(data.ulice);\r\n    }\r\n    return parsedData;\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (parseData);\n\n//# sourceURL=webpack:///./dataParser.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dataParser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataParser.js */ \"./dataParser.js\");\n/* harmony import */ var _apiService_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apiService.js */ \"./apiService.js\");\n/* harmony import */ var _methods__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./methods */ \"./methods.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst klasifikacija = new Map();\r\nklasifikacija.set(1, 'prolaz');\r\nklasifikacija.set(2, 'mala');\r\nklasifikacija.set(3, 'normalna');\r\nklasifikacija.set(4, 'velika');\r\n\r\nlet parkovi = [];\r\nlet ulice = [];\r\nObject(_apiService_js__WEBPACK_IMPORTED_MODULE_1__[\"dohvatiPodatke\"])().then(data => {\r\n    parkovi = Object(_dataParser_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data).parkovi;\r\n    ulice = Object(_dataParser_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data).ulice;\r\n    Object(_methods__WEBPACK_IMPORTED_MODULE_2__[\"popuniTabeluParkova\"])(parkovi);\r\n    Object(_methods__WEBPACK_IMPORTED_MODULE_2__[\"popuniTabeluUlica\"])(ulice);\r\n    Object(_methods__WEBPACK_IMPORTED_MODULE_2__[\"popuniProsjecnuStarost\"])();\r\n    Object(_methods__WEBPACK_IMPORTED_MODULE_2__[\"popuniUkupnuDuzinu\"])();\r\n    Object(_methods__WEBPACK_IMPORTED_MODULE_2__[\"popuniProsjecnuDuzinu\"])();\r\n    Object(_methods__WEBPACK_IMPORTED_MODULE_2__[\"AddEvListeners\"])();\r\n});\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./methods.js":
/*!********************!*\
  !*** ./methods.js ***!
  \********************/
/*! exports provided: popuniTabeluParkova, popuniProsjecnuStarost, popuniTabeluUlica, popuniProsjecnuDuzinu, popuniUkupnuDuzinu, AddEvListeners */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"popuniTabeluParkova\", function() { return popuniTabeluParkova; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"popuniProsjecnuStarost\", function() { return popuniProsjecnuStarost; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"popuniTabeluUlica\", function() { return popuniTabeluUlica; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"popuniProsjecnuDuzinu\", function() { return popuniProsjecnuDuzinu; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"popuniUkupnuDuzinu\", function() { return popuniUkupnuDuzinu; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AddEvListeners\", function() { return AddEvListeners; });\n/* harmony import */ var _dataParser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataParser.js */ \"./dataParser.js\");\n/* harmony import */ var _apiService_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apiService.js */ \"./apiService.js\");\n\r\n\r\n\r\nconst klasifikacija = new Map();\r\nklasifikacija.set(1, 'prolaz');\r\nklasifikacija.set(2, 'mala');\r\nklasifikacija.set(3, 'normalna');\r\nklasifikacija.set(4, 'velika');\r\n\r\nlet parkovi = [];\r\nlet ulice = [];\r\nObject(_apiService_js__WEBPACK_IMPORTED_MODULE_1__[\"dohvatiPodatke\"])().then(data => {\r\n    parkovi = Object(_dataParser_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data).parkovi;\r\n    ulice = Object(_dataParser_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data).ulice;\r\n});\r\nconst prosjecnaStarostParkova = () => {\r\n    let sum = 0;\r\n    for (let i = 0; i < parkovi.length; i += 1) {\r\n        sum += parkovi[i].godina;\r\n    }\r\n    return (sum / parkovi.length).toFixed(2);\r\n}\r\nconst parkoviPoBrojuDrveca = () => {\r\n    let sortP = [];\r\n    for (let i = 0; i < parkovi.length; i += 1) {\r\n        sortP.push(parkovi[i]);\r\n    }\r\n    sortP.sort((a, b) => b.brojDrveca - a.brojDrveca);\r\n    popuniTabeluParkova(sortP);\r\n}\r\nconst parkoviPoPovrsini = () => {\r\n    let sortP = [];\r\n    for (let i = 0; i < parkovi.length; i += 1) {\r\n        sortP.push(parkovi[i]);\r\n    }\r\n    sortP.sort((a, b) => b.povrsina - a.povrsina);\r\n    popuniTabeluParkova(sortP);\r\n}\r\nconst obrisiSadrzajTabele = (idTabele) => {\r\n    const tabela = document.getElementById(idTabele);\r\n    const arr = tabela.getElementsByTagName('tr');\r\n    let i = arr.length;\r\n    while (i > 1) {\r\n        tabela.removeChild(tabela.lastChild);\r\n        i--;\r\n    }\r\n}\r\nconst ukupnaDuzinaUlica = () => {\r\n    let sum = 0;\r\n    for (let i = 0; i < ulice.length; i += 1) {\r\n        sum += ulice[i].duzina;\r\n    }\r\n    return sum.toFixed(1);\r\n}\r\nconst prosjecnaDuzinaUlica = () => {\r\n    return (ukupnaDuzinaUlica() / ulice.length).toFixed(2);\r\n}\r\nconst uliceIz80ih  = () => ulice.filter((ulica) => {\r\n    return ulica.godina > 1979 && ulica.godina < 1991;\r\n});\r\nconst kreirajTd = (val) => {\r\n    const td = document.createElement('td');\r\n    td.innerText = val;\r\n    return td;\r\n}\r\nconst popuniTabeluParkova = (p) => {\r\n    const tabela = document.getElementById('parkTable');\r\n    if (tabela.childElementCount > 1) {\r\n        obrisiSadrzajTabele('parkTable');\r\n    }\r\n    for (let i = 0; i < p.length; i += 1) {\r\n        const tr = document.createElement('tr');\r\n        const naziv = kreirajTd(p[i].naziv);\r\n        tr.appendChild(naziv);\r\n        const godina = kreirajTd(p[i].godina);\r\n        tr.append(godina);\r\n        const povrsina = kreirajTd(`${p[i].povrsina} km/2`);\r\n        tr.append(povrsina);\r\n        const brojDrveca = kreirajTd(p[i].brojDrveca);\r\n        tr.appendChild(brojDrveca);\r\n        const gustocaDrveca = kreirajTd(p[i].gustocaDrveca);\r\n        tr.appendChild(gustocaDrveca);\r\n        tabela.appendChild(tr);\r\n    }\r\n}\r\nconst popuniProsjecnuStarost = () => {\r\n    const prosjecnaStarost = document.getElementById('starostPar');\r\n    prosjecnaStarost.innerText += ` ${prosjecnaStarostParkova()} g`;\r\n}\r\nconst popuniTabeluUlica = (u) => {\r\n    const tabela = document.getElementById('ulicaTable');\r\n    if (tabela.childElementCount > 1) {\r\n        obrisiSadrzajTabele('ulicaTable');\r\n    }\r\n    for (let i = 0; i < u.length; i += 1) {\r\n        const tr = document.createElement('tr');\r\n        const naziv = kreirajTd(u[i].naziv);\r\n        tr.appendChild(naziv);\r\n        const godina = kreirajTd(u[i].godina);\r\n        tr.appendChild(godina);\r\n        const duzina = kreirajTd(`${u[i].duzina} km`);\r\n        tr.appendChild(duzina);\r\n        const velicina = kreirajTd(klasifikacija.get(u[i].velicina));\r\n        tr.appendChild(velicina);\r\n        tabela.appendChild(tr);\r\n    }\r\n}\r\nconst popuniUkupnuDuzinu = () => {\r\n    const ukupnaDuzina = document.getElementById('ukupnaDuzinaUl');\r\n    ukupnaDuzina.innerText += ` ${ukupnaDuzinaUlica()} km`;\r\n}\r\nconst popuniProsjecnuDuzinu = () => {\r\n    const prosjecnaDuzina = document.getElementById('prosjecnaDuzinaUl');\r\n    prosjecnaDuzina.innerText += ` ${prosjecnaDuzinaUlica()} km`;\r\n}\r\nconst AddEvListeners = () => {\r\n    const btnX = document.getElementById('btnX');\r\n    btnX.addEventListener('click', () => {\r\n        popuniTabeluParkova(parkovi);\r\n    }, true);\r\n    const uliceBtn = document.getElementById('uliceBtn');\r\n    uliceBtn.addEventListener('click', () => {\r\n        popuniTabeluUlica(uliceIz80ih());\r\n    }, true);\r\n    const btnX1 = document.getElementById('btnX1');\r\n    btnX1.addEventListener('click', () => {\r\n        popuniTabeluUlica(ulice);\r\n    }, true);\r\n    const parkoviVelicinaBtn = document.getElementById('parkoviPovrsinaBtn');\r\n    parkoviVelicinaBtn.addEventListener('click', () => {\r\n        parkoviPoPovrsini();\r\n    }, true);\r\n    const parkoviBrojDrvecBtn = document.getElementById('parkoviBrojDrvecaBtn');\r\n    parkoviBrojDrvecBtn.addEventListener('click', () => {\r\n        parkoviPoBrojuDrveca();\r\n    }, true);\r\n}\r\n\r\n\r\n\r\n// https://cityscapes-masters.herokuapp.com/cityElements\n\n//# sourceURL=webpack:///./methods.js?");

/***/ }),

/***/ "./model/element.js":
/*!**************************!*\
  !*** ./model/element.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Element {\r\n    constructor(naziv, godina) {\r\n        this.naziv = naziv;\r\n        this.godina = godina;\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Element);\n\n//# sourceURL=webpack:///./model/element.js?");

/***/ }),

/***/ "./model/park.js":
/*!***********************!*\
  !*** ./model/park.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ \"./model/element.js\");\n\r\n\r\nclass Park extends _element__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor(naziv, godina, povrsina, brojDrveca) {\r\n        super(naziv, godina);\r\n        this.povrsina = povrsina;\r\n        this.brojDrveca = brojDrveca;\r\n        this.gustocaDrveca = ((povrsina * 1000) / brojDrveca).toFixed(4);\r\n    }\r\n    getInfo() {\r\n        console.log(`Naziv: ${this.naziv} Povrsina: ${this.povrsina} Broj drveca: ${this.brojDrveca} Gustina drveca: ${this.gustocaDrveca}`);\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Park);\n\n//# sourceURL=webpack:///./model/park.js?");

/***/ }),

/***/ "./model/ulica.js":
/*!************************!*\
  !*** ./model/ulica.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ \"./model/element.js\");\n\r\n\r\nclass Ulica extends _element__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor(naziv, godina, duzina, velicina = 3) {\r\n        super(naziv, godina);\r\n        this.duzina = duzina;\r\n        this.velicina = velicina;\r\n    }\r\n    getInfo() {\r\n        console.log(`Naziv: ${this.naziv} Godina: ${this.godina} Duzina: ${this.duzina} Velicina: ${klasifikacija.get(this.velicina)}`);\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ulica);\n\n//# sourceURL=webpack:///./model/ulica.js?");

/***/ })

/******/ });