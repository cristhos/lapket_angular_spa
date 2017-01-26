import { Component, Input } from '@angular/core';

@Component({
  selector: 'loading',
  template: require('./loading.component.html'),
  styles: [`

  `],
})

export class LoadingComponent {
  @Input()
  load : boolean ;
}
