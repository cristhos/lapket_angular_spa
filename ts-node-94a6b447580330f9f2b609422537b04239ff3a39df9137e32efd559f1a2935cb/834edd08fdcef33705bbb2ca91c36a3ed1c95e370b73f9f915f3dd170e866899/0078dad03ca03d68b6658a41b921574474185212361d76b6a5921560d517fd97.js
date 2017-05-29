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
var moment = require("moment");
var ProductListComponent = (function () {
    function ProductListComponent(productService) {
        this.productService = productService;
        this.products = [];
        this.modalActions = new core_1.EventEmitter();
        this.globalActions = new core_1.EventEmitter();
        this.params = [];
    }
    ProductListComponent.prototype.ngOnInit = function () {
        moment.locale('fr-fr');
        this.page = 1;
        this.pages = 2;
        this.product_loading = true;
        this.getFilProducts();
    };
    ProductListComponent.prototype.getFilProducts = function () {
        var _this = this;
        if (localStorage.getItem("authent") == "O") {
            if (this.page <= this.pages) {
                this.productService.getProductFil(this.page).subscribe(function (data) {
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
        }
        else {
            //rediriger sur la page de connexion et expliquer ce qui se passe
        }
    };
    ProductListComponent.prototype.onScrollDown = function () {
        this.getFilProducts();
    };
    ProductListComponent.prototype.closeModel = function () {
        this.modalActions.emit("closeModal");
    };
    return ProductListComponent;
}());
ProductListComponent = __decorate([
    core_1.Component({
        selector: 'all-product',
        templateUrl: './product-list.component.html',
        styles: ["\n    \n"]
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductListComponent);
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=/home/lithos/Data/Lab/codash/angularSpa/ts-node-94a6b447580330f9f2b609422537b04239ff3a39df9137e32efd559f1a2935cb/834edd08fdcef33705bbb2ca91c36a3ed1c95e370b73f9f915f3dd170e866899/0078dad03ca03d68b6658a41b921574474185212361d76b6a5921560d517fd97.js.map