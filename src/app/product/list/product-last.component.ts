import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductService } from '../service/product.service';

@Component({
  selector: 'last-product',
  template: require('./product-last.component.html'),
  styles : [`
    
`]
})

export class ProductLastComponent implements OnInit{
  products = [];
  pages: number;
  page : number;
  load : boolean;
  constructor(private productService : ProductService) {}

  ngOnInit() {
    this.page = 1;
    this.pages = 2;
    this.load = true;
    this.getLastProducts();
  }

  getLastProducts(){
      if(this.page <= this.pages ){
        this.productService.getProductLast(this.page).subscribe(
            data => {
              this.pages = data.pages;
              for(let i=0; i<=data.limit; i++) {
                if(data._embedded.items[i]){
                  this.products.push(data._embedded.items[i]);
                  this.page = data.page + 1;
                }
              }
            },
            error => console.log(error),
            () => console.log("finish")
        );
      }
  }

}
