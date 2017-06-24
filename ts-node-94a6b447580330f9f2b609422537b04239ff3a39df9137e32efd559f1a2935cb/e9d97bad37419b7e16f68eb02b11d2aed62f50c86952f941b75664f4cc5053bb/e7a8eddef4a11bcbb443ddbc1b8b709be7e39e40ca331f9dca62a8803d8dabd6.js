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
var UserSuggestionCommonComponent = (function () {
    function UserSuggestionCommonComponent(userService) {
        this.userService = userService;
        this.loading = false;
    }
    UserSuggestionCommonComponent.prototype.postFollow = function (user_id) {
        var _this = this;
        this.suggestion.is_follow_it = true;
        this.userService.postFollow(user_id).subscribe(function (data) {
            //illusion optique
        }, function (error) {
            console.log(error);
            _this.suggestion.is_follow_it = false;
        }, function () {
            console.log("finish");
        });
    };
    UserSuggestionCommonComponent.prototype.removeFollow = function (user_id) {
        var _this = this;
        this.suggestion.is_follow_it = false;
        this.userService.removeFollow(user_id).subscribe(function (data) {
            //illusion optique
        }, function (error) {
            console.log(error);
            _this.suggestion.is_follow_it = true;
        }, function () {
            console.log("finish");
        });
    };
    return UserSuggestionCommonComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], UserSuggestionCommonComponent.prototype, "suggestion", void 0);
UserSuggestionCommonComponent = __decorate([
    core_1.Component({
        selector: 'user-suggestion-common',
        templateUrl: './user-suggestion-common.component.html',
        styleUrls: ['./user-suggestion-common.component.css']
    }),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserSuggestionCommonComponent);
exports.UserSuggestionCommonComponent = UserSuggestionCommonComponent;
//# sourceMappingURL=/home/lithos/Data/Lab/codash/angularSpa/ts-node-94a6b447580330f9f2b609422537b04239ff3a39df9137e32efd559f1a2935cb/e9d97bad37419b7e16f68eb02b11d2aed62f50c86952f941b75664f4cc5053bb/e7a8eddef4a11bcbb443ddbc1b8b709be7e39e40ca331f9dca62a8803d8dabd6.js.map