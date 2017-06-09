import { Component, OnInit, OnDestroy} from '@angular/core';
import { NgForm }    from '@angular/forms';
import { Router } from '@angular/router';

import {  UserService } from '../../service/user.service';
import {  RegisterFinalFormModel } from './register-final.form';
import {  CountryService } from '../../../country/service/country.service';
import {  CityService } from '../../../city/service/city.service';

@Component({
  selector: 'register-final-form',
  templateUrl: './register-final.form.component.html',
})

export class RegisterFinalFormComponent implements OnInit{
  user ;
  categories ;
  countries;
  cities;
  loading = false;
  form_completed : boolean;
  countries_loading : boolean;
  cities_loading : boolean;
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
  constructor(
        private userService : UserService,
        private countryService : CountryService,
        private cityService : CityService,
        public router: Router
  ){}

  ngOnInit()
  {
    this.checkForm();
    this.getCountries();
  }

  model = new RegisterFinalFormModel(null,null,null,null,null);
  submitted = false;
  onSubmit() {
    this.loading = true;
    this.userService.putUser(this.model).subscribe(
        data => {
          this.router.navigate(['/']);
          window.location.reload();
        },
        error => {
          console.log(error);
          this.model = new RegisterFinalFormModel(this.model.fullName,this.model.country,this.model.city,this.model.gender,this.model.phone_number);
        },
        () =>{
          console.log("finish");
        }
    );
    this.loading = false;
  }

  get diagnostic() { return JSON.stringify(this.model); }

  getCountries (){
    this.countries_loading = true;
    this.countryService.getCountries().subscribe(
        data => {
          this.countries = data._embedded.items;
          this.countries_loading = false;
        },
        error => {
          console.log(error);
          this.countries_loading = false;
        },
        () =>{
          console.log("finish");
          this.countries_loading = false;
        }
    );
    this.checkForm();
  }

  getCitiesCountry(country_id)
  {
    this.cities_loading = true;
      this.cityService.getCitiesCountry(country_id).subscribe(
        data => {
          this.cities = data._embedded.items;
          this.cities_loading = false;
          this.resolveCountry();
        },
        error => {
          console.log(error);
          this.cities_loading = false;
        },
        () =>{
          console.log("finish");
          this.cities_loading = false;
        }
    );
    this.checkForm();
  }

  onSelect($event)
  {
    this.getCitiesCountry($event.target.value);
    this.checkForm();
  }

  onSelectCity($event)
  {
    this.checkForm();
  }

  checkForm(){
    if(this.model.fullName != null && this.model.gender != null && this.model.country != null && this.model.city != null && this.model.phone_number != null ){
      this.form_completed = true;
    }else{
      this.form_completed = false;
    }
  }

  resolveCountry(){
    //resolve mobile loading 
    if(this.model.country != null){
      this.getCitiesCountry(this.model.country);
    }
  }

}
