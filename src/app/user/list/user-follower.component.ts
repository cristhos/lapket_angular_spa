import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserService } from '../service/user.service';

@Component({
  selector: 'user-follower',
  template: require('./user-follower.component.html'),
})

export class UserFollowerComponent implements OnInit, OnDestroy{
  user_detail ;
  follows ;
  sub :any;
  constructor(
    private userService : UserService,
    private route: ActivatedRoute
  ) {
  }
  ngOnInit() {
    this.getUserDetail();
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  getUserDetail()
  {
    this.sub = this.route.params.subscribe(params => {
      let username = params['username'];
      this.userService.getUser(username).subscribe(
          data => this.user_detail = data,
          error => console.log(error),
          () => console.log("finish")
      );
      this.getFollowerAuthor(username);
    });
  }
  getFollowerAuthor(username : any)
  {
    this.userService.getFollowerAuthor(username).subscribe(
        data => this.follows = data._embedded.items,
        error => console.log(error),
        () => console.log("finish")
    );

  }
}
