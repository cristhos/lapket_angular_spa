import { Injectable }    from '@angular/core';

@Injectable()
export class ImageResizerService{

    readFile(file, reader, callback){
        reader.onload = () => {
          callback(reader.result);
        }
        reader.readAsDataURL(file);
    }

    resize(img, MAX_WIDTH:number = 300, MAX_HEIGHT:number = 500, callback){

    return img.onload = () => {

      let width = img.width;
      let height = img.height;

      // Set the WxH to fit the Max values (but maintain proportions)
      if (width > height) {
          if (width > MAX_WIDTH) {
              height *= MAX_WIDTH / width;
              width = MAX_WIDTH;
          }
      } else {
          if (height > MAX_HEIGHT) {
              width *= MAX_HEIGHT / height;
              height = MAX_HEIGHT;
          }
      }

      let canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      let ctx = canvas.getContext("2d");

      ctx.drawImage(img, 0, 0,  width, height);
      let resized_img = canvas.toDataURL('image/jpeg');

      callback(resized_img);
    };
  }
}
