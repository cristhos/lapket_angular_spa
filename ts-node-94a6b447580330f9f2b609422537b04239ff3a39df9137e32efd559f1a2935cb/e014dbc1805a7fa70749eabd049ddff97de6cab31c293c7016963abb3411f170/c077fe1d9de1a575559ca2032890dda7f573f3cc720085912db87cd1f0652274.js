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
var category_service_1 = require("../service/category.service");
var router_1 = require("@angular/router");
var CategoryCommonComponent = (function () {
    function CategoryCommonComponent(categoryService, router) {
        this.categoryService = categoryService;
        this.router = router;
    }
    CategoryCommonComponent.prototype.postCategoryFollow = function (category_id) {
        var _this = this;
        if (this.buttonGuard() == true) {
            this.category.is_follow = true;
            this.categoryService.postCategoryFollow(category_id).subscribe(function (data) {
                //illusion optiques
            }, function (error) {
                console.log(error);
                _this.category.is_follow = false;
            }, function () { return console.log("finish"); });
        }
        else {
            this.buttonGuardRedirect();
        }
    };
    CategoryCommonComponent.prototype.removeCategoryFollow = function (category_id) {
        var _this = this;
        if (this.buttonGuard() == true) {
            this.category.is_follow = false;
            this.categoryService.deleteCategoryFollow(category_id).subscribe(function (data) {
                //illusion optique
            }, function (error) {
                console.log(error);
                _this.category.is_follow = true;
            }, function () { return console.log("finish"); });
        }
        else {
            this.buttonGuardRedirect();
        }
    };
    CategoryCommonComponent.prototype.buttonGuard = function () {
        if (localStorage.getItem("access_token")) {
            return true;
        }
        else {
            return false;
        }
    };
    CategoryCommonComponent.prototype.buttonGuardRedirect = function () {
        if (window.confirm('Voulez-vous vous connecter pour effectuer cette action ?')) {
            this.router.navigateByUrl('/login');
        }
    };
    return CategoryCommonComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], CategoryCommonComponent.prototype, "category", void 0);
CategoryCommonComponent = __decorate([
    core_1.Component({
        selector: 'category-common',
        templateUrl: './category-common.component.html',
        styleUrls: ['./category-common.component.css']
    }),
    __metadata("design:paramtypes", [category_service_1.CategoryService,
        router_1.Router])
], CategoryCommonComponent);
exports.CategoryCommonComponent = CategoryCommonComponent;
//# sourceMappingURL=/home/lithos/Data/Lab/codash/angularSpa/ts-node-94a6b447580330f9f2b609422537b04239ff3a39df9137e32efd559f1a2935cb/e014dbc1805a7fa70749eabd049ddff97de6cab31c293c7016963abb3411f170/c077fe1d9de1a575559ca2032890dda7f573f3cc720085912db87cd1f0652274.js.map