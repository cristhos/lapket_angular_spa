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
var product_component_1 = require("../../product/product.component");
var SearchDetailComponent = (function () {
    function SearchDetailComponent(route, productService) {
        this.route = route;
        this.productService = productService;
        this.products = [];
    }
    SearchDetailComponent.prototype.ngOnInit = function () {
        this.page = 1;
        this.pages = 2;
        this.loading = true;
        this.getSearchDetail();
    };
    SearchDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    SearchDetailComponent.prototype.getSearchDetail = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.term = params['term'];
            var page = 1;
            _this.loading = true;
            if (_this.page <= _this.pages) {
                _this.productService.search(_this.term, _this.page).subscribe(function (data) {
                    _this.pages = data.pages;
                    for (var i = 0; i <= data.limit; i++) {
                        if (data._embedded.items[i]) {
                            _this.products.push(data._embedded.items[i]);
                            _this.page = data.page + 1;
                        }
                    }
                }, function (error) { return console.log(error); }, function () { return console.log("finish"); });
            }
        });
    };
    SearchDetailComponent.prototype.onScrollDown = function () {
        this.getSearchDetail();
    };
    return SearchDetailComponent;
}());
SearchDetailComponent = __decorate([
    core_1.Component({
        selector: 'search-detail',
        templateUrl: './search-detail.component.html',
        styles: ["\n    \n  "],
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, product_component_1.ProductService])
], SearchDetailComponent);
exports.SearchDetailComponent = SearchDetailComponent;
//# sourceMappingURL=/home/lithos/Data/Lab/codash/angularSpa/ts-node-94a6b447580330f9f2b609422537b04239ff3a39df9137e32efd559f1a2935cb/e9d97bad37419b7e16f68eb02b11d2aed62f50c86952f941b75664f4cc5053bb/9ed590f8b0514b7be19a76591aa007f765dd5baee881e4dacbdc88e21c13340d.js.map