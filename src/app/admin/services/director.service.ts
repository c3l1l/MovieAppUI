import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { DirectorModel } from '../models/director-model';

@Injectable({
  providedIn: 'root'
})
export class DirectorService {

  constructor(private http:HttpClient,@Inject('BASE_API_URL') private baseUrl:string) { }

  getAll(){
      return this.http.get(`${this.baseUrl}/api/directors`)
  }
  get(id:number){
    return this.http.get(`${this.baseUrl}/api/directors/${id}`)
  }
  update(directorModel:DirectorModel){
    return this.http.put(`${this.baseUrl}/api/directors`,directorModel)
  }
  add(directorModel:DirectorModel){
    return this.http.post(`${this.baseUrl}/api/directors`,directorModel)
  }
  delete(id?:number){
    return this.http.delete(`${this.baseUrl}/api/directors/${id}`)
  }
}
