import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

const routes:Routes=[
{path:'',component:RegisterComponent}
]

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SweetAlert2Module,
    FormsModule
  ],
  exports:[
    RegisterComponent
  ]
})
export class RegisterModule { }
