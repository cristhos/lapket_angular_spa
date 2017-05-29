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
var user_service_1 = require("../../service/user.service");
var profile_form_1 = require("./profile.form");
var api_url_service_1 = require("../../../utils/api-url.service");
var image_resizer_service_1 = require("../../../utils/image-resizer.service");
var country_service_1 = require("../../../country/service/country.service");
var city_service_1 = require("../../../city/service/city.service");
var ng2_img_cropper_1 = require("ng2-img-cropper");
var ProfileFormComponent = (function () {
    function ProfileFormComponent(userService, router, imageResizerService, apiUrlService, countryService, cityService) {
        this.userService = userService;
        this.router = router;
        this.imageResizerService = imageResizerService;
        this.apiUrlService = apiUrlService;
        this.countryService = countryService;
        this.cityService = cityService;
        // file upluad
        this.uploader = new ng2_file_upload_1.FileUploader({ url: this.apiUrlService.getBaseUrl() + '/api/picture/pictures.json' });
        this.genders = [
            {
                'type': 'm',
                'name': "Homme"
            },
            {
                'type': 'f',
                'name': "Femme"
            },
        ];
        this.submitted = false;
        this.cropperSettings = new ng2_img_cropper_1.CropperSettings();
        this.cropperSettings.noFileInput = true;
        this.cropperSettings.width = 160;
        this.cropperSettings.height = 160;
        this.cropperSettings.croppedWidth = 160;
        this.cropperSettings.croppedHeight = 160;
        this.cropperSettings.width = 160;
        this.cropperSettings.height = 160;
        this.data = {};
    }
    ProfileFormComponent.prototype.ngOnInit = function () {
        this.getInitialUser();
        this.getCountries();
    };
    ProfileFormComponent.prototype.getInitialUser = function () {
        var _this = this;
        this.userService.getUserSession().subscribe(function (data) {
            _this.user = data;
            _this.hydrateModel(_this.user);
            _this.getCitiesCountry(_this.user.country.id);
        }, function (error) { return console.log(error); }, function () { return console.log("finish"); });
    };
    ProfileFormComponent.prototype.hydrateModel = function (user) {
        this.model = new profile_form_1.ProfileFormModel(null, user.username, user.email, user.full_name, user.country.id, user.city.id, user.gender, user.language, user.phone_number, user.birthday, user.description, user.web_site, user.is_mail_notify);
    };
    ProfileFormComponent.prototype.onSubmit = function () {
        var _this = this;
        var is_upload = false;
        if (this.cropper.image.image != null) {
            var filecropper = [];
            filecropper.push(this.imageResizerService.dataURLtoFile(this.cropper.image.image, 'p_profile.png'));
            this.uploader.addToQueue(filecropper);
            this.uploader.uploadAll();
            this.uploader.onCompleteItem = function (item, response, status, headers) {
                var data = JSON.parse(response);
                _this.model.picture = data.id;
                if (_this.model.picture != null) {
                    is_upload = true;
                    _this.putUser();
                }
            };
        }
        if (is_upload == false)
            this.putUser();
    };
    ProfileFormComponent.prototype.putUser = function () {
        var _this = this;
        this.userService.putUser(this.model).subscribe(function (data) {
            _this.router.navigate(['user/', data.username]);
        }, function (error) {
            console.log(error);
            _this.getInitialUser();
        }, function () { return console.log("finish"); });
        this.submitted = true;
    };
    Object.defineProperty(ProfileFormComponent.prototype, "diagnostic", {
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    ProfileFormComponent.prototype.fileChange = function ($event) {
        this.readFiles($event.target.files);
    };
    ProfileFormComponent.prototype.readFiles = function (files, index) {
        var _this = this;
        if (index === void 0) { index = 0; }
        var reader = new FileReader();
        if (index in files) {
            this.imageResizerService.readFile(files[index], reader, function (result) {
                var img = document.createElement("img");
                img.src = result;
                _this.imageResizerService.resize(img, 96, 96, function (resized_img) {
                    _this.file_src = resized_img;
                });
            });
        }
    };
    ProfileFormComponent.prototype.getCountries = function () {
        var _this = this;
        this.countryService.getCountries().subscribe(function (data) {
            _this.countries = data._embedded.items;
        }, function (error) {
            console.log(error);
        }, function () {
            console.log("finish");
        });
    };
    ProfileFormComponent.prototype.getCitiesCountry = function (country_id) {
        var _this = this;
        this.cityService.getCitiesCountry(country_id).subscribe(function (data) {
            _this.cities = data._embedded.items;
        }, function (error) {
            console.log(error);
        }, function () {
            console.log("finish");
        });
    };
    ProfileFormComponent.prototype.onSelect = function ($event) {
        this.getCitiesCountry($event.target.value);
    };
    ProfileFormComponent.prototype.fileChangeListener = function ($event) {
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
    return ProfileFormComponent;
}());
__decorate([
    core_1.ViewChild('cropper', undefined),
    __metadata("design:type", ng2_img_cropper_1.ImageCropperComponent)
], ProfileFormComponent.prototype, "cropper", void 0);
ProfileFormComponent = __decorate([
    core_1.Component({
        selector: 'profile-form',
        templateUrl: './profile.form.component.html',
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        router_1.Router,
        image_resizer_service_1.ImageResizerService,
        api_url_service_1.ApiUrlService,
        country_service_1.CountryService,
        city_service_1.CityService])
], ProfileFormComponent);
exports.ProfileFormComponent = ProfileFormComponent;
//# sourceMappingURL=/home/lithos/Data/Lab/codash/angularSpa/ts-node-94a6b447580330f9f2b609422537b04239ff3a39df9137e32efd559f1a2935cb/e014dbc1805a7fa70749eabd049ddff97de6cab31c293c7016963abb3411f170/23c0780d2a2bccfb6c2472f060f5c006e6a5c57bc1c657a297c59d0d68173b1c.js.map