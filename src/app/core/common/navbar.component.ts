import { Component, Input, ChangeDetectionStrategy} from '@angular/core';
import { UserService } from '../../user/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  changeDetection:	ChangeDetectionStrategy.OnPush
})

export class NavbarComponent{
  @Input() user : Object ;
  constructor(public router: Router, private userService : UserService) {}
  logout(){
    this.userService.logout().subscribe(
            data => {
                 localStorage.clear();
                 localStorage.setItem("authent" , "N");
                 this.router.navigateByUrl('/');
                 window.location.reload();
            },
            error =>{
              console.log(error)
            },
            () =>{
              console.log("finish")
            } 
        );

  }

  reload(){
    this.router.navigate(['/']);
    window.location.reload();
  }
}
