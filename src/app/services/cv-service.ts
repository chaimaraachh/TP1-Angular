import { Injectable } from '@angular/core';
import {Cv} from "../ex4/cv";
import { Observable, Subject, catchError, map, of, tap, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class CvService {

  private apiUrl = 'https://apilb.tridevs.net/api/personnes';

  
  private cvSubject : Subject<Cv> = new Subject<Cv>();
  public cvObservable$ = this.cvSubject.asObservable();

  public cvs: Cv[] = [
    new Cv(0, "Raach", "Chaima", 23, 11111111, "Student", "assets/images/rotating_card_profile.png"),
    new Cv(1, "Ghaouari", "Koussay", 21, 22222222, "Student", "assets/images/rotating_card_profile2.png"),
    new Cv(2, "mansour", "wajdi", 22, 33333333, "Student", "assets/images/rotating_card_profile3.png"),
  ];

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  
  getCvsfromapi(): Observable<Cv[]> {
    return this.http.get<Cv[]>(this.apiUrl).pipe(
      map(data => data.map(item => new Cv(item.id, item.name, item.firstname, item.age, item.cin, item.job, item.path))),
      tap((cvArray: Cv[]) => this.cvs = cvArray),
      catchError(this.handleError.bind(this))
    );
  }  

  private handleError(error: HttpErrorResponse): Observable<Cv[]> {
    this.toastr.error('There was a problem fetching CVs from the API.');
    return of(this.cvs);
  }/*
  getCvs(): Cv[]{
    return this.cvs;
  }
*/
  getCvById(id: number): Cv | null {
    return this.cvs.find((cv) => cv.id === +id) ?? null;
  }
/*
  deleteCv(cv: Cv): boolean {
    const originalLength = this.cvs.length;
    this.cvs = this.cvs.filter(item => item != cv);
    console.log(this.cvs);
    return this.cvs.length < originalLength;
  }
*/

deleteCvapi(id: number): Observable<Cv> {
  return this.http.delete<Cv>(`${this.apiUrl}/${id}`);
}

deleteCv(cv: Cv): boolean {
  const originalLength = this.cvs.length;
  this.cvs = this.cvs.filter(item => item.id !== cv.id);
  const isDeleted = this.cvs.length < originalLength;
  if (isDeleted) {
    console.log(`CV with ID ${cv.id} deleted successfully.`);
  } else {
    console.warn(`No CV found with ID ${cv.id}.`);
  }
  return isDeleted;
}

  showCv(cv : Cv){
    this.cvSubject.next(cv)
  }
  
}
