"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var category_service_1 = require("../service/category.service");
var CategoryLastComponent = (function () {
    function CategoryLastComponent(categoryService) {
        this.categoryService = categoryService;
        this.getCategories();
    }
    CategoryLastComponent.prototype.getCategories = function () {
        var _this = this;
        this.categories_loading = true;
        var limit = 4;
        this.categoryService.getCategory(limit).subscribe(function (data) {
            _this.categories = data._embedded.items;
            _this.categories_loading = false;
        }, function (error) {
            console.log(error);
            _this.categories_loading = false;
        }, function () {
            console.log("finish");
            _this.categories_loading = false;
        });
    };
    return CategoryLastComponent;
}());
CategoryLastComponent = __decorate([
    core_1.Component({
        selector: 'last-category',
        templateUrl: './category-last.component.html',
        styles: ["\n  .card-panel {\n      padding: 5px;\n  }\n  "],
    }),
    __metadata("design:paramtypes", [category_service_1.CategoryService])
], CategoryLastComponent);
exports.CategoryLastComponent = CategoryLastComponent;
//# sourceMappingURL=/home/lithos/Data/Lab/codash/angularSpa/ts-node-94a6b447580330f9f2b609422537b04239ff3a39df9137e32efd559f1a2935cb/e9d97bad37419b7e16f68eb02b11d2aed62f50c86952f941b75664f4cc5053bb/1968121552eef9eff7d53ce110fb10e62112e2b05169af0e717557c07b30d861.js.map