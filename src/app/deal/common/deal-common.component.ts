import { Component, Input } from '@angular/core';
import { DealService } from '../service/deal.service';

@Component({
  selector: 'deal-common',
  templateUrl: './deal-common.component.html',
  styleUrls:['./deal-common.component.css']
})

export class DealCommonComponent {
  @Input()
  deal : any;

  constructor(private dealService : DealService) {}

  removeDeal(deal: any){

  }

}
