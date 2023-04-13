import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { UserModel } from '../models/user-model';

@Component({
  selector: 'app-admin-layouts',
  templateUrl: './admin-layouts.component.html',
  styleUrls: ['./admin-layouts.component.css']
})
export class AdminLayoutsComponent {
  isAuthenticate:boolean=false;
  userModel:UserModel=new UserModel();
 constructor(private authService:AuthService,private router:Router,private userService:UserService){
 }
 ngOnInit(){
  this.isAuthenticate=this.authService.isAuthenticate();
  this.getUser();
 }

 logout(){
  this.authService.logout();
  this.router.navigateByUrl("/login");

 }
 checkIsAuthenticate(){
  this.isAuthenticate=this.authService.isAuthenticate();

 }
 getUser(){
  this.userService.getUser().subscribe((res:any)=>{
    this.userModel=res.data;
    console.log("GetUSer:"+this.userModel);
  })
 }
}
