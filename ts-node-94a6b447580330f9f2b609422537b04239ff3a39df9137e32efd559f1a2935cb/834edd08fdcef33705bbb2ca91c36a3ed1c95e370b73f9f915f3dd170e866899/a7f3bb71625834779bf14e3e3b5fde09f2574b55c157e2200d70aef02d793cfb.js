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
var CategoryListComponent = (function () {
    function CategoryListComponent(categoryService) {
        this.categoryService = categoryService;
        this.getCategories();
    }
    CategoryListComponent.prototype.getCategories = function () {
        var _this = this;
        this.categories_loading = true;
        var limit = 16;
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
    return CategoryListComponent;
}());
CategoryListComponent = __decorate([
    core_1.Component({
        selector: 'all-category',
        templateUrl: './category-list.component.html',
        styles: ["\n  .card-panel {\n      padding: 5px;\n}\n  "],
    }),
    __metadata("design:paramtypes", [category_service_1.CategoryService])
], CategoryListComponent);
exports.CategoryListComponent = CategoryListComponent;
//# sourceMappingURL=/home/lithos/Data/Lab/codash/angularSpa/ts-node-94a6b447580330f9f2b609422537b04239ff3a39df9137e32efd559f1a2935cb/834edd08fdcef33705bbb2ca91c36a3ed1c95e370b73f9f915f3dd170e866899/a7f3bb71625834779bf14e3e3b5fde09f2574b55c157e2200d70aef02d793cfb.js.map