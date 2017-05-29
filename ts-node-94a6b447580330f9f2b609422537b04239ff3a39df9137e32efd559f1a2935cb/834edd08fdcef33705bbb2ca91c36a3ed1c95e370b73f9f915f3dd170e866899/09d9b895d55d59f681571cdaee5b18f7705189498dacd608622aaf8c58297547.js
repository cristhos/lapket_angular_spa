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
var api_url_service_1 = require("../../utils/api-url.service");
var CategoryService = (function () {
    function CategoryService(http, apiUrlService) {
        this.http = http;
        this.apiUrlService = apiUrlService;
        this.baseUrl = this.apiUrlService.getBaseUrl() + '/api/category';
        this.autherBaseUrl = this.apiUrlService.getBaseUrl() + '/api/category_follow';
    }
    CategoryService.prototype.ngOnInit = function () {
    };
    CategoryService.prototype.getCategory = function (limit) {
        if (limit === void 0) { limit = 8; }
        this.url = this.baseUrl + '/categories.json?limit=' + limit;
        return this.http
            .get(this.url)
            .map(function (res) { return res.json(); });
    };
    CategoryService.prototype.getCategoryFollow = function (limit) {
        if (limit === void 0) { limit = 8; }
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
    __metadata("design:paramtypes", [http_1.Http, api_url_service_1.ApiUrlService])
], CategoryService);
exports.CategoryService = CategoryService;
//# sourceMappingURL=/home/lithos/Data/Lab/codash/angularSpa/ts-node-94a6b447580330f9f2b609422537b04239ff3a39df9137e32efd559f1a2935cb/834edd08fdcef33705bbb2ca91c36a3ed1c95e370b73f9f915f3dd170e866899/09d9b895d55d59f681571cdaee5b18f7705189498dacd608622aaf8c58297547.js.map