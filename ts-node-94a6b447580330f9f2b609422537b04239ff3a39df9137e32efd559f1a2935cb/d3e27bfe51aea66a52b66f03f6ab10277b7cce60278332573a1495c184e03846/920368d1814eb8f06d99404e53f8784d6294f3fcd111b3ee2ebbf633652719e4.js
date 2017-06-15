"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var environment_1 = require("../../environments/environment");
var ApiUrlService = (function () {
    function ApiUrlService() {
    }
    ApiUrlService.prototype.getBaseUrl = function () {
        if (environment_1.environment.production) {
            this.baseUrl = "https://apis.lapket.com";
            //this.baseUrl = "http://localhost/masta/web/app_pre_prod.php";
            //this.baseUrl = "http://192.168.43.59/masta/web/app_pre_prod.php";
        }
        else {
            this.baseUrl = "http://localhost/masta/web/app_pre_prod.php";
            //this.baseUrl = "http://192.168.43.151/masta/web/app_pre_prod.php";
        }
        return this.baseUrl;
    };
    return ApiUrlService;
}());
ApiUrlService = __decorate([
    core_1.Injectable()
], ApiUrlService);
exports.ApiUrlService = ApiUrlService;
//# sourceMappingURL=/home/lithos/Data/Lab/codash/angularSpa/ts-node-94a6b447580330f9f2b609422537b04239ff3a39df9137e32efd559f1a2935cb/d3e27bfe51aea66a52b66f03f6ab10277b7cce60278332573a1495c184e03846/920368d1814eb8f06d99404e53f8784d6294f3fcd111b3ee2ebbf633652719e4.js.map