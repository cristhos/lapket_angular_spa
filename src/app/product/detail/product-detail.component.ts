import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductService } from '../../product/service/product.service';
import { MetadataService } from 'ng2-metadata';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
})

export class ProductDetailComponent implements OnInit, OnDestroy{
  product : any;
  sub: any;
  product_loading : boolean;
  constructor(
    private productService : ProductService,
    private route: ActivatedRoute,
    private metadataService: MetadataService
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
            this.metadataService.setTitle(this.product.description);
            this.metadataService.setTag('og:image', this.product.picture.web_path);
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
