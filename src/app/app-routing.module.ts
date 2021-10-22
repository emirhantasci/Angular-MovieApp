import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MoviesComponent } from './movies/movies.component';

const routes: Routes=[
  {path:'', redirectTo:'/dashboard', pathMatch:'full'},
  {path:'detail/:id', component:MovieDetailComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'movies', component:MoviesComponent} //localhost:4200/movies denilince MoviesComponent açılacak.
]

@NgModule({
  exports:[RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
