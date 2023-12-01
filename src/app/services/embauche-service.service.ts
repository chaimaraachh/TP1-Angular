import { Injectable } from '@angular/core';
import { Cv } from "../ex4/cv";
import { ToastrService } from "ngx-toastr";
// autres importations...

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {
  listeEmbacuhes: Cv[] = [];

  constructor(private toastrService: ToastrService) { }

  embaucher(cv: Cv | null): boolean {
    if (cv && !this.listeEmbacuhes.includes(cv)) {
      this.listeEmbacuhes.push(cv);
      this.toastrService.success("Cv embauché avec succès");
      return true;
    } else {
      this.toastrService.error("Ce cv est déjà embauché");
      return false;
    }
  }

  getList(): Cv[] {
    return this.listeEmbacuhes;
  }

  deleteCv(cv: Cv): boolean {
    const originalLength = this.listeEmbacuhes.length;
    this.listeEmbacuhes = this.listeEmbacuhes.filter(item => item !== cv);
    return this.listeEmbacuhes.length < originalLength;
  }
}
