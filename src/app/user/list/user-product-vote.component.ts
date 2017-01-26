import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserService } from '../service/user.service';
import { ProductService } from '../../product/service/product.service';

@Component({
  selector: 'user-product-vote',
  template: require('./user-product.component.html'),
})

export class UserProductVoteComponent implements OnInit, OnDestroy{
  user_detail ;
  products = [];
  sub: any;
  page ;
  constructor(
    private userService : UserService,
    private productService: ProductService,
    private route: ActivatedRoute
  ){}
  ngOnInit() {
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
    this.productService.getProductVoteBy(username).subscribe(
        data => {
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
