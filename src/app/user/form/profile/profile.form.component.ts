import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm }    from '@angular/forms';
import { Router } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';

import {  UserService } from '../../service/user.service';
import {  ProfileFormModel } from './profile.form';
import { ApiUrlService } from '../../../utils/api-url.service';
import { ImageResizerService } from '../../../utils/image-resizer.service';
import {  CountryService } from '../../../country/service/country.service';
import {  CityService } from '../../../city/service/city.service';

@Component({
  selector: 'profile-form',
  template: require('./profile.form.component.html'),
})

export class ProfileFormComponent implements OnInit{
  user : any;
  model ;
  picture_id:number;
  file_src;
  categories;
  countries;
  cities;
  genders = [
            {
              'type':'m',
              'name':"Homme"
            },
            {
              'type':'f',
              'name':"Femme"
            },
           ];
  constructor(private userService : UserService, 
              public router: Router, 
              private imageResizerService : ImageResizerService,
              private apiUrlService : ApiUrlService,
              private countryService : CountryService,
              private cityService : CityService,
              ) {}

  ngOnInit(){
    this.getInitialUser();
    this.getCountries();
  }

  submitted = false;

  getInitialUser(){
    this.userService.getUserSession().subscribe(
        data =>{
          this.user = data;
          this.hydrateModel(this.user);
          this.getCitiesCountry(this.user.country.id);
        },
        error => console.log(error),
        () => console.log("finish")
    );
  }

  hydrateModel(user){
    this.model = new ProfileFormModel(
                  null,
                  user.username,
                  user.email,
                  user.full_name,
                  user.country.id,
                  user.city.id,
                  user.gender,
                  user.language,
                  user.phone_number,
                  user.birthday,
                  user.description,
                  user.web_site,
                  user.is_mail_notify
                  );
   }


  onSubmit() {
    let is_upload = false;
    this.uploader.uploadAll();
      this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
            let data = JSON.parse(response);
            this.model.picture = data.id;

           if(this.model.picture != null){
             is_upload = true;
             this.putUser();
           }
      };
    if(is_upload == false) this.putUser();
  }

  putUser(){
    this.userService.putUser(this.model).subscribe(
        data => {
          this.router.navigate(['user/',data.username]);
        },
        error => {
          console.log(error);
          this.getInitialUser();
        },
        () => console.log("finish")
    );
    this.submitted = true;
  }
  get diagnostic() { return JSON.stringify(this.model); }


  // file upluad
  public uploader:FileUploader = new FileUploader({url:this.apiUrlService.getBaseUrl()+'/api/picture/pictures.json'});
  
  fileChange($event){
     this.readFiles($event.target.files);
  }

  readFiles(files, index=0){
    let reader = new FileReader();

    if (index in files){  
        this.imageResizerService.readFile(files[index], reader, (result) =>{

        let img = document.createElement("img");
        img.src = result;

        this.imageResizerService.resize(img, 300, 500, (resized_img)=>{ 
          this.file_src = resized_img;
        });
      });
    }
  }

  getCountries (){
    this.countryService.getCountries().subscribe(
        data => {
          this.countries = data._embedded.items;
        },
        error => {
          console.log(error);
        },
        () =>{
          console.log("finish");
        }
    );
  }

  getCitiesCountry(country_id)
  {
      this.cityService.getCitiesCountry(country_id).subscribe(
        data => {
          this.cities = data._embedded.items;
        },
        error => {
          console.log(error);
        },
        () =>{
          console.log("finish");
        }
    );
  }

  onSelect($event)
  {
    this.getCitiesCountry($event.target.value);
  }
}
