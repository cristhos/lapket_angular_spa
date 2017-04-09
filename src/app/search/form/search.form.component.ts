import { Component, OnInit, Input } from '@angular/core';
import { NgForm }    from '@angular/forms';
import { Router} from '@angular/router';

import { SearchFormModel } from './search.form';
import { ProductService } from '../../product/service/product.service';


@Component({
  selector: 'search-form',
  templateUrl: './search.form.component.html',
  styleUrls: ['./search.form.component.css']
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
