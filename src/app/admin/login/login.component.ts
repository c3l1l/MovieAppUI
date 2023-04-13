import { Component } from '@angular/core';
import { AdminLoginModel } from '../models/admin-login-model';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { AdminTokenModel } from '../models/admin-token-model';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ErrorService } from '../services/error.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  adminTokenModel:AdminTokenModel=new AdminTokenModel("","");

  adminLoginModel:AdminLoginModel=new AdminLoginModel();
  constructor(private authService:AuthService,private router:Router,private toastr:ToastrService,private errorService:ErrorService){ }
  login(){
      this.authService.login(this.adminLoginModel).subscribe((res:any)=>{
      this.adminTokenModel=res.data;
      localStorage.setItem("token",this.adminTokenModel.accessToken);
      this.router.navigateByUrl("admin/movies");
    },(err)=>{
      this.errorService.errorHandler(err);
    })
  }

}
