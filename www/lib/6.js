webpackJsonp([6],{

/***/ 41:
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-layout ui-layout--v\">\n  <header class=\"ui-header\">\n    <div class=\"ui-header__row\">\n      <button class=\"ui-button ui-button--icon ui-drawer--handle\" (click)=\"__global.drawer.open()\">\n        <i class=\"material-icons\">menu</i>\n      </button>\n      <span class=\"ui-header__title\">\n        <sup class$=\"[[computeMethodClasses(route.method)]]\">[[route.method]]</sup>\n        <span class=\"title--uri\">[[route.uri]]</span>\n      </span>\n    </div>\n  </header>\n\n  <div class=\"ui-padding scroll-x route\">\n    <h3>\n      <span>[[route.summary]]</span>\n      <sup class=\"route__operation-id\" hidden=\"[[route.operationId|not]]\">[[route.operationId]]</sup>\n    </h3>\n\n    <p html=\"[[route.renderedDescription]]\"></p>\n\n    <route-parameters id=\"inputParameters\" class=\"block\" route=\"[[route]]\"></route-parameters>\n    <route-body id=\"inputBody\" class=\"block\" route=\"[[route]]\"></route-body>\n\n    <route-responses id=\"inputResponses\" class=\"block\" route=\"[[route]]\"></route-responses>\n\n    <button class=\"ui-button ui-button--colored\" (click)=\"try()\">Try it out</button>\n\n    <route-requestor id=\"requestor\" route=\"[[route]]\"></route-requestor>\n  </div>\n</div>\n";

/***/ })

});
//# sourceMappingURL=6.js.map