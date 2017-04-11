import { Component } from '@angular/core';

@Component({
  selector: 'site-about',
  templateUrl:'./about.component.html',
  styles : [
    `
      .desc-pict{
        width: 58px;
        height: 48px;
        border-radius: 5px;
      }
    `
  ]
})

export class AboutComponent {
  //Utilisation du service pour charger la session
}
