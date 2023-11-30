import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cv } from '../cv';
import { CvService } from 'src/app/services/cv-service';
import { APP_ROUTES } from 'src/app/config/routes.config';


@Component({
  selector: 'app-cd-detail',
  templateUrl: './cv-detail.component.html',
  styleUrls: ['./cv-detail.component.css']
})
export class CdDetailComponent {
  cv!: Cv | null;

  constructor(
    private cvService: CvService,
    private acr: ActivatedRoute,
    private router: Router,
  ) {
    const id = this.acr.snapshot.params['id'];
    this.cv = this.cvService.getCvById(id);
    if (!this.cv)
      this.router.navigate([APP_ROUTES.cv]);
  }
  deleteCv() {
    if (this.cv)
    {
      this.cvService.deleteCv(this.cv);
      this.router.navigate([APP_ROUTES.cv]);
    }
  }
}
