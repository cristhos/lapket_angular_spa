import { Component, Input} from '@angular/core';

@Component({
  selector: 'deal-conversation-common',
  template: require('./deal-conversation-common.component.html'),
  styles : [`

  `]
})

export class DealConversationCommonComponent {
  @Input()
  dc;
}
