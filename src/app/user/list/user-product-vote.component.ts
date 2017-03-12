import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserService } from '../service/user.service';
import { ProductService } from '../../product/service/product.service';

@Component({
  selector: 'user-product-vote',
  templateUrl: './user-product.component.html',
})

export class UserProductVoteComponent implements OnInit, OnDestroy{
  user_detail ;
  products = [];
  sub: any;
  page ;
  pages;
  products_loading : boolean;
  
  constructor(
    private userService : UserService,
    private productService: ProductService,
    private route: ActivatedRoute
  ){}

  ngOnInit() {
    this.page = 1;
    this.pages = 2;
    this.getUserDetail();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  
  getUserDetail()
  {
    this.sub = this.route.params.subscribe(params => {
      let username = params['username'];
      this.userService.getUser(username).subscribe(
          data => this.user_detail = data,
          error => console.log(error),
          () => console.log("finish")
      );
      this.getProductVoteAuteur(username);
    });
  }

  getProductVoteAuteur(username: any)
  {
    if(this.page <= this.pages){
    this.products_loading = true;
    this.productService.getProductVoteBy(username).subscribe(
        data => {
          for(let i=0; i<=data.limit; i++) {
            if(data._embedded.items[i]){
              this.products.push(data._embedded.items[i]);
              this.page = this.page + 1;
            }
          }
          this.products_loading = false;
        },
        error =>{
          console.log(error);
          this.products_loading = false;
        } ,
        () =>{
          console.log("finish");
          this.products_loading = false;
        } 
    );
  }

  }

  onScrollDown() {
    setTimeout(()	=>{
      this.sub = this.route.params.subscribe(params => {
        let username = params['username'];
        this.getProductVoteAuteur(username);
      });
      console.log(this.products);
    },3000);
	}
}
