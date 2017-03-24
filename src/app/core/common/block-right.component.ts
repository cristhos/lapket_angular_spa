import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'core-block-right',
  templateUrl: './block-right.component.html',
  styles: [`

  `],
})

export class BlockRightComponent implements OnInit{
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
