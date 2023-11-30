import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Cv} from "../cv";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent  {
  @Output() itemClick = new EventEmitter<Cv>()
  @Input() cv! : Cv;
  constructor() { }


  onClick(cv: Cv){
    this.itemClick.emit(cv)
  }

}
