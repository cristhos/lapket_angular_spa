import { Component, Input,ChangeDetectionStrategy} from '@angular/core';
import { UserService } from '../../user/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'side-nav',
  template: require('./side-nav.component.html'),
  styles: [`

  `],
  changeDetection:	ChangeDetectionStrategy.OnPush
})

export class SideNavComponent {
  @Input() user : Object ;
  constructor(public router: Router) {}
  logout(){
    localStorage.clear();
    localStorage.setItem("authent" , "N");
    this.router.navigateByUrl('/');
    window.location.reload();
  }

  reload(){
    this.router.navigate(['/']);
    window.location.reload();
  }
}
