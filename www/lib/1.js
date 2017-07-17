webpackJsonp([1,4,7,11,12,14,15,23],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__xinix_xin__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__xinix_xin_views__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_home_html__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_home_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__my_home_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__my_home_scss__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__my_home_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__my_home_scss__);






__webpack_require__.e/* import() */(8/* duplicate */).then(__webpack_require__.bind(null, 56));
__webpack_require__.e/* import() */(9/* duplicate */).then(__webpack_require__.bind(null, 71));

class MyHome extends __WEBPACK_IMPORTED_MODULE_1__xinix_xin_views__["View"] {
  get props() {
    return Object.assign({}, super.props, {
      spec: {
        type: Object,
        observer: 'observeSpec'
      }
    });
  }

  get template() {
    return __WEBPACK_IMPORTED_MODULE_2__my_home_html___default.a;
  }

  observeSpec(spec) {
    this.set('serverOptions', (spec.servers || []).map(server => {
      return { label: server.url, value: server.url };
    }));
  }
}
/* harmony export (immutable) */ __webpack_exports__["MyHome"] = MyHome;

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__xinix_xin__["a" /* define */])('my-home', MyHome);

/***/ }),
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-layout ui-layout--v\">\n  <header class=\"ui-header\">\n    <div class=\"ui-header__row\">\n      <button class=\"ui-button ui-button--icon ui-drawer--handle\" (click)=\"__global.drawer.open()\">\n        <i class=\"material-icons\">menu</i>\n      </button>\n      <span class=\"ui-header__title\">[[spec.info.title]]</span>\n    </div>\n  </header>\n\n  <div class=\"ui-padding scroll-x\">\n    <div class=\"block\">\n      <div class=\"block_row\">\n        <label>OpenAPI Version</label>\n        <span>[[spec.openapi]]</span>\n      </div>\n    </div>\n\n    <div class=\"block\">\n      <h3>Info</h3>\n\n      <div class=\"block_row\">\n        <label>License</label>\n        <span>[[spec.info.license.name]]</span>\n      </div>\n\n      <div class=\"block_row\">\n        <label>Title</label>\n        <span>[[spec.info.title]]</span>\n      </div>\n\n      <div class=\"block_row\">\n        <label>Version</label>\n        <span>[[spec.info.version]]</span>\n      </div>\n    </div>\n\n    <ui-selectfield label=\"Selected Server\" options=\"[[serverOptions]]\" value=\"{{spec.selectedServer}}\" class.error=\"[[contentTypeError]]\"></ui-selectfield>\n  </div>\n</div>\n";

/***/ }),
/* 41 */,
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(105);
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
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./my-home.scss", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./my-home.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 43 */,
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__define__ = __webpack_require__(83);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__define__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base__ = __webpack_require__(63);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__base__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component__ = __webpack_require__(82);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__template__ = __webpack_require__(64);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__template__["a"]; });






/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class BaseAccessor {
  constructor (node, name) {
    this.node = node;
    this.name = name;
  }

  set (value) {
    if (typeof this.node.set === 'function') {
      this.node.set(this.name, value);
    } else {
      this.node[this.name] = value;
    }
  }

  get () {
    if (typeof this.node.get === 'function') {
      return this.node.get(this.name);
    } else {
      return this.node[this.name];
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = BaseAccessor;



/***/ }),
/* 46 */,
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component__ = __webpack_require__(44);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__core__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__component__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__component__["a"]; });



/* unused harmony default export */ var _unused_webpack_default_export = ((function () {
  let repository = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core__["d" /* getInstance */])();

  if ('Component' in repository === false) {
    Object.defineProperties(repository, {
      Component: {
        get () {
          __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core__["e" /* deprecated */])('xin.Component', 'import { Component } from \'@xinix/xin\'');
          return __WEBPACK_IMPORTED_MODULE_1__component__["a" /* Component */];
        },
      },

      define: {
        get () {
          __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core__["e" /* deprecated */])('xin.define', 'import { define } from \'@xinix/xin\'');
          return __WEBPACK_IMPORTED_MODULE_1__component__["c" /* define */];
        },
      },
    });
  }

  return repository;
})());




/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__(52);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "View", function() { return __WEBPACK_IMPORTED_MODULE_0__view__["View"]; });



/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, ".xin-view {\n  box-sizing: border-box;\n  display: none; }\n\n.xin-view.xin-view--visible {\n  display: block; }\n", ""]);

// exports


/***/ }),
/* 50 */
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
/* 51 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 52 */
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


/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__token__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__filter__ = __webpack_require__(84);



const CACHE = {
  's': {
    '[': {},
    '{': {},
  },
  'v': {
    '[': {},
    '{': {},
  },
};

function _get (value, mode, type) {
  let cache = CACHE[type][mode];
  if (value in cache) {
    return cache[value];
  }

  let expr = new Expr(value, mode, type);
  if (type !== 's') {
    cache[value] = expr;
  }

  return expr;
}

class Expr {
  static get CACHE () {
    return CACHE;
  }

  static get (value, unwrapped) {
    value = (value || '').trim();

    if (unwrapped) {
      return _get(value, '[', 'v');
    }

    let mode = value[0];
    if ((mode === '[' || mode === '{') && value[1] === mode) {
      value = value.slice(2, -2).trim();
      return _get(value, mode, 'v');
    }

    return _get(value, '[', 's');
  }

  static getFn (value, args, unwrapped) {
    return Expr.get(value.indexOf('(') === -1 ? `${value}(${args.join(', ')})` : value, unwrapped);
  }

  static rawTokenize (str) {
    let count = 0;
    let tokens = [];

    while (str && count++ < 10) {
      let matches = str.match(/^\s*("[^"]*"|[^,]+),?/);

      str = str.substr(matches[0].length);
      tokens.push(matches[1].trim());
    }

    return tokens;
  }

  static tokenize (str) {
    return Expr.rawTokenize(str).map(token => __WEBPACK_IMPORTED_MODULE_0__token__["a" /* Token */].get(token));
  }

  constructor (value, mode, type) {
    // define base properties
    this.mode = mode;
    this.type = type;
    this.name = '';
    this.args = [];
    this.filters = [];
    this.value = value;

    if (type === 's') {
      return;
    }

    let tokens = value.split('|');
    let token = tokens[0].trim();

    this.filters = tokens.slice(1).map(word => {
      return __WEBPACK_IMPORTED_MODULE_1__filter__["a" /* Filter */].get(word.trim());
    });

    if (token.indexOf('(') < 0) {
      this.type = 'p';
      this.name = token;
      this.args.push(__WEBPACK_IMPORTED_MODULE_0__token__["a" /* Token */].get(token));
    } else {
      // force mode to '[' when type is !p
      this.mode = '[';
      this.type = 'm';

      let matches = token.match(/([^(]+)\(([^)]*)\)/);

      this.name = matches[1].trim();
      this.fn = __WEBPACK_IMPORTED_MODULE_0__token__["a" /* Token */].get(this.name);

      this.args = Expr.tokenize(matches[2]);
    }
  }

  get constant () {
    return this.type !== 'm' && this.vpaths.length !== this.args.length;
  }

  get vpaths () {
    if (!this._vpaths) {
      let paths = [];
      this.args.forEach(arg => {
        if (arg.type === 'v' && paths.indexOf(arg.name) === -1) {
          paths.push(arg);
        }
      });
      this._vpaths = paths;
    }

    return this._vpaths;
  }

  invoke (context, otherArgs) {
    if (this.type === 'p') {
      let val = this.args[0].value(context, otherArgs);
      return this.filters.reduce((val, filter) => filter.invoke(val), val);
    }

    let args = this.args.map(arg => {
      return arg.value(context, otherArgs);
    });

    return this.fn.invoke(args, context, context.__templateHost);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Expr;



/***/ }),
/* 54 */,
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
/* **********************************************
     Begin prism-core.js
********************************************** */

var _self = (typeof window !== 'undefined')
	? window   // if in browser
	: (
		(typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope)
		? self // if in worker
		: {}   // if in node js
	);

/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 * MIT license http://www.opensource.org/licenses/mit-license.php/
 * @author Lea Verou http://lea.verou.me
 */

var Prism = (function(){

// Private helper vars
var lang = /\blang(?:uage)?-(\w+)\b/i;
var uniqueId = 0;

var _ = _self.Prism = {
	util: {
		encode: function (tokens) {
			if (tokens instanceof Token) {
				return new Token(tokens.type, _.util.encode(tokens.content), tokens.alias);
			} else if (_.util.type(tokens) === 'Array') {
				return tokens.map(_.util.encode);
			} else {
				return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
			}
		},

		type: function (o) {
			return Object.prototype.toString.call(o).match(/\[object (\w+)\]/)[1];
		},

		objId: function (obj) {
			if (!obj['__id']) {
				Object.defineProperty(obj, '__id', { value: ++uniqueId });
			}
			return obj['__id'];
		},

		// Deep clone a language definition (e.g. to extend it)
		clone: function (o) {
			var type = _.util.type(o);

			switch (type) {
				case 'Object':
					var clone = {};

					for (var key in o) {
						if (o.hasOwnProperty(key)) {
							clone[key] = _.util.clone(o[key]);
						}
					}

					return clone;

				case 'Array':
					// Check for existence for IE8
					return o.map && o.map(function(v) { return _.util.clone(v); });
			}

			return o;
		}
	},

	languages: {
		extend: function (id, redef) {
			var lang = _.util.clone(_.languages[id]);

			for (var key in redef) {
				lang[key] = redef[key];
			}

			return lang;
		},

		/**
		 * Insert a token before another token in a language literal
		 * As this needs to recreate the object (we cannot actually insert before keys in object literals),
		 * we cannot just provide an object, we need anobject and a key.
		 * @param inside The key (or language id) of the parent
		 * @param before The key to insert before. If not provided, the function appends instead.
		 * @param insert Object with the key/value pairs to insert
		 * @param root The object that contains `inside`. If equal to Prism.languages, it can be omitted.
		 */
		insertBefore: function (inside, before, insert, root) {
			root = root || _.languages;
			var grammar = root[inside];

			if (arguments.length == 2) {
				insert = arguments[1];

				for (var newToken in insert) {
					if (insert.hasOwnProperty(newToken)) {
						grammar[newToken] = insert[newToken];
					}
				}

				return grammar;
			}

			var ret = {};

			for (var token in grammar) {

				if (grammar.hasOwnProperty(token)) {

					if (token == before) {

						for (var newToken in insert) {

							if (insert.hasOwnProperty(newToken)) {
								ret[newToken] = insert[newToken];
							}
						}
					}

					ret[token] = grammar[token];
				}
			}

			// Update references in other language definitions
			_.languages.DFS(_.languages, function(key, value) {
				if (value === root[inside] && key != inside) {
					this[key] = ret;
				}
			});

			return root[inside] = ret;
		},

		// Traverse a language definition with Depth First Search
		DFS: function(o, callback, type, visited) {
			visited = visited || {};
			for (var i in o) {
				if (o.hasOwnProperty(i)) {
					callback.call(o, i, o[i], type || i);

					if (_.util.type(o[i]) === 'Object' && !visited[_.util.objId(o[i])]) {
						visited[_.util.objId(o[i])] = true;
						_.languages.DFS(o[i], callback, null, visited);
					}
					else if (_.util.type(o[i]) === 'Array' && !visited[_.util.objId(o[i])]) {
						visited[_.util.objId(o[i])] = true;
						_.languages.DFS(o[i], callback, i, visited);
					}
				}
			}
		}
	},
	plugins: {},

	highlightAll: function(async, callback) {
		var env = {
			callback: callback,
			selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
		};

		_.hooks.run("before-highlightall", env);

		var elements = env.elements || document.querySelectorAll(env.selector);

		for (var i=0, element; element = elements[i++];) {
			_.highlightElement(element, async === true, env.callback);
		}
	},

	highlightElement: function(element, async, callback) {
		// Find language
		var language, grammar, parent = element;

		while (parent && !lang.test(parent.className)) {
			parent = parent.parentNode;
		}

		if (parent) {
			language = (parent.className.match(lang) || [,''])[1].toLowerCase();
			grammar = _.languages[language];
		}

		// Set language on the element, if not present
		element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;

		// Set language on the parent, for styling
		parent = element.parentNode;

		if (/pre/i.test(parent.nodeName)) {
			parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
		}

		var code = element.textContent;

		var env = {
			element: element,
			language: language,
			grammar: grammar,
			code: code
		};

		_.hooks.run('before-sanity-check', env);

		if (!env.code || !env.grammar) {
			if (env.code) {
				env.element.textContent = env.code;
			}
			_.hooks.run('complete', env);
			return;
		}

		_.hooks.run('before-highlight', env);

		if (async && _self.Worker) {
			var worker = new Worker(_.filename);

			worker.onmessage = function(evt) {
				env.highlightedCode = evt.data;

				_.hooks.run('before-insert', env);

				env.element.innerHTML = env.highlightedCode;

				callback && callback.call(env.element);
				_.hooks.run('after-highlight', env);
				_.hooks.run('complete', env);
			};

			worker.postMessage(JSON.stringify({
				language: env.language,
				code: env.code,
				immediateClose: true
			}));
		}
		else {
			env.highlightedCode = _.highlight(env.code, env.grammar, env.language);

			_.hooks.run('before-insert', env);

			env.element.innerHTML = env.highlightedCode;

			callback && callback.call(element);

			_.hooks.run('after-highlight', env);
			_.hooks.run('complete', env);
		}
	},

	highlight: function (text, grammar, language) {
		var tokens = _.tokenize(text, grammar);
		return Token.stringify(_.util.encode(tokens), language);
	},

	tokenize: function(text, grammar, language) {
		var Token = _.Token;

		var strarr = [text];

		var rest = grammar.rest;

		if (rest) {
			for (var token in rest) {
				grammar[token] = rest[token];
			}

			delete grammar.rest;
		}

		tokenloop: for (var token in grammar) {
			if(!grammar.hasOwnProperty(token) || !grammar[token]) {
				continue;
			}

			var patterns = grammar[token];
			patterns = (_.util.type(patterns) === "Array") ? patterns : [patterns];

			for (var j = 0; j < patterns.length; ++j) {
				var pattern = patterns[j],
					inside = pattern.inside,
					lookbehind = !!pattern.lookbehind,
					greedy = !!pattern.greedy,
					lookbehindLength = 0,
					alias = pattern.alias;

				if (greedy && !pattern.pattern.global) {
					// Without the global flag, lastIndex won't work
					var flags = pattern.pattern.toString().match(/[imuy]*$/)[0];
					pattern.pattern = RegExp(pattern.pattern.source, flags + "g");
				}

				pattern = pattern.pattern || pattern;

				// Don’t cache length as it changes during the loop
				for (var i=0, pos = 0; i<strarr.length; pos += strarr[i].length, ++i) {

					var str = strarr[i];

					if (strarr.length > text.length) {
						// Something went terribly wrong, ABORT, ABORT!
						break tokenloop;
					}

					if (str instanceof Token) {
						continue;
					}

					pattern.lastIndex = 0;

					var match = pattern.exec(str),
					    delNum = 1;

					// Greedy patterns can override/remove up to two previously matched tokens
					if (!match && greedy && i != strarr.length - 1) {
						pattern.lastIndex = pos;
						match = pattern.exec(text);
						if (!match) {
							break;
						}

						var from = match.index + (lookbehind ? match[1].length : 0),
						    to = match.index + match[0].length,
						    k = i,
						    p = pos;

						for (var len = strarr.length; k < len && p < to; ++k) {
							p += strarr[k].length;
							// Move the index i to the element in strarr that is closest to from
							if (from >= p) {
								++i;
								pos = p;
							}
						}

						/*
						 * If strarr[i] is a Token, then the match starts inside another Token, which is invalid
						 * If strarr[k - 1] is greedy we are in conflict with another greedy pattern
						 */
						if (strarr[i] instanceof Token || strarr[k - 1].greedy) {
							continue;
						}

						// Number of tokens to delete and replace with the new match
						delNum = k - i;
						str = text.slice(pos, p);
						match.index -= pos;
					}

					if (!match) {
						continue;
					}

					if(lookbehind) {
						lookbehindLength = match[1].length;
					}

					var from = match.index + lookbehindLength,
					    match = match[0].slice(lookbehindLength),
					    to = from + match.length,
					    before = str.slice(0, from),
					    after = str.slice(to);

					var args = [i, delNum];

					if (before) {
						args.push(before);
					}

					var wrapped = new Token(token, inside? _.tokenize(match, inside) : match, alias, match, greedy);

					args.push(wrapped);

					if (after) {
						args.push(after);
					}

					Array.prototype.splice.apply(strarr, args);
				}
			}
		}

		return strarr;
	},

	hooks: {
		all: {},

		add: function (name, callback) {
			var hooks = _.hooks.all;

			hooks[name] = hooks[name] || [];

			hooks[name].push(callback);
		},

		run: function (name, env) {
			var callbacks = _.hooks.all[name];

			if (!callbacks || !callbacks.length) {
				return;
			}

			for (var i=0, callback; callback = callbacks[i++];) {
				callback(env);
			}
		}
	}
};

var Token = _.Token = function(type, content, alias, matchedStr, greedy) {
	this.type = type;
	this.content = content;
	this.alias = alias;
	// Copy of the full string this token was created from
	this.length = (matchedStr || "").length|0;
	this.greedy = !!greedy;
};

Token.stringify = function(o, language, parent) {
	if (typeof o == 'string') {
		return o;
	}

	if (_.util.type(o) === 'Array') {
		return o.map(function(element) {
			return Token.stringify(element, language, o);
		}).join('');
	}

	var env = {
		type: o.type,
		content: Token.stringify(o.content, language, parent),
		tag: 'span',
		classes: ['token', o.type],
		attributes: {},
		language: language,
		parent: parent
	};

	if (env.type == 'comment') {
		env.attributes['spellcheck'] = 'true';
	}

	if (o.alias) {
		var aliases = _.util.type(o.alias) === 'Array' ? o.alias : [o.alias];
		Array.prototype.push.apply(env.classes, aliases);
	}

	_.hooks.run('wrap', env);

	var attributes = Object.keys(env.attributes).map(function(name) {
		return name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
	}).join(' ');

	return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + (attributes ? ' ' + attributes : '') + '>' + env.content + '</' + env.tag + '>';

};

if (!_self.document) {
	if (!_self.addEventListener) {
		// in Node.js
		return _self.Prism;
	}
 	// In worker
	_self.addEventListener('message', function(evt) {
		var message = JSON.parse(evt.data),
		    lang = message.language,
		    code = message.code,
		    immediateClose = message.immediateClose;

		_self.postMessage(_.highlight(code, _.languages[lang], lang));
		if (immediateClose) {
			_self.close();
		}
	}, false);

	return _self.Prism;
}

//Get current script and highlight
var script = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();

if (script) {
	_.filename = script.src;

	if (document.addEventListener && !script.hasAttribute('data-manual')) {
		if(document.readyState !== "loading") {
			if (window.requestAnimationFrame) {
				window.requestAnimationFrame(_.highlightAll);
			} else {
				window.setTimeout(_.highlightAll, 16);
			}
		}
		else {
			document.addEventListener('DOMContentLoaded', _.highlightAll);
		}
	}
}

return _self.Prism;

})();

if (typeof module !== 'undefined' && module.exports) {
	module.exports = Prism;
}

// hack for components to work correctly in node.js
if (typeof global !== 'undefined') {
	global.Prism = Prism;
}


/* **********************************************
     Begin prism-markup.js
********************************************** */

Prism.languages.markup = {
	'comment': /<!--[\w\W]*?-->/,
	'prolog': /<\?[\w\W]+?\?>/,
	'doctype': /<!DOCTYPE[\w\W]+?>/i,
	'cdata': /<!\[CDATA\[[\w\W]*?]]>/i,
	'tag': {
		pattern: /<\/?(?!\d)[^\s>\/=$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,
		inside: {
			'tag': {
				pattern: /^<\/?[^\s>\/]+/i,
				inside: {
					'punctuation': /^<\/?/,
					'namespace': /^[^\s>\/:]+:/
				}
			},
			'attr-value': {
				pattern: /=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,
				inside: {
					'punctuation': /[=>"']/
				}
			},
			'punctuation': /\/?>/,
			'attr-name': {
				pattern: /[^\s>\/]+/,
				inside: {
					'namespace': /^[^\s>\/:]+:/
				}
			}

		}
	},
	'entity': /&#?[\da-z]{1,8};/i
};

// Plugin to make entity title show the real entity, idea by Roman Komarov
Prism.hooks.add('wrap', function(env) {

	if (env.type === 'entity') {
		env.attributes['title'] = env.content.replace(/&amp;/, '&');
	}
});

Prism.languages.xml = Prism.languages.markup;
Prism.languages.html = Prism.languages.markup;
Prism.languages.mathml = Prism.languages.markup;
Prism.languages.svg = Prism.languages.markup;


/* **********************************************
     Begin prism-css.js
********************************************** */

Prism.languages.css = {
	'comment': /\/\*[\w\W]*?\*\//,
	'atrule': {
		pattern: /@[\w-]+?.*?(;|(?=\s*\{))/i,
		inside: {
			'rule': /@[\w-]+/
			// See rest below
		}
	},
	'url': /url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
	'selector': /[^\{\}\s][^\{\};]*?(?=\s*\{)/,
	'string': {
		pattern: /("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,
		greedy: true
	},
	'property': /(\b|\B)[\w-]+(?=\s*:)/i,
	'important': /\B!important\b/i,
	'function': /[-a-z0-9]+(?=\()/i,
	'punctuation': /[(){};:]/
};

Prism.languages.css['atrule'].inside.rest = Prism.util.clone(Prism.languages.css);

if (Prism.languages.markup) {
	Prism.languages.insertBefore('markup', 'tag', {
		'style': {
			pattern: /(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,
			lookbehind: true,
			inside: Prism.languages.css,
			alias: 'language-css'
		}
	});
	
	Prism.languages.insertBefore('inside', 'attr-value', {
		'style-attr': {
			pattern: /\s*style=("|').*?\1/i,
			inside: {
				'attr-name': {
					pattern: /^\s*style/i,
					inside: Prism.languages.markup.tag.inside
				},
				'punctuation': /^\s*=\s*['"]|['"]\s*$/,
				'attr-value': {
					pattern: /.+/i,
					inside: Prism.languages.css
				}
			},
			alias: 'language-css'
		}
	}, Prism.languages.markup.tag);
}

/* **********************************************
     Begin prism-clike.js
********************************************** */

Prism.languages.clike = {
	'comment': [
		{
			pattern: /(^|[^\\])\/\*[\w\W]*?\*\//,
			lookbehind: true
		},
		{
			pattern: /(^|[^\\:])\/\/.*/,
			lookbehind: true
		}
	],
	'string': {
		pattern: /(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
		greedy: true
	},
	'class-name': {
		pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,
		lookbehind: true,
		inside: {
			punctuation: /(\.|\\)/
		}
	},
	'keyword': /\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
	'boolean': /\b(true|false)\b/,
	'function': /[a-z0-9_]+(?=\()/i,
	'number': /\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,
	'operator': /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
	'punctuation': /[{}[\];(),.:]/
};


/* **********************************************
     Begin prism-javascript.js
********************************************** */

Prism.languages.javascript = Prism.languages.extend('clike', {
	'keyword': /\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
	'number': /\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,
	// Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
	'function': /[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i,
	'operator': /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*\*?|\/|~|\^|%|\.{3}/
});

Prism.languages.insertBefore('javascript', 'keyword', {
	'regex': {
		pattern: /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,
		lookbehind: true,
		greedy: true
	}
});

Prism.languages.insertBefore('javascript', 'string', {
	'template-string': {
		pattern: /`(?:\\\\|\\?[^\\])*?`/,
		greedy: true,
		inside: {
			'interpolation': {
				pattern: /\$\{[^}]+\}/,
				inside: {
					'interpolation-punctuation': {
						pattern: /^\$\{|\}$/,
						alias: 'punctuation'
					},
					rest: Prism.languages.javascript
				}
			},
			'string': /[\s\S]+/
		}
	}
});

if (Prism.languages.markup) {
	Prism.languages.insertBefore('markup', 'tag', {
		'script': {
			pattern: /(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,
			lookbehind: true,
			inside: Prism.languages.javascript,
			alias: 'language-javascript'
		}
	});
}

Prism.languages.js = Prism.languages.javascript;

/* **********************************************
     Begin prism-file-highlight.js
********************************************** */

(function () {
	if (typeof self === 'undefined' || !self.Prism || !self.document || !document.querySelector) {
		return;
	}

	self.Prism.fileHighlight = function() {

		var Extensions = {
			'js': 'javascript',
			'py': 'python',
			'rb': 'ruby',
			'ps1': 'powershell',
			'psm1': 'powershell',
			'sh': 'bash',
			'bat': 'batch',
			'h': 'c',
			'tex': 'latex'
		};

		if(Array.prototype.forEach) { // Check to prevent error in IE8
			Array.prototype.slice.call(document.querySelectorAll('pre[data-src]')).forEach(function (pre) {
				var src = pre.getAttribute('data-src');

				var language, parent = pre;
				var lang = /\blang(?:uage)?-(?!\*)(\w+)\b/i;
				while (parent && !lang.test(parent.className)) {
					parent = parent.parentNode;
				}

				if (parent) {
					language = (pre.className.match(lang) || [, ''])[1];
				}

				if (!language) {
					var extension = (src.match(/\.(\w+)$/) || [, ''])[1];
					language = Extensions[extension] || extension;
				}

				var code = document.createElement('code');
				code.className = 'language-' + language;

				pre.textContent = '';

				code.textContent = 'Loading…';

				pre.appendChild(code);

				var xhr = new XMLHttpRequest();

				xhr.open('GET', src, true);

				xhr.onreadystatechange = function () {
					if (xhr.readyState == 4) {

						if (xhr.status < 400 && xhr.responseText) {
							code.textContent = xhr.responseText;

							Prism.highlightElement(code);
						}
						else if (xhr.status >= 400) {
							code.textContent = '✖ Error ' + xhr.status + ' while fetching file: ' + xhr.statusText;
						}
						else {
							code.textContent = '✖ Error: File does not exist or is empty';
						}
					}
				};

				xhr.send(null);
			});
		}

	};

	document.addEventListener('DOMContentLoaded', self.Prism.fileHighlight);

})();

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(51)))

/***/ }),
/* 56 */,
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_marked__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_marked___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_marked__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prismjs__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prismjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prismjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prismjs_themes_prism_css__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prismjs_themes_prism_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prismjs_themes_prism_css__);







__WEBPACK_IMPORTED_MODULE_2_marked___default.a.setOptions({
  gfm: true,
  tables: true,
  highlight (code, language) {
    if (__WEBPACK_IMPORTED_MODULE_3_prismjs___default.a.languages[language]) {
      return __WEBPACK_IMPORTED_MODULE_3_prismjs___default.a.highlight(code, __WEBPACK_IMPORTED_MODULE_3_prismjs___default.a.languages[language]);
    }
    return code;
  },
});

class MarkdownView extends __WEBPACK_IMPORTED_MODULE_1__view__["View"] {
  get props () {
    return Object.assign({}, super.props, {
      src: {
        type: String,
      },

      srcFn: {
        type: Function,
        value: () => {
          return () => this.__app.getFragment() + '.md';
        },
      },
    });
  }

  created () {
    super.created();

    this.cache = {};
  }

  focusing (parameters) {
    super.focusing(parameters);

    this.render();
  }

  async render () {
    let src = this.getSrcUrl();

    if (this.cache[src] === undefined) {
      let response = await window.fetch(src);
      if (response.ok) {
        let content = await response.text();
        this.cache[src] = __WEBPACK_IMPORTED_MODULE_2_marked___default()(content);
      } else {
        this.cache[src] = '';
        console.warn(`Content at ${src} invalid or not found! [${response.status}]`);
      }
    }

    this.innerHTML = this.cache[src];
  }

  getSrcUrl () {
    let src = this.get('src');
    if (src) {
      return src;
    }

    let srcFn = this.get('srcFn');
    return srcFn();
  }
}
/* harmony export (immutable) */ __webpack_exports__["MarkdownView"] = MarkdownView;


__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__component__["c" /* define */])('xin-markdown-view', MarkdownView);


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "/**\n * prism.js default theme for JavaScript, CSS and HTML\n * Based on dabblet (http://dabblet.com)\n * @author Lea Verou\n */\ncode[class*=\"language-\"],\npre[class*=\"language-\"] {\n  color: black;\n  background: none;\n  text-shadow: 0 1px white;\n  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;\n  text-align: left;\n  white-space: pre;\n  word-spacing: normal;\n  word-break: normal;\n  word-wrap: normal;\n  line-height: 1.5;\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n  tab-size: 4;\n  -webkit-hyphens: none;\n  -moz-hyphens: none;\n  -ms-hyphens: none;\n  hyphens: none; }\n\npre[class*=\"language-\"]::-moz-selection, pre[class*=\"language-\"] ::-moz-selection,\ncode[class*=\"language-\"]::-moz-selection, code[class*=\"language-\"] ::-moz-selection {\n  text-shadow: none;\n  background: #b3d4fc; }\n\npre[class*=\"language-\"]::selection, pre[class*=\"language-\"] ::selection,\ncode[class*=\"language-\"]::selection, code[class*=\"language-\"] ::selection {\n  text-shadow: none;\n  background: #b3d4fc; }\n\n@media print {\n  code[class*=\"language-\"],\n  pre[class*=\"language-\"] {\n    text-shadow: none; } }\n\n/* Code blocks */\npre[class*=\"language-\"] {\n  padding: 1em;\n  margin: .5em 0;\n  overflow: auto; }\n\n:not(pre) > code[class*=\"language-\"],\npre[class*=\"language-\"] {\n  background: #f5f2f0; }\n\n/* Inline code */\n:not(pre) > code[class*=\"language-\"] {\n  padding: .1em;\n  border-radius: .3em;\n  white-space: normal; }\n\n.token.comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n  color: slategray; }\n\n.token.punctuation {\n  color: #999; }\n\n.namespace {\n  opacity: .7; }\n\n.token.property,\n.token.tag,\n.token.boolean,\n.token.number,\n.token.constant,\n.token.symbol,\n.token.deleted {\n  color: #905; }\n\n.token.selector,\n.token.attr-name,\n.token.string,\n.token.char,\n.token.builtin,\n.token.inserted {\n  color: #690; }\n\n.token.operator,\n.token.entity,\n.token.url,\n.language-css .token.string,\n.style .token.string {\n  color: #a67f59;\n  background: rgba(255, 255, 255, 0.5); }\n\n.token.atrule,\n.token.attr-value,\n.token.keyword {\n  color: #07a; }\n\n.token.function {\n  color: #DD4A68; }\n\n.token.regex,\n.token.important,\n.token.variable {\n  color: #e90; }\n\n.token.important,\n.token.bold {\n  font-weight: bold; }\n\n.token.italic {\n  font-style: italic; }\n\n.token.entity {\n  cursor: help; }\n", ""]);

// exports


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * marked - a markdown parser
 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/chjj/marked
 */

;(function() {

/**
 * Block-Level Grammar
 */

var block = {
  newline: /^\n+/,
  code: /^( {4}[^\n]+\n*)+/,
  fences: noop,
  hr: /^( *[-*_]){3,} *(?:\n+|$)/,
  heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
  nptable: noop,
  lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
  blockquote: /^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,
  list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
  html: /^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,
  table: noop,
  paragraph: /^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,
  text: /^[^\n]+/
};

block.bullet = /(?:[*+-]|\d+\.)/;
block.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/;
block.item = replace(block.item, 'gm')
  (/bull/g, block.bullet)
  ();

block.list = replace(block.list)
  (/bull/g, block.bullet)
  ('hr', '\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))')
  ('def', '\\n+(?=' + block.def.source + ')')
  ();

block.blockquote = replace(block.blockquote)
  ('def', block.def)
  ();

block._tag = '(?!(?:'
  + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code'
  + '|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo'
  + '|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b';

block.html = replace(block.html)
  ('comment', /<!--[\s\S]*?-->/)
  ('closed', /<(tag)[\s\S]+?<\/\1>/)
  ('closing', /<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)
  (/tag/g, block._tag)
  ();

block.paragraph = replace(block.paragraph)
  ('hr', block.hr)
  ('heading', block.heading)
  ('lheading', block.lheading)
  ('blockquote', block.blockquote)
  ('tag', '<' + block._tag)
  ('def', block.def)
  ();

/**
 * Normal Block Grammar
 */

block.normal = merge({}, block);

/**
 * GFM Block Grammar
 */

block.gfm = merge({}, block.normal, {
  fences: /^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,
  paragraph: /^/,
  heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
});

block.gfm.paragraph = replace(block.paragraph)
  ('(?!', '(?!'
    + block.gfm.fences.source.replace('\\1', '\\2') + '|'
    + block.list.source.replace('\\1', '\\3') + '|')
  ();

/**
 * GFM + Tables Block Grammar
 */

block.tables = merge({}, block.gfm, {
  nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
  table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/
});

/**
 * Block Lexer
 */

function Lexer(options) {
  this.tokens = [];
  this.tokens.links = {};
  this.options = options || marked.defaults;
  this.rules = block.normal;

  if (this.options.gfm) {
    if (this.options.tables) {
      this.rules = block.tables;
    } else {
      this.rules = block.gfm;
    }
  }
}

/**
 * Expose Block Rules
 */

Lexer.rules = block;

/**
 * Static Lex Method
 */

Lexer.lex = function(src, options) {
  var lexer = new Lexer(options);
  return lexer.lex(src);
};

/**
 * Preprocessing
 */

Lexer.prototype.lex = function(src) {
  src = src
    .replace(/\r\n|\r/g, '\n')
    .replace(/\t/g, '    ')
    .replace(/\u00a0/g, ' ')
    .replace(/\u2424/g, '\n');

  return this.token(src, true);
};

/**
 * Lexing
 */

Lexer.prototype.token = function(src, top, bq) {
  var src = src.replace(/^ +$/gm, '')
    , next
    , loose
    , cap
    , bull
    , b
    , item
    , space
    , i
    , l;

  while (src) {
    // newline
    if (cap = this.rules.newline.exec(src)) {
      src = src.substring(cap[0].length);
      if (cap[0].length > 1) {
        this.tokens.push({
          type: 'space'
        });
      }
    }

    // code
    if (cap = this.rules.code.exec(src)) {
      src = src.substring(cap[0].length);
      cap = cap[0].replace(/^ {4}/gm, '');
      this.tokens.push({
        type: 'code',
        text: !this.options.pedantic
          ? cap.replace(/\n+$/, '')
          : cap
      });
      continue;
    }

    // fences (gfm)
    if (cap = this.rules.fences.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'code',
        lang: cap[2],
        text: cap[3] || ''
      });
      continue;
    }

    // heading
    if (cap = this.rules.heading.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'heading',
        depth: cap[1].length,
        text: cap[2]
      });
      continue;
    }

    // table no leading pipe (gfm)
    if (top && (cap = this.rules.nptable.exec(src))) {
      src = src.substring(cap[0].length);

      item = {
        type: 'table',
        header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
        cells: cap[3].replace(/\n$/, '').split('\n')
      };

      for (i = 0; i < item.align.length; i++) {
        if (/^ *-+: *$/.test(item.align[i])) {
          item.align[i] = 'right';
        } else if (/^ *:-+: *$/.test(item.align[i])) {
          item.align[i] = 'center';
        } else if (/^ *:-+ *$/.test(item.align[i])) {
          item.align[i] = 'left';
        } else {
          item.align[i] = null;
        }
      }

      for (i = 0; i < item.cells.length; i++) {
        item.cells[i] = item.cells[i].split(/ *\| */);
      }

      this.tokens.push(item);

      continue;
    }

    // lheading
    if (cap = this.rules.lheading.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'heading',
        depth: cap[2] === '=' ? 1 : 2,
        text: cap[1]
      });
      continue;
    }

    // hr
    if (cap = this.rules.hr.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'hr'
      });
      continue;
    }

    // blockquote
    if (cap = this.rules.blockquote.exec(src)) {
      src = src.substring(cap[0].length);

      this.tokens.push({
        type: 'blockquote_start'
      });

      cap = cap[0].replace(/^ *> ?/gm, '');

      // Pass `top` to keep the current
      // "toplevel" state. This is exactly
      // how markdown.pl works.
      this.token(cap, top, true);

      this.tokens.push({
        type: 'blockquote_end'
      });

      continue;
    }

    // list
    if (cap = this.rules.list.exec(src)) {
      src = src.substring(cap[0].length);
      bull = cap[2];

      this.tokens.push({
        type: 'list_start',
        ordered: bull.length > 1
      });

      // Get each top-level item.
      cap = cap[0].match(this.rules.item);

      next = false;
      l = cap.length;
      i = 0;

      for (; i < l; i++) {
        item = cap[i];

        // Remove the list item's bullet
        // so it is seen as the next token.
        space = item.length;
        item = item.replace(/^ *([*+-]|\d+\.) +/, '');

        // Outdent whatever the
        // list item contains. Hacky.
        if (~item.indexOf('\n ')) {
          space -= item.length;
          item = !this.options.pedantic
            ? item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '')
            : item.replace(/^ {1,4}/gm, '');
        }

        // Determine whether the next list item belongs here.
        // Backpedal if it does not belong in this list.
        if (this.options.smartLists && i !== l - 1) {
          b = block.bullet.exec(cap[i + 1])[0];
          if (bull !== b && !(bull.length > 1 && b.length > 1)) {
            src = cap.slice(i + 1).join('\n') + src;
            i = l - 1;
          }
        }

        // Determine whether item is loose or not.
        // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
        // for discount behavior.
        loose = next || /\n\n(?!\s*$)/.test(item);
        if (i !== l - 1) {
          next = item.charAt(item.length - 1) === '\n';
          if (!loose) loose = next;
        }

        this.tokens.push({
          type: loose
            ? 'loose_item_start'
            : 'list_item_start'
        });

        // Recurse.
        this.token(item, false, bq);

        this.tokens.push({
          type: 'list_item_end'
        });
      }

      this.tokens.push({
        type: 'list_end'
      });

      continue;
    }

    // html
    if (cap = this.rules.html.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: this.options.sanitize
          ? 'paragraph'
          : 'html',
        pre: !this.options.sanitizer
          && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
        text: cap[0]
      });
      continue;
    }

    // def
    if ((!bq && top) && (cap = this.rules.def.exec(src))) {
      src = src.substring(cap[0].length);
      this.tokens.links[cap[1].toLowerCase()] = {
        href: cap[2],
        title: cap[3]
      };
      continue;
    }

    // table (gfm)
    if (top && (cap = this.rules.table.exec(src))) {
      src = src.substring(cap[0].length);

      item = {
        type: 'table',
        header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
        cells: cap[3].replace(/(?: *\| *)?\n$/, '').split('\n')
      };

      for (i = 0; i < item.align.length; i++) {
        if (/^ *-+: *$/.test(item.align[i])) {
          item.align[i] = 'right';
        } else if (/^ *:-+: *$/.test(item.align[i])) {
          item.align[i] = 'center';
        } else if (/^ *:-+ *$/.test(item.align[i])) {
          item.align[i] = 'left';
        } else {
          item.align[i] = null;
        }
      }

      for (i = 0; i < item.cells.length; i++) {
        item.cells[i] = item.cells[i]
          .replace(/^ *\| *| *\| *$/g, '')
          .split(/ *\| */);
      }

      this.tokens.push(item);

      continue;
    }

    // top-level paragraph
    if (top && (cap = this.rules.paragraph.exec(src))) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'paragraph',
        text: cap[1].charAt(cap[1].length - 1) === '\n'
          ? cap[1].slice(0, -1)
          : cap[1]
      });
      continue;
    }

    // text
    if (cap = this.rules.text.exec(src)) {
      // Top-level should never reach here.
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'text',
        text: cap[0]
      });
      continue;
    }

    if (src) {
      throw new
        Error('Infinite loop on byte: ' + src.charCodeAt(0));
    }
  }

  return this.tokens;
};

/**
 * Inline-Level Grammar
 */

var inline = {
  escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
  autolink: /^<([^ >]+(@|:\/)[^ >]+)>/,
  url: noop,
  tag: /^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,
  link: /^!?\[(inside)\]\(href\)/,
  reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
  nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,
  strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
  em: /^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,
  code: /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
  br: /^ {2,}\n(?!\s*$)/,
  del: noop,
  text: /^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/
};

inline._inside = /(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/;
inline._href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/;

inline.link = replace(inline.link)
  ('inside', inline._inside)
  ('href', inline._href)
  ();

inline.reflink = replace(inline.reflink)
  ('inside', inline._inside)
  ();

/**
 * Normal Inline Grammar
 */

inline.normal = merge({}, inline);

/**
 * Pedantic Inline Grammar
 */

inline.pedantic = merge({}, inline.normal, {
  strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
  em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
});

/**
 * GFM Inline Grammar
 */

inline.gfm = merge({}, inline.normal, {
  escape: replace(inline.escape)('])', '~|])')(),
  url: /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
  del: /^~~(?=\S)([\s\S]*?\S)~~/,
  text: replace(inline.text)
    (']|', '~]|')
    ('|', '|https?://|')
    ()
});

/**
 * GFM + Line Breaks Inline Grammar
 */

inline.breaks = merge({}, inline.gfm, {
  br: replace(inline.br)('{2,}', '*')(),
  text: replace(inline.gfm.text)('{2,}', '*')()
});

/**
 * Inline Lexer & Compiler
 */

function InlineLexer(links, options) {
  this.options = options || marked.defaults;
  this.links = links;
  this.rules = inline.normal;
  this.renderer = this.options.renderer || new Renderer;
  this.renderer.options = this.options;

  if (!this.links) {
    throw new
      Error('Tokens array requires a `links` property.');
  }

  if (this.options.gfm) {
    if (this.options.breaks) {
      this.rules = inline.breaks;
    } else {
      this.rules = inline.gfm;
    }
  } else if (this.options.pedantic) {
    this.rules = inline.pedantic;
  }
}

/**
 * Expose Inline Rules
 */

InlineLexer.rules = inline;

/**
 * Static Lexing/Compiling Method
 */

InlineLexer.output = function(src, links, options) {
  var inline = new InlineLexer(links, options);
  return inline.output(src);
};

/**
 * Lexing/Compiling
 */

InlineLexer.prototype.output = function(src) {
  var out = ''
    , link
    , text
    , href
    , cap;

  while (src) {
    // escape
    if (cap = this.rules.escape.exec(src)) {
      src = src.substring(cap[0].length);
      out += cap[1];
      continue;
    }

    // autolink
    if (cap = this.rules.autolink.exec(src)) {
      src = src.substring(cap[0].length);
      if (cap[2] === '@') {
        text = cap[1].charAt(6) === ':'
          ? this.mangle(cap[1].substring(7))
          : this.mangle(cap[1]);
        href = this.mangle('mailto:') + text;
      } else {
        text = escape(cap[1]);
        href = text;
      }
      out += this.renderer.link(href, null, text);
      continue;
    }

    // url (gfm)
    if (!this.inLink && (cap = this.rules.url.exec(src))) {
      src = src.substring(cap[0].length);
      text = escape(cap[1]);
      href = text;
      out += this.renderer.link(href, null, text);
      continue;
    }

    // tag
    if (cap = this.rules.tag.exec(src)) {
      if (!this.inLink && /^<a /i.test(cap[0])) {
        this.inLink = true;
      } else if (this.inLink && /^<\/a>/i.test(cap[0])) {
        this.inLink = false;
      }
      src = src.substring(cap[0].length);
      out += this.options.sanitize
        ? this.options.sanitizer
          ? this.options.sanitizer(cap[0])
          : escape(cap[0])
        : cap[0]
      continue;
    }

    // link
    if (cap = this.rules.link.exec(src)) {
      src = src.substring(cap[0].length);
      this.inLink = true;
      out += this.outputLink(cap, {
        href: cap[2],
        title: cap[3]
      });
      this.inLink = false;
      continue;
    }

    // reflink, nolink
    if ((cap = this.rules.reflink.exec(src))
        || (cap = this.rules.nolink.exec(src))) {
      src = src.substring(cap[0].length);
      link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
      link = this.links[link.toLowerCase()];
      if (!link || !link.href) {
        out += cap[0].charAt(0);
        src = cap[0].substring(1) + src;
        continue;
      }
      this.inLink = true;
      out += this.outputLink(cap, link);
      this.inLink = false;
      continue;
    }

    // strong
    if (cap = this.rules.strong.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.strong(this.output(cap[2] || cap[1]));
      continue;
    }

    // em
    if (cap = this.rules.em.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.em(this.output(cap[2] || cap[1]));
      continue;
    }

    // code
    if (cap = this.rules.code.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.codespan(escape(cap[2], true));
      continue;
    }

    // br
    if (cap = this.rules.br.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.br();
      continue;
    }

    // del (gfm)
    if (cap = this.rules.del.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.del(this.output(cap[1]));
      continue;
    }

    // text
    if (cap = this.rules.text.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.text(escape(this.smartypants(cap[0])));
      continue;
    }

    if (src) {
      throw new
        Error('Infinite loop on byte: ' + src.charCodeAt(0));
    }
  }

  return out;
};

/**
 * Compile Link
 */

InlineLexer.prototype.outputLink = function(cap, link) {
  var href = escape(link.href)
    , title = link.title ? escape(link.title) : null;

  return cap[0].charAt(0) !== '!'
    ? this.renderer.link(href, title, this.output(cap[1]))
    : this.renderer.image(href, title, escape(cap[1]));
};

/**
 * Smartypants Transformations
 */

InlineLexer.prototype.smartypants = function(text) {
  if (!this.options.smartypants) return text;
  return text
    // em-dashes
    .replace(/---/g, '\u2014')
    // en-dashes
    .replace(/--/g, '\u2013')
    // opening singles
    .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1\u2018')
    // closing singles & apostrophes
    .replace(/'/g, '\u2019')
    // opening doubles
    .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1\u201c')
    // closing doubles
    .replace(/"/g, '\u201d')
    // ellipses
    .replace(/\.{3}/g, '\u2026');
};

/**
 * Mangle Links
 */

InlineLexer.prototype.mangle = function(text) {
  if (!this.options.mangle) return text;
  var out = ''
    , l = text.length
    , i = 0
    , ch;

  for (; i < l; i++) {
    ch = text.charCodeAt(i);
    if (Math.random() > 0.5) {
      ch = 'x' + ch.toString(16);
    }
    out += '&#' + ch + ';';
  }

  return out;
};

/**
 * Renderer
 */

function Renderer(options) {
  this.options = options || {};
}

Renderer.prototype.code = function(code, lang, escaped) {
  if (this.options.highlight) {
    var out = this.options.highlight(code, lang);
    if (out != null && out !== code) {
      escaped = true;
      code = out;
    }
  }

  if (!lang) {
    return '<pre><code>'
      + (escaped ? code : escape(code, true))
      + '\n</code></pre>';
  }

  return '<pre><code class="'
    + this.options.langPrefix
    + escape(lang, true)
    + '">'
    + (escaped ? code : escape(code, true))
    + '\n</code></pre>\n';
};

Renderer.prototype.blockquote = function(quote) {
  return '<blockquote>\n' + quote + '</blockquote>\n';
};

Renderer.prototype.html = function(html) {
  return html;
};

Renderer.prototype.heading = function(text, level, raw) {
  return '<h'
    + level
    + ' id="'
    + this.options.headerPrefix
    + raw.toLowerCase().replace(/[^\w]+/g, '-')
    + '">'
    + text
    + '</h'
    + level
    + '>\n';
};

Renderer.prototype.hr = function() {
  return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
};

Renderer.prototype.list = function(body, ordered) {
  var type = ordered ? 'ol' : 'ul';
  return '<' + type + '>\n' + body + '</' + type + '>\n';
};

Renderer.prototype.listitem = function(text) {
  return '<li>' + text + '</li>\n';
};

Renderer.prototype.paragraph = function(text) {
  return '<p>' + text + '</p>\n';
};

Renderer.prototype.table = function(header, body) {
  return '<table>\n'
    + '<thead>\n'
    + header
    + '</thead>\n'
    + '<tbody>\n'
    + body
    + '</tbody>\n'
    + '</table>\n';
};

Renderer.prototype.tablerow = function(content) {
  return '<tr>\n' + content + '</tr>\n';
};

Renderer.prototype.tablecell = function(content, flags) {
  var type = flags.header ? 'th' : 'td';
  var tag = flags.align
    ? '<' + type + ' style="text-align:' + flags.align + '">'
    : '<' + type + '>';
  return tag + content + '</' + type + '>\n';
};

// span level renderer
Renderer.prototype.strong = function(text) {
  return '<strong>' + text + '</strong>';
};

Renderer.prototype.em = function(text) {
  return '<em>' + text + '</em>';
};

Renderer.prototype.codespan = function(text) {
  return '<code>' + text + '</code>';
};

Renderer.prototype.br = function() {
  return this.options.xhtml ? '<br/>' : '<br>';
};

Renderer.prototype.del = function(text) {
  return '<del>' + text + '</del>';
};

Renderer.prototype.link = function(href, title, text) {
  if (this.options.sanitize) {
    try {
      var prot = decodeURIComponent(unescape(href))
        .replace(/[^\w:]/g, '')
        .toLowerCase();
    } catch (e) {
      return '';
    }
    if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0) {
      return '';
    }
  }
  var out = '<a href="' + href + '"';
  if (title) {
    out += ' title="' + title + '"';
  }
  out += '>' + text + '</a>';
  return out;
};

Renderer.prototype.image = function(href, title, text) {
  var out = '<img src="' + href + '" alt="' + text + '"';
  if (title) {
    out += ' title="' + title + '"';
  }
  out += this.options.xhtml ? '/>' : '>';
  return out;
};

Renderer.prototype.text = function(text) {
  return text;
};

/**
 * Parsing & Compiling
 */

function Parser(options) {
  this.tokens = [];
  this.token = null;
  this.options = options || marked.defaults;
  this.options.renderer = this.options.renderer || new Renderer;
  this.renderer = this.options.renderer;
  this.renderer.options = this.options;
}

/**
 * Static Parse Method
 */

Parser.parse = function(src, options, renderer) {
  var parser = new Parser(options, renderer);
  return parser.parse(src);
};

/**
 * Parse Loop
 */

Parser.prototype.parse = function(src) {
  this.inline = new InlineLexer(src.links, this.options, this.renderer);
  this.tokens = src.reverse();

  var out = '';
  while (this.next()) {
    out += this.tok();
  }

  return out;
};

/**
 * Next Token
 */

Parser.prototype.next = function() {
  return this.token = this.tokens.pop();
};

/**
 * Preview Next Token
 */

Parser.prototype.peek = function() {
  return this.tokens[this.tokens.length - 1] || 0;
};

/**
 * Parse Text Tokens
 */

Parser.prototype.parseText = function() {
  var body = this.token.text;

  while (this.peek().type === 'text') {
    body += '\n' + this.next().text;
  }

  return this.inline.output(body);
};

/**
 * Parse Current Token
 */

Parser.prototype.tok = function() {
  switch (this.token.type) {
    case 'space': {
      return '';
    }
    case 'hr': {
      return this.renderer.hr();
    }
    case 'heading': {
      return this.renderer.heading(
        this.inline.output(this.token.text),
        this.token.depth,
        this.token.text);
    }
    case 'code': {
      return this.renderer.code(this.token.text,
        this.token.lang,
        this.token.escaped);
    }
    case 'table': {
      var header = ''
        , body = ''
        , i
        , row
        , cell
        , flags
        , j;

      // header
      cell = '';
      for (i = 0; i < this.token.header.length; i++) {
        flags = { header: true, align: this.token.align[i] };
        cell += this.renderer.tablecell(
          this.inline.output(this.token.header[i]),
          { header: true, align: this.token.align[i] }
        );
      }
      header += this.renderer.tablerow(cell);

      for (i = 0; i < this.token.cells.length; i++) {
        row = this.token.cells[i];

        cell = '';
        for (j = 0; j < row.length; j++) {
          cell += this.renderer.tablecell(
            this.inline.output(row[j]),
            { header: false, align: this.token.align[j] }
          );
        }

        body += this.renderer.tablerow(cell);
      }
      return this.renderer.table(header, body);
    }
    case 'blockquote_start': {
      var body = '';

      while (this.next().type !== 'blockquote_end') {
        body += this.tok();
      }

      return this.renderer.blockquote(body);
    }
    case 'list_start': {
      var body = ''
        , ordered = this.token.ordered;

      while (this.next().type !== 'list_end') {
        body += this.tok();
      }

      return this.renderer.list(body, ordered);
    }
    case 'list_item_start': {
      var body = '';

      while (this.next().type !== 'list_item_end') {
        body += this.token.type === 'text'
          ? this.parseText()
          : this.tok();
      }

      return this.renderer.listitem(body);
    }
    case 'loose_item_start': {
      var body = '';

      while (this.next().type !== 'list_item_end') {
        body += this.tok();
      }

      return this.renderer.listitem(body);
    }
    case 'html': {
      var html = !this.token.pre && !this.options.pedantic
        ? this.inline.output(this.token.text)
        : this.token.text;
      return this.renderer.html(html);
    }
    case 'paragraph': {
      return this.renderer.paragraph(this.inline.output(this.token.text));
    }
    case 'text': {
      return this.renderer.paragraph(this.parseText());
    }
  }
};

/**
 * Helpers
 */

function escape(html, encode) {
  return html
    .replace(!encode ? /&(?!#?\w+;)/g : /&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function unescape(html) {
	// explicitly match decimal, hex, and named HTML entities 
  return html.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/g, function(_, n) {
    n = n.toLowerCase();
    if (n === 'colon') return ':';
    if (n.charAt(0) === '#') {
      return n.charAt(1) === 'x'
        ? String.fromCharCode(parseInt(n.substring(2), 16))
        : String.fromCharCode(+n.substring(1));
    }
    return '';
  });
}

function replace(regex, opt) {
  regex = regex.source;
  opt = opt || '';
  return function self(name, val) {
    if (!name) return new RegExp(regex, opt);
    val = val.source || val;
    val = val.replace(/(^|[^\[])\^/g, '$1');
    regex = regex.replace(name, val);
    return self;
  };
}

function noop() {}
noop.exec = noop;

function merge(obj) {
  var i = 1
    , target
    , key;

  for (; i < arguments.length; i++) {
    target = arguments[i];
    for (key in target) {
      if (Object.prototype.hasOwnProperty.call(target, key)) {
        obj[key] = target[key];
      }
    }
  }

  return obj;
}


/**
 * Marked
 */

function marked(src, opt, callback) {
  if (callback || typeof opt === 'function') {
    if (!callback) {
      callback = opt;
      opt = null;
    }

    opt = merge({}, marked.defaults, opt || {});

    var highlight = opt.highlight
      , tokens
      , pending
      , i = 0;

    try {
      tokens = Lexer.lex(src, opt)
    } catch (e) {
      return callback(e);
    }

    pending = tokens.length;

    var done = function(err) {
      if (err) {
        opt.highlight = highlight;
        return callback(err);
      }

      var out;

      try {
        out = Parser.parse(tokens, opt);
      } catch (e) {
        err = e;
      }

      opt.highlight = highlight;

      return err
        ? callback(err)
        : callback(null, out);
    };

    if (!highlight || highlight.length < 3) {
      return done();
    }

    delete opt.highlight;

    if (!pending) return done();

    for (; i < tokens.length; i++) {
      (function(token) {
        if (token.type !== 'code') {
          return --pending || done();
        }
        return highlight(token.text, token.lang, function(err, code) {
          if (err) return done(err);
          if (code == null || code === token.text) {
            return --pending || done();
          }
          token.text = code;
          token.escaped = true;
          --pending || done();
        });
      })(tokens[i]);
    }

    return;
  }
  try {
    if (opt) opt = merge({}, marked.defaults, opt);
    return Parser.parse(Lexer.lex(src, opt), opt);
  } catch (e) {
    e.message += '\nPlease report this to https://github.com/chjj/marked.';
    if ((opt || marked.defaults).silent) {
      return '<p>An error occured:</p><pre>'
        + escape(e.message + '', true)
        + '</pre>';
    }
    throw e;
  }
}

/**
 * Options
 */

marked.options =
marked.setOptions = function(opt) {
  merge(marked.defaults, opt);
  return marked;
};

marked.defaults = {
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  sanitizer: null,
  mangle: true,
  smartLists: false,
  silent: false,
  highlight: null,
  langPrefix: 'lang-',
  smartypants: false,
  headerPrefix: '',
  renderer: new Renderer,
  xhtml: false
};

/**
 * Expose
 */

marked.Parser = Parser;
marked.parser = Parser.parse;

marked.Renderer = Renderer;

marked.Lexer = Lexer;
marked.lexer = Lexer.lex;

marked.InlineLexer = InlineLexer;
marked.inlineLexer = InlineLexer.output;

marked.parse = marked;

if (true) {
  module.exports = marked;
} else if (typeof define === 'function' && define.amd) {
  define(function() { return marked; });
} else {
  this.marked = marked;
}

}).call(function() {
  return this || (typeof window !== 'undefined' ? window : global);
}());

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(51)))

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(58);
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
		module.hot.accept("!!../../css-loader/index.js!../../sass-loader/lib/loader.js!./prism.css", function() {
			var newContent = require("!!../../css-loader/index.js!../../sass-loader/lib/loader.js!./prism.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__accessors_base__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accessors_attribute__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accessors_text__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__accessors_html__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__accessors_value__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__accessors_class__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__accessors_style__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__accessors_property__ = __webpack_require__(75);









const Accessor = {
  get (node, name) {
    if (node && 'nodeType' in node) {
      switch (node.nodeType) {
        case window.Node.ELEMENT_NODE:
          if (name.endsWith('$')) {
            return new __WEBPACK_IMPORTED_MODULE_1__accessors_attribute__["a" /* AttributeAccessor */](node, name);
          } else if (name === 'text') {
            return new __WEBPACK_IMPORTED_MODULE_2__accessors_text__["a" /* TextAccessor */](node);
          } else if (name === 'html') {
            return new __WEBPACK_IMPORTED_MODULE_3__accessors_html__["a" /* HTMLAccessor */](node, name);
          } else if (name === 'value' && node.nodeName === 'INPUT') {
            return new __WEBPACK_IMPORTED_MODULE_4__accessors_value__["a" /* ValueAccessor */](node);
          }

          if (name.startsWith('class.')) {
            return new __WEBPACK_IMPORTED_MODULE_5__accessors_class__["a" /* ClassAccessor */](node, name.split('.').splice(1).join('.'));
          } else if (name.startsWith('style.')) {
            return new __WEBPACK_IMPORTED_MODULE_6__accessors_style__["a" /* StyleAccessor */](node, name.split('.').splice(1).join('.'));
          }

          return new __WEBPACK_IMPORTED_MODULE_7__accessors_property__["a" /* PropertyAccessor */](node, name);
        case window.Node.TEXT_NODE:
          if (node.parentElement && node.parentElement.nodeName === 'TEXTAREA') {
            return new __WEBPACK_IMPORTED_MODULE_4__accessors_value__["a" /* ValueAccessor */](node.parentElement);
          }

          return new __WEBPACK_IMPORTED_MODULE_2__accessors_text__["a" /* TextAccessor */](node);
        default:
          throw new Error(`Unimplemented resolving accessor for nodeType: ${node.nodeType}`);
      }
    } else {
      return new __WEBPACK_IMPORTED_MODULE_0__accessors_base__["a" /* BaseAccessor */](node, name);
    }
  },
};
/* harmony export (immutable) */ __webpack_exports__["a"] = Accessor;



/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__annotation__ = __webpack_require__(79);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__annotation__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__notify__ = __webpack_require__(80);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__notify__["a"]; });




/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = base;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__string__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__object__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__template__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__expr__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__accessor__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__annotation__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__fn__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_sprintf_js__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_sprintf_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_sprintf_js__);










const idGenerator = new __WEBPACK_IMPORTED_MODULE_0__core__["b" /* IdGenerator */]('component');
const baseComponents = {};

function base (base) {
  const repository = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core__["d" /* getInstance */])();

  if (baseComponents[base]) {
    return baseComponents[base];
  }

  let BaseElement;
  if (repository.get('customElements.version') === 'v1') {
    BaseElement = window[base];
  } else {
    BaseElement = function () {};
    BaseElement.prototype = Object.create(window[base].prototype);
  }

  class Component extends BaseElement {
    constructor () {
      super();

      this.is = this.nodeName.toLowerCase();

      this.createdCallback();
    }

    get $ () {
      return this.__templateHost.getElementsByTagName('*');
    }

    get props () {
      return {
        ref: {
          type: Object,
          readonly: true,
          notify: true,
        },
      };
    }

    created () {}

    ready () {}

    attached () {}

    detached () {}

    createdCallback () {
      if (this.__repository.get('env.debug')) console.info(`CREATED ${this.is}`);

      this.__id = idGenerator.next();

      this.created();

      this.__initData();

      // move to readyCallback
      // this.__initProps();
      //
      // this.__initListeners();
      // move to readyCallback

      // move to attachedCallback
      // this.async(this.readyCallback);
      // move to attachedCallback
    }

    readyCallback () {
      this.__componentReady = true;

      if (this.__repository.get('env.debug')) console.info(`READY ${this.is}`);

      // moved from attachedCallback
      if (!this.hasAttribute('xin-id')) {
        // deferred set attributes until connectedCallback
        this.setAttribute('xin-id', this.__id);
      }
      // moved from attachedCallback

      // moved from createdCallback
      this.__initTemplate();

      this.__initProps();

      this.__initListeners();
      // moved from createdCallback

      this.__initPropValues();

      let contentFragment;

      if (this.__template) {
        contentFragment = document.createDocumentFragment();
        [].slice.call(this.childNodes).forEach(node => {
          if (node === this.__templateMarker) return;
          contentFragment.appendChild(node);
        });
      }

      this.__templateRender(contentFragment);

      this.ready();

      if (this.__componentAttaching) {
        this.attachedCallback();
      }
    }

    attachedCallback () {
      this.__repository.put(this.__id, this);

      this.__componentAttaching = true;

      // moved from createdCallback
      if (!this.__componentReady) {
        this.async(this.readyCallback);
        return;
      }
      // moved from createdCallback

      // notify default props
      this.notify('__global');
      this.notify('__repository');
      this.notify('__app');

      if (this.__repository.get('env.debug')) console.info(`ATTACHED ${this.is} ${this.__componentAttaching ? '(delayed)' : ''}`);

      this.set('ref', this);
      this.attached();

      this.__componentAttaching = false;
    }

    detachedCallback () {
      this.__repository.remove(this.__id);

      this.detached();
      this.set('ref', null);
    }

    connectedCallback () {
      return this.attachedCallback();
    }

    disconnectedCallback () {
      return this.detachedCallback();
    }

    get __app () {
      if (!this.__app$) {
        if (this.__appSignature) {
          this.__app$ = this;
        } else {
          let app = this.parentElement;
          while (app && !app.__appSignature) {
            app = app.parentElement;
          }
          this.__app$ = app;
        }
      }

      return this.__app$;
    }

    get __global () {
      return window;
    }

    get __repository () {
      return repository;
    }

    __initData () {
      this.__componentContent = [];
      this.__componentDebouncers = {};
      this.__componentNotifiers = {};
      this.__componentReady = false;
      this.__componentAttaching = false;
      this.__componentInitialPropValues = {};
      this.__componentNotifiedProps = {};
    }

    __initProps () {
      let props = this.__getProps();
      for (let propName in props) {
        let property = props[propName];
        let attrName = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__string__["b" /* dashify */])(propName);

        if ('computed' in property) {
          let accessor = __WEBPACK_IMPORTED_MODULE_5__accessor__["a" /* Accessor */].get(this, propName);
          let expr = __WEBPACK_IMPORTED_MODULE_4__expr__["a" /* Expr */].getFn(property.computed, [], true);
          this.__templateAnnotate(expr, accessor);

          this.__componentInitialPropValues[propName] = () => expr.invoke(this);
        } else if (this.hasAttribute(attrName)) {
          let attrVal = this.getAttribute(attrName);

          // copy value from attribute to property
          // fallback to property.value
          let expr = __WEBPACK_IMPORTED_MODULE_4__expr__["a" /* Expr */].get(attrVal);
          if (expr.type === 's') {
            this.__componentInitialPropValues[propName] = () => __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__object__["a" /* deserialize */])(attrVal, property.type);
          } else {
            if ('notify' in property && expr.mode === '{') {
              this.__componentNotifiedProps[propName] = true;
              this.__templateGetBinding(propName).annotate(new __WEBPACK_IMPORTED_MODULE_6__annotation__["b" /* NotifyAnnotation */](this, propName));
            }
            this.__componentInitialPropValues[propName] = () => expr.invoke(this.__templateModel);
          }
        }

        if ('observer' in property) {
          let expr = __WEBPACK_IMPORTED_MODULE_4__expr__["a" /* Expr */].getFn(property.observer, [ propName ], true);
          this.__templateAnnotate(expr);
        }
      }
    }

    __getProps () {
      if (!this._props) {
        this._props = this.props;
      }
      return this._props;
    }

    __initPropValues () {
      let props = this.__getProps();

      for (let propName in props) {
        let property = props[propName];

        let propValue;

        if (this.__componentInitialPropValues[propName]) {
          propValue = this.__componentInitialPropValues[propName]();
        } else {
          propValue = this[propName];
        }

        if ('value' in property && isUndefinedPropValue(propName, propValue)) {
          propValue = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__object__["b" /* val */])(property.value);
        }

        // when property is undefined, log error when property is required otherwise assign to default value
        if (property.required && propValue === undefined /* (propValue === undefined || propValue === null) */) {
          throw new Error(`${this.is}:${this.__id} missing required ${propName}`);
        }

        // set and force notify for the first time
        this[propName] = propValue;

        // only notify if propValue already defined otherwise undefined value will be propagated to model
        if (propValue !== undefined) {
          this.notify(propName, propValue);
        }
      }
    }

    __isNotified (name) {
      return (name in this.__componentNotifiedProps);
    }

    __initTemplate () {
      let template;

      if (this.childElementCount === 1 && this.firstElementChild.nodeName === 'TEMPLATE' && !this.firstElementChild.hasAttribute('is')) {
        // when instance template exist detach from component content
        template = this.firstElementChild;
        this.removeChild(template);
      } else if (this.template) {
        // create new template based on template property
        template = document.createElement('template');
        template.innerHTML = this.template;
      }

      this.__templateInitialize(template, this);
    }

    __initListeners () {
      if (!this.listeners) {
        return;
      }

      Object.keys(this.listeners).forEach(key => {
        let meta = parseListenerMetadata(key);
        let expr = __WEBPACK_IMPORTED_MODULE_4__expr__["a" /* Expr */].getFn(this.listeners[key], [], true);
        if (meta.selector) {
          this.on(meta.eventName, meta.selector, evt => {
            expr.invoke(this, { evt });
          });
        } else {
          this.on(meta.eventName, evt => {
            expr.invoke(this, { evt });
          });
        }
      });
    }

    __addNotifier (eventName) {
      if (this.__componentNotifiers[eventName]) {
        return;
      }

      this.__componentNotifiers[eventName] = (evt) => {
        let element = evt.target;

        if (element.__templateModel !== this) {
          return;
        }

        evt.stopImmediatePropagation();

        if ('__componentNotifyKey' in element && '__componentNotifyAccessor' in element) {
          element.__templateModel.set(element.__componentNotifyKey, element[element.__componentNotifyAccessor]);
        }
      };

      this.on(eventName, this.__componentNotifiers[eventName]);
    }

    __removeNotifier (eventName) {
      if (!this.__componentNotifiers[eventName]) {
        return;
      }

      this.off(eventName, this.__componentNotifiers[eventName]);
      this.__componentNotifiers[eventName] = null;
    }

    fire (type, detail, options) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core__["c" /* event */])(this).fire(type, detail, options);
    }

    async (callback, waitTime) {
      return (new __WEBPACK_IMPORTED_MODULE_7__fn__["a" /* Async */](this)).start(callback, waitTime);
    }

    debounce (job, callback, wait, immediate) {
      let debouncer = this.__componentDebouncers[job];
      if (debouncer && debouncer.running) {
        debouncer.cancel();
      } else {
        debouncer = this.__componentDebouncers[job] = new __WEBPACK_IMPORTED_MODULE_7__fn__["b" /* Debounce */](this, immediate);
      }
      debouncer.start(callback, wait);

      return debouncer;
    }

    nextFrame (callback) {
      return __WEBPACK_IMPORTED_MODULE_7__fn__["a" /* Async */].nextFrame(callback.bind(this));
    }

    sprintf (...args) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_sprintf_js__["sprintf"])(...args);
    }

    // T overriden
    // -------------------------------------------------------------------------
    //

    __templateAnnotate (expr, accessor) {
      if (!__WEBPACK_IMPORTED_MODULE_3__template__["a" /* T */].prototype.__templateAnnotate.call(this, expr, accessor)) {
        return false;
      }

      // register event notifier
      if (expr.mode === '{' && expr.type === 'p' && accessor.node instanceof window.HTMLElement) {
        const node = accessor.node;
        const nodeName = node.nodeName;

        const startNotify = (name) => {
          node.__componentNotifyKey = expr.name;
          node.__componentNotifyAccessor = accessor.name;
          this.__addNotifier(name);
        };

        if (nodeName === 'INPUT') {
          const inputType = node.getAttribute('type');
          if (inputType === 'radio' || inputType === 'checkbox') {
            throw new Error('Unimplemented yet');
          } else {
            startNotify('input');
          }
        } else if (nodeName === 'TEXTAREA') {
          startNotify('input');
        } else if (nodeName === 'SELECT') {
          startNotify('change');
        }
      }

      return true;
    }
  }

  let tproto = __WEBPACK_IMPORTED_MODULE_3__template__["a" /* T */].prototype;
  for (let key in tproto) {
    // exclude __templateAnnotate because will be override
    if (!tproto.hasOwnProperty(key)) {
      continue;
    }

    if (key === '$' || key === '__templateAnnotate') {
      continue;
    }

    Component.prototype[key] = tproto[key];
  }

  baseComponents[base] = Component;

  return Component;
}

function parseListenerMetadata (key) {
  key = key.trim();

  let splitted = key.split(' ');
  let metadata = {
    key: key,
    eventName: splitted[0],
    selector: splitted[1] ? splitted.slice(1).join(' ') : null,
  };

  return metadata;
}

function isUndefinedPropValue (propName, propValue) {
  return propValue === undefined || (propName === 'title' && !propValue);
}


/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = T;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__expr__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__binding__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__accessor__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__annotation__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_template__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__helpers_slot__ = __webpack_require__(85);









const idGenerator = new __WEBPACK_IMPORTED_MODULE_0__core__["b" /* IdGenerator */]('template');

function T (template, host, marker) {
  this.__templateInitialize(template, host, marker);
  this.__templateRender();
}

T.prototype = {
  get $ () {
    return this.__templateHost.getElementsByTagName('*');
  },

  $$ (selector) {
    return this.querySelector(selector);
  },

  promised (eventName, selector) {
    return new Promise(resolve => {
      if (selector) {
        this.once(eventName, selector, resolve);
      } else {
        this.once(eventName, resolve);
      }
    });
  },

  on () {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core__["c" /* event */])(this.__templateHost).on(...arguments);
  },

  off () {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core__["c" /* event */])(this.__templateHost).off(...arguments);
  },

  once () {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core__["c" /* event */])(this.__templateHost).once(...arguments);
  },

  all (obj) {
    for (let i in obj) {
      if (obj.hasOwnProperty(i)) {
        this.set(i, obj[i]);
      }
    }
  },

  get (path) {
    let object = this;

    this.__templateGetPathAsArray(path).some(segment => {
      if (object === undefined || object === null) {
        object = undefined;
        return true;
      }

      object = object[segment];
      return false;
    });

    return object;
  },

  set (path, value) {
    path = this.__templateGetPathAsArray(path);

    let oldValue = this.get(path);

    if (value === oldValue) {
      return;
    }

    let object = this;

    path.slice(0, -1).forEach(segment => {
      if (!object) {
        return;
      }
      if (object[segment] === undefined || object[segment] === null) {
        object[segment] = {};
      }

      object = object[segment];
    });

    let property = path.slice(-1).pop();

    object[property] = value;

    this.notify(path, value);
  },

  push (path, ...values) {
    path = this.__templateGetPathAsArray(path);

    let object = this;

    path.slice(0, -1).forEach(segment => {
      if (!object) {
        return;
      }
      if (object[segment] === undefined || object[segment] === null) {
        object[segment] = {};
      }

      object = object[segment];
    });

    let property = path.slice(-1).pop();

    if (!Array.isArray(object[property])) {
      object[property] = [];
    }

    object[property] = object[property].slice();
    let result = object[property].push(...values);
    this.notify(path, object[property]);

    // let index = object[property].length;
    // let removed = [];
    // let addedCount = values.length;
    // let result = object[property].push(...values);
    //
    // object = object[property];
    //
    // this.notifySplices(path, [
    //   { index, removed, addedCount, object, type: 'splice' },
    // ]);

    return result;
  },

  pop (path) {
    path = this.__templateGetPathAsArray(path);

    let object = this;

    path.slice(0, -1).forEach(segment => {
      if (!object) {
        return;
      }
      if (object[segment] === undefined || object[segment] === null) {
        object[segment] = {};
      }

      object = object[segment];
    });

    let property = path.slice(-1).pop();

    if (!Array.isArray(object[property])) {
      object[property] = [];
    }

    object[property] = object[property].slice();
    let result = object[property].pop();
    this.notify(path, object[property]);

    // let index = object[property].length;
    // let addedCount = 0;
    // let result = object[property].pop();
    // let removed = [ result ];
    //
    // object = object[property];
    //
    // this.notifySplices(path, [
    //   { index, removed, addedCount, object, type: 'splice' },
    // ]);

    return result;
  },

  splice (path, index, removeCount, ...values) {
    path = this.__templateGetPathAsArray(path);

    let object = this;

    path.slice(0, -1).forEach(segment => {
      if (!object) {
        return;
      }
      if (object[segment] === undefined || object[segment] === null) {
        object[segment] = {};
      }

      object = object[segment];
    });

    let property = path.slice(-1).pop();

    if (!Array.isArray(object[property])) {
      object[property] = [];
    }

    object[property] = object[property].slice();
    let result = object[property].splice(index, removeCount, ...values);
    this.notify(path, object[property]);

    // let addedCount = values.length;
    // let result = object[property].splice(...values);
    // let removed = result;
    //
    // object = object[property];
    //
    // this.notifySplices(path, [
    //   { index, removed, addedCount, object, type: 'splice' },
    // ]);

    return result;
  },

  notify (path, value) {
    path = this.__templateGetPathAsString(path);

    if (!this.__templateReady) {
      this.__templateNotifyOnReady = this.__templateNotifyOnReady || [];
      if (this.__templateNotifyOnReady.indexOf(path) === -1) {
        this.__templateNotifyOnReady.push(path);
      }
      return;
    }

    let binding = this.__templateGetBinding(path);
    if (binding) {
      if (value === undefined) {
        value = this.get(path);
      }

      binding.walkEffect('set', value);
    }
  },

  // notifySplices (path, splices) {
  //   path = this.__templateGetPathAsString(path);
  //
  //   if (!this.__templateReady) {
  //     if (this.__templateNotifyOnReady.indexOf(path) === -1) {
  //       this.__templateNotifyOnReady.push(path);
  //     }
  //     return;
  //   }
  //
  //   let binding = this.__templateGetBinding(path);
  //   if (binding) {
  //     binding.walkEffect('splice', splices);
  //   }
  // },

  __templateInitialize (template, host, marker) {
    this.__templateId = idGenerator.next();
    this.__templateBindings = {};
    this.__templateHost = host || (template ? template.parentElement : null);
    this.__templateMarker = marker;

    this.__templateReady = false;
    this.__templateNotifyOnReady = [];

    if (!template) {
      return;
    }

    // do below only if template is exists
    this.__template = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__helpers_template__["a" /* fix */])(template);
    this.__templateChildNodes = [];

    this.__templateFragment = document.importNode(this.__template.content, true);
    this.__parseAnnotations();

    if (marker) {
      return;
    }

    if (this.__template.parentElement === this.__templateHost) {
      // when template parent is template host, it means that template is specific template
      // then use template as marker
      this.__templateMarker = this.__template;
    } else {
      // when template is not child of host, put marker to host
      this.__templateMarker = document.createComment(`marker-${this.__templateId}`);
      this.__templateHost.appendChild(this.__templateMarker);
    }
  },

  __templateRender (contentFragment) {
    this.__templateReady = true;

    this.__templateNotifyOnReady.forEach(key => {
      this.notify(key, this.get(key));
    });
    this.__templateNotifyOnReady = [];

    if (!this.__template) {
      return;
    }

    let fragment = this.__templateFragment;
    this.__templateFragment = null;

    if (contentFragment && contentFragment instanceof window.DocumentFragment) {
      // try {
      [].forEach.call(fragment.querySelectorAll('slot'), slot => {
        let name = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__helpers_slot__["a" /* slotName */])(slot);
        let parent = slot.parentElement || fragment;
        let marker = document.createComment(`slot ${name}`);

        parent.insertBefore(marker, slot);
        parent.removeChild(slot);

        if (name) {
          let node = contentFragment.querySelectorAll(`[slot="${name}"]`);
          [].forEach.call(node, (node) => {
            parent.insertBefore(node, marker);
          });
        } else {
          parent.insertBefore(contentFragment, marker);
        }
      });
    }

    this.__templateMarker.parentElement.insertBefore(fragment, this.__templateMarker);
  },

  __templateUninitialize () {
    this.__templateChildNodes.forEach(node => {
      node.parentElement.removeChild(node);
    });
  },

  __templateGetPathAsArray (path) {
    // if (!path) {
    //   throw new Error(`Unknown path ${path} to set to ${this.is}`);
    // }

    if (typeof path !== 'string') {
      return path;
    }

    return path.split('.');
  },

  __templateGetPathAsString (path) {
    if (typeof path === 'string') {
      return path;
    }

    return path.join('.');
  },

  __parseAnnotations () {
    this.__templateChildNodes = [ ...this.__templateFragment.childNodes ];

    let len = this.__templateChildNodes.length;

    for (let i = 0; i < len; i++) {
      let node = this.__templateChildNodes[i];

      switch (node.nodeType) {
        case window.Node.ELEMENT_NODE:
          this.__parseElementAnnotations(node);
          break;
        case window.Node.TEXT_NODE:
          this.__parseTextAnnotations(node);
          break;
      }
    }
  },

  __parseEventAnnotations (element, attrName) {
    // bind event annotation
    let attrValue = element.getAttribute(attrName);
    let eventName = attrName.slice(1, -1);
    // let eventName = attrName.substr(3);
    if (eventName === 'tap') {
      eventName = 'click';
    }

    let context = this;
    let expr = __WEBPACK_IMPORTED_MODULE_1__expr__["a" /* Expr */].getFn(attrValue, [], true);

    this.on(eventName, element, evt => {
      expr.invoke(context, { evt });
    });
  },

  __parseAttributeAnnotations (element) {
    // clone attributes to array first then foreach because we will remove
    // attribute later if already processed
    // this hack to make sure when attribute removed the attributes index doesnt shift.
    let annotated = false;

    let len = element.attributes.length;

    for (let i = 0; i < len; i++) {
      let attr = element.attributes[i];

      let attrName = attr.name;

      if (attrName === 'id' || attrName === 'class' || attrName === 'style') {
        continue;
      }

      if (attrName.indexOf('(') === 0) {
        this.__parseEventAnnotations(element, attrName);
      } else {
        // bind property annotation
        annotated = this.__templateAnnotate(__WEBPACK_IMPORTED_MODULE_1__expr__["a" /* Expr */].get(attr.value), __WEBPACK_IMPORTED_MODULE_3__accessor__["a" /* Accessor */].get(element, attrName)) || annotated;
      }
    }

    return annotated;
  },

  __parseElementAnnotations (element) {
    let annotated = false;

    // when element already has template model it means it already parsed, skip
    // parsing that element
    if (element.__templateModel) {
      return annotated;
    }

    element.__templateModel = this;

    if (element.attributes && element.attributes.length) {
      annotated = this.__parseAttributeAnnotations(element) || annotated;
    }

    if (element.childNodes && element.childNodes.length) {
      let childNodes = [].slice.call(element.childNodes);
      let childNodesLength = childNodes.length;

      for (let i = 0; i < childNodesLength; i++) {
        annotated = this.__parseNodeAnnotations(childNodes[i]) || annotated;
      }
    }

    [].forEach.call(element.getElementsByTagName('slot'), slot => {
      [].forEach.call(slot.childNodes, node => {
        annotated = this.__parseNodeAnnotations(node) || annotated;
      });
    });

    return annotated;
  },

  __parseNodeAnnotations (node) {
    switch (node.nodeType) {
      case window.Node.TEXT_NODE:
        return this.__parseTextAnnotations(node);
      case window.Node.ELEMENT_NODE:
        return this.__parseElementAnnotations(node);
    }
  },

  __parseTextAnnotations (node) {
    let expr = __WEBPACK_IMPORTED_MODULE_1__expr__["a" /* Expr */].get(node.textContent);
    let accessor = __WEBPACK_IMPORTED_MODULE_3__accessor__["a" /* Accessor */].get(node);
    return this.__templateAnnotate(expr, accessor);
  },

  __templateAnnotate (expr, accessor) {
    if (expr.type === 's') {
      return false;
    }

    if (expr.constant) {
      let val = expr.invoke(this);
      accessor.set(val);
      return false;
    }

    // annotate every paths
    let annotation = new __WEBPACK_IMPORTED_MODULE_4__annotation__["a" /* Annotation */](this, expr, accessor);

    // TODO when the annotation to specific model, expr and accessor already exist
    // do not reannotate, see repeat@_itemsChanged
    // if (expr && expr.name === '_itemsChanged') {
    //   console.log(annotation);
    // }

    if (expr.type === 'm') {
      this.__templateGetBinding(expr.fn.name).annotate(annotation);
    }

    expr.vpaths.forEach(arg => this.__templateGetBinding(arg.name).annotate(annotation));

    return true;
  },

  __templateGetBinding (path) {
    let segments = path.split('.');
    let bindings;
    let binding;

    for (let i = 0; i < segments.length; i++) {
      let segment = segments[i];

      bindings = binding ? binding.paths : this.__templateBindings;

      if (!bindings[segment]) {
        bindings[segment] = new __WEBPACK_IMPORTED_MODULE_2__binding__["a" /* Binding */](this, segment);
      }

      binding = bindings[segment];
    }

    return binding;
  },
};


/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dashify__ = __webpack_require__(93);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__dashify__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__camelize__ = __webpack_require__(92);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__camelize__["a"]; });




/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__(48);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "View", function() { return __WEBPACK_IMPORTED_MODULE_0__view__["View"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__markdown__ = __webpack_require__(57);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MarkdownView", function() { return __WEBPACK_IMPORTED_MODULE_1__markdown__["MarkdownView"]; });




/***/ }),
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base__ = __webpack_require__(45);


class AttributeAccessor extends __WEBPACK_IMPORTED_MODULE_0__base__["a" /* BaseAccessor */] {
  constructor (node, name) {
    super(node, name.slice(0, -1));
  }

  set (value) {
    if (value) {
      if (value !== this.node.getAttribute(this.name)) {
        this.node.setAttribute(this.name, value);
      }
    } else {
      this.node.removeAttribute(this.name);
    }
  }

  get () {
    return this.node.getAttribute(this.name);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = AttributeAccessor;



/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base__ = __webpack_require__(45);


class ClassAccessor extends __WEBPACK_IMPORTED_MODULE_0__base__["a" /* BaseAccessor */] {
  set (value) {
    if (value) {
      this.node.classList.add(this.name);
    } else {
      this.node.classList.remove(this.name);
    }
  }

  get () {
    throw new Error('Unimplemented');
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ClassAccessor;



/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base__ = __webpack_require__(45);


class HTMLAccessor extends __WEBPACK_IMPORTED_MODULE_0__base__["a" /* BaseAccessor */] {
  set (value = '') {
    this.node.innerHTML = value;
  }

  get () {
    return this.node.innerHTML;
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = HTMLAccessor;



/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__string__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base__ = __webpack_require__(45);



class PropertyAccessor extends __WEBPACK_IMPORTED_MODULE_1__base__["a" /* BaseAccessor */] {
  constructor (node, name) {
    super();

    this.node = node;
    this.name = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__string__["a" /* camelize */])(name);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PropertyAccessor;



/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base__ = __webpack_require__(45);


class StyleAccessor extends __WEBPACK_IMPORTED_MODULE_0__base__["a" /* BaseAccessor */] {
  set (value = '') {
    this.node.style[this.name] = value;
  }

  get () {
    throw new Error('Unimplemented');
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = StyleAccessor;



/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base__ = __webpack_require__(45);


class TextAccessor extends __WEBPACK_IMPORTED_MODULE_0__base__["a" /* BaseAccessor */] {
  constructor (node) {
    super(node, 'textContent');
  }

  set (value = '') {
    if (value !== this.node.textContent) {
      this.node.textContent = value;
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = TextAccessor;



/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base__ = __webpack_require__(45);


class ValueAccessor extends __WEBPACK_IMPORTED_MODULE_0__base__["a" /* BaseAccessor */] {
  constructor (node) {
    super(node, 'value');
  }

  set (value = '') {
    if (document.activeElement !== this.node) {
      super.set(value);
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ValueAccessor;



/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Annotation {
  constructor (model, expr, accessor) {
    this.model = model;
    this.expr = expr;
    this.accessor = accessor;
  }

  effect (type, value) {
    if (this.accessor) {
      this.accessor.set(this.expr.invoke(this.model));
    } else {
      this.expr.invoke(this.model);
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Annotation;


/* unused harmony default export */ var _unused_webpack_default_export = (Annotation);


/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__expr__ = __webpack_require__(53);


class NotifyAnnotation {
  constructor (model, name) {
    let expr = __WEBPACK_IMPORTED_MODULE_0__expr__["a" /* Expr */].get(model.getAttribute(name));
    this.model = model;
    this.name = expr.name;
  }

  effect (type, value) {
    this.model.__templateModel.set(this.name, value);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = NotifyAnnotation;



/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Binding {
  constructor (context, model) {
    this.context = context;
    this.model = model;
    this.paths = {};
    this.annotations = [];
  }

  annotate (annotation) {
    this.annotations.push(annotation);
  }

  walkEffect (type, value) {
    this.annotations.forEach(annotation => {
      annotation.effect(type, value/* , this.model */);
    });

    Object.keys(this.paths).forEach(i => {
      this.paths[i].walkEffect(type, value);
    });
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Binding;



/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base__ = __webpack_require__(63);


const Component = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__base__["a" /* base */])('HTMLElement');
/* harmony export (immutable) */ __webpack_exports__["a"] = Component;



/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = define;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core__ = __webpack_require__(2);


function define (name, Component, options) {
  const repository = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core__["d" /* getInstance */])();

  let ElementClass = repository.get(name);

  if (ElementClass) {
    console.warn(`Duplicate registering ${name}`);
    return ElementClass;
  }

  if (repository.get('customElements.version') === 'v1') {
    // v1 the element class is the component itself
    ElementClass = Component;
    window.customElements.define(name, Component, options);
  } else {
    let prototype = Object.create(Component.prototype, { is: { value: name } });
    let ElementPrototype = { prototype };

    if (options && options.extends) {
      ElementPrototype.extends = options.extends;
    }

    ElementClass = document.registerElement(name, ElementPrototype);
  }

  repository.put(name, ElementClass);

  return ElementClass;
}


/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Filter {
  constructor (name, callback, otherArgs) {
    this.name = name;
    this.callback = callback;
    this.otherArgs = otherArgs;
  }

  invoke (val) {
    let args = [val];
    [].push.apply(args, this.otherArgs);
    return this.callback.apply(null, args);
  }

  static put (name, callback) {
    registry[name] = callback;
  }

  static get (name) {
    let segments = name.split(':');
    let args = segments.splice(1);
    let key = segments.pop();

    if (key in registry === false) {
      throw new Error(`Filter "${name}" not found.`);
    }

    return new Filter(key, registry[key], args);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Filter;


const registry = {
  required: val => {
    if (val === undefined || val === null || val === '') {
      throw new Error('Value is required');
    }
    return val;
  },
  string: val => String(val),
  number: val => Number(val),
  boolean: val => Boolean(val),
  default: (val, defVal) => (val || defVal),
  upper: val => String.prototype.toUpperCase.call(val || ''),
  lower: val => String.prototype.toLowerCase.call(val || ''),
  not: val => !val,
  slice: (val, begin, end) => Array.prototype.slice.call(val || [], begin, end),
  json: (val, indent) => JSON.stringify(val, null, Number(indent)),
  consoleTrace: val => console.trace(val),
  consoleLog: val => console.log(val),
  consoleInfo: val => console.info(val),
  consoleWarn: val => console.warn(val),
  consoleError: val => console.error(val),
  currency: val => (val || 0).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,'),
};


/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return slotName; });
const SLOT_SUPPORTED = (() => {
  if (typeof window === 'undefined') {
    return false;
  }

  return (
    'HTMLUnknownElement' in window &&
    !(document.createElement('slot') instanceof window.HTMLUnknownElement)
  );
})();

function slotName (element) {
  return SLOT_SUPPORTED ? element.name : element.getAttribute('name');
}




/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fix; });
function fix (template) {
  if (!template.content && window.HTMLTemplateElement && window.HTMLTemplateElement.decorate) {
    window.HTMLTemplateElement.decorate(template);
  }
  return template;
};

function needFixImportNode () {
  // console.log('needFixImportNode?');
  if (document.__importNode) {
    // already fixed
    return false;
  }
  let template = document.createElement('template');
  template.innerHTML = '<template>i</template>';
  let imported = document.importNode(template.content, true);
  return !imported.firstChild.content.firstChild || imported.firstChild.content.firstChild.textContent !== 'i';
}

if (needFixImportNode()) {
  // console.log('fixed importNode');
  document.__importNode = document.importNode;
  document.importNode = function (node, deep) {
    if (!deep) {
      return document.__importNode(node, deep);
    }

    let sourceTpls = [].slice.call(node.querySelectorAll('template'));
    let imported = document.__importNode(node, deep);
    [].forEach.call(imported.querySelectorAll('template'), (child, i) => {
      child.innerHTML = sourceTpls[i].innerHTML;
    });

    return imported;
  };
}




/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const CACHE = {};

class Token {
  static get CACHE () {
    return CACHE;
  }

  static get (name) {
    if (name in CACHE) {
      return CACHE[name];
    }

    let token = new Token(name);
    CACHE[name] = token;
    return token;
  }

  constructor (name) {
    this.name = name;
    this.contextName = '';
    this.baseName = '';
    this._value = null;
    this.type = 'v';

    if (!this.name.match(/^[a-zA-Z_]/)) {
      try {
        this._value = JSON.parse(this.name);
        this.type = 's';
        return;
      } catch (err) {
      }
    }

    if (this.type === 'v') {
      let nameSegments = this.name.split('.');
      this.baseName = nameSegments.pop();
      this.contextName = nameSegments.join('.');
    }
  }

  value (...contexts) {
    if (this.type === 's') {
      return this._value;
    }

    for (let context of contexts) {
      if (!context) {
        continue;
      }

      let val = typeof context.get === 'function' ? context.get(this.name) : context[this.name];
      if (val !== undefined) {
        return val;
      }
    }
  }

  invoke (args, ...contexts) {
    if (contexts.length === 0) {
      throw new Error(`Cannot invoke method ${this.name} of undefined context`);
    }

    if (this.type === 's') {
      let [ context ] = contexts;
      throw new Error(`Method is not eligible, ${context.__templateHost.nodeName || '$anonymous'}#${this.name}`);
    }

    for (let context of contexts) {
      if (!context) {
        continue;
      }

      if (typeof context.get === 'function') {
        let ctx = this.contextName ? context.get(this.contextName) : context;
        if (typeof ctx[this.baseName] === 'function') {
          return ctx[this.baseName](...args);
        }
      } else if (typeof context[this.name] === 'function') {
        return context[this.name].apply(context, args);
      }
    }

    let [ context ] = contexts;
    throw new Error(`Method is not eligible, ${context.__templateHost.nodeName || '$anonymous'}#${this.name}`);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Token;



/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = deserialize;
function deserialize (value, type) {
  switch (type) {
    case Number:
      value = Number(value);
      break;

    case Boolean:
      value = Boolean(value === '' || value === 'true' || value === '1' || value === 'on');
      break;

    case Object:
      try {
        value = JSON.parse(value);
      } catch (err) {
        // allow non-JSON literals like Strings and Numbers
        // console.warn('Failed decode json: "' + value + '" to Object');
      }
      break;

    case Array:
      try {
        value = JSON.parse(value);
      } catch (err) {
        // .console.warn('Failed decode json: "' + value + '" to Array');
        value = null;
      }
      break;

    case Date:
      value = new Date(value);
      break;

    case RegExp:
      value = new RegExp(value);
      break;

    case Function:
      value = new Function(value); // eslint-disable-line
      break;

    // behave like default for now
    // case String:
    default:
      break;
  }
  return value;
}


/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__val__ = __webpack_require__(91);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__val__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__serialize__ = __webpack_require__(90);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__deserialize__ = __webpack_require__(88);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__deserialize__["a"]; });





/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export serialize */
function serialize (value) {
  switch (typeof value) {
    case 'boolean':
      return value ? '' : undefined;

    case 'object':
      if (value instanceof Date) {
        return value;
      } else if (value instanceof RegExp) {
        return value.toString().slice(1, -1);
      } else if (value) {
        try {
          return JSON.stringify(value);
        } catch (err) {
          return '';
        }
      }
      break;
    default:
      // noop
  }
  return value === null ? undefined : value;
}


/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = val;
function val (value, ...args) {
  return typeof value === 'function' ? value(...args) : value;
};


/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = camelize;
var camelized = {};

function camelize (dash) {
  var mapped = camelized[dash];
  if (mapped) {
    return mapped;
  }
  if (dash.indexOf('-') < 0) {
    camelized[dash] = dash;
  } else {
    camelized[dash] = dash.replace(/-([a-z])/g,
      function (m) {
        return m[1].toUpperCase();
      }
    );
  }

  return camelized[dash];
}


/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = dashify;
var dashified = {};

function dashify (camel) {
  var mapped = dashified[camel];
  if (mapped) {
    return mapped;
  }
  dashified[camel] = camel.replace(/([a-z][A-Z])/g,
    function (g) {
      return g[0] + '-' + g[1].toLowerCase();
    }
  );

  return dashified[camel];
}


/***/ }),
/* 94 */,
/* 95 */,
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

(function(window) {
    var re = {
        not_string: /[^s]/,
        number: /[diefg]/,
        json: /[j]/,
        not_json: /[^j]/,
        text: /^[^\x25]+/,
        modulo: /^\x25{2}/,
        placeholder: /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijosuxX])/,
        key: /^([a-z_][a-z_\d]*)/i,
        key_access: /^\.([a-z_][a-z_\d]*)/i,
        index_access: /^\[(\d+)\]/,
        sign: /^[\+\-]/
    }

    function sprintf() {
        var key = arguments[0], cache = sprintf.cache
        if (!(cache[key] && cache.hasOwnProperty(key))) {
            cache[key] = sprintf.parse(key)
        }
        return sprintf.format.call(null, cache[key], arguments)
    }

    sprintf.format = function(parse_tree, argv) {
        var cursor = 1, tree_length = parse_tree.length, node_type = "", arg, output = [], i, k, match, pad, pad_character, pad_length, is_positive = true, sign = ""
        for (i = 0; i < tree_length; i++) {
            node_type = get_type(parse_tree[i])
            if (node_type === "string") {
                output[output.length] = parse_tree[i]
            }
            else if (node_type === "array") {
                match = parse_tree[i] // convenience purposes only
                if (match[2]) { // keyword argument
                    arg = argv[cursor]
                    for (k = 0; k < match[2].length; k++) {
                        if (!arg.hasOwnProperty(match[2][k])) {
                            throw new Error(sprintf("[sprintf] property '%s' does not exist", match[2][k]))
                        }
                        arg = arg[match[2][k]]
                    }
                }
                else if (match[1]) { // positional argument (explicit)
                    arg = argv[match[1]]
                }
                else { // positional argument (implicit)
                    arg = argv[cursor++]
                }

                if (get_type(arg) == "function") {
                    arg = arg()
                }

                if (re.not_string.test(match[8]) && re.not_json.test(match[8]) && (get_type(arg) != "number" && isNaN(arg))) {
                    throw new TypeError(sprintf("[sprintf] expecting number but found %s", get_type(arg)))
                }

                if (re.number.test(match[8])) {
                    is_positive = arg >= 0
                }

                switch (match[8]) {
                    case "b":
                        arg = arg.toString(2)
                    break
                    case "c":
                        arg = String.fromCharCode(arg)
                    break
                    case "d":
                    case "i":
                        arg = parseInt(arg, 10)
                    break
                    case "j":
                        arg = JSON.stringify(arg, null, match[6] ? parseInt(match[6]) : 0)
                    break
                    case "e":
                        arg = match[7] ? arg.toExponential(match[7]) : arg.toExponential()
                    break
                    case "f":
                        arg = match[7] ? parseFloat(arg).toFixed(match[7]) : parseFloat(arg)
                    break
                    case "g":
                        arg = match[7] ? parseFloat(arg).toPrecision(match[7]) : parseFloat(arg)
                    break
                    case "o":
                        arg = arg.toString(8)
                    break
                    case "s":
                        arg = ((arg = String(arg)) && match[7] ? arg.substring(0, match[7]) : arg)
                    break
                    case "u":
                        arg = arg >>> 0
                    break
                    case "x":
                        arg = arg.toString(16)
                    break
                    case "X":
                        arg = arg.toString(16).toUpperCase()
                    break
                }
                if (re.json.test(match[8])) {
                    output[output.length] = arg
                }
                else {
                    if (re.number.test(match[8]) && (!is_positive || match[3])) {
                        sign = is_positive ? "+" : "-"
                        arg = arg.toString().replace(re.sign, "")
                    }
                    else {
                        sign = ""
                    }
                    pad_character = match[4] ? match[4] === "0" ? "0" : match[4].charAt(1) : " "
                    pad_length = match[6] - (sign + arg).length
                    pad = match[6] ? (pad_length > 0 ? str_repeat(pad_character, pad_length) : "") : ""
                    output[output.length] = match[5] ? sign + arg + pad : (pad_character === "0" ? sign + pad + arg : pad + sign + arg)
                }
            }
        }
        return output.join("")
    }

    sprintf.cache = {}

    sprintf.parse = function(fmt) {
        var _fmt = fmt, match = [], parse_tree = [], arg_names = 0
        while (_fmt) {
            if ((match = re.text.exec(_fmt)) !== null) {
                parse_tree[parse_tree.length] = match[0]
            }
            else if ((match = re.modulo.exec(_fmt)) !== null) {
                parse_tree[parse_tree.length] = "%"
            }
            else if ((match = re.placeholder.exec(_fmt)) !== null) {
                if (match[2]) {
                    arg_names |= 1
                    var field_list = [], replacement_field = match[2], field_match = []
                    if ((field_match = re.key.exec(replacement_field)) !== null) {
                        field_list[field_list.length] = field_match[1]
                        while ((replacement_field = replacement_field.substring(field_match[0].length)) !== "") {
                            if ((field_match = re.key_access.exec(replacement_field)) !== null) {
                                field_list[field_list.length] = field_match[1]
                            }
                            else if ((field_match = re.index_access.exec(replacement_field)) !== null) {
                                field_list[field_list.length] = field_match[1]
                            }
                            else {
                                throw new SyntaxError("[sprintf] failed to parse named argument key")
                            }
                        }
                    }
                    else {
                        throw new SyntaxError("[sprintf] failed to parse named argument key")
                    }
                    match[2] = field_list
                }
                else {
                    arg_names |= 2
                }
                if (arg_names === 3) {
                    throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported")
                }
                parse_tree[parse_tree.length] = match
            }
            else {
                throw new SyntaxError("[sprintf] unexpected placeholder")
            }
            _fmt = _fmt.substring(match[0].length)
        }
        return parse_tree
    }

    var vsprintf = function(fmt, argv, _argv) {
        _argv = (argv || []).slice(0)
        _argv.splice(0, 0, fmt)
        return sprintf.apply(null, _argv)
    }

    /**
     * helpers
     */
    function get_type(variable) {
        return Object.prototype.toString.call(variable).slice(8, -1).toLowerCase()
    }

    function str_repeat(input, multiplier) {
        return Array(multiplier + 1).join(input)
    }

    /**
     * export to either browser or node.js
     */
    if (true) {
        exports.sprintf = sprintf
        exports.vsprintf = vsprintf
    }
    else {
        window.sprintf = sprintf
        window.vsprintf = vsprintf

        if (typeof define === "function" && define.amd) {
            define(function() {
                return {
                    sprintf: sprintf,
                    vsprintf: vsprintf
                }
            })
        }
    }
})(typeof window === "undefined" ? this : window);


/***/ }),
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "my-home .block {\n  border: 1px solid #ccc;\n  margin-bottom: 20px; }\n  my-home .block h3 {\n    background-color: #3f51b5;\n    color: #fff;\n    padding: 5px 10px;\n    margin: 0;\n    font-size: 14px;\n    line-height: inherit; }\n  my-home .block .block_row {\n    margin: 5px 10px; }\n    my-home .block .block_row label {\n      display: block;\n      width: 200px;\n      font-size: 12px;\n      color: #999; }\n", ""]);

// exports


/***/ })
]);
//# sourceMappingURL=1.js.map