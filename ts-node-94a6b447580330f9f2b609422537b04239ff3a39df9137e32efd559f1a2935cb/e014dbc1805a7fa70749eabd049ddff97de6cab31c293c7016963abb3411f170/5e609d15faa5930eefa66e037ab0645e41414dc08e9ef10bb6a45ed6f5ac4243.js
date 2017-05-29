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
            //this.baseUrl = "http://192.168.43.59/masta/web/app_pre_prod.php";
        }
        return this.baseUrl;
    };
    return ApiUrlService;
}());
ApiUrlService = __decorate([
    core_1.Injectable()
], ApiUrlService);
exports.ApiUrlService = ApiUrlService;
//# sourceMappingURL=/home/lithos/Data/Lab/codash/angularSpa/ts-node-94a6b447580330f9f2b609422537b04239ff3a39df9137e32efd559f1a2935cb/e014dbc1805a7fa70749eabd049ddff97de6cab31c293c7016963abb3411f170/5e609d15faa5930eefa66e037ab0645e41414dc08e9ef10bb6a45ed6f5ac4243.js.map