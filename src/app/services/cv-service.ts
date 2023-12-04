import { Injectable } from '@angular/core';
import {Cv} from "../ex4/cv";
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CvService {


  private cvSubject : Subject<Cv> = new Subject<Cv>();
  public cvObservable$ = this.cvSubject.asObservable();

  public cvs: Cv[] = [
    new Cv(0, "Raach", "Chaima", 23, 11111111, "Student", "assets/images/rotating_card_profile.png"),
    new Cv(1, "Ghaouari", "Koussay", 21, 22222222, "Student", "assets/images/rotating_card_profile2.png"),
    new Cv(2, "mansour", "wajdi", 22, 33333333, "Student", "assets/images/rotating_card_profile3.png"),
  ];

  constructor() { }

  getCvs(): Cv[]{
    return this.cvs;
  }

  getCvById(id: number): Cv | null {
    return this.cvs.find((cv) => cv.id === +id) ?? null;
  }

  deleteCv(cv: Cv): boolean {
    const originalLength = this.cvs.length;
    this.cvs = this.cvs.filter(item => item !== cv);
    return this.cvs.length < originalLength;
  }

  showCv(cv : Cv){
    this.cvSubject.next(cv)
  }
  
}
