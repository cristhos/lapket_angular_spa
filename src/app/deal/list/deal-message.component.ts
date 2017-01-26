import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import	{Observable}	from	'rxjs/Observable';

import { DealService } from '../../deal/service/deal.service';

@Component({
  selector: 'deal-message',
  template: require('./deal-message.component.html'),
  styles: [`
      .list-auto{
        height: 20rem;
        overflow-y: scroll;
      }
  `],
})

export class DealMessageComponent implements OnInit, OnDestroy{
  dealMessages = [];
  dealConversation;
  dealConversations;
  pages: number;
  page : number;
  sub;
  timerSub;
  constructor(private dealService : DealService,private route: ActivatedRoute){}

  ngOnInit(){
    this.page = 1;
    this.pages = 2;
    this.getDealMyConversations();
    this.getDealMessages();
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
    //this.timerSub.unsubscribe();
  }
  getDealMessages(){
    this.sub = this.route.params.subscribe(params => {
      let conversation_id = +params['conversation_id'];
       //recuperation de la conversation
      this.getDealConversation(conversation_id);
      //recuperation des messages

       if(this.page <= this.pages ){
          this.dealService.getDealMessages(conversation_id, this.page).subscribe(
            data =>{
                this.pages = data.pages;
                for(let i=0; i<=data.limit; i++) {
                  if(data._embedded.items[i]){
                    this.dealMessages.push(data._embedded.items[i]);
                    this.page = data.page + 1;
                  }
                }
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
      this.dealService.getMyDealConversations(1).subscribe(
        data => {
          this.dealConversations = data._embedded.items;
        },
        error => console.log(error),
        () => console.log("finish")
      );
      //this.getDealMessages();
  }

  private subscribeToData(): void {
    this.timerSub = Observable.timer(5000).subscribe(
      () => {
        //this.getDealMessages();
      }
    );
  }

  onScrollDown(){
    this.getDealMessages();
  }
}
