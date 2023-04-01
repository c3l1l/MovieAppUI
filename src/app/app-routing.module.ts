import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutsComponent } from './admin/admin-layouts/admin-layouts.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { MovieUpdateComponent } from './admin/movies/movie-update/movie-update.component';
import { MoviesComponent } from './admin/movies/movies.component';
import { GenreComponent } from './ui/genre/genre.component';
import { GenreModule } from './ui/genre/genre.module';
import { HomeComponent } from './ui/home/home.component';
import { LayoutsComponent } from './ui/layouts/layouts.component';

const routes: Routes = [
  // {
  //   path:'admin',component: AdminLayoutsComponent,
  //   loadChildren:()=>import('./admin/admin-layouts/admin-layouts.module').then(m=>m.AdminLayoutsModule)
  // },
  {
    path:'admin',component: AdminLayoutsComponent,
    children:[
      {
        path:'',component:DashboardComponent,
        loadChildren:()=>import('./admin/dashboard/dashboard.module').then(m=>m.DashboardModule)
      },
      {
        path:'movies',component:MoviesComponent,
        loadChildren:()=>import('./admin/movies/movies.module').then(m=>m.MoviesModule)
      },
      {
        path:'movies/movie-update/:id',component:MovieUpdateComponent
      }
    ]
  },
  {
    path:'',component:LayoutsComponent,
    children:[
      {
        path:'',
        component:HomeComponent,
        loadChildren:()=>import("./ui/home/home.module").then(m=>m.HomeModule)
      },
      {
        path:'genre',
        component:GenreComponent,
        loadChildren:()=>import("./ui/genre/genre.module").then(m=>m.GenreModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
