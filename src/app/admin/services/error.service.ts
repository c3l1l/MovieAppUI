import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(private toastr:ToastrService) { }

  errorHandler(err:any){
   if(err.status==400 && err.data==null){
       err.error.errors.forEach((element: any)=>{
        this.toastr.error(element)})
    }
    else if(err.status == 400){
      this.toastr.error(err)
    }

    else if(err.status==0){
      this.toastr.error("Connection problem , Please try again later !");
    }
    else if(err.status==405){
      this.toastr.error("Unknown Error!");
    }
    else if(err.status==401){
      this.toastr.error("Unauthorized action !");
    }
    else{
      console.log(err);
      err.error.errors.forEach((element: any)=>{
        console.log("error:> "+element)
        this.toastr.error(element)})
    }
  }

}
