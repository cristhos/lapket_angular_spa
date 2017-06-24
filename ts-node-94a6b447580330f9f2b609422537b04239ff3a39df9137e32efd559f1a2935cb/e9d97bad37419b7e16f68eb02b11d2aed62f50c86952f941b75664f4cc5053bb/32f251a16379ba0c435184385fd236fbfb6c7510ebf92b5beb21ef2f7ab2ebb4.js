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
var environment_1 = require("../../../environments/environment");
var CityService = (function () {
    function CityService(http) {
        this.http = http;
        this.baseUrl = environment_1.environment.LAPKET_API_URL;
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
    __metadata("design:paramtypes", [http_1.Http])
], CityService);
exports.CityService = CityService;
//# sourceMappingURL=/home/lithos/Data/Lab/codash/angularSpa/ts-node-94a6b447580330f9f2b609422537b04239ff3a39df9137e32efd559f1a2935cb/e9d97bad37419b7e16f68eb02b11d2aed62f50c86952f941b75664f4cc5053bb/32f251a16379ba0c435184385fd236fbfb6c7510ebf92b5beb21ef2f7ab2ebb4.js.map