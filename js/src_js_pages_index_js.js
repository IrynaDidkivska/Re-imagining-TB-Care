"use strict";
(self["webpackChunkglivera_webpack_template"] = self["webpackChunkglivera_webpack_template"] || []).push([["src_js_pages_index_js"],{

/***/ "./src/js/pages/index.js":
/*!*******************************!*\
  !*** ./src/js/pages/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

var index = function index() {
  var menuToggle = document.querySelector('.btn__menu');
  menuToggle.addEventListener('click', function () {
    var navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
    menuToggle.classList.toggle('toggle');
    if (navbar.classList.contains('active')) {
      menuToggle.textContent = 'Close';
    } else {
      menuToggle.textContent = 'Menu';
    }
  });
  document.addEventListener('keydown', function (event) {
    if (event.code === 'Escape') {
      var navbar = document.querySelector('.navbar'); // Змініть '.showcase' на клас вашого модального вікна
      if (navbar.classList.contains('active')) {
        navbar.classList.remove('active');
        // Якщо є необхідність, змініть текст кнопки назад на 'Menu' або інший стандартний текст
        var menuButton = document.querySelector('.btn__menu');
        if (menuButton) {
          menuButton.textContent = 'Menu';
        }
      }
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);

/***/ })

}]);
//# sourceMappingURL=src_js_pages_index_js.js.map