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
var product_service_1 = require("../../product/service/product.service");
var SearchListComponent = (function () {
    function SearchListComponent(productService) {
        this.productService = productService;
    }
    return SearchListComponent;
}());
SearchListComponent = __decorate([
    core_1.Component({
        selector: 'list-search',
        templateUrl: './search-list.component.html',
        styles: ["\n  "],
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], SearchListComponent);
exports.SearchListComponent = SearchListComponent;
//# sourceMappingURL=/home/lithos/Data/Lab/codash/angularSpa/ts-node-94a6b447580330f9f2b609422537b04239ff3a39df9137e32efd559f1a2935cb/834edd08fdcef33705bbb2ca91c36a3ed1c95e370b73f9f915f3dd170e866899/b68500f536084e15073d5ae02ee2cab26afbc704ceeedff48e05669b24b4544c.js.map