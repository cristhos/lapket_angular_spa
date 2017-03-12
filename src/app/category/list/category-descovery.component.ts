
import { Component, Input, OnInit } from '@angular/core';
import { CategoryService } from '../service/category.service';
import { ProductService } from '../../product/product.component';


@Component({
  selector: 'category-descovery',
  templateUrl: './category-descovery.component.html',
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
    private productService : ProductService) {

  }

  ngOnInit() {
    this.getProductsCategory(this.category.id);
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
