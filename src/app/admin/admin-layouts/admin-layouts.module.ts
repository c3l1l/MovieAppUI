import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutsComponent } from './admin-layouts.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {
    path:'', component:AdminLayoutsComponent
  }
]

@NgModule({
  declarations: [
    AdminLayoutsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    AdminLayoutsComponent
  ]
})
export class AdminLayoutsModule { }
