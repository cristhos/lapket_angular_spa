import { Component } from '@angular/core';

@Component({
  selector: 'site-partainer',
  templateUrl:'./partainer.component.html',
  styleUrls : ['./partainer.component.css']
})

export class PartainerComponent {
  partainers = [
            {
              name : "waza-tech",
              url : "http://www.waza-tech.com",
              picture: "../../../assets/images/partenair/wazatech.jpg"
            },
            {
              name : "tutorielpro",
              url : "http://www.tutorielpro.com",
              picture : "./../../assets/images/partenair/tutorielpro.png"
            },
            {
              name : "asky",
              url : "http://www.asky.com",
              picture : "./../../assets/images/partenair/asky.jpg"
            }
            
          ];
}
