/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		24: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData === 0) {
/******/ 			return new Promise(function(resolve) { resolve(); });
/******/ 		}
/******/
/******/ 		// a Promise means "currently loading".
/******/ 		if(installedChunkData) {
/******/ 			return installedChunkData[2];
/******/ 		}
/******/
/******/ 		// setup Promise in chunk cache
/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		installedChunkData[2] = promise;
/******/
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = 'text/javascript';
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;
/******/
/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "lib/" + chunkId + ".js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) {
/******/ 					chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				}
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		head.appendChild(script);
/******/
/******/ 		return promise;
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 25);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		// Test for IE <= 9 as proposed by Browserhacks
		// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
		// Tests for existence of standard globals is to allow style-loader 
		// to operate correctly into non-standard environments
		// @see https://github.com/webpack-contrib/style-loader/issues/177
		return window && document && document.all && !window.atob;
	}),
	getElement = (function(fn) {
		var memo = {};
		return function(selector) {
			if (typeof memo[selector] === "undefined") {
				memo[selector] = fn.call(this, selector);
			}
			return memo[selector]
		};
	})(function (styleTarget) {
		return document.querySelector(styleTarget)
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [],
	fixUrls = __webpack_require__(33);

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (typeof options.insertInto === "undefined") options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list, options);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list, options) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var styleTarget = getElement(options.insertInto)
	if (!styleTarget) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			styleTarget.insertBefore(styleElement, styleTarget.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			styleTarget.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			styleTarget.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		styleTarget.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	options.attrs.type = "text/css";

	attachTagAttrs(styleElement, options.attrs);
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	attachTagAttrs(linkElement, options.attrs);
	insertStyleElement(options, linkElement);
	return linkElement;
}

function attachTagAttrs(element, attrs) {
	Object.keys(attrs).forEach(function (key) {
		element.setAttribute(key, attrs[key]);
	});
}

function addStyle(obj, options) {
	var styleElement, update, remove, transformResult;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    transformResult = options.transform(obj.css);
	    
	    if (transformResult) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = transformResult;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css. 
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement, options);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/* If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
	and there is no publicPath defined then lets turn convertToAbsoluteUrls
	on by default.  Otherwise default to the convertToAbsoluteUrls option
	directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls){
		css = fixUrls(css);
	}

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__repository__ = __webpack_require__(22);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__repository__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__repository__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__deprecated__ = __webpack_require__(3);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__deprecated__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__id_generator__ = __webpack_require__(4);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__id_generator__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__event__ = __webpack_require__(18);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__event__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fx__ = __webpack_require__(20);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_4__fx__["a"]; });







/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = deprecated;
function deprecated (module, message) {
  let longName = module ? `@xinix/xin/${module}` : '@xinix/xin';
  console.warn(`DEPRECATED: ${longName}, ${message}`);
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class IdGenerator {
  constructor (key = '') {
    this.key = key;
    this.value = 0;
  }

  next () {
    return this.value++;
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = IdGenerator;



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = bootstrap;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__repository__ = __webpack_require__(6);


function bootstrap (data, fallbackScope) {
  let repository = window.xin = new __WEBPACK_IMPORTED_MODULE_0__repository__["a" /* Repository */](data, fallbackScope);

  return repository;
}


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Repository {
  constructor (data = {}, fallbackScope = window) {
    this.data = Object.assign({
      'env.debug': false,
      'customElements.version': 'v1',
    }, data);
    this.fallbackScope = fallbackScope;
  }

  get (id) {
    if (!isNaN(id)) {
      return this.data[id];
    }

    if (this.data[id]) {
      return this.data[id];
    }

    let idSplitted = id.split('.');
    let scope = this.fallbackScope;
    idSplitted.find(function (token) {
      scope = scope[token];
      return !scope;
    });

    return scope;
  }

  put (id, value) {
    if (value === undefined) {
      return this.remove(id);
    }
    this.data[id] = value;
  }

  remove (id) {
    delete this.data[id];
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Repository;



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core__ = __webpack_require__(2);


const idGenerator = new __WEBPACK_IMPORTED_MODULE_0__core__["b" /* IdGenerator */]('async');

const requestAnimationFrame = (
  window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.oRequestAnimationFrame ||
  window.msRequestAnimationFrame
);

const cancelAnimationFrame = (
  window.cancelAnimationFrame ||
  window.webkitCancelRequestAnimationFrame ||
  window.webkitCancelAnimationFrame ||
  window.mozCancelRequestAnimationFrame || window.mozCancelAnimationFrame ||
  window.oCancelRequestAnimationFrame || window.oCancelAnimationFrame ||
  window.msCancelRequestAnimationFrame || window.msCancelAnimationFrame
);

class Async {
  static nextFrame (callback) {
    return requestAnimationFrame(callback);
  }

  static sleep (wait) {
    return new Promise(resolve => setTimeout(resolve, wait));
  }

  static run (callback, wait) {
    return (new Async()).start(callback, wait);
  }

  constructor (context) {
    this.id = idGenerator.next();
    this.context = context || null;
    this.handle = null;
    this.frameHandle = null;
    this.cleared = true;
  }

  start (callback, wait) {
    if (typeof callback !== 'function') {
      throw new Error('Async should specify function');
    }

    if (!this.cleared) {
      throw new Error('Async already run');
    }

    this.cleared = false;

    wait = wait || 0;

    let self = this;
    let context = this.context;
    let boundCallback = function () {
      self.frameHandle = requestAnimationFrame(() => {
        self.__clear();
        callback.call(context);
      });
    };

    if (wait) {
      this.handle = setTimeout(boundCallback, wait);
    } else {
      boundCallback();
    }
  }

  __clear () {
    this.cleared = true;

    cancelAnimationFrame(~~this.frameHandle);
    clearTimeout(~~this.handle);
    this.handle = this.frameHandle = null;
  }

  cancel () {
    this.__clear();
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Async;
;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(27);
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
		module.hot.accept("!!../../css-loader/index.js!../../sass-loader/lib/loader.js!./material-icons.css", function() {
			var newContent = require("!!../../css-loader/index.js!../../sass-loader/lib/loader.js!./material-icons.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(28);
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
		module.hot.accept("!!../../css-loader/index.js!../../sass-loader/lib/loader.js!./ui-button.scss", function() {
			var newContent = require("!!../../css-loader/index.js!../../sass-loader/lib/loader.js!./ui-button.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(29);
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
		module.hot.accept("!!../../css-loader/index.js!../../sass-loader/lib/loader.js!./ui-header.scss", function() {
			var newContent = require("!!../../css-loader/index.js!../../sass-loader/lib/loader.js!./ui-header.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(30);
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
		module.hot.accept("!!../../css-loader/index.js!../../sass-loader/lib/loader.js!./ui-layout.scss", function() {
			var newContent = require("!!../../css-loader/index.js!../../sass-loader/lib/loader.js!./ui-layout.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(31);
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
		module.hot.accept("!!../../css-loader/index.js!../../sass-loader/lib/loader.js!./ui-list.scss", function() {
			var newContent = require("!!../../css-loader/index.js!../../sass-loader/lib/loader.js!./ui-list.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(32);
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
		module.hot.accept("!!../../css-loader/index.js!../../sass-loader/lib/loader.js!./ui-typography.scss", function() {
			var newContent = require("!!../../css-loader/index.js!../../sass-loader/lib/loader.js!./ui-typography.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./my-home": [
		16,
		1
	],
	"./my-home.html": [
		40,
		7
	],
	"./my-home.js": [
		16,
		1
	],
	"./my-home.scss": [
		42,
		4
	],
	"./my-route": [
		17,
		0
	],
	"./my-route.html": [
		41,
		6
	],
	"./my-route.js": [
		17,
		0
	],
	"./my-route.scss": [
		43,
		3
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 14;

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__async__ = __webpack_require__(7);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__async__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__debounce__ = __webpack_require__(23);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__debounce__["a"]; });




/***/ }),
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = event;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__id_generator__ = __webpack_require__(4);


const idGenerator = new __WEBPACK_IMPORTED_MODULE_0__id_generator__["a" /* IdGenerator */]('event');

let _matcher;
let _level = 0;
let _id = 0;
let _handlers = {};
let _delegatorInstances = {};

function _addEvent (delegator, type, callback) {
  // blur and focus do not bubble up but if you use event capturing
  // then you will get them
  let useCapture = type === 'blur' || type === 'focus';
  delegator.element.addEventListener(type, callback, useCapture);
}

function _cancel (evt) {
  evt.preventDefault();
  evt.stopPropagation();
}

/**
 * returns function to use for determining if an element
 * matches a query selector
 *
 * @returns {Function}
 */
function _getMatcher (element) {
  if (_matcher) {
    return _matcher;
  }

  if (element.matches) {
    _matcher = element.matches;
    return _matcher;
  }

  if (element.webkitMatchesSelector) {
    _matcher = element.webkitMatchesSelector;
    return _matcher;
  }

  if (element.mozMatchesSelector) {
    _matcher = element.mozMatchesSelector;
    return _matcher;
  }

  if (element.msMatchesSelector) {
    _matcher = element.msMatchesSelector;
    return _matcher;
  }

  if (element.oMatchesSelector) {
    _matcher = element.oMatchesSelector;
    return _matcher;
  }

  // if it doesn't match a native browser method
  // fall back to the delegator function
  _matcher = Delegator.matchesSelector;
  return _matcher;
}

/**
 * determines if the specified element matches a given selector
 *
 * @param {Node} element - the element to compare against the selector
 * @param {string} selector
 * @param {Node} boundElement - the element the listener was attached to
 * @returns {void|Node}
 */
function _matchesSelector (element, selector, boundElement) {
  // no selector means this event was bound directly to this element
  if (selector === '_root') {
    return boundElement;
  }

  // if we have moved up to the element you bound the event to
  // then we have come too far
  if (element === boundElement) {
    return;
  }

  if (_getMatcher(element).call(element, selector)) {
    return element;
  }

  // if this element did not match but has a parent we should try
  // going up the tree to see if any of the parent elements match
  // for example if you are looking for a click on an <a> tag but there
  // is a <span> inside of the a tag that it is the target,
  // it should still work
  if (element.parentNode) {
    _level++;
    return _matchesSelector(element.parentNode, selector, boundElement);
  }
}

function _addHandler (delegator, event, selector, callback) {
  if (!_handlers[delegator.id]) {
    _handlers[delegator.id] = {};
  }

  if (!_handlers[delegator.id][event]) {
    _handlers[delegator.id][event] = {};
  }

  if (!_handlers[delegator.id][event][selector]) {
    _handlers[delegator.id][event][selector] = [];
  }

  _handlers[delegator.id][event][selector].push(callback);
}

function _removeHandler (delegator, event, selector, callback) {
  // if there are no events tied to this element at all
  // then don't do anything
  if (!_handlers[delegator.id]) {
    return;
  }

  // if there is no event type specified then remove all events
  // example: Delegator(element).off()
  if (!event) {
    for (let type in _handlers[delegator.id]) {
      if (_handlers[delegator.id].hasOwnProperty(type)) {
        _handlers[delegator.id][type] = {};
      }
    }
    return;
  }

  // if no callback or selector is specified remove all events of this type
  // example: Delegator(element).off('click')
  if (!callback && !selector) {
    _handlers[delegator.id][event] = {};
    return;
  }

  // if a selector is specified but no callback remove all events
  // for this selector
  // example: Delegator(element).off('click', '.sub-element')
  if (!callback) {
    delete _handlers[delegator.id][event][selector];
    return;
  }

  // if we have specified an event type, selector, and callback then we
  // need to make sure there are callbacks tied to this selector to
  // begin with.  if there aren't then we can stop here
  if (!_handlers[delegator.id][event][selector]) {
    return;
  }

    // if there are then loop through all the callbacks and if we find
    // one that matches remove it from the array
  for (let i = 0; i < _handlers[delegator.id][event][selector].length; i++) {
    if (_handlers[delegator.id][event][selector][i] === callback) {
      _handlers[delegator.id][event][selector].splice(i, 1);
      break;
    }
  }
}

function _handleEvent (id, e, type) {
  if (!_handlers[id][type]) {
    return;
  }

  let target = e.target || e.srcElement;
  let selector;
  let match;
  let matches = {};
  let i = 0;
  let j = 0;

  // find all events that match
  _level = 0;
  for (selector in _handlers[id][type]) {
    if (_handlers[id][type].hasOwnProperty(selector)) {
      match = _matchesSelector(target, selector, _delegatorInstances[id].element);

      if (match && Delegator.matchesEvent(type, _delegatorInstances[id].element, match, selector === '_root', e)) {
        _level++;
        _handlers[id][type][selector].match = match;
        matches[_level] = _handlers[id][type][selector];
      }
    }
  }

  // stopPropagation() fails to set cancelBubble to true in Webkit
  // @see http://code.google.com/p/chromium/issues/detail?id=162270
  e.stopPropagation = function () {
    e.cancelBubble = true;
  };

  for (i = 0; i <= _level; i++) {
    if (matches[i]) {
      for (j = 0; j < matches[i].length; j++) {
        if (matches[i][j].call(matches[i].match, e) === false) {
          Delegator.cancel(e);
          return;
        }

        if (e.cancelBubble) {
          return;
        }
      }
    }
  }
}

const aliases = new Map();
const aliasesDefaultTranslator = name => ([ name ]);
const aliasesTranslators = {
  transitionend (name) {
    let el = document.createElement('fakeelement');
    let transitions = {
      'OTransition': 'oTransitionEnd',
      'MozTransition': 'transitionend',
      'WebkitTransition': 'webkitTransitionEnd',
      'transition': 'transitionend',
    };

    for (let t in transitions) {
      if (el.style[t] !== undefined) {
        return [transitions[t]];
      }
    }
  },
};

function _aliases (name) {
  let theAliases;
  if (aliases.has(name)) {
    theAliases = aliases.get(name);
  } else {
    let translator = aliasesTranslators[name] || aliasesDefaultTranslator;
    theAliases = translator(name);
    aliases.set(name, theAliases);
  }

  return theAliases;
}

/**
 * binds the specified events to the element
 *
 * @param {string|Array} events
 * @param {string} selector
 * @param {Function} callback
 * @param {boolean=} remove
 * @returns {Object}
 */
function _bind (events, selector, callback, remove) {
  // fail silently if you pass null or undefined as an alement
  // in the Delegator constructor
  if (!this.element) {
    return;
  }

  if (!(events instanceof Array)) {
    events = [events];
  }

  if (!callback && typeof (selector) === 'function') {
    callback = selector;
    selector = '_root';
  }

  if (selector instanceof window.Element) {
    let id;
    if (selector.hasAttribute('bind-event-id')) {
      id = selector.getAttribute('bind-event-id');
    } else {
      id = idGenerator.next();
      selector.setAttribute('bind-event-id', id);
    }
    selector = `[bind-event-id="${id}"]`;
  }

  let id = this.id;
  let i;

  function _getGlobalCallback (type) {
    return function (e) {
      _handleEvent(id, e, type);
    };
  }

  for (i = 0; i < events.length; i++) {
    _aliases(events[i]).forEach(alias => {
      // console.info('> ' + events[i] + ':' + alias);
      if (remove) {
        _removeHandler(this, alias, selector, callback);
        return;
      }

      if (!_handlers[id] || !_handlers[id][alias]) {
        Delegator.addEvent(this, alias, _getGlobalCallback(alias));
      }

      _addHandler(this, alias, selector, callback);
    });
  }

  return this;
}

/**
 * Delegator object constructor
 *
 * @param {Node} element
 */
function Delegator (element, id) {
  this.element = element;
  this.id = id;
}

/**
 * adds an event
 *
 * @param {string|Array} events
 * @param {string} selector
 * @param {Function} callback
 * @returns {Object}
 */
Delegator.prototype.on = function (events, selector, callback) {
  return _bind.call(this, events, selector, callback);
};

/**
 * removes an event
 *
 * @param {string|Array} events
 * @param {string} selector
 * @param {Function} callback
 * @returns {Object}
 */
Delegator.prototype.off = function (events, selector, callback) {
  return _bind.call(this, events, selector, callback, true);
};

Delegator.prototype.once = function (events, selector, callback) {
  if (!callback && typeof (selector) === 'function') {
    callback = selector;
    selector = '_root';
  }

  const proxyCallback = (...args) => {
    this.off(events, selector, proxyCallback);
    return callback(...args); // eslint-disable-line standard/no-callback-literal
  };

  return this.on(events, selector, proxyCallback);
};

Delegator.prototype.fire = function (type, detail, options) {
  options = options || {};
  detail = detail || {};

  let evt;
  let bubbles = options.bubbles === undefined ? true : options.bubbles;
  let cancelable = Boolean(options.cancelable);

  switch (type) {
    case 'click':
      evt = new window.Event(type, {
        bubbles: bubbles,
        cancelable: cancelable,
        // XXX is it ok to have detail here?
        detail: detail,
      });

      // XXX check if without this works on every browsers
      // evt = document.createEvent('HTMLEvents');
      // evt.initEvent(type, true, false);
      break;
    default:
      evt = new window.CustomEvent(type, {
        bubbles: Boolean(bubbles),
        cancelable: cancelable,
        detail: detail,
      });
      break;
  }

  this.element.dispatchEvent(evt);

  return evt;
};

Delegator.matchesSelector = function () {};
Delegator.cancel = _cancel;
Delegator.addEvent = _addEvent;
Delegator.aliases = _aliases;
Delegator.matchesEvent = function () {
  return true;
};

function event (element) {
  // only keep one Delegator instance per node to make sure that
  // we don't create a ton of new objects if you want to delegate
  // multiple events from the same node
  //
  // for example: event(document).on(...
  for (let key in _delegatorInstances) {
    if (_delegatorInstances[key].element === element) {
      return _delegatorInstances[key];
    }
  }

  _id++;
  _delegatorInstances[_id] = new Delegator(element, _id);

  return _delegatorInstances[_id];
}


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fn__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fx_css__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fx_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__fx_css__);





class Fx {
  static add (name, transition) {
    adapters[name] = transition;
  }

  static get (name) {
    return adapters[name] || adapters.none;
  }

  constructor (options) {
    options = options || {};
    this.element = options.element;
    this.duration = options.duration || 0;
    this.transition = options.transition || 'none';
    this.method = options.method || '';

    this.adapter = options.adapter || Fx.get(this.transition);

    this.running = false;
    this.direction = 0;
  }

  async play (direction) {
    this.running = true;
    this.direction = direction;

    await this.adapter.play(this);
  }

  async stop () {
    await this.adapter.stop(this);

    this.running = false;
    this.direction = 0;
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Fx;


// TODO: refactor adapters to each own file
const adapters = {
  'none': {
    async play () {},

    async stop () {},
  },

  'slide': {
    play (fx) {
      return new Promise(resolve => {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core__["c" /* event */])(fx.element).once('transitionend', () => {
          fx.element.classList.remove('trans-slide__animate');
          resolve();
        });
        fx.element.classList.add(`trans-slide__${fx.method}-${fx.direction > 0 ? 'left' : 'right'}`);

        __WEBPACK_IMPORTED_MODULE_1__fn__["a" /* Async */].nextFrame(() => {
          fx.element.classList.add('trans-slide__animate');
          __WEBPACK_IMPORTED_MODULE_1__fn__["a" /* Async */].nextFrame(() => fx.element.classList.add(`trans-slide__${fx.method}`));
        });
      });
    },

    stop (fx) {
      return new Promise(resolve => {
        __WEBPACK_IMPORTED_MODULE_1__fn__["a" /* Async */].nextFrame(() => {
          fx.element.classList.remove(`trans-slide__${fx.method}-${fx.direction > 0 ? 'left' : 'right'}`);
          fx.element.classList.remove(`trans-slide__${fx.method}`);
          resolve();
        });
      });
    },
  },

  'fade': {
    play (fx) {
      return new Promise(resolve => {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core__["c" /* event */])(fx.element).once('transitionend', () => {
          resolve();
        });

        fx.element.classList.add(`trans-fade__${fx.method}`);

        __WEBPACK_IMPORTED_MODULE_1__fn__["a" /* Async */].nextFrame(() => {
          fx.element.classList.add(`trans-fade__${fx.method}-animate`);
        });
      });
    },

    stop (fx) {
      return new Promise(resolve => {
        fx.element.classList.remove(`trans-fade__${fx.method}`);

        __WEBPACK_IMPORTED_MODULE_1__fn__["a" /* Async */].nextFrame(() => {
          fx.element.classList.remove(`trans-fade__${fx.method}-animate`);
          resolve();
        });
      });
    },
  },
};


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fx__ = __webpack_require__(19);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__fx__["a"]; });



/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getInstance;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bootstrap__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__deprecated__ = __webpack_require__(3);



function getInstance () {
  if ('xin' in window === false || 'get' in window.xin === false) {
    if (window.xin) {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__deprecated__["a" /* deprecated */])('', 'Do not use window.xin to set configuration. Please use bootstrap(config) instead.');
    }
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__bootstrap__["a" /* bootstrap */])(window.xin, window);
  }

  return window.xin;
}


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bootstrap__ = __webpack_require__(5);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__bootstrap__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__get_instance__ = __webpack_require__(21);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__get_instance__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__repository__ = __webpack_require__(6);
/* unused harmony namespace reexport */





/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__async__ = __webpack_require__(7);


class Debounce {
  constructor (context, immediate) {
    this.context = context;
    this.immediate = Boolean(immediate);
    this.async = null;
    this.running = false;
  }

  start (callback, wait) {
    if (this.immediate) {
      throw new Error('Unimplemented yet!');
    }

    this.running = true;
    this.async = new __WEBPACK_IMPORTED_MODULE_0__async__["a" /* Async */](this.context);
    this.async.start(() => {
      callback.call(this.context);
      this.running = false;
      this.async = null;
    }, wait);
  }

  cancel () {
    this.running = false;
    this.async.cancel();
    this.async = null;
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Debounce;



/***/ }),
/* 24 */,
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_xin_ui_scss_ui_layout_scss__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_xin_ui_scss_ui_layout_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_xin_ui_scss_ui_layout_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_xin_ui_scss_ui_typography_scss__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_xin_ui_scss_ui_typography_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_xin_ui_scss_ui_typography_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_xin_ui_scss_ui_list_scss__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_xin_ui_scss_ui_list_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_xin_ui_scss_ui_list_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_xin_ui_scss_ui_header_scss__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_xin_ui_scss_ui_header_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_xin_ui_scss_ui_header_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_xin_ui_scss_ui_button_scss__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_xin_ui_scss_ui_button_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_xin_ui_scss_ui_button_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_design_icons_iconfont_material_icons_css__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_design_icons_iconfont_material_icons_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_design_icons_iconfont_material_icons_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__xinix_xin_core__ = __webpack_require__(2);









(async function () {
  // use below polyfill to support unsupported customElements v0
  if (!document.registerElement) await __webpack_require__.e/* import() */(5).then(__webpack_require__.bind(null, 39));
  // use below polyfill to support unsupported customElements v1
  // if (!window.customElements) await System.import('@webcomponents/webcomponentsjs/webcomponents-hi-sd-ce');

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__xinix_xin_core__["a" /* bootstrap */])({
    // 'customElements.version': 'v0',
    // 'env.debug': true,
    'view.loaders': [{
      test: /^my-/,
      load(view) {
        return __webpack_require__(14)(`./${view.name}`);
      }
    }]
  });

  await __webpack_require__.e/* import() */(2).then(__webpack_require__.bind(null, 24));

  document.addEventListener('started', () => {
    setTimeout(() => {
      document.body.removeAttribute('unresolved');
    }, 100);
  });
})();

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, ".trans-slide__in-left {\n  -webkit-transform: translateX(100%);\n  transform: translateX(100%);\n  display: block !important; }\n\n.trans-slide__in-right {\n  -webkit-transform: translateX(-100%);\n  transform: translateX(-100%);\n  display: block !important; }\n\n.trans-slide__out-left,\n.trans-slide__out-right {\n  -webkit-transform: translateX(0);\n  transform: translateX(0);\n  display: block !important; }\n\n.trans-slide__animate {\n  will-change: transform, -webkit-transform;\n  -webkit-transition: -webkit-transform ease-out 200ms;\n  transition: transform ease-out 200ms;\n  z-index: 999; }\n\n.trans-slide__out {\n  -webkit-transform: translateX(100%);\n  transform: translateX(100%); }\n\n.trans-slide__out.trans-slide__out-left {\n  -webkit-transform: translateX(-100%);\n  transform: translateX(-100%); }\n\n.trans-slide__in {\n  -webkit-transform: translateX(0);\n  transform: translateX(0); }\n\n.trans-fade__in,\n.trans-fade__out {\n  display: block !important;\n  opacity: 0;\n  will-change: opacity;\n  -webkit-transition: opacity ease-in 200ms;\n  transition: opacity ease-in 200ms; }\n\n.trans-fade__out {\n  opacity: 1; }\n\n.trans-fade__in-animate {\n  opacity: 1; }\n\n.trans-fade__out-animate {\n  opacity: 0; }\n", ""]);

// exports


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "@font-face {\n  font-family: 'Material Icons';\n  font-style: normal;\n  font-weight: 400;\n  src: url(" + __webpack_require__(35) + ");\n  /* For IE6-8 */\n  src: local(\"Material Icons\"), local(\"MaterialIcons-Regular\"), url(" + __webpack_require__(38) + ") format(\"woff2\"), url(" + __webpack_require__(37) + ") format(\"woff\"), url(" + __webpack_require__(36) + ") format(\"truetype\"); }\n\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;\n  /* Preferred icon size */\n  display: inline-block;\n  line-height: 1;\n  text-transform: none;\n  letter-spacing: normal;\n  word-wrap: normal;\n  white-space: nowrap;\n  direction: ltr;\n  /* Support for all WebKit browsers. */\n  -webkit-font-smoothing: antialiased;\n  /* Support for Safari and Chrome. */\n  text-rendering: optimizeLegibility;\n  /* Support for Firefox. */\n  -moz-osx-font-smoothing: grayscale;\n  /* Support for IE. */\n  font-feature-settings: 'liga'; }\n", ""]);

// exports


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, ".ui-button {\n  background: 0 0;\n  border: none;\n  border-radius: 2px;\n  color: #000;\n  position: relative;\n  height: 36px;\n  margin: 0;\n  min-width: 64px;\n  padding: 0 16px;\n  display: inline-block;\n  font-family: \"Roboto\",\"Helvetica\",\"Arial\",sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0;\n  overflow: hidden;\n  will-change: box-shadow;\n  transition: box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  outline: none;\n  cursor: pointer;\n  text-decoration: none;\n  text-align: center;\n  line-height: 36px;\n  vertical-align: middle; }\n\n.ui-button * {\n  vertical-align: middle; }\n\n.ui-button--colored {\n  background: #3f51b5;\n  color: #fff; }\n\n.ui-button--raised {\n  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px; }\n\n.ui-button--block {\n  width: 100%; }\n\n.ui-button--icon {\n  border-radius: 50%;\n  font-size: 24px;\n  height: 32px;\n  margin-left: 0;\n  margin-right: 0;\n  min-width: 32px;\n  width: 32px;\n  padding: 0;\n  overflow: hidden;\n  line-height: normal; }\n\n.ui-button--icon .material-icons {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-12px, -12px);\n  line-height: 24px;\n  width: 24px; }\n\n.ui-header .ui-button {\n  height: 100%;\n  color: #fff;\n  flex-shrink: 0; }\n\n.ui-header .ui-button--icon {\n  width: 56px; }\n", ""]);

// exports


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, ".ui-header {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  box-sizing: border-box;\n  flex-shrink: 0;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  border: none;\n  min-height: 56px;\n  max-height: 1000px;\n  z-index: 3;\n  background-color: #3f51b5;\n  /*color: #2c3e50;*/\n  color: #fff;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  transition-duration: .2s;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-property: max-height,box-shadow; }\n\n.ui-header__row {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: row;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -webkit-flex-wrap: nowrap;\n  -ms-flex-wrap: nowrap;\n  flex-wrap: nowrap;\n  -webkit-flex-shrink: 0;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  box-sizing: border-box;\n  -webkit-align-self: stretch;\n  -ms-flex-item-align: stretch;\n  align-self: stretch;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  height: 56px;\n  margin: 0;\n  /*padding: 0 40px 0 80px;*/ }\n\n.ui-header__title {\n  display: block;\n  font-size: 20px;\n  line-height: 1;\n  letter-spacing: .02em;\n  font-weight: 400;\n  box-sizing: border-box;\n  width: 100%;\n  padding: 0 20px; }\n", ""]);

// exports


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "html.ui-fit {\n  height: 100%;\n  padding: 0;\n  margin: 0; }\n  html.ui-fit body {\n    height: 100%;\n    padding: 0;\n    margin: 0; }\n\n.ui-layout {\n  height: 100%;\n  weight: 100%;\n  display: -webkit-box;\n  display: box;\n  display: -webkit-flex;\n  display: flex; }\n  .ui-layout.ui-layout--v {\n    -webkit-box-orient: vertical;\n    box-orient: vertical;\n    -webkit-flex-direction: column;\n    flex-direction: column; }\n  .ui-layout.ui-layout--h {\n    -webkit-box-orient: horizontal;\n    box-orient: horizontal;\n    -webkit-flex-direction: row;\n    flex-direction: row; }\n  .ui-layout.ui-layout--wrap {\n    flex-wrap: wrap; }\n  .ui-layout .ui-flex {\n    -webkit-box-flex: 1;\n    box-flex: 1;\n    -webkit-flex: 1;\n    flex: 1; }\n\n.ui-spacer {\n  flex-grow: 1; }\n\n.ui-padding {\n  padding: 16px; }\n\n.ui-vpadding {\n  padding: 16px 0; }\n\n.ui-hpadding {\n  padding: 0 16px; }\n\n.ui-scroll {\n  overflow: auto; }\n\n.ui-panel {\n  padding: 16px;\n  margin-bottom: 20px;\n  border-radius: 0;\n  background-color: #FFF;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 2px 0 rgba(0, 0, 0, 0.12); }\n  .ui-panel legend {\n    padding: 0 4px;\n    background-color: #3f51b5;\n    color: #fff; }\n\n@media screen and (min-width: 1000px) {\n  .ui-main {\n    padding-left: 240px; } }\n", ""]);

// exports


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, ".ui-list {\n  display: block;\n  padding: 8px 0;\n  list-style: none;\n  -webkit-margin-before: 0;\n  -webkit-margin-after: 0;\n  -webkit-margin-start: 0;\n  -webkit-margin-end: 0;\n  -webkit-padding-start: 0; }\n  .ui-list .ui-list__header,\n  .ui-list .ui-list__item {\n    font-size: 16px;\n    font-weight: 400;\n    letter-spacing: .04em;\n    line-height: 1;\n    min-height: 48px;\n    -webkit-flex-direction: row;\n    -ms-flex-direction: row;\n    flex-direction: row;\n    -webkit-flex-wrap: nowrap;\n    -ms-flex-wrap: nowrap;\n    flex-wrap: nowrap;\n    padding: 16px;\n    cursor: default;\n    color: rgba(0, 0, 0, 0.87);\n    overflow: hidden;\n    box-sizing: border-box;\n    display: block;\n    text-decoration: none; }\n  .ui-list .ui-list__header {\n    padding: 24px 16px 8px;\n    font-size: 13px; }\n  .ui-list .ui-list__separator {\n    box-sizing: border-box;\n    display: block;\n    min-height: 16px;\n    background-color: rgba(0, 0, 0, 0.14); }\n", ""]);

// exports


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\nhtml, body {\n  font-family: \"Helvetica\", \"Arial\", sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 20px; }\n\nh1, h2, h3, h4, h5, h6, p {\n  margin: 0;\n  padding: 0; }\n\n/**\n  * Styles for HTML elements\n  */\nh1 small, h2 small, h3 small, h4 small, h5 small, h6 small {\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-size: 56px;\n  font-weight: 400;\n  line-height: 1.35;\n  letter-spacing: -0.02em;\n  opacity: 0.54;\n  font-size: 0.6em; }\n\nh1 {\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-size: 56px;\n  font-weight: 400;\n  line-height: 1.35;\n  letter-spacing: -0.02em;\n  margin-top: 24px;\n  margin-bottom: 24px; }\n\nh2 {\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-size: 45px;\n  font-weight: 400;\n  line-height: 48px;\n  margin-top: 24px;\n  margin-bottom: 24px; }\n\nh3 {\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-size: 34px;\n  font-weight: 400;\n  line-height: 40px;\n  margin-top: 24px;\n  margin-bottom: 24px; }\n\nh4 {\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-size: 24px;\n  font-weight: 400;\n  line-height: 32px;\n  -moz-osx-font-smoothing: grayscale;\n  margin-top: 24px;\n  margin-bottom: 16px; }\n\nh5 {\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-size: 20px;\n  font-weight: 500;\n  line-height: 1;\n  letter-spacing: 0.02em;\n  margin-top: 24px;\n  margin-bottom: 16px; }\n\nh6 {\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 24px;\n  letter-spacing: 0.04em;\n  margin-top: 24px;\n  margin-bottom: 16px; }\n\np {\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 24px;\n  letter-spacing: 0;\n  margin-bottom: 16px; }\n\na {\n  color: #ff4081;\n  font-weight: 500; }\n\nblockquote {\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  position: relative;\n  font-size: 24px;\n  font-weight: 300;\n  font-style: italic;\n  line-height: 1.35;\n  letter-spacing: 0.08em; }\n\nblockquote:before {\n  position: absolute;\n  left: -0.5em;\n  content: '\\201C'; }\n\nblockquote:after {\n  content: '\\201D';\n  margin-left: -0.05em; }\n\nmark {\n  background-color: #f4ff81; }\n\ndt {\n  font-weight: 700; }\n\naddress {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1;\n  letter-spacing: 0;\n  font-style: normal; }\n\nul, ol {\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 24px;\n  letter-spacing: 0; }\n", ""]);

// exports


/***/ }),
/* 33 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(26);
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
		module.hot.accept("!!../../../../css-loader/index.js!../../../../sass-loader/lib/loader.js!./fx.css", function() {
			var newContent = require("!!../../../../css-loader/index.js!../../../../sass-loader/lib/loader.js!./fx.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./fonts/MaterialIcons-Regular.eot";

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./fonts/MaterialIcons-Regular.ttf";

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./fonts/MaterialIcons-Regular.woff";

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./fonts/MaterialIcons-Regular.woff2";

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map