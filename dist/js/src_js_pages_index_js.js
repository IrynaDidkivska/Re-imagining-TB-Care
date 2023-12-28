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
  var menuBtn = document.getElementById('menuBtn');
  var navbarMenu = document.getElementById('navbarMenu');
  var closeBtn = document.getElementById('closeBtn');
  menuBtn.onclick = function (event) {
    navbarMenu.style.display = 'block';
  };
  closeBtn.onclick = function (event) {
    navbarMenu.style.display = 'none';
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);

/***/ })

}]);
//# sourceMappingURL=src_js_pages_index_js.js.map