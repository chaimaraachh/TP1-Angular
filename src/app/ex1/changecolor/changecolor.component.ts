import { Component } from '@angular/core';

@Component({
  selector: 'app-changecolor',
  templateUrl: './changecolor.component.html',
  styleUrls: ['./changecolor.component.css']
})
export class ChangecolorComponent {
  currentColor: string = '';


  resetColor() {
    this.currentColor = '';
  }

}
