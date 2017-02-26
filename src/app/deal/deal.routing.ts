import {
        DealConversationComponent,
        DealMessageComponent
      } from './deal.component';

export const DEAL_ROUTING = [
   {path: 'message/:conversation_id', component: DealMessageComponent},
   {path: 'conversation', component: DealConversationComponent},
];