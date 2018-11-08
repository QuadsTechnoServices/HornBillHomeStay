import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ThrillingActivitiesComponent } from './thrilling-activities/thrilling-activities.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ReachUsComponent } from './reach-us/reach-us.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'thrilling-activities', component: ThrillingActivitiesComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'reach-us', component: ReachUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
