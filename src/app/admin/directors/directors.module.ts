import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectorsComponent } from './directors.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';


const routes:Routes=[
  {
    path:'', component:DirectorsComponent
  }
]

@NgModule({
  declarations: [
    DirectorsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    SweetAlert2Module
  ],
  exports:[
    DirectorsComponent
  ]
})
export class DirectorsModule { }
