import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './ui/home/home.component';
import { LayoutsComponent } from './ui/layouts/layouts.component';

const routes: Routes = [
  {
    path:'',component:LayoutsComponent,
    children:[
      {
        path:'',
        component:HomeComponent,
        loadChildren:()=>import("./ui/home/home.module").then(m=>m.HomeModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }