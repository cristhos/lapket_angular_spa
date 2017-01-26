import { Component, OnInit, Input } from '@angular/core';
import { NgForm }    from '@angular/forms';
import { Router} from '@angular/router';

import { SearchFormModel } from './search.form';
import { ProductService } from '../../product/service/product.service';


@Component({
  selector: 'search-form',
  template: require('./search.form.component.html'),
  styles: [`

    #search_text{
        width: 250px;
        padding: 0;
        font-size: 16px;
        -webkit-transition: all 200ms ease;
        transition: all 200ms ease;
        font-size: 16px;
        appearance: textfield;
        border: 0 none;
        height: 2.5rem;
        margin-right: 0;
        color: black;
        outline: none;
        background-color: #eeeeee;
        box-sizing: border-box;
        transition: all 0.15s;
        outline: none;
        border-radius: 3px 0px 0px 3px;
        border: none;
        margin-right:-10px;
    }
  ::-webkit-input-placeholder { /* WebKit browsers */
      color: black;
  }
  :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
      color: black;
  }
  ::-moz-placeholder { /* Mozilla Firefox 19+ */
      color: black;
  }
  :-ms-input-placeholder { /* Internet Explorer 10+ */
      color: black;
  }
  #search_text:focus {
      background-color: #eeeeee;;
  }
  #search_button {
        border: 0 none;
        width: 2.5rem;
        padding: 0;
        text-align: center;
        height: 2.5rem;
        background:  #eeeeee;
        color:black
        cursor: pointer;
        border-radius: 0px 3px 3px 0px;
    }
  `]
})

export class SearchFormComponent {
  loading = false;
  resultats;
  tests: number[] = [100, 200, 300, 400, 500];

  constructor(private productService : ProductService, private router : Router){}

   model = new SearchFormModel('');

   //when user submit form is redirect to de searchpage
   onSubmit(): void {
     this.router.navigate(['/search/'+this.model.term]);
   }

   search(){
       let page=1;
       this.loading = true;
        /*this.productService.search(this.model.term,page).subscribe(
         data =>{
           this.resultats = data._embedded.items;
         },
         error =>{
            this.loading = false;
            console.log(error);
         },
         () =>{
           this.loading = false;
           console.log("finish");
         }
     );*/
   }

   get diagnostic() { return JSON.stringify(this.model); }
}
