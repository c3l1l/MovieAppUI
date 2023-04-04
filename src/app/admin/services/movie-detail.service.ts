import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { MovieDetailModel } from '../models/movie-detail-model';

@Injectable({
  providedIn: 'root'
})
export class MovieDetailService {

  constructor(private http:HttpClient,@Inject('BASE_API_URL') private baseUrl:string) { }

  get(id:number){
    return this.http.get(`${this.baseUrl}/api/MovieDetails/${id}`)
  }
  getByMovieId(id:number){
    return this.http.get(`${this.baseUrl}/api/MovieDetails/GetByMovieId/${id}`);
  }
  update(movieDetailModel:MovieDetailModel){
    return this.http.put(`${this.baseUrl}/api/movieDetails`,movieDetailModel)
  }
  add(movieDetailModel:MovieDetailModel){
    return this.http.post(`${this.baseUrl}/api/movieDetails`,movieDetailModel)
  }
  delete(id?:number){
    return this.http.delete(`${this.baseUrl}/api/movieDetails/${id}`)
  }
  addPosterImage(movieDetailModel:any){
    return this.http.post(`${this.baseUrl}/api/movieDetails`,movieDetailModel)
  }
  updatePosterImage(movieDetailModel:any){
    return this.http.put(`${this.baseUrl}/api/movieDetails`,movieDetailModel)
  }
}
