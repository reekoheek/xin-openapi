webpackJsonp([16],{

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__xinix_xin__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prismjs__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prismjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prismjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schema_viewer_html__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schema_viewer_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__schema_viewer_html__);





class SchemaViewer extends __WEBPACK_IMPORTED_MODULE_0__xinix_xin__["b" /* Component */] {
  get template() {
    return __WEBPACK_IMPORTED_MODULE_2__schema_viewer_html___default.a;
  }

  get props() {
    return Object.assign({
      schema: {
        type: Object,
        value: () => null
      }
    }, super.props);
  }

  format(schema) {
    if (!schema) {
      return;
    }
    let value = JSON.stringify(schema, null, 2);
    return __WEBPACK_IMPORTED_MODULE_1_prismjs___default.a.highlight(value, __WEBPACK_IMPORTED_MODULE_1_prismjs___default.a.languages.javascript);
  }
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__xinix_xin__["a" /* define */])('schema-viewer', SchemaViewer);

/***/ }),

/***/ 191:
/***/ (function(module, exports) {

module.exports = "<h4>Schema</h4>\n<pre html=\"[[format(schema)]]\"></pre>\n";

/***/ })

});
//# sourceMappingURL=16.js.map