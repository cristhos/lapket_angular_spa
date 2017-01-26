import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserService } from '../service/user.service';

@Component({
  selector: 'user-following',
  template: require('./user-following.component.html'),
})

export class UserFollowingComponent implements OnInit, OnDestroy {
  user_detail : Object;
  follows : Object;
  sub : any;
  constructor(
    private userService : UserService,
    private route: ActivatedRoute
  ){}

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
      this.getFollowingAuthor(username);
    });
  }

  getFollowingAuthor(username: any)
  {
    this.userService.getFollowingAuthor(username).subscribe(
        data => this.follows = data._embedded.items,
        error => console.log(error),
        () => console.log("finish")
    );

  }
}
