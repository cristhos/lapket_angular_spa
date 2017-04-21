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
              url : "waza-tech.com",
              picture: "../../../assets/images/logo.jpg"
            },
            {
              name : "tutorielpro",
              url : "tutorielpro.com",
              picture : "./../../assets/images/logo.jpg"
            },
            {
              name : "tutorielpro",
              url : "tutorielpro.com",
              picture : "./../../assets/images/logo.jpg"
            },
            {
              name : "waza-tech",
              url : "waza-tech.com",
              picture: "../../../assets/images/logo.jpg"
            },
          ];
}
