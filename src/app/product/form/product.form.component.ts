import { Component, OnInit, OnDestroy, ViewChild, NgZone,ChangeDetectorRef } from '@angular/core';
import { NgForm }    from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';

import { ProductFormModel } from './product.form';
import { CategoryService } from '../../category/service/category.service';
import { ProductService } from '../service/product.service';
import { ApiUrlService } from '../../utils/api-url.service';
import { ImageResizerService } from '../../utils/image-resizer.service';


@Component({
  selector: 'product-form',
  template: require('./product.form.component.html'),
  styles: [`
    .list-auto{
      height: 300px;
      overflow:auto;
    }
    .file-over { border: dotted 3px red; }
  `]
  
})



export class ProductFormComponent implements OnInit{
 
  categories:Object;
  product : any;
  form_album = false;
  loading = false;
  sub;
  model;
  file_src;
  request : boolean;
  constructor(
    private categoryService : CategoryService,
    private productService: ProductService,
    public router: Router,
    private route: ActivatedRoute,
    private apiUrlService : ApiUrlService,
    private imageResizerService : ImageResizerService
  ) {}

   ngOnInit(){
     //$('.materialboxed').materialbox();
     this.getProductDetail();
     this.getCategory();

   }

  getCategory(){
    let limit=16;
    this.categoryService.getCategory(16).subscribe(
        data => this.categories = data._embedded.items,
        error => console.log(error),
        () => console.log("finish")
    );
  }

   onSubmit(): void {
      this.loading = true;

      this.uploader.uploadAll();
      this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
           let data = JSON.parse(response);
           this.model.picture = data.id;

           if(this.model.picture != null){
             if(this.product == null){
                this.postProduct();
             }else{
               console.log("ok");
               this.putProduct();
             } 
           }
      };

      if(this.product != null) this.putProduct();
   }

   postProduct()
   {
         this.productService.postProduct(this.model).subscribe(
           data =>{
             this.model = new ProductFormModel(null,'',0,null);
             this.product = data;
             this.router.navigate(['/product',data.id]);
           },
           error => console.log(error),
           () => console.log("finish")
       );
        this.loading = false;
   }

   putProduct()
   {
      
      this.productService.putProduct(this.model, this.product.id).subscribe(
           data =>{
             this.model = new ProductFormModel(null,'',0,null);
             this.product = data;
             this.router.navigate(['/product',data.id]);
           },
           error => console.log(error),
           () => console.log("finish")
      );
      this.loading = false;
   }


   get diagnostic() { return JSON.stringify(this.model); }

   

   getProductDetail()
   {
     this.sub = this.route.params.subscribe(params => {
       let id = +params['id'];
       if(id){
         this.productService.getProductDetail(id).subscribe(
             data =>{
               this.product = data;
               this.model = new ProductFormModel(data.picture.id,data.description,data.price,data.category.id);
               this.file_src = data.picture.web_path;
               this.request = true;
             },
             error => console.log(error),
             () => console.log("finish")
         );
       }else{
          this.model = new ProductFormModel(null,'',0,null);
          this.request = true;
       }
     });
   }
  

  // file upluad
  public uploader:FileUploader = new FileUploader({url:this.apiUrlService.getBaseUrl()+'/api/picture/pictures.json'});
  
  fileChange($event){
     this.readFiles($event.target.files);
  }

  readFiles(files, index=0){
    let reader = new FileReader();

    if (index in files){  
        this.imageResizerService.readFile(files[index], reader, (result) =>{

        let img = document.createElement("img");
        img.src = result;

        this.imageResizerService.resize(img, 300, 500, (resized_img)=>{ 
          this.file_src = resized_img;
        });
      });
    }
  }

}
