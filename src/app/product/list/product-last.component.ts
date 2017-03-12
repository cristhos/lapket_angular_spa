import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductService } from '../service/product.service';

@Component({
  selector: 'last-product',
  templateUrl: './product-last.component.html',
  styles : [`
    :host/deep/ .card .card-image{
      height:300px;
    }
`]
})

export class ProductLastComponent implements OnInit{
  products = [];
  pages: number;
  page : number;
  product_loading : boolean;
  constructor(private productService : ProductService) {}

  ngOnInit() {
    this.page = 1;
    this.pages = 2;
    this.product_loading = true;
    this.getLastProducts();
  }

  getLastProducts(){
      let limit=3;
      if(this.page <= this.pages ){
        this.productService.getProductLast(this.page,limit).subscribe(
            data => {
              this.pages = data.pages;
              for(let i=0; i<=data.limit; i++) {
                if(data._embedded.items[i]){
                  this.products.push(data._embedded.items[i]);
                  this.page = data.page + 1;
                }
              }
              this.product_loading = false;
            },
            error =>{
              this.product_loading = false;
              console.log(error)
            },
            () =>{
              this.product_loading = false;
              console.log("finish")
            } 
        );
      }
  }

}
