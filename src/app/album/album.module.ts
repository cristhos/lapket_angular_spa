import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import {
  AlbumService,
  AlbumDetailComponent,
  AlbumListComponent
} from './album.component';

import {
  SharedModule
} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    AlbumDetailComponent,
    AlbumListComponent        
  ],
  exports: [ 
      AlbumDetailComponent,
      AlbumListComponent
    ],
  providers : [
    AlbumService,
  ],
})
export class AlbumModule {}
