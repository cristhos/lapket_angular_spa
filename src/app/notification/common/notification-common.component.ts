import { Component, Input } from '@angular/core';

@Component({
  selector: 'notification-common',
  template: require('./notification-common.component.html'),
  styles: [`

  `],
})

export class NotificationCommonComponent {
  @Input()
  notification : any;
}
