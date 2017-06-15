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
var CategorySuggestionComponent = (function () {
    function CategorySuggestionComponent(categoryService) {
        this.categoryService = categoryService;
        this.getCategories();
    }
    CategorySuggestionComponent.prototype.getCategories = function () {
        var _this = this;
        this.categories_loading = true;
        var limit = 21;
        this.categoryService.getCategory(limit).subscribe(function (data) {
            _this.categories = data;
            _this.categories_loading = false;
        }, function (error) {
            console.log(error);
            _this.categories_loading = false;
        }, function () {
            console.log("finish");
            _this.categories_loading = false;
        });
    };
    CategorySuggestionComponent.prototype.refreshPage = function () {
        window.location.reload();
    };
    return CategorySuggestionComponent;
}());
CategorySuggestionComponent = __decorate([
    core_1.Component({
        selector: 'category-suggestion',
        templateUrl: './category-suggestion.component.html',
        styles: ["\n  .card-panel {\n      padding: 5px;\n}\n  "],
    }),
    __metadata("design:paramtypes", [category_service_1.CategoryService])
], CategorySuggestionComponent);
exports.CategorySuggestionComponent = CategorySuggestionComponent;
//# sourceMappingURL=/home/lithos/Data/Lab/codash/angularSpa/ts-node-94a6b447580330f9f2b609422537b04239ff3a39df9137e32efd559f1a2935cb/d3e27bfe51aea66a52b66f03f6ab10277b7cce60278332573a1495c184e03846/80866c9edbcf05d1a311cb7757f72f76e57cfe77ded5a960fb45104136e38f62.js.map