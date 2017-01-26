import { Component, OnInit, EventEmitter } from '@angular/core';
import { Routes } from '@angular/router';

import { ProductService } from '../service/product.service';


@Component({
  selector: 'all-product',
  template: require('./product-list.component.html'),
  styles : [`
    
`]
})

export class ProductListComponent implements OnInit{
  products = [];
  pages: number;
  page : number;
  load : boolean;
  constructor(private productService : ProductService) {}

  ngOnInit() {
    this.page = 1;
    this.pages = 2;
    this.load = true;
    this.getFilProducts();
  }

  getFilProducts(){
    if(localStorage.getItem("authent") == "O"){
      if(this.page <= this.pages ){
        this.productService.getProductFil(this.page).subscribe(
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
    }else{
      //rediriger sur la page de connexion et expliquer ce qui se passe
    }
  }
  onScrollDown () {
      this.getFilProducts();
	}


  modalActions = new EventEmitter<string>();
  globalActions = new EventEmitter<string>();
  params = []
  closeModel() {
    this.modalActions.emit("closeModal");
  }
}
