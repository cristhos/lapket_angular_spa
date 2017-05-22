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
var city_service_1 = require("../service/city.service");
var CityHomeComponent = (function () {
    function CityHomeComponent(cityService) {
        this.cityService = cityService;
        this.getCities();
    }
    CityHomeComponent.prototype.getCities = function () {
        var _this = this;
        this.cities_loading = true;
        var page = 1;
        var limit = 8;
        this.cityService.getCities(limit).subscribe(function (data) {
            _this.cities = data._embedded.items;
            _this.cities_loading = false;
        }, function (error) {
            console.log(error);
            _this.cities_loading = false;
        }, function () {
            console.log("finish");
            _this.cities_loading = false;
        });
    };
    return CityHomeComponent;
}());
CityHomeComponent = __decorate([
    core_1.Component({
        selector: 'home-city',
        templateUrl: './city-home.component.html',
        styles: ["\n  "],
    }),
    __metadata("design:paramtypes", [city_service_1.CityService])
], CityHomeComponent);
exports.CityHomeComponent = CityHomeComponent;
//# sourceMappingURL=/home/lithos/Data/Lab/codash/angularSpa/ts-node-94a6b447580330f9f2b609422537b04239ff3a39df9137e32efd559f1a2935cb/834edd08fdcef33705bbb2ca91c36a3ed1c95e370b73f9f915f3dd170e866899/9dcc4618033169c0f1af0b73a0057d0f4de4e121b2c5d97b1e7187760de9ee28.js.map