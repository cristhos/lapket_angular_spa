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
var deal_service_1 = require("../../deal/service/deal.service");
var DealConversationComponent = (function () {
    function DealConversationComponent(dealService, route) {
        this.dealService = dealService;
        this.route = route;
        this.dealConversations = [];
    }
    DealConversationComponent.prototype.ngOnInit = function () {
        this.page = 1;
        this.pages = 2;
        this.getDealMyConversations();
    };
    DealConversationComponent.prototype.getDealMyConversations = function () {
        var _this = this;
        if (this.page <= this.pages) {
            this.conversations_loading = true;
            this.dealService.getMyDealConversations(this.page).subscribe(function (data) {
                _this.total = data.total;
                _this.pages = data.pages;
                for (var i = 0; i <= data.limit; i++) {
                    if (data._embedded.items[i]) {
                        _this.dealConversations.push(data._embedded.items[i]);
                        _this.page = data.page + 1;
                    }
                }
                _this.conversations_loading = false;
            }, function (error) {
                console.log(error);
                _this.conversations_loading = false;
            }, function () {
                console.log("finish");
                _this.conversations_loading = false;
            });
        }
    };
    DealConversationComponent.prototype.onScrollDown = function () {
        this.getDealMyConversations();
    };
    return DealConversationComponent;
}());
DealConversationComponent = __decorate([
    core_1.Component({
        selector: 'deal-conversation',
        templateUrl: './deal-conversation.component.html',
    }),
    __metadata("design:paramtypes", [deal_service_1.DealService, router_1.ActivatedRoute])
], DealConversationComponent);
exports.DealConversationComponent = DealConversationComponent;
//# sourceMappingURL=/home/lithos/Data/Lab/codash/angularSpa/ts-node-94a6b447580330f9f2b609422537b04239ff3a39df9137e32efd559f1a2935cb/834edd08fdcef33705bbb2ca91c36a3ed1c95e370b73f9f915f3dd170e866899/ad54f07d83c7d210dd6bea0b9e5c4ef38274b06b1f3d1a45b4cf0fbfe247194f.js.map