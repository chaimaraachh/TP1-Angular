import { Component, Input, OnInit, inject } from '@angular/core';
import {Cv} from "../cv";
import { Observable } from 'rxjs';
import { CvService } from 'src/app/services/cv-service';
import { ToastrService } from 'ngx-toastr';
import { EmbaucheService } from 'src/app/services/embauche-service.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent  {


  @Input() showedCv: Cv | null = null;

  private embaucheService = inject(EmbaucheService);
  private toaster = inject(ToastrService);
  motto = 'To be or not to be, this is my awesome motto!';
  jobDescription = 'Web design, Adobe Photoshop, HTML5, CSS3, Corel and many others...';


  embaucher() {
    if (this.showedCv) {
      if (this.embaucheService.embaucher(this.showedCv)) {
        this.toaster.success(`${this.showedCv.firstname} ${this.showedCv.name} a été embauché avec succès`)
      } else {
        this.toaster.warning(`${this.showedCv.firstname} ${this.showedCv.name} est déjà embauché`)
      }
    }
  }
}
