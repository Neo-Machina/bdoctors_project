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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/back.js":
/*!******************************!*\
  !*** ./resources/js/back.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

var checkbox = document.querySelectorAll(".my-check-input");
var my_edit_button = document.getElementById("btn-debug"); // my_button.addEventListener("click", myFunction);

var checked_cbx = false;

for (var i = 0; i < checkbox.length; i++) {
  if (checkbox[i].checked === true) {
    checked_cbx = true;
    break;
  } else {
    checked_cbx = false;
  }
} // se la variabile checked_cbx è false allora mostra l'elemento messaggio e disabilita il tasto modifica
// altrimenti se la variabile è true , riabilita il tasto modifica e nascondi l'elemento messaggio 


var msg_error_cbx = document.getElementById("my-checkbox-error");
var my_form_edit = document.getElementById("my-form-edit"); // se nessuna checkbox è spuntata mostra il messaggio di errore

if (checked_cbx === false) {
  msg_error_cbx.classList.replace('d-none', 'd-block');
} // console.log(checkbox);


console.log('checked_cbx', checked_cbx); // my_button.addEventListener("click", myFunction);
// function myFunction() {
//     // checked_cbx === true ? alert('checkbox spuntata') : alert('NO');
//     console.log('ciaone');
// }
// Modale conferma eliminazione profilo user

var myModal = document.getElementById('myModal');
var myInput = document.getElementById('myInput');
myModal.addEventListener('click', function () {
  myInput.classList.replace('d-none', 'd-block');
});

/***/ }),

/***/ 1:
/*!************************************!*\
  !*** multi ./resources/js/back.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Andrei\boolean_projects_class_66\laravel-projects\bdoctors_project\resources\js\back.js */"./resources/js/back.js");


/***/ })

/******/ });