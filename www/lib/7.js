webpackJsonp([7],{

/***/ 40:
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-layout ui-layout--v\">\n  <header class=\"ui-header\">\n    <div class=\"ui-header__row\">\n      <button class=\"ui-button ui-button--icon ui-drawer--handle\" (click)=\"__global.drawer.open()\">\n        <i class=\"material-icons\">menu</i>\n      </button>\n      <span class=\"ui-header__title\">[[spec.info.title]]</span>\n    </div>\n  </header>\n\n  <div class=\"ui-padding scroll-x\">\n    <div class=\"block\">\n      <div class=\"block_row\">\n        <label>OpenAPI Version</label>\n        <span>[[spec.openapi]]</span>\n      </div>\n    </div>\n\n    <div class=\"block\">\n      <h3>Info</h3>\n\n      <div class=\"block_row\">\n        <label>License</label>\n        <span>[[spec.info.license.name]]</span>\n      </div>\n\n      <div class=\"block_row\">\n        <label>Title</label>\n        <span>[[spec.info.title]]</span>\n      </div>\n\n      <div class=\"block_row\">\n        <label>Version</label>\n        <span>[[spec.info.version]]</span>\n      </div>\n    </div>\n\n    <ui-selectfield label=\"Selected Server\" options=\"[[serverOptions]]\" value=\"{{spec.selectedServer}}\" class.error=\"[[contentTypeError]]\"></ui-selectfield>\n  </div>\n</div>\n";

/***/ })

});
//# sourceMappingURL=7.js.map