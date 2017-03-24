import { Component, OnInit, Input } from '@angular/core';
import { NgForm }    from '@angular/forms';
import { Router} from '@angular/router';

import { SearchFormModel } from './search.form';
import { ProductService } from '../../product/service/product.service';


@Component({
  selector: 'search-form',
  templateUrl: './search.form.component.html',
  styles: [`

    #search_text{
        width: 200px;
        font-size: 16px;
        border: 0;
        height: 30px;
        color: black;
        background-color: #eeeeee;
        border-radius: 3px 0px 0px 3px;
        margin-right:-4px;
    }
    .input-field{
        display:inline-block;
    }

  #search_text:focus {
      background-color: #eeeeee;;
  }
  .btn-flat{
        border: 0 none;
        width: 2.5rem;
        padding: 0;
        text-align: center;
        color:black
        cursor: pointer;
        border-radius: 0px 3px 3px 0px;
        background:  #eeeeee;
    }
  `]
})

export class SearchFormComponent {
  loading = false;
  resultats;
  constructor(private productService : ProductService, private router : Router){}

   model = new SearchFormModel('');

   //when user submit form is redirect to de searchpage
   onSubmit(): void {
     this.router.navigate(['/search/'+this.model.term]);
   }

   search(){
       /*
       let page=1;
       this.loading = true;
        this.productService.search(this.model.term,page).subscribe(
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
     );
     */
   }

   get diagnostic() { return JSON.stringify(this.model); }
}
