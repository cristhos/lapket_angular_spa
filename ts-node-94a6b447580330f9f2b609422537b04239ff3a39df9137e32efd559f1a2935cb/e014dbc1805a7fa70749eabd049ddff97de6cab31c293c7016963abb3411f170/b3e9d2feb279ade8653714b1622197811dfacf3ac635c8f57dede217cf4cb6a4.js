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
var deal_service_1 = require("../service/deal.service");
var DealCommonComponent = (function () {
    function DealCommonComponent(dealService) {
        this.dealService = dealService;
    }
    DealCommonComponent.prototype.removeDeal = function (deal) {
    };
    return DealCommonComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DealCommonComponent.prototype, "deal", void 0);
DealCommonComponent = __decorate([
    core_1.Component({
        selector: 'deal-common',
        templateUrl: './deal-common.component.html',
        styleUrls: ['./deal-common.component.css']
    }),
    __metadata("design:paramtypes", [deal_service_1.DealService])
], DealCommonComponent);
exports.DealCommonComponent = DealCommonComponent;
//# sourceMappingURL=/home/lithos/Data/Lab/codash/angularSpa/ts-node-94a6b447580330f9f2b609422537b04239ff3a39df9137e32efd559f1a2935cb/e014dbc1805a7fa70749eabd049ddff97de6cab31c293c7016963abb3411f170/b3e9d2feb279ade8653714b1622197811dfacf3ac635c8f57dede217cf4cb6a4.js.map