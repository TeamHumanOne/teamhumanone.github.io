"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var angular = require("angular");
var article_controller_1 = require("./article-controller");
var moduleName = 'article.viewer';
exports.articleViewModuleName = moduleName;
angular.module(moduleName, [
    'supplementals',
    'supplementals.dialog',
    'dataaccess',
])
    .controller('articleController', article_controller_1.ArticleController);
//# sourceMappingURL=article.component.js.map