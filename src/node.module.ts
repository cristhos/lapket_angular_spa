import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal/node'; // for AoT we need to manually split universal packages

import { AppModule } from './app/app.module';
import { AppComponent } from './app/app.component';

@NgModule({
  bootstrap: [ AppComponent ],
  imports: [
    UniversalModule, // BrowserModule, HttpModule, and JsonpModule are included
    FormsModule,
    RouterModule.forRoot([], { useHash: false }),
    AppModule,
  ]
})

export class MainModule {}
