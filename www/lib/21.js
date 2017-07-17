webpackJsonp([21],{

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__xinix_xin__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_xin_ui_ui_drawer__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_drawer_html__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_drawer_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__my_drawer_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__my_drawer_scss__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__my_drawer_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__my_drawer_scss__);







__webpack_require__.e/* import() */(10).then(__webpack_require__.bind(null, 67));

class MyDrawer extends __WEBPACK_IMPORTED_MODULE_1_xin_ui_ui_drawer__["a" /* UIDrawer */] {
  get template() {
    return __WEBPACK_IMPORTED_MODULE_2__my_drawer_html___default.a;
  }

  get props() {
    return Object.assign({
      spec: {
        type: Object,
        observer: 'specObserved(spec)'
      }
    }, super.props);
  }

  specObserved(spec) {
    if (!spec) {
      return;
    }

    let menus = Object.keys(spec.resolvedTags).map(name => {
      let title = name;
      let tag = spec.resolvedTags[name];
      let links = tag.map(o => ({
        title: `<span class="route--method route--method-${o.method}">${o.method}</span> ${o.uri}`,
        url: `#!/route/${o.id}`
      }));

      return { title, links };
    });
    this.set('menus', menus);
  }
}

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__xinix_xin__["a" /* define */])('my-drawer', MyDrawer);

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, ".ui-drawer {\n  width: 100%;\n  height: 100%;\n  position: absolute; }\n\n.ui-drawer__content {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  width: 240px;\n  height: 100%;\n  max-height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  box-sizing: border-box;\n  border-right: 1px solid #e0e0e0;\n  background: #fafafa;\n  transform: translateX(-250px);\n  transform-style: preserve-3d;\n  will-change: transform;\n  transition-duration: .2s;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-property: transform;\n  color: #424242;\n  overflow: visible;\n  overflow-y: auto;\n  z-index: 5; }\n\n.ui-drawer__overlay {\n  background-color: rgba(0, 0, 0, 0.5);\n  opacity: 0;\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  z-index: 4;\n  transition-property: opacity;\n  transition-duration: .2s;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); }\n\n.ui-drawer--visible {\n  z-index: 5; }\n  .ui-drawer--visible .ui-drawer__content {\n    transform: translateX(0); }\n  .ui-drawer--visible .ui-drawer__overlay {\n    pointer-events: auto;\n    opacity: 1; }\n\n@media screen and (min-width: 1000px) {\n  .ui-drawer {\n    width: 240px; }\n  .ui-drawer + * {\n    margin-left: 240px; }\n  .ui-drawer__content {\n    transform: translateX(0); }\n  .ui-drawer--handle {\n    display: none !important; } }\n", ""]);

// exports


/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, ".route--method {\n  font-size: 10px;\n  border-radius: 4px;\n  padding: 2px 4px;\n  text-transform: uppercase;\n  min-width: 40px;\n  display: inline-block;\n  line-height: 1em;\n  text-align: center;\n  border: 1px solid;\n  background-color: #61affe;\n  border-color: #61affe;\n  color: #fff; }\n  .route--method.route--method-put {\n    background-color: #fca130;\n    border-color: #fca130; }\n  .route--method.route--method-post {\n    background-color: #49cc90;\n    border-color: #49cc90; }\n  .route--method.route--method-delete {\n    background-color: #f93e3e;\n    border-color: #f93e3e; }\n", ""]);

// exports


/***/ }),

/***/ 180:
/***/ (function(module, exports) {

module.exports = "<div id=\"content\" class=\"ui-drawer__content\">\n  <slot></slot>\n</div>\n\n<div class=\"ui-drawer__overlay\" (tap)=\"close()\"></div>\n";

/***/ }),

/***/ 184:
/***/ (function(module, exports) {

module.exports = "<div id=\"content\" class=\"ui-drawer__content\">\n  <div class=\"ui-list\" id=\"menuList\">\n    <a class=\"ui-list__item\" href=\"#!/\">HOME</a>\n  </div>\n\n  <accordion-menu menus=\"[[menus]]\"></accordion-menu>\n  <!--<slot></slot>-->\n</div>\n\n<div class=\"ui-drawer__overlay\" (tap)=\"close()\"></div>\n";

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(163);
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
		module.hot.accept("!!../../css-loader/index.js!../../sass-loader/lib/loader.js!./ui-drawer.scss", function() {
			var newContent = require("!!../../css-loader/index.js!../../sass-loader/lib/loader.js!./ui-drawer.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(166);
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
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./my-drawer.scss", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./my-drawer.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__xinix_xin__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__templates_ui_drawer_html__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__templates_ui_drawer_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__templates_ui_drawer_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scss_ui_drawer_scss__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scss_ui_drawer_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__scss_ui_drawer_scss__);





class UIDrawer extends __WEBPACK_IMPORTED_MODULE_0__xinix_xin__["b" /* Component */] {
  get template () {
    return __WEBPACK_IMPORTED_MODULE_1__templates_ui_drawer_html___default.a;
  }

  get listeners () {
    return Object.assign({}, super.listeners, {
      'click a[href]': 'linkTapped(evt)',
    });
  }

  created () {
    super.created();

    this.classList.add('ui-drawer');
  }

  async open (drawer = this) {
    if (window.innerWidth >= 1000) {
      return;
    }

    return await new Promise((resolve, reject) => {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__xinix_xin__["c" /* event */])(drawer.$.content).once('transitionend', () => {
        this.async(resolve, 50);
      });

      drawer.classList.add('ui-drawer--visible');
    });
  }

  async close (drawer = this) {
    if (window.innerWidth >= 1000) {
      return;
    }

    return await new Promise((resolve, reject) => {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__xinix_xin__["c" /* event */])(drawer.$.content).once('transitionend', () => {
        this.async(resolve, 50);
      });

      drawer.classList.remove('ui-drawer--visible');
    });
  }

  async linkTapped (evt) {
    evt.preventDefault();

    await this.close();

    window.location.href = evt.target.href;
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = UIDrawer;


__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__xinix_xin__["a" /* define */])('ui-drawer', UIDrawer);


/***/ })

});
//# sourceMappingURL=21.js.map