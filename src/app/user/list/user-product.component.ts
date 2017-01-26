import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserService } from '../service/user.service';
import { ProductService } from '../../product/service/product.service';

@Component({
  selector: 'user-product',
  template: require('./user-product.component.html'),
  styles : [`

  `]
})

export class UserProductComponent implements OnInit, OnDestroy{
  user_detail : Object;
  products = [];
  sub: any;
  pages: number;
  page : number;
  load : boolean;
  constructor(
    private userService : UserService,
    private productService: ProductService,
    private route: ActivatedRoute
  ) {

  }
  ngOnInit() {
    this.page = 1;
    this.pages = 2;
    this.load = true;
    this.getUserDetail();
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  getUserDetail()
  {
    this.sub = this.route.params.subscribe(params => {
      let username = params['username'];
      this.load = true;
      this.userService.getUser(username).subscribe(
          data =>{
            this.user_detail = data;
          },
          error => console.log(error),
          () => console.log("finish")
      );
      this.getProductAuthor(username);
      this.load = false;
    });
  }
  getProductAuthor(username: any)
  {
    if(this.page <= this.pages){
      this.productService.getProductAuthor(username,this.page).subscribe(
          data => {
            this.pages = data.pages;
            for(let i=0; i<=data.limit; i++) {
              if(data._embedded.items[i]){
                this.products.push(data._embedded.items[i]);
                this.page = this.page + 1;
              }
            }
          },
          error => console.log(error),
          () => console.log("finish")
      );
    }
  }
  onScrollDown() {
    setTimeout(()	=>{
      this.sub = this.route.params.subscribe(params => {
        let username = params['username'];
        this.getProductAuthor(username);
      });
      console.log(this.products);
    },3000);
	}

}
