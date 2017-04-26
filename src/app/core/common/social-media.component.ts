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
              icon : "fa fa-facebook blue-text",
            },
            {
              name : "Twitter",
              url : "https://twitter.com/lapketofficial",
              icon :"fa fa-twitter blue-text",
            },
          ];
}
