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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var user_service_1 = require("../../service/user.service");
var change_password_form_1 = require("./change-password.form");
var ChangePasswordFormComponent = (function () {
    function ChangePasswordFormComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.loading = false;
        this.authent = false;
        this.model = new change_password_form_1.ChangePasswordFormModel(null, null);
    }
    ChangePasswordFormComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('access_token'))
            this.authent = true;
    };
    ChangePasswordFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loading = true;
        var user_id = localStorage.getItem('user_id');
        this.userService.putPassword(this.model).subscribe(function (data) {
            if (data.status == true) {
                _this.router.navigate(['/']);
                window.location.reload();
            }
            else {
                _this.model = new change_password_form_1.ChangePasswordFormModel(_this.model.password, null);
            }
        }, function (error) {
            console.log(error);
        }, function () {
            console.log("finish");
        });
        this.loading = false;
    };
    Object.defineProperty(ChangePasswordFormComponent.prototype, "diagnostic", {
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    return ChangePasswordFormComponent;
}());
ChangePasswordFormComponent = __decorate([
    core_1.Component({
        selector: 'change-form',
        template: require('./change-password.form.component.html'),
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        router_1.Router])
], ChangePasswordFormComponent);
exports.ChangePasswordFormComponent = ChangePasswordFormComponent;
//# sourceMappingURL=change-password.form.component.js.map