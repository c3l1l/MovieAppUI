import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenreComponent } from './genre.component';
import { RouterModule, Routes } from '@angular/router';


const routes:Routes=[
  {path:'',component:GenreComponent}
]

@NgModule({
  declarations: [
    GenreComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    GenreComponent
  ]
})
export class GenreModule { }
