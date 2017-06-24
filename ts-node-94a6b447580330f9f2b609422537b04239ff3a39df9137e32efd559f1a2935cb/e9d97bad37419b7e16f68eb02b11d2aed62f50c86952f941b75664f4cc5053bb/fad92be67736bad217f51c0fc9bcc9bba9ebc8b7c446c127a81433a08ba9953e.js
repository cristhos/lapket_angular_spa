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
var platform_browser_1 = require("@angular/platform-browser");
var user_service_1 = require("./user/service/user.service");
require("./rxjs-operators");
var Observable_1 = require("rxjs/Observable");
var AppComponent = (function () {
    function AppComponent(titleService, userService, router) {
        this.titleService = titleService;
        this.userService = userService;
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.request = false;
        this.setTitle("Acceuil");
        this.getInitialUser();
    };
    AppComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    AppComponent.prototype.getInitialUser = function () {
        var _this = this;
        if (localStorage.getItem("new_token")) {
            this.refreshToken();
        }
        else {
            this.userService.getUserSession().subscribe(function (data) {
                _this.user = data;
                if (_this.user.compte_state == false)
                    _this.router.navigate(['/user/r/step2']);
                _this.request = true;
                localStorage.setItem("request", "true");
                localStorage.setItem('user_id', _this.user.id);
                _this.subscribeToData();
            }, function (error) {
                _this.request = true;
                localStorage.setItem("request", "true");
                switch (error.status) {
                    case 401:
                        console.log('token expired');
                        _this.refreshToken();
                        break;
                    case 403:
                        console.log("Visiteur");
                        break;
                    case 0:
                        _this.api_server_error = true;
                        break;
                    default:
                        localStorage.clear();
                        localStorage.setItem("authent", "N");
                        break;
                }
            }, function () {
                _this.request = true;
                localStorage.setItem("request", "true");
                console.log("finish");
            });
        }
    };
    //verify user session very time
    AppComponent.prototype.subscribeToData = function () {
        var _this = this;
        if (localStorage.getItem("authent") == "O") {
            this.timerSub = Observable_1.Observable.timer(10000).subscribe(function () {
                _this.getInitialUser();
            });
        }
    };
    //refreshToken and reaload page
    AppComponent.prototype.refreshToken = function () {
        var _this = this;
        this.request = true;
        localStorage.setItem('new_token', 'true');
        this.userService.getRefreshToken().subscribe(function (data) {
            localStorage.setItem("authent", "O");
            localStorage.setItem("access_token", data.access_token);
            localStorage.setItem("expires_in", data.expires_in);
            localStorage.setItem("token_type", data.token_type);
            localStorage.setItem("refresh_token", data.refresh_token);
            localStorage.removeItem("new_token");
            _this.userService.isLoggedIn = true;
            if (_this.userService.isLoggedIn) {
                var redirect = _this.userService.redirectUrl ? _this.userService.redirectUrl : '/';
                _this.router.navigate([redirect]);
            }
            window.location.reload();
        }, function (error) {
            localStorage.clear();
            window.location.reload();
            console.log(error);
        }, function () { return console.log("finish"); });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css'],
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [platform_browser_1.Title, user_service_1.UserService, router_1.Router])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=/home/lithos/Data/Lab/codash/angularSpa/ts-node-94a6b447580330f9f2b609422537b04239ff3a39df9137e32efd559f1a2935cb/e9d97bad37419b7e16f68eb02b11d2aed62f50c86952f941b75664f4cc5053bb/fad92be67736bad217f51c0fc9bcc9bba9ebc8b7c446c127a81433a08ba9953e.js.map