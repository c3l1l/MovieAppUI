import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MovieModel } from '../models/movie-model';
import { ErrorService } from '../services/error.service';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent  {

  moviesList:MovieModel[]=[];
  constructor(private movieService:MovieService,private errorService:ErrorService,private router:Router){

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
   this.movieService.delete(id).subscribe((res)=>{
    this.getMovieList();
   },(err)=>this.errorService.errorHandler(err))
  }
}
