import { Component } from '@angular/core';
import { RegisterModel } from '../models/register-model';
import { UserService } from '../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { ErrorService } from '../services/error.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerModel:RegisterModel=new RegisterModel();
  passwordConfirm:string="";

  constructor(private userService:UserService,private toastr:ToastrService,private errorService:ErrorService,private router:Router){

  }
  ngOnInit(){

  }

  register(form:any){
      //alert(this.registerModel.userName+"-"+this.registerModel.email+"-"+this.registerModel.password);
      this.userService.register(this.registerModel).subscribe((res:any)=>{
        this.toastr.success('You signed up successfully.', 'Signed Up !');
        this.router.navigateByUrl("/login");
      },(err)=>{
        this.errorService.errorHandler(err);
      })
  }
  checkPasswords(form:NgForm){
    if(this.registerModel.password!=this.passwordConfirm)
    alert("Passwords do not match");
    else{}
    this.register(form);
  }
}
