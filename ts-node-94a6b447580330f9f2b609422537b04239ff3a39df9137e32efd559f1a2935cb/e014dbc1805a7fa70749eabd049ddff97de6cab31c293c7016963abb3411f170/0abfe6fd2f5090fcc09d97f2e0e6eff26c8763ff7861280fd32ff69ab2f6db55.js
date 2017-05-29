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
var router_1 = require("@angular/router");
var user_service_1 = require("../../service/user.service");
var register_final_form_1 = require("./register-final.form");
var country_service_1 = require("../../../country/service/country.service");
var city_service_1 = require("../../../city/service/city.service");
var RegisterFinalFormComponent = (function () {
    function RegisterFinalFormComponent(userService, countryService, cityService, router) {
        this.userService = userService;
        this.countryService = countryService;
        this.cityService = cityService;
        this.router = router;
        this.loading = false;
        this.genders = [
            {
                'type': 'm',
                'name': "Homme"
            },
            {
                'type': 'f',
                'name': "Femme"
            },
        ];
        this.model = new register_final_form_1.RegisterFinalFormModel(null, null, null, null);
        this.submitted = false;
    }
    RegisterFinalFormComponent.prototype.ngOnInit = function () {
        this.checkForm();
        this.getCountries();
    };
    RegisterFinalFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loading = true;
        this.userService.putUser(this.model).subscribe(function (data) {
            _this.router.navigate(['/']);
            window.location.reload();
        }, function (error) {
            console.log(error);
            _this.model = new register_final_form_1.RegisterFinalFormModel(_this.model.fullName, _this.model.country, _this.model.city, _this.model.gender);
        }, function () {
            console.log("finish");
        });
        this.loading = false;
    };
    Object.defineProperty(RegisterFinalFormComponent.prototype, "diagnostic", {
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    RegisterFinalFormComponent.prototype.getCountries = function () {
        var _this = this;
        this.countries_loading = true;
        this.countryService.getCountries().subscribe(function (data) {
            _this.countries = data._embedded.items;
            _this.countries_loading = false;
        }, function (error) {
            console.log(error);
            _this.countries_loading = false;
        }, function () {
            console.log("finish");
            _this.countries_loading = false;
        });
        this.checkForm();
    };
    RegisterFinalFormComponent.prototype.getCitiesCountry = function (country_id) {
        var _this = this;
        this.cities_loading = true;
        this.cityService.getCitiesCountry(country_id).subscribe(function (data) {
            _this.cities = data._embedded.items;
            _this.cities_loading = false;
            _this.resolveCountry();
        }, function (error) {
            console.log(error);
            _this.cities_loading = false;
        }, function () {
            console.log("finish");
            _this.cities_loading = false;
        });
        this.checkForm();
    };
    RegisterFinalFormComponent.prototype.onSelect = function ($event) {
        this.getCitiesCountry($event.target.value);
        this.checkForm();
    };
    RegisterFinalFormComponent.prototype.onSelectCity = function ($event) {
        this.checkForm();
    };
    RegisterFinalFormComponent.prototype.checkForm = function () {
        if (this.model.fullName != null && this.model.gender != null && this.model.country != null && this.model.city != null) {
            this.form_completed = true;
        }
        else {
            this.form_completed = false;
        }
    };
    RegisterFinalFormComponent.prototype.resolveCountry = function () {
        //resolve mobile loading 
        if (this.model.country != null) {
            this.getCitiesCountry(this.model.country);
        }
    };
    return RegisterFinalFormComponent;
}());
RegisterFinalFormComponent = __decorate([
    core_1.Component({
        selector: 'register-final-form',
        templateUrl: './register-final.form.component.html',
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        country_service_1.CountryService,
        city_service_1.CityService,
        router_1.Router])
], RegisterFinalFormComponent);
exports.RegisterFinalFormComponent = RegisterFinalFormComponent;
//# sourceMappingURL=/home/lithos/Data/Lab/codash/angularSpa/ts-node-94a6b447580330f9f2b609422537b04239ff3a39df9137e32efd559f1a2935cb/e014dbc1805a7fa70749eabd049ddff97de6cab31c293c7016963abb3411f170/0abfe6fd2f5090fcc09d97f2e0e6eff26c8763ff7861280fd32ff69ab2f6db55.js.map