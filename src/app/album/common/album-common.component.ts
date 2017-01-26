import { Component, Input} from '@angular/core';

@Component({
  selector: 'album-common',
  template: require('./album-common.component.html'),
  styles : [`

  `]
})

export class AlbumCommonComponent {
  @Input()
  album : any;
  products: any;

  deleteAlbum(album_id){
    alert("suppresion irreversible");
  }

}
