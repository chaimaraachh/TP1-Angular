import { Component } from '@angular/core';

@Component({
  selector: 'app-pere',
  templateUrl: './pere.component.html',
  styleUrls: ['./pere.component.css']
})
export class PereComponent {

  
  color: string = "LightBlue";

  constructor() { }


  changeColor(color : string){
    this.color = color
  }

}
