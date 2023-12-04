import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvComponent } from './ex4/cv/cv.component';
import { ListeComponent } from './ex4/liste/liste.component';
import { ItemComponent } from './ex4/item/item.component';
import { DetailComponent } from './ex4/detail/detail.component';
import { RainbowDirective } from './rainbow.directive';
import { DefaultImagePipe } from './default-image.pipe';
import { MiniwordComponent } from './ex5/miniword/miniword.component';
import { ChangecolorComponent } from './ex1/changecolor/changecolor.component';
import { PereComponent } from './ex3/pere/pere.component';
import { FilsComponent } from './ex3/fils/fils.component';
import { CarteComponent } from './ex2/carte/carte.component';
import { RainbowComponent } from './ex6/rainbow/rainbow.component';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { EmbaucheComponent } from './ex4/embauche/embauche.component'; 
import {ToastrModule} from "ngx-toastr";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {trigger,state,style,animate,transition}from '@angular/animations';
import { CdDetailComponent } from './ex4/cv-detail/cv-detail.component';
import { LoginComponent } from './login/login.component';
import { ImagesComponent } from './images/images.component';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    DefaultImagePipe ,
    AppComponent,
    CvComponent,
    ListeComponent,
    ItemComponent,
    DetailComponent,
    RainbowDirective,
    MiniwordComponent,
    ChangecolorComponent,
    PereComponent,
    FilsComponent,
    CarteComponent,
    RainbowComponent,
    NavbarComponent,
    EmbaucheComponent,
    CdDetailComponent,
    LoginComponent,
    ImagesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({positionClass: "toast-top-center"  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
