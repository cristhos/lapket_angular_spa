import { Component, Input} from '@angular/core';

@Component({
  selector: 'deal-conversation-common',
  templateUrl: './deal-conversation-common.component.html',
  styles : [`

  `]
})

export class DealConversationCommonComponent {
  @Input()
  dc;
}
