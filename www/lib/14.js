webpackJsonp([14,15,23],{

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__(52);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "View", function() { return __WEBPACK_IMPORTED_MODULE_0__view__["View"]; });



/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, ".xin-view {\n  box-sizing: border-box;\n  display: none; }\n\n.xin-view.xin-view--visible {\n  display: block; }\n", ""]);

// exports


/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(49);
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
		module.hot.accept("!!../../../../css-loader/index.js!../../../../sass-loader/lib/loader.js!./view.css", function() {
			var newContent = require("!!../../../../css-loader/index.js!../../../../sass-loader/lib/loader.js!./view.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_css__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__view_css__);





class View extends __WEBPACK_IMPORTED_MODULE_0__component__["a" /* Component */] {
  get props () {
    const TRANSITION_IN = this.__repository.get('view.transitionIn') || this.__repository.get('view.transition') || 'slide';
    const TRANSITION_OUT = this.__repository.get('view.transitionOut') || this.__repository.get('view.transition') || 'fade';

    return Object.assign({}, super.props, {
      uri: {
        type: String,
        required: true,
      },
      transitionIn: {
        type: String,
        value: TRANSITION_IN,
      },
      transitionOut: {
        type: String,
        value: TRANSITION_OUT,
      },
      index: {
        type: Number,
        value: 0,
      },
    });
  }

  focusing () {}

  focused () {}

  blurred () {}

  created () {
    super.created();

    this.classList.add('xin-view');
  }

  ready () {
    super.ready();

    this.inFx = new __WEBPACK_IMPORTED_MODULE_1__core__["f" /* Fx */]({
      element: this,
      transition: this.transitionIn,
      method: 'in',
    });

    this.outFx = new __WEBPACK_IMPORTED_MODULE_1__core__["f" /* Fx */]({
      element: this,
      transition: this.transitionOut,
      method: 'out',
    });
  }

  attached () {
    super.attached();

    this.classList.remove('xin-view--focus');
    this.classList.remove('xin-view--visible');

    if (!this.__app) {
      console.warn('Cannot route view to undefined app');
      return;
    }

    this.__app.route(this.uri, parameters => {
      this.focus(parameters);
    });

    this.fire('routed');
  }

  async focus (parameters = {}) {
    this.set('parameters', parameters);

    await this.focusing(parameters);
    this.fire('focusing', parameters);

    this.async(() => {
      if ('setFocus' in this.parentElement) {
        this.parentElement.setFocus(this);
      } else {
        this.setVisible(true);
        this.setFocus(true);
      }
    });
  }

  setVisible (visible) {
    if (visible) {
      this.classList.add('xin-view--visible');
      this.fire('show', { view: this });
      return;
    }

    this.classList.remove('xin-view--visible');
    [].forEach.call(this.querySelectorAll('.xin-view.xin-view--visible'), el => el.setVisible(visible));

    this.fire('hide');
  }

  async setFocus (focus) {
    if (focus) {
      this.classList.add('xin-view--focus');
      await this.focused();
      this.fire('focus');
      return;
    }

    this.classList.remove('xin-view--focus');
    [].forEach.call(this.querySelectorAll('.xin-view.xin-view--focus'), el => {
      if ('setFocus' in el.parentElement) {
        el.parentElement.setFocus(null);
      } else {
        el.setFocus(focus);
      }
    });

    await this.blurred();
    this.fire('blur');
  }
}
/* harmony export (immutable) */ __webpack_exports__["View"] = View;


__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__component__["c" /* define */])('xin-view', View);


/***/ })

});
//# sourceMappingURL=14.js.map