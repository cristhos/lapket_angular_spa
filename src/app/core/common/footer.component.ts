import { Component, Input } from '@angular/core';

@Component({
  selector: 'core-footer',
  template: require('./footer.component.html'),
  styles: [`
      footer a {
          color:#073648;
          margin: 5px;
      }
  `],
})

export class FooterComponent {
  @Input()
  user : Object ;
}
