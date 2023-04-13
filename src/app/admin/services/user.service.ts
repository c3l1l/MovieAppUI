import { Inject, Injectable } from '@angular/core';
import { RegisterModel } from '../models/register-model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient, @Inject("BASE_API_URL") private baseUrl:string) { }

  register(registerModel:RegisterModel){
    return this.http.post(`${this.baseUrl}/api/Users`, registerModel);
  }
  getUser(){
    return this.http.get(`${this.baseUrl}/api/Users`);
  }
}
