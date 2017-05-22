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
var login_form_1 = require("./login.form");
var LoginFormComponent = (function () {
    function LoginFormComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.loading = false;
        this.authent = false;
        this.model = new login_form_1.LoginFormModel(null, null);
        this.submitted = false;
        this.active = true;
    }
    LoginFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loading = true;
        this.userService.login(this.model).subscribe(function (data) {
            _this.response = 200;
            localStorage.clear();
            localStorage.setItem("authent", "O");
            localStorage.setItem("access_token", data.access_token);
            localStorage.setItem("expires_in", data.expires_in);
            localStorage.setItem("token_type", data.access_token);
            localStorage.setItem("refresh_token", data.refresh_token);
            _this.userService.isLoggedIn = true;
            if (_this.userService.isLoggedIn) {
                var redirect = _this.userService.redirectUrl ? _this.userService.redirectUrl : '/';
                _this.router.navigate([redirect]);
            }
            window.location.reload();
        }, function (error) {
            _this.response = error.status;
            _this.loading = false;
            console.log(error);
            _this.model = new login_form_1.LoginFormModel(_this.model.username, "");
        }, function () {
            _this.loading = false;
            console.log("finish");
        });
    };
    Object.defineProperty(LoginFormComponent.prototype, "diagnostic", {
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    ;
    return LoginFormComponent;
}());
LoginFormComponent = __decorate([
    core_1.Component({
        selector: 'login-form',
        templateUrl: './login.form.component.html',
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router])
], LoginFormComponent);
exports.LoginFormComponent = LoginFormComponent;
//# sourceMappingURL=/home/lithos/Data/Lab/codash/angularSpa/ts-node-94a6b447580330f9f2b609422537b04239ff3a39df9137e32efd559f1a2935cb/834edd08fdcef33705bbb2ca91c36a3ed1c95e370b73f9f915f3dd170e866899/0a326f1a74221d917e7db2234da8f19ba3c14f67a63e4494f190aefdb63bab9b.js.map