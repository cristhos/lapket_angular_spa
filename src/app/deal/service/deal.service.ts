import { Injectable }    from '@angular/core';
import { Http, Headers, RequestOptions,Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { ApiUrlService } from '../../utils/api-url.service';

@Injectable()
export class DealService {
  baseUrl: string;
  url: any;

  constructor(private http: Http, private apiUrlService : ApiUrlService){
    this.baseUrl = this.apiUrlService.getBaseUrl();
    this.baseUrl = this.baseUrl + '/api/deal';
  }

  getMyDealConversations(page){
    this.url = this.baseUrl +'/conversation/my/conversations.json?page='+page;
    return this.http
               .get(this.url)
               .map(res => res.json())
    ;
  }

  getDealConversation(conversation_id){
    this.url = this.baseUrl +'/conversation/conversations/'+conversation_id+'.json';
    return this.http
               .get(this.url)
               .map(res => res.json());
  }

  getMyDeals(){
    return this.http
               .get('')
               .map(res => res.json())
    ;
  }

  getDealMessages(conversation_id,page){
    this.url = this.baseUrl +'/message/messages/'+conversation_id+'/conversation.json?page='+page;
    return this.http
               .get(this.url)
               .map(res => res.json());
  }

  postDealMessage(conversation_id,message){
    this.url = this.baseUrl + '/message/messages/'+conversation_id+'.json';
    let body = JSON.stringify({conversation_id : conversation_id,content : message.content});
    return this.http.post(this.url, body)
                    .map(res => res.json());
  }

  postConversation(product_id : any){
    this.url = this.baseUrl + '/conversation/conversations/'+product_id+'.json';
    let body = JSON.stringify({product_id});
    return this.http.post(this.url,body)
                    .map(res => res.json());
  }

  deleteComment(deal_id){
    return this.http
               .get(``)
               .map(res => res.json())
    ;
  }
}
