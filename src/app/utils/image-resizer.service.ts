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
   dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, {type:mime});
  }
}
