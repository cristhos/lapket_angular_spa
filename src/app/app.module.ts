import { NgModule }       from '@angular/core';
import { BrowserModule,Title }  from '@angular/platform-browser';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations : [
    AppComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'cli-universal-demo'}),
    SharedModule,
    routing,
  ],
  providers : [
     Title,
  ],
  bootstrap :[AppComponent]
})
export class AppModule {}
