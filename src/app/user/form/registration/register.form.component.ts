import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm }    from '@angular/forms';
import { Router } from '@angular/router';

import {  UserService } from '../../service/user.service';
import {  CategoryService } from '../../../category/service/category.service';
import {  RegisterFormModel } from './register.form';

@Component({
  selector: 'register-form',
  templateUrl: './register.form.component.html',
})

export class RegisterFormComponent {
  user : Object;
  loading = false;
  public barLabel: string = "Sécurité du mot de passe:";

  constructor(private userService : UserService, public router: Router) {}

  model = new RegisterFormModel(null,null);
  submitted = false;
  response ;

  onSubmit() {
    this.loading = true;
    this.userService.register(this.model).subscribe(
        data => {
          this.response = 200;
          this.userService.login(data).subscribe(
              data => {
                localStorage.clear();
                localStorage.setItem("authent" , "O");
                localStorage.setItem("access_token" , data.access_token);
                localStorage.setItem("expires_in" , data.expires_in);
                localStorage.setItem("token_type" , data.access_token);
                localStorage.setItem("refresh_token" , data.refresh_token);
                this.router.navigate(['/']);
                window.location.reload();
              },
              error => {
                this.router.navigate(['/login']);
                console.log(error);
                this.loading = false;
              },
              () => {
                this.loading = false;
                console.log("finish");
              }
          );
        },
        error => {
          this.response = error.status;
          console.log(error);
          this.model = new RegisterFormModel(this.model.email,"");
          this.loading = false;
        },
        () => {
          console.log("finish");
          this.loading = false;
        }
    );
    this.submitted = true;

  }

  get diagnostic() { return JSON.stringify(this.model); }
}
