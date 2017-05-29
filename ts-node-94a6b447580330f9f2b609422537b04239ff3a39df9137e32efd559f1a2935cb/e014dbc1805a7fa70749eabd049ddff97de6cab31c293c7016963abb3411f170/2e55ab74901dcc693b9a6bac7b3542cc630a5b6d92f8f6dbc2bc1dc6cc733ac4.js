"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ImageResizerService = (function () {
    function ImageResizerService() {
    }
    ImageResizerService.prototype.readFile = function (file, reader, callback) {
        reader.onload = function () {
            callback(reader.result);
        };
        reader.readAsDataURL(file);
    };
    ImageResizerService.prototype.resize = function (img, MAX_WIDTH, MAX_HEIGHT, callback) {
        if (MAX_WIDTH === void 0) { MAX_WIDTH = 300; }
        if (MAX_HEIGHT === void 0) { MAX_HEIGHT = 500; }
        return img.onload = function () {
            var width = img.width;
            var height = img.height;
            // Set the WxH to fit the Max values (but maintain proportions)
            if (width > height) {
                if (width > MAX_WIDTH) {
                    height *= MAX_WIDTH / width;
                    width = MAX_WIDTH;
                }
            }
            else {
                if (height > MAX_HEIGHT) {
                    width *= MAX_HEIGHT / height;
                    height = MAX_HEIGHT;
                }
            }
            var canvas = document.createElement("canvas");
            canvas.width = width;
            canvas.height = height;
            var ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, width, height);
            var resized_img = canvas.toDataURL('image/jpeg');
            callback(resized_img);
        };
    };
    ImageResizerService.prototype.dataURLtoFile = function (dataurl, filename) {
        var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1], bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, { type: mime });
    };
    return ImageResizerService;
}());
ImageResizerService = __decorate([
    core_1.Injectable()
], ImageResizerService);
exports.ImageResizerService = ImageResizerService;
//# sourceMappingURL=/home/lithos/Data/Lab/codash/angularSpa/ts-node-94a6b447580330f9f2b609422537b04239ff3a39df9137e32efd559f1a2935cb/e014dbc1805a7fa70749eabd049ddff97de6cab31c293c7016963abb3411f170/2e55ab74901dcc693b9a6bac7b3542cc630a5b6d92f8f6dbc2bc1dc6cc733ac4.js.map