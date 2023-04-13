import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutsComponent } from './admin/admin-layouts/admin-layouts.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { MovieUpdateComponent } from './admin/movies/movie-update/movie-update.component';
import { MoviesComponent } from './admin/movies/movies.component';
import { HomeComponent } from './ui/home/home.component';
import { LayoutsComponent } from './ui/layouts/layouts.component';
import { MovieAddComponent } from './admin/movies/movie-add/movie-add.component';
import { MovieDetailComponent } from './admin/movies/movie-detail/movie-detail.component';
import { GenresComponent } from './admin/genres/genres.component';
import { GenreComponent } from './ui/genre/genre.component';
import { GenreUpdateComponent } from './admin/genres/genre-update/genre-update.component';
import { GenreAddComponent } from './admin/genres/genre-add/genre-add.component';
import { ActorsComponent } from './admin/actors/actors.component';
import { ActorUpdateComponent } from './admin/actors/actor-update/actor-update.component';
import { ActorAddComponent } from './admin/actors/actor-add/actor-add.component';
import { DirectorsComponent } from './admin/directors/directors.component';
import { DirectorUpdateComponent } from './admin/directors/director-update/director-update.component';
import { DirectorAddComponent } from './admin/directors/director-add/director-add.component';
import { LoginComponent } from './admin/login/login.component';
import { AuthGuard } from './admin/login/guard/auth.guard';
import { RegisterComponent } from './admin/register/register.component';

const routes: Routes = [
  // {
  //   path:'admin',component: AdminLayoutsComponent,
  //   loadChildren:()=>import('./admin/admin-layouts/admin-layouts.module').then(m=>m.AdminLayoutsModule)
  // },
  {
    path:'login',component:LoginComponent,
    loadChildren:()=>import('./admin/login/login.module').then(m=>m.LoginModule)
  },
  {
    path:'register',component:RegisterComponent,
    loadChildren:()=>import('./admin/register/register.module').then(m=>m.RegisterModule)
  },
  {
    path:'admin',component: AdminLayoutsComponent,
    canActivateChild:[AuthGuard],
    children:[
      {
        path:'',component:DashboardComponent,
        loadChildren:()=>import('./admin/dashboard/dashboard.module').then(m=>m.DashboardModule)
      },
      // {
      //   path:'login',component:LoginComponent,
      //   loadChildren:()=>import('./admin/login/login.module').then(m=>m.LoginModule)
      // },
      {
        path:'movies',component:MoviesComponent,
        loadChildren:()=>import('./admin/movies/movies.module').then(m=>m.MoviesModule)
      },
      {
        path:'movies/movie-detail/:id',component:MovieDetailComponent
      },
      {
        path:'movies/movie-update/:id',component:MovieUpdateComponent
      },
      {
        path:'movies/movie-add',component:MovieAddComponent
      },
      {
        path:'genres',component:GenresComponent,
        loadChildren:()=>import('./admin/genres/genres.module').then(m=>m.GenresModule)
      },
      {
        path:'genres/genre-update/:id',component:GenreUpdateComponent
      },
      {
        path:'genres/genre-add',component:GenreAddComponent
      },
      {
        path:'actors',component:ActorsComponent,
        loadChildren:()=>import('./admin/actors/actors.module').then(m=>m.ActorsModule)
      },
      {
        path:'actors/actor-update/:id',component:ActorUpdateComponent
      },
      {
        path:'actors/actor-add',component:ActorAddComponent
      },
      {
        path:'directors',component:DirectorsComponent,
        loadChildren:()=>import('./admin/directors/directors.module').then(m=>m.DirectorsModule)
      },
      {
        path:'directors/director-update/:id',component:DirectorUpdateComponent
      },
      {
        path:'directors/director-add',component:DirectorAddComponent
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
