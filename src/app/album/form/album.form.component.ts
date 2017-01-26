import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm }    from '@angular/forms';

import {  AlbumService } from '../service/album.service';
import {  AlbumFormModel } from '../form/album.form';
import { CategoryService } from '../../category/service/category.service';

@Component({
  selector: 'album-form',
  template: require('./album.form.component.html'),
})

export class AlbumFormComponent {
  categories : Object;
  album : Object;
  albums : Object;
  constructor(
    private categoryService : CategoryService,
    private albumService : AlbumService
  ) {
    this.getCategory();
    //this.getMyAlbums();
  }

  getMyAlbums(){
    this.albumService.getMyAlbums().subscribe(
        data => this.albums = data,
        error => console.log(error),
        () => console.log("finish")
    );
  }

  getCategory(){
    this.categoryService.getCategory().subscribe(
        data => this.categories = data._embedded.items,
        error => console.log(error),
        () => console.log("finish")
    );
  }
  model = new AlbumFormModel(null,null,null);
  submitted = false;
  onSubmit() {
    this.albumService.postAlbum(this.model).subscribe(
        data => this.album = data,
        error => console.log(error),
        () => console.log("finish")
    );
    this.getMyAlbums();
    this.submitted = true;
    this.model = new AlbumFormModel(null,null,null);
  }
  active = true;
  newAlbum() {
    this.active = false;
    this.active = true;
  }
  get diagnostic() { return JSON.stringify(this.model); }
}
