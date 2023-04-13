import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ErrorService } from './error.service';
import { AdminLoginModel } from '../models/admin-login-model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, @Inject('BASE_API_URL') private baseUrl: string, private router: Router, private toastr: ToastrService, private errorService: ErrorService) { }

  isAuthenticate() {
    if (localStorage.getItem("token")) {
      return true;
    }
    return false;
  }

  login(adminLoginModel: AdminLoginModel) {
    return this.http.post(`${this.baseUrl}/api/Auth/CreateToken`, adminLoginModel);
  }

  logout() {
    localStorage.removeItem("token");
    this.router.navigateByUrl("admin/login");
    this.toastr.info("Successfully logged out !");
  }

}
