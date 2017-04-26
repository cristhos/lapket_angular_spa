import { Component } from '@angular/core';

@Component({
  selector: 'site-about',
  templateUrl:'./about.component.html',
  styleUrls : ['./about.component.css']
})

export class AboutComponent {
  teams = [
            {
              full_name : "Lithos Cristal",
              fonction : "Co-fondateur & CEO",
              picture: "../../../assets/images/lithos.jpg"
            },
            {
              full_name : "Arsene Kalend",
              fonction : "Co-fondateur & RS",
              picture : "./../../assets/images/arsene.jpg"
            },
            {
              full_name : "Jonhatan Kadiayi",
              fonction : "Man of Design",
              picture : "../../../assets/images/jo.jpg"
            },
            {
              full_name : "Manne Kapinga",
              fonction : "Man of Community",
              picture : "../../../assets/images/logo.jpg"
            }
          ];
}
