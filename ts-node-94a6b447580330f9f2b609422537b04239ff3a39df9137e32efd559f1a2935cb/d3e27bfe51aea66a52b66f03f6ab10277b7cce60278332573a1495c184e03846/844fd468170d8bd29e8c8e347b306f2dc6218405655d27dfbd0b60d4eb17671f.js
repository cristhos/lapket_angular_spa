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
var CategoryFollowComponent = (function () {
    function CategoryFollowComponent(categoryService) {
        this.categoryService = categoryService;
        this.getCategories();
    }
    CategoryFollowComponent.prototype.getCategories = function () {
        var _this = this;
        this.categories_loading = true;
        this.categoryService.getCategoryFollow().subscribe(function (data) {
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
    return CategoryFollowComponent;
}());
CategoryFollowComponent = __decorate([
    core_1.Component({
        selector: 'follow-category',
        templateUrl: './category-follow.component.html',
        styles: ["\n  .card-panel {\n      padding: 5px;\n}\n  "],
    }),
    __metadata("design:paramtypes", [category_service_1.CategoryService])
], CategoryFollowComponent);
exports.CategoryFollowComponent = CategoryFollowComponent;
//# sourceMappingURL=/home/lithos/Data/Lab/codash/angularSpa/ts-node-94a6b447580330f9f2b609422537b04239ff3a39df9137e32efd559f1a2935cb/d3e27bfe51aea66a52b66f03f6ab10277b7cce60278332573a1495c184e03846/844fd468170d8bd29e8c8e347b306f2dc6218405655d27dfbd0b60d4eb17671f.js.map