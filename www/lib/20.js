webpackJsonp([20],{

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__xinix_xin__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__route_response_html__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__route_response_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__route_response_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__route_response_scss__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__route_response_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__route_response_scss__);






__webpack_require__.e/* import() */(10/* duplicate */).then(__webpack_require__.bind(null, 67));
__webpack_require__.e/* import() */(9/* duplicate */).then(__webpack_require__.bind(null, 71));
__webpack_require__.e/* import() */(8/* duplicate */).then(__webpack_require__.bind(null, 56));
__webpack_require__.e/* import() */(16/* duplicate */).then(__webpack_require__.bind(null, 119));
__webpack_require__.e/* import() */(13/* duplicate */).then(__webpack_require__.bind(null, 120));

class RouteResponse extends __WEBPACK_IMPORTED_MODULE_0__xinix_xin__["b" /* Component */] {
  get template() {
    return __WEBPACK_IMPORTED_MODULE_1__route_response_html___default.a;
  }

  get props() {
    return Object.assign({
      route: {
        type: Object
      },
      response: {
        type: Object,
        observer: 'responseObserved'
      },
      contentType: {
        type: String,
        value: '',
        observer: 'contentTypeObserved'
      }
    }, super.props);
  }

  responseObserved(response) {
    this.classList.remove('visible');

    if (!response) {
      return;
    }

    let contentTypeOptions = [];
    for (let type in response.content) {
      contentTypeOptions.push({ label: type, value: type });
    }
    this.set('contentTypeOptions', contentTypeOptions);

    this.contentTypeObserved(this.contentType);

    this.classList.add('visible');
  }

  contentTypeObserved(type) {
    if (!type || !this.response) {
      this.set('schema', null);
      return;
    }

    let content = this.response.content[type];
    let schema = this.route.resolveSchema(content.schema);

    this.set('schema', schema);
  }
}

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__xinix_xin__["a" /* define */])('route-response', RouteResponse);

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__xinix_xin__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__route_responses_html__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__route_responses_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__route_responses_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__route_responses_scss__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__route_responses_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__route_responses_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__route_response__ = __webpack_require__(146);







__webpack_require__.e/* import() */(10/* duplicate */).then(__webpack_require__.bind(null, 67));
__webpack_require__.e/* import() */(9/* duplicate */).then(__webpack_require__.bind(null, 71));
__webpack_require__.e/* import() */(8/* duplicate */).then(__webpack_require__.bind(null, 56));

class RouteResponses extends __WEBPACK_IMPORTED_MODULE_0__xinix_xin__["b" /* Component */] {
  get template() {
    return __WEBPACK_IMPORTED_MODULE_1__route_responses_html___default.a;
  }

  get props() {
    return Object.assign({
      route: {
        type: Object,
        observer: 'routeObserved'
      },
      contentType: {
        type: String,
        observer: 'contentTypeObserved'
      },
      error: {
        type: Object
      }
    }, super.props);
  }

  routeObserved(route) {
    this.classList.remove('visible');

    this.set('error', null);

    if (!route || !route.responses) {
      return;
    }

    this.classList.add('visible');

    let { responses } = route;

    let contentTypeOptions = [];
    let result = [];
    for (let code in responses) {
      let response = Object.assign({ code }, responses[code]);

      for (let type in response.content) {
        if (!contentTypeOptions.find(opt => opt.value === type)) {
          contentTypeOptions.push({ label: type, value: type });
        }
      }

      result.push(response);
      // if (code === 'default') {
      //   result.unshift(response);
      // } else {
      //   result.push(response);
      // }
    }

    this.set('responses', result);
    this.set('contentTypeOptions', contentTypeOptions);
  }

  contentTypeObserved(type) {
    // FIXME workaround non-items data changed
    this.querySelectorAll('route-response').forEach(el => el.set('contentType', type));
  }

  getContentType() {
    if (!this.route || !this.route.responses) {
      return;
    }

    if (!this.contentType) {
      let err = new Error('Content Type must be set');
      this.set('error', err);
      throw err;
    }

    this.set('error', null);
    return this.contentType;
  }
}

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__xinix_xin__["a" /* define */])('route-responses', RouteResponses);

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "route-response {\n  display: none;\n  margin-bottom: 20px; }\n  route-response.visible {\n    display: block; }\n  route-response .block {\n    display: flex;\n    border: 0; }\n    route-response .block .block__cell {\n      display: flex;\n      flex-direction: column;\n      overflow: auto; }\n      route-response .block .block__cell h4 {\n        font-size: 12px; }\n      route-response .block .block__cell * {\n        padding: 0;\n        margin: 0;\n        box-sizing: border-box; }\n    route-response .block .block--flex {\n      flex: 1; }\n  route-response .scroll {\n    overflow: auto; }\n  route-response .status-code {\n    color: #fff;\n    background-color: red;\n    border: 1px solid red;\n    font-size: 10px;\n    border-radius: 4px;\n    padding: 2px 4px !important; }\n    route-response .status-code[code=\"200\"] {\n      background-color: green;\n      border: 1px solid green; }\n", ""]);

// exports


/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "route-responses {\n  display: none;\n  margin-bottom: 20px; }\n  route-responses.visible {\n    display: block; }\n  route-responses ui-selectfield.error select {\n    border-bottom: 1px solid red !important; }\n", ""]);

// exports


/***/ }),

/***/ 189:
/***/ (function(module, exports) {

module.exports = "<span class=\"status-code\" code$=\"[[response.code]]\">[[response.code]]</span>\n<p>\n  [[response.description]]\n</p>\n\n<div class=\"block\">\n  <value-viewer class=\"block__cell block--flex\" auto-generate=\"true\" readonly=\"true\" schema=\"[[schema]]\"></value-viewer>\n  <schema-viewer class=\"block__cell block--flex\" auto-generate=\"true\" readonly=\"true\" schema=\"[[schema]]\"></schema-viewer>\n</div>\n\n";

/***/ }),

/***/ 190:
/***/ (function(module, exports) {

module.exports = "<h4>Responses</h4>\n\n<ui-selectfield label=\"Content Type\" options=\"[[contentTypeOptions]]\" value=\"{{contentType}}\" class.error=\"[[error]]\"></ui-selectfield>\n\n<xin-for id=\"responseList\" items=\"[[responses]]\" as=\"response\">\n  <template>\n    <route-response route=\"[[route]]\" content-type=\"[[contentType]]\" response=\"[[response]]\"></route-response>\n  </template>\n</xin-for>\n";

/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(171);
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
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./route-response.scss", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./route-response.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(172);
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
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./route-responses.scss", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./route-responses.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=20.js.map