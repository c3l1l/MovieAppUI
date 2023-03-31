import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private http:HttpClient,@Inject('BASE_API_URL') private baseUrl:string) { }

  getAll(){
      return this.http.get(`${this.baseUrl}/api/genres`);
  }
  getGenreWithMovies(id:number){
     return this.http.get(`${this.baseUrl}/api/Genres/GetGenresWithFilms/${id}`);
  }
 


}
