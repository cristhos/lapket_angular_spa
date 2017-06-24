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
var router_1 = require("@angular/router");
var product_service_1 = require("../../product/service/product.service");
//import { MetadataService } from 'ng2-metadata';
var ProductDetailComponent = (function () {
    function ProductDetailComponent(productService, route) {
        this.productService = productService;
        this.route = route;
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        this.getProductDetail();
    };
    ProductDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ProductDetailComponent.prototype.getProductDetail = function () {
        var _this = this;
        this.product_loading = true;
        this.sub = this.route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.productService.getProductDetail(id).subscribe(function (data) {
                _this.product_loading = false;
                _this.product = data;
                /*this.metadataService.setTitle(this.product.description);
                this.metadataService.setTag('og:title', this.product.description);
                this.metadataService.setTag('og:image', this.product.picture.web_path);
                */
            }, function (error) {
                _this.product_loading = false;
                console.log(error);
            }, function () {
                _this.product_loading = false;
                console.log("finish");
            });
        });
    };
    return ProductDetailComponent;
}());
ProductDetailComponent = __decorate([
    core_1.Component({
        selector: 'product-detail',
        templateUrl: './product-detail.component.html',
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService,
        router_1.ActivatedRoute])
], ProductDetailComponent);
exports.ProductDetailComponent = ProductDetailComponent;
//# sourceMappingURL=/home/lithos/Data/Lab/codash/angularSpa/ts-node-94a6b447580330f9f2b609422537b04239ff3a39df9137e32efd559f1a2935cb/e9d97bad37419b7e16f68eb02b11d2aed62f50c86952f941b75664f4cc5053bb/bfb32fbb2c84adb2c3f3b82a7866a2be7ec4654b23ba64e6f1d586e8e71d8c9d.js.map