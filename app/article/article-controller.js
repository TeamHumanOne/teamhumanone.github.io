"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
//import { AppController } from "../../../common/AppController";
var AppController = /** @class */ (function () {
    function AppController() {
    }
    return AppController;
}());
var ArticleController = /** @class */ (function (_super) {
    __extends(ArticleController, _super);
    /*
    static $inject = [
        '$scope',
        '$state',
        'spinnerService'
    ];
    */
    function ArticleController($scope, $state) {
        var _this = _super.call(this) || this;
        _this.$scope = $scope;
        _this.$state = $state;
        return _this;
    }
    return ArticleController;
}(AppController
//implements app.components.dialog.IPromptableDialogController 
));
exports.ArticleController = ArticleController;
//# sourceMappingURL=article-controller.js.map