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
var deal_form_1 = require("./deal.form");
var deal_service_1 = require("../../deal/service/deal.service");
var DealFormComponent = (function () {
    function DealFormComponent(dealService) {
        this.dealService = dealService;
        this.loading = false;
        this.model = new deal_form_1.DealFormModel('');
    }
    DealFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loading = true;
        this.dealService.postDealMessage(this.dealConversation.id, this.model).subscribe(function (data) {
            _this.posted = data;
            _this.model = new deal_form_1.DealFormModel('');
        }, function (error) {
            _this.model = new deal_form_1.DealFormModel(_this.model.content);
            console.log(error);
        }, function () {
            _this.loading = false;
            console.log("finish");
        });
    };
    Object.defineProperty(DealFormComponent.prototype, "diagnostic", {
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    return DealFormComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DealFormComponent.prototype, "dealConversation", void 0);
DealFormComponent = __decorate([
    core_1.Component({
        selector: 'deal-form',
        templateUrl: './deal.form.component.html',
        styles: ["\n\n  "]
    }),
    __metadata("design:paramtypes", [deal_service_1.DealService])
], DealFormComponent);
exports.DealFormComponent = DealFormComponent;
//# sourceMappingURL=/home/lithos/Data/Lab/codash/angularSpa/ts-node-94a6b447580330f9f2b609422537b04239ff3a39df9137e32efd559f1a2935cb/e014dbc1805a7fa70749eabd049ddff97de6cab31c293c7016963abb3411f170/955a5e7110acb009c4f5bc145185ed640209bdb8885dca8ed279986f31975b5e.js.map