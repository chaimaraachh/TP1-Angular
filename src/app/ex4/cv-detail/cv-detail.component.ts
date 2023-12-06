import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cv } from '../cv';
import { CvService } from 'src/app/services/cv-service';
import { APP_ROUTES } from 'src/app/config/routes.config';
import { EmbaucheService } from 'src/app/services/embauche-service.service';
import { ToastrService } from 'ngx-toastr';


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
    private embaucheService: EmbaucheService,
    private toastr: ToastrService
  ) {
    const id = this.acr.snapshot.params['id'];
    this.cv = this.cvService.getCvById(id);
    if (!this.cv)
      this.router.navigate([APP_ROUTES.cv]);
  }


  /*deleteCv() {
    if (this.cv)
    {

      this.cvService.deleteCv(this.cv);
      this.embaucheService.deleteCv(this.cv);
      this.router.navigate([APP_ROUTES.cv]);
    }
  }*/

  deleteCv() {
    if (this.cv) {
      this.cvService.deleteCvapi(this.cv.id).subscribe({
        next: (response) => {
          console.log('CV deleted from API', response);
          this.embaucheService.deleteCv(this.cv!);
          this.router.navigate([APP_ROUTES.cv]);
        },
        error: (error) => {
          console.error('Error deleting CV from API', error);
          this.toastr.error('API not available. Deleting CV locally.');
  
          if (this.cvService.deleteCv(this.cv!)) {
            this.embaucheService.deleteCv(this.cv!);
            this.router.navigate([APP_ROUTES.cv]);
          } else {
            this.toastr.error('Error: CV not found in local data.');
          }
        }
      });
    } 
  }
  
  
}
