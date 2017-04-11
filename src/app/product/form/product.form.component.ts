import { Component, OnInit, OnDestroy, ViewChild, NgZone,ChangeDetectorRef } from '@angular/core';
import { NgForm }    from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';

import { ProductFormModel } from './product.form';
import { CategoryService } from '../../category/service/category.service';
import { ProductService } from '../service/product.service';
import { ApiUrlService } from '../../utils/api-url.service';
import { ImageResizerService } from '../../utils/image-resizer.service';
import {ImageCropperComponent, CropperSettings} from 'ng2-img-cropper';




@Component({
  selector: 'product-form',
  templateUrl: './product.form.component.html',
  styleUrls:['./product.form.component.css'] 
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
  formElement = false;
  public uploader:FileUploader = new FileUploader({url:this.apiUrlService.getBaseUrl()+'/api/picture/pictures.json'});
  data: any;
  cropperSettings;
  @ViewChild('cropper', undefined) 
  cropper:ImageCropperComponent;

  constructor(
    private categoryService : CategoryService,
    private productService: ProductService,
    public router: Router,
    private route: ActivatedRoute,
    private apiUrlService : ApiUrlService,
    private imageResizerService : ImageResizerService,
  ) {
        this.cropperSettings = new CropperSettings();
        this.cropperSettings.noFileInput = true;
        this.cropperSettings.width = 400;
        this.cropperSettings.height = 500;
        this.data = {};
  }

   ngOnInit(){
     //$('.materialboxed').materialbox();
     this.getProductDetail();
     this.getCategory();

   }

  getCategory(){
    let limit=25;
    this.categoryService.getCategory(limit).subscribe(
        data => this.categories = data._embedded.items,
        error => console.log(error),
        () => console.log("finish")
    );
  }

   onSubmit(): void {
      this.loading = true;
    
      
      var file:File = this.cropper.image;
      
      console.log(file);
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

   onHover(){
     if(this.formElement==false) this.formElement = true;
   }
   showElement(){
      if(this.formElement==false) this.formElement = true;
   }
   closeElement(){
      if(this.formElement==true) this.formElement = false;
   }
   fileChangeListener($event) {
    this.showElement();
    var image:any = new Image();
    var file:File = $event.target.files[0];
    var myReader:FileReader = new FileReader();
    var that = this;
    myReader.onloadend = function (loadEvent:any) {
        image.src = loadEvent.target.result;
        that.cropper.setImage(image);

    };
    myReader.readAsDataURL(file);

    console.log($event.target.files[0]);
   }
  
}
