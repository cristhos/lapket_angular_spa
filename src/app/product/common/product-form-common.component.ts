import { Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'product-form-common',
  templateUrl: './product-form-common.component.html',
  styles : [``]

})

export class ProductFormCommonComponent implements OnInit{
  @Input()
  product : any;
  activeForm : boolean;

  constructor(private router: Router){}

  ngOnInit(){
    this.activeForm = false;
  }

  showForm(arg:boolean){
    this.activeForm = arg;
  }


}
