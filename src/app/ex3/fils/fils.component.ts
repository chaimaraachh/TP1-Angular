import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent {
  @Input() pereColor! : string;
  @Output() btnClick = new EventEmitter()
  myFavoriteColor: string = "Orchid";
  msg= "La couleur de mon père : "
  constructor() { }


  onClick(){
    this.msg="Ma couleur preférée est : "
    this.btnClick.emit(this.myFavoriteColor);
  }

}
