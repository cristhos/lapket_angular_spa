import { Component, OnInit, OnDestroy} from '@angular/core';
import { NgForm }    from '@angular/forms';
import { Router } from '@angular/router';

import {  UserService } from '../../service/user.service';
import {  RessetingPasswordFormModel } from './resseting-password.form';

@Component({
  selector: 'resseting-form',
  template: require('./resseting-password.form.component.html'),
})

export class RessetingPasswordFormComponent {
  loading: boolean;
  constructor(
        private userService : UserService,
        public router: Router
  ){}

  model = new RessetingPasswordFormModel(null);
  submitted = false;
  onSubmit() {

    this.loading = true;

    this.userService.getPasswordRequestReset(this.model.email).subscribe(
        data => {
              this.model = new RessetingPasswordFormModel(null);
          },
        error => {
          console.log(error);
        },
        () =>{
          console.log("finish");
        }
    );

    this.loading = false;

  }

  get diagnostic() { return JSON.stringify(this.model); }

}
