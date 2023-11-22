import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangecolorComponent } from './ex1/changecolor/changecolor.component';
import { CarteComponent } from './ex2/carte/carte.component';
import { PereComponent } from './ex3/pere/pere.component';
import { CvComponent } from './ex4/cv/cv.component';
import { MiniwordComponent } from './ex5/miniword/miniword.component';
import { RainbowComponent } from './ex6/rainbow/rainbow.component';

const routes: Routes = [
  { path: "ex1", component:  ChangecolorComponent},
  { path: "ex2", component:  CarteComponent},
  { path: "ex3", component: PereComponent },
  { path: "ex4", component: CvComponent },
  { path: "ex5", component: MiniwordComponent },
  { path: "ex6", component: RainbowComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
