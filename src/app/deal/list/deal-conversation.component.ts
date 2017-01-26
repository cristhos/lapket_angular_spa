import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DealService } from '../../deal/service/deal.service';

@Component({
  selector: 'deal-conversation',
  template: require('./deal-conversation.component.html'),
})

export class DealConversationComponent implements OnInit{
  deal : Object;
  pages ;
  page ;
  total ;
  dealConversation;
  dealConversations = [];
  constructor(private dealService : DealService,private route: ActivatedRoute){}

  ngOnInit() {
    this.page = 1;
    this.pages = 2;
    this.getDealMyConversations();
    
  }

  getDealMyConversations(){
     if(this.page <= this.pages ){
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
          },
          error => console.log(error),
          () => console.log("finish")
        );
     }
  }

  onScrollDown () {
      this.getDealMyConversations();
	} 
}
