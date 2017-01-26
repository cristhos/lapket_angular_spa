import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserService } from '../service/user.service';
import { AlbumService } from '../../album/service/album.service';

@Component({
  selector: 'user-album',
  template:require('./user-album.component.html'),
})

export class UserAlbumComponent implements OnInit, OnDestroy {
  user_detail : Object;
  albums: Object;
  sub: any;
  constructor(
    private userService : UserService,
    private albumService : AlbumService,
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
      this.getAlbumAuthor(username);
    });
  }
  getAlbumAuthor(username: any){
    this.albumService.getAlbumByAuthor(username).subscribe(
        data => this.albums = data._embedded.items,
        error => console.log(error),
        () => console.log("finish")
    );

  }
}
