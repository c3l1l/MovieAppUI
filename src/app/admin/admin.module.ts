import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutsModule } from './admin-layouts/admin-layouts.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminLayoutsModule 

  ],
  exports:[
    AdminLayoutsModule 

  ]
})
export class AdminModule { }
