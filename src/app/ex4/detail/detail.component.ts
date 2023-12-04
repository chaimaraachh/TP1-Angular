import { Component, Input, OnInit, inject } from '@angular/core';
import {Cv} from "../cv";
import { Observable } from 'rxjs';
import { CvService } from 'src/app/services/cv-service';
import { ToastrService } from 'ngx-toastr';
import { EmbaucheService } from 'src/app/services/embauche-service.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent  {


  @Input() showedCv: Cv | null = null;

  //showedCv: Cv | null = null;

  private embaucheService = inject(EmbaucheService);
  private toaster = inject(ToastrService);
  motto = 'To be or not to be, this is my awesome motto!';
  jobDescription = 'Web design, Adobe Photoshop, HTML5, CSS3, Corel and many others...';

  constructor(private cvService : CvService) { }


  embaucher() {
    if (this.showedCv) {
      this.embaucheService.embaucher(this.showedCv)

    }
  }

  ngOnInit(): void {
    this.cvService.cvObservable$.subscribe(
      (cv) => {
        this.showedCv = cv;
      }
    )
  }
}
