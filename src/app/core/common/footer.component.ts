import { Component, Input } from '@angular/core';

@Component({
  selector: 'core-footer',
  templateUrl: './footer.component.html',
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
