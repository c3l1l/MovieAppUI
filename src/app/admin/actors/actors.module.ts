import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActorsComponent } from './actors.component';
import { RouterModule, Routes } from '@angular/router';
import { ActorAddComponent } from './actor-add/actor-add.component';
import { ActorUpdateComponent } from './actor-update/actor-update.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ActorPipe } from '../pipes/actor.pipe';

const routes:Routes=[
  {path:'', component:ActorsComponent}
]

@NgModule({
  declarations: [
    ActorsComponent,
    ActorAddComponent,
    ActorUpdateComponent,
    ActorPipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    SweetAlert2Module
  ],
  exports:[
    ActorsComponent,
    ActorAddComponent,
    ActorUpdateComponent
  ]
})
export class ActorsModule { }
