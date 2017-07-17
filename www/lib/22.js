webpackJsonp([22],{

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__xinix_xin__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__route_body_html__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__route_body_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__route_body_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__route_body_scss__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__route_body_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__route_body_scss__);






__webpack_require__.e/* import() */(10/* duplicate */).then(__webpack_require__.bind(null, 67));
__webpack_require__.e/* import() */(9/* duplicate */).then(__webpack_require__.bind(null, 71));
__webpack_require__.e/* import() */(8/* duplicate */).then(__webpack_require__.bind(null, 56));

class RouteBody extends __WEBPACK_IMPORTED_MODULE_0__xinix_xin__["b" /* Component */] {
  get template() {
    return __WEBPACK_IMPORTED_MODULE_1__route_body_html___default.a;
  }

  get props() {
    return Object.assign({
      route: {
        type: Object,
        observer: 'routeObserved'
      },
      contentType: {
        type: String,
        value: '',
        observer: 'contentTypeObserved'
      },
      contentTypeError: {
        type: Object
      },
      bodyError: {
        type: Object
      }
    }, super.props);
  }

  routeObserved(route) {
    this.classList.remove('visible');

    this.set('contentTypeError', null);
    this.set('bodyError', null);

    if (!route || !route.requestBody) {
      return;
    }

    let { requestBody } = route;

    this.classList.add('visible');

    let contentTypeOptions = [];
    for (let type in requestBody.content) {
      contentTypeOptions.push({ label: type, value: type });
    }

    this.set('contentTypeOptions', contentTypeOptions);
  }

  contentTypeObserved(type) {
    if (!type) {
      this.set('schema', null);
      return;
    }
    let content = this.route.requestBody.content[type];
    let schema = this.route.resolveSchema(content.schema);
    this.set('schema', schema);
  }

  getValue() {
    this.set('contentTypeError', null);
    this.set('bodyError', null);

    if (!this.route || !this.route.requestBody) {
      return;
    }

    if (this.route.requestBody.required) {
      if (!this.contentType) {
        let err = new Error('Content type is required');
        this.set('contentTypeError', err);
      }

      if (!this.body) {
        let err = new Error('Body is required');
        this.set('bodyError', err);
      }

      let err = this.contentTypeError || this.bodyError;
      if (err) {
        throw err;
      }
    } else {
      if (!this.body) {
        return;
      }
    }

    let { body: payload, contentType } = this;
    return { payload, contentType };
  }
}

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__xinix_xin__["a" /* define */])('route-body', RouteBody);

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "route-body {\n  display: none;\n  margin-bottom: 20px; }\n  route-body.visible {\n    display: block; }\n  route-body .block {\n    display: flex;\n    border: 0; }\n    route-body .block .block__cell {\n      display: flex;\n      flex-direction: column;\n      overflow: auto; }\n      route-body .block .block__cell h4 {\n        font-size: 12px; }\n      route-body .block .block__cell * {\n        padding: 0;\n        margin: 0;\n        box-sizing: border-box; }\n    route-body .block .block--flex {\n      flex: 1; }\n  route-body .scroll {\n    overflow: auto; }\n  route-body ui-selectfield.error select {\n    border-bottom: 1px solid red !important; }\n", ""]);

// exports


/***/ }),

/***/ 185:
/***/ (function(module, exports) {

module.exports = "<h4>Request Body <span class=\"route--required\" hidden=\"[[route.requestBody.required|not]]\">required</span></h4>\n\n<p>[[route.requestBody.description]]</p>\n\n<ui-selectfield label=\"Content Type\" options=\"[[contentTypeOptions]]\" value=\"{{contentType}}\" class.error=\"[[contentTypeError]]\"></ui-selectfield>\n\n<div class=\"block\">\n  <value-viewer class=\"block__cell block--flex\" schema=\"[[schema]]\" value=\"{{body}}\" class.error=\"[[bodyError]]\"></value-viewer>\n  <schema-viewer class=\"block__cell block--flex\" schema=\"[[schema]]\"></schema-viewer>\n</div>\n\n";

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(167);
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
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./route-body.scss", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./route-body.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=22.js.map