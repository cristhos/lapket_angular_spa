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
var user_service_1 = require("../service/user.service");
var product_service_1 = require("../../product/service/product.service");
var UserProductComponent = (function () {
    function UserProductComponent(userService, productService, route) {
        this.userService = userService;
        this.productService = productService;
        this.route = route;
        this.products = [];
    }
    UserProductComponent.prototype.ngOnInit = function () {
        this.page = 1;
        this.pages = 2;
        this.load = true;
        this.getUserDetail();
    };
    UserProductComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    UserProductComponent.prototype.getUserDetail = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var username = params['username'];
            _this.load = true;
            _this.userService.getUser(username).subscribe(function (data) {
                _this.user_detail = data;
                _this.getProductAuthor(_this.user_detail.username);
            }, function (error) { return console.log(error); }, function () { return console.log("finish"); });
            _this.load = false;
        });
    };
    UserProductComponent.prototype.getProductAuthor = function (username) {
        var _this = this;
        if (this.page <= this.pages) {
            this.products_loading = true;
            this.productService.getProductAuthor(username, this.page).subscribe(function (data) {
                _this.pages = data.pages;
                for (var i = 0; i <= data.limit; i++) {
                    if (data._embedded.items[i]) {
                        _this.products.push(data._embedded.items[i]);
                        _this.page = _this.page + 1;
                    }
                }
                _this.products_loading = false;
            }, function (error) {
                console.log(error);
                _this.products_loading = false;
            }, function () {
                console.log("finish");
                _this.products_loading = false;
            });
        }
    };
    UserProductComponent.prototype.onScrollDown = function () {
        var _this = this;
        setTimeout(function () {
            _this.sub = _this.route.params.subscribe(function (params) {
                var username = params['username'];
                _this.getProductAuthor(username);
            });
            console.log(_this.products);
        }, 3000);
    };
    return UserProductComponent;
}());
UserProductComponent = __decorate([
    core_1.Component({
        selector: 'user-product',
        templateUrl: './user-product.component.html',
        styles: ["\n\n  "]
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        product_service_1.ProductService,
        router_1.ActivatedRoute])
], UserProductComponent);
exports.UserProductComponent = UserProductComponent;
//# sourceMappingURL=/home/lithos/Data/Lab/codash/angularSpa/ts-node-94a6b447580330f9f2b609422537b04239ff3a39df9137e32efd559f1a2935cb/d3e27bfe51aea66a52b66f03f6ab10277b7cce60278332573a1495c184e03846/5b2e3de31f0db64ca3fe6b924b8063fa694ebe533d591b9b0ed7518a220cde49.js.map