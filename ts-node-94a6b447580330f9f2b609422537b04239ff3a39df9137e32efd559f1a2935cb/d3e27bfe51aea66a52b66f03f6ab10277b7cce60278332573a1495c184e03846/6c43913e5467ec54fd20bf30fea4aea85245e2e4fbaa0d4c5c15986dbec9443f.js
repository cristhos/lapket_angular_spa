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
var search_form_1 = require("./search.form");
var product_service_1 = require("../../product/service/product.service");
var SearchFormComponent = (function () {
    function SearchFormComponent(productService, router) {
        this.productService = productService;
        this.router = router;
        this.loading = false;
        this.model = new search_form_1.SearchFormModel('');
    }
    //when user submit form is redirect to de searchpage
    SearchFormComponent.prototype.onSubmit = function () {
        this.router.navigate(['/search/' + this.model.term]);
    };
    SearchFormComponent.prototype.search = function (term) {
        /*
        let page=1;
        this.loading = true;
         this.productService.search(this.model.term,page).subscribe(
          data =>{
            this.resultats = data._embedded.items;
          },
          error =>{
             this.loading = false;
             console.log(error);
          },
          () =>{
            this.loading = false;
            console.log("finish");
          }
      );
      */
    };
    Object.defineProperty(SearchFormComponent.prototype, "diagnostic", {
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    return SearchFormComponent;
}());
SearchFormComponent = __decorate([
    core_1.Component({
        selector: 'search-form',
        templateUrl: './search.form.component.html',
        styleUrls: ['./search.form.component.css']
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService, router_1.Router])
], SearchFormComponent);
exports.SearchFormComponent = SearchFormComponent;
//# sourceMappingURL=/home/lithos/Data/Lab/codash/angularSpa/ts-node-94a6b447580330f9f2b609422537b04239ff3a39df9137e32efd559f1a2935cb/d3e27bfe51aea66a52b66f03f6ab10277b7cce60278332573a1495c184e03846/6c43913e5467ec54fd20bf30fea4aea85245e2e4fbaa0d4c5c15986dbec9443f.js.map