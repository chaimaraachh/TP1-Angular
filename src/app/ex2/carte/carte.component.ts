import { Component } from '@angular/core';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent {
  name = 'Inna Corman';
  profession = 'Product Manager';
  motto = 'To be or not to be, this is my awesome motto!';
  jobDescription = 'Web design, Adobe Photoshop, HTML5, CSS3, Corel and many others...';
  followers = 235;
  following = 114;
  projects = 35;
  facebook = "";
  googlePlus = "";
  twitter = "";
  image = "assets/images/rotating_card_profile.png";

}
