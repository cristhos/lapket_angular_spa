import { Component, OnInit, Input } from '@angular/core';
import { NgForm }    from '@angular/forms';

import { DealFormModel } from './deal.form';
import { DealService } from '../../deal/service/deal.service';


@Component({
  selector: 'deal-form',
  template: require('./deal.form.component.html'),
  styles: [`

  `]
})

export class DealFormComponent {
  @Input()
  dealConversation;

  posted;
  loading = false;
  constructor(private dealService : DealService){}

   model = new DealFormModel('');
   onSubmit(): void {
     this.loading = true;
     this.dealService.postDealMessage(this.dealConversation.id,this.model).subscribe(
         data =>{
           this.posted = data
           this.model = new DealFormModel('');
         },
         error =>{
            this.model = new DealFormModel(this.model.content);
            console.log(error);
         } ,
         () =>{
           this.loading = false;
           console.log("finish");
         }
     );

   }

   get diagnostic() { return JSON.stringify(this.model); }
}
