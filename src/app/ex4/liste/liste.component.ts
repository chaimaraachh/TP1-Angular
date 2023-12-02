import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Cv} from "../cv";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent  {
  //@Output() showCV = new EventEmitter<Cv>()
  @Input() cvs : Cv[] = [];





  //cvSelected(cv:Cv){
    //this.showCV.emit(cv);
  //}
}
