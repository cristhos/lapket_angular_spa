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
var resseting_password_form_1 = require("./resseting-password.form");
var RessetingPasswordFormComponent = (function () {
    function RessetingPasswordFormComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.model = new resseting_password_form_1.RessetingPasswordFormModel(null);
        this.submitted = false;
    }
    RessetingPasswordFormComponent.prototype.ngOnInit = function () {
        this.loading = false;
    };
    RessetingPasswordFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loading = true;
        this.userService.getPasswordRequestReset(this.model.email).subscribe(function (data) {
            _this.model = new resseting_password_form_1.RessetingPasswordFormModel(null);
            _this.response = 200;
            _this.loading = false;
        }, function (error) {
            console.log(error);
            _this.loading = false;
            _this.response = error.status;
        }, function () {
            console.log("finish");
            _this.loading = false;
        });
    };
    Object.defineProperty(RessetingPasswordFormComponent.prototype, "diagnostic", {
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    return RessetingPasswordFormComponent;
}());
RessetingPasswordFormComponent = __decorate([
    core_1.Component({
        selector: 'resseting-form',
        templateUrl: './resseting-password.form.component.html',
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        router_1.Router])
], RessetingPasswordFormComponent);
exports.RessetingPasswordFormComponent = RessetingPasswordFormComponent;
//# sourceMappingURL=/home/lithos/Data/Lab/codash/angularSpa/ts-node-94a6b447580330f9f2b609422537b04239ff3a39df9137e32efd559f1a2935cb/834edd08fdcef33705bbb2ca91c36a3ed1c95e370b73f9f915f3dd170e866899/897cfae68aa0d1e003192f9b1cec0ddab03acb057a9172721274aac8a10f9c96.js.map