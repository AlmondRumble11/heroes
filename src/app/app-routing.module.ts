import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroCharactersComponent } from './hero-characters/hero-characters.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [

  // default route
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

  //route to heroes 
  { path: 'heroes', component: HeroCharactersComponent },

  //route to dashboard
  { path: 'dashboard', component: DashboardComponent },

  //route to see the details of each hero. :id is a placeholder for specific id
  { path: 'detail/:id', component: HeroDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  //will be available throughout the application
  exports: [RouterModule]
})
export class AppRoutingModule { }