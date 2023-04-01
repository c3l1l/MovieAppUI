import { Component } from '@angular/core';
import { MovieModel } from '../models/movie-model';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent  {

  moviesList:MovieModel[]=[];
  constructor(private movieService:MovieService){
    
  }
  ngOnInit(){
this.getMovieList();
  }

  getMovieList(){
    this.movieService.getAllMoviesWithActorsAndDirector().subscribe((res:any)=>{
      this.moviesList=res.data;
      console.log(res.data);
    })
  }
  
  delete(id?:number){
    alert("movieId:"+id);
  }
}
