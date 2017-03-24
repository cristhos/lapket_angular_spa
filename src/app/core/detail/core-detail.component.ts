import { Component , OnInit } from '@angular/core';
import { UserService } from '../../user/service/user.service';

@Component({
  selector: 'core',
  templateUrl: './core-detail.component.html',
  styleUrls: ['./core-detail.component.css'],
})

export class CoreDetailComponent implements OnInit{
  authent : boolean;
  request : boolean;
  constructor(private userService : UserService) {}
  ngOnInit(){
     this.checkLogin(); 
  }
  checkLogin(){
			if (localStorage.getItem("access_token")) {
        this.authent = true;
      }else {
        this.authent = false;
      }
	}
  checkRequest(){
    if (localStorage.getItem("request")) {
        this.request = true;
      }else{
        this.request = false;
      }
  }
}
