import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { HomeComponent } from './home/home.component';
import { AgmCoreModule } from '@agm/core';
import { LocateUsComponent } from './locate-us/locate-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ThrillingActivitiesComponent } from './thrilling-activities/thrilling-activities.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { ReachUsComponent } from './reach-us/reach-us.component';
import { ClimateComponent } from './climate/climate.component';
import { PackagesComponent } from './packages/packages.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactDetailsComponent,
    HomeComponent,
    LocateUsComponent,
    AboutUsComponent,
    ThrillingActivitiesComponent,
    GalleryComponent,
    AccomodationComponent,
    ReachUsComponent,
    ClimateComponent,
    PackagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAfJTVKnpLl0ULuuwDuix-9ANpyQhP6mfc'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
