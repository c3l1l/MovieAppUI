import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutsModule } from './admin-layouts/admin-layouts.module';
import { MoviesModule } from './movies/movies.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutsComponent } from './admin-layouts/admin-layouts.component';
import { ToastrModule } from 'ngx-toastr';

const routes:Routes=[
  {
    path:'',component:AdminLayoutsComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminLayoutsModule,
    MoviesModule,
    DashboardModule,
    RouterModule.forChild(routes),
    ToastrModule

  ],
  exports:[
    AdminLayoutsModule,
    DashboardModule


  ]
})
export class AdminModule { }
