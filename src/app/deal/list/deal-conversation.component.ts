import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DealService } from '../../deal/service/deal.service';

@Component({
  selector: 'deal-conversation',
  templateUrl: './deal-conversation.component.html',
})

export class DealConversationComponent implements OnInit{
  deal : Object;
  pages ;
  page ;
  total ;
  dealConversation;
  dealConversations = [];
  conversations_loading : boolean;

  constructor(private dealService : DealService,private route: ActivatedRoute){}

  ngOnInit() {
    this.page = 1;
    this.pages = 2;
    this.getDealMyConversations();
    
  }

  getDealMyConversations(){
     if(this.page <= this.pages ){
       this.conversations_loading = true;
        this.dealService.getMyDealConversations(this.page).subscribe(
          data => {
             this.total = data.total;
             this.pages = data.pages;
             for(let i=0; i<=data.limit; i++) {
                if(data._embedded.items[i]){
                  this.dealConversations.push(data._embedded.items[i]);
                  this.page = data.page + 1;
                }
              }
              this.conversations_loading = false;
          },
          error =>{
            console.log(error)
            this.conversations_loading = false;
          } ,
          () =>{
            console.log("finish")
            this.conversations_loading = false;
          } 
        );
     }
  }

  onScrollDown () {
      this.getDealMyConversations();
	} 
}
