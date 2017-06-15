"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SocialMediaComponent = (function () {
    function SocialMediaComponent() {
        this.social_medias = [
            {
                name: "Facebook",
                url: "https://www.facebook.com/LapketOfficial",
                icon: "fa fa-facebook ",
                class: "facebook-btn"
            },
            {
                name: "Google plus",
                url: "https://plus.google.com/u/0/b/112697887058690525875/112697887058690525875",
                icon: "fa fa-google-plus ",
                class: "googleplus-btn"
            },
            {
                name: "Twitter",
                url: "https://twitter.com/lapketofficial",
                icon: "fa fa-twitter",
                class: "twitter-btn"
            }
        ];
    }
    return SocialMediaComponent;
}());
SocialMediaComponent = __decorate([
    core_1.Component({
        selector: 'site-social-media',
        templateUrl: './social-media.component.html',
        styleUrls: ['./social-media.component.css']
    })
], SocialMediaComponent);
exports.SocialMediaComponent = SocialMediaComponent;
//# sourceMappingURL=/home/lithos/Data/Lab/codash/angularSpa/ts-node-94a6b447580330f9f2b609422537b04239ff3a39df9137e32efd559f1a2935cb/d3e27bfe51aea66a52b66f03f6ab10277b7cce60278332573a1495c184e03846/24b0bd3323a4b5c160ebcd3d8d90f9f90b3c314372176e2be9af7b8732a03307.js.map