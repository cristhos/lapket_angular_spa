import 'rxjs/add/operator/switchMap';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CategoryService } from '../service/category.service';
import { ProductService } from '../../product/product.component';

@Component({
  selector: 'category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls:['./category-detail.component.css'],
})

export class CategoryDetailComponent implements OnInit, OnDestroy {
  category ;
  albums : Object;
  products: any = [];
  products_loading : boolean;
  category_loading : boolean;
  sub : any;
  constructor(
    private categoryService : CategoryService,
    private route: ActivatedRoute,
    private productService : ProductService
  ) {}

  ngOnInit() {
    this.getCategoryDetail();
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getCategoryDetail()
  {
    this.category_loading = true;
    this.sub = this.route.params.subscribe(params => {
      let id = +params['id'];
      this.categoryService.getCategoryDetail(id).subscribe(
          data =>{
                this.category_loading = false;
               this.category = data;
               this.getProductsCategory(this.category.id);
          } ,
          error =>{
            this.category_loading = false;
            console.log(error);
          }, 
          () =>{
            this.category_loading = false;
            console.log("finish");
          } 
      );
    });
  }

  getProductsCategory(category_id: any)
  {
      this.products_loading = true;
      this.productService.getProductsCategory(category_id).subscribe(
          data =>{
            this.products_loading = false;
            this.products = data._embedded.items
          },
          error =>{
            this.products_loading = false;
            console.log(error)
          },
          () =>{
            this.products_loading = false;
            console.log("finish")
          } 
      );
  }
}
