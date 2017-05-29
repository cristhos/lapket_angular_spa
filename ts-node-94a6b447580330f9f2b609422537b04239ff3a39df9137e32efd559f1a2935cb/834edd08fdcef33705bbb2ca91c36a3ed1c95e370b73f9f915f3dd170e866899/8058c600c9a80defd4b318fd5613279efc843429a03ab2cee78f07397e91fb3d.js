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
var user_service_1 = require("../service/user.service");
var UserFollowingComponent = (function () {
    function UserFollowingComponent(userService, route) {
        this.userService = userService;
        this.route = route;
    }
    UserFollowingComponent.prototype.ngOnInit = function () {
        this.getUserDetail();
    };
    UserFollowingComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    UserFollowingComponent.prototype.getUserDetail = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var username = params['username'];
            _this.userService.getUser(username).subscribe(function (data) { return _this.user_detail = data; }, function (error) { return console.log(error); }, function () { return console.log("finish"); });
            _this.getFollowingAuthor(username);
        });
    };
    UserFollowingComponent.prototype.getFollowingAuthor = function (username) {
        var _this = this;
        this.userService.getFollowingAuthor(username).subscribe(function (data) { return _this.follows = data._embedded.items; }, function (error) { return console.log(error); }, function () { return console.log("finish"); });
    };
    return UserFollowingComponent;
}());
UserFollowingComponent = __decorate([
    core_1.Component({
        selector: 'user-following',
        templateUrl: './user-following.component.html',
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        router_1.ActivatedRoute])
], UserFollowingComponent);
exports.UserFollowingComponent = UserFollowingComponent;
//# sourceMappingURL=/home/lithos/Data/Lab/codash/angularSpa/ts-node-94a6b447580330f9f2b609422537b04239ff3a39df9137e32efd559f1a2935cb/834edd08fdcef33705bbb2ca91c36a3ed1c95e370b73f9f915f3dd170e866899/8058c600c9a80defd4b318fd5613279efc843429a03ab2cee78f07397e91fb3d.js.map