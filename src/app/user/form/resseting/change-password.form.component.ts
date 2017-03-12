import { Component, OnInit, OnDestroy} from '@angular/core';
import { NgForm }    from '@angular/forms';
import { Router } from '@angular/router';

import {  UserService } from '../../service/user.service';
import {  ChangePasswordFormModel } from './change-password.form';

@Component({
  selector: 'change-form',
  templateUrl: './change-password.form.component.html',
})

export class ChangePasswordFormComponent implements OnInit{
  loading = false;
  authent = false;
  change : boolean;
  constructor(
        private userService : UserService,
        public router: Router
  ){}

  ngOnInit(){
    if(localStorage.getItem('access_token')) this.authent = true;
  }

  model = new ChangePasswordFormModel(null,null);

  onSubmit() {
    this.loading = true;
    let user_id = localStorage.getItem('user_id');
    this.userService.putPassword(this.model).subscribe(
        data => {
          if(data.status == true){
            this.router.navigate(['/']);
            window.location.reload();
          }else{
            this.model = new ChangePasswordFormModel(this.model.password,null);
          }
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
