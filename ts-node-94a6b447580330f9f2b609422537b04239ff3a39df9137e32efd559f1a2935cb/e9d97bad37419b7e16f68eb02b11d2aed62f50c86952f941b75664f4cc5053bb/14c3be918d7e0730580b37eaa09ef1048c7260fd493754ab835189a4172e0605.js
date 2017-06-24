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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var environment_1 = require("../../../environments/environment");
var CategoryService = (function () {
    function CategoryService(http) {
        this.http = http;
        this.baseUrl = environment_1.environment.LAPKET_API_URL + '/api/category';
        this.autherBaseUrl = environment_1.environment.LAPKET_API_URL + '/api/category_follow';
    }
    CategoryService.prototype.ngOnInit = function () {
    };
    CategoryService.prototype.getCategory = function (limit) {
        if (limit === void 0) { limit = 20; }
        this.url = this.baseUrl + '/categories.json?limit=' + limit;
        return this.http
            .get(this.url)
            .map(function (res) { return res.json(); });
    };
    CategoryService.prototype.getCategoryFollow = function (limit) {
        if (limit === void 0) { limit = 20; }
        this.url = this.baseUrl + '/my/follow/categories.json?limit=' + limit;
        return this.http
            .get(this.url)
            .map(function (res) { return res.json(); });
    };
    CategoryService.prototype.getCategoryDetail = function (id) {
        this.url = this.baseUrl + '/categories/' + id + '.json';
        return this.http
            .get(this.url)
            .map(function (res) { return res.json(); });
    };
    CategoryService.prototype.postCategoryFollow = function (category_id) {
        this.url = this.autherBaseUrl + '/categories/' + category_id + '/followers.json';
        var body = JSON.stringify({ category_id: category_id });
        return this.http
            .post(this.url, body)
            .map(function (res) { return res.json(); });
    };
    CategoryService.prototype.deleteCategoryFollow = function (category_id) {
        this.url = this.autherBaseUrl + '/categories/' + category_id + '/follower/remove.json';
        return this.http
            .get(this.url)
            .map(function (res) { return res.json(); });
    };
    return CategoryService;
}());
CategoryService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], CategoryService);
exports.CategoryService = CategoryService;
//# sourceMappingURL=/home/lithos/Data/Lab/codash/angularSpa/ts-node-94a6b447580330f9f2b609422537b04239ff3a39df9137e32efd559f1a2935cb/e9d97bad37419b7e16f68eb02b11d2aed62f50c86952f941b75664f4cc5053bb/14c3be918d7e0730580b37eaa09ef1048c7260fd493754ab835189a4172e0605.js.map