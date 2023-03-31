import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

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
}
