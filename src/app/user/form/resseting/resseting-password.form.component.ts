import { Component, OnInit, OnDestroy} from '@angular/core';
import { NgForm }    from '@angular/forms';
import { Router } from '@angular/router';

import {  UserService } from '../../service/user.service';
import {  RessetingPasswordFormModel } from './resseting-password.form';

@Component({
  selector: 'resseting-form',
  templateUrl: './resseting-password.form.component.html',
})

export class RessetingPasswordFormComponent implements OnInit{
  loading: boolean;
  response : number;
  constructor(
        private userService : UserService,
        public router: Router
  ){}

  ngOnInit(){
    this.loading = false;
  }

  model = new RessetingPasswordFormModel(null);
  submitted = false;
  onSubmit() {

    this.loading = true;
    this.userService.getPasswordRequestReset(this.model.email).subscribe(
        data => {
              this.model = new RessetingPasswordFormModel(null);
              this.response = 200;
              this.loading = false;
          },
        error => {
          console.log(error);
          this.loading = false;
          this.response = error.status;
        },
        () =>{
          console.log("finish");
          this.loading = false;
        }
    );
  }

  get diagnostic() { return JSON.stringify(this.model); }

}
