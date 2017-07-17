webpackJsonp([9],{

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, ".ui-textfield {\n  position: relative;\n  font-size: 16px;\n  display: inline-block;\n  box-sizing: border-box;\n  width: 100%;\n  max-width: 100%;\n  margin: 0;\n  padding: 20px 0; }\n  .ui-textfield .ui-textfield__input {\n    border: none;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n    display: block;\n    font-size: 16px;\n    font-family: Helvetica,Arial,sans-serif;\n    margin: 0;\n    padding: 4px 0;\n    width: 100%;\n    background: none;\n    text-align: left;\n    color: inherit; }\n    .ui-textfield .ui-textfield__input:focus {\n      outline: none; }\n      .ui-textfield .ui-textfield__input:focus + .ui-textfield__label:after {\n        left: 0;\n        visibility: visible;\n        width: 100%; }\n  .ui-textfield select.ui-textfield__input {\n    padding: 4px 0 5px 0;\n    -webkit-appearance: none; }\n  .ui-textfield .ui-textfield__label {\n    bottom: 0;\n    color: rgba(0, 0, 0, 0.26);\n    font-size: 16px;\n    left: 0;\n    right: 0;\n    pointer-events: none;\n    position: absolute;\n    display: block;\n    top: 24px;\n    width: 100%;\n    overflow: hidden;\n    white-space: nowrap;\n    text-align: left; }\n    .ui-textfield .ui-textfield__label:after {\n      background-color: #3f51b5;\n      bottom: 20px;\n      content: \"\";\n      height: 2px;\n      left: 45%;\n      position: absolute;\n      transition-duration: .2s;\n      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n      visibility: hidden;\n      width: 10px; }\n  .ui-textfield.ui-textfield--stacked .ui-textfield__label {\n    font-size: 12px;\n    top: 4px;\n    visibility: visible; }\n", ""]);

// exports


/***/ }),

/***/ 181:
/***/ (function(module, exports) {

module.exports = "<select id=\"field\" class=\"ui-textfield__input\" value=\"{{value}}\"></select>\n<label class=\"ui-textfield__label\">[[label]]</label>\n";

/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(164);
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
		module.hot.accept("!!../../css-loader/index.js!../../sass-loader/lib/loader.js!./ui-textfield.scss", function() {
			var newContent = require("!!../../css-loader/index.js!../../sass-loader/lib/loader.js!./ui-textfield.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__xinix_xin__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__templates_ui_selectfield_html__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__templates_ui_selectfield_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__templates_ui_selectfield_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scss_ui_textfield_scss__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scss_ui_textfield_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__scss_ui_textfield_scss__);





class UISelectfield extends __WEBPACK_IMPORTED_MODULE_0__xinix_xin__["b" /* Component */] {
  get template () {
    return __WEBPACK_IMPORTED_MODULE_1__templates_ui_selectfield_html___default.a;
  }

  get props () {
    return Object.assign({}, super.props, {
      value: {
        type: String,
        notify: true,
        observer: 'valueChanged(value)',
      },

      label: {
        type: String,
        value: '',
      },

      options: {
        type: Array,
        value: () => ([]),
        observer: 'optionsChanged(options)',
      },

      labelKey: {
        type: String,
        value: 'label',
      },

      valueKey: {
        type: String,
        value: 'value',
      },
    });
  }

  created () {
    super.created();

    this.classList.add('ui-textfield');
    this.classList.add('ui-textfield--stacked');
  }

  ready () {
    super.ready();

    this.optionsChanged(this.options);
  }

  valueChanged (value) {
    this.fire('change');
  }

  optionsChanged (options = []) {
    if (!this.$.field) {
      return;
    }

    this.debounce('optionsChanged', () => {
      options = options || [];

      const fragment = document.createDocumentFragment();

      if (options.length > 0 && options[0][this.valueKey]) {
        let optEl = document.createElement('option');
        fragment.appendChild(optEl);
      }

      options.forEach(opt => {
        const optEl = document.createElement('option');
        optEl.value = opt[this.valueKey];
        optEl.innerHTML = opt[this.labelKey];
        fragment.appendChild(optEl);
      });

      this.$.field.innerHTML = '';
      this.$.field.appendChild(fragment);

      this.$.field.value = this.value || '';
    });
  }
}
/* harmony export (immutable) */ __webpack_exports__["UISelectfield"] = UISelectfield;


__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__xinix_xin__["a" /* define */])('ui-selectfield', UISelectfield);


/***/ })

});
//# sourceMappingURL=9.js.map