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
var product_component_1 = require("../../product/product.component");
var CategoryDescoveryComponent = (function () {
    function CategoryDescoveryComponent(categoryService, productService) {
        this.categoryService = categoryService;
        this.productService = productService;
    }
    CategoryDescoveryComponent.prototype.ngOnInit = function () {
        this.getProductsCategory(this.category.id);
    };
    CategoryDescoveryComponent.prototype.getProductsCategory = function (category_id) {
        var _this = this;
        this.productService.getProductsCategory(category_id).subscribe(function (data) { return _this.products = data._embedded.items; }, function (error) { return console.log(error); }, function () { return console.log("finish"); });
    };
    return CategoryDescoveryComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], CategoryDescoveryComponent.prototype, "category", void 0);
CategoryDescoveryComponent = __decorate([
    core_1.Component({
        selector: 'category-descovery',
        templateUrl: './category-descovery.component.html',
        styles: ["\n\n  "],
    }),
    __metadata("design:paramtypes", [category_service_1.CategoryService,
        product_component_1.ProductService])
], CategoryDescoveryComponent);
exports.CategoryDescoveryComponent = CategoryDescoveryComponent;
//# sourceMappingURL=/home/lithos/Data/Lab/codash/angularSpa/ts-node-94a6b447580330f9f2b609422537b04239ff3a39df9137e32efd559f1a2935cb/e9d97bad37419b7e16f68eb02b11d2aed62f50c86952f941b75664f4cc5053bb/3e83805462c007b239de1f1678d69d1dc57cf212ab5327ef0a056d8bed846b49.js.map