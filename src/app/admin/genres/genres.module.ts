import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenresComponent } from './genres.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { RouterModule, Routes } from '@angular/router';
import { GenreUpdateComponent } from './genre-update/genre-update.component';
import { FormsModule } from '@angular/forms';
import { GenreAddComponent } from './genre-add/genre-add.component';
import { GenrePipe } from '../pipes/genre.pipe';

const routes:Routes=[
  {path:'',component:GenresComponent}
]

@NgModule({
  declarations: [
    GenresComponent,
    GenreUpdateComponent,
    GenreAddComponent,
    GenrePipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SweetAlert2Module,
    FormsModule
  ],
  exports:[
    GenresComponent,
    GenreUpdateComponent,
    GenreAddComponent
  ]
})
export class GenresModule { }
