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
})(["grid-column:span 4;display:flex;align-items:center;h1{font-variant:small-caps;}"]);
var Avatar = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img.withConfig({
  componentId: "sc-1bx73jb-3"
})(["height:calc(var(--baseSpacing) * 2);border:5px black solid;display:none;@media screen and (min-width:780px){display:initial;}"]);
var Contacts = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  componentId: "sc-1bx73jb-4"
})(["grid-column:span 4;@media screen and (min-width:780px){grid-column:span 3;}"]);
var SkillsLeft = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  componentId: "sc-1bx73jb-5"
})(["grid-column:span 4;@media screen and (min-width:750px){grid-column:span 2;}"]);
var SkillsRight = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  componentId: "sc-1bx73jb-6"
})(["grid-column:span 4;@media screen and (min-width:750px){grid-column:span 2;}"]);
var List = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].ul.withConfig({
  componentId: "sc-1bx73jb-7"
})(["list-style-type:none;> li{width:100%;@media screen and (min-width:590px){display:flex;justify-content:space-between;}&>*{display:block;}}"]);

var calcAge = function calcAge(date) {
  return (_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()() - +new Date(date)) / 31557600000;
};

var Status = function Status() {
  var age = ~~calcAge('1988-04-21');
  var exp = calcAge('2011-01-01').toFixed(2);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BaseContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("article", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(GridContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Avatar, {
    src: "/static/avatar.png",
    alt: "My avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, "Dima Korolev")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Contacts, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, "Contacts"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(List, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, "Telegram:\xA0"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://t.me/dimakorolev",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, "@dimakorolev")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, "E-Mail:\xA0"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "mailto:dima@korolev.dk",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, "dima@korolev.dk")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, "Phone:\xA0"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, "+7 (926) 211-08-93")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SkillsLeft, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, "Dev skills"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(List, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, "Javascript"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, "React"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, "HTML"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, "CSS"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SkillsRight, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, "Team skills"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(List, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, "Team management"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, "Agile"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, "Developer relations"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, "Teaching"))))));
};

/***/ })

})
//# sourceMappingURL=index.js.8fd4c237a71d1134b7aa.hot-update.js.map