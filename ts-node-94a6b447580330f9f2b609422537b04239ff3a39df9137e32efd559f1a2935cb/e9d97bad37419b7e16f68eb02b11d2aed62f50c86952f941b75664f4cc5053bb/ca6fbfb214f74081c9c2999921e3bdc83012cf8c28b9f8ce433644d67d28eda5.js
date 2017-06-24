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
var change_password_form_1 = require("./change-password.form");
var ChangePasswordFormComponent = (function () {
    function ChangePasswordFormComponent(userService, router, route) {
        this.userService = userService;
        this.router = router;
        this.route = route;
        this.loading = false;
        this.barLabel = "Sécurité du mot de passe:";
        this.model = new change_password_form_1.ChangePasswordFormModel(null, null, null);
    }
    ChangePasswordFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('access_token')) {
            this.authent = true;
        }
        else {
            this.authent = false;
        }
        this.sub = this.route.params.subscribe(function (params) {
            _this.model.tokenConfirmation = params['tokenConfirmation'];
        });
        this.checkForm();
    };
    ChangePasswordFormComponent.prototype.ngOnDestroy = function () {
        if (this.sub != null)
            this.sub.unsubscribe();
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
                _this.model = new change_password_form_1.ChangePasswordFormModel(_this.model.password, null, _this.model.tokenConfirmation);
            }
        }, function (error) {
            console.log(error);
        }, function () {
            console.log("finish");
        });
        this.loading = false;
    };
    ChangePasswordFormComponent.prototype.checkForm = function () {
        if (this.model.password != null && this.model.confirmePassword != null) {
            if (this.model.confirmePassword == this.model.password) {
                this.form_completed = true;
            }
            else {
                this.form_completed = false;
            }
        }
        else {
            this.form_completed = false;
        }
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
        templateUrl: './change-password.form.component.html',
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        router_1.Router,
        router_1.ActivatedRoute])
], ChangePasswordFormComponent);
exports.ChangePasswordFormComponent = ChangePasswordFormComponent;
//# sourceMappingURL=/home/lithos/Data/Lab/codash/angularSpa/ts-node-94a6b447580330f9f2b609422537b04239ff3a39df9137e32efd559f1a2935cb/e9d97bad37419b7e16f68eb02b11d2aed62f50c86952f941b75664f4cc5053bb/ca6fbfb214f74081c9c2999921e3bdc83012cf8c28b9f8ce433644d67d28eda5.js.map