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
var product_service_1 = require("../service/product.service");
var ProductLastComponent = (function () {
    function ProductLastComponent(productService) {
        this.productService = productService;
        this.products = [];
    }
    ProductLastComponent.prototype.ngOnInit = function () {
        this.page = 1;
        this.pages = 2;
        this.product_loading = true;
        this.getLastProducts();
    };
    ProductLastComponent.prototype.getLastProducts = function () {
        var _this = this;
        var limit = 6;
        if (this.page <= this.pages) {
            this.productService.getProductLast(this.page, limit).subscribe(function (data) {
                _this.pages = data.pages;
                for (var i = 0; i <= data.limit; i++) {
                    if (data._embedded.items[i]) {
                        _this.products.push(data._embedded.items[i]);
                        _this.page = data.page + 1;
                    }
                }
                _this.product_loading = false;
            }, function (error) {
                _this.product_loading = false;
                console.log(error);
            }, function () {
                _this.product_loading = false;
                console.log("finish");
            });
        }
    };
    return ProductLastComponent;
}());
ProductLastComponent = __decorate([
    core_1.Component({
        selector: 'last-product',
        templateUrl: './product-last.component.html',
        styles: ["\n    \n"]
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductLastComponent);
exports.ProductLastComponent = ProductLastComponent;
//# sourceMappingURL=/home/lithos/Data/Lab/codash/angularSpa/ts-node-94a6b447580330f9f2b609422537b04239ff3a39df9137e32efd559f1a2935cb/e014dbc1805a7fa70749eabd049ddff97de6cab31c293c7016963abb3411f170/d17b03c9a41d2ff0cb93bc8c1181988e09a5288676d08d839a5fcfd3def54500.js.map