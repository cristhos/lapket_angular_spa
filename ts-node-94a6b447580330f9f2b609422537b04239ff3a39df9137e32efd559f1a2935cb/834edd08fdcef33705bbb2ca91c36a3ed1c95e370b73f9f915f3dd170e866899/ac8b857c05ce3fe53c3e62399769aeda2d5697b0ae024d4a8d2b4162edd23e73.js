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
var DealService = (function () {
    function DealService(http, apiUrlService) {
        this.http = http;
        this.apiUrlService = apiUrlService;
        this.baseUrl = this.apiUrlService.getBaseUrl();
        this.baseUrl = this.baseUrl + '/api/deal';
    }
    DealService.prototype.getMyDealConversations = function (page) {
        this.url = this.baseUrl + '/conversation/my/conversations.json?page=' + page;
        return this.http
            .get(this.url)
            .map(function (res) { return res.json(); });
    };
    DealService.prototype.getDealConversation = function (conversation_id) {
        this.url = this.baseUrl + '/conversation/conversations/' + conversation_id + '.json';
        return this.http
            .get(this.url)
            .map(function (res) { return res.json(); });
    };
    DealService.prototype.getMyDeals = function () {
        return this.http
            .get('')
            .map(function (res) { return res.json(); });
    };
    DealService.prototype.getDealMessages = function (conversation_id, page) {
        this.url = this.baseUrl + '/message/messages/' + conversation_id + '/conversation.json?page=' + page;
        return this.http
            .get(this.url)
            .map(function (res) { return res.json(); });
    };
    DealService.prototype.postDealMessage = function (conversation_id, message) {
        this.url = this.baseUrl + '/message/messages/' + conversation_id + '.json';
        var body = JSON.stringify({ conversation_id: conversation_id, content: message.content });
        return this.http.post(this.url, body)
            .map(function (res) { return res.json(); });
    };
    DealService.prototype.postConversation = function (product_id) {
        this.url = this.baseUrl + '/conversation/conversations/' + product_id + '.json';
        var body = JSON.stringify({ product_id: product_id });
        return this.http.post(this.url, body)
            .map(function (res) { return res.json(); });
    };
    DealService.prototype.deleteComment = function (deal_id) {
        return this.http
            .get("")
            .map(function (res) { return res.json(); });
    };
    return DealService;
}());
DealService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, api_url_service_1.ApiUrlService])
], DealService);
exports.DealService = DealService;
//# sourceMappingURL=/home/lithos/Data/Lab/codash/angularSpa/ts-node-94a6b447580330f9f2b609422537b04239ff3a39df9137e32efd559f1a2935cb/834edd08fdcef33705bbb2ca91c36a3ed1c95e370b73f9f915f3dd170e866899/ac8b857c05ce3fe53c3e62399769aeda2d5697b0ae024d4a8d2b4162edd23e73.js.map