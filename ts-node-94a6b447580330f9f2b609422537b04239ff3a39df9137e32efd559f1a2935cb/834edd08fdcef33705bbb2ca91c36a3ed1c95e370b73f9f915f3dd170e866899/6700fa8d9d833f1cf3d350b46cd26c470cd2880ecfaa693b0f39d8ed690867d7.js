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
var user_service_1 = require("../service/user.service");
var router_1 = require("@angular/router");
var UserBandComponent = (function () {
    function UserBandComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    UserBandComponent.prototype.postFollow = function (user_id) {
        var _this = this;
        if (this.buttonGuard() == true) {
            this.user_detail.is_follow_it = true;
            this.userService.postFollow(user_id).subscribe(function (data) {
                //illusion optique
            }, function (error) {
                console.log(error);
                _this.user_detail.is_follow_it = true;
            }, function () {
                console.log("finish");
            });
        }
        else {
            this.buttonGuardRedirect();
        }
    };
    UserBandComponent.prototype.removeFollow = function (user_id) {
        var _this = this;
        if (this.buttonGuard() == true) {
            this.user_detail.is_follow_it = false;
            this.userService.removeFollow(user_id).subscribe(function (data) {
                //illusion optique
            }, function (error) {
                console.log(error);
                _this.user_detail.is_follow_it = true;
            }, function () {
                console.log("finish");
            });
        }
        else {
            this.buttonGuardRedirect();
        }
    };
    UserBandComponent.prototype.buttonGuard = function () {
        if (localStorage.getItem("access_token")) {
            return true;
        }
        else {
            return false;
        }
    };
    UserBandComponent.prototype.buttonGuardRedirect = function () {
        if (window.confirm('Voulez-vous vous connecter pour effectuer cette action ?')) {
            this.router.navigateByUrl('/login');
        }
    };
    return UserBandComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], UserBandComponent.prototype, "user_detail", void 0);
UserBandComponent = __decorate([
    core_1.Component({
        selector: 'user-band',
        providers: [user_service_1.UserService],
        templateUrl: './user-band.component.html',
        styles: ["\n    .card-action, card-content{\n       padding: 0px;\n    }\n    #band-drop {\n      min-width: 160px;\n    }\n  "]
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        router_1.Router])
], UserBandComponent);
exports.UserBandComponent = UserBandComponent;
//# sourceMappingURL=/home/lithos/Data/Lab/codash/angularSpa/ts-node-94a6b447580330f9f2b609422537b04239ff3a39df9137e32efd559f1a2935cb/834edd08fdcef33705bbb2ca91c36a3ed1c95e370b73f9f915f3dd170e866899/6700fa8d9d833f1cf3d350b46cd26c470cd2880ecfaa693b0f39d8ed690867d7.js.map