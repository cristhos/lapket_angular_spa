import { Component, OnInit, OnDestroy} from '@angular/core';
import { NgForm }    from '@angular/forms';
import { Router } from '@angular/router';

import {  UserService } from '../../service/user.service';
import {  RegisterFinalFormModel } from './register-final.form';
import {  CountryService } from '../../../country/service/country.service';
import {  CityService } from '../../../city/service/city.service';

@Component({
  selector: 'register-final-form',
  template: require('./register-final.form.component.html'),
})

export class RegisterFinalFormComponent implements OnInit{
  user ;
  categories ;
  countries;
  cities;
  loading = false;
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
          this.model = new RegisterFinalFormModel(this.model.fullName,this.model.country,this.model.city,this.model.gender,this.model.categories);
        },
        () =>{
          console.log("finish");
        }
    );
    this.loading = false;
  }

  get diagnostic() { return JSON.stringify(this.model); }

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
