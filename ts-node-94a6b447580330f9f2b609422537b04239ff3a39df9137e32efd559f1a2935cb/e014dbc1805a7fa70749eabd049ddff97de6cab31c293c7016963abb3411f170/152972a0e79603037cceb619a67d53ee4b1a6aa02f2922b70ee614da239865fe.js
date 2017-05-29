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
var user_service_1 = require("../../user/service/user.service");
var CoreDetailComponent = (function () {
    function CoreDetailComponent(userService) {
        this.userService = userService;
    }
    CoreDetailComponent.prototype.ngOnInit = function () {
        this.checkLogin();
    };
    CoreDetailComponent.prototype.ngAfterViewInit = function () {
        $('.parallax').parallax();
    };
    CoreDetailComponent.prototype.checkLogin = function () {
        if (localStorage.getItem("access_token")) {
            this.authent = true;
        }
        else {
            this.authent = false;
        }
    };
    CoreDetailComponent.prototype.checkRequest = function () {
        if (localStorage.getItem("request")) {
            this.request = true;
        }
        else {
            this.request = false;
        }
    };
    return CoreDetailComponent;
}());
CoreDetailComponent = __decorate([
    core_1.Component({
        selector: 'core',
        templateUrl: './core-detail.component.html',
        styleUrls: ['./core-detail.component.css'],
    }),
    __metadata("design:paramtypes", [user_service_1.UserService])
], CoreDetailComponent);
exports.CoreDetailComponent = CoreDetailComponent;
//# sourceMappingURL=/home/lithos/Data/Lab/codash/angularSpa/ts-node-94a6b447580330f9f2b609422537b04239ff3a39df9137e32efd559f1a2935cb/e014dbc1805a7fa70749eabd049ddff97de6cab31c293c7016963abb3411f170/152972a0e79603037cceb619a67d53ee4b1a6aa02f2922b70ee614da239865fe.js.map