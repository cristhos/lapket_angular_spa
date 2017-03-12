import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm }    from '@angular/forms';
import { Router } from '@angular/router';
import {  UserService } from '../../service/user.service';
import {  LoginFormModel } from './login.form';

@Component({
  selector: 'login-form',
  templateUrl: './login.form.component.html',
})

export class LoginFormComponent {
  user : any;
  loading = false;
  authent = false;

  constructor(private userService : UserService, public router: Router) {}


  model = new LoginFormModel(null,null);
  submitted = false;
  onSubmit() {
    this.loading = true;
    this.userService.login(this.model).subscribe(
        data => {
          localStorage.clear();
          localStorage.setItem("authent" , "O");
          localStorage.setItem("access_token" , data.access_token);
          localStorage.setItem("expires_in" , data.expires_in);
          localStorage.setItem("token_type" , data.access_token);
          localStorage.setItem("refresh_token" , data.refresh_token);

          this.userService.isLoggedIn = true;
          if (this.userService.isLoggedIn) {
             let redirect = this.userService.redirectUrl ? this.userService.redirectUrl : '/';
             this.router.navigate([redirect]);
           }
          window.location.reload();
        },
        error => {
          this.loading = false;
          console.log(error);
          this.model = new LoginFormModel(this.model.username,"");
        },
        () =>{
              this.loading = false;
              console.log("finish")
        }
    );

  }
  active = true;

  get diagnostic() { return JSON.stringify(this.model)};

}
