import { Component, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import	{Observable}	from	'rxjs/Observable';

import { DealService } from '../../deal/service/deal.service';

declare var $: any


@Component({
  selector: 'deal-message',
  templateUrl: './deal-message.component.html',
  styles: [`
      #message-list-auto{
        height: 20rem;
        overflow-y: scroll;
      }
      .conversation-list-auto{
        height: 35rem;
        overflow-y: scroll;
      }
  `],
})

export class DealMessageComponent implements OnInit, OnDestroy{
  dealMessages : any = [];
  DealMessagesLoading : boolean;
  dealConversation;
  dealConversations : any = [];
  dealConversationsLoading:boolean;
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
    this.getInitMessages();
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
    this.timerSub.unsubscribe();
  }

  getInitMessages(){
    this.sub = this.route.params.subscribe(params => {
      let conversation_id = +params['conversation_id'];
      this.getLastDealMessages(conversation_id);
    });
    this.scrollMessageDown();
  }
 

  
  //get PaginateMessage
  getDealMessages(){
    this.sub = this.route.params.subscribe(params => {
      let conversation_id = +params['conversation_id'];
      
      if(this.timerSubLoad) this.timerSub.unsubscribe();
      this.getDealConversation(conversation_id);
       if(this.page <= this.pages ){
          this.dealService.getDealMessages(conversation_id, this.page).subscribe(
            data =>{
                this.scrollMessageUp();
                this.checkMessages(data,'old');
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
  
  //get last message in my api page=1 order by desc
  getLastDealMessages(conversation_id){
      if(this.timerSubLoad) this.timerSub.unsubscribe();

      this.getDealConversation(conversation_id);

      this.dealService.getDealMessages(conversation_id, 1).subscribe(
            data =>{
                this.dealMessages = [];
                this.checkMessages(data,"last");
                this.subscribeToData(conversation_id);
            },
            error =>{
              console.log(error)
            },
            () =>{
              console.log("finish")
            }
          );
  }
  
  //add message if not exist in array() call realtime subscribe
  checkMessages(data,checkType){
    this.pages = data.pages;
    
    for(let i=0;i<data.limit;i++){
      if(data._embedded.items[i]){
        let pass = true;
        if(this.dealMessages.length >0){
            for(let j=0;j<this.dealMessages.length;j++){
              if(data._embedded.items[i].id == this.dealMessages[j].id){
                pass = false;
                break;
              } 
           }
        }
        
        if(pass ==true){
          if(checkType=="last"){
            this.dealMessages.unshift(data._embedded.items[i]);
          }else{
            this.dealMessages.unshift(data._embedded.items[i]);
          }
        }
        this.page = data.page + 1;       
      }
    }

  }

  scrollMessageDown(){
      let d = document,mla;
      mla = d.getElementById('message-list-auto');
      mla.scrollTop = mla.scrollHeight;
  }
  scrollMessageUp(){
      let d = document,mla;
      mla = d.getElementById('message-list-auto');     
      mla.scrollTop = 0;
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

  private subscribeToData(conversation_id): void {
    this.timerSub = Observable.timer(5000).subscribe(
      () => {
            this.timerSubLoad = true;
            this.page = 1;
            this.pages = 2;
            this.getLastDealMessages(conversation_id);
      }
    );
  }
  
  //get last deal message
  onScrollUpMessages(){
    this.getDealMessages();
  }
  onScrollDownConversations(){
    this.getDealMyConversations();
  }
}
