import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import	{Observable}	from	'rxjs/Observable';

import { DealService } from '../../deal/service/deal.service';

@Component({
  selector: 'deal-message',
  template: require('./deal-message.component.html'),
  styles: [`
      .message-list-auto{
        height: 15rem;
        overflow-y: scroll;
      }
      .conversation-list-auto{
        height: 30rem;
        overflow-y: scroll;
      }
  `],
})

export class DealMessageComponent implements OnInit, OnDestroy{
  dealMessages = [];
  dealConversation;
  dealConversations = [];
  pages: number;
  page : number;
  conversationPages:number;
  conversationPage:number;
  sub;
  timerSub;
  timerSubLoad = false;
  constructor(private dealService : DealService,private route: ActivatedRoute){}

  ngOnInit(){
    this.page = 1;
    this.pages = 2;
    this.conversationPage = 1;
    this.conversationPages = 2;
    this.getDealMyConversations();
    this.getDealMessages();
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
    this.timerSub.unsubscribe();
  }
  getDealMessages(){
    this.sub = this.route.params.subscribe(params => {
      let conversation_id = +params['conversation_id'];
      
      if(this.timerSubLoad) this.timerSub.unsubscribe();
      this.getDealConversation(conversation_id);
       if(this.page <= this.pages ){
          this.dealService.getDealMessages(conversation_id, this.page).subscribe(
            data =>{
                this.pages = data.pages;
                this.dealMessages = data._embedded.items;
                /*for(let i=0; i<=data.limit; i++) {
                  if(data._embedded.items[i]){
                    this.dealMessages.push(data._embedded.items[i]);
                    this.page = data.page + 1;
                  }
                }*/
                this.subscribeToData();
            },
            error =>{
              console.log(error)
            },
            () =>{
              console.log("finish")
            }
          );
       }

    });

  }

  getDealConversation(conversation_id){
    this.dealService.getDealConversation(conversation_id).subscribe(
        data =>{
           this.dealConversation = data;
        },
        error =>{
          console.log(error)
        } ,
        () =>{
          console.log("finish")
        }
    );
  }

  getDealMyConversations(){
      if(this.conversationPage <= this.conversationPages ){
          this.dealService.getMyDealConversations(this.conversationPage).subscribe(
          data => {
            this.conversationPages = data.pages;
                for(let i=0; i<=data.limit; i++) {
                  if(data._embedded.items[i]){
                    this.dealConversations.push(data._embedded.items[i]);
                    this.conversationPage = data.page + 1;
                  }
                }
          },
          error => console.log(error),
          () => console.log("finish")
        );
      }
  }

  private subscribeToData(): void {
    this.timerSub = Observable.timer(5000).subscribe(
      () => {
            this.timerSubLoad = true;
            this.page = 1;
            this.pages = 2;
            this.getDealMessages();
      }
    );
  }

  onScrollDownMessages(){
    this.getDealMessages();
  }
  onScrollDownConversations(){
    this.getDealMyConversations();
  }
}
