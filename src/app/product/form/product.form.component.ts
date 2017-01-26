import { Component, OnInit, OnDestroy, ViewChild, NgZone,ChangeDetectorRef } from '@angular/core';
import { NgForm }    from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';

import { ProductFormModel } from './product.form';
import { AlbumService } from '../../album/service/album.service';
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
 
  albums =[];
  product : any;
  form_album = false;
  loading = false;
  sub;
  model;
  file_src;
  request : boolean;
  constructor(
    private albumService : AlbumService,
    private productService: ProductService,
    public router: Router,
    private route: ActivatedRoute,
    private apiUrlService : ApiUrlService,
    private imageResizerService : ImageResizerService
  ) {}

   ngOnInit(){
     //$('.materialboxed').materialbox();

     this.getMyAlbums();

   }

   getMyAlbums(): void {
     this.albumService.getMyAlbums().subscribe(
         data => {
            for(let i=1; i < data.total ;i++) this.albums.push(data._embedded.items[i]);
            //active album form lorsque l'utilisateur a zero album
            if(data.total == 0) this.formAlbum(1);
            this.getProductDetail();
         },
         error => console.log(error),
         () => console.log("finish")
     );
   }
   formAlbum(arg: number ){
     if(arg == 1) this.form_album = true;
     if(arg == 0) {
       this.form_album = false;
       this.getMyAlbums();
     }   
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
             this.model = new ProductFormModel(null,'','',0,null);
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
             this.model = new ProductFormModel(null,'','',0,null);
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
               this.model = new ProductFormModel(data.picture.id,data.name,data.description,data.price,data.album.id);
               this.file_src = data.picture.web_path;
               this.request = true;
             },
             error => console.log(error),
             () => console.log("finish")
         );
       }else{
          this.model = new ProductFormModel(null,'','',0,null);
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
