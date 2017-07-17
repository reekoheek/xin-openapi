webpackJsonp([13],{

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__xinix_xin__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prismjs__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prismjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prismjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__value_viewer_html__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__value_viewer_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__value_viewer_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__value_viewer_scss__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__value_viewer_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__value_viewer_scss__);







class ValueViewer extends __WEBPACK_IMPORTED_MODULE_0__xinix_xin__["b" /* Component */] {
  get template() {
    return __WEBPACK_IMPORTED_MODULE_2__value_viewer_html___default.a;
  }

  get props() {
    return Object.assign({
      schema: {
        type: Object,
        value: () => null,
        observer: 'schemaObserved'
      },
      autoGenerate: {
        type: Boolean
      },
      readonly: {
        type: Boolean
      },
      value: {
        type: String,
        value: '',
        notify: true
      }
    }, super.props);
  }

  // formatValue (schema) {
  //   if (!schema) {
  //     return;
  //   }
  //   return Prism.highlight(this.generateValue(schema), Prism.languages.javascript);
  // }

  generate(schema) {
    if (!this.schema) {
      return '';
    }

    let generated = this.schema.getDefaultValue(true);
    if (typeof generated === 'string' || typeof generated === 'number') {
      return generated;
    }

    return JSON.stringify(generated, null, 2);
  }

  doGenerate(evt) {
    evt.preventDefault();
    this.set('value', this.generate(this.schema));
  }

  doClear(evt) {
    evt.preventDefault();
    this.set('value', '');
  }

  schemaObserved(schema) {
    if (this.autoGenerate) {
      this.set('value', this.generate(schema));
    } else {
      this.set('value', '');
    }
  }
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__xinix_xin__["a" /* define */])('value-viewer', ValueViewer);

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "value-viewer h4.readonly a {\n  display: none; }\n\nvalue-viewer textarea {\n  outline: none;\n  width: 100%;\n  height: 100%; }\n  value-viewer textarea[disabled] {\n    background-color: #eee; }\n\nvalue-viewer.error textarea {\n  border: 1px solid red; }\n", ""]);

// exports


/***/ }),

/***/ 192:
/***/ (function(module, exports) {

module.exports = "<h4 class.readonly=\"[[readonly]]\">\n  Value\n  <a href=\"#\" (click)=\"doGenerate(evt)\">generate</a>\n  <a href=\"#\" (click)=\"doClear(evt)\">clear</a>\n</h4>\n<textarea value=\"{{value}}\" disabled$=\"[[readonly]]\"></textarea>\n<!-- <pre html=\"[[formatValue(schema)]]\"></pre> -->\n";

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(173);
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
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./value-viewer.scss", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./value-viewer.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=13.js.map