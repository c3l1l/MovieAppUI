import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { MovieUpdateModel } from '../models/movie-update-model';
import { MovieAddModel } from '../models/movie-add-model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http:HttpClient,@Inject('BASE_API_URL') private baseUrl:string) { }

  getAll(){
      return this.http.get(`${this.baseUrl}/api/movies`)
  }
  getAllMoviesWithActorsAndDirector(){
    return this.http.get(`${this.baseUrl}/api/movies/GetMoviesWithActorsAndDirector`)

  }
  get(id:number){
    return this.http.get(`${this.baseUrl}/api/movies/${id}`)
  }
  update(movieUpdateModel:MovieUpdateModel){
    return this.http.put(`${this.baseUrl}/api/movies`,movieUpdateModel)
  }
  add(movieAddModel:MovieAddModel){
    console.log(movieAddModel.name +" - "+ movieAddModel.directorId);
    return this.http.post(`${this.baseUrl}/api/movies`,movieAddModel)
  }
  delete(id?:number){
    return this.http.delete(`${this.baseUrl}/api/movies/${id}`)
  }
}
