module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/CultureBlog.js":
/*!***********************************!*\
  !*** ./components/CultureBlog.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Ryan Booth\\Documents\\CodingProj-Feb\\Chiedo-Labs-Homepage\\Chiedo-labs-homepage-rebuild\\components\\CultureBlog.js";




var CultureBlog = function CultureBlog() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    fluid: true,
    style: {
      lineHeight: '32px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    lg: 9,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-1471395879",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Start-up Culture, Corporate-Grade Service."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1471395879",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1471395879",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "We create an atmosphere that fosters creativity and professionalism. In this way, we allow our team to hone your vision with our digital strategy and build realities that will take your business to the next level.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    lg: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-1471395879" + " " + "redText",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Featured"), " Post"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1471395879",
    __self: this
  }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcUnlhbiBCb290aFxcRG9jdW1lbnRzXFxDb2RpbmdQcm9qLUZlYlxcQ2hpZWRvLUxhYnMtSG9tZXBhZ2VcXENoaWVkby1sYWJzLWhvbWVwYWdlLXJlYnVpbGRcXGNvbXBvbmVudHNcXEN1bHR1cmVCbG9nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdrQiIsImZpbGUiOiJDOlxcVXNlcnNcXFJ5YW4gQm9vdGhcXERvY3VtZW50c1xcQ29kaW5nUHJvai1GZWJcXENoaWVkby1MYWJzLUhvbWVwYWdlXFxDaGllZG8tbGFicy1ob21lcGFnZS1yZWJ1aWxkXFxjb21wb25lbnRzXFxDdWx0dXJlQmxvZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXHJcblxyXG5jb25zdCBDdWx0dXJlQmxvZyA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8Q29udGFpbmVyIGZsdWlkIHN0eWxlPXt7IGxpbmVIZWlnaHQ6ICczMnB4JyB9fT5cclxuICAgICAgICA8Um93PlxyXG4gICAgICAgICAgPENvbCBsZz17OX0+PGgzPlN0YXJ0LXVwIEN1bHR1cmUsIENvcnBvcmF0ZS1HcmFkZSBTZXJ2aWNlLjwvaDM+PGJyLz48cD5XZSBjcmVhdGUgYW4gYXRtb3NwaGVyZSB0aGF0IGZvc3RlcnMgY3JlYXRpdml0eSBhbmQgcHJvZmVzc2lvbmFsaXNtLiBJbiB0aGlzIHdheSwgd2UgYWxsb3cgb3VyIHRlYW0gdG8gaG9uZSB5b3VyIHZpc2lvbiB3aXRoIG91ciBkaWdpdGFsIHN0cmF0ZWd5IGFuZCBidWlsZCByZWFsaXRpZXMgdGhhdCB3aWxsIHRha2UgeW91ciBidXNpbmVzcyB0byB0aGUgbmV4dCBsZXZlbC48L3A+PC9Db2w+XHJcbiAgICAgICAgICA8Q29sIGxnPXszfT48c3BhbiBjbGFzc05hbWU9XCJyZWRUZXh0XCI+RmVhdHVyZWQ8L3NwYW4+IFBvc3Q8L0NvbD5cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2AgXHJcbiAgICAgICAgXHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQ3VsdHVyZUJsb2ciXX0= */\n/*@ sourceURL=C:\\Users\\Ryan Booth\\Documents\\CodingProj-Feb\\Chiedo-Labs-Homepage\\Chiedo-labs-homepage-rebuild\\components\\CultureBlog.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (CultureBlog);

/***/ }),

/***/ "./components/FoundingMembers.js":
/*!***************************************!*\
  !*** ./components/FoundingMembers.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Ryan Booth\\Documents\\CodingProj-Feb\\Chiedo-Labs-Homepage\\Chiedo-labs-homepage-rebuild\\components\\FoundingMembers.js";




var FoundingMembers = function FoundingMembers() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    className: "foundersBlock",
    fluid: true,
    style: {
      lineHeight: '32px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-1471395879",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Our Founding Web Developers")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1471395879",
    __self: this
  }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcUnlhbiBCb290aFxcRG9jdW1lbnRzXFxDb2RpbmdQcm9qLUZlYlxcQ2hpZWRvLUxhYnMtSG9tZXBhZ2VcXENoaWVkby1sYWJzLWhvbWVwYWdlLXJlYnVpbGRcXGNvbXBvbmVudHNcXEZvdW5kaW5nTWVtYmVycy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTa0IiLCJmaWxlIjoiQzpcXFVzZXJzXFxSeWFuIEJvb3RoXFxEb2N1bWVudHNcXENvZGluZ1Byb2otRmViXFxDaGllZG8tTGFicy1Ib21lcGFnZVxcQ2hpZWRvLWxhYnMtaG9tZXBhZ2UtcmVidWlsZFxcY29tcG9uZW50c1xcRm91bmRpbmdNZW1iZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENvbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcclxuXHJcbmNvbnN0IEZvdW5kaW5nTWVtYmVycyA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuXHJcbiAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJmb3VuZGVyc0Jsb2NrXCIgZmx1aWQgc3R5bGU9e3sgbGluZUhlaWdodDogJzMycHgnIH19PlxyXG4gICAgICAgICAgPGgzPk91ciBGb3VuZGluZyBXZWIgRGV2ZWxvcGVyczwvaDM+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2AgXHJcbiAgICAgICAgXHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRm91bmRpbmdNZW1iZXJzIl19 */\n/*@ sourceURL=C:\\Users\\Ryan Booth\\Documents\\CodingProj-Feb\\Chiedo-Labs-Homepage\\Chiedo-labs-homepage-rebuild\\components\\FoundingMembers.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (FoundingMembers);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Ryan Booth\\Documents\\CodingProj-Feb\\Chiedo-Labs-Homepage\\Chiedo-labs-homepage-rebuild\\components\\Header.js";




var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4192912107" + " " + "banner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://labs.chiedo.com",
    className: "jsx-4192912107",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "https://labs.chiedo.com/wp-content/themes/chiedolabs/img/b-logo-white.png?ver=1.11",
    alt: "Chiedo Labs Web Development Harrisonburg VA & Charlottesville VA web design",
    width: "225",
    className: "jsx-4192912107",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"], {
    id: "nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
    className: "mr-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "ABOUT US"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "PORTFOLIO"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "WHAT WE DO"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "WHO WE SERVE"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "CONTACT US"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    fluid: true,
    id: "callToAction",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-4192912107" + " " + "callText callMain",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "YOUR NEW WEB DEVELOPERS"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-4192912107" + " " + "callText",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "We\u2019re a team of web developers passionate about building stable, maintainable software for tech startups and enterprise customers.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    fluid: true,
    id: "ourTeam",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-4192912107",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Hire our team to:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-4192912107",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Build and maintain: Web applications Web back-ends Web front-ends Custom websites")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4192912107",
    __self: this
  }, ".banner.jsx-4192912107{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background-color:black;width:100vw;height:19vh;}.callMain.jsx-4192912107{font-size:5em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcUnlhbiBCb290aFxcRG9jdW1lbnRzXFxDb2RpbmdQcm9qLUZlYlxcQ2hpZWRvLUxhYnMtSG9tZXBhZ2VcXENoaWVkby1sYWJzLWhvbWVwYWdlLXJlYnVpbGRcXGNvbXBvbmVudHNcXEhlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQmdCLEFBRzBCLEFBU0MsY0FDbEIsNERBVHVCLDZGQUNJLG1HQUNBLHVCQUNYLFlBQ0EsWUFDaEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxSeWFuIEJvb3RoXFxEb2N1bWVudHNcXENvZGluZ1Byb2otRmViXFxDaGllZG8tTGFicy1Ib21lcGFnZVxcQ2hpZWRvLWxhYnMtaG9tZXBhZ2UtcmVidWlsZFxcY29tcG9uZW50c1xcSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBOYXZiYXIsIE5hdiwgQnV0dG9uLCBDb250YWluZXIgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IChcclxuICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyXCI+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2xhYnMuY2hpZWRvLmNvbVwiPjxpbWcgc3JjPVwiaHR0cHM6Ly9sYWJzLmNoaWVkby5jb20vd3AtY29udGVudC90aGVtZXMvY2hpZWRvbGFicy9pbWcvYi1sb2dvLXdoaXRlLnBuZz92ZXI9MS4xMVwiIGFsdD1cIkNoaWVkbyBMYWJzIFdlYiBEZXZlbG9wbWVudCBIYXJyaXNvbmJ1cmcgVkEgJiBDaGFybG90dGVzdmlsbGUgVkEgd2ViIGRlc2lnblwiIHdpZHRoPVwiMjI1XCIgLz48L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICBcclxuICAgICAgICA8TmF2YmFyICBpZD1cIm5hdlwiPlxyXG4gICAgICAgICAgICA8TmF2IGNsYXNzTmFtZT1cIm1yLWF1dG9cIj5cclxuICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIjXCI+QUJPVVQgVVM8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIiNcIj5QT1JURk9MSU88L05hdi5MaW5rPlxyXG4gICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIiNcIj5XSEFUIFdFIERPPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIjXCI+V0hPIFdFIFNFUlZFPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIjXCI+Q09OVEFDVCBVUzwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgIDwvTmF2YmFyPlxyXG4gICAgICAgIDxDb250YWluZXIgZmx1aWQgaWQ9XCJjYWxsVG9BY3Rpb25cIj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImNhbGxUZXh0IGNhbGxNYWluXCI+WU9VUiBORVcgV0VCIERFVkVMT1BFUlM8L2gxPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYWxsVGV4dFwiPldl4oCZcmUgYSB0ZWFtIG9mIHdlYiBkZXZlbG9wZXJzIHBhc3Npb25hdGUgYWJvdXQgYnVpbGRpbmcgc3RhYmxlLCBtYWludGFpbmFibGUgc29mdHdhcmUgZm9yIHRlY2ggc3RhcnR1cHMgYW5kIGVudGVycHJpc2UgY3VzdG9tZXJzLjwvcD5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8Q29udGFpbmVyIGZsdWlkIGlkPVwib3VyVGVhbVwiPlxyXG4gICAgICAgICAgICA8aDM+SGlyZSBvdXIgdGVhbSB0bzo8L2gzPlxyXG4gICAgICAgICAgICA8cD5CdWlsZCBhbmQgbWFpbnRhaW46IFdlYiBhcHBsaWNhdGlvbnMgV2ViIGJhY2stZW5kcyBXZWIgZnJvbnQtZW5kcyBDdXN0b20gd2Vic2l0ZXM8L3A+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmJhbm5lciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE5dmg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5jYWxsTWFpbntcclxuICAgICAgICAgICAgZm9udC1zaXplOiA1ZW07XHJcbiAgICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gICAgPC8+XHJcbiAgICAgICAgKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyIl19 */\n/*@ sourceURL=C:\\Users\\Ryan Booth\\Documents\\CodingProj-Feb\\Chiedo-Labs-Homepage\\Chiedo-labs-homepage-rebuild\\components\\Header.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-server/head */ "next-server/head");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_server_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Ryan Booth\\Documents\\CodingProj-Feb\\Chiedo-Labs-Homepage\\Chiedo-labs-homepage-rebuild\\components\\Layout.js";



var Layout = function Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_server_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "Chiedo Labs"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css",
    integrity: "sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS",
    crossorigin: "anonymous",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, props.children));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/MoreLinks.js":
/*!*********************************!*\
  !*** ./components/MoreLinks.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Ryan Booth\\Documents\\CodingProj-Feb\\Chiedo-Labs-Homepage\\Chiedo-labs-homepage-rebuild\\components\\MoreLinks.js";




var MoreLinks = function MoreLinks() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    fluid: true,
    style: {
      lineHeight: '32px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    lg: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-1471395879" + " " + "redText",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "More Links")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    lg: 9,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-1471395879",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Meet Our Founder"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1471395879",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1471395879",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "If you need new web developers or want to talk about your tech startup, let's connect on LinkedIn and meet for lunch or coffee!")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1471395879",
    __self: this
  }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcUnlhbiBCb290aFxcRG9jdW1lbnRzXFxDb2RpbmdQcm9qLUZlYlxcQ2hpZWRvLUxhYnMtSG9tZXBhZ2VcXENoaWVkby1sYWJzLWhvbWVwYWdlLXJlYnVpbGRcXGNvbXBvbmVudHNcXE1vcmVMaW5rcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXa0IiLCJmaWxlIjoiQzpcXFVzZXJzXFxSeWFuIEJvb3RoXFxEb2N1bWVudHNcXENvZGluZ1Byb2otRmViXFxDaGllZG8tTGFicy1Ib21lcGFnZVxcQ2hpZWRvLWxhYnMtaG9tZXBhZ2UtcmVidWlsZFxcY29tcG9uZW50c1xcTW9yZUxpbmtzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENvbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcclxuXHJcbmNvbnN0IE1vcmVMaW5rcyA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8Q29udGFpbmVyIGZsdWlkIHN0eWxlPXt7IGxpbmVIZWlnaHQ6ICczMnB4JyB9fT5cclxuICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICA8Q29sIGxnPXszfT48c3BhbiBjbGFzc05hbWU9XCJyZWRUZXh0XCI+TW9yZSBMaW5rczwvc3Bhbj48L0NvbD5cclxuICAgICAgICAgICAgPENvbCBsZz17OX0+PGgzPk1lZXQgT3VyIEZvdW5kZXI8L2gzPjxici8+PHA+SWYgeW91IG5lZWQgbmV3IHdlYiBkZXZlbG9wZXJzIG9yIHdhbnQgdG8gdGFsayBhYm91dCB5b3VyIHRlY2ggc3RhcnR1cCwgbGV0J3MgY29ubmVjdCBvbiBMaW5rZWRJbiBhbmQgbWVldCBmb3IgbHVuY2ggb3IgY29mZmVlITwvcD48L0NvbD5cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2AgXHJcbiAgICAgICAgXHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTW9yZUxpbmtzIl19 */\n/*@ sourceURL=C:\\Users\\Ryan Booth\\Documents\\CodingProj-Feb\\Chiedo-Labs-Homepage\\Chiedo-labs-homepage-rebuild\\components\\MoreLinks.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (MoreLinks);

/***/ }),

/***/ "./components/Portfolio.js":
/*!*********************************!*\
  !*** ./components/Portfolio.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Ryan Booth\\Documents\\CodingProj-Feb\\Chiedo-Labs-Homepage\\Chiedo-labs-homepage-rebuild\\components\\Portfolio.js";




var Portfolio = function Portfolio() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    fluid: true,
    style: {
      lineHeight: '32px',
      width: '100vw'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    className: "justify-content-md-center",
    style: {
      width: '100vw'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    lg: 2.4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Placeholder"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    lg: 2.4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Placeholder"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    lg: 2.4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Placeholder"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    lg: 2.4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Placeholder"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    lg: 2.4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Placeholder")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    className: "justify-content-md-center",
    style: {
      width: '100vw'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    lg: 2.4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Placeholder"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    lg: 2.4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Placeholder"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    lg: 2.4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Placeholder"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    lg: 2.4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Placeholder"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    lg: 2.4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Placeholder"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1471395879",
    __self: this
  }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcUnlhbiBCb290aFxcRG9jdW1lbnRzXFxDb2RpbmdQcm9qLUZlYlxcQ2hpZWRvLUxhYnMtSG9tZXBhZ2VcXENoaWVkby1sYWJzLWhvbWVwYWdlLXJlYnVpbGRcXGNvbXBvbmVudHNcXFBvcnRmb2xpby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQmtCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcUnlhbiBCb290aFxcRG9jdW1lbnRzXFxDb2RpbmdQcm9qLUZlYlxcQ2hpZWRvLUxhYnMtSG9tZXBhZ2VcXENoaWVkby1sYWJzLWhvbWVwYWdlLXJlYnVpbGRcXGNvbXBvbmVudHNcXFBvcnRmb2xpby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXHJcblxyXG5jb25zdCBQb3J0Zm9saW8gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPENvbnRhaW5lciBmbHVpZCBzdHlsZT17eyBsaW5lSGVpZ2h0OiAnMzJweCcsIHdpZHRoOiAnMTAwdncnIH19PlxyXG4gICAgICAgIDxSb3cgY2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LW1kLWNlbnRlclwiIHN0eWxlPXt7IHdpZHRoOiAnMTAwdncnIH19PlxyXG4gICAgICAgICAgICA8Q29sIGxnPXsyLjR9PlBsYWNlaG9sZGVyPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgbGc9ezIuNH0+UGxhY2Vob2xkZXI8L0NvbD5cclxuICAgICAgICAgICAgPENvbCBsZz17Mi40fT5QbGFjZWhvbGRlcjwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIGxnPXsyLjR9PlBsYWNlaG9sZGVyPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgbGc9ezIuNH0+UGxhY2Vob2xkZXI8L0NvbD5cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8Um93IGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1tZC1jZW50ZXJcIiBzdHlsZT17eyB3aWR0aDogJzEwMHZ3JyB9fT5cclxuICAgICAgICAgICAgPENvbCBsZz17Mi40fT5QbGFjZWhvbGRlcjwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIGxnPXsyLjR9PlBsYWNlaG9sZGVyPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgbGc9ezIuNH0+UGxhY2Vob2xkZXI8L0NvbD5cclxuICAgICAgICAgICAgPENvbCBsZz17Mi40fT5QbGFjZWhvbGRlcjwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIGxnPXsyLjR9PlBsYWNlaG9sZGVyPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8c3R5bGUganN4PntgIFxyXG4gICAgICAgIFxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFBvcnRmb2xpbyJdfQ== */\n/*@ sourceURL=C:\\Users\\Ryan Booth\\Documents\\CodingProj-Feb\\Chiedo-Labs-Homepage\\Chiedo-labs-homepage-rebuild\\components\\Portfolio.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Portfolio);

/***/ }),

/***/ "./components/WhatWeDo.js":
/*!********************************!*\
  !*** ./components/WhatWeDo.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Ryan Booth\\Documents\\CodingProj-Feb\\Chiedo-Labs-Homepage\\Chiedo-labs-homepage-rebuild\\components\\WhatWeDo.js";


 // import { codeImage } from '../.next/static/images/numbers.png';

var WhatWeDo = function WhatWeDo() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    fluid: true,
    style: {
      lineHeight: '32px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    id: "WhatWeDo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-1471395879",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-1471395879" + " " + "redText",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "WHAT"), " WE DO"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1471395879",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "We build and maintain:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1471395879",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Web Front-Ends with HTML, CSS, and a library called React."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1471395879",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Web Back-ends using NodeJS, Ruby on Rails, PHP, MySQL, AWS, and Heroku."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1471395879",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Custom Websites from the ground up as opposed to using pre-existing templates.")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1471395879",
    __self: this
  }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcUnlhbiBCb290aFxcRG9jdW1lbnRzXFxDb2RpbmdQcm9qLUZlYlxcQ2hpZWRvLUxhYnMtSG9tZXBhZ2VcXENoaWVkby1sYWJzLWhvbWVwYWdlLXJlYnVpbGRcXGNvbXBvbmVudHNcXFdoYXRXZURvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Ca0IiLCJmaWxlIjoiQzpcXFVzZXJzXFxSeWFuIEJvb3RoXFxEb2N1bWVudHNcXENvZGluZ1Byb2otRmViXFxDaGllZG8tTGFicy1Ib21lcGFnZVxcQ2hpZWRvLWxhYnMtaG9tZXBhZ2UtcmVidWlsZFxcY29tcG9uZW50c1xcV2hhdFdlRG8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ29sIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xyXG4vLyBpbXBvcnQgeyBjb2RlSW1hZ2UgfSBmcm9tICcuLi8ubmV4dC9zdGF0aWMvaW1hZ2VzL251bWJlcnMucG5nJztcclxuY29uc3QgV2hhdFdlRG8gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcblxyXG4gICAgICAgIDxDb250YWluZXIgZmx1aWQgc3R5bGU9e3sgbGluZUhlaWdodDogJzMycHgnIH19PlxyXG4gICAgICAgIDxSb3c+XHJcbiAgICAgICAgICB7LyogPENvbD48aW1nIHNyYz17Y29kZUltYWdlfS8+PC9Db2w+ICovfVxyXG4gICAgICAgICAgPENvbD48L0NvbD5cclxuICAgICAgICAgIDxDb2wgaWQ9XCJXaGF0V2VEb1wiPlxyXG4gICAgICAgICAgICA8aDM+PHNwYW4gY2xhc3NOYW1lPVwicmVkVGV4dFwiPldIQVQ8L3NwYW4+IFdFIERPPC9oMz5cclxuICAgICAgICAgICAgPHA+V2UgYnVpbGQgYW5kIG1haW50YWluOjwvcD5cclxuICAgICAgICAgICAgPHA+V2ViIEZyb250LUVuZHMgd2l0aCBIVE1MLCBDU1MsIGFuZCBhIGxpYnJhcnkgY2FsbGVkIFJlYWN0LjwvcD5cclxuICAgICAgICAgICAgPHA+V2ViIEJhY2stZW5kcyB1c2luZyBOb2RlSlMsIFJ1Ynkgb24gUmFpbHMsIFBIUCwgTXlTUUwsIEFXUywgYW5kIEhlcm9rdS48L3A+XHJcbiAgICAgICAgICAgIDxwPkN1c3RvbSBXZWJzaXRlcyBmcm9tIHRoZSBncm91bmQgdXAgYXMgb3Bwb3NlZCB0byB1c2luZyBwcmUtZXhpc3RpbmcgdGVtcGxhdGVzLjwvcD5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8c3R5bGUganN4PntgIFxyXG4gICAgICAgIFxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFdoYXRXZURvIl19 */\n/*@ sourceURL=C:\\Users\\Ryan Booth\\Documents\\CodingProj-Feb\\Chiedo-Labs-Homepage\\Chiedo-labs-homepage-rebuild\\components\\WhatWeDo.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (WhatWeDo);

/***/ }),

/***/ "./components/WhoWeServe.js":
/*!**********************************!*\
  !*** ./components/WhoWeServe.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Ryan Booth\\Documents\\CodingProj-Feb\\Chiedo-Labs-Homepage\\Chiedo-labs-homepage-rebuild\\components\\WhoWeServe.js";




var WhoWeServe = function WhoWeServe() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    id: "WhoWeServe",
    fluid: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-1471395879",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-1471395879" + " " + "redText",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "WHO"), " WE SERVE"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1471395879",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1471395879",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-1471395879" + " " + "redText",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Enterprise customers"), " hire us to build and maintain the web apps critical to their operations.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1471395879",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-1471395879" + " " + "redText",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Tech startups"), " partner with us to build and maintain the web front-ends and back-ends at the core of their business.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1471395879",
    __self: this
  }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcUnlhbiBCb290aFxcRG9jdW1lbnRzXFxDb2RpbmdQcm9qLUZlYlxcQ2hpZWRvLUxhYnMtSG9tZXBhZ2VcXENoaWVkby1sYWJzLWhvbWVwYWdlLXJlYnVpbGRcXGNvbXBvbmVudHNcXFdob1dlU2VydmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY2tCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcUnlhbiBCb290aFxcRG9jdW1lbnRzXFxDb2RpbmdQcm9qLUZlYlxcQ2hpZWRvLUxhYnMtSG9tZXBhZ2VcXENoaWVkby1sYWJzLWhvbWVwYWdlLXJlYnVpbGRcXGNvbXBvbmVudHNcXFdob1dlU2VydmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ29sIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xyXG5cclxuY29uc3QgV2hvV2VTZXJ2ZSA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuXHJcbiAgICAgICAgPENvbnRhaW5lciBpZD1cIldob1dlU2VydmVcIiBmbHVpZCA+XHJcbiAgICAgICAgPFJvdz5cclxuICAgICAgICAgIDxDb2w+PGgzPjxzcGFuIGNsYXNzTmFtZT1cInJlZFRleHRcIj5XSE88L3NwYW4+IFdFIFNFUlZFPC9oMz48YnIvPjxwPjxzcGFuIGNsYXNzTmFtZT1cInJlZFRleHRcIj5FbnRlcnByaXNlIGN1c3RvbWVyczwvc3Bhbj4gaGlyZSB1cyB0byBidWlsZCBhbmQgbWFpbnRhaW4gdGhlIHdlYiBhcHBzIGNyaXRpY2FsIHRvIHRoZWlyIG9wZXJhdGlvbnMuIFxyXG4gICAgICAgICAgPGJyLz48c3BhbiBjbGFzc05hbWU9XCJyZWRUZXh0XCI+VGVjaCBzdGFydHVwczwvc3Bhbj4gcGFydG5lciB3aXRoIHVzIHRvIGJ1aWxkIGFuZCBtYWludGFpbiB0aGUgd2ViIGZyb250LWVuZHMgYW5kIGJhY2stZW5kcyBhdCB0aGUgY29yZSBvZiB0aGVpciBidXNpbmVzcy48L3A+PC9Db2w+XHJcbiAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8c3R5bGUganN4PntgIFxyXG4gICAgICAgIFxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFdob1dlU2VydmUiXX0= */\n/*@ sourceURL=C:\\Users\\Ryan Booth\\Documents\\CodingProj-Feb\\Chiedo-Labs-Homepage\\Chiedo-labs-homepage-rebuild\\components\\WhoWeServe.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (WhoWeServe);

/***/ }),

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheet);

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#".concat(name, "-deleted-rule____{}");
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  _createClass(StyleSheet, [{
    key: "setOptimizeForSpeed",
    value: function setOptimizeForSpeed(bool) {
      invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
      invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
      this.flush();
      this._optimizeForSpeed = bool;
      this.inject();
    }
  }, {
    key: "isOptimizeForSpeed",
    value: function isOptimizeForSpeed() {
      return this._optimizeForSpeed;
    }
  }, {
    key: "inject",
    value: function inject() {
      var _this = this;

      invariant(!this._injected, 'sheet already injected');
      this._injected = true;

      if (this._isBrowser && this._optimizeForSpeed) {
        this._tags[0] = this.makeStyleTag(this._name);
        this._optimizeForSpeed = 'insertRule' in this.getSheet();

        if (!this._optimizeForSpeed) {
          if (!isProd) {
            console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
          }

          this.flush();
          this._injected = true;
        }

        return;
      }

      this._serverSheet = {
        cssRules: [],
        insertRule: function insertRule(rule, index) {
          if (typeof index === 'number') {
            _this._serverSheet.cssRules[index] = {
              cssText: rule
            };
          } else {
            _this._serverSheet.cssRules.push({
              cssText: rule
            });
          }

          return index;
        },
        deleteRule: function deleteRule(index) {
          _this._serverSheet.cssRules[index] = null;
        }
      };
    }
  }, {
    key: "getSheetForTag",
    value: function getSheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet;
      } // this weirdness brought to you by firefox


      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          return document.styleSheets[i];
        }
      }
    }
  }, {
    key: "getSheet",
    value: function getSheet() {
      return this.getSheetForTag(this._tags[this._tags.length - 1]);
    }
  }, {
    key: "insertRule",
    value: function insertRule(rule, index) {
      invariant(isString(rule), '`insertRule` accepts only strings');

      if (!this._isBrowser) {
        if (typeof index !== 'number') {
          index = this._serverSheet.cssRules.length;
        }

        this._serverSheet.insertRule(rule, index);

        return this._rulesCount++;
      }

      if (this._optimizeForSpeed) {
        var sheet = this.getSheet();

        if (typeof index !== 'number') {
          index = sheet.cssRules.length;
        } // this weirdness for perf, and chrome's weird bug
        // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          }

          return -1;
        }
      } else {
        var insertionPoint = this._tags[index];

        this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
      }

      return this._rulesCount++;
    }
  }, {
    key: "replaceRule",
    value: function replaceRule(index, rule) {
      if (this._optimizeForSpeed || !this._isBrowser) {
        var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

        if (!rule.trim()) {
          rule = this._deletedRulePlaceholder;
        }

        if (!sheet.cssRules[index]) {
          // @TBD Should we throw an error?
          return index;
        }

        sheet.deleteRule(index);

        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          } // In order to preserve the indices we insert a deleteRulePlaceholder


          sheet.insertRule(this._deletedRulePlaceholder, index);
        }
      } else {
        var tag = this._tags[index];
        invariant(tag, "old rule at index `".concat(index, "` not found"));
        tag.textContent = rule;
      }

      return index;
    }
  }, {
    key: "deleteRule",
    value: function deleteRule(index) {
      if (!this._isBrowser) {
        this._serverSheet.deleteRule(index);

        return;
      }

      if (this._optimizeForSpeed) {
        this.replaceRule(index, '');
      } else {
        var tag = this._tags[index];
        invariant(tag, "rule at index `".concat(index, "` not found"));
        tag.parentNode.removeChild(tag);
        this._tags[index] = null;
      }
    }
  }, {
    key: "flush",
    value: function flush() {
      this._injected = false;
      this._rulesCount = 0;

      if (this._isBrowser) {
        this._tags.forEach(function (tag) {
          return tag && tag.parentNode.removeChild(tag);
        });

        this._tags = [];
      } else {
        // simpler on server
        this._serverSheet.cssRules = [];
      }
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this2 = this;

      if (!this._isBrowser) {
        return this._serverSheet.cssRules;
      }

      return this._tags.reduce(function (rules, tag) {
        if (tag) {
          rules = rules.concat(_this2.getSheetForTag(tag).cssRules.map(function (rule) {
            return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
          }));
        } else {
          rules.push(null);
        }

        return rules;
      }, []);
    }
  }, {
    key: "makeStyleTag",
    value: function makeStyleTag(name, cssString, relativeToTag) {
      if (cssString) {
        invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
      }

      var tag = document.createElement('style');
      if (this._nonce) tag.setAttribute('nonce', this._nonce);
      tag.type = 'text/css';
      tag.setAttribute("data-".concat(name), '');

      if (cssString) {
        tag.appendChild(document.createTextNode(cssString));
      }

      var head = document.head || document.getElementsByTagName('head')[0];

      if (relativeToTag) {
        head.insertBefore(tag, relativeToTag);
      } else {
        head.appendChild(tag);
      }

      return tag;
    }
  }, {
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports.default = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flush = flush;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styleSheetRegistry = new _stylesheetRegistry.default();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inherits(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _classCallCheck(this, JSXStyle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(JSXStyle).call(this, props));
    _this.prevProps = {};
    return _this;
  }

  _createClass(JSXStyle, [{
    key: "shouldComponentUpdate",
    // probably faster than PureComponent (shallowEqual)
    value: function shouldComponentUpdate(otherProps) {
      return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
      // These are the computed values for dynamic styles.
      String(this.props.dynamic) !== String(otherProps.dynamic);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      styleSheetRegistry.remove(this.props);
    }
  }, {
    key: "render",
    value: function render() {
      // This is a workaround to make the side effect async safe in the "render" phase.
      // See https://github.com/zeit/styled-jsx/pull/484
      if (this.shouldComponentUpdate(this.prevProps)) {
        // Updates
        if (this.prevProps.id) {
          styleSheetRegistry.remove(this.prevProps);
        }

        styleSheetRegistry.add(this.props);
        this.prevProps = this.props;
      }

      return null;
    }
  }], [{
    key: "dynamic",
    value: function dynamic(info) {
      return info.map(function (tagInfo) {
        var baseId = tagInfo[0];
        var props = tagInfo[1];
        return styleSheetRegistry.computeId(baseId, props);
      }).join(' ');
    }
  }]);

  return JSXStyle;
}(_react.Component);

exports.default = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheetRegistry);

    this._sheet = styleSheet || new _stylesheet.default({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  _createClass(StyleSheetRegistry, [{
    key: "add",
    value: function add(props) {
      var _this = this;

      if (undefined === this._optimizeForSpeed) {
        this._optimizeForSpeed = Array.isArray(props.children);

        this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

        this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
      }

      if (this._isBrowser && !this._fromServer) {
        this._fromServer = this.selectFromServer();
        this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
          acc[tagName] = 0;
          return acc;
        }, {});
      }

      var _this$getIdAndRules = this.getIdAndRules(props),
          styleId = _this$getIdAndRules.styleId,
          rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


      if (styleId in this._instancesCounts) {
        this._instancesCounts[styleId] += 1;
        return;
      }

      var indices = rules.map(function (rule) {
        return _this._sheet.insertRule(rule);
      }) // Filter out invalid rules
      .filter(function (index) {
        return index !== -1;
      });
      this._indices[styleId] = indices;
      this._instancesCounts[styleId] = 1;
    }
  }, {
    key: "remove",
    value: function remove(props) {
      var _this2 = this;

      var _this$getIdAndRules2 = this.getIdAndRules(props),
          styleId = _this$getIdAndRules2.styleId;

      invariant(styleId in this._instancesCounts, "styleId: `".concat(styleId, "` not found"));
      this._instancesCounts[styleId] -= 1;

      if (this._instancesCounts[styleId] < 1) {
        var tagFromServer = this._fromServer && this._fromServer[styleId];

        if (tagFromServer) {
          tagFromServer.parentNode.removeChild(tagFromServer);
          delete this._fromServer[styleId];
        } else {
          this._indices[styleId].forEach(function (index) {
            return _this2._sheet.deleteRule(index);
          });

          delete this._indices[styleId];
        }

        delete this._instancesCounts[styleId];
      }
    }
  }, {
    key: "update",
    value: function update(props, nextProps) {
      this.add(nextProps);
      this.remove(props);
    }
  }, {
    key: "flush",
    value: function flush() {
      this._sheet.flush();

      this._sheet.inject();

      this._fromServer = undefined;
      this._indices = {};
      this._instancesCounts = {};
      this.computeId = this.createComputeId();
      this.computeSelector = this.createComputeSelector();
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this3 = this;

      var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
        return [styleId, _this3._fromServer[styleId]];
      }) : [];

      var cssRules = this._sheet.cssRules();

      return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
        return [styleId, _this3._indices[styleId].map(function (index) {
          return cssRules[index].cssText;
        }).join(_this3._optimizeForSpeed ? '' : '\n')];
      }) // filter out empty rules
      .filter(function (rule) {
        return Boolean(rule[1]);
      }));
    }
    /**
     * createComputeId
     *
     * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
     */

  }, {
    key: "createComputeId",
    value: function createComputeId() {
      var cache = {};
      return function (baseId, props) {
        if (!props) {
          return "jsx-".concat(baseId);
        }

        var propsToString = String(props);
        var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

        if (!cache[key]) {
          cache[key] = "jsx-".concat((0, _stringHash.default)("".concat(baseId, "-").concat(propsToString)));
        }

        return cache[key];
      };
    }
    /**
     * createComputeSelector
     *
     * Creates a function to compute and memoize dynamic selectors.
     */

  }, {
    key: "createComputeSelector",
    value: function createComputeSelector() {
      var selectoPlaceholderRegexp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /__jsx-style-dynamic-selector/g;
      var cache = {};
      return function (id, css) {
        // Sanitize SSR-ed CSS.
        // Client side code doesn't need to be sanitized since we use
        // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
        if (!this._isBrowser) {
          css = sanitize(css);
        }

        var idcss = id + css;

        if (!cache[idcss]) {
          cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
        }

        return cache[idcss];
      };
    }
  }, {
    key: "getIdAndRules",
    value: function getIdAndRules(props) {
      var _this4 = this;

      var css = props.children,
          dynamic = props.dynamic,
          id = props.id;

      if (dynamic) {
        var styleId = this.computeId(id, dynamic);
        return {
          styleId: styleId,
          rules: Array.isArray(css) ? css.map(function (rule) {
            return _this4.computeSelector(styleId, rule);
          }) : [this.computeSelector(styleId, css)]
        };
      }

      return {
        styleId: this.computeId(id),
        rules: Array.isArray(css) ? css : [css]
      };
    }
    /**
     * selectFromServer
     *
     * Collects style tags from the document with id __jsx-XXX
     */

  }, {
    key: "selectFromServer",
    value: function selectFromServer() {
      var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
      return elements.reduce(function (acc, element) {
        var id = element.id.slice(2);
        acc[id] = element;
        return acc;
      }, {});
    }
  }]);

  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/style.scss */ "./styles/style.scss");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_style_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_WhatWeDo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/WhatWeDo */ "./components/WhatWeDo.js");
/* harmony import */ var _components_FoundingMembers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/FoundingMembers */ "./components/FoundingMembers.js");
/* harmony import */ var _components_WhoWeServe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/WhoWeServe */ "./components/WhoWeServe.js");
/* harmony import */ var _components_CultureBlog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/CultureBlog */ "./components/CultureBlog.js");
/* harmony import */ var _components_Portfolio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Portfolio */ "./components/Portfolio.js");
/* harmony import */ var _components_MoreLinks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/MoreLinks */ "./components/MoreLinks.js");
var _jsxFileName = "C:\\Users\\Ryan Booth\\Documents\\CodingProj-Feb\\Chiedo-Labs-Homepage\\Chiedo-labs-homepage-rebuild\\pages\\index.js";











var Index = function Index() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_WhatWeDo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_FoundingMembers__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_WhoWeServe__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_CultureBlog__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Portfolio__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MoreLinks__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./styles/style.scss":
/*!***************************!*\
  !*** ./styles/style.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Ryan Booth\Documents\CodingProj-Feb\Chiedo-Labs-Homepage\Chiedo-labs-homepage-rebuild\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "next-server/head":
/*!***********************************!*\
  !*** external "next-server/head" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map