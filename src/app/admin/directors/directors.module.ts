import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectorsComponent } from './directors.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { DirectorAddComponent } from './director-add/director-add.component';
import { DirectorUpdateComponent } from './director-update/director-update.component';
import { DirectorPipe } from '../pipes/director.pipe';


const routes:Routes=[
  {
    path:'', component:DirectorsComponent
  }
]

@NgModule({
  declarations: [
    DirectorsComponent,
    DirectorAddComponent,
    DirectorUpdateComponent,
    DirectorPipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    SweetAlert2Module
  ],
  exports:[
    DirectorsComponent,
    DirectorAddComponent,
    DirectorUpdateComponent
  ]
})
export class DirectorsModule { }
