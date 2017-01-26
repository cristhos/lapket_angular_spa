import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AlbumService } from '../service/album.service';
import { ProductService } from '../../product/service/product.service';

@Component({
  selector: 'album-detail',
  template: require('./album-detail.component.html'),
  styles : [`

    `]
})

export class AlbumDetailComponent implements OnInit, OnDestroy {
  album : Object;
  products : Object;
  sub : any ;
  constructor(
    private albumService : AlbumService,
    private productService : ProductService,
    private route: ActivatedRoute
  ) {
  }
  ngOnInit() {
    this.getAlbumDetail();
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getAlbumDetail()
  {
    this.sub = this.route.params.subscribe(params => {
      let id = +params['id'];
      this.albumService.getAlbumDetail(id).subscribe(
          data => this.album = data,
          error => console.log(error),
          () => console.log("finish")
      );
      this.getProductAlbum(id);
    });

  }

  getProductAlbum(album_id : any)
  {
    this.productService.getProductAlbum(album_id).subscribe(
        data => this.products = data._embedded.items,
        error => console.log(error),
        () => console.log("finish")
    );
  }

}
