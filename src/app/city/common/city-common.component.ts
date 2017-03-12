import { Component, Input } from '@angular/core';

@Component({
  selector: 'city-common',
  templateUrl: './city-common.component.html',
  styles: [`
    
  `],
})

export class CityCommonComponent {
  @Input()
  city : any;
}
