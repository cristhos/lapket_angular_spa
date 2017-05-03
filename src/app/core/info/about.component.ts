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
              picture: "../../../assets/images/team/lithos.jpg",
              facebook:"https://web.facebook.com/LithosCristal",
              twitter :"https://twitter.com/LithosCristal",
            },
            {
              full_name : "Arsene Kalend",
              fonction : "Co-fondateur & RS",
              picture : "./../../assets/images/team/arsene.jpg",
              facebook:"https://web.facebook.com/arsene.kalend",
              twitter :"https://twitter.com/arsene_kalend",
            },
            {
              full_name : "Jonathan Kadiayi",
              fonction : "Man of Design",
              picture : "../../../assets/images/team/djo.jpg",
              facebook:"https://web.facebook.com/jonathan.kadiayi",
              twitter :"",
            },
            {
              full_name : "Manne Kapinga",
              fonction : "Man of Community",
              picture : "../../../assets/images/team/manne.jpg",
              facebook:"https://web.facebook.com/mannevic.kapinga.3",
              twitter:"https://twitter.com/MannevicKaping1",
            }
          ];
}
