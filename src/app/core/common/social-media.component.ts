import { Component } from '@angular/core';

@Component({
  selector: 'site-social-media',
  templateUrl:'./social-media.component.html',
  styleUrls : ['./social-media.component.css']
})

export class SocialMediaComponent {
  social_medias = [
            {
              name : "Facebook",
              url : "https://www.facebook.com/LapketOfficial",
              icon : "fa fa-facebook ",
              class:"facebook-btn"
            },
            {
              name : "Google plus",
              url : "https://plus.google.com/u/0/b/112697887058690525875/112697887058690525875",
              icon :"fa fa-google-plus ",
              class : "googleplus-btn"
            },
            {
              name : "Twitter",
              url : "https://twitter.com/lapketofficial",
              icon :"fa fa-twitter",
              class :"twitter-btn"
            }
          ];
}
