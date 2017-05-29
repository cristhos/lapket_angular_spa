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
require("rxjs/add/operator/switchMap");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var category_service_1 = require("../service/category.service");
var product_component_1 = require("../../product/product.component");
var CategoryDetailComponent = (function () {
    function CategoryDetailComponent(categoryService, route, productService) {
        this.categoryService = categoryService;
        this.route = route;
        this.productService = productService;
        this.products = [];
    }
    CategoryDetailComponent.prototype.ngOnInit = function () {
        this.getCategoryDetail();
    };
    CategoryDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    CategoryDetailComponent.prototype.getCategoryDetail = function () {
        var _this = this;
        this.category_loading = true;
        this.sub = this.route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.categoryService.getCategoryDetail(id).subscribe(function (data) {
                _this.category_loading = false;
                _this.category = data;
                _this.getProductsCategory(_this.category.id);
            }, function (error) {
                _this.category_loading = false;
                console.log(error);
            }, function () {
                _this.category_loading = false;
                console.log("finish");
            });
        });
    };
    CategoryDetailComponent.prototype.getProductsCategory = function (category_id) {
        var _this = this;
        this.products_loading = true;
        this.productService.getProductsCategory(category_id).subscribe(function (data) {
            _this.products_loading = false;
            _this.products = data._embedded.items;
        }, function (error) {
            _this.products_loading = false;
            console.log(error);
        }, function () {
            _this.products_loading = false;
            console.log("finish");
        });
    };
    return CategoryDetailComponent;
}());
CategoryDetailComponent = __decorate([
    core_1.Component({
        selector: 'category-detail',
        templateUrl: './category-detail.component.html',
        styleUrls: ['./category-detail.component.css'],
    }),
    __metadata("design:paramtypes", [category_service_1.CategoryService,
        router_1.ActivatedRoute,
        product_component_1.ProductService])
], CategoryDetailComponent);
exports.CategoryDetailComponent = CategoryDetailComponent;
//# sourceMappingURL=/home/lithos/Data/Lab/codash/angularSpa/ts-node-94a6b447580330f9f2b609422537b04239ff3a39df9137e32efd559f1a2935cb/834edd08fdcef33705bbb2ca91c36a3ed1c95e370b73f9f915f3dd170e866899/a90bea29b7a4523118b5cd7955a379d6bd87263cf135f738adfe12c82164becd.js.map