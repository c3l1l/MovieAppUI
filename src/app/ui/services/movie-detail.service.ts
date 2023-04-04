import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieDetailService {


  constructor(private http:HttpClient,@Inject('BASE_API_URL') private baseUrl:string) { }

  getByMovieId(movieId:number){
      return this.http.get(`${this.baseUrl}/api/MovieDetails/GetByMovieId/`+movieId)
  }

}
