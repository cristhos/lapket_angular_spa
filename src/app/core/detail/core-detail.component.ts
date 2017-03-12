//interne
import { Component , OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../../user/service/user.service';
import	{Observable}	from	'rxjs/Observable';

@Component({
  selector: 'core',
  templateUrl: './core-detail.component.html',
  styleUrls: ['./core-detail.component.css'],
})

export class CoreDetailComponent implements OnInit{
  user :  Object;
  authent : boolean;
  constructor(private userService : UserService) {}
  ngOnInit(){
    this.getInitialUser();
  }

  public getInitialUser(){
        this.authent = true;
        this.userService.getUserSession().subscribe(
            data =>{
              this.user = data;
            },
            error => {
                console.log(error);
                this.authent = false;
                //localStorage.clear();
                //localStorage.setItem("authent" , "N");
            },
            () => console.log("finish")
        );
  }
}
