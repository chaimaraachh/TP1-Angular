import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Cv} from "../cv";

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  @Output() showCV = new EventEmitter<number>()
  @Input() cvs : Cv[] = [];


  ngOnInit(): void {
  }


  cvSelected(id: number){
    this.showCV.emit(id);
  }
}
