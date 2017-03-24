import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'core-block-left',
  templateUrl: './block-left.component.html',
  styles: [`

  `],
})

export class BlockLeftComponent implements OnInit {
 
 authent : boolean;

 ngOnInit(){
   this.checkAuthent();
 }

 checkAuthent(){
   if(localStorage.getItem("access_token")){
     this.authent = true;
   }else{
     this.authent = false;
   }
 }
}
