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
var Observable_1 = require("rxjs/Observable");
var deal_service_1 = require("../../deal/service/deal.service");
var DealMessageComponent = (function () {
    function DealMessageComponent(dealService, route) {
        this.dealService = dealService;
        this.route = route;
        this.dealMessages = [];
        this.dealConversations = [];
        this.timerSubLoad = false;
    }
    DealMessageComponent.prototype.ngOnInit = function () {
        this.page = 1;
        this.pages = 2;
        this.conversationPage = 1;
        this.conversationPages = 2;
        this.getDealMyConversations();
        this.getInitMessages();
    };
    DealMessageComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
        this.timerSub.unsubscribe();
    };
    DealMessageComponent.prototype.getInitMessages = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var conversation_id = +params['conversation_id'];
            _this.getLastDealMessages(conversation_id);
        });
        this.scrollMessageDown();
    };
    //get PaginateMessage
    DealMessageComponent.prototype.getDealMessages = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var conversation_id = +params['conversation_id'];
            if (_this.timerSubLoad)
                _this.timerSub.unsubscribe();
            _this.getDealConversation(conversation_id);
            if (_this.page <= _this.pages) {
                _this.dealService.getDealMessages(conversation_id, _this.page).subscribe(function (data) {
                    _this.scrollMessageUp();
                    _this.checkMessages(data, 'old');
                }, function (error) {
                    console.log(error);
                }, function () {
                    console.log("finish");
                });
            }
        });
    };
    //get last message in my api page=1 order by desc
    DealMessageComponent.prototype.getLastDealMessages = function (conversation_id) {
        var _this = this;
        if (this.timerSubLoad)
            this.timerSub.unsubscribe();
        this.getDealConversation(conversation_id);
        this.dealService.getDealMessages(conversation_id, 1).subscribe(function (data) {
            _this.dealMessages = [];
            _this.checkMessages(data, "last");
            _this.subscribeToData(conversation_id);
        }, function (error) {
            console.log(error);
        }, function () {
            console.log("finish");
        });
    };
    //add message if not exist in array() call realtime subscribe
    DealMessageComponent.prototype.checkMessages = function (data, checkType) {
        this.pages = data.pages;
        for (var i = 0; i < data.limit; i++) {
            if (data._embedded.items[i]) {
                var pass = true;
                if (this.dealMessages.length > 0) {
                    for (var j = 0; j < this.dealMessages.length; j++) {
                        if (data._embedded.items[i].id == this.dealMessages[j].id) {
                            pass = false;
                            break;
                        }
                    }
                }
                if (pass == true) {
                    if (checkType == "last") {
                        this.dealMessages.unshift(data._embedded.items[i]);
                    }
                    else {
                        this.dealMessages.unshift(data._embedded.items[i]);
                    }
                }
                this.page = data.page + 1;
            }
        }
    };
    DealMessageComponent.prototype.scrollMessageDown = function () {
        var d = document, mla;
        mla = d.getElementById('message-list-auto');
        mla.scrollTop = mla.scrollHeight;
    };
    DealMessageComponent.prototype.scrollMessageUp = function () {
        var d = document, mla;
        mla = d.getElementById('message-list-auto');
        mla.scrollTop = 0;
    };
    DealMessageComponent.prototype.getDealConversation = function (conversation_id) {
        var _this = this;
        this.dealService.getDealConversation(conversation_id).subscribe(function (data) {
            _this.dealConversation = data;
        }, function (error) {
            console.log(error);
        }, function () {
            console.log("finish");
        });
    };
    DealMessageComponent.prototype.getDealMyConversations = function () {
        var _this = this;
        if (this.conversationPage <= this.conversationPages) {
            this.dealService.getMyDealConversations(this.conversationPage).subscribe(function (data) {
                _this.conversationPages = data.pages;
                for (var i = 0; i <= data.limit; i++) {
                    if (data._embedded.items[i]) {
                        _this.dealConversations.push(data._embedded.items[i]);
                        _this.conversationPage = data.page + 1;
                    }
                }
            }, function (error) { return console.log(error); }, function () { return console.log("finish"); });
        }
    };
    DealMessageComponent.prototype.subscribeToData = function (conversation_id) {
        var _this = this;
        this.timerSub = Observable_1.Observable.timer(5000).subscribe(function () {
            _this.timerSubLoad = true;
            _this.page = 1;
            _this.pages = 2;
            _this.getLastDealMessages(conversation_id);
        });
    };
    //get last deal message
    DealMessageComponent.prototype.onScrollUpMessages = function () {
        this.getDealMessages();
    };
    DealMessageComponent.prototype.onScrollDownConversations = function () {
        this.getDealMyConversations();
    };
    return DealMessageComponent;
}());
DealMessageComponent = __decorate([
    core_1.Component({
        selector: 'deal-message',
        templateUrl: './deal-message.component.html',
        styles: ["\n      #message-list-auto{\n        height: 20rem;\n        overflow-y: scroll;\n      }\n      .conversation-list-auto{\n        height: 35rem;\n        overflow-y: scroll;\n      }\n  "],
    }),
    __metadata("design:paramtypes", [deal_service_1.DealService, router_1.ActivatedRoute])
], DealMessageComponent);
exports.DealMessageComponent = DealMessageComponent;
//# sourceMappingURL=/home/lithos/Data/Lab/codash/angularSpa/ts-node-94a6b447580330f9f2b609422537b04239ff3a39df9137e32efd559f1a2935cb/e014dbc1805a7fa70749eabd049ddff97de6cab31c293c7016963abb3411f170/f3c02c2e03f07d4acf8c1b8d975951205a24c0831bfec444d7e3fcbfc2a1d226.js.map