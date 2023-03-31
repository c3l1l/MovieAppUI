import { Component } from '@angular/core';
import { MovieInfoModel } from '../models/movie-info-model';
import { MovieModel } from '../models/movie-model';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  movieInfoList:MovieInfoModel[]=[];
  constructor(private movieService:MovieService){}

  ngOnInit(){
    this.getAllMoviesWithActorsAndDirector();
  }

  getAllMoviesWithActorsAndDirector(){
    this.movieService.getAllMoviesWithActorsAndDirector().subscribe((res:any)=>{
      this.movieInfoList=res.data
      console.log(res);
    })
  }

}
