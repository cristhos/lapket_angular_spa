import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductService } from '../../product/service/product.service';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
})

export class ProductDetailComponent implements OnInit, OnDestroy{
  product : Object;
  sub: any;
  product_loading : boolean;
  constructor(
    private productService : ProductService,
    private route: ActivatedRoute
    ){
  }

  ngOnInit() {
    this.getProductDetail();
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getProductDetail()
  {
    this.product_loading = true;
    this.sub = this.route.params.subscribe(params => {
      let id = +params['id'];
      this.productService.getProductDetail(id).subscribe(
          data =>{
            this.product_loading = false;
            this.product = data;
          },
          error => {
           this.product_loading = false;
           console.log(error) 
          },
          () =>{
            this.product_loading = false;
            console.log("finish")
          } 
      );
    });
  }
}
