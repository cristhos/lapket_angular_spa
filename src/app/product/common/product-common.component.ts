import { Component, Input, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductService } from '../../product/service/product.service';
import { DealService } from '../../deal/service/deal.service';

declare var $: any

@Component({
  selector: 'product-common',
  templateUrl: './product-common.component.html',
  styles : [`
    figure img {
      border-radius: 10px;
      width : 100%;
      background-size: cover;
    }
    .price {
      text-shadow : 1px 1px 1px red;
      color:red;
      font-size:20px;
    }
    .dropdown-conf {
      min-width: 180px;
    }
    .dropdown-share{
       min-width: 80px;
       max-width:80px;
    }
    
  `]

})

export class ProductCommonComponent implements OnInit{
  @Input()
  product : any;

  //lazy-image
  defaultImage = '/src/assets/images/ajax-loader.gif';
  offset = 100;
  product_share_link;

  dealform = false;
  modalActions = new EventEmitter<string>();
  productConversation;

  constructor(private productService : ProductService,
              private dealService : DealService,
              private router: Router
             ){}

  ngOnInit(){
    $('.materialboxed').materialbox();
    this.product_share_link = window.location.origin + this.router.createUrlTree(['/product',this.product.id]);
  }

  postProductVote(product_id: number)
  {
     if(localStorage.getItem('access_token')){
       this.productService.postProductVote(product_id).subscribe(
        data =>{
          //this.product = data;
          this.product.is_voted = true;
          this.product.nb_votes = this.product.nb_votes + 1;
        },
        error => console.log(error),
        () => console.log('finish')
     );
     }else{
        
     }
  }
  removeProductVote(product_id: number)
  {
    if(localStorage.getItem('access_token')){
      this.productService.deleteProductVote(product_id).subscribe(
        data => {
          //this.product = data;
          this.product.is_voted = false;
          this.product.nb_votes = this.product.nb_votes - 1;
        },
        error => console.log(error),
        () => console.log("finish")
     );
    }
  }

  

  closeModal() {
    this.modalActions.emit("closeModal");
  }

  deleteProduct(product_id){
    if(window.confirm('Etes vous sûr de supprimer ?'))
    {
      this.productService.removeProduct(product_id).subscribe(
        data => {
          this.router.navigateByUrl('/');
        },
        error => console.log(error),
        () => console.log("finish")
     );
    }
     
  }

  expiredProduct(product_id){
    if(window.confirm('Le stock est-il vraiment vide ?'))
    {
      this.productService.expiredProduct(product_id).subscribe(
        data => {
          this.product.is_expired = data.is_expired;
        },
        error => console.log(error),
        () => console.log("finish")
      );
    }
  }

  beginConversation(product_id){

     if(localStorage.getItem('access_token')){
        if(window.confirm('Etes vous sur de vouloir demarer une conversation'))
        {
          this.dealService.postConversation(product_id).subscribe(
            data => {
              this.router.navigateByUrl('deal/message/'+data.id)
            },
            error => console.log(error),
            () => console.log("finish")
          );
      }
     }
  }

  desactiveNotification(product_id : number){
    if(window.confirm('Etes vous sur de vouloir desactiver les notifications vous pouvez ratez une nouvelle'))
    {
      this.productService.desactiveNotification(product_id).subscribe(
        data => {
            this.product.is_notify = false;
        },
        error => console.log(error),
        () =>console.log("finish")
      );
    }
  }
  activeNotification(product_id : number){
    if(window.confirm('Ce produit genere des notifications a chaque nouvelle activé voulez vous activer ?'))
    {
      this.productService.desactiveNotification(product_id).subscribe(
        data => {
            this.product.is_notify = true;
        },
        error => console.log(error),
        () =>console.log("finish")
     );
    }
  }
}
