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
var ng2_file_upload_1 = require("ng2-file-upload");
var product_form_1 = require("./product.form");
var category_service_1 = require("../../category/service/category.service");
var product_service_1 = require("../service/product.service");
var api_url_service_1 = require("../../utils/api-url.service");
var image_resizer_service_1 = require("../../utils/image-resizer.service");
var ng2_img_cropper_1 = require("ng2-img-cropper");
var ProductFormComponent = (function () {
    function ProductFormComponent(categoryService, productService, router, route, apiUrlService, imageResizerService) {
        this.categoryService = categoryService;
        this.productService = productService;
        this.router = router;
        this.route = route;
        this.apiUrlService = apiUrlService;
        this.imageResizerService = imageResizerService;
        this.form_album = false;
        this.loading = false;
        this.formElement = false;
        this.uploader = new ng2_file_upload_1.FileUploader({ url: this.apiUrlService.getBaseUrl() + '/api/picture/pictures.json' });
    }
    ProductFormComponent.prototype.initCropper = function () {
        this.cropperSettings = new ng2_img_cropper_1.CropperSettings();
        this.cropperSettings.noFileInput = true;
        this.cropperSettings.width = 500;
        this.cropperSettings.height = 350;
        this.cropperSettings.croppedWidth = 500;
        this.cropperSettings.croppedHeight = 350;
        this.cropperSettings.width = 500;
        this.cropperSettings.height = 350;
        this.data = {};
    };
    ProductFormComponent.prototype.ngOnInit = function () {
        //$('.materialboxed').materialbox();
        this.getProductDetail();
        this.getCategory();
        this.initCropper();
    };
    ProductFormComponent.prototype.getCategory = function () {
        var _this = this;
        var limit = 25;
        this.categoryService.getCategory(limit).subscribe(function (data) { return _this.categories = data._embedded.items; }, function (error) { return console.log(error); }, function () { return console.log("finish"); });
    };
    ProductFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loading = true;
        var filecropper = [];
        filecropper.push(this.imageResizerService.dataURLtoFile(this.cropper.image.image, 'p_product.png'));
        this.uploader.addToQueue(filecropper);
        this.uploader.uploadAll();
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            var data = JSON.parse(response);
            _this.model.picture = data.id;
            if (_this.model.picture != null) {
                if (_this.product == null) {
                    _this.postProduct();
                }
                else {
                    console.log("ok");
                    _this.putProduct();
                }
            }
        };
        if (this.product != null)
            this.putProduct();
    };
    ProductFormComponent.prototype.postProduct = function () {
        var _this = this;
        this.productService.postProduct(this.model).subscribe(function (data) {
            _this.model = new product_form_1.ProductFormModel(null, '', 0, null);
            _this.product = data;
            _this.router.navigate(['/product', data.id]);
        }, function (error) { return console.log(error); }, function () { return console.log("finish"); });
        this.loading = false;
    };
    ProductFormComponent.prototype.putProduct = function () {
        var _this = this;
        this.productService.putProduct(this.model, this.product.id).subscribe(function (data) {
            _this.model = new product_form_1.ProductFormModel(null, '', 0, null);
            _this.product = data;
            _this.router.navigate(['/product', data.id]);
        }, function (error) { return console.log(error); }, function () { return console.log("finish"); });
        this.loading = false;
    };
    Object.defineProperty(ProductFormComponent.prototype, "diagnostic", {
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    ProductFormComponent.prototype.getProductDetail = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = +params['id'];
            if (id) {
                _this.productService.getProductDetail(id).subscribe(function (data) {
                    _this.product = data;
                    _this.model = new product_form_1.ProductFormModel(data.picture.id, data.description, data.price, data.category.id);
                    _this.file_src = data.picture.web_path;
                    _this.request = true;
                }, function (error) { return console.log(error); }, function () { return console.log("finish"); });
            }
            else {
                _this.model = new product_form_1.ProductFormModel(null, '', 0, null);
                _this.request = true;
            }
        });
    };
    ProductFormComponent.prototype.onHover = function () {
        if (this.formElement == false)
            this.formElement = true;
    };
    ProductFormComponent.prototype.showElement = function () {
        if (this.formElement == false)
            this.formElement = true;
    };
    ProductFormComponent.prototype.closeElement = function () {
        if (this.formElement == true)
            this.formElement = false;
    };
    ProductFormComponent.prototype.fileChangeListener = function ($event) {
        this.showElement();
        var image = new Image();
        var file = $event.target.files[0];
        var myReader = new FileReader();
        var that = this;
        myReader.onloadend = function (loadEvent) {
            image.src = loadEvent.target.result;
            that.cropper.setImage(image);
        };
        myReader.readAsDataURL(file);
    };
    return ProductFormComponent;
}());
__decorate([
    core_1.ViewChild('cropper', undefined),
    __metadata("design:type", ng2_img_cropper_1.ImageCropperComponent)
], ProductFormComponent.prototype, "cropper", void 0);
ProductFormComponent = __decorate([
    core_1.Component({
        selector: 'product-form',
        templateUrl: './product.form.component.html',
        styleUrls: ['./product.form.component.css']
    }),
    __metadata("design:paramtypes", [category_service_1.CategoryService,
        product_service_1.ProductService,
        router_1.Router,
        router_1.ActivatedRoute,
        api_url_service_1.ApiUrlService,
        image_resizer_service_1.ImageResizerService])
], ProductFormComponent);
exports.ProductFormComponent = ProductFormComponent;
//# sourceMappingURL=/home/lithos/Data/Lab/codash/angularSpa/ts-node-94a6b447580330f9f2b609422537b04239ff3a39df9137e32efd559f1a2935cb/834edd08fdcef33705bbb2ca91c36a3ed1c95e370b73f9f915f3dd170e866899/8639357517ba4c2003cac672856a786e9b7a05eca376b5403b439a6edd98c992.js.map