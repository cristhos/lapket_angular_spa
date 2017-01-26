import 'rxjs/add/operator/switchMap';
import { Component, OnInit, OnDestroy, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CategoryService } from '../service/category.service';
import { ProductService } from '../../product/product.component';

import { slideInDownAnimation } from '../../animate';

//@HostBinding('@routeAnimation') routeAnimation = true;
//@HostBinding('style.display')   display = 'block';
//@HostBinding('style.position')  position = 'absolute';


@Component({
  selector: 'category-detail',
  template: require('./category-detail.component.html'),
  styles: [`
      .card{
        height: 200px;
      }
  `],
  animations: [ slideInDownAnimation ]
})

export class CategoryDetailComponent implements OnInit, OnDestroy {
  category ;
  albums : Object;
  products: any;
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
    
    this.sub = this.route.params.subscribe(params => {
      let id = +params['id'];
      this.categoryService.getCategoryDetail(id).subscribe(
          data =>{
               this.category = data;
               this.getProductsCategory(this.category.id);
          } ,
          error => console.log(error),
          () => console.log("finish")
      );
    });
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
