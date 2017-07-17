webpackJsonp([8],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__row__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__for_css__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__for_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__for_css__);





const FILTER_ALL = () => true;

class For extends __WEBPACK_IMPORTED_MODULE_0__component__["a" /* Component */] {
  get props () {
    return Object.assign({}, super.props, {
      items: {
        type: Array,
        observer: '_itemsChanged(items, filter)',
      },

      as: {
        type: String,
        value: 'item',
      },

      indexAs: {
        type: String,
        value: 'index',
      },

      filter: {
        type: Function,
        observer: '_itemsChanged(items, filter)',
      },
    });
  }

  created () {
    super.created();

    this.rows = [];
  }

  __initTemplate () {
    this.__templateFor = this.firstElementChild;
    // this.__templateFor.__templateHost = this.__templateHost;
    this.removeChild(this.__templateFor);
    __WEBPACK_IMPORTED_MODULE_0__component__["b" /* T */].prototype.__templateInitialize.call(this, null, this);
  }

  _itemsChanged (items, filter) {
    this.debounce('_itemsChanged', () => {
      let len = 0;

      if (items && items.length) {
        let filter = this.filter || FILTER_ALL;
        items.filter(filter).forEach((item, index) => {
          if (this.rows[index]) {
            this.rows[index].update(item, index);
          } else {
            this.rows.push(new __WEBPACK_IMPORTED_MODULE_1__row__["a" /* Row */](this.__templateFor, this, item, index));
          }

          len++;
        });
      }

      // move to detach
      this.rows.splice(len).forEach(row => {
        row.__templateUninitialize();
      });
    });
  }

  itemForElement (element) {
    while (element && !element.__repeatModel) {
      element = element.parentElement;
    }
    return element.__repeatModel.get(this.as);
  }

  indexForElement (element) {
    while (element && !element.__repeatModel) {
      element = element.parentElement;
    }
    return element.__repeatModel.get(this.indexAs);
  }

  modelForElement (element) {
    while (element && !element.__repeatModel) {
      element = element.parentElement;
    }
    return element.__repeatModel;
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = For;

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__component__["c" /* define */])('xin-for', For);

/* unused harmony default export */ var _unused_webpack_default_export = (For);


/***/ }),

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "xin-for {\n  display: none;\n  visibility: hidden; }\n", ""]);

// exports


/***/ }),

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(104);
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
		module.hot.accept("!!../../../../css-loader/index.js!../../../../sass-loader/lib/loader.js!./for.css", function() {
			var newContent = require("!!../../../../css-loader/index.js!../../../../sass-loader/lib/loader.js!./for.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__for__ = __webpack_require__(100);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "For", function() { return __WEBPACK_IMPORTED_MODULE_0__for__["a"]; });


/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__for__["a" /* For */]);


/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component__ = __webpack_require__(44);


class Row extends __WEBPACK_IMPORTED_MODULE_0__component__["b" /* T */] {
  constructor (template, host, item, index) {
    super();

    // override T constructor
    this.__templateInitialize(template, host.__templateModel, host);

    this.is = '$repeat-row';
    this.__id = this.__templateId;

    this.__repeat = host;
    this.__repeatAs = host.as;
    this.__repeatIndexAs = host.indexAs;

    this.__templateChildNodes.forEach(node => {
      if (node.nodeType === window.Node.ELEMENT_NODE) {
        node.__repeatModel = this;
      }
    });

    this.update(item, index);

    this.__templateRender();
  }

  get __app () {
    return this.__templateHost.__app;
  }

  update (item, index) {
    this[this.__repeatAs] = item;
    this[this.__repeatIndexAs] = index;
    this.notify(this.__repeatAs, item);
    this.notify(this.__repeatIndexAs, index);
  }

  set (path, value) {
    path = this.__templateGetPathAsArray(path);

    if (path[0] === this.__repeatAs || path[0] === this.__repeatIndexAs) {
      return super.set(path, value);
    }

    return this.__templateHost.set(path, value);
  }

  get (path) {
    path = this.__templateGetPathAsArray(path);

    if (path[0] === this.__repeatAs || path[0] === this.__repeatIndexAs) {
      return super.get(path);
    }

    return this.__templateHost.get(path);
  }

  notify (path, value) {
    path = this.__templateGetPathAsArray(path);

    if (path[0] === this.__repeatAs || path[0] === this.__repeatIndexAs) {
      return super.notify(path, value);
    }

    return this.__templateHost.notify(path, value);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Row;



/***/ })

});
//# sourceMappingURL=8.js.map