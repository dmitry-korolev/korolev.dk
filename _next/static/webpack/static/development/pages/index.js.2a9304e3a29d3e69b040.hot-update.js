webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/templates/Status/Status.tsx":
/*!************************************************!*\
  !*** ./components/templates/Status/Status.tsx ***!
  \************************************************/
/*! exports provided: Status */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Status", function() { return Status; });
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "/Users/d.a.korolev/Projects/__personal/korolev.dk/components/templates/Status/Status.tsx";


var BaseContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].main.withConfig({
  componentId: "sc-1bx73jb-0"
})(["width:100%;min-height:100vh;padding:var(--baseSpacing);display:flex;align-items:center;& article{width:100%;}"]);
var GridContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  componentId: "sc-1bx73jb-1"
})(["display:grid;grid-template-columns:repeat(4,1fr);grid-auto-rows:minmax(max-content,max-content);grid-gap:var(--baseSpacing);"]);
var Header = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].header.withConfig({
  componentId: "sc-1bx73jb-2"
})(["grid-column:span 4;h1{font-variant:small-caps;}"]);
var Bio = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].section.withConfig({
  componentId: "sc-1bx73jb-3"
})(["grid-column:span 4;"]);
var Contacts = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].section.withConfig({
  componentId: "sc-1bx73jb-4"
})(["grid-column:span 4;@media screen and (min-width:780px){grid-column:span 3;}"]);
var List = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].ul.withConfig({
  componentId: "sc-1bx73jb-5"
})(["list-style-type:none;> li{width:100%;@media screen and (min-width:590px){display:flex;justify-content:space-between;}&>*{display:block;}}"]);

var calcAge = function calcAge(date) {
  return (_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()() - +new Date(date)) / 2629800000;
};

var Status = function Status() {
  var age = ~~(calcAge('1988-04-21') / 12);
  var exp = calcAge('2011-01-01');
  var years = ~~(exp / 12);
  var months = ~~(exp % 12);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BaseContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("article", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(GridContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, "Dima Korolev")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Bio, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "Bio"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, age, " years old, ", years, months > 0 ? "+" : '', " years of programming experience."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "I am currently working at ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://tinkoff.ru",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "Tinkoff"), ", the world's largest fully online bank, as a Frontend Team Lead."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "See more information at ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://www.linkedin.com/in/dmitry-korolev/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "my LinkedIn page"), ".")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Contacts, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "Contacts"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(List, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "Telegram:\xA0"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://t.me/dimakorolev",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "@dimakorolev")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, "E-Mail:\xA0"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "mailto:dima@korolev.dk",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, "dima@korolev.dk")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, "Phone:\xA0"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, "+7 (926) 211-08-93")))))));
};

/***/ })

})
//# sourceMappingURL=index.js.2a9304e3a29d3e69b040.hot-update.js.map