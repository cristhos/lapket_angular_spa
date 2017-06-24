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
var CategoryItemComponent = (function () {
    function CategoryItemComponent(categoryService, router) {
        this.categoryService = categoryService;
        this.router = router;
    }
    CategoryItemComponent.prototype.postCategoryFollow = function (category_id) {
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
    CategoryItemComponent.prototype.removeCategoryFollow = function (category_id) {
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
    CategoryItemComponent.prototype.buttonGuard = function () {
        if (localStorage.getItem("access_token")) {
            return true;
        }
        else {
            return false;
        }
    };
    CategoryItemComponent.prototype.buttonGuardRedirect = function () {
        if (window.confirm('Voulez-vous vous connecter pour effectuer cette action ?')) {
            this.router.navigateByUrl('/login');
        }
    };
    return CategoryItemComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], CategoryItemComponent.prototype, "category", void 0);
CategoryItemComponent = __decorate([
    core_1.Component({
        selector: 'category-item',
        templateUrl: './category-item.component.html',
        styleUrls: ['./category-item.component.css']
    }),
    __metadata("design:paramtypes", [category_service_1.CategoryService,
        router_1.Router])
], CategoryItemComponent);
exports.CategoryItemComponent = CategoryItemComponent;
//# sourceMappingURL=/home/lithos/Data/Lab/codash/angularSpa/ts-node-94a6b447580330f9f2b609422537b04239ff3a39df9137e32efd559f1a2935cb/e9d97bad37419b7e16f68eb02b11d2aed62f50c86952f941b75664f4cc5053bb/fbe69a8c617f8330c959aa4163c39dab2c117145bf0bc7546c4aa45c55aab17d.js.map