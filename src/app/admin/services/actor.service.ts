import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { ActorModel } from '../models/actor-model';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  constructor(private http:HttpClient,@Inject('BASE_API_URL') private baseUrl:string) { }

  getAll(){
      return this.http.get(`${this.baseUrl}/api/actors`)
  }  
  get(id:number){
    return this.http.get(`${this.baseUrl}/api/actors/${id}`)
  }
  update(actorModel:ActorModel){
    return this.http.put(`${this.baseUrl}/api/actors`,actorModel)
  }
  add(actorModel:ActorModel){
    console.log(actorModel);
    return this.http.post(`${this.baseUrl}/api/actors`,actorModel)
  }
  delete(id?:number){
    return this.http.delete(`${this.baseUrl}/api/actors/${id}`)
  }
}
