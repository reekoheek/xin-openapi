webpackJsonp([4],{

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "my-home .block {\n  border: 1px solid #ccc;\n  margin-bottom: 20px; }\n  my-home .block h3 {\n    background-color: #3f51b5;\n    color: #fff;\n    padding: 5px 10px;\n    margin: 0;\n    font-size: 14px;\n    line-height: inherit; }\n  my-home .block .block_row {\n    margin: 5px 10px; }\n    my-home .block .block_row label {\n      display: block;\n      width: 200px;\n      font-size: 12px;\n      color: #999; }\n", ""]);

// exports


/***/ }),

/***/ 42:
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

/***/ })

});
//# sourceMappingURL=4.js.map