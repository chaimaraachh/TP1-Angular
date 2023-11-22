import { Component } from '@angular/core';

@Component({
  selector: 'app-changecolor',
  templateUrl: './changecolor.component.html',
  styleUrls: ['./changecolor.component.css']
})
export class ChangecolorComponent {
  currentColor: string = '';

  changeColor(newColor: string) {
    this.currentColor = newColor;
  }

  resetColor() {
    this.currentColor = '';
  }

}
