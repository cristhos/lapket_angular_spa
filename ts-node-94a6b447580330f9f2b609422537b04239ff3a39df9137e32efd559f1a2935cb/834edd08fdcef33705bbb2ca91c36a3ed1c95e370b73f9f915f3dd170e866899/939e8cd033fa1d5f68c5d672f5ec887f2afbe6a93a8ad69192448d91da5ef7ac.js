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
require("../../rxjs-operators");
var api_url_service_1 = require("../../utils/api-url.service");
var CountryService = (function () {
    function CountryService(http, apiUrlService) {
        this.http = http;
        this.apiUrlService = apiUrlService;
        this.baseUrl = this.apiUrlService.getBaseUrl();
        this.baseUrl = this.baseUrl + '/api/user';
    }
    CountryService.prototype.getCountries = function () {
        this.url = this.baseUrl + '/countries.json';
        return this.http
            .get(this.url)
            .map(function (res) { return res.json(); });
    };
    return CountryService;
}());
CountryService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, api_url_service_1.ApiUrlService])
], CountryService);
exports.CountryService = CountryService;
//# sourceMappingURL=/home/lithos/Data/Lab/codash/angularSpa/ts-node-94a6b447580330f9f2b609422537b04239ff3a39df9137e32efd559f1a2935cb/834edd08fdcef33705bbb2ca91c36a3ed1c95e370b73f9f915f3dd170e866899/939e8cd033fa1d5f68c5d672f5ec887f2afbe6a93a8ad69192448d91da5ef7ac.js.map