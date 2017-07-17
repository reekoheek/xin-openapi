webpackJsonp([10],{

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "accordion-menu .accordion-menu-group h3 {\n  font-size: 12px;\n  font-weight: bold;\n  margin: 0;\n  padding: 0 16px;\n  text-transform: uppercase;\n  /*border: 1px solid red;*/ }\n\naccordion-menu .accordion-menu-list a {\n  font-size: 16px;\n  display: block;\n  line-height: 40px;\n  border-top: 1px solid #ccc;\n  padding: 0 16px;\n  text-decoration: none;\n  overflow: auto;\n  white-space: nowrap; }\n", ""]);

// exports


/***/ }),

/***/ 182:
/***/ (function(module, exports) {

module.exports = "<xin-for items=\"[[menus]]\" as=\"menu\">\n  <template>\n    <div class=\"accordion-menu-group\">\n      <h3>[[menu.title]]</h3>\n\n      <div class=\"accordion-menu-list\">\n        <xin-for items=\"[[menu.links]]\" as=\"link\">\n          <template>\n            <a href=\"[[link.url]]\" html=\"[[link.title]]\"></a>\n          </template>\n        </xin-for>\n      </div>\n    </div>\n  </template>\n</xin-for>\n";

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(165);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(1)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./accordion-menu.scss", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./accordion-menu.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__xinix_xin__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accordion_menu_html__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accordion_menu_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__accordion_menu_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accordion_menu_scss__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accordion_menu_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__accordion_menu_scss__);






__webpack_require__.e/* import() */(8).then(__webpack_require__.bind(null, 56));

class AccordionMenu extends __WEBPACK_IMPORTED_MODULE_0__xinix_xin__["b" /* Component */] {
  get template() {
    return __WEBPACK_IMPORTED_MODULE_1__accordion_menu_html___default.a;
  }

  get props() {
    return Object.assign({
      menus: {
        type: Array,
        value: []
      }
    }, super.props);
  }
}

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__xinix_xin__["a" /* define */])('accordion-menu', AccordionMenu);

/***/ })

});
//# sourceMappingURL=10.js.map