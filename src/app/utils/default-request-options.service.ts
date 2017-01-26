import { Injectable } from '@angular/core';
import { BaseRequestOptions, RequestOptions } from '@angular/http';

@Injectable()
export class DefaultRequestOptions extends BaseRequestOptions {

  constructor() {
    super();
    this.headers.set('Content-Type', 'application/json');
    this.headers.set('Accept', 'application/json');
    if(localStorage.getItem('access_token')) this.headers.set('Authorization', `Bearer ${localStorage.getItem('access_token')}`);
  }
}

export const requestOptionsProvider = { provide: RequestOptions, useClass: DefaultRequestOptions };