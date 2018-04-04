import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {example} from './app.router';
import {RouterModule, Routes} from '@angular/router'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from './experience/experience.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import {GoogleMapsModule} from 'google-maps-angular2';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SkillsComponent,
    ContactComponent,
    ExperienceComponent,
    AboutmeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    example,
    GoogleMapsModule.forRoot({
      url: 'https://maps.googleapis.com/maps/api/js?libraries=places&key=AIzaSyAnz7IX8ndxYSKVgKZpxKQyYdv6hz6qsk0'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
