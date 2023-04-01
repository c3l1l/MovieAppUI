import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieUpdateComponent } from './movie-update/movie-update.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

const routes:Routes=[
  {path:'',component:MoviesComponent}
]

@NgModule({
  declarations: [
    MoviesComponent,
    MovieDetailComponent,
    MovieUpdateComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SweetAlert2Module
    
  ],
  exports:[
    MoviesComponent,
    MovieDetailComponent,
    MovieUpdateComponent
  ]
})
export class MoviesModule { }
