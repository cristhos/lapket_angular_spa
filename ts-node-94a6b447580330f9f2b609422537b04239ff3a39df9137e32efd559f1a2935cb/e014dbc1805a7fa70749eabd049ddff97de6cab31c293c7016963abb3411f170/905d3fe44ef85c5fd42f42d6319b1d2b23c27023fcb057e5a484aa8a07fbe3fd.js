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
var register_form_1 = require("./register.form");
var RegisterFormComponent = (function () {
    function RegisterFormComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.loading = false;
        this.barLabel = "Sécurité du mot de passe:";
        this.model = new register_form_1.RegisterFormModel(null, null);
        this.submitted = false;
    }
    RegisterFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loading = true;
        this.userService.register(this.model).subscribe(function (data) {
            _this.response = 200;
            _this.userService.login(data).subscribe(function (data) {
                localStorage.clear();
                localStorage.setItem("authent", "O");
                localStorage.setItem("access_token", data.access_token);
                localStorage.setItem("expires_in", data.expires_in);
                localStorage.setItem("token_type", data.access_token);
                localStorage.setItem("refresh_token", data.refresh_token);
                _this.router.navigate(['/']);
                window.location.reload();
            }, function (error) {
                _this.router.navigate(['/login']);
                console.log(error);
                _this.loading = false;
            }, function () {
                _this.loading = false;
                console.log("finish");
            });
        }, function (error) {
            _this.response = error.status;
            console.log(error);
            _this.model = new register_form_1.RegisterFormModel(_this.model.email, "");
            _this.loading = false;
        }, function () {
            console.log("finish");
            _this.loading = false;
        });
        this.submitted = true;
    };
    Object.defineProperty(RegisterFormComponent.prototype, "diagnostic", {
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    return RegisterFormComponent;
}());
RegisterFormComponent = __decorate([
    core_1.Component({
        selector: 'register-form',
        templateUrl: './register.form.component.html',
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router])
], RegisterFormComponent);
exports.RegisterFormComponent = RegisterFormComponent;
//# sourceMappingURL=/home/lithos/Data/Lab/codash/angularSpa/ts-node-94a6b447580330f9f2b609422537b04239ff3a39df9137e32efd559f1a2935cb/e014dbc1805a7fa70749eabd049ddff97de6cab31c293c7016963abb3411f170/905d3fe44ef85c5fd42f42d6319b1d2b23c27023fcb057e5a484aa8a07fbe3fd.js.map