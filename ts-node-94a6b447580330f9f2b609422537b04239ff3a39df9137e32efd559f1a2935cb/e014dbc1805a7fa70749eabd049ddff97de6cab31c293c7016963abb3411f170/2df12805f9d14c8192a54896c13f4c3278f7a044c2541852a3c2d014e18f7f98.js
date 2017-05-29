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
var CityService = (function () {
    function CityService(http, apiUrlService) {
        this.http = http;
        this.apiUrlService = apiUrlService;
        this.baseUrl = this.apiUrlService.getBaseUrl();
        this.baseUrl = this.baseUrl + '/api/user';
    }
    CityService.prototype.getCities = function (limit) {
        this.url = this.baseUrl + '/cities.json?limit=' + limit;
        return this.http
            .get(this.url)
            .map(function (res) { return res.json(); });
    };
    CityService.prototype.getCitiesCountry = function (country_id) {
        this.url = this.baseUrl + '/cities/' + country_id + '/country.json';
        return this.http
            .get(this.url)
            .map(function (res) { return res.json(); });
    };
    return CityService;
}());
CityService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, api_url_service_1.ApiUrlService])
], CityService);
exports.CityService = CityService;
//# sourceMappingURL=/home/lithos/Data/Lab/codash/angularSpa/ts-node-94a6b447580330f9f2b609422537b04239ff3a39df9137e32efd559f1a2935cb/e014dbc1805a7fa70749eabd049ddff97de6cab31c293c7016963abb3411f170/2df12805f9d14c8192a54896c13f4c3278f7a044c2541852a3c2d014e18f7f98.js.map