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
var user_service_1 = require("../service/user.service");
var UserSuggestionCommonComponent = (function () {
    function UserSuggestionCommonComponent(userService) {
        this.userService = userService;
        this.loading = false;
    }
    UserSuggestionCommonComponent.prototype.postFollow = function (user_id) {
        var _this = this;
        this.loading = true;
        this.userService.postFollow(user_id).subscribe(function (data) {
            _this.suggestion = data;
            _this.suggestion.is_follow_it = true;
        }, function (error) { return console.log(error); }, function () {
            _this.loading = false;
            console.log("finish");
        });
    };
    UserSuggestionCommonComponent.prototype.removeFollow = function (user_id) {
        var _this = this;
        this.loading = true;
        this.userService.removeFollow(user_id).subscribe(function (data) {
            _this.suggestion = data;
            _this.suggestion.is_follow_it = false;
        }, function (error) { return console.log(error); }, function () {
            _this.loading = false;
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
        template: require('./user-suggestion-common.component.html'),
        styles: ["\n    .collection-item{\n      position: relative;\n    }\n\n  "]
    }),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserSuggestionCommonComponent);
exports.UserSuggestionCommonComponent = UserSuggestionCommonComponent;
//# sourceMappingURL=user-suggestion-common.component.js.map