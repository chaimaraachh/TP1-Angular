import { Component } from '@angular/core';

@Component({
  selector: 'app-miniword',
  templateUrl: './miniword.component.html',
  styleUrls: ['./miniword.component.css']
})
export class MiniwordComponent {
  fontColor: string = '';
  fontSize: number = 18;
  selectedFont: string = 'Arial';
  fontList: string[] = ['Arial', 'Times New Roman', 'Courier New'];
}
