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
var product_service_1 = require("../../product/service/product.service");
var deal_service_1 = require("../../deal/service/deal.service");
var ProductCommonComponent = (function () {
    function ProductCommonComponent(productService, dealService, router) {
        this.productService = productService;
        this.dealService = dealService;
        this.router = router;
        //lazy-image
        this.defaultImage = '../../../assets/images/loader1.gif';
        this.offset = 100;
        this.dealform = false;
        this.modalActions = new core_1.EventEmitter();
    }
    ProductCommonComponent.prototype.ngOnInit = function () {
        this.product_share_link = window.location.origin + this.router.createUrlTree(['/product', this.product.id]);
    };
    ProductCommonComponent.prototype.ngAfterViewInit = function () {
        $('.materialboxed').materialbox();
        $('.dropdown-p-' + this.product.id).dropdown({
            belowOrigin: true,
            alignment: 'right' // Displays dropdown with edge aligned to the left of button
        });
    };
    ProductCommonComponent.prototype.postProductVote = function (product_id) {
        var _this = this;
        if (this.buttonGuard() == true) {
            this.product.is_voted = true;
            var nb_vote_transit_1 = this.product.nb_votes;
            this.product.nb_votes = nb_vote_transit_1 + 1;
            this.productService.postProductVote(product_id).subscribe(function (data) {
                //illusion optique
            }, function (error) {
                console.log(error);
                _this.product.is_voted = true;
                _this.product.nb_votes = nb_vote_transit_1;
            }, function () { return console.log('finish'); });
        }
        else {
            this.buttonGuardRedirect();
        }
    };
    ProductCommonComponent.prototype.removeProductVote = function (product_id) {
        var _this = this;
        if (this.buttonGuard() == true) {
            this.product.is_voted = false;
            var nb_votes_transit_1 = this.product.nb_votes;
            this.product.nb_votes = nb_votes_transit_1 - 1;
            this.productService.deleteProductVote(product_id).subscribe(function (data) {
                //illusion optique
            }, function (error) {
                console.log(error);
                _this.product.is_voted = true;
                _this.product.nb_votes = nb_votes_transit_1;
            }, function () { return console.log("finish"); });
        }
        else {
            this.buttonGuardRedirect();
        }
    };
    ProductCommonComponent.prototype.deleteProduct = function (product_id) {
        var _this = this;
        if (window.confirm('Etes vous sûr de supprimer ?')) {
            this.productService.removeProduct(product_id).subscribe(function (data) {
                _this.router.navigateByUrl('/');
            }, function (error) { return console.log(error); }, function () { return console.log("finish"); });
        }
    };
    ProductCommonComponent.prototype.expiredProduct = function (product_id) {
        var _this = this;
        if (window.confirm('Le stock est-il vraiment vide ?')) {
            this.productService.expiredProduct(product_id).subscribe(function (data) {
                _this.product.is_expired = data.is_expired;
            }, function (error) { return console.log(error); }, function () { return console.log("finish"); });
        }
    };
    ProductCommonComponent.prototype.beginConversation = function (product_id) {
        var _this = this;
        if (this.buttonGuard() == true) {
            if (window.confirm('Etes vous sur de vouloir demarer une conversation')) {
                this.dealService.postConversation(product_id).subscribe(function (data) {
                    _this.router.navigateByUrl('deal/message/' + data.id);
                }, function (error) { return console.log(error); }, function () { return console.log("finish"); });
            }
        }
        else {
            this.buttonGuardRedirect();
        }
    };
    ProductCommonComponent.prototype.desactiveNotification = function (product_id) {
        var _this = this;
        if (window.confirm('Etes vous sur de vouloir desactiver les notifications vous pouvez ratez une nouvelle')) {
            this.productService.desactiveNotification(product_id).subscribe(function (data) {
                _this.product.is_notify = false;
            }, function (error) { return console.log(error); }, function () { return console.log("finish"); });
        }
    };
    ProductCommonComponent.prototype.activeNotification = function (product_id) {
        var _this = this;
        if (window.confirm('Ce produit genere des notifications a chaque nouvelle activé voulez vous activer ?')) {
            this.productService.desactiveNotification(product_id).subscribe(function (data) {
                _this.product.is_notify = true;
            }, function (error) { return console.log(error); }, function () { return console.log("finish"); });
        }
    };
    ProductCommonComponent.prototype.buttonGuard = function () {
        if (localStorage.getItem("access_token")) {
            return true;
        }
        else {
            return false;
        }
    };
    ProductCommonComponent.prototype.buttonGuardRedirect = function () {
        if (window.confirm('Voulez-vous vous connecter pour effectuer cette action ?')) {
            this.router.navigateByUrl('/login');
        }
    };
    return ProductCommonComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ProductCommonComponent.prototype, "product", void 0);
ProductCommonComponent = __decorate([
    core_1.Component({
        selector: 'product-common',
        templateUrl: './product-common.component.html',
        styleUrls: ['./product-common.component.css']
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService,
        deal_service_1.DealService,
        router_1.Router])
], ProductCommonComponent);
exports.ProductCommonComponent = ProductCommonComponent;
//# sourceMappingURL=/home/lithos/Data/Lab/codash/angularSpa/ts-node-94a6b447580330f9f2b609422537b04239ff3a39df9137e32efd559f1a2935cb/e014dbc1805a7fa70749eabd049ddff97de6cab31c293c7016963abb3411f170/0a61a408a4428cd30be21a862a748afb5c54688b7db2bd33530ae93264f7a619.js.map