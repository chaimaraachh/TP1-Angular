import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Cv} from "../cv";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Output() itemClick = new EventEmitter<number>()
  @Input() cv! : Cv;
  constructor() { }

  ngOnInit(): void {
  }

  onClick(id: number){
    this.itemClick.emit(id)
  }

}
