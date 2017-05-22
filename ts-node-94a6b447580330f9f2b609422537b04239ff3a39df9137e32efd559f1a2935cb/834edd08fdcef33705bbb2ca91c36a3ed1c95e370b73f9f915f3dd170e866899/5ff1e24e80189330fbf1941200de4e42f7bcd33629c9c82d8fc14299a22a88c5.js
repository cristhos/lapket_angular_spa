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
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var user_service_1 = require("./user.service");
var CanActivateViaAuthGuard = (function () {
    function CanActivateViaAuthGuard(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    // La méthode du Guard : détermine si l'utilisateur peut se connecter ou non !
    CanActivateViaAuthGuard.prototype.canActivate = function (route, state) {
        var url = state.url;
        return this.checkLogin(url);
    };
    // Méthode d'aide pour le Guard, qui interroge notre service.
    CanActivateViaAuthGuard.prototype.checkLogin = function (url) {
        if (localStorage.getItem("access_token")) {
            return true;
        }
        this.userService.redirectUrl = url;
        this.router.navigate(['/login']);
        return false;
    };
    CanActivateViaAuthGuard.prototype.checkAuthRequest = function () {
        if (localStorage.getItem("request"))
            return true;
        return false;
    };
    CanActivateViaAuthGuard.prototype.canLoad = function (route) {
        var url = "/" + route.path;
        return this.checkAuthRequest();
    };
    return CanActivateViaAuthGuard;
}());
CanActivateViaAuthGuard = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router])
], CanActivateViaAuthGuard);
exports.CanActivateViaAuthGuard = CanActivateViaAuthGuard;
//# sourceMappingURL=/home/lithos/Data/Lab/codash/angularSpa/ts-node-94a6b447580330f9f2b609422537b04239ff3a39df9137e32efd559f1a2935cb/834edd08fdcef33705bbb2ca91c36a3ed1c95e370b73f9f915f3dd170e866899/5ff1e24e80189330fbf1941200de4e42f7bcd33629c9c82d8fc14299a22a88c5.js.map