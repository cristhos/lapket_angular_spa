import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductService } from '../../product/service/product.service';

@Component({
  selector: 'product-detail',
  template: require('./product-detail.component.html'),
})

export class ProductDetailComponent implements OnInit, OnDestroy{
  product : Object;
  sub: any;
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
    this.sub = this.route.params.subscribe(params => {
      let id = +params['id'];
      this.productService.getProductDetail(id).subscribe(
          data => this.product = data,
          error => console.log(error),
          () => console.log("finish")
      );
    });
  }
}
