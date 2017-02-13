import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'notification-common',
  template: require('./notification-common.component.html'),
  styles: [`

  `],
  changeDetection:	ChangeDetectionStrategy.OnPush
})

export class NotificationCommonComponent {
  @Input()
  notification : any;
}
