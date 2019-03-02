(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/App.scss":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./src/App.scss ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\n  box-sizing: border-box;\n  -webkit-box-sizing: border-box; }\n\nbody {\n  padding: 0px;\n  margin: 0px; }\n\n.app {\n  height: calc(100vh);\n  width: calc(100vw); }\n\n@media screen and (min-width: 600px) {\n  .header {\n    height: 70px; } }\n\n.footer {\n  background-color: black;\n  color: white;\n  height: 50px;\n  width: 100%;\n  position: fixed;\n  bottom: 0px; }\n\n.side-menu-wrapper {\n  position: fixed;\n  z-index: 2;\n  background-color: lightgrey;\n  height: calc(100vh);\n  width: 200px;\n  transition: left 0.3s;\n  -webkit-transition: left 0.3s; }\n  .side-menu-wrapper--off {\n    left: -200px; }\n  .side-menu-wrapper--on {\n    left: 0px; }\n\n.flex {\n  display: flex; }\n  .flex_col {\n    flex-direction: column; }\n  .flex_row {\n    flex-direction: row; }\n  .flex--justify-center {\n    justify-content: center; }\n  .flex--space-between {\n    justify-content: space-between; }\n  .flex--self-center {\n    align-self: center; }\n  .flex--items-center {\n    align-items: center; }\n  .flex--justify-end {\n    justify-content: end; }\n  .flex--space-around {\n    justify-content: space-around; }\n\n.block {\n  display: block; }\n\n.inline-block {\n  display: inline-block; }\n\n.menu-container_mobile {\n  width: 75px; }\n\n.list {\n  padding: 0px;\n  margin: 0px; }\n  .list li {\n    min-width: 150px;\n    cursor: pointer; }\n    .list li.\\--height-70 {\n      height: 70px; }\n  .list--no-bullet li {\n    text-decoration: none;\n    list-style-type: none; }\n\n.\\--full-height {\n  height: 100%; }\n\n.burger-bar {\n  cursor: pointer; }\n  .burger-bar div {\n    width: 50px;\n    height: 5px;\n    background-color: black;\n    transition: 0.3s; }\n    .burger-bar div:nth-child(2) {\n      margin: 6px 0px; }\n  .burger-bar--open div:nth-child(1) {\n    -webkit-transform: rotate(-45deg) translate(-9px, 6px);\n            transform: rotate(-45deg) translate(-9px, 6px); }\n  .burger-bar--open div:nth-child(2) {\n    opacity: 0; }\n  .burger-bar--open div:nth-child(3) {\n    -webkit-transform: rotate(45deg) translate(-8px, -8px);\n            transform: rotate(45deg) translate(-8px, -8px); }\n\n.\\--full-width {\n  width: 100%; }\n\n.hidden {\n  display: none; }\n\n.\\--relative {\n  position: relative; }\n\n.\\--absolute {\n  position: absolute; }\n\n.\\--no-padding {\n  padding: 0px; }\n\n.\\--no-margin {\n  margin: 0px; }\n\n.\\--padding-5 {\n  padding: 5px; }\n\n#modal-background {\n  position: fixed;\n  z-index: 3;\n  top: 0;\n  left: 0;\n  width: calc(100vw);\n  height: calc(100vh); }\n  #modal-background #modal {\n    z-index: 3;\n    top: 100px;\n    left: calc(50vw - 200px);\n    background-color: white; }\n\n.\\--background-color-gray {\n  background-color: gray; }\n\n.main-page {\n  min-height: calc(100vh - 120px); }\n\n.\\--hover-gray:hover {\n  background-color: lightgrey; }\n\n#root {\n  transition: background-color 0.5s; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./App.scss */ "./src/App.scss");
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_App_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages */ "./src/pages/index.js");
/* harmony import */ var _components_side_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/side-menu */ "./src/components/side-menu.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/header */ "./src/components/header.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/footer */ "./src/components/footer.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/service */ "./src/shared/service/index.js");





var _jsxFileName = "/home/andydevstic/projects/react/vn-broadcast/src/App.js";










var App =
/*#__PURE__*/
function (_Component) {
  Object(_home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(App, _Component);

  function App(props) {
    var _this;

    Object(_home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

    _this = Object(_home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(App).call(this, props));
    _this.state = {};
    return _this;
  }

  Object(_home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
    key: "render",
    value: function render() {
      var sideMenuIsOpen = this.props.sideMenuIsOpen;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "app",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, Object(_shared_service__WEBPACK_IMPORTED_MODULE_13__["screenIsMobile"])() ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "side-menu-wrapper side-menu-wrapper--".concat(sideMenuIsOpen ? 'on' : 'off'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_side_menu__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      })) : null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_11__["default"], {
        isMobile: Object(_shared_service__WEBPACK_IMPORTED_MODULE_13__["screenIsMobile"])(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_6__["Switch"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        exact: true,
        path: "/",
        component: _pages__WEBPACK_IMPORTED_MODULE_9__["MainPage"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        component: _pages__WEBPACK_IMPORTED_MODULE_9__["NotFoundPage"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_footer__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(function (globalState) {
  return {
    sideMenuIsOpen: globalState.sideMenuIsOpen
  };
})(App));

/***/ }),

/***/ "./src/App.scss":
/*!**********************!*\
  !*** ./src/App.scss ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-5-1!../node_modules/postcss-loader/src??postcss!../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./App.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/App.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader??ref--6-oneOf-5-1!../node_modules/postcss-loader/src??postcss!../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./App.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/App.scss", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-5-1!../node_modules/postcss-loader/src??postcss!../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./App.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/App.scss");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/actions/index.js":
/*!******************************!*\
  !*** ./src/actions/index.js ***!
  \******************************/
/*! exports provided: userActions, sideMenuActions, sideMenuActionCreator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-actions */ "./src/actions/user-actions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userActions", function() { return _user_actions__WEBPACK_IMPORTED_MODULE_0__["userActions"]; });

/* harmony import */ var _side_menu_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./side-menu-actions */ "./src/actions/side-menu-actions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sideMenuActions", function() { return _side_menu_actions__WEBPACK_IMPORTED_MODULE_1__["sideMenuActions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sideMenuActionCreator", function() { return _side_menu_actions__WEBPACK_IMPORTED_MODULE_1__["sideMenuActionCreator"]; });




/***/ }),

/***/ "./src/actions/side-menu-actions.js":
/*!******************************************!*\
  !*** ./src/actions/side-menu-actions.js ***!
  \******************************************/
/*! exports provided: sideMenuActions, sideMenuActionCreator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sideMenuActions", function() { return sideMenuActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sideMenuActionCreator", function() { return sideMenuActionCreator; });
var sideMenuActions = {
  ON: 'SIDE_MENU_ON',
  OFF: 'SIDE_MENU_OFF'
};
var sideMenuActionCreator = {
  toggleSideMenu: function toggleSideMenu(isOpen) {
    return {
      type: isOpen ? sideMenuActions.OFF : sideMenuActions.ON
    };
  }
};

/***/ }),

/***/ "./src/actions/user-actions.js":
/*!*************************************!*\
  !*** ./src/actions/user-actions.js ***!
  \*************************************/
/*! exports provided: userActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userActions", function() { return userActions; });
var userActions = {
  LOGIN: 'USER_LOGGED_IN'
};

/***/ }),

/***/ "./src/components/book-row.js":
/*!************************************!*\
  !*** ./src/components/book-row.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _review_cover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./review-cover */ "./src/components/review-cover.js");
var _jsxFileName = "/home/andydevstic/projects/react/vn-broadcast/src/components/book-row.js";


/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var books = props.books,
      bookWidth = props.bookWidth,
      sidePadding = props.sidePadding;
  var bookSize = {
    width: "".concat(bookWidth, "px")
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex_row",
    style: {
      padding: "0 ".concat(sidePadding * 100, "%")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, books.map(function (b, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_review_cover__WEBPACK_IMPORTED_MODULE_1__["default"], {
      size: bookSize,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }));
  }));
});

/***/ }),

/***/ "./src/components/etc/burger.js":
/*!**************************************!*\
  !*** ./src/components/etc/burger.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions */ "./src/actions/index.js");
var _jsxFileName = "/home/andydevstic/projects/react/vn-broadcast/src/components/etc/burger.js";




function Burger(props) {
  var sideMenuIsOpen = props.sideMenuIsOpen,
      toggleBurger = props.toggleBurger;

  var handleOnClick = function handleOnClick() {
    return toggleBurger(sideMenuIsOpen);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "burger-bar",
    onClick: handleOnClick,
    className: "burger-bar ".concat(sideMenuIsOpen ? 'burger-bar--open' : '', " flex flex_col flex--items-center flex--justify-center"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(function (globalState) {
  return {
    sideMenuIsOpen: globalState.sideMenuIsOpen
  };
}, function (dispatch) {
  return {
    toggleBurger: function toggleBurger(isOpen) {
      return dispatch(_actions__WEBPACK_IMPORTED_MODULE_2__["sideMenuActionCreator"].toggleSideMenu(isOpen));
    }
  };
})(Burger));

/***/ }),

/***/ "./src/components/etc/drop-down-list.js":
/*!**********************************************!*\
  !*** ./src/components/etc/drop-down-list.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return dropDownList; });
/* harmony import */ var _home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);






var _jsxFileName = "/home/andydevstic/projects/react/vn-broadcast/src/components/etc/drop-down-list.js";



var dropDownList =
/*#__PURE__*/
function (_Component) {
  Object(_home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(dropDownList, _Component);

  function dropDownList(props) {
    var _this;

    Object(_home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, dropDownList);

    _this = Object(_home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(dropDownList).call(this, props));
    _this.state = {
      isOpen: false
    };
    _this.handleToggleDropDown = _this.handleToggleDropDown.bind(Object(_home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    return _this;
  }

  Object(_home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(dropDownList, [{
    key: "handleToggleDropDown",
    value: function handleToggleDropDown() {
      this.setState(function (currentState) {
        return {
          isOpen: !currentState.isOpen
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var dropDownPositionClassMap = {
        bottom: {
          top: 'calc(100%)'
        },
        left: {
          top: '0px',
          left: 'calc(-100%)'
        },
        right: {
          top: '0px',
          left: 'calc(100%)'
        }
      };
      var _this$props = this.props,
          listClass = _this$props.listClass,
          label = _this$props.label,
          subItem = _this$props.subItem,
          position = _this$props.position,
          subItemClass = _this$props.subItemClass;
      var isOpen = this.state.isOpen;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "".concat(listClass, " --relative"),
        onClick: this.handleToggleDropDown,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "flex flex_col flex--justify-center flex--items-center --full-height --full-width",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, label), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        className: "".concat(!isOpen ? 'hidden' : '', " --absolute --no-padding"),
        style: dropDownPositionClassMap[position],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, subItem.map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
          key: index,
          className: "flex flex_col flex--justify-center flex--items-center --hover-gray ".concat(subItemClass),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        }, item);
      })));
    }
  }]);

  return dropDownList;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);


dropDownList.propTypes = {
  listClass: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  subItemClass: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  label: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string.isRequired,
  subItem: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.element).isRequired
};
dropDownList.defaultProps = {
  listClass: '',
  subItemClass: '',
  label: 'label',
  position: 'bottom',
  subItem: [react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, "item1"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, "item2")]
};

/***/ }),

/***/ "./src/components/etc/logo.js":
/*!************************************!*\
  !*** ./src/components/etc/logo.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/andydevstic/projects/react/vn-broadcast/src/components/etc/logo.js";

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, "This is logo");
});

/***/ }),

/***/ "./src/components/etc/trim-words.js":
/*!******************************************!*\
  !*** ./src/components/etc/trim-words.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var tag = props.tag,
      children = props.children,
      title = props.title,
      size = props.size,
      style = props.style;
  var newTitle = title ? title : children;
  var trimmedContent = "".concat(children.substr(0, size), " ").concat(children.length > size ? '...' : '');
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(tag, {
    title: newTitle,
    style: style
  }, trimmedContent);
});

/***/ }),

/***/ "./src/components/footer.js":
/*!**********************************!*\
  !*** ./src/components/footer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/andydevstic/projects/react/vn-broadcast/src/components/footer.js";

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer flex flex_row flex--justify-center flex--items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "Andy Devstic"));
});

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _etc_logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./etc/logo */ "./src/components/etc/logo.js");
/* harmony import */ var _main_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-menu */ "./src/components/main-menu.js");
/* harmony import */ var _components_etc_burger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/etc/burger */ "./src/components/etc/burger.js");
var _jsxFileName = "/home/andydevstic/projects/react/vn-broadcast/src/components/header.js";




function Header(props) {
  var isMobile = props.isMobile;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex_row flex--space-between --full-height",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "logo-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_etc_logo__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  })), isMobile ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "menu-container_mobile flex flex_col flex--justify-center flex--items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_etc_burger__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  })) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "menu-container_desktop",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_main_menu__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }))));
}

/***/ }),

/***/ "./src/components/main-menu.js":
/*!*************************************!*\
  !*** ./src/components/main-menu.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _etc_drop_down_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./etc/drop-down-list */ "./src/components/etc/drop-down-list.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modal */ "./src/components/modal.js");






var _jsxFileName = "/home/andydevstic/projects/react/vn-broadcast/src/components/main-menu.js";

 // import {Link, NavLink} from 'react-router'




var MainMenu =
/*#__PURE__*/
function (_Component) {
  Object(_home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MainMenu, _Component);

  function MainMenu(props) {
    var _this;

    Object(_home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MainMenu);

    _this = Object(_home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MainMenu).call(this, props));
    _this.state = {
      isModalOpen: false
    };
    _this.handleOpenModal = _this.handleOpenModal.bind(Object(_home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    _this.handleModalClose = _this.handleModalClose.bind(Object(_home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    return _this;
  }

  Object(_home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MainMenu, [{
    key: "handleOpenModal",
    value: function handleOpenModal() {
      this.setState(function () {
        return {
          isModalOpen: true
        };
      });
    }
  }, {
    key: "handleModalClose",
    value: function handleModalClose() {
      this.setState(function () {
        return {
          isModalOpen: false
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var user = this.props.user;
      var isModalOpen = this.state.isModalOpen;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        className: "flex flex-row list list--no-bullet --full-height",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "flex flex_row flex--justify-center flex--items-center --full-height",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "Add Review"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "flex flex_row flex--justify-center flex--items-center --full-height",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "Dashboard"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        onClick: this.handleOpenModal,
        className: "flex flex_row flex--justify-center flex--items-center --full-height",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "Log in/Register"), isModalOpen ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_modal__WEBPACK_IMPORTED_MODULE_9__["default"], {
        handleModalClose: this.handleModalClose,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, "this is modal body")) : null);
    }
  }]);

  return MainMenu;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(function (globalState) {
  return {
    user: globalState.user
  };
})(MainMenu));

/***/ }),

/***/ "./src/components/modal.js":
/*!*********************************!*\
  !*** ./src/components/modal.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");






var _jsxFileName = "/home/andydevstic/projects/react/vn-broadcast/src/components/modal.js";



var Modal =
/*#__PURE__*/
function (_Component) {
  Object(_home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Modal, _Component);

  function Modal(props) {
    var _this;

    Object(_home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Modal);

    _this = Object(_home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Modal).call(this, props));
    _this.state = {};
    _this.handleOnClick = _this.handleOnClick.bind(Object(_home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    return _this;
  }

  Object(_home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Modal, [{
    key: "handleOnClick",
    value: function handleOnClick(event) {
      var handleModalClose = this.props.handleModalClose;
      var clickedElement = event.target;
      var parentElement = null;
      var isClickInModal = false;

      while (parentElement !== document.getElementById('root') && parentElement !== document.getElementById('modal')) {
        parentElement = parentElement ? parentElement.parentElement : clickedElement.parentElement;
        isClickInModal = parentElement === document.getElementById('modal');
      }

      if (!isClickInModal) handleModalClose();
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      document.getElementById('root').style.backgroundColor = 'gray';
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      document.getElementById('root').addEventListener('click', this.handleOnClick);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.getElementById('root').style.backgroundColor = 'white';
      document.getElementById('root').removeEventListener('click', this.handleOnClick);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          position = _this$props.position,
          titleObject = _this$props.titleObject,
          footerObject = _this$props.footerObject;
      var ModalBody = this.props.children;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        id: "modal-background",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        id: "modal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "modal-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "modal-title flex",
        style: titleObject.style,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, titleObject.content), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "modal-body flex",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, ModalBody), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "modal-footer flex",
        style: footerObject.style,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, footerObject.content))));
    }
  }]);

  return Modal;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])()(Modal));
Modal.defaultProps = {
  titleObject: {
    content: 'Modal title',
    style: {
      flexDirection: 'row'
    }
  },
  footerObject: {
    content: 'Modal footer',
    style: {
      flexDirection: 'row'
    }
  }
};

/***/ }),

/***/ "./src/components/review-cover.js":
/*!****************************************!*\
  !*** ./src/components/review-cover.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ReviewCover; });
/* harmony import */ var _home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _etc_trim_words__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./etc/trim-words */ "./src/components/etc/trim-words.js");







var _jsxFileName = "/home/andydevstic/projects/react/vn-broadcast/src/components/review-cover.js";



var ReviewCover =
/*#__PURE__*/
function (_Component) {
  Object(_home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ReviewCover, _Component);

  function ReviewCover(props) {
    var _this;

    Object(_home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ReviewCover);

    _this = Object(_home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(ReviewCover).call(this, props));
    _this.state = {
      hasPadding: true
    };
    _this.handleMouseEnter = _this.handleMouseEnter.bind(Object(_home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this)));
    _this.handleMouseLeave = _this.handleMouseLeave.bind(Object(_home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this)));
    return _this;
  }

  Object(_home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ReviewCover, [{
    key: "handleMouseEnter",
    value: function handleMouseEnter() {
      this.setState(function (currentState) {
        return {
          hasPadding: false
        };
      });
    }
  }, {
    key: "handleMouseLeave",
    value: function handleMouseLeave() {
      this.setState(function (currentState) {
        return {
          hasPadding: true
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var mainStyle = {
        transition: 'padding 0.5s'
      };
      var hasPadding = this.state.hasPadding;
      var _this$props = this.props,
          thumbnailUrl = _this$props.thumbnailUrl,
          title = _this$props.title,
          author = _this$props.author,
          reviewer = _this$props.reviewer,
          upvote = _this$props.upvote,
          createdAt = _this$props.createdAt,
          size = _this$props.size,
          rowStyle = _this$props.rowStyle;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "flex flex_col ".concat(hasPadding ? '--padding-5' : ''),
        style: Object(_home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, mainStyle, size),
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: thumbnailUrl,
        alt: "Book cover",
        style: {
          height: '60%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          height: '40%'
        },
        className: 'flex flex_col flex--justify-end',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_etc_trim_words__WEBPACK_IMPORTED_MODULE_8__["default"], {
        size: 20,
        tag: "i",
        style: rowStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "".concat(title, " by ").concat(author)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_etc_trim_words__WEBPACK_IMPORTED_MODULE_8__["default"], {
        size: 20,
        tag: "p",
        style: rowStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "Reviewer: ".concat(reviewer)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_etc_trim_words__WEBPACK_IMPORTED_MODULE_8__["default"], {
        size: 20,
        tag: "p",
        style: rowStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "".concat(upvote)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_etc_trim_words__WEBPACK_IMPORTED_MODULE_8__["default"], {
        size: 20,
        tag: "p",
        style: rowStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "".concat(createdAt))));
    }
  }]);

  return ReviewCover;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);


ReviewCover.defaultProps = {
  thumbnailUrl: "url()",
  size: {
    height: '300px',
    width: '200px'
  },
  title: 'Harry Potter and the Death Hallows',
  author: 'J.K Rowling',
  reviewer: 'Andy Devstic',
  upvote: 1000,
  createdAt: '2019/12/31',
  rowStyle: {
    margin: '5px 0px'
  }
};

/***/ }),

/***/ "./src/components/side-menu.js":
/*!*************************************!*\
  !*** ./src/components/side-menu.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _etc_drop_down_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./etc/drop-down-list */ "./src/components/etc/drop-down-list.js");





var _jsxFileName = "/home/andydevstic/projects/react/vn-broadcast/src/components/side-menu.js";




var SideMenu =
/*#__PURE__*/
function (_Component) {
  Object(_home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(SideMenu, _Component);

  function SideMenu(props) {
    var _this;

    Object(_home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SideMenu);

    _this = Object(_home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SideMenu).call(this, props));
    _this.state = {};
    return _this;
  }

  Object(_home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SideMenu, [{
    key: "render",
    value: function render() {
      var user = this.props.user;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: "list list--no-bullet flex flex_col --full-width",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "flex flex_row flex--justify-center flex--items-center --height-70",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, "Add Review"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "flex flex_row flex--justify-center flex--items-center --height-70",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, "Dashboard"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_etc_drop_down_list__WEBPACK_IMPORTED_MODULE_7__["default"], {
        label: user.username ? "Hello, ".concat(user.username) : 'Log in/Register',
        position: "right",
        listClass: "flex flex_row flex--justify-center flex--items-center --height-70",
        subItemClass: "--height-70",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }));
    }
  }]);

  return SideMenu;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(function (globState) {
  return {
    user: globState.user
  };
})(SideMenu));

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! history */ "./node_modules/history/es/index.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./reducers */ "./src/reducers/index.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/home/andydevstic/projects/react/vn-broadcast/src/index.js";










var store = Object(redux__WEBPACK_IMPORTED_MODULE_4__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_8__["appReducer"]);
var browserHistory = Object(history__WEBPACK_IMPORTED_MODULE_7__["createBrowserHistory"])();
var Main = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_5__["Provider"], {
  store: store,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_6__["Router"], {
  history: browserHistory,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
})));
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(Main, document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_9__["unregister"]();

/***/ }),

/***/ "./src/pages/404.js":
/*!**************************!*\
  !*** ./src/pages/404.js ***!
  \**************************/
/*! exports provided: NotFoundPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundPage", function() { return NotFoundPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/andydevstic/projects/react/vn-broadcast/src/pages/404.js";

var NotFoundPage = function NotFoundPage() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, "Page not found!");
};

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var _home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_book_row__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/book-row */ "./src/components/book-row.js");





var _jsxFileName = "/home/andydevstic/projects/react/vn-broadcast/src/pages/home.js";
 // import {connect} from 'react-redux'


var booksPerRowOnScreenWidth = {
  mobile: {
    booksPerRow: 3,
    sidePadding: 2 / 100
  },
  tablet: {
    booksPerRow: 4,
    sidePadding: 2 / 100
  },
  desktop: {
    booksPerRow: 8,
    sidePadding: 15 / 100
  }
};
var HomePage =
/*#__PURE__*/
function (_Component) {
  Object(_home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HomePage, _Component);

  function HomePage() {
    Object(_home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HomePage);

    return Object(_home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(HomePage).apply(this, arguments));
  }

  Object(_home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(HomePage, [{
    key: "renderBookRows",
    value: function renderBookRows() {}
  }, {
    key: "render",
    value: function render() {
      var screenWidth = window.innerWidth;
      var _this$props = this.props,
          bookList = _this$props.bookList,
          screenType = _this$props.screenType;
      bookList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      var countAllBooks = bookList ? bookList.length : 20;
      if (screenWidth < 600) screenType = 'mobile';
      if (screenWidth >= 600 && screenWidth < 960) screenType = 'tablet';
      if (screenWidth >= 960) screenType = 'desktop';
      var booksPerRow = booksPerRowOnScreenWidth[screenType].booksPerRow;
      var screenSidePadding = booksPerRowOnScreenWidth[screenType].sidePadding;
      var bookWidth = (1 - screenSidePadding * 2) / booksPerRow * screenWidth;
      var countRows = Math.ceil(countAllBooks / booksPerRow);
      var rowsArray = [];

      for (var i = 1; i <= countRows; i++) {
        rowsArray.push(bookList.splice(0, booksPerRow));
      }

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "flex flex_col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, rowsArray.map(function (rowBooks, index) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_book_row__WEBPACK_IMPORTED_MODULE_6__["default"], {
          books: rowBooks,
          bookWidth: bookWidth,
          sidePadding: screenSidePadding,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          },
          __self: this
        }));
      }));
    }
  }]);

  return HomePage;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: MainPage, NotFoundPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-page */ "./src/pages/main-page.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MainPage", function() { return _main_page__WEBPACK_IMPORTED_MODULE_0__["MainPage"]; });

/* harmony import */ var _404__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./404 */ "./src/pages/404.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotFoundPage", function() { return _404__WEBPACK_IMPORTED_MODULE_1__["NotFoundPage"]; });




/***/ }),

/***/ "./src/pages/main-page.js":
/*!********************************!*\
  !*** ./src/pages/main-page.js ***!
  \********************************/
/*! exports provided: MainPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPage", function() { return MainPage; });
/* harmony import */ var _home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home */ "./src/pages/home.js");





var _jsxFileName = "/home/andydevstic/projects/react/vn-broadcast/src/pages/main-page.js";



var MainPage =
/*#__PURE__*/
function (_Component) {
  Object(_home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MainPage, _Component);

  function MainPage(props) {
    var _this;

    Object(_home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MainPage);

    _this = Object(_home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MainPage).call(this, props));
    _this.state = {};
    return _this;
  }

  Object(_home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MainPage, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: 'main-page',
        style: {
          minHeight: 'calc(100vh - 120px)'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_6__["Switch"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        path: "/",
        exact: true,
        component: _home__WEBPACK_IMPORTED_MODULE_7__["HomePage"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      })));
    }
  }]);

  return MainPage;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! exports provided: appReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appReducer", function() { return appReducer; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _user_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-reducer */ "./src/reducers/user-reducer.js");
/* harmony import */ var _side_menu_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./side-menu-reducer */ "./src/reducers/side-menu-reducer.js");



var appReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  user: _user_reducer__WEBPACK_IMPORTED_MODULE_1__["userReducer"],
  sideMenuIsOpen: _side_menu_reducer__WEBPACK_IMPORTED_MODULE_2__["sideMenuReducer"]
});

/***/ }),

/***/ "./src/reducers/side-menu-reducer.js":
/*!*******************************************!*\
  !*** ./src/reducers/side-menu-reducer.js ***!
  \*******************************************/
/*! exports provided: sideMenuReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sideMenuReducer", function() { return sideMenuReducer; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ "./src/actions/index.js");

function sideMenuReducer() {
  var currentState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["sideMenuActions"].ON:
      return true;

    case _actions__WEBPACK_IMPORTED_MODULE_0__["sideMenuActions"].OFF:
      return false;

    default:
      return false;
  }
}

/***/ }),

/***/ "./src/reducers/user-reducer.js":
/*!**************************************!*\
  !*** ./src/reducers/user-reducer.js ***!
  \**************************************/
/*! exports provided: userReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userReducer", function() { return userReducer; });
/* harmony import */ var _home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions */ "./src/actions/index.js");


var defaultUser = {
  username: null,
  accountType: null,
  email: null
};
function userReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultUser;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_1__["userActions"].LOGIN:
      return Object(_home_andydevstic_projects_react_vn_broadcast_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, action.userData);

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read http://bit.ly/CRA-PWA
var isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) { var publicUrl; }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(function (registration) {
    registration.onupdatefound = function () {
      var installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = function () {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See http://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(function (error) {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(function (response) {
    // Ensure service worker exists, and that we really are getting a JS file.
    var contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(function (registration) {
        registration.unregister().then(function () {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(function () {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(function (registration) {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ "./src/shared/service/check-mobile-service.js":
/*!****************************************************!*\
  !*** ./src/shared/service/check-mobile-service.js ***!
  \****************************************************/
/*! exports provided: screenIsMobile, screenIsTablet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "screenIsMobile", function() { return screenIsMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "screenIsTablet", function() { return screenIsTablet; });
var mobileScreen = 600;
var tabletScreen = 960;
function screenIsMobile() {
  return window.innerWidth <= mobileScreen;
}
function screenIsTablet() {
  return window.innerWidth <= tabletScreen && window.innerWidth > mobileScreen;
}

/***/ }),

/***/ "./src/shared/service/index.js":
/*!*************************************!*\
  !*** ./src/shared/service/index.js ***!
  \*************************************/
/*! exports provided: screenIsMobile, screenIsTablet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _check_mobile_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check-mobile-service */ "./src/shared/service/check-mobile-service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "screenIsMobile", function() { return _check_mobile_service__WEBPACK_IMPORTED_MODULE_0__["screenIsMobile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "screenIsTablet", function() { return _check_mobile_service__WEBPACK_IMPORTED_MODULE_0__["screenIsTablet"]; });



/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/andydevstic/projects/react/vn-broadcast/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /home/andydevstic/projects/react/vn-broadcast/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",0]]]);
//# sourceMappingURL=main.chunk.js.map