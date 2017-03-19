import { Component, Input, OnInit, ChangeDetectionStrategy} from '@angular/core';
import { UserService } from '../../user/service/user.service';
import { Router } from '@angular/router';

declare var $: any

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styles: [`

  .header-search-wrapper {
    display: inline-block;
  }

  #userdrop {
    min-width: 160px;
  }
  .btn-floating i {
      color: #2C90BA;
    }
  `],
  changeDetection:	ChangeDetectionStrategy.OnPush
})

export class NavbarComponent implements OnInit{
  @Input() user : Object ;
  constructor(public router: Router, private userService : UserService) {}
  ngOnInit(){
  
  }
  logout(){
    this.userService.logout();
    this.router.navigateByUrl('/');
    window.location.reload();
  }

  reload(){
    this.router.navigate(['/']);
    window.location.reload();
  }
}
