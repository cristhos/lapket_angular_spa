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
  constructor(
        private userService : UserService,
        public router: Router
  ){}

  model = new RessetingPasswordFormModel(null);
  submitted = false;
  onSubmit() {
    this.submitted = true;
  }

  get diagnostic() { return JSON.stringify(this.model); }

}
