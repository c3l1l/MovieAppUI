import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { MovieUpdateModel } from '../models/movie-update-model';

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
}
