import { Component, Input } from '@angular/core';

@Component({
  selector: 'loading',
  template: require('./loading.component.html'),
  styles: [`
      #loader{
       left:45%;
     }
  `],
})

export class LoadingComponent {

}
