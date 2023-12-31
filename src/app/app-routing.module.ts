import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangecolorComponent } from './ex1/changecolor/changecolor.component';
import { CarteComponent } from './ex2/carte/carte.component';
import { PereComponent } from './ex3/pere/pere.component';
import { CvComponent } from './ex4/cv/cv.component';
import { MiniwordComponent } from './ex5/miniword/miniword.component';
import { RainbowComponent } from './ex6/rainbow/rainbow.component';
import { DetailComponent } from './ex4/detail/detail.component';
import { CdDetailComponent } from './ex4/cv-detail/cv-detail.component';
import { LoginComponent } from './login/login.component';
import { ImagesComponent } from './images/images.component';

const routes: Routes = [
  { path: "ex1/:color", component:  ChangecolorComponent},
  { path: 'ex1', redirectTo: 'ex1/grey' },
  { path: "ex1", component:  ChangecolorComponent},
  { path: "ex2", component:  CarteComponent},
  { path: "ex3", component: PereComponent },
  { path: "ex4", component: CvComponent },
  { path: "ex4/:id", component: CdDetailComponent},
  { path: "ex5", component: MiniwordComponent },
  { path: "ex6", component: RainbowComponent },
  { path: "login", component: LoginComponent },
  { path: "images", component: ImagesComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
