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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/d.a.korolev/Projects/__personal/korolev.dk/components/templates/Status/Status.tsx";


var BaseContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].main.withConfig({
  componentId: "sc-1bx73jb-0"
})(["width:100%;min-height:100vh;padding:var(--baseSpacing);display:flex;align-items:center;& article{width:100%;}"]);
var GridContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  componentId: "sc-1bx73jb-1"
})(["display:grid;grid-template-columns:repeat(4,1fr);grid-template-rows:minmax(max-content,max-content) minmax(max-content,max-content) 1fr;grid-gap:var(--baseSpacing);"]);
var Header = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].header.withConfig({
  componentId: "sc-1bx73jb-2"
})(["grid-column:span 4;& >:first-child{font-variant:small-caps;}"]);
var Avatar = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  componentId: "sc-1bx73jb-3"
})(["height:calc(var(--baseSpacing) * 6);margin-bottom:var(--baseSpacing);border:5px black solid;display:none;@media "]);
var Contacts = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  componentId: "sc-1bx73jb-4"
})(["grid-column:span 3;"]);
var SkillsLeft = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  componentId: "sc-1bx73jb-5"
})(["grid-column:span 2;"]);
var SkillsRight = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  componentId: "sc-1bx73jb-6"
})(["grid-column:span 2;"]);
var List = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].ul.withConfig({
  componentId: "sc-1bx73jb-7"
})(["list-style-type:none;> li{display:flex;justify-content:space-between;width:100%;}"]); // const calcAge = (date: string) => ((Date.now() - +new Date(date)) / 31557600000)

var Status = function Status() {
  // const age = ~~calcAge('1988-04-21')
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BaseContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GridContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "Dima Korolev"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "Frontend team leader @ Tinkoff.ru")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Avatar, {
    src: "/static/avatar.png",
    alt: "My avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Contacts, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "Contacts"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(List, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "Telegram:\xA0"), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://t.me/dimakorolev",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "@dimakorolev")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "E-Mail:\xA0"), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "mailto:dima@korolev.dk",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "dima@korolev.dk")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "Phone:\xA0"), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "+7 (926) 211-08-93")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SkillsLeft, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, "Dev skills"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(List, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, "Javascript"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, "React"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, "HTML"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, "CSS"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SkillsRight, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, "Team skills"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(List, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, "Team management"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, "Agile"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, "Developer relations"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, "Teaching"))))));
};

/***/ })

})
//# sourceMappingURL=index.js.770a77065db8aefabc23.hot-update.js.map