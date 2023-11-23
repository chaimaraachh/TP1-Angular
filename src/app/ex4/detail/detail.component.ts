import { Component, Input, OnInit } from '@angular/core';
import {Cv} from "../cv";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent  {


  @Input() showedCv: Cv | null = null;


  motto = 'To be or not to be, this is my awesome motto!';
  jobDescription = 'Web design, Adobe Photoshop, HTML5, CSS3, Corel and many others...';

}
