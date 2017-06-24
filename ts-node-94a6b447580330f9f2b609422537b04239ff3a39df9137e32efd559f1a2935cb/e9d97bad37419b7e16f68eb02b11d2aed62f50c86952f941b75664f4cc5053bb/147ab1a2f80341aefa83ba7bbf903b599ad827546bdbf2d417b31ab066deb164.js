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
var router_1 = require("@angular/router");
var NavbarComponent = (function () {
    function NavbarComponent(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    NavbarComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout().subscribe(function (data) {
            localStorage.clear();
            localStorage.setItem("authent", "N");
            _this.router.navigateByUrl('/');
            window.location.reload();
        }, function (error) {
            console.log(error);
        }, function () {
            console.log("finish");
        });
    };
    NavbarComponent.prototype.reload = function () {
        this.router.navigate(['/']);
        window.location.reload();
    };
    return NavbarComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], NavbarComponent.prototype, "user", void 0);
NavbarComponent = __decorate([
    core_1.Component({
        selector: 'nav-bar',
        templateUrl: './navbar.component.html',
        styleUrls: ['./navbar.component.css'],
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [router_1.Router, user_service_1.UserService])
], NavbarComponent);
exports.NavbarComponent = NavbarComponent;
//# sourceMappingURL=/home/lithos/Data/Lab/codash/angularSpa/ts-node-94a6b447580330f9f2b609422537b04239ff3a39df9137e32efd559f1a2935cb/e9d97bad37419b7e16f68eb02b11d2aed62f50c86952f941b75664f4cc5053bb/147ab1a2f80341aefa83ba7bbf903b599ad827546bdbf2d417b31ab066deb164.js.map