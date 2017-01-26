
import { Component, Input, OnInit } from '@angular/core';
import { CategoryService } from '../service/category.service';
import { AlbumService } from '../../album/album.component';
import { ProductService } from '../../product/product.component';


@Component({
  selector: 'category-descovery',
  template: require('./category-descovery.component.html'),
  styles: [`

  `],
})

export class CategoryDescoveryComponent implements OnInit{
  @Input()
  category : any;

  albums: any;
  products: any;
  constructor(
    private categoryService : CategoryService,
    private albumService : AlbumService,
    private productService : ProductService) {

  }

  ngOnInit() {
    this.getProductsCategory(this.category.id);
  }

  getShortAlbumsCategory(category_id: any)
  {
      this.albumService.getShortAlbumsCategory(category_id).subscribe(
          data => this.albums = data._embedded.items,
          error => console.log(error),
          () => console.log("finish")
      );
  }

  getProductsCategory(category_id: any)
  {
      this.productService.getProductsCategory(category_id).subscribe(
          data => this.products = data._embedded.items,
          error => console.log(error),
          () => console.log("finish")
      );
  }

}
