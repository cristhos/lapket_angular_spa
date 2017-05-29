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
                icon: "fa fa-facebook blue-text",
            },
            {
                name: "Google plus",
                url: "https://plus.google.com/u/0/b/112697887058690525875/112697887058690525875",
                icon: "fa fa-google-plus red-text",
            },
            {
                name: "Twitter",
                url: "https://twitter.com/lapketofficial",
                icon: "fa fa-twitter blue-text",
            },
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
//# sourceMappingURL=/home/lithos/Data/Lab/codash/angularSpa/ts-node-94a6b447580330f9f2b609422537b04239ff3a39df9137e32efd559f1a2935cb/834edd08fdcef33705bbb2ca91c36a3ed1c95e370b73f9f915f3dd170e866899/79abfa5c26eec42e9be70ab498b95ed1c896646c4797e3e4336c83f9bf9e93c0.js.map