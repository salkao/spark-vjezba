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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const klasifikacija = new Map();\r\nklasifikacija.set(1, 'prolaz');\r\nklasifikacija.set(2, 'mala');\r\nklasifikacija.set(3, 'normalna');\r\nklasifikacija.set(4, 'velika');\r\n\r\nclass Element {\r\n    constructor(naziv, godina) {\r\n        this.naziv = naziv;\r\n        this.godina = godina;\r\n    }\r\n}\r\n\r\nclass Park extends Element {\r\n    constructor(naziv, godina, povrsina, brojDrveca) {\r\n        super(naziv, godina);\r\n        this.povrsina = povrsina;\r\n        this.brojDrveca = brojDrveca;\r\n        this.gustocaDrveca = brojDrveca / (povrsina * 1000);\r\n    }\r\n    getInfo() {\r\n        console.log(`Naziv: ${this.naziv} Povrsina: ${this.povrsina} Broj drveca: ${this.brojDrveca} Gustina drveca: ${this.gustocaDrveca}`);\r\n    }\r\n}\r\n\r\nclass Ulica extends Element {\r\n    constructor(naziv, godina, duzina, velicina = 3) {\r\n        super(naziv, godina);\r\n        this.duzina = duzina;\r\n        this.velicina = velicina;\r\n    }\r\n    getInfo() {\r\n        console.log(`Naziv: ${this.naziv} Godina: ${this.godina} Duzina: ${this.duzina} Velicina: ${klasifikacija.get(this.velicina)}`);\r\n    }\r\n}\r\n\r\nconst parkovi = [\r\n    new Park('Park skojevaca', 1987, 0.2, 215), \r\n    new Park('Pionirski Park', 1894, 2.9, 3541), \r\n    new Park('Omladinski Park', 1953, 0.4, 949),\r\n];\r\nconst ulice = [\r\n    new Ulica('Trg Oslobođenja', 1971, 1.1, 4), \r\n    new Ulica('Gat proleterskih brigada', 1982, 2.7, 1), \r\n    new Ulica('Beogradska', 1974, 0.8), \r\n    new Ulica('Lenjingradska', 1982, 2.5, 2),\r\n    new Ulica('Trg Oktobarske revolucije', 1973, 4, 4),\r\n];\r\nconsole.log(`Parkovi`);\r\nfor (let i = 0; i < parkovi.length; i += 1) {\r\n    parkovi[i].getInfo();\r\n}\r\nconsole.log(`Ulice`);\r\nfor (let i = 0; i < ulice.length; i += 1) {\r\n    ulice[i].getInfo();\r\n}\r\n\r\nconst prosjecnaStarostParkova = () => {\r\n    let sum = 0;\r\n    for (let i = 0; i < parkovi.length; i += 1) {\r\n        sum += parkovi[i].godina;\r\n    }\r\n    return sum / parkovi.length;\r\n}\r\nconsole.log(`Prosjecna staros svih parkova iznosi ${prosjecnaStarostParkova()}`);\r\n\r\nconst parkoviPoBrojuDrveca = () => {\r\n    const sort = parkovi.sort((a, b) => b.brojDrveca - a.brojDrveca);\r\n    return sort;\r\n}\r\nconsole.log(parkoviPoBrojuDrveca());\r\n\r\nconst parkoviPoPovrsini = () => {\r\n    const sort = parkovi.sort((a, b) => b.povrsina - a.povrsina);\r\n    return sort;\r\n}\r\nconsole.log(parkoviPoPovrsini());\r\n\r\nconst ukupnaProsjecnaDuzinaUlica = () => {\r\n    let sum = 0;\r\n    for (let i = 0; i < ulice.length; i += 1) {\r\n        sum += ulice[i].duzina;\r\n    }\r\n    return `Ukupna duzina ulica: ${sum} Prosjecna duzina ulica: ${sum / ulice.length}`;\r\n}\r\n\r\nconsole.log(ukupnaProsjecnaDuzinaUlica());\r\n\r\nconst filterUlica = () => {\r\n    return ulica.godina > 80 && ulice.godina > 90;\r\n}\r\nconst uliceIz80ih = () => {\r\n    ulice.filter(filterUlica);\r\n}\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });