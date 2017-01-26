import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'user-mini-detail',
  template: require('./user-mini-detail.component.html'),
})

export class UserMiniDetailComponent implements OnInit{
  user : Object;
  constructor(private userService : UserService){}
  ngOnInit(){
    this.getInitialUser();
  }
  getInitialUser(){
    this.userService.getUserSession().subscribe(
        data => this.user = data,
        error => console.log(error),
        () => console.log("finish")
    );
  }
}
