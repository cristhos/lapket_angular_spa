import { NgModule }       from '@angular/core';
import { BrowserModule,Title }  from '@angular/platform-browser';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PasswordStrengthBarModule } from 'ng2-password-strength-bar';

@NgModule({
  declarations : [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    routing,
  ],
  providers : [
     Title,
  ],
  bootstrap :[AppComponent]
})
export class AppModule {}
