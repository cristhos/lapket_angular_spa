import { Component, Input, EventEmitter, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductService } from '../../product/service/product.service';

declare var $: any

@Component({
  selector: 'product-common',
  templateUrl: './product-common.component.html',
  styleUrls : ['./product-common.component.css']
})

export class ProductCommonComponent implements OnInit,AfterViewInit{
  @Input()
  product : any;

  //lazy-image
  defaultImage = '../../../assets/images/loader1.gif';
  offset = 100;
  product_share_link;

  modalActions = new EventEmitter<string>();
  productConversation;
  authent : Boolean;

  constructor(private productService : ProductService,
              private router: Router
             ){}

  ngOnInit(){
    this.authent = this.buttonGuard();
    this.product_share_link = window.location.origin + this.router.createUrlTree(['/product',this.product.id]);
  }

  ngAfterViewInit(){
    $('.materialboxed').materialbox();

    $('.dropdown-p-'+this.product.id).dropdown({
      belowOrigin: true, // Displays dropdown below the button
      alignment: 'right' // Displays dropdown with edge aligned to the left of button
     }
   );
        
  }

  postProductVote(product_id: number){

    if(this.buttonGuard() == true){

       this.product.is_voted = true;
       const nb_vote_transit = this.product.nb_votes;
       this.product.nb_votes = nb_vote_transit + 1;
       
       this.productService.postProductVote(product_id).subscribe(
        data =>{
          //illusion optique
        },
        error =>{
          console.log(error)
          this.product.is_voted = true;
          this.product.nb_votes = nb_vote_transit;
        },
        () => console.log('finish')
     );
    }else{
       this.buttonGuardRedirect();
    }
  }
  removeProductVote(product_id: number)
  {
     if(this.buttonGuard() == true){
      this.product.is_voted = false;
      const nb_votes_transit = this.product.nb_votes;
      this.product.nb_votes = nb_votes_transit - 1;
      
      this.productService.deleteProductVote(product_id).subscribe(
        data => {
          //illusion optique
        },
        error =>{
          console.log(error);
          this.product.is_voted = true;
          this.product.nb_votes = nb_votes_transit;
        },
        () => console.log("finish")
     );
     }else{
       this.buttonGuardRedirect();
     }
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

  buttonGuard(){
    if(localStorage.getItem("access_token")){
      return true;
    }else{
      return false;
    }
  }
 
 buttonGuardRedirect(){
   if(window.confirm('Voulez-vous vous connecter pour effectuer cette action ?'))
    {
      this.router.navigateByUrl('/login');
    }
 }
}
