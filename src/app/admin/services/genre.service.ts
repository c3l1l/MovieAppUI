import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { GenreModel } from '../models/genre-model';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private http:HttpClient,@Inject('BASE_API_URL') private baseUrl:string) { }

  getAll(){
      return this.http.get(`${this.baseUrl}/api/genres`)
  }  
  get(id:number){
    return this.http.get(`${this.baseUrl}/api/genres/${id}`)
  }
  update(genreModel:GenreModel){
    return this.http.put(`${this.baseUrl}/api/genres`,genreModel)
  }
  add(genreModel:GenreModel){
    console.log(genreModel.name);
    return this.http.post(`${this.baseUrl}/api/genres`,genreModel)
  }
  delete(id?:number){
    return this.http.delete(`${this.baseUrl}/api/genres/${id}`)
  }
}
