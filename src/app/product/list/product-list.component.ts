import { Component, OnInit, EventEmitter } from '@angular/core';
import { Routes } from '@angular/router';

import { ProductService } from '../service/product.service';
import * as moment from 'moment';

@Component({
  selector: 'all-product',
  templateUrl: './product-list.component.html',
  styles : [`
    
`]
})

export class ProductListComponent implements OnInit{
  products : any = [];
  pages: number;
  page : number;
  product_loading : boolean;
  constructor(private productService : ProductService) {}

  ngOnInit() {
    moment.locale('fr-fr');
    this.page = 1;
    this.pages = 2;
    this.product_loading = true;
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
              this.product_loading = false;
            },
            error =>{
              this.product_loading = false;
              console.log(error);
            },
            () =>{
              this.product_loading = false;
              console.log("finish");
            } 
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
