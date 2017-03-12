import { Component, Input,ChangeDetectionStrategy} from '@angular/core';
import { UserService } from '../../user/service/user.service';
import { Router } from '@angular/router';

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
  `],
  changeDetection:	ChangeDetectionStrategy.OnPush
})

export class NavbarComponent {
  @Input() user : Object ;
  constructor(public router: Router, private userService : UserService) {}
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
