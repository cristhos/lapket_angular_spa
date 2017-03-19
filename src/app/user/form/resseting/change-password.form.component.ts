import { Component, OnInit, OnDestroy} from '@angular/core';
import { NgForm }    from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';

import {  UserService } from '../../service/user.service';
import {  ChangePasswordFormModel } from './change-password.form';

@Component({
  selector: 'change-form',
  templateUrl: './change-password.form.component.html',
})

export class ChangePasswordFormComponent implements OnInit , OnDestroy{
  loading = false;
  authent = false;
  change : boolean;
  sub;
  tokenConfirmation;
  form_completed:boolean;
  public barLabel: string = "Sécurité du mot de passe:";
  
  constructor(
        private userService : UserService,
        public router: Router,
        private route : ActivatedRoute
  ){}

  ngOnInit(){
    if(localStorage.getItem('access_token')) this.authent = true;
    this.sub = this.route.params.subscribe(params => {
       this.model.tokenConfirmation = params['tokenConfirmation'];
    });
    this.checkForm();
  }
  ngOnDestroy(){
    if(this.sub != null) this.sub.unsubscribe();
  }

  model = new ChangePasswordFormModel(null,null,null);

  onSubmit() {
    this.loading = true;
    let user_id = localStorage.getItem('user_id');
    this.userService.putPassword(this.model).subscribe(
        data => {
          if(data.status == true){
            this.router.navigate(['/']);
            window.location.reload();
          }else{
            this.model = new ChangePasswordFormModel(this.model.password,null,this.model.tokenConfirmation);
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

  checkForm(){
    if(this.model.password != null && this.model.confirmePassword != null){
       if(this.model.confirmePassword == this.model.password){
          this.form_completed = true;
       }else{
          this.form_completed = false;
       } 
    }else{
      this.form_completed = false
    }
  }

  get diagnostic() { return JSON.stringify(this.model); }

}
