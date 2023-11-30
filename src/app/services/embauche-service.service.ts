import { Injectable } from '@angular/core';
import {Cv} from "../ex4/cv";
import {ToastrService} from "ngx-toastr";
import { trigger, state, style, transition, animate } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {
  listeEmbacuhes: Cv[] = [];


  constructor(private toastrService: ToastrService) { }

  embaucher(cv: Cv | null):boolean {
    if (cv && !this.listeEmbacuhes.includes(cv)) {
      this.listeEmbacuhes.push(cv);
      this.toastrService.success("Cv embauché avec succés")
      return true
    }
    else{
      this.toastrService.error("Ce cv est déja embauché")
      return false

    }
  }

  getList(): Cv[] {
    return this.listeEmbacuhes;
  }
}
