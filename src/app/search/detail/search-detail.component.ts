import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductService } from '../../product/product.component';

@Component({
  selector: 'search-detail',
  template: require('./search-detail.component.html'),
  styles: [`
    
  `],
})

export class SearchDetailComponent implements OnInit, OnDestroy {

  products = [];
  pages: number;
  page : number;
  loading : boolean;
  sub ;
  term ;
  constructor( private route: ActivatedRoute,private productService : ProductService) {}

  ngOnInit() {
    this.page = 1;
    this.pages = 2;
    this.loading = true;
    this.getSearchDetail();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getSearchDetail()
  {
    this.sub = this.route.params.subscribe(params => {
      this.term = params['term'];
      let page=1;
      this.loading = true;
        if(this.page <= this.pages ){
        this.productService.search(this.term,this.page).subscribe(
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
    });
  }

  onScrollDown () {
      this.getSearchDetail();
	}

}
