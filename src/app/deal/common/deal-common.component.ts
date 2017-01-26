import { Component, Input } from '@angular/core';
import { DealService } from '../service/deal.service';

@Component({
  selector: 'deal-common',
  template: require('./deal-common.component.html'),
  styles: [`
      .message-text-right{
        background : #80cbc4;
        border-radius: 15px 15px 0px 15px;
      }

      .message-text-left{
        background: #e0f2f1;
        border-radius: 0px 15px 15px 15px;
      }
  `],
})

export class DealCommonComponent {
  @Input()
  deal : any;

  constructor(private dealService : DealService) {}

  removeDeal(deal: any){

  }

}
