import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutsComponent } from './admin/admin-layouts/admin-layouts.component';
import { GenreComponent } from './ui/genre/genre.component';
import { GenreModule } from './ui/genre/genre.module';
import { HomeComponent } from './ui/home/home.component';
import { LayoutsComponent } from './ui/layouts/layouts.component';

const routes: Routes = [
  {
    path:'admin',component: AdminLayoutsComponent,
    loadChildren:()=>import('./admin/admin-layouts/admin-layouts.module').then(m=>m.AdminLayoutsModule)
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
