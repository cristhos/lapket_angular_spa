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
var ng2_metadata_1 = require("ng2-metadata");
var ProductDetailComponent = (function () {
    function ProductDetailComponent(productService, route, metadataService) {
        this.productService = productService;
        this.route = route;
        this.metadataService = metadataService;
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
                _this.metadataService.setTitle(_this.product.description);
                _this.metadataService.setTag('og:title', _this.product.description);
                _this.metadataService.setTag('og:image', _this.product.picture.web_path);
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
        router_1.ActivatedRoute,
        ng2_metadata_1.MetadataService])
], ProductDetailComponent);
exports.ProductDetailComponent = ProductDetailComponent;
//# sourceMappingURL=/home/lithos/Data/Lab/codash/angularSpa/ts-node-94a6b447580330f9f2b609422537b04239ff3a39df9137e32efd559f1a2935cb/d3e27bfe51aea66a52b66f03f6ab10277b7cce60278332573a1495c184e03846/fc6004d0aa0d5e72d3441862baddcd30f70f74fa4abdb122c4aaefd225f17d08.js.map