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
var ProductService = (function () {
    function ProductService(http, apiUrlService) {
        this.http = http;
        this.apiUrlService = apiUrlService;
        this.baseUrl = this.apiUrlService.getBaseUrl();
        this.baseUrl = this.baseUrl + '/api/product';
    }
    ProductService.prototype.getProductLast = function (page, limit) {
        this.url = this.baseUrl + '/last/products.json?page=' + page + '&limit=' + limit;
        return this.http
            .get(this.url)
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.getProductFil = function (page) {
        this.url = this.baseUrl + '/fil/products.json?page=' + page;
        return this.http
            .get(this.url)
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.getProductDetail = function (id) {
        this.url = this.baseUrl + '/products/' + id + '.json';
        return this.http
            .get(this.url)
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.getProductAlbum = function (album_id) {
        this.url = this.baseUrl + '/products/' + album_id + '/album.json';
        return this.http
            .get(this.url)
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.getProductsCategory = function (category_id) {
        this.url = this.baseUrl + '/products/' + category_id + '/category.json';
        return this.http
            .get(this.url)
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.getShortProductsAlbum = function (album_id) {
        this.url = this.baseUrl + '/shorts/' + album_id + '/products/album.json';
        return this.http
            .get(this.url)
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.getProductAuthor = function (slug, page) {
        this.url = this.baseUrl + '/products/' + slug + '/author.json?page=' + page;
        return this.http
            .get(this.url)
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.getProductVoteBy = function (slug) {
        this.url = this.baseUrl + '/products/' + slug + '/vote/by.json';
        return this.http
            .get(this.url)
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.postProduct = function (product) {
        this.url = this.baseUrl + '/products.json';
        var body = JSON.stringify(product);
        return this.http.post(this.url, body)
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.putProduct = function (product, product_id) {
        this.url = this.baseUrl + '/products/' + product_id + '.json';
        var body = JSON.stringify(product);
        return this.http.put(this.url, body)
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.expiredProduct = function (product_id) {
        this.url = this.baseUrl + '/products/' + product_id + '/expired.json';
        var body = JSON.stringify({ product_id: product_id });
        return this.http
            .put(this.url, body)
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.removeProduct = function (product_id) {
        this.url = this.baseUrl + '/products/' + product_id + '/remove.json';
        return this.http
            .get(this.url)
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.postProductVote = function (product_id) {
        this.url = this.baseUrl + '/products/votes.json';
        var body = JSON.stringify({ product_id: product_id });
        return this.http
            .post(this.url, body)
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.deleteProductVote = function (product_id) {
        this.url = this.baseUrl + '/votes/' + product_id + '/remove.json';
        return this.http
            .get(this.url)
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.desactiveNotification = function (product_id) {
        this.url = this.baseUrl + '/votes/' + product_id + '/desactive/notify.json';
        var body = JSON.stringify({ product_id: product_id });
        return this.http
            .put(this.url, body)
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.activeNotification = function (product_id) {
        this.url = this.baseUrl + '/votes/' + product_id + '/active/notify.json';
        var body = JSON.stringify({ product_id: product_id });
        return this.http
            .put(this.url, body)
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.search = function (term, page) {
        this.url = this.baseUrl + '/products/term.json?term=' + term + '&page=' + page;
        return this.http
            .get(this.url)
            .map(function (res) { return res.json(); });
    };
    return ProductService;
}());
ProductService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, api_url_service_1.ApiUrlService])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=/home/lithos/Data/Lab/codash/angularSpa/ts-node-94a6b447580330f9f2b609422537b04239ff3a39df9137e32efd559f1a2935cb/e014dbc1805a7fa70749eabd049ddff97de6cab31c293c7016963abb3411f170/516fee9a068cd44b8b3ef5f4fb088fe5f1eb407a904be18947ae9ecfd3f35296.js.map