import { Component } from '@angular/core';
import { MovieInfoModel } from '../models/movie-info-model';
import { MovieModel } from '../models/movie-model';
import { MovieService } from '../services/movie.service';
import { MovieDetailService } from '../services/movie-detail.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  movieInfoList:MovieInfoModel[]=[];
  constructor(private movieService:MovieService,private movieDetailService:MovieDetailService){}

  ngOnInit(){
    this.getAllMoviesWithActorsAndDirector();
  }

  getAllMoviesWithActorsAndDirector(){
    this.movieService.getAllMoviesWithActorsAndDirector().subscribe((res:any)=>{
      this.movieInfoList=res.data
     // console.log(res);
      this.getAllMoviePosterPath();
    })
  }
  getAllMoviePosterPath(){
    this.movieInfoList.forEach(m => {
      this.movieDetailService.getByMovieId(Number(m.id)).subscribe((res:any)=>{
         m.posterPath= res.data.posterPath;
       })
    });
  }


}
