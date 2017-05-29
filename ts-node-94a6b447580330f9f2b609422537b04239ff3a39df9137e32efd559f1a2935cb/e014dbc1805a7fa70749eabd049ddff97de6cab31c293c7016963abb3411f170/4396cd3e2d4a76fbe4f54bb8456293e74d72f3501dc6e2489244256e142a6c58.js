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
var CategoryMenuComponent = (function () {
    function CategoryMenuComponent(categoryService) {
        this.categoryService = categoryService;
        this.getCategories();
    }
    CategoryMenuComponent.prototype.getCategories = function () {
        var _this = this;
        this.categories_loading = true;
        this.categoryService.getCategory().subscribe(function (data) {
            _this.categories = data._embedded.items,
                _this.categories_loading = false;
        }, function (error) {
            console.log(error);
            _this.categories_loading = false;
        }, function () {
            console.log("finish");
            _this.categories_loading = false;
        });
    };
    return CategoryMenuComponent;
}());
CategoryMenuComponent = __decorate([
    core_1.Component({
        selector: 'menu-category',
        templateUrl: './category-menu.component.html',
        styles: ["\n  "],
    }),
    __metadata("design:paramtypes", [category_service_1.CategoryService])
], CategoryMenuComponent);
exports.CategoryMenuComponent = CategoryMenuComponent;
//# sourceMappingURL=/home/lithos/Data/Lab/codash/angularSpa/ts-node-94a6b447580330f9f2b609422537b04239ff3a39df9137e32efd559f1a2935cb/e014dbc1805a7fa70749eabd049ddff97de6cab31c293c7016963abb3411f170/4396cd3e2d4a76fbe4f54bb8456293e74d72f3501dc6e2489244256e142a6c58.js.map