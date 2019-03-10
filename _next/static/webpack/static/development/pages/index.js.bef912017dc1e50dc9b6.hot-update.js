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
})(["grid-column:span 4;display:flex;align-items:center;h1{font-variant:small-caps;margin:0;}"]);
var Avatar = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img.withConfig({
  componentId: "sc-1bx73jb-3"
})(["height:var(--h1height);width:var(--h1height);margin-right:var(--baseSpacing);border:2px black solid;display:none;@media screen and (min-width:780px){display:initial;}"]);
var Bio = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].section.withConfig({
  componentId: "sc-1bx73jb-4"
})(["grid-column:span 4;"]);
var Contacts = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].section.withConfig({
  componentId: "sc-1bx73jb-5"
})(["grid-column:span 4;@media screen and (min-width:780px){grid-column:span 3;}"]);
var SkillsLeft = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].section.withConfig({
  componentId: "sc-1bx73jb-6"
})(["grid-column:span 4;@media screen and (min-width:750px){grid-column:span 2;}"]);
var SkillsRight = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].section.withConfig({
  componentId: "sc-1bx73jb-7"
})(["grid-column:span 4;@media screen and (min-width:750px){grid-column:span 2;}"]);
var List = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].ul.withConfig({
  componentId: "sc-1bx73jb-8"
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
      lineNumber: 103
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("article", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(GridContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Avatar, {
    src: "/static/avatar.png",
    alt: "My avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, "Dima Korolev")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Bio, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, "Bio"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, age, " years old, ", years, months > 0 ? "+" : '', " years of programming experience."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Contacts, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, "Contacts"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(List, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, "Telegram:\xA0"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://t.me/dimakorolev",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, "@dimakorolev")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, "E-Mail:\xA0"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "mailto:dima@korolev.dk",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, "dima@korolev.dk")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, "Phone:\xA0"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, "+7 (926) 211-08-93")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SkillsLeft, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, "Dev skills"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(List, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, "Javascript"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, "React"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, "HTML"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, "CSS"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SkillsRight, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, "Team skills"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(List, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, "Team management"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, "Agile"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, "Developer relations"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, "Teaching"))))));
};

/***/ })

})
//# sourceMappingURL=index.js.bef912017dc1e50dc9b6.hot-update.js.map