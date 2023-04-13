import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-layouts',
  templateUrl: './admin-layouts.component.html',
  styleUrls: ['./admin-layouts.component.css']
})
export class AdminLayoutsComponent {
  isAuthenticate:boolean=false;
 constructor(private authService:AuthService,private router:Router){
 }
 ngOnInit(){
  this.isAuthenticate=this.authService.isAuthenticate();

 }

 logout(){
  this.authService.logout();
  this.router.navigateByUrl("/login");

 }
 checkIsAuthenticate(){
  this.isAuthenticate=this.authService.isAuthenticate();

 }
}
