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
var UserProductVoteComponent = (function () {
    function UserProductVoteComponent(userService, productService, route) {
        this.userService = userService;
        this.productService = productService;
        this.route = route;
        this.products = [];
    }
    UserProductVoteComponent.prototype.ngOnInit = function () {
        this.page = 1;
        this.pages = 2;
        this.getUserDetail();
    };
    UserProductVoteComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    UserProductVoteComponent.prototype.getUserDetail = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var username = params['username'];
            _this.userService.getUser(username).subscribe(function (data) { return _this.user_detail = data; }, function (error) { return console.log(error); }, function () { return console.log("finish"); });
            _this.getProductVoteAuteur(username);
        });
    };
    UserProductVoteComponent.prototype.getProductVoteAuteur = function (username) {
        var _this = this;
        if (this.page <= this.pages) {
            this.products_loading = true;
            this.productService.getProductVoteBy(username).subscribe(function (data) {
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
    UserProductVoteComponent.prototype.onScrollDown = function () {
        var _this = this;
        setTimeout(function () {
            _this.sub = _this.route.params.subscribe(function (params) {
                var username = params['username'];
                _this.getProductVoteAuteur(username);
            });
            console.log(_this.products);
        }, 3000);
    };
    return UserProductVoteComponent;
}());
UserProductVoteComponent = __decorate([
    core_1.Component({
        selector: 'user-product-vote',
        templateUrl: './user-product.component.html',
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        product_service_1.ProductService,
        router_1.ActivatedRoute])
], UserProductVoteComponent);
exports.UserProductVoteComponent = UserProductVoteComponent;
//# sourceMappingURL=/home/lithos/Data/Lab/codash/angularSpa/ts-node-94a6b447580330f9f2b609422537b04239ff3a39df9137e32efd559f1a2935cb/e9d97bad37419b7e16f68eb02b11d2aed62f50c86952f941b75664f4cc5053bb/d10d214ade5bde1dbe13fe7b94c8ef3771d66eca4928473f43e56c51b3819ccb.js.map