import { Component, OnInit } from '@angular/core';
import {Cv} from "../cv";

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent  {
 
  public cvs: Cv[] = [
    new Cv(0, "Raach", "Chaima", 23, 11111111, "Student", "assets/images/rotating_card_profile.png"),
    new Cv(1, "Ghaouari", "Koussay", 21, 22222222, "Student", "assets/images/rotating_card_profile2.png"),
    new Cv(2, "mansour", "wajdi", 22, 33333333, "Student", "assets/images/rotating_card_profile3.png"),
  ];

  selectedCv: Cv | null = null;

  showDetails(id: number) {
    this.selectedCv = this.cvs.find((cv) => cv.id === id) || null;
  }



}
